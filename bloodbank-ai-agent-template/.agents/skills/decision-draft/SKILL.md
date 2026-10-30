---
name: decision-draft
description: "Use when asked to draft, prepare, or provide an entry for docs/decisions.md. Read its examples for the project's format, but never edit the file; give the draft in chat."
---

**Never write to, edit, or otherwise modify `docs/decisions.md`.**

- [ ] Human asked for decision entry or decision was made during task → **No → stop**
- [ ] Read `docs/decisions.md` for current format and examples → **No → back to 1**
- [ ] Draft entry with all three required fields → **No → back to 1**
  - [ ] Decision: what was decided, in one sentence → **No → back to 1**
  - [ ] Why: the reason, and what it costs → **No → back to 1**
  - [ ] Rejected: alternatives considered and why they lost → **No → back to 1**
- [ ] Mark unknowns for human completion instead of guessing → **No → back to 2**
- [ ] Place entry at top (newest first) per `docs/decisions.md` convention → **No → back to 3**
- [ ] Present draft in chat only → **Done**
