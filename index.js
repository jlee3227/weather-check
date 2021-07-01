require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    const prefix = '!';
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'wttr') {
        if (!args.length) {
            return message.channel.send(`You need to provide a location ${message.author}!`)
        }

        message.channel.send(`The weather for ${args[0]}`, {files: [`https://wttr.in/${args[0]}_Q.png`]})
    }
});

client.login(process.env.TOKEN);
