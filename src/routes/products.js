import express from "express";
import { response } from "express";
import { request } from "express";
import { createProduct, deleteProduct, listproduct, listProductDetail, updateProduct } from "../controllers/products";
const router = express.Router();



router.get('/products',listproduct)
router.get('/products/:id',listProductDetail)
router.post('/products',createProduct)
router.delete('/products/:id',deleteProduct)
router.put('/products/:id',updateProduct)

export default router
