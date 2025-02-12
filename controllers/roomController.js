const Room = require("../models/room");

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const getRoomById = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) return res.status(404).json({ message: "Xona topilmadi!" });
    res.json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const createRoom = async (req, res) => {
  try {
    const { room_number, count, price, image, characteristics, status } = req.body;
    const newRoom = await Room.create({ room_number, count, price, image, characteristics, status });
    res.status(201).json(newRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) return res.status(404).json({ message: "Xona topilmadi!" });

    await room.update(req.body);
    res.json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) return res.status(404).json({ message: "Xona topilmadi!" });

    await room.destroy();
    res.json({ message: "Xona o‘chirildi!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

module.exports = { getRooms, getRoomById, createRoom, updateRoom, deleteRoom };
