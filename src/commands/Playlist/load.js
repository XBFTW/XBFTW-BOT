const { EmbedBuilder } = require("discord.js");
const db = require("../../schema/playlist");

module.exports = {
    name: "load",
    aliases: ["plload", "plplay"],
    category: "Playlist",
    description: "Play the saved playlist.",
    args: true,
    usage: "<playlist name>",
    userPerms: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {

        var color = client.embedColor;
        const Name = args[0].replace(/_/g, ' ');
        const player = message.client.manager.create({
            guild: message.guildId,
            voiceChannel: message.member.voice.channelId,
            textChannel: message.channelId,
            volume: 100,
            selfDeafen: true,
        });
        
        const data = await db.findOne({
            UserId: message.author.id,
            PlaylistName: Name,
        });
        
        if (player && player.state !== "CONNECTED") player.connect();

        if (!data) {
            return message.reply({ embeds: [new EmbedBuilder().setColor(color).setDescription("Playlist not found. Please enter the correct playlist name.")] })
        }
        if (!player) return;
        let length = data.PlaylistName;
        let name = Name;
        let count = 0;
        const m = await message.reply({ embeds: [new EmbedBuilder().setColor(color).setDescription(`Adding ${length} track(s) from your playlist **${name}** to the queue.`)] })
        for (const track of data.Playlist) {
            let s = await player.search(track.uri ? track.uri : track.title, message.author);
            if (s.loadType === "TRACK_LOADED") {
                if (player.state !== "CONNECTED") player.connect();
                if (player) player.queue.add(s.tracks[0]);
                if (player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) await player.play();
                ++count;
            } else if (s.loadType === "SEARCH_RESULT") {
                if (player.state !== "CONNECTED") player.connect();
                if (player) player.queue.add(s.tracks[0]);
                if (player && player.state === "CONNECTED" && !player.playing && !player.paused && !player.queue.size) await player.play();
                ++count;
            };
        };
        if (player && !player.queue.current) player.destroy();
        if (count <= 0 && m) return await m.edit({ embeds: [new EmbedBuilder().setColor(color).setDescription(`Couldn't add any tracks from your playlist **${name}** to the queue.`)] })
        if (m) return await m.edit({ embeds: [new EmbedBuilder().setColor(color).setDescription(`Added ${count} track(s) from your playlist **${name}** to the queue.`)] })
    }

};
