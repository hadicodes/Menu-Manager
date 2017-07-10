var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);
 
}