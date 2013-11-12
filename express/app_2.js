
/**
 * Module dependencies.
 */

var express = require('express'), 
    http = require('http'), 
    path = require('path'),
    activities = require('../activities_component'),
    Task = activities.Task;

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  // My middleware
  app.use(function (request, response, next) {
    response.locals.currentUser = 'foo';
    next(); 
  });

  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function (request, response) {
    response.locals.tasks = JSON.stringify([new Task('Call John', 'John Smith', 'Acme')]);  
    response.render('tasks');
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
