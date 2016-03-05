var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(client){
  console.log('client connected');
});

server.listen(8080);



 /*
<script src="/socket.io/socket.io.js"></script>

<script>
  // use the socket.io server to connect to localhost:8080 here
  var socket = io.connect('http://localhost:8080');

</script>
*/



var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
  
  client.on('question', function(data){
    client.broadcast.emit('question', data);
  });
  
});



var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  // listen for answers here
  client.on('answer', function(question,answer){
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);