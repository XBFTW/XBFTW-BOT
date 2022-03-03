const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Replies with a picture of a cat.'),
	async execute(interaction) {

        const fetch = require('node-fetch');
        await interaction.deferReply();
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		interaction.editReply({ files: [file] });
	
	},
};