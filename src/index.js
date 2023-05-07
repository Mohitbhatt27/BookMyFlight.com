const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const {City,Airport} = require('./models/index');
// const airport = require('./models/airport');

const setupAndStartServer = async () => {
  // create the express object

  const app = express();

  // add middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // add routes
  app.use('/api', ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on port`, PORT);

    if (process.env.SYNC_DB === 'true') {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
