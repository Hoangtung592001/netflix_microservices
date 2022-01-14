const Films = require('../models/Films');
const Series = require('../models/Series');
const moment = require('moment');
const axios = require('axios');
const ContentController = {
    // @desc    Get all transactions
    // @route   GET /api/v1/transactions
    // @access  Public
    // /auth/auth_user
    getFilms: async(req, res) => {
        const accessToken = req.headers['authorization'].split(' ')[1];
        console.log(process.env.AUTH_SERVICE + 'auth/auth_user');
        const response = await axios.post(process.env.AUTH_SERVICE + 'auth/auth_user', {
            accessToken: accessToken
        })
        if (response.error) {
            return res.send(response.message);
        }
        Films.find()
            .then(films => {
                return res.json(films);
            })
    },

    getSeries: async(req, res) => {
        const accessToken = req.headers['authorization'].split(' ')[1];
        const response = await axios.post(process.env.AUTH_SERVICE + 'auth/auth_user', {
            accessToken: accessToken
        })
        if (response.error) {
            return res.send(response.message);
        }
        Series.find()
            .then(series => {
                return res.json(series);
            })
    },
    searchMovies: async(req, res) => {
        const accessToken = req.headers['authorization'].split(' ')[1];
        const response = await axios.post(process.env.AUTH_SERVICE + 'auth/auth_user', {
            accessToken: accessToken
        })
        if (response.error) {
            return res.send(response.message);
        }
        const { searchTerm } = req.body;
        const filmList = await Films.find({ 'title': { '$regex': searchTerm } });
        const seriesList = await Series.find({ 'title': { '$regex': searchTerm}});
        return res.send({
            error: false,
            films: filmList,
            series: seriesList
        });
    }
}

module.exports = ContentController;