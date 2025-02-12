const express = require("express");
const { createProduct, getProducts } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   post:
 *     description: Create a new product
 *   get:
 *     description: Get all products
 */
router.post("/", authMiddleware, createProduct);
router.get("/", getProducts);

module.exports = router;
