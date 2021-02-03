var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

/* var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI'); */
var sendMailRouter = require('./routes/sendMail');

var app = express();

// view engine setup
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//middleware
app.use(express.static(path.join(__dirname, 'client/build')));

/* app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter); */
app.use('/api/sendMail', sendMailRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404, 'Oops we did not find what you was looking for'));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
