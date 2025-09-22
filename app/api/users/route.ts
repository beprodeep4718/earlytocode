import { db, usersTable } from "@/models/name";
import { tablesDb } from "@/models/server/config";
import { NextResponse } from "next/server";
import { Query } from "node-appwrite";

export async function GET() {
  try {
    // Appwrite Users API returns an object: { total: number, users: User[] }
    const usersList = await tablesDb.listRows({
      databaseId: db,
      tableId: usersTable,
      queries: [
        Query.limit(100), // ✅ increase limit to 100
      ],
    });

    return NextResponse.json(usersList.rows); // ✅ return only the users array
  } catch (error) {
    console.error("Error fetching users:", error);

    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
