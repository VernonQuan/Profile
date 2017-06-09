const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
let app = express();

// ===============================================
// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ===============================================
// Serve static content
app.use('/', express.static(__dirname + '/../client/dist'));

module.exports = app;