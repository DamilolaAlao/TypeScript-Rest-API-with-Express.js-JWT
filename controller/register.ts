import { Request, Response } from "express";
import bcrypt from "bcryptjs";
const User = require("../model/User");

const { registerValidation } = require("../middleware/validation");

//Register
module.exports = async function login(req: Request, res: Response) {
  //Validate the Data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Check for user
  const emailExit = await User.findOne({ email: req.body.email });
  if (emailExit) return res.status(400).send("Email already exits");

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create new user
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (error) {
    res.status(400).send(error);
  }
};
