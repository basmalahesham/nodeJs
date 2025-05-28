// create connection
import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
    "hti_sequelize", // database name
    "root", // username
    "", // password
    {
        host: "127.0.0.1", // database host
        //port: 3306, // database port
        dialect: "mysql", // database dialect
    }
);

export async function checkConnection() {
    await sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully.");
        })
        .catch((err) => {
            console.error("Fail to connect to the database:", err.message);
        });
}
export async function syncModels() {
    // sync all models
    await sequelize.sync();
}