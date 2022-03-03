const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Checks the ping of the bot.'),
	async execute(interaction, client) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });

		const botPing = `${sent.createdTimestamp - interaction.createdTimestamp}ms`
		
		interaction.editReply(`Roundtrip latency: ${botPing}`);
		console.log(`${interaction.user.tag} checked the Roundtrip latency, it was: ${botPing}`)
	},
};