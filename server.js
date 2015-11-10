var express = require('express');
var app = express();
var database = require('./database');
var router = require('./router');
var bodyParser = require('body-parser');

// Initialization of our server

function start(){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());

	app.use('/', express.static('public'));
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

start();

