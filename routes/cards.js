const express = require('express');
const getCards = require('../controllers/cardsController');
const router = express.Router();

router.get('/cards', getCards);

module.exports = router;
