const asyncHandler = require("express-async-handler");
const Menu = require("../models/menuModel");

// @desc Get all list
// @route GET /api/menu
// @access Public
const getMenu = asyncHandler(async (req, res) => {
    const menu = await Menu.find({});

    res.status(200).json(menu);
});

module.exports = { getMenu };
