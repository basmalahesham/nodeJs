import { dbConnection } from "../../db/db.connection.js";
export const addBlog = (req, res, next) => {
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
}
export const getAllBlogs = (req, res, next) => {
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
}
export const getBlogById = (req, res, next) => {
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
}
export const deleteBlog = (req, res, next) => {
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
}