const express = require("express");
const {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Rooms
 *   description: Xonalarni boshqarish
 */

/**
 * @swagger
 * /api/rooms:
 *   get:
 *     summary: Barcha xonalarni olish
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Xonalar ro‘yxati
 */
router.get("/", getRooms);

/**
 * @swagger
 * /api/rooms/{id}:
 *   get:
 *     summary: Bitta xonani olish
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xona topildi
 *       404:
 *         description: Xona topilmadi
 */
router.get("/:id", getRoomById);

/**
 * @swagger
 * /api/rooms:
 *   post:
 *     summary: Yangi xona yaratish
 *     tags: [Rooms]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - room_number
 *               - count
 *               - price
 *             properties:
 *               room_number:
 *                 type: integer
 *               count:
 *                 type: integer
 *               price:
 *                 type: integer
 *               image:
 *                 type: string
 *               characteristics:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Xona yaratildi
 */
router.post("/", authMiddleware, roleMiddleware, createRoom);

/**
 * @swagger
 * /api/rooms/{id}:
 *   put:
 *     summary: Xonani yangilash
 *     tags: [Rooms]
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
 *         description: Xona yangilandi
 *       404:
 *         description: Xona topilmadi
 */
router.put("/:id", authMiddleware, roleMiddleware, updateRoom);

/**
 * @swagger
 * /api/rooms/{id}:
 *   delete:
 *     summary: Xonani o‘chirish
 *     tags: [Rooms]
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
 *         description: Xona o‘chirildi
 *       404:
 *         description: Xona topilmadi
 */
router.delete("/:id", authMiddleware, roleMiddleware, deleteRoom);

module.exports = router;
