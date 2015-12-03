var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

var database    = require('./database');
var router      = require('./router');



// Initialization of our server

function start(){

    // middlewares for processing the request
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());
	app.use(allowCrossDomain);
    
    // serve content from the public folder 
	app.use('/', express.static('public'));
    // serve content from the cms folder
	app.use('/cms', express.static('cms'));

	database.openDatabase(function(){

		setupModels();

		app.listen(3000, function(){

			router(app);

		});

	});

}

function setupModels(){

	require('./models/project');

}

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


start();

