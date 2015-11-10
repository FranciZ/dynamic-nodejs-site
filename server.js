var express = require('express');
var app = express();

app.get('/', function(req, res){

	res.send('You are on the root route');

});

app.get('/about', function(req, res){

	res.send('You are on the about page');

});

app.listen(3000, function(){

	console.log('Server is running');

});