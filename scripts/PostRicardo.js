var config = require('../config.js');
var FS = require('./FileFinder.js');

exports.HandleMsg = function(msg) {
	if (msg.content.toLowerCase() == (config.Prefix + "ricardo")) {
		console.log('Meme posted!');
		var file = FS.FindRandomFile('C:/Users/Home/Desktop/Memes/Ricardo 2', true);
		return file;
	}
	else {
		return -1;
	}
}	