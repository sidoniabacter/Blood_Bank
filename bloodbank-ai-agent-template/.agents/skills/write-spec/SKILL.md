---
name: write-spec
description: "This skill guides the creation of a feature specification at a user-provided path in docs/specs, following docs/specs/TEMPLATE.md and resolving unclear requirements with the user. Use when a user asks to write or draft a feature specification. Without it, specifications can drift from the project template, leave important behavior ambiguous, or lead to implementation before requirements are agreed."
---

**Write no code in this task.**

- [ ] Identify the feature and requested destination path under `docs/specs/` → **No → stop**
- [ ] Read `docs/specs/TEMPLATE.md` → **No → back to 1**
- [ ] Use its four sections: Goal, Out of scope, Behavior, and Done when → **No → back to 1**
- [ ] Ask user about unclear requirements; do not invent behavior or silently resolve ambiguity → **No → back to 2**
- [ ] Write specification at requested path with browser-checkable behavior statements → **No → back to 3**
- [ ] Include clear out-of-scope section → **No → back to 4**
- [ ] Keep task limited to specification file; do not implement feature or change other files → **Done**
