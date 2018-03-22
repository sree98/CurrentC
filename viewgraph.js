//viewgraph.js
'use strict'
var fs = require('fs');

exports.render = function(){
	var file = fs.readFileSync('./graph.html', 'utf8');
	return file;
}