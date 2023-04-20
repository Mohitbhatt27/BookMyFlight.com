const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require ('./config/serverConfig'); 
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {

  // create the express object

  const app = express();

    // add middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // add routes
    app.use('/api', ApiRoutes);


  app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
  });
};

setupAndStartServer();
