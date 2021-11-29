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


var parkingsRouter = require('./routes/parkings');
var compte= require('./routes/comptes');
var reservationsRouter= require('./routes/reservation');
var authentification = require('./routes/auth');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authentification);
app.use('/comptes', compte);

//tna7ih wa9t tcodi 

app.use(verifyToken)


app.use('/parkings', parkingsRouter);
app.use('/reservations', reservationsRouter);



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
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    console.log("tokenn:", token);
    if (token == null) return res.sendStatus(401); // if there isn't any token
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.body["payload"] = user;
        console.log(req.body);

        next(); // pass the execution off to whatever request the client intended
    });
}

module.exports = app;
