const express = require("express");
const { register, login } = require("../controllers/userController");

const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     description: Register new user
 */
router.post("/register", register);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     description: User login
 */
router.post("/login", login);

module.exports = router;
