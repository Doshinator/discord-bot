const { Guild } = require("discord.js");

module.exports = {
    name: `enter`,
    description: `Allows user to enter into the event`,
    execute(message,args){
        message.channel.send();
    }

};