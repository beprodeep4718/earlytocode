# earlytocode – Team Docs

Welcome to the team docs for the EarlyToCode project. This site gives you everything you need to set up, develop, and operate the app.

- Tech stack: Next.js App Router (v15), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Zustand, Appwrite (auth + data), Stream Video SDK
- Domains: Auth, Admin, Users, 1:1 video sessions

Quick links:
- Setup & environment: ./setup.md
- Architecture overview: ./architecture.md
- API reference: ./api.md
- Data models & storage: ./data-models.md
- State management: ./state-management.md
- Components overview: ./components.md
- Contributing: ./contributing.md

## High-level features
- Email/password and OAuth (Google) authentication using Appwrite
- Admin area to view users and create scheduled video sessions
- Stream Video integration with secure server-generated tokens
- Modern UI components (shadcn/ui + Tailwind CSS) and dark mode support

## Local development quickstart
1) Copy .env.example to .env.local and fill values
2) Install dependencies: npm ci
3) Run: npm run dev
4) Visit http://localhost:3000

See ./setup.md for full details and troubleshooting.