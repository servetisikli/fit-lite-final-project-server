import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser); // Register endpoint
router.post("/login", loginUser); // Login endpoint

export default router;

