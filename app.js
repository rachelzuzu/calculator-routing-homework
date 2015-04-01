// Require the modules we're going to need:
var express = require("express"), //only one for server/local
    ejs = require("ejs"), //render js files, adding more org to app
    bodyParser = require("body-parser"), //""
    methodOverride = require("method-override"); //

// Now instantiate our express app:
var app = express();

//set the view engine to be ejs 
app.set("view engine", "ejs"); //a way to inject js into

//set up bodyparser
app.use(bodyParser.urlencoded({ extended: false })); //render and view ejs file better

//set a root route

var sum= [];
//make it a global variable

app.get('/', function(req, res) { //when someone requests a page, respond with res

	res.render("index", { sum: sum }); //"index"--display this on this page
});
//passing an object to the index template

app.post('/add', function(req,res) { //process an action from a user liek this, on request fill these varialbes and on response do this

	var x=Number(req.body.addx);
	var y=Number(req.body.addy);
	var solution = (x+y);
	sum.push(solution); //push into array
	res.render("add", { sum: sum.slice(-1)[0]}); //render input to add page
});


app.post('/sub', function(req,res) { //process an action from a user liek this, on request fill these varialbes and on response do this

	var x=Number(req.body.subtractx);
	var y=Number(req.body.subtracty);
	var solution = (x-y);
	sum.push(solution);
	res.render("subtract", { sum: sum.slice(-1)[0]}); //redirects input to subtract page
}); //taking first integer at end; the first position

app.post('/mult', function(req,res) { //process an action from a user liek this, on request fill these varialbes and on response do this

	var x=Number(req.body.multiplyx);
	var y=Number(req.body.multiplyy);
	var solution = (x*y);
	sum.push(solution);
	res.render("multiply", { sum: sum.slice(-1)[0]}); //redirects input to multiply page
});

app.post('/div', function(req,res) { //process an action from a user liek this, on request fill these varialbes and on response do this

	var x=Number(req.body.dividex);
	var y=Number(req.body.dividey);
	var solution = (x/y);
	sum.push(solution);
	res.render("divide", { sum: sum.slice(-1)[0]}); //redirects input to divide page
});


app.listen(3000);




