const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

// Root route (displays signup form)
router.get('/', authController.signin);

// router.get('/logout', authController.logout);

// router.post('/signin', passport.authenticate('local-signin', {
//         successRedirect: '/addMenuItem',

//         failureRedirect: '/signin'
//     }

// ));


// function isLoggedIn(req, res, next) {

//     if (req.isAuthenticated())

//         return next();

//     res.redirect('/signin');

// }

module.exports = router;