const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log('robot on');
});

client.on('message', message => {
    if (message.content === '!help') {
      const embed = new MessageEmbed()
        .setTitle('commands list')
        .setColor(0xff0000)
        .setDescription('main: !yt, subscribe to ksu on youtube. !gifgari, happy bangladeshi men');
      message.author.send(embed);
    if (message.content === '!help') {
      const embed = new MessageEmbed()
        .setTitle('succes')
        .setColor(00000)
        .setDescription('message sent ✅');
      message.channel.send(embed);
    }
  }
  });

client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.CB1CgycWXcAGnK8NqvqcruuQvEA');