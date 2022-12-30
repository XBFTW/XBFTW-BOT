const { EmbedBuilder, CommandInteraction, Client, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const db = require("../../schema/playlist");
const lodash = require("lodash");
module.exports = {
    name: "list",
    description: "List your created playlists.",
    player: false,
    inVoiceChannel: false,
    sameVoiceChannel: false,

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction) => {

        await interaction.deferReply({});
        const data = await db.find({ UserId: interaction.member.user.id });

        if (!data.length) {
            return interaction.editReply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`You haven't created any playlists.`)] })
        }

        let list = data.map((x, i) => `\`${++i}\` - ${x.PlaylistName} \`${x.Playlist.length}\` - <t:${x.CreatedOn}>`);
        const pages = lodash.chunk(list, 10).map((x) => x.join("\n"));
        let page = 0;
        let List = list.length;
       
        const embeds = new EmbedBuilder()
            .setAuthor({ name: `${interaction.user.username}'s Playlists`, iconURI: interaction.user.displayAvatarURL() })
            .setDescription(pages[page])
            .setFooter({ text: `Playlist (${List} / 10)` })
            .setColor(client.embedColor);
        return await interaction.editReply({ embeds: [embeds] });

    

}
};
