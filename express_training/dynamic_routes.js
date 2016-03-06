var express = require('express');
var app = express();

var blocks = {
    'Fixed': "test1",
    'Movable': "test2",
    'Rotating': "test3"
};

app.get('/blocks/:name', function (req, res) {
   
    var description = blocks[req.params.name];
    if (!description) {
        res.status(404).json("wrong");
    }else {
        
    res.json(description);
        
    }
    
});

app.listen(3030, function () {
    console.log('listening');
});


//---------------------------------------------
var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.get('/cities/:name', function (request, response) {
  var cityInfo = cities[request.params.name];
  if(cityInfo){
    response.json(cityInfo);
  } else{
    response.status(404).json("City not found");
  }
});

app.listen(3000);