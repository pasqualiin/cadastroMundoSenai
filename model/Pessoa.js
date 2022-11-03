const db = require("./db");

const Pessoa = db.sequelize.define("pessoas", {
  id_pessoa: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: db.Sequelize.STRING,
  },
  idade: {
    type: db.Sequelize.INTEGER,
  },
  telefone: {
    type: db.Sequelize.STRING,
  },
  email: {
    type: db.Sequelize.STRING,
  },
});

module.exports = Pessoa;
