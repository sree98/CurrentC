var express = require('express');			//Require express as stated
var app = express();
app.use(express.static(".")); 		// just "." for all in current directory

var homepage = require('./homepageCurrentC');			//Require the use of homepage.js
var faqpage = require('./faqpage');
var contactus= require('./contactus');
var currentevents = require('./currentevents');





//---------------------------------------app.get requests below ----------------------------

app.get('/homepage', function(req,res)			//app.get for when /homepage is read it'll run the render function and output the HTML code
{
	var webpage = homepage.render();
	res.send(webpage);		//Send this result to the answer and thus later into the div

	
});

app.get('/faqpage', function(req,res)			//app.get for when /homepage is read it'll run the render function and output the HTML code
{
	var webpage2 = faqpage.render();
	res.send(webpage2);		//Send this result to the answer and thus later into the div

	
});

app.get('/contactus', function(req,res)			//app.get for when /homepage is read it'll run the render function and output the HTML code
{
	var webpage3 = contactus.render();
	res.send(webpage3);		//Send this result to the answer and thus later into the div

	
});

app.get('/currentevents', function(req,res)			//app.get for when /homepage is read it'll run the render function and output the HTML code
{
	var webpage4 = currentevents.render();
	res.send(webpage4);		//Send this result to the answer and thus later into the div

	
});

app.listen(8080, function() 				//Listen into port 8080 as direction
	{
		console.log('Server started and now running...');						//Output to ensure that the server started and is currently running properly
	});