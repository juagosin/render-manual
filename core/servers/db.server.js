import { MongoClient } from 'mongodb';
export let db;
export const connectToDBServer = async (connectionURI) => {
    const client = new MongoClient(connectionURI);
    await client.connect();
    db = client.db();
};
