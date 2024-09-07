import express from "express";
import { buyProduct, createProduct, getAllProducts } from "../controllers/Admin&Seller/Product";

const router = express.Router();

router.post("/addproduct" , createProduct);
router.get("/products" , getAllProducts);
router.post("/buyproduct" , buyProduct);

export default router;