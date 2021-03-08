const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  extras: {
    
  },
});

module.exports = mongoose.model("Service", serviceSchema);
