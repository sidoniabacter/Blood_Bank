---
name: deploy-pages
description: "Commit and push the intended site changes to main, then open and check the live GitHub Pages site. Use only when the user explicitly invokes /deploy-pages."
argument-hint: "[optional deployment target or live URL]"
user-invocable: true
disable-model-invocation: true
---

# Deploy Pages

Run the repository's configured GitHub Pages deployment workflow, push the
intended changes to `main`, and verify the published site in a browser. This
skill is intentionally slash-only: do not start this workflow for a plain-text
request, mention, or suggestion to deploy.

## Procedure

1. Read `AGENTS.md`, `docs/state.md`, `docs/hard-rules.md`,
   `docs/workflow.md`, `docs/testing.md`, and `docs/conventions.md`. Inspect
   the Git status and diff, current branch and remote, and the repository's
   Pages/deployment configuration. Do not expose credentials or put secrets in
   commands, output, or files.
2. Establish the deployment target and published URL from repository
   configuration, GitHub deployment information, or a URL provided by the
   user. Do not guess the URL or assume Pages is configured. If there is no
   usable remote, deployment configuration, or identifiable live URL, stop
   before committing or pushing and explain what is missing.
3. Identify exactly which changes belong to this deployment. Never include
   unrelated or pre-existing work in the commit. If the intended changes
   cannot be separated safely, or overlap with uncommitted work, stop and ask
   the user how to proceed. Do not discard or overwrite anyone's changes.
4. Confirm the current branch is `main`. If it is not, stop and ask before
   switching branches or moving commits. Never force-push, bypass branch
   protections, or change repository settings.
5. Run the checks required by `docs/testing.md` and inspect the final diff.
   If checks fail, stop without committing or pushing and report the failures.
6. Stage only the intended files, create a commit using
   `docs/conventions.md`, and push `main` to the configured remote. Include the
   required Copilot co-author trailer in the commit message unless the user
   explicitly asks not to. Do not amend existing commits.
7. Wait for the configured Pages deployment to complete using the repository's
   available deployment status. If deployment fails, report the failure and
   do not claim the site is live.
8. Open the confirmed live URL in a browser and check that the page loads and
   the relevant visible behavior works. Follow the feature spec when one
   applies; do not submit real credentials or perform destructive actions.
   Report any browser or deployment failure explicitly.

## Completion

Report the commit and push result, deployment status, URL checked, and what
was verified in the browser. Clearly distinguish completed steps from anything
blocked or unverified. Never report success based only on a successful push.
