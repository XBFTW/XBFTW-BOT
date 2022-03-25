module.exports = {
	name: 'messageCreate',
	execute(message) {
        if(message.author.bot){return;}

		if(message.content.toLowerCase().includes('xbftw')){
			console.log('yo')
		}

	},
};