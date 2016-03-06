//this is like a middle ware

app.param('name', function (req, res, nex){
   var name = request.params.name;
   var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
   
   req.blockName = block;
   next(); 
});


//then--,,

app.get('/blocks/:name', function(req, res){
   var description = blocks[req.blockName];
   ... 
});


///----------------

var express = require('express');
var app = express();

app.param('year', function(req, res, next){
          if(isYearFormat(req.params.year))
            {
              next();
            } else{
              res.status(400).json("Invalid Format for Year");
            }
          });

var citiesYear = {
  5000: 'Lotopia',
  5100: 'Caspiana',
  5105: 'Indigo',
  6000: 'Paradise',
  7000: 'Flotilla'
};

function isYearFormat(value) {
  var regexp = RegExp(/^d{4}$/);
  return regexp.test(value);
}

app.get('/cities/year/:year', function(request, response) {
  var year = request.params.year;
  var city = citiesYear[year];

  if(!city) {
    response.status(404).json("No City found for given year");
  } else {
    response.json("In " + year + ", " + city + " is created.");
  }
});

app.listen(3000); 