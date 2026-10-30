---
name: plan-feature
description: "Require a human-approved plan before making code changes. Use when asked to implement a feature, fix a bug, refactor, or otherwise change a codebase."
---

**Show the plan and stop: no code until the human approves it.**

- [ ] Human asked to implement feature, fix bug, refactor, or change codebase → **No → stop**
- [ ] Inspect relevant instructions and files using read-only operations → **No → back to 1**
- [ ] If significant requirement or design choice unclear, ask human before proposing plan → **No → back to 1**
- [ ] Present concise plan identifying changes, key steps, verification, assumptions, and risks → **No → back to 2**
- [ ] Stop and wait for explicit human approval → **No → back to 3**
- [ ] After approval, implement within presented scope → **Done**
- [ ] If new findings require material change in scope or approach, present revised plan and wait again → **No → back to 4**
