const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const winston = require('winston');
const passport = require('passport');
const session = require('express-session');
const database = require('./config/database');


app.use(favicon(__dirname + '/app/img/favicon.ico'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Root directory from which the static assets are to be served.
app.use(express.static(path.join(__dirname, 'app')));


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


app.use(session({
  secret: "agentzerozeroseven",
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

database.connect();

var user = require(path.join(__dirname, 'routes/user'));
app.use('/api', user);

// Otherwise render the index.html page for the Backbone SPA
// This means we don't have to map all of the SPA routes in Express
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});



// catch 404 and forward to error handler
/*
app.use(function(req, res, next){
  res.status(404);
  res.json({
    error: 'Not found'
  });
  return;
});
*/

// error handlers
/*app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({
    error: err.message
  });
  return;
});*/




app.listen(port);
console.log('Server started on port: ' + port);