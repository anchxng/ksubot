const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.1wRpH5-W3ts0mj9RSqiV5xbrF7M');

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