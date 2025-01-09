import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  findByCategory,
} from "../controllers/productController.js";
const router = express.Router();

// Import searchProducts from productController
router.get("/search", searchProducts);

// CRUD routes
router.get("/category/:category", findByCategory);
router.post("/", createProduct); // Create
router.get("/", getProducts); // Read all
router.get("/:id", getProductById); // Read by ID
router.put("/:id", updateProduct); // Update
router.delete("/:id", deleteProduct); // Delete

export default router;
