const router = require('express').Router();
//const { getUser, addUser, updateUser, deleteUser } = require('./user.service.js');
const userServices = require('./user.service.js');

// get users
router.get('/', userServices.getUser);
router.post('/', userServices.addUser);
router.put('/', userServices.updateUser);
router.delete('/', userServices.deleteUser);
module.exports = router;