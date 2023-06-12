const express = require("express");
const { authUser, logoutUser } = require("../controllers/userController");

const router = express.Router();

router.post("/auth", authUser);
router.post("/logout", logoutUser);

module.exports = router;
