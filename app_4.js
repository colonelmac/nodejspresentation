var http = require('http'),
    activities = require('./activities'),
    Task = activities.Task,
    tasks = [];

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    
    tasks.push(new Task('Task ' + tasks.length, 'John Smith', 'Acme')); 
   
    tasks.forEach(function (task, i) {
        response.write(task.toString() + '<br/>');  
    });

    setTimeout(function () {
        response.end('DONE');     
    }, 3000);
});

server.listen(9000);
