const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        validate: validator.$isMongoId({msg: 'error'})
    },
    date: {
        type: Date,
        required: true
    },
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
    },
    weather: {
        type: String
    },
    location: {
        zipcode: Number
    }
})