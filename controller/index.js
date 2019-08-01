const router = require('express').Router();
const { user } = require('./api');

router.use('/api/users/', user);

module.exports = router;
