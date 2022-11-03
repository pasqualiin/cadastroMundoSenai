const Sequelize = require("sequelize");

const sequelize = new Sequelize("testeMundo", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
