import mongoose from "mongoose";

// SubCategory Schema
const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Category Schema
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subCategories: [SubCategorySchema], // A main category can have multiple subcategories
});

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true }, // Main category with subcategories
  image: { type: String, required: true }, // Image URL
  createdAt: { type: Date, default: Date.now },
});

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;




