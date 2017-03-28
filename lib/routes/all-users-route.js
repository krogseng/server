const mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user-schema');
const Mood = require('../models/mood-schema');
const ensureAuth = require('../auth/ensure-auth')();
const weatherApi = require('./weather-api');

router
  .get('/', (req, res, next) => {
      User.find()
      .then(users => res.send(users))
      .catch(next);
  })
  .get('./:zipcode', ensureAuth, (req, res, next) => {
      const zipcode = req.params.zipcode;
      AllUsers.find({zipcode}, function (err, users) {
          if (err) {
              res.status(500).send(err);
          } else {
              res.send(users);
          }
      });

  })