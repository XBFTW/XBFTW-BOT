const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: ["addme"],
  description: "invite LavaMusic",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {


    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
    .setLabel("Invite")
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=808588275831930890&permissions=8&scope=bot%20applications.commands`),
	new ButtonBuilder()
    .setLabel("Github")
    .setStyle(ButtonStyle.Link)
    .setURL("https://github.com/XBFTW/XBFTW-BOT"),
    new ButtonBuilder()
    .setLabel("Support")
    .setStyle(ButtonStyle.Link)
    .setURL("https://xbftw.com/discord")
			);

          const mainPage = new EmbedBuilder()
          .setAuthor({ name: 'XBFTW', iconURL: 'https://i.imgur.com/iShBdTX.png'})
          .setThumbnail('https://i.imgur.com/iShBdTX.png')
          .setColor('#303236')
          .addField('Invite XBFTW-BOT to your server', `[Here](https://discord.com/api/oauth2/authorize?client_id=808588275831930890&permissions=8&scope=bot%20applications.commands)`, true)
         message.reply({embeds: [mainPage], components: [row]})
  }
}
