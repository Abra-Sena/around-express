const express = require('express');

const { getCards, createCard, deleteCard, likeCard, unLikeCard } = require('../controllers/cardsController');
const router = express.Router();

router.get('/cards', getCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);
router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', unLikeCard);

module.exports = router;
