const express = require('express');
const router = express.Router();
const { getOneUser, getUsers } = require('../controllers/userController');

router.get('/users/:id', getOneUser);
router.get('/users', getUsers);

module.exports = router;
