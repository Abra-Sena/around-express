const path = require('path');
const getFileContent = require('../helpers/getFileContent');

function getCards(req, res) {
  const pathToCards = path.join(__dirname, '..', 'data', 'cards.json');

  getFileContent(pathToCards)
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => res.status(500).send({ message: 'Server Error' }));
}

module.exports = getCards;
