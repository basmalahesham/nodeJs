import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

// sequelize >> define()
const User = sequelize.define("user",
    // define >> بتاخد ال var تحوله ل lowercase و تجمعه >> users
    {
    firstName: {
        type: DataTypes.STRING, // varChar(255) 
        allowNull: false, // NOT NULL
        defaultValue: "user system", // default value
    },
    lastName: {
        type: DataTypes.STRING, // varChar(255) 
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING, // varChar(255) 
        allowNull: false,
        unique: true, // unique email
    },
    password: {
        type: DataTypes.STRING, // varChar(255) 
        allowNull: false,
    },
});
// sync >> create table
export async function syncUser(){
    await User.sync().then(() => {
        console.log("sync user model successfully.");
    }).catch((err) => {
        console.error("Fail to sync User", err.message);
    });
}