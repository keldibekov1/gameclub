const { Product } = require("../models");

exports.createProduct = async (req, res) => {
  try {
    const { komputer_number, price, type, image, status, characteristics } = req.body;
    const product = await Product.create({ komputer_number, price, type, image, status, characteristics });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
