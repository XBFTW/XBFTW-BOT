module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} triggered an interaction in #${interaction.channel.name}.`);
	},
};