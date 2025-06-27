import { db } from "../connection.js";
export const Student = await db.createCollection('students');
