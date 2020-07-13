var config = require('../config.js');
var FS = require('./FileFinder.js');

prefix = config.Prefix

commands = {}

commands[`${prefix}ricardo`] = function(msg) {
	console.log(msg.channel.toString() + ': Meme posted!');
	var file = FS.FindRandomFile(config.ImageDirectory, true);
	return file;
}

exports.HandleMsg = function(msg) {
	cmd = msg.content.toLowerCase();
	
	if (commands[cmd] != undefined) {
		return commands[cmd](msg);
	}
	else {
		return -1;
	}
}	


