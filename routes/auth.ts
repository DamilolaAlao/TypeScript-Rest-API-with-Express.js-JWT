import { Router } from "express";
const login = require("../controller/login");
const register = require("../controller/register");
const me = require("../controller/me");
const auth = require("../middleware/verifyToken");

const router = Router();

router.post("/register", register);

//Login
router.post("/login", login);

//Get the authenticated user's profile
router.get("/me", auth, me);

export default router;