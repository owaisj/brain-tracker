const router = require('express').Router();
const db = require('../../models');
const passport = require('../../config/passport');

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send('User is logged in.');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('User Logged Out!');
});

// User Signup Route
router.post('/signup', function(req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    bio: req.body.bio
  })
    .then(function() {
      res.status(200).send('User Created!');
    })
    .catch(function(err) {
      res.status(422).json(err);
    });
});

router.get('/data', function(req, res) {
  if (!req.user) {
    res.json({});
  } else {
    // This is where we'll grab user data
    res.json({
      email: req.user.email,
      id: req.user.id,
      bio: req.user.bio
    });
  }
});

module.exports = router;
