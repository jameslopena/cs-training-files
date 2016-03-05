var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
chat.on('message', function(message){
  console.log(message);
});




/*
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response){
    response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);
 */