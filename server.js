var Coinigy = require('node-coinigy');
var coinigy = new Coinigy('0f0e3145e13024bebf79c1c13b397806', 'd91972efd78a7f43f69310f34d3b872e');
var SSE = require("sse-node")
var express = require('express');
var http = require('http')
var request = require('request');
var engines = require('consolidate');
var app = express();
var Pusher = require('pusher');
var firebase = require("firebase");
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("."));

var config = {
	apiKey: "AIzaSyCW0UZbQ9TTzaC8OqkolOF54QRwvxR8zCI",
	authDomain: "currentc-54904.firebaseapp.-com",
	databaseURL: "https://currentc-54904.firebaseio.com",
	storageBucket: "",
};
var pusher = new Pusher({
	appId: '490794',
	key: 'e7099260734c9c20c749',
	secret: 'bfc30362dd3403c0bb8f',
	cluster: 'us2',
	encrypted: true
});

firebase.initializeApp(config)

var database = firebase.database();

app.use(express.static("."));

var user = ''
var id = ''


firebase.auth().onAuthStateChanged(firebaseUser => {

	if(firebaseUser){
		user = firebase.auth().currentUser;
		id = user.uid;
		console.log(id)

	} else{
		console.log("Not logged in")
	}
});


setInterval(function(){
request({
  method: 'POST',
  url: 'https://api.coinigy.com/api/v1/ticker',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '0f0e3145e13024bebf79c1c13b397806',
    'X-API-SECRET': 'd91972efd78a7f43f69310f34d3b872e'
  },
  body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BTC/USD\"}"
}, function (error, response, body) {
	var myjson = JSON.parse(body)
	var market = myjson.data[0].market.split("/")
	var coin = market[0]
	var time = myjson.data[0].timestamp
	var lastT = myjson.data[0].last_trade
	var high = myjson.data[0].high_trade
	var low = myjson.data[0].low_trade
	var dt = new Date();
	var utcDate = dt.toUTCString();
	firebase.database().ref('/' + coin + "/" + utcDate).set({
    	lastTrade : lastT,
    	highTrade : high,
    	lowTrade : low
	});
});
request({
  method: 'POST',
  url: 'https://api.coinigy.com/api/v1/ticker',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '0f0e3145e13024bebf79c1c13b397806',
    'X-API-SECRET': 'd91972efd78a7f43f69310f34d3b872e'
  },
  body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"BCH/USD\"}"
}, function (error, response, body) {
	var myjson = JSON.parse(body)
	var market = myjson.data[0].market.split("/")
	var coin = market[0]
	var time = myjson.data[0].timestamp
	var lastT = myjson.data[0].last_trade
	var high = myjson.data[0].high_trade
	var low = myjson.data[0].low_trade
	var dt = new Date();
	var utcDate = dt.toUTCString();
	firebase.database().ref('/' + coin + "/" + utcDate).set({
    	lastTrade : lastT,
    	highTrade : high,
    	lowTrade : low
	});
});
request({
  method: 'POST',
  url: 'https://api.coinigy.com/api/v1/ticker',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '0f0e3145e13024bebf79c1c13b397806',
    'X-API-SECRET': 'd91972efd78a7f43f69310f34d3b872e'
  },
  body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"ETH/USD\"}"
}, function (error, response, body) {
	var myjson = JSON.parse(body)
	var market = myjson.data[0].market.split("/")
	var coin = market[0]
	var time = myjson.data[0].timestamp
	var lastT = myjson.data[0].last_trade
	var high = myjson.data[0].high_trade
	var low = myjson.data[0].low_trade
	var dt = new Date();
	var utcDate = dt.toUTCString();
	firebase.database().ref('/' + coin + "/" + utcDate).set({
    	lastTrade : lastT,
    	highTrade : high,
    	lowTrade : low
	});
});
request({
  method: 'POST',
  url: 'https://api.coinigy.com/api/v1/ticker',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '0f0e3145e13024bebf79c1c13b397806',
    'X-API-SECRET': 'd91972efd78a7f43f69310f34d3b872e'
  },
  body: "{  \"exchange_code\": \"GDAX\",  \"exchange_market\": \"LTC/USD\"}"
}, function (error, response, body) {
	var myjson = JSON.parse(body)
	var market = myjson.data[0].market.split("/")
	var coin = market[0]
	var time = myjson.data[0].timestamp
	var lastT = myjson.data[0].last_trade
	var high = myjson.data[0].high_trade
	var low = myjson.data[0].low_trade
	var dt = new Date();
	var utcDate = dt.toUTCString();
	firebase.database().ref('/' + coin + "/" + utcDate).set({
    	lastTrade : lastT,
    	highTrade : high,
    	lowTrade : low
	});
});
}, 60000);




app.get('/start', function(req,res){
	coinigy.activity()
	.then(function (body) {
	  console.log(body.data);
	  console.log(body.notifications);
	})
	.catch(function (err) {
	  console.log(err);
	});
});


app.post('/writing', function (req,res){
	var value = req.query.theVal;
	const dbRefObject = firebase.database().ref().child('Users').child(id).child("Favorites")
	dbRefObject.once('value', snap => {
		var array = snap.val()
		console.log(array)
		if(array == undefined){
			array = [value]
			firebase.database().ref('/Users/' + id).set({
    		Favorites : array
			});
		}
		else{
			if(array.indexOf(value) == -1){
			array.push(value)
			firebase.database().ref('/Users/' + id).set({
    		Favorites : array
			});
			}
		}
		console.log("Database written to")
	});
});


app.get('/reading', function(req,res){
	const dbRefObject = firebase.database().ref().child('Users').child(id).child("Favorites")
	dbRefObject.once('value', snap => {
		var string = snap.val()
		res.send(string)
	});
});

app.get('/oldData', function(req,res){
	var favoriteStuff = req.query.fav;
	const dbRefObject = firebase.database().ref().child(favoriteStuff)
	dbRefObject.once('value', snap => {
		var string = snap.val()
		console.log(string)
		res.send(string)
	});
});


app.get("/sse", function(req,res){
	const client = SSE(req, res);
	const dbRefObject = firebase.database().ref().child('testStuff').child('Color')
	dbRefObject.on('value', snap => {
		var string = snap.val()
		client.send(string)
	});
});

app.get('/signUp', function (req, res){ // Render Calculator
	var email = req.query.theEmail
	var pass = req.query.thePass
	//console.log(email)
	//console.log(pass)
	firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(){
		console.log("Logged In...")
		res.send("Logged In")
	}).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode);
  		console.log(errorMessage);
  		res.send(errorMessage);
	});
});

app.get('/signOut', function(req, res){
	firebase.auth().signOut().then(function() {
		console.log("Signed out")
		res.send("You Have Signed Out")
	}).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode);
  		console.log(errorMessage);
  		res.send(errorMessage);		
	});
})

app.get('/signIn', function (req, res){ // Render Calculator
	var email = req.query.theEmail
	var pass = req.query.thePass
	var jimmy = "123"
	//console.log(email)
	//console.log(pass)
	firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){
		console.log("Logged In...")
		res.send("Logged In")
	}).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode);
  		console.log(errorMessage);
  		res.send(errorMessage);
	});
});

//This is Sree's section

var cryptoPriceData = {
		dataPoints: []
}

app.get('/clearData', function(){
	console.log(cryptoPriceData.dataPoints);
	cryptoPriceData.dataPoints = [];
	console.log(cryptoPriceData.dataPoints);
})

app.get('/getExchange', function(req,res){
	var request = require('request');

	request({
		method: 'POST',
		url: 'https://api.coinigy.com/api/v1/exchanges',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': 'd52c1c5571b336790d8a70746dc93db1',
			'X-API-SECRET': '9f4f503a40584a52efb6c1c69a8a4a52'
		}}, function (error, response, body) {
		res.send(JSON.parse(body));
	});
})

app.get('/getMarket', function(req,res){
	var request = require('request');

	request({
		method: 'POST',
  		url: 'https://api.coinigy.com/api/v1/markets',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': 'd52c1c5571b336790d8a70746dc93db1',
			'X-API-SECRET': '9f4f503a40584a52efb6c1c69a8a4a52'
		},
  		body: '{"exchange_code": "'+req.query.exchName+'"}'
  	}, function (error, response, body) {
		res.send(JSON.parse(body));
	});
})

app.get('/getCryptoPrice', function(req,res){
	exch=req.query.exchName;
	mrkt=req.query.mrktName;
	var request = require('request');

	request({
		method: 'POST',
		url: 'https://api.coinigy.com/api/v1/ticker',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': '43d454a80214e31ba365ff6cd047a405',
			'X-API-SECRET': 'd2b0f0c80501617977a5efb9e98679da'
		},
		body: '{"exchange_code": "'+exch+'",  "exchange_market": "'+mrkt+'"}'
	}, function (error, response, body) {
		var json = JSON.parse(body).data[0];
		var d = new Date();
		var time = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		addData(time, json.last_trade);
	});
	res.send(cryptoPriceData);
});

function addData(time, price) {
	if(price && !isNaN(price)){
		var newDataPoint = {
			trade_price: price,
			time: time
		};
		cryptoPriceData.dataPoints.push(newDataPoint);
		pusher.trigger('price-chart', 'new-price', {
			dataPoint: newDataPoint
		});
		// console.log({success:true});
	}else{
		console.log({success:false, errorMessage: 'Invalid Query Parameters, required - price & time.'});
	}
}

app.get('/addTemperature', function(req,res){
	var price = parseInt(req.query.temperature);
	var time = parseInt(req.query.time);
	if(price && !isNaN(price)){
		var newDataPoint = {
			trade_price: price,
			time: time
		};
		cryptoPriceData.dataPoints.push(newDataPoint);
		pusher.trigger('price-chart', 'new-price', {
			dataPoint: newDataPoint
		});
		res.send({success:true});
	}else{
		res.send({success:false, errorMessage: 'Invalid Query Parameters, required - price & time.'});
	}
});

module.exports = app;


//This is Mike's Section
var homepage = require('./homepageCurrentC');//Require the use of homepage.js
var faqpage = require('./faqpage');
var contactus= require('./contactus');
var currentevents = require('./currentevents');
var viewgraph = require('./viewgraph');
var singin = require('./signin');

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
	res.send(viewgraph.render());
});

app.get('/signin', function(req,res){
	res.send(signin.render());
});

//res.status(200).sendFile(__dirname + '/wow.html');

app.listen(8080,function(){ // Listener
	console.log("RUNNING...")	
});

