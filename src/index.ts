import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "../routes/auth";
import postsRoute from "../routes/posts";

dotenv.config();

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/auth";

//Connect to DB
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err.message);
});

mongoose.connection.once("open", () => {
  console.log("connected to db");
});

const app = express();

//Middleware
app.use(express.json());

//Route Middleware
app.use("/api/users", authRoute);
app.use("/api/posts", postsRoute);

// 404 handler
app.use((_req, res) => {
  res.status(404).send("Not found");
});

const port = process.env.PORT || 3658;

const server = app.listen(port, () => {
  console.log(`started http://localhost:${port}`);
});

// Graceful shutdown
const shutdown = () => {
  console.log("shutting down...");
  server.close(() => {
    mongoose.connection.close().then(() => {
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);