const Product = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Mahsulot topilmadi!" });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { komputer_raqami, price, type, image, status, characteristics } = req.body;
    const newProduct = await Product.create({ komputer_raqami, price, type, image, status, characteristics });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Mahsulot topilmadi!" });

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Mahsulot topilmadi!" });

    await product.destroy();
    res.json({ message: "Mahsulot o‘chirildi!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
