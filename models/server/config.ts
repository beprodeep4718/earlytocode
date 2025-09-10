import {Avatars, Client, Storage, Users, TablesDB} from "node-appwrite"


const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
const apiKey = process.env.APPWRITE_API_KEY;

if (!endpoint || !projectId || !apiKey) {
  throw new Error("Missing required Appwrite environment variables.");
}

client
  .setEndpoint(endpoint) 
  .setProject(projectId) 
  .setKey(apiKey); 

export const users = new Users(client);
export const tablesDb = new TablesDB(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
