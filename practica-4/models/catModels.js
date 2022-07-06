const mongoose = require("mongoose");
const catSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  img:{
    type: String,
    required: false
  }
});
module.exports = mongoose.model("cat", catSchema);
