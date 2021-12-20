var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelize = require('./Utils/database')
const queue = require('./config');
const process = require('./processes/tasks');
const fileProcess = require('./processes/parseFile')
const parkingLot = require('./processes/parkingLot');

//routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// models
const User = require('./Models/user');
const Logs = require('./Models/logs');
const Job = require('./Models/job');


//all these functions inuitilaize the process function with each of the job queue.
queue.emailQueue.process(process);
queue.fileQueue.process(fileProcess);
queue.parkingLotQueue.process(parkingLot)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//routers have been defined over here.
app.use('/', indexRouter);
app.use('/user', usersRouter)


//creates en error 404 request and sends it to the next funtion.
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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

// sequelize.sync({ force: true })
//     .then((result) => {
//   console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

module.exports = app;
