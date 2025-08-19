# Gating Rules (No Regressions, Additive Only)

After you apply diffs, you MUST run the gate task:

- On Windows: run the VS Code task `gate: all checks` (or `pwsh -File scripts/gate.ps1`).
- On macOS/Linux: run `bash scripts/gate.sh`.

If the gate fails (tests, linters, security, or API checks), you MUST iterate and fix until exit code is 0.

Hard rules:
- Never delete or rename public functions/classes without an explicit, justified migration plan and updated API report (TS) / passing Griffe diff (Py) / passing semver checks (Rust/Go).
- Prefer strictly additive edits; preserve backward compatibility.
- Before declaring “done”, summarize: files changed + confirm “no public symbols removed.”
