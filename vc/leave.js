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
  client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.p-hxadM_-70h_C5cmFV25I-U-P0')