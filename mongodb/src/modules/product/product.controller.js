import { Router } from 'express';
import { createProduct, deleteProduct, getAllProducts, updateProduct } from './product.service.js';
const router = Router();
//add product
router.post('/',createProduct);
// update product
router.put('/:id',updateProduct);
// delete product
router.delete('/:id',deleteProduct)
// get all products
router.get('/',getAllProducts);
export default router;
