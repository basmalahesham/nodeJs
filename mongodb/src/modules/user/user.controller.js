import {Router} from 'express';
import { addUser, getAllUsers, getAllUsers2, updateUser, updateUser2 } from './user.service.js';
const router = Router();

// add user >> signup
/**
 * access api without token >> admin ,user
 */
router.post('/',addUser);// POST /user
// get all users
router.get('/', getAllUsers2);
// update user
router.put('/:id', updateUser); // PUT /user/:id
export default router;