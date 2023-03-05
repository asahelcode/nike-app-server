const express = require("express");
const productRoute = require("./Route/productRoutes");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

//Apply MiddleWAres
app.use(express.json());
app.use("/products", productRoute);

//Server Connections
app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
