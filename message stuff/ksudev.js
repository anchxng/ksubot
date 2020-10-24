const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`robot: on`);
});
client.on('message', msg=> {
    if (msg.content === '*play lofi hiphop'){
        msg.reply('https://www.youtube.com/watch?v=5qap5aO4i9A')
    }
}
);
client.on('message', msg=> {
    if (msg.content === '*dankmeme'){
        msg.reply('https://www.reddit.com/r/dankmemes/')
    }
}
);
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.kwLjXM6HDn2JnS-B_qHfNuc74as');