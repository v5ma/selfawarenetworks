# Fail fast
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location (git rev-parse --show-toplevel)

function Step($name, $script) {
  Write-Host "==> $name" -ForegroundColor Cyan
  & powershell -NoProfile -Command $script
}

# Find a sensible baseline (for API diffs)
$baseRef = ""
try {
  $baseRef = (git merge-base origin/main HEAD)
} catch { }
if (-not $baseRef) { $baseRef = "HEAD~1" }

# ---------- PYTHON ----------
$hasPy = (Test-Path "pyproject.toml") -or (Get-ChildItem -Recurse -Filter *.py -ErrorAction SilentlyContinue | Select-Object -First 1)
if ($hasPy) {
  Step "Python: Ruff" 'ruff check .'
  Step "Python: Tests" 'pytest -q'

  if (Test-Path ".benchmarks") {
    Step "Python: Perf budget (pytest-benchmark)" 'pytest --benchmark-only --benchmark-compare=baseline --benchmark-compare-fail=mean:5%'
  }

  $pkg = python - << 'PY'
import os, tomllib
name=""
try:
    if os.path.exists("pyproject.toml"):
        data = tomllib.load(open("pyproject.toml","rb"))
        name=(data.get("project",{}) or {}).get("name") or ""
        name=name.replace("-","_")
except Exception: pass
cands=[]
for root in ("src","."):
    if os.path.isdir(root):
        for d in os.listdir(root):
            p=os.path.join(root,d)
            if os.path.isdir(p) and os.path.isfile(os.path.join(p,"__init__.py")) and d not in {"tests","scripts","venv"}:
                cands.append(d)
if not name and cands: name=cands[0]
print(name)
PY
  if ($pkg) {
    Step "Python: API omissions (Griffe)" "griffe check -s src $pkg -b HEAD -a $baseRef"
  } else {
    Write-Host "Skipped Griffe (couldn't infer package name)" -ForegroundColor Yellow
  }
}

# ---------- TYPESCRIPT / JAVASCRIPT ----------
if (Test-Path "package.json") {
  if (Test-Path "eslint.config.js" -or (Get-ChildItem -Filter ".eslintrc.*" | Select-Object -First 1)) {
    Step "JS/TS: ESLint" 'npx -y eslint . --max-warnings=0'
  }
  if ((Get-Content package.json) -match '"test"\s*:') {
    Step "JS/TS: Tests" 'npm test --silent'
  }
  if (Test-Path "api-extractor.json") {
    Step "TS: API Extractor (no API loss)" 'npx -y api-extractor run --local'
  }
}

# ---------- RUST ----------
if (Test-Path "Cargo.toml") {
  Step "Rust: Tests" 'cargo test --locked'
  if (Get-Command cargo-semver-checks -ErrorAction SilentlyContinue) {
    Step "Rust: API semver check" "cargo semver-checks --baseline-rev $baseRef"
  } else {
    Write-Host "Tip: cargo install cargo-semver-checks" -ForegroundColor Yellow
  }
}

# ---------- GO ----------
if (Test-Path "go.mod") {
  Step "Go: Tests" 'go test ./...'
  if (Get-Command gorelease -ErrorAction SilentlyContinue) {
    Step "Go: API report" "gorelease -base=$baseRef"
  } else {
    Write-Host "Tip: go install golang.org/x/exp/cmd/gorelease@latest" -ForegroundColor Yellow
  }
}

Write-Host "✔ All gates passed." -ForegroundColor Green
