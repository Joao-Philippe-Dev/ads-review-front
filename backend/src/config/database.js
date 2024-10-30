const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.init();
  }


   // configura a conexão do banco - não starta a caralha do banco
  init() {
    this.db = new Sequelize({
      database: "exemplo",
      host: "localhost",
      username: "root",
      dialect: "mysql",
      password: "",
    });
  }
}

module.exports = new Database();
