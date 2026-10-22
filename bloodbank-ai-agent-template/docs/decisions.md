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
