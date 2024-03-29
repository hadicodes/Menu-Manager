// controller for the signin route
var exports = module.exports = {};

// Exports the signup method which renders the signup page
exports.signup = function(req, res) {
    res.render('signup', {error: req.flash('error')});
}

// Exports the signin method which renders the signin page
exports.signin = function(req, res) {
    res.render('signin', {error: req.flash('error')});
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}

