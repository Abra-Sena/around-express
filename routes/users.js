const express = require('express');

const router = express.Router();
const { getOneUser, getUsers, createUSer, updateProfile, updateAvatar } = require('../controllers/userController');

router.get('/users/:id', getOneUser);
router.get('/users', getUsers);
router.post('/users', createUSer);
router.patch('/users/me', updateProfile);
router.proppatch('/users/me/avatar', updateAvatar);

module.exports = router;
