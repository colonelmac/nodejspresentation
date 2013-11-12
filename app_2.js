var http = require('http'),
    counter = 0; 

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello world\n ' + counter + 'previous visitors');
    counter++; 
});

server.listen(9000);
