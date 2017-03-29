const router = require('express').Router();
const Color = require('../models/color');

router
    .get('/color', (req, res, next) => {
        Color.find()
            .then(color => res.send(color))
            .catch(next);
    });
module.exports = router;