var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');
var fs = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//=======================
//USING MODULE
var index = require('./routes/index');
var wheel_setting = require('./routes/wheel_setting');
var log_record = require('./routes/log_record');
var authorized = require('./routes/authorized');
var news = require('./routes/news');
var map_upload = require('./routes/map_upload');
var map_upload = require('./routes/map_upload');
//ROUTING
app.use('/', index);
app.use('/authorized', authorized);
app.use('/wheel_setting', wheel_setting);
app.use('/new', news);
app.use('/log_record', log_record);
app.use('/map_upload', map_upload);
//======================

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
