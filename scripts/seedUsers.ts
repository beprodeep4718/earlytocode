// scripts/seedUsers.ts
import { users, tablesDb, ID } from "@/models/server/config";
import { db, usersTable } from "@/models/name";

export async function seedUsers() {
  const testUsers = [
    {
      email: "admin@app.com",
      password: "password123",
      name: "Admin User",
      role: "admin",
    },
    {
      email: "john@app.com",
      password: "password123",
      name: "John Doe",
      role: "student",
    },
    {
      email: "jane@app.com",
      password: "password123",
      name: "Jane Doe",
      role: "teacher",
    },
  ];

  for (const u of testUsers) {
    try {
      // 1️⃣ Create user in Appwrite authentication
      const createdUser = await users.create({
        userId: ID.unique(),
        email: u.email,
        phone: undefined, // phone
        password: u.password,
        name: u.name,
      });

      console.log(`✅ Created auth user: ${u.email}`);

      // 2️⃣ Add to "users" table with role
      await tablesDb.createRow({
        databaseId: db,
        tableId: usersTable,
        rowId: ID.unique(),
        data: {
          userId: createdUser.$id,
          email: createdUser.email,
          name: createdUser.name,
          role: u.role,
        },
      });

      console.log(
        `✅ Added ${u.email} to users collection with role=${u.role}`
      );
    } catch (error) {
      console.error(`⚠️ Failed to create ${u.email}:`, error);
    }
  }
}

