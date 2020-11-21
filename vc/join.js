// VC CODE
client.on('message', async message => {
    if (!message.guild) return;
      if (message.content === '!join vc') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('go in vc nerd');
      }
    }
  });
 client.login('tokenhere')