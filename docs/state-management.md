# State Management

## Auth store (Zustand)
File: `store/auth.store.ts`

Responsibilities:
- Manage authenticated Appwrite user and derived userProfile document
- Actions: register, login, logout, fetchUser, loginWithOAuth
- On first fetch, ensures a matching user document exists in `users`

Usage:
- `useAuthStore((s) => s.user)` to access current user
- `useAuthStore.getState().fetchUser()` to refresh from anywhere (avoid overuse)

## Stream Video client provider
File: `providers/StreamVideoClientProvider.tsx`

- Initializes `StreamVideoClient` when a user is authenticated
- Uses `tokenProvider` to fetch a user token from `/api/stream-token`
- Cleans up client on logout or user change

## Hooks
- `hooks/useGetCallById.ts` queries Stream for an existing call by id
