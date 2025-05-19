import { dbConnection } from "../../db/db.connection.js";
export const register = (req, res, next) => {
    // get data from req
    const { fName, lName, email, password, dob } = req.body;
    //console.log({ fName,lName, email, password,dob });
    // check user existence
    // execute or query
    // execute >> do prepare statement
    // query >> not do prepare statement >> sql injection problem
    //dbConnection.execute(`SELECT * FROM users WHERE email = '${email}'`, (error, result) => {});
    dbConnection.execute(
        // execute >> do prepare statement
        // ? is a placeholder for the value in the array
        "SELECT * FROM users WHERE email = ?",
        [email],
        (error, result) => {
            if (error) {
                return res.status(500).json({ message: "server error", error });
            }
            //console.log(result);
            // result in select is an array of objects
            // fail condition
            if (result.length > 0) {
                return res.status(409).json({ message: "User already exists" });
            }
            // success condition
            // add user into DB
            dbConnection.execute(
                "INSERT INTO users (f_name,l_name, email, password,dob) VALUES (?, ?, ?, ?, ?)",
                [fName, lName, email, password, dob],
                (error, result) => {
                    if (error) {
                        return res.status(500).json({ message: "server error", error });
                    }
                    //console.log(result);
                    // result in insert is an object
                    // fail condition
                    if (result.affectedRows == 0) {
                        return res.status(500).json({ message: "fail to create user" });
                    }
                    // success condition
                    return res.status(201).json({ message: "User created successfully" });
                }
            );
        }
    );
}
export const login =(req, res, next) => {
    // get data from req
    const { email, password } = req.body;
    //console.log({ email, password });
    // check user existence
    dbConnection.execute(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (error, result) => {
            if (error) {
                return res.status(500).json({ message: "server error", error });
            }
            //console.log(result);
            // result in select is an array of objects
            // fail condition
            // if (result.length == 0) {
            //     return res.status(401).json({ message: "Invalid credentials" });
            // }
            // // check password >> result >> [{password: "123456"}] >> result[0].password
            // // result[0] is the first object in the array
            // if (result[0].PASSWORD != password) {
            //     return res.status(401).json({ message: "Invalid credentialss" });
            // }
            if (result.length == 0 || result[0].PASSWORD != password) {
                return res.status(401).json({ message: "Invalid credentials" });
            }
            // success condition >> send success response
            return res
                .status(200)
                .json({ message: "Login successfully", userId: result[0].id });
        }
    );
} 