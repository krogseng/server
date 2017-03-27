const apiKey = process.env.WEATHER_API_KEY;
const requestProxy = require('request-promise');
//when it's done:
//save the weather data on req.weather
module.exports = function weatherApi(req, res, next) {
    
    requestProxy(`http://api.wunderground.com/api/${apiKey}/geolookup/q/${req.body.zipcode}.json`)
    .then(
        result => {
            req.weather = result;
            next();
        }
    )
    .catch(error => next(error));
}