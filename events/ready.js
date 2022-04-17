module.exports = {
	name: 'ready',
	once: true,
	execute(client) {

		console.log('pterodactylReady')
		//logs to console when the bot is ready
		console.log(`Ready! Logged in as ${client.user.tag}`);
		

		//sets the activity of the bot
		client.user.setActivity('xbftw.com', { type: 'WATCHING' });
		
		//client.user.setAvatar('./avatar.png')
        //.catch(console.error);
	},
};
