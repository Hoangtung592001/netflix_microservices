const express = require('express');

const router = express.Router();

const AccountController = require('../controllers/AccountController');

router
    .route('/signup')
    .post(AccountController.signup);
router
    .route('/signin')
    .post(AccountController.signin);


module.exports = router;