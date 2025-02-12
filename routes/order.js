const express = require("express");
const {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Buyurtmalarni boshqarish
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Barcha buyurtmalarni olish
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Buyurtmalar ro‘yxati
 */
router.get("/", authMiddleware, getOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Bitta buyurtmani olish
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Buyurtma topildi
 *       404:
 *         description: Buyurtma topilmadi
 */
router.get("/:id", authMiddleware, getOrderById);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Yangi buyurtma yaratish
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - total
 *               - payment
 *             properties:
 *               user_id:
 *                 type: integer
 *               total:
 *                 type: integer
 *               payment:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Buyurtma yaratildi
 */
router.post("/", authMiddleware, createOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Buyurtmani yangilash
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Buyurtma yangilandi
 *       404:
 *         description: Buyurtma topilmadi
 */
router.put("/:id", authMiddleware, updateOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Buyurtmani o‘chirish
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Buyurtma o‘chirildi
 *       404:
 *         description: Buyurtma topilmadi
 */
router.delete("/:id", authMiddleware, roleMiddleware, deleteOrder);

module.exports = router;
