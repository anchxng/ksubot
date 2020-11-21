// VC CODE
client.on('message', async message =>  {
    if (!message.guild) return;
      if (message.content === '!leave vc') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.leave();
      } else {
        message.reply('am not in vc');
      }
    }
  });