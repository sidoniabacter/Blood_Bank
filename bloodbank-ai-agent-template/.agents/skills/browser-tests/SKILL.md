---
name: browser-tests
description: "Write and run Playwright tests for a feature spec in docs/specs/. Use when asked to test a feature, verify that it works, or check a spec's browser behaviors."
---

**A failing test is reported, never rewritten to pass.**

- [ ] Human asked to test feature, verify it works, or check spec behavior → **No → stop**
- [ ] Read `AGENTS.md`, `docs/state.md`, `docs/testing.md` → **No → back to 1**
- [ ] Identify target spec in `docs/specs/` (ask human if ambiguous) → **No → back to 1**
- [ ] Read relevant application files, existing tests, and test configuration → **No → back to 2**
- [ ] For each Behavior bullet, write exactly one Playwright test() → **No → back to 3**
- [ ] Run focused test file first (e.g., `npx playwright test tests/<feature>.spec.js`) → **No → back to 4**
- [ ] Run project test command from `docs/testing.md` → **No → back to 5**
- [ ] Run repository check if required by `docs/testing.md` (e.g., `bin\check.cmd`) → **No → back to 6**
- [ ] Report actual commands, results, and any failing behavior; do not change app code or weaken tests → **Done**
