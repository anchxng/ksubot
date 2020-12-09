const Joke = require ('awesome-dev-jokes')
const { Message, Client } = require('discord.js')
const client = new Client();
console.log(Joke.getRandomJoke)

client.on('message', message => {
    if(message.content === '!joke'){
      msg.reply(Joke.getRandomJoke)
    }
});
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.CB1CgycWXcAGnK8NqvqcruuQvEA');