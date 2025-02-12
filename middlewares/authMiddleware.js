const jwt = require("jsonwebtoken");
const config = require("../config/config");

const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "Token mavjud emas" });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), config.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Noto‘g‘ri yoki eskirgan token" });
    }
};

module.exports = authenticate;
