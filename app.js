require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true })
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once ('open', () =>console.log('connected to DataBase'))


var conducteursRouter = require('./routes/conducteurs');
var ownersRouter = require('./routes/owners');
var parkingsRouter = require('./routes/parkings');
var comptesRouter= require('./routes/comptes');
var reservationsRouter= require('./routes/comptes');
var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/conducteur', conducteursRouter);
app.use('/owner', ownersRouter);
app.use('/parking', parkingsRouter);
app.use('/compte', comptesRouter);
app.use('/reservation', reservationsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
  // set locals, only providing error in development
message : err.message,
  error : req.app.get('env') === 'development' ? err : {},

  // render the error page
})
res.status(err.status || 500);

});

module.exports = app;
