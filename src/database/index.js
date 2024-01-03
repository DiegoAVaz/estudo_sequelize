const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

try {
  connection.authenticate();
  console.log("Conexão estabelecida");
} catch (error) {
  console.error("Conexão não estabelecida", error);
}

module.exports = {
  connection,
};
