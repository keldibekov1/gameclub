const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending", // "pending", "paid"
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active", // "active", "completed", "canceled"
  },
});

module.exports = Order;
