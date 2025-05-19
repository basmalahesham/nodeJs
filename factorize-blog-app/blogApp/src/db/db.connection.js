// integrate DB with app (nodejs) by using mysql2 package >> driver
import mysql from "mysql2";
export const dbConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "bolg_app",
});
// check connection with DB
dbConnection.connect((error) => {
    if (error) {
        console.error(error.message);
    }
    return console.log("DB connected successfully");
});