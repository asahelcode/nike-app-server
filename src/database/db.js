const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://Gray:x7FVZZuKajQYJXT6@cluster0.npedjjx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db("nike");
const products = database.collection("products");

module.exports = products;
