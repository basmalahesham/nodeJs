import { Router } from 'express';
import { createProduct, deleteProduct, getAll, getAll2, updateProduct } from './product.service.js';
const router = Router();
//add product
router.post('/',createProduct);
// update product
router.put('/:id',updateProduct);
// delete product
router.delete('/:id',deleteProduct)
// get all products
router.get('/',getAll);
export default router;
