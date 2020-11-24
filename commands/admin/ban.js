const Discord = require('discord.js');
const client = new Discord.Client();

// on sequence
client.on('ready', () => {
  console.log(`robot: on`);
});
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
         
        member
          .ban({
            reason: 'not gamer',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('err: no one was mentioned');
            console.error(err);
          });
      } else {
        message.reply(" ```user does not exist here``` ");
      }
    } else {
      message.reply(" ```did not mention user to ban``` ");
    }
  }
});

client.login('');