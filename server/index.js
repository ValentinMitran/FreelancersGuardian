const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//Import Routes
const authRoute = require("./routes/auth");

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("DB up n running")
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);

app.listen(process.env.PORT || 3001, () => console.log("Express running"));
