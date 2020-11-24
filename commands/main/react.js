require("dotenv"); // Load env configuration

const Discord = require('discord.js');
const client = new Discord.Client();

let eggCount = 0;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(msg.content.toLowerCase().includes("egg")){
		msg.react('🥚');
		eggCount++;
		client.user.setPresence({
			activity: { 
				name: `with ${eggCount} eggs | !help`
			},
			status: 'online'
		})
	}
});
client.on('message', msg => {
	if(msg.content.toLowerCase().includes("butt")){
		msg.react('🍑')
	}
});
client.on('message', msg=> {
	if(msg.content.toLowerCase().includes("gamer")){
		msg.react('🎮')
	}
});
client.on('message', msg => {
	if(msg.content.toLowerCase().includes("calvin")){
		msg.react('🦍')
	}
});
client.login(process.env.EGG_BOT_TOKEN = '');