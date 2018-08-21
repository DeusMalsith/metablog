var express = require('express');
var router = express.Router();
var db = require('../models');

router.post('/', function(req, res) {
	console.log(req.body);
	db.comment.create(req.body).then(function(createdComment) {
		res.redirect('/articles/' + req.body.articleId);
	}).catch(function(err) {
		console.log(err);
		res.render('error');
	});
});

module.exports = router;