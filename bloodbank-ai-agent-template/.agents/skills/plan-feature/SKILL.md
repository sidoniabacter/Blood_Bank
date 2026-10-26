---
name: plan-before-code
description: "Require a human-approved plan before making code changes. Use when asked to implement a feature, fix a bug, refactor, or otherwise change a codebase."
---

# Plan Before Code

**Show the plan and stop: no code until the human approves it.**

For implementation requests, present a concrete plan and stop. Do not change
the workspace until the human explicitly approves that plan.

## Procedure

1. Inspect the relevant instructions and files using read-only operations as
   needed to understand the request and prepare an accurate, scoped plan.
2. If a significant requirement or design choice is unclear, ask the human
   before proposing the plan. Do not silently decide ambiguous behavior.
3. Present a concise plan that identifies the intended changes, key steps,
   and how they will be verified. Mention important assumptions or risks.
4. Stop and wait for the human's explicit approval. Do not edit, create, or
   delete workspace files; run commands that modify files; or begin
   implementation or testing before approval.
5. Treat approval as applying only to the presented plan. After approval,
   implement within its scope and validate the result. If new findings require
   a material change in scope or approach, present the revised plan and wait
   for approval again.
6. If the human declines or changes direction, do not proceed with the
   unapproved work.

An initial request to implement something is not approval of a plan that has
not yet been shown. Questions, discussion, and read-only investigation do not
count as approval.

## Scope

Use this workflow for requests to implement features, fix bugs, refactor, or
make other workspace changes as part of a coding task. For questions,
explanations, reviews, or other work that does not modify the workspace, answer
normally unless the human asks for a plan-first workflow.
