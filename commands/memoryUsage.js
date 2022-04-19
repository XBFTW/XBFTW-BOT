const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('memoryusage')
		.setDescription('Replies with the memory usage of the bot.'),
	async execute(interaction) {

        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        interaction.reply(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
	
	},
};
