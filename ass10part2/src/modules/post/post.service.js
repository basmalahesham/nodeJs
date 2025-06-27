import { Post } from "../../db/models/post.model.js";
import { User } from "../../db/models/user.model.js";
import mongoose from "mongoose";

// [2] Add multiple posts
export const addMultiplePosts = async (req, res) => {
  try {
    const posts = await Post.insertMany(req.body);
    res
      .status(201)
      .json({ message: "Posts added", success: true, data: posts });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to add posts",
        success: false,
        error: err.message,
      });
  }
};

// [6] Get a post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return post
      ? res
          .status(200)
          .json({ message: "Post found", success: true, data: post })
      : res.status(404).json({ message: "Post not found", success: false });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error getting post",
        success: false,
        error: err.message,
      });
  }
};

// [7] Get posts with limited fields + user's email
export const getPostsWithUserInfo = async (req, res) => {
  try {
    const posts = await Post.find({}, "title userId createdAt").populate(
      "userId",
      "email"
    );
    res
      .status(200)
      .json({ message: "Posts fetched", success: true, data: posts });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error fetching posts",
        success: false,
        error: err.message,
      });
  }
};

// [8] Aggregated posts with user info and title search
export const aggregatePosts = async (req, res) => {
  try {
    const { title } = req.query;
    const pipeline = [
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          title: 1,
          content: 1,
          createdAt: 1,
          "user.name": "$user.userName",
          "user.email": "$user.email",
        },
      },
    ];

    if (title) {
      pipeline.unshift({ $match: { title: { $regex: title, $options: "i" } } });
    }

    const result = await Post.aggregate(pipeline);
    res
      .status(200)
      .json({ message: "Aggregated posts", success: true, data: result });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Aggregation error",
        success: false,
        error: err.message,
      });
  }
};

// [10] Update title for all posts of user
export const updateTitleByUserId = async (req, res) => {
  try {
    const { userId, title } = req.body;

    const result = await Post.updateMany({ userId }, { title });
    res
      .status(200)
      .json({
        message: "Titles updated",
        success: true,
        modifiedCount: result.modifiedCount,
      });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Update failed", success: false, error: err.message });
  }
};

// [11] Update post content and return updated post
export const updatePostContent = async (req, res) => {
  try {
    const { content } = req.body;
    const updated = await Post.findByIdAndUpdate(
      req.params.postId,
      { content },
      { new: true }
    );

    return updated
      ? res
          .status(200)
          .json({ message: "Post updated", success: true, data: updated })
      : res.status(404).json({ message: "Post not found", success: false });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Update error", success: false, error: err.message });
  }
};

// [12] Replace full post
export const replacePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const replaced = await Post.findOneAndReplace({ _id: postId }, req.body, {
      new: true,
    });

    return replaced
      ? res
          .status(200)
          .json({ message: "Post replaced", success: true, data: replaced })
      : res.status(404).json({ message: "Post not found", success: false });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Replace error", success: false, error: err.message });
  }
};

// [14] Delete post by id
export const deletePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    return post
      ? res.status(200).json({ message: "Post deleted", success: true })
      : res.status(404).json({ message: "Post not found", success: false });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Delete error", success: false, error: err.message });
  }
};

// [15] Delete all posts by userId
export const deletePostsByUserId = async (req, res) => {
  try {
    const result = await Post.deleteMany({ userId: req.params.userId });
    res
      .status(200)
      .json({
        message: "Posts deleted",
        success: true,
        deletedCount: result.deletedCount,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error deleting posts",
        success: false,
        error: err.message,
      });
  }
};
