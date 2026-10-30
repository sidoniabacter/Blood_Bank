# Conventions

How code is written and committed here. Read this before writing code or
making a commit.

## Language

Code, comments, commit messages and the files in docs/ are written in English.

## Code style

TODO: the formatter and linter used, and the few rules they do not cover.

- Use consistent indentation (2 or 4 spaces, pick one and stick to it)
- Use semicolons at the end of JavaScript statements
- Keep lines under 80 characters for readability
- Use descriptive variable and function names

## Branches

TODO: for example main is always working; one branch per task, named feature/<short-name>.

- `main` – production-ready code
- `feature/<name>` – for new features (e.g., feature/login-validation)
- `fix/<name>` – for bug fixes (e.g., fix/password-toggle)
- Delete branches after merging to main

## Commit messages

TODO: for example one line in the imperative, under 72 characters: "Add login form validation".

- Use imperative mood: "Add feature" not "Added feature"
- Keep under 72 characters for the subject line
- Separate subject from body with a blank line if body is needed
- Reference issues or tickets if applicable

## Agent Skills

All workspace skills in `.agents/skills/` must follow these specifications:

1. **Start with irreversible rule**: First line after YAML frontmatter must be a bold guard stating what cannot go wrong (e.g., "Never write to docs/ai-log.md")
2. **Focus on agent-unknown**: Include only order, pitfalls, and project file references – not specification restatements
3. **Checklist with backward paths**: Every checklist item must have `→ **No → back to X**` or `→ **No → stop**`; final item is `→ **Done**`
4. **Under 500 lines**: Keep skills concise; long examples/templates go in separate files linked from the skill
5. **Guards as tools**: Must-hold rules must be actionable guards, not mere sentences
