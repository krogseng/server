require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan')('dev');
const errorHandler = require('./error-handler')();
const auth = require('./routes/auth-route');
const ensureAuth = require('./auth/ensure-auth')();
const user = require('./routes/user-route');
const block = require('./routes/block-route');
const color = require('./routes/color-route');
const mood = require('./routes/mood-route');
const me = require('./routes/me-route');
const users = require('./routes/users-route');

app.use(morgan);

app.use(express.static('public'));


app.use('/api/mood', mood);
app.use('/api/color', color);
app.use('/api/block', block);
app.use('/api/me', ensureAuth, me);

app.use('/api/auth', auth);
app.use('/api/user', ensureAuth, user);

app.use('/api/users', users);


app.use(errorHandler);
module.exports = app;
