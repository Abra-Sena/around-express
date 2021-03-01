//import user's model
const User = require('../models/users');

function getUsers(req, res) {
  return User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => res.status(500).send(err));
}

function getOneUser(req, res) {
  return User.findById(req.params.id)
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }

      return res.status(404).send('User ID not found');
    })
    .catch((err) => {
      if(err.name === 'CastError') {
        res.status(400).send({ message: err.message });
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
        res.status(400).send({ message: err.message });
      }
      res.status(500).send({ message: err });
    });
}

function updateProfile(req, res) {
  return User.findByIdAndUpdate(
      req.user._id,
      {
        name: req.params.name,
        about: req.params.about
      },
      {
        new: true,
        runValidators: true
      }
    )
    .then((profile) => {
      if(!profile) {
        return res.status(404).send({ message: 'Not a valid profile id' });
      }
      return res.status(200).send({ data: profile });
    })
    .catch(() => res.status(500).send({ message: 'User profile cannot be patched' }));
}

function updateAvatar(req, res) {
  return User.findByIdAndUpdate(req.user._id, { avatar: req.params.avatar }, { new: true, runValidators: true })
    .then((userAvatar) => {
      if(!userAvatar) {
        return res.status(404).send({ message: 'Not a valid profile id' });
      }

      return res.status(200).send(userAvatar);
    })
    .catch(() => res.status(500).send({ message: 'User avatar cannot be patched' }));
}

module.exports = {
  getUsers,
  getOneUser,
  createUSer,
  updateProfile,
  updateAvatar,
};
