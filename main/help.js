const Discord = require('discord.js');
const client = new Discord.Client();
const client = new Discord.MessageEmbed();

client.on('ready', () => {
  console.log('robot on');
});

client.on('message', message => {
    if (message.content === 'embed') {
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('A slick little embed')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('Hello, this is a slick embed!');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });

  client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.p-hxadM_-70h_C5cmFV25I-U-P0');