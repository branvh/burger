let express = require('express');
var app = express.router();
var burger = require('../models/burger.js');

app.get('/', (req,res) => {
	res.redirect('/burger');
});

//grab all burgers from DB for display to user
app.get('/burger', (req,res) => {
	burger.all(function(data){
		var hbsObject = {burgers : data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

//add a new burger to the DB
app.post('/burger/create', (req,res) => {

	burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burger');
	});

});

//to update burger statuses - such as if "devoured"
app.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burger');
	});
});

module.exports = app;