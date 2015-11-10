
$('#button').on('click', function(){

	var title = $('#title').val();
	var description = $('#description').val();

	$.post('http://localhost:3000/api/project', {
		title:title,
		description:description
	}, function(){

		console.log('Done');

	});

});