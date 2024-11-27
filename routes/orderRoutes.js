import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  getOrderDetails,
  createOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Get user orders
router.get("/my-orders", protect, getOrderDetails); // Protected route
router.post("/create-order", createOrder); // Protected route

export default router;
