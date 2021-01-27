const path = require('path');
const getFileContent = require('../helpers/getFileContent');
const pathToData = path.join(__dirname, '..', 'data', 'users.json');

function getUsers(req, res) {
  getFileContent(pathToData)
    .then((users) => {
      res.status(200).send(users);
    });
}

function getOneUser(req, res) {
  getFileContent(pathToData)
    .then((users) => {
      const thisUser = users.find((user) => user._id === req.params.id);
      if (thisUser) {
        return res.status(200).send(thisUser);
      }

      return res.status(404).send({ message: 'User ID not found' });
    })
    .catch(() => res.status(500).send({ message: 'Server Error' }));
}

module.exports = {
  getUsers,
  getOneUser,
};
