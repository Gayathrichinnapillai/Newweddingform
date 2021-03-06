var createError = require('http-errors');  
var express = require('express');  
var path = require('path');  
var cors=require('cors');  
var logger = require('morgan'); 
var Register=require('./Routes/Userregistration');  
var Form=require('./Routes/Register');  
var app = express();  

  
// view engine setup  
app.use(express.static(path.join(__dirname, 'public')));  
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'jade');  
app.use(cors());  
app.use(logger('dev'));  
app.use(express.json());  
app.use(express.urlencoded({ extended: false }));  
 
app.use('/Register',Register);  
app.use('/Weddingform',Form); 
// catch 404 and forward to error handler  
app.use(function(req, res, next) {  
  next(createError(404));  
});  

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
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
app.listen(9001);
module.exports = app; 




