var express = require('express');
var app = express();

app.get('/',function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);




var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
var req = require('request');
req(searchURL, function(error, response, body){
  console.log(body);
});