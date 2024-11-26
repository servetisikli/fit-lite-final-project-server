import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
const router = express.Router();

// CRUD routes
router.post("/", createProduct); // Create
router.get("/", getProducts); // Read all
router.get("/:id", getProductById); // Read by ID
router.put("/:id", updateProduct); // Update
router.delete("/:id", deleteProduct); // Delete

export default router;
