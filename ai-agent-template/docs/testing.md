# Testing

How to check that something works. Read this before saying that it does.

## The quick check

```
bin/check          macOS, Linux, Git Bash
bin\check.cmd      Windows (cmd or PowerShell)
```

Out of the box, bin/check verifies the agent configuration: AGENTS.md has no
TODO left and stays short, every document in docs/ has its line in AGENTS.md
and every line points to a file that exists, CLAUDE.md and
.github/copilot-instructions.md point to AGENTS.md instead of copying it.

When the project has code, add its own checks (lint, tests) at the marked
place at the end of bin/check, so one command still answers "is it green?".

## Rules

- "Done" is said only after bin/check is green and the behaviour was tried by hand.
- A failing test is reported, not removed or rewritten to pass.

## Project tests

There is no automated browser test runner. To check the login prototype:

1. Open `login.html` directly in a browser.
2. Confirm **Login** is disabled while either field is empty and becomes
   enabled when both fields contain text.
3. Enter a malformed e-mail address and a password, submit, and confirm an
   e-mail validation message appears next to the e-mail field.
4. Enter a valid-formatted but incorrect e-mail or password, submit, and
   confirm a general error appears without leaving the page.
5. Sign in with `donor@bloodbank.test` and `GiveLife2026`; confirm `home.html`
   opens.
6. After an error appears, edit either field and confirm the error clears.
7. Confirm the demo credentials are hidden initially, **Show demo account**
   reveals them, and **Hide demo account** hides them again.
8. Enter a password and toggle **Show password** / **Hide password**; confirm
   the value stays unchanged and its visibility toggles.

The credentials are public demo values checked in client-side JavaScript, not
real authentication.
