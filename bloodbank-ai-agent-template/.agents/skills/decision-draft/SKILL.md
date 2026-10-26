---
name: decision-draft
description: "Use when asked to draft, prepare, or provide an entry for docs/decisions.md. Read its examples for the project's format, but never edit the file; give the draft in chat."
---

# Decision Draft

Help the human keep their own account of project decisions in `docs/decisions.md`. Read the log for its format and examples, but never write to, edit, or otherwise modify that file. Provide a ready-to-review entry in chat.

## Procedure

1. When the human asks for a decision entry or after a decision is made during a task, read `docs/decisions.md` to follow its current template and examples. Use the conversation and task results as evidence.
2. Draft one entry in the format shown in the log:

   ```markdown
   ## YYYY-MM-DD: short title
   Decision: what was decided, in one sentence.
   Why: the reason, and what it costs.
   Rejected: the alternatives considered and why they lost.
   ```

3. Follow these content rules:
   - **Decision:** state the choice in one clear sentence.
   - **Why:** explain the rationale and explicitly note any trade-offs or costs.
   - **Rejected:** list alternatives that were considered and briefly explain why each was rejected.
4. If any details are unknown or ambiguous, mark them for the human to complete instead of guessing. Keep the entry specific, concise, and consistent with the existing examples.
5. Place the entry at the top (newest first) as per `docs/decisions.md` convention.
6. Present the draft in chat for the human to copy or revise. Never use tools to insert it into `docs/decisions.md`, and do not claim that the file was updated.
