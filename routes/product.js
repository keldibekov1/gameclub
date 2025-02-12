const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Kompyuterlarni boshqarish
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Barcha kompyuterlarni olish
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Kompyuterlar ro‘yxati
 */
router.get("/", getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Bitta kompyuterni olish
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Kompyuter topildi
 *       404:
 *         description: Kompyuter topilmadi
 */
router.get("/:id", getProductById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Yangi kompyuter yaratish
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - komputer_raqami
 *               - price
 *               - type
 *             properties:
 *               komputer_raqami:
 *                 type: integer
 *               price:
 *                 type: integer
 *               type:
 *                 type: string
 *               image:
 *                 type: string
 *               status:
 *                 type: string
 *               characteristics:
 *                 type: string
 *     responses:
 *       201:
 *         description: Kompyuter yaratildi
 */
router.post("/", authMiddleware, roleMiddleware, createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Kompyuterni yangilash
 *     tags: [Products]
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
 *         description: Kompyuter yangilandi
 *       404:
 *         description: Kompyuter topilmadi
 */
router.put("/:id", authMiddleware, roleMiddleware, updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Kompyuterni o‘chirish
 *     tags: [Products]
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
 *         description: Kompyuter o‘chirildi
 *       404:
 *         description: Kompyuter topilmadi
 */
router.delete("/:id", authMiddleware, roleMiddleware, deleteProduct);

module.exports = router;
