const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const assert = require('chai').assert;
const User = require('../lib/models/user-schema');

describe('testing the user schema', () => {
    it('saves a user with the required fields and assigns an id and hash', () => {
        const test = new User({ 
            username: 'colordiary',
            email: 'not email format',
            password: 'colordiary',
        })
        test.save(function(err) {
            if (err) return res.end();
            return res.sendStatus(201);
        });
        
        //validtor returns true or false, in this case we are purposely setting it to false to test
        const emailVal = validator.isEmail(test.email);

        //validator returns true or false, in this case we are purposely setting it to true
        const usernameVal = validator.isAlpha(test.username)

        //username should be true since it is not not empty
        assert.isTrue(usernameVal)

        //emailVail should be false since it is not in email format
        assert.isFalse(emailVal)

        //username matches
        assert.equal(test.username, 'colordiary')

        //email matches
        assert.notEqual(test.username, 'colordiary@gmail.com')

        //checking to see if the new user object is getting saved and assigned a hased password and id
        assert.isDefined(test._id)
        assert.isDefined(test.hash)
    })

    it('sets hash from password and compares correctly', () => {
        const data = { username: 'colordiary', email: 'colordiary@gmail.com', password: 'colorzRcool' };
        const user = new User(data);
        
        //password is undefined but the hash is
        assert.isUndefined(user.password);
        assert.isDefined(user.hash);
        
        //correct password comparison
        assert.isTrue(user.comparePassword('colorzRcool'));
        assert.isFalse(user.comparePassword('this is not the password'));
        
        //data password is user password
        assert.isTrue(user.comparePassword(data.password));
        assert.notEqual(user.hash, data.password);
    })
});