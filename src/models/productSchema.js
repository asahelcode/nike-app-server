const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  images: [String],
  name: String,
  price: Number,
  sizes: [Number],
  description: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
