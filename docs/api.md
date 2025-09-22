# API Reference

All API routes are implemented in the Next.js App Router under `app/api`.

## Auth
Authentication is handled by Appwrite from the client; there are no custom auth routes. Server routes rely on service keys.

## Users
GET `/api/users`
- Returns the list of user rows from TablesDB `users` table (max 100).
- Response: 200 OK `[ { $id, userId, name, email, role, ... } ]`
- Errors: 500 on Appwrite errors

## Stream video token
GET `/api/stream-token?userId={id}`
- Requires query param `userId`
- Generates a Stream Video user token (1h validity)
- Response: 200 OK `{ token: string }`
- Errors: 400 if missing userId, 500 on server errors

## Sessions
POST `/api/sessions/create`
- Body: `{ teacherId: string, studentId: string, startTime: string (ISO), currentUserId: string }`
- Creates a Stream call and saves the session row in TablesDB
- Response: 200 OK `{ success: true, session }`
- Errors: 400 on missing fields, 500 on server errors

## Status codes
- 200: success
- 400: invalid input
- 401/403: forbidden (not currently used; add checks as needed)
- 500: internal server error

## Notes
- Ensure server env vars are configured for Appwrite and Stream.
- Consider adding request auth to admin-only endpoints in the future.
