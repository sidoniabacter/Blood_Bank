# Development environment

How to start the project. This is the page the agent must find when asked
"how do I start the project?".

Write commands exactly as they are typed. If a command differs on Windows,
give both versions.

## Requirements

TODO: what must be installed, with versions (for example Docker Desktop, Git).

- Web browser (Chrome, Firefox, Edge, Safari)
- Optional: Node.js 18+ with npm (for running `npm test`)

## Start

TODO: the commands that start the project
TODO: the address where it opens (for example http://localhost:5173).

```
Double-click login.html                                        (all OS)
start login.html                                               (Windows CMD)
start .\login.html                                             (Windows PowerShell)
open login.html                                                (macOS Terminal)
xdg-open login.html                                            (Linux Terminal)
```

Opens directly in the browser via `file://` protocol. No server required.
No network address – the app runs from the local filesystem.

## Stop

TODO: the commands that stop it

```
Close the browser tab.
```

## Common problems

TODO: problems that actually happened, each with its fix.

- If tests fail: Ensure Node.js and npm are installed, then run `npm install`
- If CSS/JS doesn't load: Verify `login.css` exists in `/css/` and `login.js` exists in `/js/`, and that paths in login.html are correct
- If page is blank: Check the browser console (F12) for 404 errors on CSS/JS files
