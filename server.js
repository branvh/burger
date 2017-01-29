//=====dependencies
let express = require('express');
let exprhbs = require('express-handlebars');
let bodyParser = require('body-parser');
let override = require('method-override');

//create server and set port
let app = express();
let PORT = process.env.port || 3000;

//Static stuff from public folder
app.use(express.static(process.cwd() + '/public'));

//Interpret body of messages
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Ditto, with something about ?_method=DELETE   :)
app.use(methodOverride('_method'));

//Use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Pushes all requests to the root to routes...and the route redirects to '/' come back up here
//and then get pushed back, circular awesomeness
let routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(PORT);