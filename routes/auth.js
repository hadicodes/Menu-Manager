const express = require('express');
const app = express();
const authController = require('../controllers/authController.js');

module.exports = function (app, passport) {
    // route to signup page
    app.get('/signup', authController.signup);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/menu',
            failureRedirect: '/signup',
            failureFlash: true
        }

    ));

    // route to signin page
    app.get('/', authController.signin);

    // route to logout page
    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/menu/add',
        failureRedirect: '/',
        failureFlash: true
    }));
};