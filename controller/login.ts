import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
const User = require("../model/User");

const { loginValidation } = require("../middleware/validation");

//Login
module.exports = async function login(req: Request, res: Response) {
  //Validate the Data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Check User
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or Password is wrong");
  //Check Password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or Password is wrong");
  //Create and Assign a token
  const secret = process.env.TOKEN_SECRET || "thisisatestsecret";
  const token = jwt.sign({ _id: user._id }, secret);
  res.header("auth-token", token).send(token);
};
