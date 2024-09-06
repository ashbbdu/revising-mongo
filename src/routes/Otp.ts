import express from "express";
import { sendOtp } from "../controllers/Auth";
const router = express.Router();

router.post("/sendotp" , sendOtp);

export default router;