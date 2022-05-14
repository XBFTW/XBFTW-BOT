const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Replies with a picture of a cat.'),
	async execute(interaction) {

        const RedditImageFetcher = require("reddit-image-fetcher");
		
		await interaction.reply({ content: 'Searching for cute cats...', fetchReply: true })

	RedditImageFetcher.fetch({
            type: 'custom',
            subreddit: ['cats', 'Kitten'],
        }).then(result => {
            interaction.editReply(result[0].image);
        })
        .catch(console.error);
	
	},
};
