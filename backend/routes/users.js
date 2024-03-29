// const router = require('express').Router();
const express = require('express');
let User = require('../models/user.model');

const router = express.Router();

router.route('/').get((req, res) => {
  // Retreive documents
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({
    username
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;