const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  description: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  price: {
    type: String,
    default: "client",
  },
});

module.exports = mongoose.model("Service", serviceSchema);
