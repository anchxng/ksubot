const Joke = require ('awesome-dev-jokes')
const { Message } = require('discord.js')
console.log(Joke.getRandomJoke)

client.on('message', message => {
    if(message.content === '!joke'){
      msg.reply(Joke.getRandomJoke)
    }
});
client.login('NzQwNjE3OTk5OTQ1MzAyMDk5.XyroQw.CB1CgycWXcAGnK8NqvqcruuQvEA');