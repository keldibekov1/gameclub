const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user");
const Order = require("./order");
const OrderComp = require("./orderComp");
const Product = require("./product");
const Room = require("./room");

// **Barcha modellarni sequelize bilan bog‘lash**
const models = {
  User: User,
  Order: Order,
  OrderComp: OrderComp,
  Product: Product,
  Room: Room,
};


// **Modellarni bog‘lash**
models.User.hasMany(models.Order, { foreignKey: "user_id" });
models.Order.belongsTo(models.User, { foreignKey: "user_id" });

models.Order.hasMany(models.OrderComp, { foreignKey: "order_id" });
models.OrderComp.belongsTo(models.Order, { foreignKey: "order_id" });

models.Product.hasMany(models.OrderComp, { foreignKey: "product_id" });
models.OrderComp.belongsTo(models.Product, { foreignKey: "product_id" });

models.Room.hasMany(models.OrderComp, { foreignKey: "room_id" });
models.OrderComp.belongsTo(models.Room, { foreignKey: "room_id" });

module.exports = { sequelize, ...models };
