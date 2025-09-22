# Data Models & Storage

The project uses Appwrite for both authentication and data storage.

## Database and tables
- Database ID/name: `EarlyToCode` (see `models/name.ts`)
- Tables:
  - `users`
  - `sessions`

Tables are created automatically on first request via `middleware.ts` -> `getOrCreateDatabase()`.

## users table
Columns (created in `models/server/user.table.ts`):
- userId: string (required) – Appwrite auth user $id
- name: string (optional)
- email: string (required)
- role: enum [student, teacher, admin] (optional, default student)
- createdAt: datetime (optional)
- updatedAt: datetime (optional)

## sessions table
Columns (created in `models/server/sessions.table.ts`):
- teacherId: string (required)
- studentId: string (required)
- callId: string (required) – Stream Video call identifier
- startTime: datetime (required)
- endTime: datetime (optional)
- status: enum [scheduled, active, completed, cancelled] (required, default scheduled)
- createdAt: datetime (required)
- updatedAt: datetime (required)

## Relationships
- sessions.teacherId -> users.userId
- sessions.studentId -> users.userId

## Lifecycle
- On signup, a user document is created in `users` via client (`useAuthStore`)
- Admin can schedule a session; API creates a Stream call and persists a `sessions` row
- Stream client tokens are generated per user on demand
