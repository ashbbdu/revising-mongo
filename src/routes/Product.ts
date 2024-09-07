import express from "express";
import { createProduct } from "../controllers/Admin&Seller/Product";

const router = express.Router();

router.post("/addproduct" , createProduct);

export default router;