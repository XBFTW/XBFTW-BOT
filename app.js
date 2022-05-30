//MADE BY XBFTW - Open Source MIT License 
const fs = require('fs');
const {
	Client,
	Collection,
	Intents
} = require('discord.js');
const client = new Client({
	intents: 32767
})
require('dotenv').config();

const { QueryType, Player } = require("discord-player")
client.player = new Player(client, {
	ytdlOptions: {
		quality: "highestaudio",
		highWaterMark: 1 << 25
	}
})


//GETS THE COMMANDS FROM THE COMMAND FOLDER
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}
//GETS THE COMMANDS FROM THE MUSIC FOLDER
const musicCommandFiles = fs.readdirSync('./commands/music').filter(file => file.endsWith('.js'));

for (const file of musicCommandFiles) {
	const command = require(`./commands/music/${file}`);
	client.commands.set(command.data.name, command);
}

// Creats interactions (command handler)
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, client);//What each command file has access to
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true
		});
	}
});

//Event handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(process.env.TOKEN);
