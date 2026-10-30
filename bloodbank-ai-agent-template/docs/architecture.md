# Architecture

How the main parts connect. Read this before adding a module or changing how
parts talk to each other. Describe the shape, not every file.

## Parts

TODO: one line per part: what it is responsible for.

- **Pages**: Root HTML files (login.html, home.html) – user-facing entry points
- **Styles**: css/ directory – CSS files (login.css)
- **Scripts**: js/ directory – JavaScript files (login.js)
- **Tests**: tests/ directory – Playwright browser tests
- **Documentation**: docs/ directory – Project knowledge and specifications
- **Agent Skills**: .agents/skills/ directory – AI agent workspace skills

## How they connect

TODO: who calls whom, and through what (HTTP, a function call, a queue, a file).

- Pages reference CSS and JS directly via `<link>` and `<script>` tags
- No build step, server, or framework – open HTML files directly in browser
- JS handles client-side validation and navigation
- Tests run via Playwright against the static HTML files

## Data

TODO: where data lives and who is allowed to change it.

- All data is client-side only (demo credentials in login.js)
- No server, database, or persistent storage

## What does not belong here

How to start the project (docs/dev-environment.md) and why a choice was made
(docs/decisions.md).
