const { EmbedBuilder } = require("discord.js");
const db = require("../../schema/playlist");

module.exports = {
    name: "savequeue",
    aliases: ["plsaveq"],
    category: "Playlist",
    description: "Save the current queue to your playlist.",
    args: true,
    usage: "<playlist name>",
    userPerms: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {

        const Name = args[0].replace(/_/g, ' ');
        const player = message.client.manager.get(message.guild.id);
        if (!player.queue.current) {
            let thing = new EmbedBuilder()
                .setColor("RED")
                .setDescription(`There is no music playing.`);
            return message.reply({ embeds: [thing] });
        }
        const data = await db.find({ UserId: message.author.id, PlaylistName: Name })
        if (!data) {
            return message.reply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`Playlist not found. Please enter the correct playlist name.`)] })
        }
        if (data.length == 0) {
            return message.reply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`Playlist not found. Please enter the correct playlist name.`)] });
        }
        const song = player.queue.current;
        const tracks = player.queue;

        let oldSong = data.Playlist;
        if (!Array.isArray(oldSong)) oldSong = [];
        const newSong = [];
        if (player.queue.current) {
            newSong.push({
                "title": song.title,
                "uri": song.uri,
                "author": song.author,
                "duration": song.duration
            });
        }
        for (const track of tracks)
            newSong.push({
                "title": track.title,
                "uri": track.uri,
                "author": track.author,
                "duration": track.duration
            });
        const playlist = oldSong.concat(newSong);
        await db.updateOne({
            UserId: message.author.id,
            PlaylistName: Name,
        },
            {
                $set: {
                    Playlist: playlist
                }

            });
        const embed = new EmbedBuilder()
            .setDescription(`**Added** \`${playlist.length - oldSong.length}\`song(s) in \`${Name}\``)
            .setColor(client.embedColor)
        return message.channel.send({ embeds: [embed] })

    }
}
