const { EmbedBuilder, CommandInteraction, Client, PermissionFlagsBits } = require("discord.js")

module.exports = {
  name: "join",
  description: "Summons the bot to your voice channel.",
  userPrems: [],
  player: false,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false
    });
    let player = interaction.client.manager.get(interaction.guildId);
    if (player && player.voiceChannel && player.state === "CONNECTED") {
      return await interaction.editReply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`I'm already connected to the <#${player.voiceChannel}> voice channel!`)] })
    } else {
      if (!interaction.guild.members.me.permissions.has([PermissionFlagsBits.Connect, PermissionFlagsBits.Speak])) return interaction.editReply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`I don't have enough permissions to execute this command! Please give me permission to \`CONNECT\` or \`SPEAK\`.`)] });
      const { channel } = interaction.member.voice;
      if (!interaction.guild.members.me.permissionsIn(channel).has([PermissionFlagsBits.Connect , PermissionFlagsBits.Speak])) return interaction.editReply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`I don't have enough permissions connect your VC! Please give me permission to \`CONNECT\` or \`SPEAK\`.`)] });
      if (!interaction.guild.members.me.permissions.has([PermissionFlagsBits.Connect , PermissionFlagsBits.Speak])) return interaction.editReply({ embeds: [new EmbedBuilder().setColor(client.embedColor).setDescription(`I don't have enough permissions to execute this command.`)] });

      const emojiJoin = client.emoji.join;

      player = client.manager.create({
        guild: interaction.guildId,
        textChannel: interaction.channelId,
        voiceChannel: interaction.member.voice.channelId,
        selfDeafen: true,
        volume: 80
      })
      if (player && player.state !== "CONNECTED") player.connect();

      let thing = new EmbedBuilder()
        .setColor(client.embedColor)
        .setDescription(`${emojiJoin} **Joined the voice channel.**\nJoined <#${channel.id}> and bound to <#${interaction.channel.id}>`)
      return interaction.editReply({ embeds: [thing] });

    };

  }
};
