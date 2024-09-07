import express from "express";
import { addReviewAndRating } from "../controllers/ReviewandRating";
const router = express.Router();

router.post("/addrating" , addReviewAndRating);

export default router;