import { Router } from "express";
const router = Router();
import * as authService  from "./auth.service.js";
// register >> post >> /register
router.post("/register", authService.register);
// login >> post >> /login
router.post("/login", authService.login);

export default router;