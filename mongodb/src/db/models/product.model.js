import { db } from "../connection.js";

export const Product = await db.createCollection('products');