const router = require('express').Router();
const Block = require('../models/block');

router
    .get('/block', (req, res, next) => {
        console.log('this is block ', req.body);
        Block.find()
            .then(block => res.send(block))
            .catch(next);
    });
module.exports = router;