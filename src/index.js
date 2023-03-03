const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<p>Hello node server user</p>");
});

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
