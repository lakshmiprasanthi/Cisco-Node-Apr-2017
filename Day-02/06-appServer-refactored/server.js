var http = require('http');

var dataParser = require('./dataParser'),
	logger = require('./logger'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req, res){
	dataParser(req);
	logger(req);
	serveStatic(req, res);
	calculatorHandler(req, res);
	notFoundHandler(res);
});

server.listen(8080);

