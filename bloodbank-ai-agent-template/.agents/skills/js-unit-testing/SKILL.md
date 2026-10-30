---
name: js-unit-testing
description: "Use when asked to write or run unit tests, or when changing a function under js/. Test the current behavior honestly; never change implementation or weaken tests merely to make a test pass."
---

**Never change implementation or weaken tests merely to make a test pass.**

- [ ] Human asked to write/run tests or change function under `js/` → **No → stop**
- [ ] Read `AGENTS.md`, `docs/state.md`, `docs/hard-rules.md`, `docs/testing.md` → **No → back to 1**
- [ ] Inspect relevant JavaScript function, its callers, and existing test setup → **No → back to 1**
- [ ] Use existing test runner and conventions; do not add dependencies without asking → **No → back to 2**
- [ ] For test requests: exercise code as it exists; do not change app code → **No → back to 3**
- [ ] For function changes: implement only requested behavior; do not alter to satisfy tests → **No → back to 3**
- [ ] Run focused test first → **No → back to 4**
- [ ] Run project test commands from `docs/testing.md` → **No → back to 5**
- [ ] Report exact results; distinguish test failure from test-runner/environment issues → **Done**
