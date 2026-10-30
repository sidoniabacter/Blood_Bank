---
name: deploy-pages
description: "Commit and push the intended site changes to main, then open and check the live GitHub Pages site. Use only when the user explicitly invokes /deploy-pages."
argument-hint: "[optional deployment target or live URL]"
user-invocable: true
disable-model-invocation: true
---

**Run only after explicit `/deploy-pages` invocation. Never commit or push without safe separation of changes.**

- [ ] User explicitly invoked `/deploy-pages` → **No → stop**
- [ ] Read `AGENTS.md`, `docs/state.md`, `docs/hard-rules.md`, `docs/workflow.md`, `docs/testing.md`, `docs/conventions.md` → **No → back to 1**
- [ ] Inspect Git status, diff, current branch, remote, and Pages/deployment configuration → **No → back to 1**
- [ ] Establish deployment target and published URL from repo config or user input → **No → back to 1**
- [ ] Identify exactly which changes belong to this deployment; never include unrelated work → **No → back to 3**
- [ ] Confirm current branch is `main` → **No → back to 3**
- [ ] Run checks from `docs/testing.md` and inspect final diff → **No → back to 4**
- [ ] Stage only intended files, create commit using `docs/conventions.md`, push `main` to remote → **No → back to 5**
- [ ] Wait for Pages deployment to complete using repo's deployment status → **No → back to 6**
- [ ] Open confirmed live URL in browser, verify page loads and relevant behavior works → **No → back to 7**
- [ ] Report commit, push, deployment status, URL checked, and browser verification → **Done**
