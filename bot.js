const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
     message.reply('pong');
     }
});

// THIS MUST BE THIS WAY
client.login(NTg4NzE1MDMwMzA4OTc4NzE5.XQy-0g.Y0_r4rTg10UIkTjhvWDDi5wHToI);
