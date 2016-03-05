var redis = require('redis');
var client = redis.createClient();

client.get('question', function(error, data){
  console.log(data);
});

//_______________________________________

var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush('questions', question1, function(error, value){
  console.log(value);
});

client.lpush('questions', question2, function(error, value){
  console.log(value);
});


/---------------------

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  
  redisClient.lrange('questions',0,-1,function(err, value){
                     
    value.forEach(function(message){
                       client.emit('question',message);
                     });
                     });
  
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush("questions", question);
    }
  });
});