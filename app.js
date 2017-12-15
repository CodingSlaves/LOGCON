var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var mongoose = require('mongoose');



var index = require('./routes/index.js');
var login = require('./routes/login.js');
var SignUp =  require('./routes/SignUp.js');
var problem = require('./routes/problem.js');
var InsertP = require('./routes/InsertP.js');


var app = express();

var db = mongoose.connection;


db.on('err',console.error);
db.once('open',function(){
    console.log('connected to mongodb');
});
mongoose.connect("mongodb://localhost:27017/ContestDB",function(err){
    if(err) {
        console.log('DB Error');
        throw err;
    }else{
        console.log('Connect sucess!');
    }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'adlakfknkl',
    resave: false,
    saveUninitialized: true
}));


app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in developmentu
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
