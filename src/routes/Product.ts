import express from "express";
import { createProduct, getAllProducts } from "../controllers/Admin&Seller/Product";

const router = express.Router();

router.post("/addproduct" , createProduct);
router.get("/products" , getAllProducts);

export default router;