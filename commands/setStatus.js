const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('setstatus')
	.setDescription('Sets the status of the bot!')
    .addStringOption(option =>
		option.setName('status')
            .setRequired(true)
			.setDescription('Sets status')
			.addChoice('online', 'online')
			.addChoice('idle', 'idle')
            .addChoice('dnd', 'dnd')
			.addChoice('invisible', 'invisible'))
	.addStringOption(option =>
		option.setName('presence')
			.setDescription('Sets presence')
			.setRequired(true)
			.addChoice('WATCHING', 'WATCHING')
			.addChoice('LISTENING', 'LISTENING')
			.addChoice('COMPETING', 'COMPETING'))
    .addStringOption(option =>
		option.setName('activity')
			.setDescription('What the bot is WATCHING/LISTENING/COMPETING to')
			.setRequired(true)),

	async execute(interaction, client) {


        const status = interaction.options.getString('status');
        const presence = interaction.options.getString('presence');
        const activity = interaction.options.getString('activity');

        client.user.setStatus(`${status}`);

        client.user.setActivity(`${activity}`, { type: `${presence}` });

        await interaction.reply(`The status of the bot has been changed to: ${presence} to/in ${activity}, (${status})`);

        console.log(`The status of the bot has been changed to: ${presence} to/in ${activity}, (${status})`)
	},
};