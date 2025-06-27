import mongoose from "mongoose"; 

async function connectDB() {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.error("fail to connect to db", err.message));
}
export default connectDB;