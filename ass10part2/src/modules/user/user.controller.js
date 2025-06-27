import { Router } from "express";
import * as userService from "./user.service.js";

const router = Router();

// [1] Signup
router.post("/signup", userService.createUser);

// [3] GET users whose age > minAge
router.get("/age", userService.getUsersByMinAge);

// [4] Get user by email
router.get("/email", userService.getUserByEmail);

// [5] Get paginated + sorted users
router.get("/paginate-sort", userService.getPaginatedSortedUsers);

// [9] Update age of user
router.patch("/:userId", userService.updateUserAge);

// [13] Delete user and their posts
router.delete("/:userId", userService.deleteUser);

export default router;
