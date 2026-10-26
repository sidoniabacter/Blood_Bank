---
name: spec-playwright-tests
description: "Write and run Playwright tests for a feature spec in docs/specs/. Use when asked to test a feature, verify that it works, or check a spec's browser behaviors."
---

**A failing test is reported, never rewritten to pass.**

# Spec Playwright Tests

Create and run browser tests that verify a feature against its agreed spec.
Treat the spec as the source of expected behavior; a failing test is evidence
of a problem, not a reason to weaken the test.

## Procedure

1. Read `AGENTS.md`, `docs/state.md`, and `docs/testing.md`. Read the target
   spec in `docs/specs/`. If the user has not identified a spec and more than
   one could apply, ask which one to test.
2. Read the relevant application files, existing tests, and test configuration
   before editing. Follow the existing Playwright conventions and use the
   project's existing test dependencies and commands.
3. Treat each bullet under the spec's `## Behavior` section as one behavior,
   even if the text wraps across multiple Markdown lines. Write exactly one
   distinct Playwright `test()` for each behavior bullet. Give each test a
   descriptive name and cover all conditions and outcomes stated by that
   behavior.
4. Add tests in the existing test location, using the feature's name for the
   test file where that matches project conventions. Prefer user-observable
   outcomes and accessible locators. Do not invent requirements beyond the
   spec.
5. Run the focused test file first (for example,
   `npx playwright test tests/<feature>.spec.js`), then run the documented
   project test command from `docs/testing.md`. Run the repository check too
   when that document requires it; use `bin\check.cmd` on Windows when
   specified. Report the actual commands and results.
6. When asked to verify that the feature works, try the relevant behavior by
   hand as required by `docs/testing.md`. If that is not possible, say so and
   limit the conclusion to the automated test results.
7. Report any failing behavior clearly, linking it to the spec bullet and test.
   Do not change application code unless the user also requested implementation
   or fixes. Do not edit a spec or weaken, remove, skip, or rewrite a test just
   to make a broken feature pass. If a test itself appears incorrect or the
   spec is ambiguous, explain the evidence and ask before changing expectations.

## Completion

Summarize the behavior-to-test coverage, test and check results, and any
unverified or failing behavior. Do not claim full verification unless the
required repository check passed and behavior was tried by hand, as described
in `docs/testing.md`.
