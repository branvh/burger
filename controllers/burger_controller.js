let burger = require('../models/burgers.js');
let router = express.router();

//send all requests to the root back to /burger
router.get('/', (req,res) => {
	res.redirect('/burger');
});

//grab all burgers from DB for display to user
router.get('/burger', (req,res) => {
	burger.all( (data) => {
		let burgersToDisplay = {burgers : data};
		res.render('index', burgersToDisplay);
	});
});

//add a new burger to the DB
router.post('/burger/create', (req,res) => {
	burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], (info) => {
		res.redirect('/burger');
	});

});

//to update burger statuses - such as if "devoured"
router.put('/burger/update/:id', (req,res) => {
	let item = 'id = ' + req.params.id;
	burger.update({'devoured' : req.body.devoured}, item, (data) => {
		res.redirect('/burger');
	});
});

module.exports = router;