const mongoose = require('mongoose');
mongoose.Promise = Promise;

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/colordiary';

module.exports = mongoose.connection(dbUri);

mongoose.connection.on('connection', () => {
    console.log('you are connected');
})