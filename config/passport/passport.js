// Imports bcrypt which we need to secure passwords.
var bCrypt = require('bcrypt-nodejs');

// Initializes the passport-local strategy, and the user model, which will be passed as an argument.
module.exports = function (passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;


    // Defines our custom strategy with our instance of the LocalStrategy
    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'email',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },
        // Handles storing a user's details.
        function (req, email, password, done) {
            // Function that generates hashed password
            var generateHash = function (password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };



            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                if (user)

                {

                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else

                {

                    var userPassword = generateHash(password);

                    var data =

                        {
                            email: email,

                            password: userPassword,

                            firstname: req.body.firstname,

                            lastname: req.body.lastname

                        };

                    User.create(data).then(function (newUser, created) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            return done(null, newUser);

                        }

                    });

                }

            });

        }

    ));
}