import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65a38fc7a027da2af90b');

export const account = new Account(client);
export { ID } from 'appwrite';