const express = require('express');

const router = express.Router();

const ContentController = require('../controllers/ContentController');
router
    .route('/content/get_films')
    .get(ContentController.getFilms);
router
    .route('/content/get_series')
    .get(ContentController.getSeries);
router
    .route('/content/search_movies')
    .post(ContentController.searchMovies)



module.exports = router;