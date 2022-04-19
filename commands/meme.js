const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Gets a meme from Reddit'),
	async execute(interaction, client) {    

        const RedditImageFetcher = require("reddit-image-fetcher");

        RedditImageFetcher.fetch({
            type: 'custom',
            subreddit: ['memes'],
        }).then(result => {
            interaction.reply(result[0].image);
        })
        .catch(console.error);


	},
};
