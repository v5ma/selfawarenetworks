#!/usr/bin/env python3
"""
Purpose: Fail CI if functions or headings were removed (API/TOC guard for prose+code).
- For Markdown: ensures no top-level headings (## ...) disappear between base and PR.
- For Python: ensures no def/class names disappear.

Usage (CI):
  python scripts/check_no_function_deletions.py

Requires: Git is available; runs in GitHub Actions checkout.
"""
from __future__ import annotations
import os
import re
import subprocess
from typing import Set, Tuple

REPO_ROOT = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(REPO_ROOT)


def run(cmd: list[str]) -> str:
    out = subprocess.check_output(cmd, text=True, cwd=REPO_ROOT)
    return out


def get_merge_base() -> str:
    # In Actions, GITHUB_BASE_REF is set on PRs; fallback to origin/main
    base_ref = os.getenv("GITHUB_BASE_REF") or "origin/main"
    return run(["git", "merge-base", base_ref, "HEAD"]).strip()


def list_changed_paths(base: str) -> list[str]:
    out = run(["git", "diff", "--name-only", f"{base}..HEAD"])
    return [l.strip() for l in out.splitlines() if l.strip()]


MD_H1_H2 = re.compile(r"^(#{1,2})\s+(.+?)\s*$")
PY_DEF = re.compile(r"^\s*def\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(")
PY_CLASS = re.compile(r"^\s*class\s+([A-Za-z_][A-Za-z0-9_]*)\s*[:\(]")


def md_symbols(text: str) -> Set[str]:
    syms = set()
    for line in text.splitlines():
        m = MD_H1_H2.match(line)
        if m:
            # record headings without hashes
            syms.add(m.group(2).strip())
    return syms


def py_symbols(text: str) -> Set[str]:
    syms = set()
    for line in text.splitlines():
        m1 = PY_DEF.match(line)
        if m1:
            syms.add(f"def:{m1.group(1)}")
            continue
        m2 = PY_CLASS.match(line)
        if m2:
            syms.add(f"class:{m2.group(1)}")
    return syms


def read_at_rev(path: str, rev: str) -> str:
    try:
        return run(["git", "show", f"{rev}:{path}"])
    except subprocess.CalledProcessError:
        return ""


def main() -> int:
    base = get_merge_base()
    changed = list_changed_paths(base)
    removed: list[Tuple[str, Set[str]]] = []

    for path in changed:
        if path.endswith(".md"):
            old = read_at_rev(path, base)
            new = read_at_rev(path, "HEAD")
            if not old or not new:
                continue
            lost = md_symbols(old) - md_symbols(new)
            if lost:
                removed.append((path, lost))
        elif path.endswith(".py"):
            old = read_at_rev(path, base)
            new = read_at_rev(path, "HEAD")
            if not old or not new:
                continue
            lost = py_symbols(old) - py_symbols(new)
            if lost:
                removed.append((path, lost))

    if removed:
        print("ERROR: The following files lost public symbols/headings:")
        for path, syms in removed:
            print(f" - {path} -> removed: {sorted(syms)}")
        print("\nPlease re-add or mark intentional removals and update references.")
        return 1

    print("OK: No removed headings or Python symbols detected.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
