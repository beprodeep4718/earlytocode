import { db } from "../name";
import { tablesDb } from "./config";
import createSessionTable from "./sessions.table";
import createUserTable from "./user.table";

export const getOrCreateDatabase = async () => {
  try {
    await tablesDb.get({ databaseId: db });
    console.log("Database connected");
  } catch (error) {
    await tablesDb.create({ databaseId: db, name: db });
    console.log("Database created");
    await Promise.all([
      createUserTable(),
      createSessionTable()
    ])
    console.log("Tables created");
  }
  return tablesDb;
};
