import * as jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";

module.exports = function auth(req: any, res: Response, next: NextFunction) {
  const secret = process.env.TOKEN_SECRET || "thisisatestsecret";
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).send("Invalid Token");
  }
};
