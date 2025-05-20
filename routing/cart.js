const express = require("express");

const cartController = require("../controllers/cartController");
const productsController = require("../controllers/productsController");
const router = express.Router();

//router.get("/", productsController.getProductsView);
//router.get("/add", productsController.getProductsView);
router.post("/add/:name", cartController.addProductToCart);

module.exports = router;
