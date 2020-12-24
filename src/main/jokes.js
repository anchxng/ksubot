const Joke = require ('awesome-dev-jokes')
const { Message, Client } = require('discord.js')
const client = new Client();

client.on('ready', () => {
  console.log('robot on');
});

client.on('message', message => {
    if(message.content === '!joke'){
      msg.reply(Joke.getRandomJoke)
    }
});
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.CB1CgycWXcAGnK8NqvqcruuQvEA');