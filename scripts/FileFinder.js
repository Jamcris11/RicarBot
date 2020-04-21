var fs = require('fs');
var path = require('path');

function getRandomInt(max) {
	var i = Math.floor(Math.random() * Math.floor(max));
	console.log(i);
	return i
}

GetFiles = function(directory, recursive) {
	var dirfiles = fs.readdirSync(directory);
	return dirfiles;
}

exports.FindRandomFile = function(directory, recursive) {
	var files = GetFiles(directory, recursive);
	
	return path.resolve(directory, files[getRandomInt(files.length)]);
}


