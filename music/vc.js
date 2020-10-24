const Discord = require('discord.js');
const client = new Discord.Client();

client.login('token here');

client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === '*join voice') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('go in vc nerd');
    }
  }
});