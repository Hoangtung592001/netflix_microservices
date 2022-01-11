const Films = require('../models/Films');
const Series = require('../models/Series');
const moment = require('moment');

const ContentController = {
    // @desc    Get all transactions
    // @route   GET /api/v1/transactions
    // @access  Public
    getFilms: async(req, res) => {
        Films.find()
            .then(films => {
                return res.json(films);
            })
    },

    getSeries: async(req, res) => {
        Series.find()
            .then(series => {
                return res.json(series);
            })

    }
}

module.exports = ContentController;