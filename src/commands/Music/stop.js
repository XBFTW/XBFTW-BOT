const { MessageEmbed } = require("discord.js");

module.exports = {
  	name: "stop",
    category: "Music",
    description: "Stops the music",
    args: false,
    usage: "",
    permission: [],
    dj: true,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	execute: async (message, args, client, prefix) => {
  
        const player = client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const autoplay = player.get("autoplay")
        if (autoplay === true) {
            player.set("autoplay", false);
        }

        player.stop();
        player.queue.clear();

        const emojistop = client.emoji.stop;

		    let thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setTimestamp()
            .setDescription(`${emojistop} Stopped the music`)
        message.reply({embeds: [thing]});
	
  	}
};