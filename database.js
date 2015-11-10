var mongoose = require('mongoose');

var db = mongoose.connection;

exports.openDatabase = function(cb){

	mongoose.connect('mongodb://localhost/dynamic');

	db.on('error', console.error.bind(console, 'connection error:'));

	db.once('open', function () {

	  console.log('Connection to database open');
	  cb();

	});

};

exports.getDatabase = function(){

	return db;

};