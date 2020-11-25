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
        .setDescription('main: !dankmeme');
      message.author.send(embed);
    }
  });
client.on('message', message => {
    if (message.content === '!help') {
      const embed = new MessageEmbed()
        .setTitle('success')
        .setColor(0xff0000)
        .setDescription('message was sent')
    }
});
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.p-hxadM_-70h_C5cmFV25I-U-P0');