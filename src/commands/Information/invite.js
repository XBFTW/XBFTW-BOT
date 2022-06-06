const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite XBFTW-BOT",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
    new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=808588275831930890&permissions=8&scope=bot%20applications.commands`),
    new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/XBFTW"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://xbftw.com/discord")
			);

          const mainPage = new MessageEmbed()
            .setAuthor({ name: 'XBFTW', iconURL: 'https://i.imgur.com/iShBdTX.png'})
            .setThumbnail('https://i.imgur.com/iShBdTX.png')
            .setColor('#303236')
            .addField('Invite XBFTW-BOT to your server', `[Here](https://discord.com/api/oauth2/authorize?client_id=808588275831930890&permissions=8&scope=bot%20applications.commands)`, true)        .addField('Invite XBFTW-BOT to your server', `[Here](https://discord.com/api/oauth2/authorize?client_id=808588275831930890&permissions=8&scope=bot%20applications.commands)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
}
