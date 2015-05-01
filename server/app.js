/***********
 BASE SETUP
************/

// Stubs
var libraries = require('./stubs/libraries.json');

// Module dependencies.
var applicationRoot = __dirname;
var express = require('express'); // Web framework
var app = express(); // define server
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path'); // Utilities for dealing with file paths
var mongoose = require('mongoose'); // MongoDB integration
var bodyParser = require('body-parser');
var port = process.env.PORT || 9000; // set our port
var args = process.argv;
var stubArg = ('true' === args[2]);

// parses request body and populates request.body
app.use(bodyParser.urlencoded({extended: true}));
// where to serve static content
app.use(express.static(path.join(applicationRoot, '../app')));

/*******************
 ROUTES FOR OUR API
********************/

var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', function (request, response) {
  response.json({message: 'hooray! welcome to our api!'});
});

// Get a list of libraries
router.route('/libraries')
  .get(function (request, response) {
    if (stubArg) { // if stub enabled
      return response.json(libraries);
    }

    response.json([
      {
        name: 'HTML5 Boilerplate',
        url: 'http://www.w3.org/TR/html5/'
      },
      {
        name: 'jQuery',
        url: 'http://jquery.com/'
      },
      {
        name: 'Backbone.js',
        url: 'http://backbonejs.org/'
      },
      {
        name: 'Marionette.js',
        url: 'http://marionettejs.com/'
      }
    ]);
  });

// all of our routes will be prefixed with /api
app.use('/api', router);

/***********
 SOCKET.IO
************/

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

/*****************
 START THE SERVER
******************/

http.listen(port, function(){
  console.log('Express server listening on port %d in %s node', port, app.settings.env);
});
