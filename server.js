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
  .use(controller);

if (process.env.NODE_ENV === 'production')
  app.use(express.static('view/build'));

db.sequelize.sync({ force: true }).then(() => {
  db.User.create({
    email: 'demouser@test.com',
    firstName: 'Demo',
    lastName: 'User',
    password: 'password',
    bio: 'I am a test user for the development of this application.'
  }).then(() =>
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
  );
});
