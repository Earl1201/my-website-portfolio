# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (Vite HMR)
npm run build      # Build to dist/
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run deploy     # Build + deploy to GitHub Pages via gh-pages
```

## Architecture

Single-page React portfolio deployed to GitHub Pages at `https://earl1201.github.io/my-website-portfolio/`.

**Entry point**: `index.html` → `src/main.jsx` → `src/App.jsx`

**Key architectural decisions:**

- The entire site lives in one component: `src/App.jsx`. There is no routing or component decomposition.
- All styles are defined as inline JavaScript objects in a single `S` object at the top of `App.jsx`. There are no CSS utility classes or CSS modules — add new styles to that object, not to `App.css` or `index.css`.
- The contact form uses [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`) with credentials stored directly in `App.jsx` (service ID `service_gtshhgc`, template ID `template_n19pzpb`). These are public-facing EmailJS IDs, not secret keys.
- Vite base path is set to `/my-website-portfolio/` in `vite.config.js` — required for GitHub Pages subdirectory routing. Do not change this.

## Code Style Rules

- Use descriptive variable names
- Keep components focused — one responsibility per file
- Use the existing custom Tailwind tokens (`primary`, `accent`) not raw colors
- Follow existing patterns in nearby files before inventing new ones

## Important Rules

- NEVER hardcode credentials or API keys — use .env variables
- JWT is stored as `nh_token` and `nh_user` in localStorage — don't change these keys
- Always run `npm run lint` before finishing any task
- Test both frontend (:5173) and backend (:5000) are running before debugging API issues

## Deployment

`npm run deploy` runs `predeploy` (build) then pushes `dist/` to the `gh-pages` branch via the `gh-pages` CLI. The site is live within ~1 minute of deployment.
