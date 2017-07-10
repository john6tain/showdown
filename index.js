"use strict";

const express = require('express');
const port =  process.env.PORT || 3001;

const config = require('./config/config');
const database = require('./config/database');

let app = express();

let environment =  'production';
database(config[environment]);
require('./config/express')(app, config[environment]);
require('./config/routes')(app);


app.listen(port);
console.log(`Listening on ${port}`);
