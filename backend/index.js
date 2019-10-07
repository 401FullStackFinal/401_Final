'use strict';

require('dotenv').config();

const scoreRouter = require('./routes/router.js')

const app = require('./src/app.js');

app.start(8080);

