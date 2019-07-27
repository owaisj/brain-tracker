const express = require('express');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

/* eslint-disable no-console */
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
});
