import { db, sessionsTable } from "../name";
import { tablesDb } from "./config";

export default async function createSessionTable() {
  // Create the Sessions table
  await tablesDb.createTable({
    databaseId: db,
    tableId: sessionsTable,
    name: "Sessions",
  });
  console.log("✅ Session table created");

  // Columns
  await Promise.all([
    tablesDb.createStringColumn({
      databaseId: db,
      tableId: sessionsTable,
      key: "teacherId",
      size: 36,
      required: true,
    }),
    tablesDb.createStringColumn({
      databaseId: db,
      tableId: sessionsTable,
      key: "studentId",
      size: 36,
      required: true,
    }),
    tablesDb.createStringColumn({
      databaseId: db,
      tableId: sessionsTable,
      key: "callId", // Stream Video callId
      size: 100,
      required: true,
    }),
    tablesDb.createDatetimeColumn({
      databaseId: db,
      tableId: sessionsTable,
      key: "startTime",
      required: true,
    }),
    tablesDb.createDatetimeColumn({
      databaseId: db,
      tableId: sessionsTable,
      key: "endTime",
      required: false, // allow null until session ends
    }),
    tablesDb.createEnumColumn({
      databaseId: db,
      tableId: sessionsTable,
      key: "status",
      elements: ["scheduled", "active", "completed", "cancelled"],
      xdefault: "scheduled",
      required: true,
    }),
    tablesDb.createDatetimeColumn({
      databaseId: db,
      tableId: sessionsTable,
      key: "createdAt",
      required: true,
    }),
    tablesDb.createDatetimeColumn({
      databaseId: db,
      tableId: sessionsTable,
      key: "updatedAt",
      required: true,
    }),
  ]);

  console.log("✅ Session table columns created");
}
