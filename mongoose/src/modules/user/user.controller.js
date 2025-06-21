import {Router} from 'express';
import * as userService from './user.service.js';
const router = Router();
// create user
router.post('/',userService.createUser);//POST /user
// get all users
router.get('/', userService.getAllUsers); // GET /user
// update user
router.put('/:id', userService.updateUser); // PUT /user/:id
export default router;