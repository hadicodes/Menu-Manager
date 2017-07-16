const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

const db = require('../models');

module.exports = function (router, passport) {

    router.get('/signup', authController.signup);

    router.get('/signin', authController.signin);

    router.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }

    ));


    router.get('/dashboard', isLoggedIn, authController.dashboard);

    router.get('/logout', authController.logout);

    router.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/addMenuItem',

            failureRedirect: '/signin'
        }

    ));


    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}

module.exports = router;