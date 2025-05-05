// create express app
const express = require("express");
const app = express();
// built-in middleware
app.use(express.json());
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// integrate DB with app (nodejs) by using mysql2 package >> driver
const mySql = require("mysql2");
const dbConnection = mySql.createConnection({
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

// register >> post >> /register
app.post("/register", (req, res, next) => {
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
});
// login >> post >> /login
app.post("/login", (req, res, next) => {
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
});
// get profile >> get >> /profile/:id >> user data + blogs
app.get("/profile/:id", (req, res, next) => {
    // get data from req
    const { id } = req.params;
    //console.log({ id });
    // get user from DB
    let sql = `SELECT 
    users.id as userId,
    blogs.id as blogId,
    blogs.title,
    blogs.content,
    CONVERT(DATEDIFF(now(),dob)/365.25,INT) as age,
    concat(f_name, ' ', l_name) as full_name
    FROM 
    users left join blogs 
    on users.id = blogs.u_id
    WHERE users.id = ? AND blogs.is_deleted = 0`;
    let values = [id];
    dbConnection.execute(sql, values, (error, result) => {
        if (error) {
            return res.status(500).json({ message: "server error", error });
        }
        //console.log(result);
        // result in select is an array of objects
        // fail condition
        if (result.length == 0) {
            return res.status(404).json({ message: "user not found" });
        }
        // success condition >> send success response
        return res.status(200).json({ message: "done", result });
    });
});
// add blog >> post >> /blog
app.post("/blog", (req, res, next) => {
    // get data from req
    const { title, content, userId } = req.body;
    //console.log({ title, content, userId });
    // add blog into DB
    dbConnection.execute(
        "INSERT INTO blogs (title, content, u_id) VALUES (?, ?, ?)",
        [title, content, userId],
        (error, result) => {
            if (error) {
                return res.status(500).json({ message: "server error", error });
            }
            //console.log(result);
            // result in insert is an object
            // fail condition
            if (result.affectedRows == 0) {
                return res.status(500).json({ message: "fail to create blog" });
            }
            // success condition >> send success response
            return res.status(201).json({ message: "Blog created successfully" });
        }
    );
});
// get all blogs >> get >> /blogs
app.get("/blogs", (req, res, next) => {
    // get all blogs from DB
    let sql = `
        SELECT 
            blogs.id as blogId,
            blogs.title,
            blogs.content,
            blogs.created_at,
            CONCAT(users.f_name, ' ', users.l_name) as author
        FROM 
            blogs 
        JOIN 
            users ON blogs.u_id = users.id
        WHERE 
            blogs.is_deleted = 0
        ORDER BY 
            blogs.created_at DESC
    `;

    dbConnection.execute(sql, (error, result) => {
        if (error) {
            return res.status(500).json({ message: "server error", error });
        }

        // fail condition
        if (result.length == 0) {
            return res.status(404).json({ message: "No blogs found" });
        }

        // success condition
        return res.status(200).json({ message: "done", blogs: result });
    });
});
// get blog by id >> get >> /blog/:id
app.get("/blog/:id", (req, res, next) => {
    // get data from req
    const { id } = req.params;
    //console.log({ id });

    let sql = `
        SELECT 
            blogs.id as blogId,
            blogs.title,
            blogs.content,
            blogs.created_at,
            CONCAT(users.f_name, ' ', users.l_name) as author
        FROM 
            blogs 
        JOIN 
            users ON blogs.u_id = users.id
        WHERE 
            blogs.id = ? AND blogs.is_deleted = 0
    `;
    let values = [id];

    dbConnection.execute(sql, values, (error, result) => {
        if (error) {
            return res.status(500).json({ message: "server error", error });
        }

        // fail condition
        if (result.length == 0) {
            return res.status(404).json({ message: "blog not found" });
        }

        // success condition
        return res.status(200).json({ message: "done", blog: result[0] });
    });
});
// delete blog >> delete >> /blog/:id >> hard delete
/* app.delete("/blog/:id", (req, res, next) => {
    // get data from req
    const { id } = req.params;
    //console.log({ id });
    // delete blog from DB
    dbConnection.execute("DELETE FROM blogs WHERE id = ?", 
        [id], (error, result) => {
        if (error) {
            return res.status(500).json({ message: "server error", error });
        }
        //console.log(result);
        // result in delete is an object
        // fail condition
        if (result.affectedRows == 0) {
            return res.status(500).json({ message: "fail to delete blog" });
        }
        // success condition >> send success response
        return res.status(200).json({ message: "Blog deleted successfully" });
    });
}); */
// delete blog >> delete >> /blog/:id >> soft delete
app.delete("/blog/:id", (req, res, next) => {
    // get data from req
    const { id } = req.params;
    //console.log({ id });
    // delete blog from DB
    dbConnection.execute(
        "update blogs set is_deleted = 1 WHERE id = ? AND is_deleted = 0",
        [id],
        (error, result) => {
            if (error) {
                return res.status(500).json({ message: "server error", error });
            }
            //console.log(result);
            // result in delete is an object
            // fail condition
            if (result.affectedRows == 0) {
                return res.status(404).json({ message: "blog not found" });
            }
            // success condition >> send success response
            return res.status(200).json({ message: "Blog deleted successfully" });
        }
    );
});
