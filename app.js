var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var trans_get = require('./routes/v1/getTransactions');
var trans_post = require('./routes/v1/postTransactions');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use('/v1/transactions', trans_post);






module.exports = app;
