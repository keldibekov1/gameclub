const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const config = require("../config/config");

const register = async (req, res) => {
  try {
    const { name, telefon, password, role } = req.body;

    const userExists = await User.findOne({ where: { telefon } });
    if (userExists) {
      return res.status(400).json({ message: "Bu telefon raqam allaqachon ro‘yxatdan o‘tgan!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      telefon,
      password: hashedPassword,
      role: role || "user",
    });

    res.status(201).json({ message: "Foydalanuvchi muvaffaqiyatli yaratildi!", userId: newUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

const login = async (req, res) => {
  try {
    const { telefon, password } = req.body;

    const user = await User.findOne({ where: { telefon } });
    if (!user) {
      return res.status(400).json({ message: "Telefon yoki parol noto‘g‘ri!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Telefon yoki parol noto‘g‘ri!" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, config.JWT_SECRET, { expiresIn: "1d" });

    res.json({ message: "Tizimga muvaffaqiyatli kirdingiz!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

module.exports = { register, login };
