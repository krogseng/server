const app = require('express')();
const morgan = require('morgan')('dev');
const errorHandler = require('./error-handler')();
const auth = require('./routes/auth-route');
const ensureAuth = require('./auth/ensure-auth');

app.use(morgan);

app.use('/auth', auth);


app.use(errorHandler);
module.exports = app;