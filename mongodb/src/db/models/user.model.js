import { db } from "../connection.js";

export const User = await db.createCollection('users');