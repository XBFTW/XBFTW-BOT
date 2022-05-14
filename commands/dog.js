const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Replies with a picture of a dog.'),
	async execute(interaction) {

        const RedditImageFetcher = require("reddit-image-fetcher");
		
		await interaction.reply({ content: 'Searching for cute dogs..', fetchReply: true })

		RedditImageFetcher.fetch({
            type: 'custom',
            subreddit: ['dogpictures'],
        }).then(result => {
            interaction.editReply(result[0].image);
        })
        .catch(console.error);
	
	},
};
