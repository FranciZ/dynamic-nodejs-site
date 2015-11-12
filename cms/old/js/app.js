var myToken = '';


$('#button').on('click', function(){

	var title = $('#title').val();
	var description = $('#description').val();

	$.post('http://localhost:3000/api/project?token='+myToken, {
		title:title,
		description:description
	}, function(){

		console.log('Done');

	});

});

$('#login-button').on('click', function(){

	var myUsername = $('#username').val();
	var myPassword = $('#password').val();

	$.post('http://localhost:3000/api/login', 
		{ username:myUsername, password:myPassword },
		function(res){

			myToken = res.token;

		});


});