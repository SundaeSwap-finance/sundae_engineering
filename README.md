# Sundae Engineering Site

This repo packages the existing `sundae_engineering.js` concept into a runnable React site using Vite and Tailwind CSS.

## Quick start

```bash
bun install
bun run dev
```

Local dev server runs on `http://localhost:4317`.

## Build

```bash
bun run build
bun run preview
```

Preview server runs on `http://localhost:4318`.

## Project structure

- `src/SundaeSite.jsx`: main page component migrated from the original JS file
- `src/main.jsx`: app entry point
- `src/index.css`: Tailwind directives + base styling
- `public/sundae-logo.svg`: local logo asset
