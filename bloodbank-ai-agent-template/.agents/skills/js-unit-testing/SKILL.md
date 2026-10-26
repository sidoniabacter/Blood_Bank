---
name: js-unit-testing
description: "Use when asked to write or run unit tests, or when changing a function under js/. Test the current behavior honestly; never change implementation or weaken tests merely to make a test pass."
---

# JavaScript Unit Testing

Test JavaScript behavior against the user's request and the project's existing
contracts. A passing test must provide trustworthy evidence; do not manipulate
the implementation or the test to manufacture a green result.

## Procedure

1. Read `AGENTS.md`, `docs/state.md`, `docs/hard-rules.md`, and
   `docs/testing.md`. Inspect the relevant JavaScript function, its callers,
   and the existing test setup before deciding how to test it.
2. Use the repository's existing test runner and conventions. Do not add a
   dependency or introduce a new test framework without asking first.
3. For a request to write or run tests, exercise the code as it exists. Add or
   run tests only; do not change application code to make those tests pass.
   Base expectations on the user's requirements, existing specification, and
   observable contract, not on guesses about intended behavior.
4. If a test fails, report the failing behavior and relevant evidence. Do not
   weaken, delete, skip, or rewrite a valid test to hide the failure. If the
   test expectation or requirement is ambiguous, explain the ambiguity and ask
   before changing it.
5. If the user explicitly asks to change a function under `js/`, implement
   only the requested behavior. Tests may be added or run to verify that
   request, but do not alter the implementation merely to satisfy a test that
   conflicts with the request or established behavior. Report conflicts rather
   than disguising them.
6. Run the focused test first, then the project-required test/check commands
   in `docs/testing.md`. Report exactly what passed, failed, or could not be
   run. Do not claim behavior was verified by hand unless it was.

## Completion

Summarize the tests run and their results. Clearly distinguish a test failure
from a test-runner or environment problem, and state any behavior that remains
unverified.
