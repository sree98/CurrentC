//signin.js
'use strict'
var fs = require('fs');

exports.render = function(){
	var file = fs.readFileSync('./signin.html', 'utf8');
	return file;
}