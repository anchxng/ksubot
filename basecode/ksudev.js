const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//help stuff
client.on('message', msg=> {
  if (msg.content === 'ggBot, please help me'){
    msg.reply('``` Commands list: Jokes: *jokelist, *joke1, *joke2, *joke3. Help: ggBot, please help me, and ggBot, what is your prefix. ``` ')
  }
}
);
client.on('message', msg=> {
  if (msg.content === 'ksubot, what is your prefix?'){
    msg.reply('My prefix is *, or shift + 8')
  }
}
);
//jokes
client.on('message', msg => {
  if (msg.content === '*joke1') {
    msg.reply('you. you are the joke');
  }
}
);
client.on('message', msg=> {
  if (msg.content === '*joke2'){
    msg.reply('amy schumers jokes used to be trash, but now theyre so recycled that they are good for the environment')
  }
}
);
client.on('message', msg=> {
  if (msg.content === '*joke3'){
    msg.reply('a man walks into a bar. he says ouch')
  }
}
);
//more joke go here 
client.on('message', msg=> {
  if (msg.content === '*jokelist'){
    msg.reply(' ```jokes: joke1, joke2, joke3 (dont forget asterisk)``` ')
  }
}
);
client.on('message', msg=> {
  if (msg.content === '*play lofi hiphop'){
      msg.reply('https://www.youtube.com/watch?v=5qap5aO4i9A')
  }
}
);
client.on('message', msg=> {
  if (msg.content === '*dankmeme'){
      msg.reply('https://www.reddit.com/r/dankmemes/')
  }
}
);
client.login('NzQwNjIwMDI5MzIxODA1ODU0.XyrqJw._MPqlwCi8G9ytffCpHTv42C4WuY');