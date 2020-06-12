const { Channel } = require("discord.js")

module.exports = {
    name: `create`,
    description: `Creates an lms entry event`,
    execute(message, args){
        message.channel.send(`${message.author} Created an event`);
    }
};