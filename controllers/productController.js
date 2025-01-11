import Product from "../models/productModel.js";

// CREATE: Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;

    // Check if all fields are provided
    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if product already exists
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res
        .status(409)
        .json({ message: "A product with the same name already exists." });
    }

    // Create new product
    const product = new Product({
      name,
      description,
      price,
      stock,
      category,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product.", error });
  }
};

// READ: Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve products.", error });
  }
};

// READ: Get a product by id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve product.", error });
  }
};

// UPDATE: update a product
export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;

    // Find product by id and update
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, stock, category },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update product.", error });
  }
};

// DELETE: Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete product.", error });
  }
};

// SEARCH: Search products by name
export const searchProducts = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required." });
    }

    // Ensure the query is targeting the 'name' field only
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    }).select("name category description price stock image"); // Specify the fields to return

    res.status(200).json(products);
  } catch (error) {
    console.error("Error during product search:", error);
    res.status(500).json({ message: "Failed to search products.", error });
  }
};
// Find by Category

export const findByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    console.log(req.params);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to find category" });
  }
};
