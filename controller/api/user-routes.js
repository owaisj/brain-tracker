const router = require('express').Router();
const db = require('../../models');
const passport = require('../../config/passport');

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send('Login worked!');
});

// User Signup Route
router.post('/signup', function(req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.redirect(307, '/login');
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Grab User Data
router.get('/data', function(req, res) {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id,
      bio: req.user.bio
    });
  }
});

module.exports = router;
