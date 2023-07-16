


import  express  from "express";
import { newUser } from "../contoller/user.js";

const router = express.Router();

router.get("/", newUser);

export default router;