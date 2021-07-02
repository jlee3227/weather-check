require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');


const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readFileSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    const prefix = '!';
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +\-/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (err) {
        console.error(err);
        message.reply('There was an error when trying to execute that command');
    }

});

client.login(process.env.TOKEN);
