const express = require('express');
const port = process.env.PORT || 80;
const app = express();
const bodyParser = require('body-parser');
const winston = require('winston');
// const mongoose = require('mongoose');

app.use(bodyParser.json());
// root directory from which the static assets are to be served.
app.use(express.static('./app'));
// Set up a logger.
app.locals.logger = new winston.Logger();
app.locals.logger.add(winston.transports.Console, {
  colorize: true
});
// Log every request.
app.use(function (req, res, next) {
  req.app.locals.logger.info('[' + req.method + ']', req.url);
  next();
});


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});


app.listen(port);
console.log('Server started on port: ' + port);