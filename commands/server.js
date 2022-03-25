const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {

		const serverInfoEmbed = new MessageEmbed()
        .setColor('#1F3548')
        .setTitle('Server Information')
        .setURL('https://github.com/XBFTW/XBFTW-BOT')
        .addFields(
            {name: 'Server Name:', value: `${interaction.guild.name}`},
            {name: 'Total members:', value: `${interaction.guild.memberCount}`},
			{name: 'Server Owner:', value : `${interaction.guild.ownerID}`},
			{name: 'Server ID:', value: `${interaction.guild.id}`},
			{name: 'Server Created At:', value: `${interaction.guild.createdAt}`},
			{name: 'Server Icon:', value: `${interaction.guild.iconURL()}`},
			{name: 'Invite Link:', value: 'https://xbftw.com/discord'},

            )
		.setTimestamp()

        await interaction.reply({ content: 'Hello!', embeds: [serverInfoEmbed] })
			.catch(console.error);
	},
};