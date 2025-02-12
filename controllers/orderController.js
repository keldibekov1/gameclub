const { Order } = require("../models");

exports.createOrder = async (req, res) => {
  try {
    const { user_id, total, payment, status } = req.body;
    const order = await Order.create({ user_id, total, payment, status });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
