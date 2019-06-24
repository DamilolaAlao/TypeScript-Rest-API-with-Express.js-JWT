import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//Import Routes
const authRoute = require("../routes/auth");
const postsRoute = require("../routes/posts");

dotenv.config();

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/auth";

//Connect to DB
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true
  },
  (error) => {
    if(error){
      return console.log("could not connect to db");
    }
    console.log("connected to db");
  }
);

const app = express();

//Middleware
app.use(express.json());

//Route Middleware
app.use("/api/users", authRoute);
app.use("/api/posts", postsRoute);

const port = process.env.PORT || 3658;

app.listen(port, () => {
  console.log(`started http://localhost:${port}`);
});
