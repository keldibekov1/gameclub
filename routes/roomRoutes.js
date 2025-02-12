const express = require("express");
const { createRoom, getRooms } = require("../controllers/roomController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/rooms:
 *   post:
 *     description: Create a new room
 *   get:
 *     description: Get all rooms
 */
router.post("/", authMiddleware, createRoom);
router.get("/", getRooms);

module.exports = router;
