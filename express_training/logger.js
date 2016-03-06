//This is our logger middleware..

//CommonJS specification
module.exports = function(req, res, next){
    var start = +new Date(); //get milliseconds
    var stream = process.stdout;
    
    var url = request.url;
    var method = request.method;
    
    response.on('finish', function(){
       var duration = +new Date() - start;
       var message = method + ' to ' + url +
        '\ntook ' + duration + ' ms \n\n';
        
        stream.write(message); 
    });
    
    next();
}