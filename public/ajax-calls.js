$(document).ready(function() {
	console.log('Ajax Working')

	$('.delete-btn').click(function(e) {
		e.preventDefault();
		console.log('Delete me?');

		$.ajax({
			url:$(this).attr('href'),
			method: 'DELETE'
		}).done(function(res) {
			console.log('Success', res);
		}).fail(function(err) {
			console.log('fail', err);
		});
	});
});