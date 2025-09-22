"use client";
import { useAuthStore, UserProfile } from "@/store/auth.store";
import { useEffect, useState } from "react";



export default function CreateSession() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [teacherId, setTeacherId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");
  const {user} = useAuthStore();

  // Fetch users from your Next.js API
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleCreate = async () => {
    const res = await fetch("/api/sessions/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teacherId, studentId, startTime: scheduledAt, currentUserId: user?.$id }),
    });

    if (res.ok) {
      alert("Session created!");
    } else {
      alert("Failed to create session");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <select value={teacherId} onChange={e => setTeacherId(e.target.value)}>
        <option value="">Select Teacher</option>
        {users
          .filter(user => user.role === "teacher")
          .map(user => (
            <option key={user.$id} value={user.$id}>
              {user.name}
            </option>
          ))}
      </select>

      <select value={studentId} onChange={e => setStudentId(e.target.value)}>
        <option value="">Select Student</option>
        {users
          .filter(user => user.role === "student")
          .map(user => (
            <option key={user.$id} value={user.$id}>
              {user.name}
            </option>
          ))}
      </select>

      <input
        type="datetime-local"
        value={scheduledAt}
        onChange={e => setScheduledAt(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Session
      </button>
    </div>
  );
}
