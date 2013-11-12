var http = require('http'),
    fs = require('fs'), 
    path = require('path'),
    util = require('util'), 
    activities = require('./activities_component'),
    Task = activities.Task,
    tasks = [];

var server = http.createServer(function (request, response) {
    var filePath, fileSize, fileStream;
    
    if (request.url === '/build.js') {
        filePath = path.join(__dirname, 'activities_component', 'build', 'build.js');     
    
        fs.stat(filePath, function (err, stats) {
            
            fileSize = stats.size; 
            fileStream = fs.createReadStream(filePath);
           
            response.writeHead(200, { 
                'Content-Type': 'text/javascript',
                'Content-Length': fileSize
            });

            util.pump(fileStream, response); 
        });
    }
    else {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        response.write('<script src="build.js"></script>');

        tasks.push(new Task('Task ' + tasks.length, 'John Smith', 'Acme')); 

        tasks.forEach(function (task, i) {
            response.write(task.toString() + '<br/>');  
        });
        
        response.end();
    }
});

server.listen(9000);
