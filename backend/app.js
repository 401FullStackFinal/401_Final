'use strict';

//3rd party resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const toyRoute = require('./router');

//prepare the express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use(morgan('dev'));

app.use(toyRoute);


app.listen(8080, () => {
  console.log('Up : 8080');
});

