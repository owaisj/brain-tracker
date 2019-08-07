const userRoutes = require('./user-routes');
const moodRoutes = require('./mood-routes');
const sleepRoutes = require('./sleep-routes');

// TODO: DELETE Routes
module.exports = {
  user: userRoutes,
  mood: moodRoutes,
  sleep: sleepRoutes
};
