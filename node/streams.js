// $ curl --upload-file file.jpg http://locahost:8080

/*
var fs = require('fs');
var file = fs.createReadStream("readme.md");
var newFile = fs.createWriteStream('readme_copy.md');
*/


var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.on('readable',function(){
  var chunk = null;
  while(null !== (chunk = file.read()))
    {
      console.log(chunk.toString());
    }
  
});

//directly write to stream
var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);



var fs = require('fs');
var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile,{end: false});

file.on('end', function(){
  destFile.end('Finished!');
});