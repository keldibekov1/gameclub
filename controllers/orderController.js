const Order = require("../models/order");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: "Buyurtma topilmadi!" });
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const createOrder = async (req, res) => {
  try {
    const { user_id, total, payment } = req.body;
    const newOrder = await Order.create({ user_id, total, payment });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: "Buyurtma topilmadi!" });

    await order.update(req.body);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ message: "Buyurtma topilmadi!" });

    await order.destroy();
    res.json({ message: "Buyurtma o‘chirildi!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

module.exports = { getOrders, getOrderById, createOrder, updateOrder, deleteOrder };
