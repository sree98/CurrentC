var Coinigy = require('node-coinigy');
var coinigy = new Coinigy('0f0e3145e13024bebf79c1c13b397806', 'd91972efd78a7f43f69310f34d3b872e');
var SSE = require("sse-node")
var express = require('express');
var http = require('http')
var request = require('request');
var engines = require('consolidate');
var app = express();

var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyCW0UZbQ9TTzaC8OqkolOF54QRwvxR8zCI",
  authDomain: "currentc-54904.firebaseapp.com",
  databaseURL: "https://currentc-54904.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config)

var database = firebase.database();

app.use(express.static("."));

var user = ''

firebase.auth().onAuthStateChanged(firebaseUser => {

	if(firebaseUser){
		user = firebaseUser
		console.log(user)
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
}, 5000);




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
	firebase.database().ref('/testStuff').set({
    Color : value
});
	console.log("Database written to")
});


app.get('/reading', function(req,res){
	const client = SSE(req, res);
	const dbRefObject = firebase.database().ref().child('testStuff').child('Color')
	dbRefObject.on('value', snap => {
		var string = snap.val()
		client.send(string)
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

app.post('/signUp', function (req, res){ // Render Calculator
	var email = req.query.theEmail
	var pass = req.query.thePass
	console.log(email)
	console.log(pass)
	firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode)
  		console.log(errorMessage)
  		// ...
	});
	res.send("You are now signed up!")
});

app.get('/signIn', function (req, res){ // Render Calculator
	var email = req.query.theEmail
	var pass = req.query.thePass
	console.log(email)
	console.log(pass)
	firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode)
  		console.log(errorMessage)
  		res.send("Failed");
	});
	res.send("Success");
});

//res.status(200).sendFile(__dirname + '/wow.html');

app.listen(8080,function(){ // Listener
	console.log("RUNNING...")	
});

/*
var socketCluster = require('socketcluster-client');


var api_credentials =
{
    "apiKey"    : "0f0e3145e13024bebf79c1c13b397806",
    "apiSecret" : "d91972efd78a7f43f69310f34d3b872e"
}

var options = {
    hostname  : "sc-02.coinigy.com",    
    port      : "443",
    secure    : "true"
};

var SCsocket = socketCluster.connect(options);


SCsocket.on('connect', function (status) {
    
    
    SCsocket.on('error', function (err) {
        console.log(err);
    });    
    
    SCsocket.emit("auth", api_credentials, function (err, token) {        
        
        if (!err && token) {            

            var scChannel = SCsocket.subscribe("TRADE-GDAX--BTC--USD");
            scChannel.watch(function (data) {
            	var time = data.time_local
            	var coin = data.label
            	var price = data.price
                firebase.database().ref('/' + coin + "/" + time).set({
    				Price : price
				});
            });      
            
        } else {
            console.log(err)
        }   
    });   
});
*/