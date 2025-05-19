import { Router } from "express";
const router = Router();
import * as bs from "./blog.service.js";
// add blog >> post >> /blog
router.post("/blog", bs.addBlog);
// get all blogs >> get >> /blogs
router.get("/blogs", bs.getAllBlogs);
// get blog by id >> get >> /blog/:id
router.get("/blog/:id", bs.getBlogById);
// delete blog >> delete >> /blog/:id >> hard delete
/* router.delete("/blog/:id", (req, res, next) => {
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
router.delete("/blog/:id", bs.deleteBlog);
export default router;