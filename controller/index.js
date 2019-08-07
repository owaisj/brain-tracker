const router = require('express').Router();
const { user, mood, sleep } = require('./api');

router.use('/api/users/', user);
router.use('/api/mood/', mood);
router.use('/api/sleep/', sleep);

module.exports = router;
