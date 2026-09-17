import { Request, Response } from "express";

//Get the authenticated user's profile (password excluded)
module.exports = async function me(req: Request, res: Response) {
  const User = require("../model/User");
  const user = await User.findById((req as any).user._id).select("-password");
  if (!user) return res.status(404).send("User not found");
  res.json(user);
};