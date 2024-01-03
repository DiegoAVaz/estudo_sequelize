const dotenv = require("dotenv").config();

module.exports = {
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
};
