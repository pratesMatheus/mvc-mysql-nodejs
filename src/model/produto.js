const Sequelize = require("sequelize"),
  database = require("../database/index");

const Produto = database.define("produtos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}, {
  timestamp: false
});


/**
 * Após usar este comando no terminal: node src/model/produto.js,
 * é indicado deixar o comando linha comentada
 * pois sempre que executado, irá sobrecrever a tabela, apagando-a!
 * */
//Produto.sync({force: true});

module.exports = Produto;
