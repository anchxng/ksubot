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

  client.login('');