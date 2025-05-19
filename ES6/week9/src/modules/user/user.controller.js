//const router = require('express').Router();
import {Router} from 'express';
const router = Router();
import * as userServices from './user.service.js';

// get users
router.get('/', userServices.getUser);
router.post('/', userServices.addUser);
router.put('/', userServices.updateUser);
router.delete('/', userServices.deleteUser);

export default router;