const express = require("express");
const sequelize = require("./config/db");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");
const productRoutes = require("./routes/product");
const roomRoutes = require("./routes/room");
const setupSwagger = require("./config/swagger");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/rooms", roomRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  console.log("Database ulandi!");
  app.listen(PORT, () => {
    console.log(`Server ${PORT} portda ishlamoqda...`);
  });
});
