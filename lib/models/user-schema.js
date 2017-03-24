const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    date: [{
        moods: [{
            day: {
                type: Date,
                required: true
            },
            color: {
                type: Schema.Types.ObjectId,
                ref: 'Color'
            },
            comment: {
                type: String
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

userSchema.virtual('password').set(function(password) {
    this.hash = bcrypt.hashSync(password, 5)
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash);
};

module.exports = mongoose.model('User', userSchema);