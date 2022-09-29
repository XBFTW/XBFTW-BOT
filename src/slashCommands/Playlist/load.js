const { EmbedBuilder, CommandInteraction, Client, ApplicationCommandOptionType } = require("discord.js");
const db = require("../../schema/playlist");

module.exports = {
    name: "load",
    description: "Play the saved playlist.",
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    options: [
        {
            name: "name",
            description: "Playlist name.",
            required: true,
            type: ApplicationCommandOptionType.String
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction) => {

        await interaction.deferReply({});

        const Name = interaction.options.getString("name").replace(/_/g, ' ');
        const data = await db.findOne({ UserId: interaction.member.user.id, PlaylistName: Name });

        const player = interaction.client.manager.create({
            guild: interaction.guildId,
            voiceChannel: interaction.member.voice.channelId,
            textChannel: interaction.channelId,
            volume: 100,
            selfDeafen: true,
        });

        if (player && player.state !== "CONNECTED") player.connect();
        
        if (!data) {
            return interaction.editReply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`Playlist not found. Please enter the correct playlist name`)] })
        }
        if (!player) return;

        let length = data.PlaylistName;
        let name = Name;
        let count = 0;
        const m = await interaction.editReply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`Adding ${length} track(s) from your playlist **${Name}** to the queue.`)] })
        for (const track of data.Playlist) {
            let s = await player.search(track.uri ? track.uri : track.title, interaction.member);
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
        if (count <= 0 && m) return await m.edit({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`Couldn't add any tracks from your playlist **${name}** to the queue.`)] })
        if (m) return await m.edit({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`Added ${count} track(s) from your playlist **${name}** to the queue.`)] })
    }

};

