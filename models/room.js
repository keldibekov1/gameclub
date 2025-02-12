const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Room extends Model {}

Room.init(
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    capacity: { type: DataTypes.INTEGER, allowNull: false },
    price_per_hour: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  },
  {
    sequelize,
    modelName: "Room",
    tableName: "rooms",
    timestamps: false,
  }
);

module.exports = Room;
