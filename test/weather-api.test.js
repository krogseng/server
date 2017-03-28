const chai = require('chai');
const chaiHttp = require('chai-Http');
const mongoose = require('mongoose');

const app = require('../lib/app');

const assert = chai.assert;

chai.use(chaiHttp);

process.env.DB_URL = 'mongodb://localhost:27017/colordiary-test';
require('../lib/connection');

describe('weather api route', () => {

    const request = chai.request(app);

    const moodOne = new Mood({
        userId: 12345,
        date: new Date,
        color: 3415,
        comment: 'it was a rainy monday',
        block: 332,
        weather: {},
        zipcode: 97239        
    })

    before(() => mongoose.connection.dropDatabase());

    it('posts a new entry', () => {
        return request.post('/contacts')
            .send(contactOne)
            .then(res => {
                contactOne = res.body;
                assert.equal(res.body.name, 'Claire Follett')
                assert.equal(res.body.email, 'chlaw101@gmail.com')
                assert.equal(res.body.company, 'Code Fellows')
                assert.equal(res.body.notes, 'loves dogs')
                assert.equal(res.body.category, 'school')
                assert.equal(res.body._id, contactOne._id)
            })
    })