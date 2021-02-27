//import user's model
const User = require('../models/users');

function getUsers(req, res) {
  return User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => res.status(400).send(err));
}

function getOneUser(req, res) {
  return User.findById(req.params.id)
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }

      return res.status(404).send({ message: 'User ID not found' });
    })
    .catch((err) => {
      if(err.name === 'CastError') {
        res.status(400).send({ message: err});
      }
      res.status(500).send({ message: 'Server Error' });
    });
}

function createUSer(req, res) {
  const { name, about, avatar } = req.body;

  return User.create({name, about, avatar})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        res.status(400).send({ message: err});
      }
      res.status(500).send({ message: err });
    });
}

function updateProfile(req, res) {
  const { name, about } = req.body;

  return User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((profile) => {
      if(!profile) {
        return res.status(404).send({ message: 'Not a valid profile id' });
      }
      return res.send({ data: profile });
    })
    .catch(() => res.status(400).send({ message: 'User cannot patched' }));
}

function updateAvatar(req, res) {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((userAvatar) => {
      if(!userAvatar) {
        return res.status(404).send({ message: 'Not valid profile id' });
      }

      return res.send({ data: userAvatar });
    })
    .catch(() => res.status(400).send({ message: 'User cannot be patched' }));
}

module.exports = {
  getUsers,
  getOneUser,
  createUSer,
  updateProfile,
  updateAvatar,
};
