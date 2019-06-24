import { Router } from "express";
const auth = require("../middleware/verifyToken");
const posts = require("../controller/posts");

const router = Router();
//Post
router.get("/", auth, posts);

module.exports = router;
