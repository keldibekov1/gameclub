const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("n16", "root", "1212", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
