const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc Get all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const category = req.query.category ? { category: req.query.category } : {};
    products = await Product.find({ ...category });
    res.json({ products });
});

module.exports = { getProducts };
