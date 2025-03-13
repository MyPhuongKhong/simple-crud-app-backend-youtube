import express from "express";
const router = express.Router();
import productController from '../controllers/product.controller.js';
const { getProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = productController;

router.get('/', getProducts);
router.get('/:id', getOneProduct);
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);

export default router;