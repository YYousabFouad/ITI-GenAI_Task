const products = require("../models/productModel");

// Get All Products
const getProducts = async (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Add Product
const addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({
        message: "Name and price are required",
      });
    }

    const product = {
      id: products.length + 1,
      name,
      price,
    };

    products.push(product);

    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getProducts,
  addProduct,
};
