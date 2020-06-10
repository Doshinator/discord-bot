const Discord = require('discord.js');
const client = new Discord.Client();

const token = '';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if(msg.content === 'delete'){
    msg.channel.bulkDelete(100);
  }
});


client.login(token);