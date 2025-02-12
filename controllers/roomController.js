const { Room } = require("../models");

exports.createRoom = async (req, res) => {
  try {
    const { room_number, count, price, image, characteristics, status } = req.body;
    const room = await Room.create({ room_number, count, price, image, characteristics, status });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
