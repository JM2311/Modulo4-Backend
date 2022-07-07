const mongoose = require("mongoose");

const product = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: [10, "el minimo es 10 capo"],
    max: [50, "el maximo es 50 capo"],
    required: [true, "este campo es obligatorio"],
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", product);
