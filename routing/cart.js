const express = require("express");

const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/add/:name", cartController.addProductToCart);

module.exports = router;
