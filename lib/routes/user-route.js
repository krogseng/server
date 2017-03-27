const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user-schema');
const ensureAuth = require('../auth/ensure-auth')();
const weatherApi = require('./weather-api');


router
    .get('/', (req, res, next) => {
        User.find()
            .then(users => res.send(users))
            .catch(next);
    })
    .get('/:id', ensureAuth, (req, res, next) => {
        const id = req.params.id;
        User.findById(id)
            .then(user => {
                if (!user) {
                    res.status(404).send({ error: 'that user not found' });
                } else {
                    res.send(user);
                }
            })
            .catch(next);
    })
    .post('/add/:id', bodyParser, weatherApi, (req, res, next) => {
        let newEntry = {
            date: new Date(),
            moods: new Color(req.body),
            weather: req.weather,
            location: req.body.zipcode  
        }
        User.findById(req.params.id)
            .then(user => {
                user.entry.push(newEntry);
                user.markModified('entry');
                return user.save();
            })
            .then(user => {
                res.send(user);
            })
            .catch(next);
    });

module.exports = router;
