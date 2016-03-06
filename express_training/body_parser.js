//npm install body-parser

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var blocks = {};

app.post('/blocks', parseUrlencoded, function(req, res){
    var newBlock = request.body;
    blocks[newBlock.name] = newBlock.description;
})