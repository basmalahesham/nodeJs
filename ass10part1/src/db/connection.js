import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");
export const db = client.db("ass10_1");
// check connection
export async function connectionDB() {
  await client
    .connect()
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((err) => {
      console.log("db connection failed");
    });
}
