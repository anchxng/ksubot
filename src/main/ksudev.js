const Discord = require('discord.js');
const client = new Discord.Client();

// on sequence
client.on('ready', () => {
  console.log(`robot: on`);
});

// MESSAGE CODE
client.on('message', msg=> {
    if (msg.content === '!yt'){
        msg.reply('subscribe to ksu on youtube')
    }
}
);
client.on('message', msg=> {
    if (msg.content === '!gifgari'){
        msg.reply(' https://tenor.com/view/gifgari-binodon-bangladesh-faruk-ahmed-hahaha-gif-18163719 ')
    }
}
);

// token
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.p-hxadM_-70h_C5cmFV25I-U-P0');