const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const { router } = require("./routes");

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  return res.send("Olá mundo");
});

app.listen(PORT, () => {
  console.log(`Server running on port `, PORT);
});
