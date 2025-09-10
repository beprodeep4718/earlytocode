import { db, sessionsTable } from "../name"
import { tablesDb } from "./config"

export default async function createSessionTable() {
    // Create a new collection
    await tablesDb.createTable({databaseId: db, tableId: sessionsTable, name: sessionsTable})
    console.log("Session table created")
    //sessionId, teacherId, studentId, startTime, endTime, status, createdAt, updatedAt
    await tablesDb.createStringColumn({databaseId: db, tableId: sessionsTable, key: "sessionId", size: 36, required: true})
    await tablesDb.createStringColumn({databaseId: db, tableId: sessionsTable, key: "teacherId", size: 36, required: true})
    await tablesDb.createStringColumn({databaseId: db, tableId: sessionsTable, key: "studentId", size: 36, required: true})
    await tablesDb.createDatetimeColumn({databaseId: db, tableId: sessionsTable, key: "startTime", required: true})
    await tablesDb.createDatetimeColumn({databaseId: db, tableId: sessionsTable, key: "endTime", required: true})
    await tablesDb.createStringColumn({databaseId: db, tableId: sessionsTable, key: "status", size: 20, required: true})
    await tablesDb.createDatetimeColumn({databaseId: db, tableId: sessionsTable, key: "createdAt", required: true})
    await tablesDb.createDatetimeColumn({databaseId: db, tableId: sessionsTable, key: "updatedAt", required: true})
    console.log("Session table columns created")
}