const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    function(email, password, done) {
      db.User.findOne({
        where: {
          email
        }
      }).then(function(dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: 'No records found for that email.'
          });
        }
        if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: 'Incorrect password!'
          });
        }
        return done(null, dbUser);
      });
    }
  )
);

// Serialization and Deserialization
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
