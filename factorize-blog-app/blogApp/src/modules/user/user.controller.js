import { Router } from "express";
const router = Router();
import * as userService from "./user.service.js";
// get profile >> get >> /profile/:id >> user data + blogs
router.get("/profile/:id", userService.getProfile);
export default router;