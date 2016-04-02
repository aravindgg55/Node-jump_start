var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){

  response.writeHead(200);
  fs.readFile('read.txt','utf-8',function(error,contents){
    response.end(contents);
  });

}).listen(8080);
