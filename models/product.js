const mongoose = require("mongoose");

const Product = mongoose.model("product", {
  title: String,
  description: String,
  price: Number,
});
module.exports = Product;
