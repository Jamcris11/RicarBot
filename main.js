const Discord = require('discord.js');
const client = new Discord.Client();

var config = require('./config.js');
var Ricardo = require('./scripts/PostRicardo.js');

var fs = require('fs')


client.on('ready', () => {
    console.log("I am ready!");
})

client.on('message', message => {
	
	// If the message equals the config.Prefix + "uptime", then display the time the bot has been active.
	if (message.content.toLowerCase() == (config.Prefix + "uptime"))
	{
		client.channels.get(message.channel.id).send('`This bot has been on for ' + (client.uptime/1000) +
			" seconds, or " + parseInt((client.uptime/1000)/60) + ' minutes.`');
	}

	// Displays commands for them sexy users
	if (message.content.toLowerCase() == (config.Prefix+"help"))
	{
		client.channels.get(message.channel.id).send(
			'`'+config.Prefix+'uptime   : Displays how long the bot has been active`');
	}
	
	// Else handle ricardo messages.
	var v = Ricardo.HandleMsg(message);
	
	if (v != -1) {
		client.channels.get(message.channel.id).send('`test`');
	}
});


client.login('NzAyMTE0MDk4ODE2NzQ1NTAy.Xp7U9w.MA-unB6LztI1UKWuWbSIINCpa4k')


