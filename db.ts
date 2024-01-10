import { MongoClient, Db } from 'mongodb';

// MongoDB URL
const url = 'mongodb+srv://oludotunlonge:gsOAAT6xNNQHOWEa@bookstore.nh9dggw.mongodb.net/?retryWrites=true&w=majority';

// Database Name
const dbName = 'bookstore';

// Database instance
let db: Db;

/**
 * Connects to the MongoDB database.
 */
export async function connectToDB(): Promise<void> {
  const client = new MongoClient(url);
  await client.connect();
  console.log("Connected successfully to MongoDB server");
  db = client.db(dbName);
}

/**
 * Gets the MongoDB database instance.
 * @returns {Db} The database instance.
 */
export function getDB(): Db {
  return db;
}
