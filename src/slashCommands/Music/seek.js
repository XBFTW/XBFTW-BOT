const { CommandInteraction, Client, EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const { convertTime } = require('../../utils/convert.js')
const ms = require('ms');

module.exports = {
    name: "seek",
    description: "Seek the currently playing song.",
    userPrems: [],
    player: true,
    dj: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    options: [
        {
            name: "time",
            description: "<10s || 10m || 10h>",
            required: true,
            type: ApplicationCommandOptionType.String
        }
    ],

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction, prefix) => {
        await interaction.deferReply({
            ephemeral: false
        });

        const args = interaction.options.getString("time");
        const player = interaction.client.manager.get(interaction.guildId);

        if (!player.queue.current) {
            let thing = new EmbedBuilder()
                .setColor("Red")
                .setDescription("There is no music playing.");
            return await interaction.editReply({ embeds: [thing] });
        }

        const time = ms(args)
        const position = player.position;
        const duration = player.queue.current.duration;

        const emojiforward = client.emoji.forward;
        const emojirewind = client.emoji.rewind;

        const song = player.queue.current;

        if (time <= duration) {
            if (time > position) {
                player.seek(time);
                let thing = new EmbedBuilder()
                    .setDescription(`${emojiforward} **Forward**\n[${song.title}](${song.uri})\n\`${convertTime(time)} / ${convertTime(duration)}\``)
                    .setColor(client.embedColor)
                    .setTimestamp()
                return await interaction.editReply({ embeds: [thing] });
            } else {
                player.seek(time);
                let thing = new EmbedBuilder()
                    .setDescription(`${emojirewind} **Rewind**\n[${song.title}](${song.uri})\n\`${convertTime(time)} / ${convertTime(duration)}\``)
                    .setColor(client.embedColor)
                    .setTimestamp()
                return await interaction.editReply({ embeds: [thing] });
            }
        } else {
            let thing = new EmbedBuilder()
                .setColor("Red")
                .setDescription(`Seek duration exceeds song duration.\nSong duration: \`${convertTime(duration)}\``);
            return await interaction.editReply({ embeds: [thing] });
        }

    }
};
