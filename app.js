var http = require('http')
var express = require('express');

var app = express();
var server = require('http').createServer(app);

// Serve HTML page when GET request is received from client
app.get('/', function(req, res,next) {
res.sendFile(__dirname + '/index.html');
});

// Make files in the public directory acessible
app.use(express.static(__dirname + '/public'))

server.listen(process.env.PORT || 3000);
