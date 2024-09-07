import express from "express";
import { getallusers, signin, signup } from "../controllers/Auth";
const router = express.Router();

router.post("/signup" , signup);
router.post("/signin" , signin);
router.get("/users" , getallusers);

export default router;