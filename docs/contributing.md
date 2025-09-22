# Contributing Guide

## Branching
- Default branch: `development`
- Feature branches: `feat/<short-name>`
- Fix branches: `fix/<short-name>`

## Scripts
- `npm run dev` – start dev server (Turbopack)
- `npm run build` – build for prod
- `npm run start` – start prod server
- `npm run lint` – run ESLint
- `npm run seed:users` – seed Appwrite users (requires server environment)

## Linting & types
- ESLint config: `eslint.config.mjs`
- TS config: `tsconfig.json` (strict)

## PR checklist
- Unit/integration tested where applicable
- No secrets committed; use `.env.local`
- Updated docs if public behavior changed
- Screenshots/GIFs for UI changes

## Coding conventions
- Keep components small; colocate logic and styles
- Prefer idiomatic React with hooks
- Handle loading/error states
