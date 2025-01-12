import express from "express";
import { registerUser, loginUser, getMe } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser); // Register endpoint
router.post("/login", loginUser); // Login endpoint
router.get("/me", protect, getMe); // Get current user endpoint

export default router;