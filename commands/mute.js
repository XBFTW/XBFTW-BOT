const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Mutes the selected user')
		.addStringOption(option =>
			option.setName('user')
			.setDescription('The user you want to mute')
			.setRequired(true)),
	async execute(interaction) {

		await interaction.reply(`${user} has been muted`);

	},
};