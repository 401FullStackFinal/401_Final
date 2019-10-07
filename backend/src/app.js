'use strict';

//3rd party resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Error handling middleware
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

//prepare the express app
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Routes
//TODO: comeback and refactor this
// app.use('/slack', slackRoutes); 

// Catchalls
app.use(notFound);
app.use(errorHandler);


//exporting server and start
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Your Backend Server is running on: ${port}`);
    });
  },
};

