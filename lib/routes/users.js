const mongoose = require('mongoose');
const router = require('express').Router();
const Mood = require('../models/mood');
const weatherApi = require('./weather-api');

router
    .get('/moods', (req, res, next) => {
        const date = req.query.date;
        const query = 
        Mood.find()
        .then(moods => res.send(moods))
        .catch(next);
    })

    .get('/moods/description', (req, res, next) => {
        const description = req.query.date;
    })

    .get('/moods/:zipcode', (req, res, next) => {
        const zipcode = req.params.zipcode;
        Mood.find()
          .where('zipcode', zipcode)
          .then(moods => res.send(moods))
          .catch(next);         
      
    });

module.exports = router;
