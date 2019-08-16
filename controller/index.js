const router = require('express').Router();
const { user, mood, sleep, journal } = require('./api');

router.use('/api/users/', user);
router.use('/api/mood/', mood);
router.use('/api/sleep/', sleep);
router.use('/api/journal/', journal);

module.exports = router;
