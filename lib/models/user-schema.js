const mongoose = require('mongoose');
const validator = require('node-mongoose-validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        validate: validator.$isAlpha({msg: 'Please create a username with letters'})
    },
    email: {
        type: String,
        required: true,
        validate: validator.$isEmail({msg: 'Please provide an email'})
    },
    hash: {
        type: String,
        required: true
    },
    dates: [{
        date: {
            type: Date
        },
        moods: [{
            color: {
                type: Schema.Types.ObjectId,
                ref: 'Color',
                validate: validator.$isMongoId({msg: 'error'})
            },
            comment: {
                type: String
            },
            block: {
                type: Schema.Types.ObjectId,
                ref: 'Block',
                validate: validator.$isMongoId({msg: 'error'})
            }
        }],
        weather: {
            type: String
        },
        location: {
            city: String,
            country: String
        },
    }]
});

userSchema.virtual('password').set(function (password) {
    this.hash = bcrypt.hashSync(password, 5)
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash);
};

module.exports = mongoose.model('User', userSchema);