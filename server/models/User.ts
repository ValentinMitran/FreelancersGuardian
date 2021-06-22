import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  role: {
    type: String,
    default: "client",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
