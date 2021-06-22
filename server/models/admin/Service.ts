import mongoose from "mongoose";

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
  extras: {},
});

export default mongoose.model("Service", serviceSchema);
