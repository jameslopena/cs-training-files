var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("Dog is running.");
    setTimeout(function() {
       res.write("Dog is done.");
       res.end() 
    },1000);
}).listen(8080);