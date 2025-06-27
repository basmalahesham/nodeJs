import { Router } from "express";
import * as postService from "./post.service.js";

const router = Router();

// [2] Add multiple posts
router.post("/bulk", postService.addMultiplePosts);

// [7] Get all posts with user email
router.get("/posts-with-user", postService.getPostsWithUserInfo);

// [8] Aggregated posts with user info and optional search by title
router.get("/aggregate", postService.aggregatePosts);

// [10] Update title for posts by userId
router.patch("/change-title", postService.updateTitleByUserId);

// [11] Update post content and return updated post
router.patch("/:postId", postService.updatePostContent);

// [12] Replace full post document
router.put("/replace/:postId", postService.replacePost);

// [14] Delete post by id
router.delete("/:postId", postService.deletePostById);

// [15] Delete all posts by userId
router.delete("/user/:userId", postService.deletePostsByUserId);

// [6] Get a post by ID
router.get("/:id", postService.getPostById);

export default router;
