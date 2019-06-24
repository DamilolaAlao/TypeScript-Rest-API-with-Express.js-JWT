import { Request, Response } from "express";

//Post
module.exports = async function posts(req: Request, res: Response) {
  res.json({
    posts: {
      title: "first post",
      description: "hello"
    }
  });
};
