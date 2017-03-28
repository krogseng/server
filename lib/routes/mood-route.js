const mongoose = require('mongoose');
const ObjectId = mongoose.mongo.ObjectId;
const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user-schema');
const Mood = require('../models/mood-schema');

router
    .get('/all', (req, res, next) => {
        Mood.find()
            .then(moods => res.send(moods))
            .catch(next);
    })
    .get('/:userId', (req, res, next) => {
        const id = ObjectId(req.params.userId);
        console.log('in get by user', id, ' userid ', req.params);
        Mood.find({ userId: id })
            .then(moods => res.send(moods))
            .catch(next);
    })
    .get('/date/:date', (req, res, next) => {
        const id = req.params.id;
        const date = req.params.date;
        console.log('user and date ', id, ' and ', date);
        Mood.find({ 'userId': id, 'date': date })
            .then(moods => res.send(moods))
            .catch(next);
    });
module.exports = router;