const express = require('express');

const router = express.Router();

const AccountController = require('../controllers/AccountController');
const AuthController = require('../controllers/AuthController');
router
    .route('/account/signup')
    .post(AccountController.signup);
router
    .route('/account/signin')
    .post(AccountController.signin);
router.route('/account/signout')
    .post(AccountController.signout);
router
    .route('/auth/grant_access_token')
    .post(AuthController.grantAccessToken);
router.route('/auth/auth_user')
    .post(AuthController.authUser);



module.exports = router;