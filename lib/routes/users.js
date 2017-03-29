const mongoose = require('mongoose');
const router = require('express').Router();
const Mood = require('../models/mood');

router
    .get('/all', (req, res, next) => {
        Mood.find()
        .then(moods => res.send(moods))
        .catch(next);
    })
    .get('/:city', (req, res, next) => {
        const city = req.params.city;
        Mood.find({ "weather.city" : city })
            .then(res => {
                console.log(res)
            })

    });

module.exports = router;
