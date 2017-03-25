const mongoose = require('mongoose'),
validators = require('mongoose-validators');
const Schema = mongoose.Schema;

var colorSchema = new Schema({
    color: {
        hexValue: {
            type: String, 
            validate: validators.isHexColor()
        },
        mood: {
            type: String
        }    
    }
})

module.exports = mongoose.model('Color', colorSchema);