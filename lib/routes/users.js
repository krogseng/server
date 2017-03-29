const router = require('express').Router();
const Mood = require('../models/mood');

router
    .get('/moods', (req, res, next) => {
        const date = req.query.date;
        const query = '';
        Mood.find()
        .then(moods => res.send(moods))
        .catch(next);
    })

    // .get('/moods/:description', (req, res, next) => {
    //     const description = req.params.weather.description;
    //     console.log('description??', weather.description);
    //     Mood.find(description)
    //       .where('description', description)
    //       .then(moods => res.send(moods))
    //       .catch(next);
    // })

    .get('/moods/zip/:zipcode', (req, res, next) => {
        const zipcode = req.params.zipcode;
        Mood.find()
          .where('zipcode', zipcode)
          .then(moods => res.send(moods))
          .catch(next);               
    })

    .get('/moods/city/:city', (req, res, next) => {
        const city = req.params.city;
        Mood.find()
          .where('weather.city', city)
          .then(moods => res.send(moods))
          .catch(next);               
    })

    .get('/moods/state/:state', (req, res, next) => {
        const state = req.params.state;
        Mood.find()
          .where('weather.state', state)
          .then(moods => res.send(moods))
          .catch(next);               
    });    






module.exports = router;
