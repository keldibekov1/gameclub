const express = require("express");
const { createOrder, getOrders } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     description: Create a new order
 *   get:
 *     description: Get all orders
 */
router.post("/", authMiddleware, createOrder);
router.get("/", authMiddleware, getOrders);

module.exports = router;
