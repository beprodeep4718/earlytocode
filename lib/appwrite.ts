import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68b1adac002c4eebc7cf');

export const account = new Account(client);
export { ID } from 'appwrite';
