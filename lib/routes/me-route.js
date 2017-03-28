const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user-schema');
const Mood = require('../models/mood-schema');

router
    .get('/moods', (req, res, next) => {
        const userId = (req.user.id);

        Mood.find({ userId })
            .then(moods => res.send(moods))
            .catch(next);
    });
module.exports = router;