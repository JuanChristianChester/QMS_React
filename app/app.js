var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbAPIRouter = require("./routes/DB_API");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var auditFeedbackRouter = require("./routes/dbauditfeedback")
var evidenceRouter = require("./routes/dbevidence")
var DBQMSRequirementsRouter = require("./routes/dbqmsrequirements")

var cors = require("cors");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/DB_API", dbAPIRouter);
app.use("/AuditFeedback", auditFeedbackRouter);
app.use("/Evidence", evidenceRouter);
app.use("/QMSRequirements", DBQMSRequirementsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
