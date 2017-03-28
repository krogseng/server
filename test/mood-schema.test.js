const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const assert = require('chai').assert;
const User = require('../lib/models/user-schema');
const Mood = require('../lib/models/mood-schema');
const Color = require('../lib/models/color-schema');
const Block = require('../lib/models/block-schema');

describe('saves new user, color, and block number so we can test and populate the mood schema', () => {
    
    it('tests the mood schema with each field populated', () => {
        //saving new user
        const userOne = new User({ 
            username: 'userOne',
            email: 'colordiary@gmail.com',
            password: 'password',
        })
        userOne.save(function(err) {
            if (err) return res.end();
            return res.sendStatus(201);
        });
        //saving new color
        const colorOne = new Color({
            index: 0,
            path: '/assets/blue1.svg',
            hexColor: '#8181FC',
            mood: 'sad',
        })
        colorOne.save(function(err) {
            if (err) return res.end();
            return res.sendStatus(201);
        });
        //saving new block
        const blockOne = new Block({
            blockNumber: 0,
            timeFrame: 'morning'
        })
        blockOne.save(function(err) {
            if (err) return res.end();
            return res.sendStatus(201);
        });
        //populating the mood schema and testing
        const moodOne = new Mood({
            userId: userOne._id,
            date: new Date,
            color: colorOne._id,
            comment: 'it was a rainy monday',
            block: blockOne._id,
            weather: {},
            zipcode: 97239        
        })
        console.log(moodOne)
    })
});