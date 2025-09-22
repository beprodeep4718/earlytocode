# Setup & Environment

This guide helps you run the app locally and configure external services.

## Prerequisites
- Node.js 20+ and npm 10+
- Appwrite project (self-hosted or cloud)
- Stream Video API key + secret

## Environment variables
Create `.env.local` at the project root using the template in `.env.example`.

Required variables:
- NEXT_PUBLIC_APPWRITE_ENDPOINT
- NEXT_PUBLIC_APPWRITE_PROJECT_ID
- APPWRITE_API_KEY
- NEXT_PUBLIC_STREAM_API_KEY
- STREAM_API_SECRET

Refer to `.env.example` for comments and expected formats.

## Install & run
- Install deps: `npm ci`
- Dev server: `npm run dev`
- Prod build: `npm run build`; then `npm start`

Visit http://localhost:3000.

## First-run database setup
On first request, `middleware.ts` triggers `getOrCreateDatabase()` which:
- Verifies/creates database `EarlyToCode`
- Creates tables `users` and `sessions` with required columns

You can optionally seed users (admin/teacher/student) by invoking the `seedUsers` function from a custom script or console (it's imported in middleware but not executed by default).

## Services configuration

### Appwrite (Auth + Data)
- Create a project and get the endpoint and project id
- Create an API Key with permissions to manage users and TablesDB
- The app uses Appwrite both on client (auth) and server (TablesDB)

Client SDK (browser): `appwrite`
- Account/OAuth used for login and sessions
- Databases used to store user profile documents (mirrors auth users)

Server SDK (Node): `node-appwrite`
- Users used to create seed users
- TablesDB used to create tables and rows (sessions, users)

### Stream (Video)
- Get API key and secret
- Server generates user tokens at `GET /api/stream-token?userId=...`
- Client initializes `StreamVideoClient` with `tokenProvider`

## Troubleshooting
- 401/403 from Appwrite: Check APPWRITE_API_KEY scopes and project id
- Missing env errors on boot: ensure `.env.local` exists and values are correct
- Stream token issues: verify `NEXT_PUBLIC_STREAM_API_KEY` and `STREAM_API_SECRET`, and that your user id matches the authenticated user
- Tables not found: hit any page once to allow middleware to create DB/tables, or call `getOrCreateDatabase()` manually
