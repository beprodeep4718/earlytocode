import { db, usersTable } from "../name"
import { tablesDb } from "./config"

export default async function createUserTable() {
    // Create a new collection
    await tablesDb.createTable({databaseId: db, tableId: usersTable, name: usersTable})
    console.log("User table created")
    // userId, name, email, role, createdAt, updatedAt
    await tablesDb.createStringColumn({databaseId: db, tableId: usersTable, key: "userId", size: 36, required: true})
    await tablesDb.createStringColumn({databaseId: db, tableId: usersTable, key: "name", size: 100, required: false})
    await tablesDb.createStringColumn({databaseId: db, tableId: usersTable, key: "email", size: 100, required: true})
    await tablesDb.createEnumColumn({
        databaseId: db,
        tableId: usersTable,
        key: "role",
        elements: ["student", "teacher", "admin"],
        xdefault: "student",
        required: false
    })
    await tablesDb.createDatetimeColumn({databaseId: db, tableId: usersTable, key: "createdAt", required: false})
    await tablesDb.createDatetimeColumn({databaseId: db, tableId: usersTable, key: "updatedAt", required: false})
    console.log("User table columns created")
}