const Product = require("../models/Product");

// GET /products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve products",
      error: error.message,
    });
  }
};

// POST /products
const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    // Input Validation
    if (!name || price === undefined) {
      return res.status(400).json({
        message: "Name and price are required",
      });
    }

    const product = await Product.create({
      name,
      price,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
};
