const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OrderComp = sequelize.define("OrderComp", {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  product_id: { type: DataTypes.BIGINT, allowNull: false },
  order_id: { type: DataTypes.BIGINT, allowNull: false },
  start: { type: DataTypes.DATE, allowNull: false },
  end: { type: DataTypes.DATE, allowNull: false },
  vip: { type: DataTypes.BOOLEAN, defaultValue: false },
  summa: { type: DataTypes.BIGINT, allowNull: false },
  room_id: { type: DataTypes.BIGINT, allowNull: false },
});

module.exports = OrderComp;
