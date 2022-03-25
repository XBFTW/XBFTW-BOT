require('dotenv').config();
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');

const token = process.env.TOKEN

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const musicCommandFiles = fs.readdirSync('./commands/music').filter(file => file.endsWith('.js'));

for (const file of musicCommandFiles) {
	const command = require(`./commands/music/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

// node deploy-commands.js