import { dbConnection } from "../../db/db.connection.js";
export const getProfile = (req, res, next) => {
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
}