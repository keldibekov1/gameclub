const express = require("express");
const { register, login } = require("../controllers/authController"); // 🔹 login ni ham import qiling

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Foydalanuvchilarni ro‘yxatdan o‘tkazish va autentifikatsiya qilish
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Yangi foydalanuvchi yaratish
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - telefon
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               telefon:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [user, admin]
 *                 default: user
 *     responses:
 *       201:
 *         description: Foydalanuvchi yaratildi
 *       400:
 *         description: Xatolik yuz berdi
 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Foydalanuvchini tizimga kirishi
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - telefon
 *               - password
 *             properties:
 *               telefon:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli kirildi
 *       400:
 *         description: Telefon yoki parol noto‘g‘ri
 */
router.post("/login", login); // 🔹 login funksiyasini ishlatish

module.exports = router;
