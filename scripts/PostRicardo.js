var config = require('../config.js');

exports.HandleMsg = function(msg) {
	if (msg.content.toLowerCase() == (config.Prefix + "ricardo")) {
		console.log('Meme posted!');
	}
}	