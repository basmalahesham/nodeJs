import { User } from "../../db/models/user.model.js";
import { Post } from "../../db/models/post.model.js";

// [1] Signup
export const createUser = async (req, res, next) => {
  try {
    const exists = await User.findOne({ email: req.body.email });
    if (exists) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }

    const user = await User.create(req.body);
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to create user",
      success: false,
      error: err.message,
    });
  }
};

// [3] Get users with age > minAge sorted by age DESC
export const getUsersByMinAge = async (req, res, next) => {
  try {
    const minAge = parseInt(req.query.minAge) || 0;

    const users = await User.find({ age: { $gt: minAge } }).sort({ age: -1 });

    return users.length
      ? res
          .status(200)
          .json({ message: "Users fetched", success: true, data: users })
      : res.status(404).json({ message: "No users found", success: false });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching users",
      success: false,
      error: error.message,
    });
  }
};

// [4] Get user by email
export const getUserByEmail = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email is required", success: false });
    }

    const user = await User.findOne({ email });

    return user
      ? res
          .status(200)
          .json({ message: "User found", success: true, data: user })
      : res.status(404).json({ message: "User not found", success: false });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching user",
      success: false,
      error: error.message,
    });
  }
};

// [5] Paginate + Sort users
export const getPaginatedSortedUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const sortField = req.query.sort || "createdAt";
    const skip = (page - 1) * limit;

    const users = await User.find()
      .sort({ [sortField]: 1 }) // Ascending
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      message: "Paginated users fetched",
      success: true,
      data: users,
      meta: {
        page,
        limit,
        sort: sortField,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching users",
      success: false,
      error: error.message,
    });
  }
};

// [9] Update age of user
export const updateUserAge = async (req, res, next) => {
  try {
    const { age } = req.body;

    if (typeof age !== "number") {
      return res
        .status(400)
        .json({ message: "Age must be a number", success: false });
    }

    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { age },
      { new: true }
    );

    return user
      ? res
          .status(200)
          .json({ message: "User age updated", success: true, data: user })
      : res.status(404).json({ message: "User not found", success: false });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating user",
      success: false,
      error: error.message,
    });
  }
};
// [13] Delete user and their posts
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    await Post.deleteMany({ userId: req.params.userId });

    return res.status(200).json({
      message: "User and related posts deleted",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting user",
      success: false,
      error: error.message,
    });
  }
};
