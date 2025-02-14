const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("kompyuter_klubi", "root", "1212", {
  host: "localhost",
  dialect: "mysql",
  logging: false, 
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL bilan muvaffaqiyatli boglandi!");
  } catch (error) {
    console.error("MySQLga ulanishda xatolik:", error);
    process.exit(1);
  }
};

connectDB();

module.exports = sequelize;
