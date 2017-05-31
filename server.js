const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require('path');
const bodyParser = require('body-parser');
const winston = require('winston');
const passport = require('passport');
const session = require('express-session');
const database = require('./config/database');
const routes = require("./config/routes");


// Uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Root directory from which the static assets are to be served.
app.use(express.static(path.join(__dirname, 'app')));

app.use(session({
  secret: "jamesbondagentzerozeroseven",
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

database.connect();
app.use(routes);


// catch 404 and forward to error handler
/*
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/

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


app.listen(port);
console.log('Server started on port: ' + port);