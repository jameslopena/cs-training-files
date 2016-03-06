var express = require('express');
var app = express();

app.use('/:name', function (req, res) {
    res.end("test");
})

app.listen(8080, function () {
    console.log("listening..")
});


//-----------------
var express = require('express');
var app = express();
app.get('/locations', function(req, res){
  var cities = ["Caspiana", "Indigo", "Paradise"];
  res.json(cities);
});

app.listen(3001, function(){
  console.log("Running Express");
});

//------------------
var express = require('express');
var app = express();

app.get('/cities', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});

app.get('/locations', function (request, response) {
  response.redirect(301,'/cities');
});


app.listen(3001, function () {
  console.log("Running Express");
});

//using our own middelware
//github.com/expressjs/morgan 
var logger = require('./logger')
app.use(logger);