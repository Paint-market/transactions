var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var routes = require('./routes/index');

var transactions = require('./routes/v1/transactions');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/', routes);
app.use('/v1/transactions', transactions);







module.exports = app;
