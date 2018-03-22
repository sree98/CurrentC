var express = require('express');
var app = express();
app.use(express.static("."));

var homepage = require('./homepageCurrentC');//Require the use of homepage.js
var faqpage = require('./faqpage');
var contactus= require('./contactus');
var currentevents = require('./currentevents');
var viewgraph = require('./viewgraph');

//-------------------app.get requests below--------------------------

app.get('/homepage', function(req,res) {
	var webpage = homepage.render();
	res.send(webpage);
	//Send this result to the answer and thus later into the div
});

app.get('/faqpage', function(req,res){
	var webpage2 = faqpage.render();
	res.send(webpage2);
	//Send this result to the answer and thus later into the div
});

app.get('/contactus', function(req,res) {
	var webpage3 = contactus.render();
	res.send(webpage3);
	//Send this result to the answer and thus later into the div
});

app.get('/currentevents', function(req,res){
	var webpage4 = currentevents.render();
	res.send(webpage4);
});

app.get('/viewgraph', function(req,res){
	var webpage5 = viewgraph.render();
	res.send(webpage5);
});

app.listen(8080, function(){
	console.log('Server started and now running...');
});