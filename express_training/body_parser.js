//npm install body-parser

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var blocks = {};

app.post('/blocks', parseUrlencoded, function(req, res){
    var newBlock = req.body;
    blocks[newBlock.name] = newBlock.description;
})


//----------------------

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.post('/cities', parseUrlencoded, function (request, response) {
  var city = createCity(request.body.name, request.body.description);
  response.status(201).json(city);
});



app.listen(3000);

var createCity = function(name, description){
  cities[name] = description;
  return name; 
};

app.delete('/cities/:name', function(req, res){
  if(cities[req.cityName]){
      delete cities[req.cityName];
  res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }

});
