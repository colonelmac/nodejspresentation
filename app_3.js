var http = require('http'),
    activities = require('./activities'),
    Task = activities.Task,
    tasks = [];

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    
    tasks.push(new Task('Task ' + tasks.length, 'John Smith', 'Acme')); 
   
    tasks.forEach(function (task) {
        response.write(task.toString() + '\n');    
    });

    response.end('Total count: ' + tasks.length);
});

server.listen(9000);
