//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {

  var User = user;
  var LocalStrategy = require('passport-local').Strategy;


  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });


  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    User.findById(id).then(function (user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });

  });


  passport.use('local-signup', new LocalStrategy(

    {
      usernameField: 'userName',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, userName, password, done) {


      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      User.findOne({
        where: {
          userName: userName
        }
      }).then(function (user) {

        if (user) {
          return done(null, false, {
            message: 'That username is already taken'
          });
        } else {
          var userPassword = generateHash(password);
          var data = {
            userName: userName,
            password: userPassword
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

  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(

    {

      // by default, local strategy uses username and password, we will override with userName
      usernameField: 'userName',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, userName, password, done) {

      var User = user;

      var isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({
        where: {
          userName: userName
        }
      }).then(function (user) {

        if (!user) {
          return done(null, false, {
            message: 'user name does not exist'
          });
        }

        if (!isValidPassword(user.password, password)) {

          return done(null, false, {
            message: 'Incorrect password.'
          });

        }

        var userinfo = user.get();

        return done(null, userinfo);

      }).catch(function (err) {

        console.log("Error:", err);

        return done(null, false, {
          message: 'Something went wrong with your Signin'
        });


      });

    }
  ));

}