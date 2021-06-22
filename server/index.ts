import express, { Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app: Application = express();

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

// Import Routes
import authRoute from "./routes/auth";

// Admin Routes
import clientsRoute from "./routes/admin/clients";
import serviceRoute from "./routes/admin/service";

// Client Routes

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);

// Admin Routes
app.use("/api/admin/clients", clientsRoute);
app.use("/api/admin/service", serviceRoute);

// Client Routes

// tslint:disable-next-line:no-console
app.listen(process.env.PORT || 3001, () => console.log("Express running"));
