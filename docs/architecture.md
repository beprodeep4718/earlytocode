# Architecture Overview

## App structure
- app/ – Next.js App Router (layouts, pages, API routes)
  - (auth)/sign-in, (auth)/sign-up – public auth pages
  - (root)/ – main site: home, meeting/[id]
  - admin/ – protected admin area with layout and subpages
  - api/ – server routes for users, sessions, stream token
- components/ – UI elements and custom sections
- hooks/ – React hooks (e.g., Stream call fetching)
- models/ – Appwrite configs (client/server) and schema names
- providers/ – React context providers (StreamVideo)
- scripts/ – utilities like user seeding
- store/ – Zustand store for auth

## Routing & layouts
- app/layout.tsx: global HTML, fonts, ThemeProvider, global CSS
- app/(root)/layout.tsx: wraps main UI, loads auth and Stream provider
- app/admin/layout.tsx: renders sidebar/topbar, enforces admin role client-side

## Middleware
`middleware.ts` runs for most requests and ensures the Appwrite database and tables exist by calling `getOrCreateDatabase()`.

## Authentication
- Client uses Appwrite `account` for email/password and OAuth (Google)
- Zustand store (`useAuthStore`) handles: register, login, logout, fetchUser, loginWithOAuth
- On first fetchUser, ensures the user also exists in the `users` table

## Data layer
- Appwrite TablesDB (server SDK) for `users` and `sessions`
- Appwrite Databases (client SDK) stores a mirrored user profile document for the logged-in account
- See `models/name.ts` for db/table IDs

## Video layer (Stream)
- Server route issues a short-lived user token: `GET /api/stream-token?userId=...`
- `StreamVideoClientProvider` uses `tokenProvider` to fetch tokens, initializes `StreamVideoClient`
- Meetings are created server-side when scheduling sessions (unique callId per session)

## Admin flow
- Admin layout checks `userProfile.role` and redirects to home if not admin
- Users page calls `/api/users` to list users from TablesDB
- Create session page posts to `/api/sessions/create` to create a Stream call and persist session

## Styling & UI
- Tailwind CSS v4 with CSS variables in `app/globals.css`
- shadcn/ui components in `components/ui`
- Dark mode via `next-themes` provider `ThemeProvider`
