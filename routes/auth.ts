import { Router } from "express";
const login = require("../controller/login");
const register = require("../controller/register");

const router = Router();

router.post("/register", register);

//Login
router.post("/login", login);

// export {};
module.exports = router;
