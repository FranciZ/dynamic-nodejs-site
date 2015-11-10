var mongoose = require('mongoose');

module.exports = function(app){

	app.get('/api/project', function(req, res){

		var Project = mongoose.model('Project');

		Project.find(function(err, docs){

			console.log(docs);
			console.log(err);

			if(!err){
				res.send(docs);
			}

		});

	});

	app.post('/api/project', function(req, res){

		var Project = mongoose.model('Project');

		var project = new Project(req.body);

		project.save(function(err){

			console.log(err);

			res.sendStatus(200);

		});

	});

};






