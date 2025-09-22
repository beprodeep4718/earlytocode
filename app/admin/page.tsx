import React from "react";

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Admin Dashboard</h1>
      <p className="text-sm text-gray-600 max-w-prose">
        Quick overview coming soon. Use the sidebar to manage users, events and payments.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-medium mb-1">Users</p>
          <p className="text-lg font-semibold">—</p>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-medium mb-1">Upcoming Sessions</p>
          <p className="text-lg font-semibold">—</p>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-medium mb-1">Pending Payments</p>
          <p className="text-lg font-semibold">—</p>
        </div>
      </div>
    </div>
  );
}
