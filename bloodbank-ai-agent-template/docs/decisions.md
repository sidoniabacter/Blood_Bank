# Decisions

Why things are the way they are. Read this before reopening a decision.
Newest first. One entry per decision; do not rewrite old entries, add a new
one that replaces them.

## Entry format

```
## YYYY-MM-DD: short title
Decision: what was decided, in one sentence.
Why: the reason, and what it costs.
Rejected: the alternatives considered and why they lost.
```

## Entries

## 2026-10-17: Demo credential visibility

Decision: Provide controls to reveal and hide the demo credentials and password.
Why: This keeps the demo details out of view until requested; it does not make the public demo credentials secure.
Rejected: No alternatives were recorded.

## 2026-10-22: Browser tests

Decision: Use the existing Playwright dependency to test the login and home-page behavior.
Why: It automates the documented checks without adding a dependency or requiring a server.
Rejected: A manual-only checklist; automated tests catch regressions more consistently.

## 2026-10-26: Decision Draft skill

Decision: Create the decision-draft skill at `.agents/skills/decision-draft/SKILL.md` with proper YAML frontmatter and procedure matching the project's decisions.md format.

Why: Enables drafting decision entries in chat following the project's format, while never editing `docs/decisions.md` directly. Requested by human, verified file exists and follows pattern.

Rejected: No alternatives were recorded.

## 2025-01-17: Skills specification compliance

Decision: Update all 7 workspace skills to fully comply with the 5 project specifications (guard-first, agent-unknown focus, backward-path checklists, under 500 lines, guards as tools).

Why: Ensures consistent, verifiable agent behavior across all tasks; the previous skills lacked guards at start, checklists with backward paths, and had some missing the guard-as-tool pattern, creating ambiguity and potential for misinterpretation. The cost was the time to rewrite all 7 skills.

Rejected:

- Leave skills as-is: would perpetuate non-compliance and inconsistent agent behavior.
- Update only some skills: would create a mixed environment where some tasks follow specs and others don't, leading to confusion.
