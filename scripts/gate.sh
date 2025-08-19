#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

step() { echo -e "\033[36m==> $1\033[0m"; bash -lc "$2"; }

baseRef="$(git merge-base origin/main HEAD 2>/dev/null || echo HEAD~1)"

# ---------- PYTHON ----------
if compgen -G "**/*.py" >/dev/null || [[ -f pyproject.toml ]]; then
  step "Python: Ruff" "ruff check ."
  step "Python: Tests" "pytest -q"
  if [[ -d .benchmarks ]]; then
    step "Python: Perf budget" "pytest --benchmark-only --benchmark-compare=baseline --benchmark-compare-fail=mean:5%"
  fi
  pkg=$(python - <<'PY'
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
)
  if [[ -n "${pkg}" ]]; then
    step "Python: API omissions (Griffe)" "griffe check -s src ${pkg} -b HEAD -a ${baseRef}"
  else
    echo "Skipped Griffe (couldn't infer package name)"
  fi
fi

# ---------- TYPESCRIPT / JAVASCRIPT ----------
if [[ -f package.json ]]; then
  if [[ -f eslint.config.js ]] || compgen -G ".eslintrc.*" >/dev/null; then
    step "JS/TS: ESLint" "npx -y eslint . --max-warnings=0"
  fi
  if grep -q '"test"\s*:' package.json; then
    step "JS/TS: Tests" "npm test --silent"
  fi
  if [[ -f api-extractor.json ]]; then
    step "TS: API Extractor (no API loss)" "npx -y api-extractor run --local"
  fi
fi

# ---------- RUST ----------
if [[ -f Cargo.toml ]]; then
  step "Rust: Tests" "cargo test --locked"
  if command -v cargo-semver-checks >/dev/null; then
    step "Rust: API semver check" "cargo semver-checks --baseline-rev ${baseRef}"
  else
    echo "Tip: cargo install cargo-semver-checks"
  fi
fi

# ---------- GO ----------
if [[ -f go.mod ]]; then
  step "Go: Tests" "go test ./..."
  if command -v gorelease >/dev/null; then
    step "Go: API report" "gorelease -base=${baseRef}"
  else
    echo "Tip: go install golang.org/x/exp/cmd/gorelease@latest"
  fi
fi

echo -e "\033[32m✔ All gates passed.\033[0m"
