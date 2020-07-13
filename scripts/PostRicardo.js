var config = require('../config.js');
var FS = require('./FileFinder.js');

prefix = config.Prefix

commands = {}

commands[`${prefix}ricardo`] = function() {
	console.log('Meme posted!');
	var file = FS.FindRandomFile(config.ImageDirectory, true);
	return file;
}

exports.HandleMsg = function(msg) {
	cmd = msg.content.toLowerCase();
	
	if (commands[cmd] != undefined) {
		return commands[cmd]();
	}
	else {
		return -1;
	}
}	


