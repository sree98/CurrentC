var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var Pusher = require('pusher');

var pusher = new Pusher({
	appId: '490794',
	key: 'e7099260734c9c20c749',
	secret: 'bfc30362dd3403c0bb8f',
	cluster: 'us2',
	encrypted: true
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("."));

// // Error Handler for 404 Pages
// app.use(function(req, res, next) {
// 		var error404 = new Error('Route Not Found');
// 		error404.status = 404;
// 		next(error404);
// });

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

app.listen(8080, function(){
	console.log('Server Started!')
});