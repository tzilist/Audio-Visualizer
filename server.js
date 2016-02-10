var express = require('express');
var path = require('path')
var app = express();



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.get('/', function(request, response){
  response.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/audiovis.js', function(request, response){
  response.sendFile(path.join(__dirname + '/audiovis.js'));
})

app.get('/d3/d3.js', function(request, response){
  response.sendFile(path.join(__dirname + '/d3/d3.js'));
})

app.get('/audio/dangerstorm.mp3', function(request, response){
  response.sendFile(path.join(__dirname + '/audio/dangerstorm.mp3'));
})

app.get('/audio/turndown.mp3', function(request, response){
  response.sendFile(path.join(__dirname + '/audio/turndown.mp3'));
})

app.get('/style.css', function(request, response){
  response.sendFile(path.join(__dirname + '/style.css'));
})

app.get('/audio/comptine.mp3', function(request, response){
  response.sendFile(path.join(__dirname + '/audio/comptine.mp3'));
})

app.get('/audio/journey.mp3', function(request, response){
  response.sendFile(path.join(__dirname + '/audio/journey.mp3'));
})

app.get('/bower_components/jquery/dist/jquery.min.js', function(request, response){
  response.sendFile(path.join(__dirname + '/bower_components/jquery/dist/jquery.min.js'));
})


app.listen(3000);

module.exports = app;
