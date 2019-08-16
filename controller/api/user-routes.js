const router = require('express').Router();
const db = require('../../models');
const passport = require('../../config/passport');

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.json('AUTHENTICATED');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('User Logged Out!');
});

// User Signup Route
router.post('/signup', function(req, res) {
  db.User.create({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
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
    db.User.findAll({
      where: { id: req.user.id },
      include: [db.Journal, db.Mood, db.Sleep]
    }).then(authUser => res.json(authUser));
  }
});

module.exports = router;
