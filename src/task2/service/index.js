const express = require('express');
const AccountHandler = require('./AccountHandler');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = new express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

AccountHandler(app);

module.exports = app;
