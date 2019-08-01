const express = require('express');
const session = require('express-session');
const db = require('./models');
const passport = require('./config/passport');
const controller = require('./controller');

const PORT = process.env.PORT || 3001;
const app = express()
  // Body-Parser
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  // Sessions
  .use(session({ secret: 'Typhlosion', resave: true, saveUninitialized: true }))
  .use(passport.initialize())
  .use(passport.session())
  .use(controller)
  // Test-GET
  .get('/', function(req, res) {
    return res.send('Passport JS Testing');
  });

/* eslint-disable no-console */
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
});
