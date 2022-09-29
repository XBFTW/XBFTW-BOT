const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "autoplay",
  aliases: ["ap"],
  category: "Music",
  description: "Toggle music autoplay",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = client.manager.get(message.guild.id);

    const autoplay = player.get("autoplay");

    const emojireplay = client.emoji.autoplay;
    
    if (!player.queue.current)
      return message.reply({
        content: `Please start a song before doing this action`,
      });
    
    if (autoplay === false) {
      const identifier = player.queue.current.identifier;
      player.set("autoplay", true);
      player.set("requester", message.author);
      player.set("identifier", identifier);
      const search = `https://www.youtube.com/watch?v=${identifier}&list=RD${identifier}`;
      res = await player.search(search, message.author);
      player.queue.add(res.tracks[1]);
      let thing = new EmbedBuilder()
        .setColor(client.embedColor)
        .setTimestamp()
        .setDescription(`${emojireplay} Autoplay is now **enabled**`);
      return message.channel.send({ embeds: [thing] });
    } else {
      player.set("autoplay", false);
      player.queue.clear();
      let thing = new EmbedBuilder()
        .setColor(client.embedColor)
        .setTimestamp()
        .setDescription(`${emojireplay} Autoplay is now **disabled**`);

      return message.channel.send({ embeds: [thing] });
    }
  },
};
