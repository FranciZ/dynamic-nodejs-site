var mongoose = require('mongoose');
var token = '2309dfhdsf0lkasdASDasd821lk';


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

	app.post('/api/login', function(req, res){

		var username = 'franci';
		var password = 'mypassword';

		if(req.body.username === username && req.body.password === password){
			// UNSERCURE authentication successful
			res.send({token:token});
		}else{
			res.sendStatus(401);
		}

	});

	app.post('/api/project', myAuth, function(req, res){

		var Project = mongoose.model('Project');

		var project = new Project(req.body);

		project.save(function(err){

			console.log(err);

			res.sendStatus(200);

		});
		
	});

};

function myAuth(req, res, next){

	if(req.query.token === token){

			console.log('Next');

			next();

		}else{

			res.sendStatus(401);

		}

}















