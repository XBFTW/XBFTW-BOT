const { EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "lyrics",
  category: "Music",
  description: "Gets the lyrics of a song.",
  userPrems: [],
  usage: "<song name>",
  player: true,
  args: true,
  dj: false,
  inVoiceChannel: true,
  sameVoiceChannel: true,

  execute: async (message, args, client, prefix) => {
    await message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(client.embedColor)
          .setDescription("🔎 **Searching...**"),
      ],
    });

    let player;
    if (client.manager) {
      player = client.manager.players.get(message.guild.id);
    } else {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor("Red")
            .setDescription("Lavalink node is not connected."),
        ],
      });
    }

    if (!args && !player) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor("Red")
            .setDescription("There's no music playing."),
        ],
      });
    }

    let search = args ? args : player.queue.current.title;
    // Lavalink API for lyrics
    let url = `https://api.darrennathanael.com/lyrics?song=${search}`;

    let lyrics = await fetch(url)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err.name;
      });
    if (!lyrics || lyrics.response !== 200 || lyrics === "FetchError") {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor("Red")
            .setDescription(
              `❌ | No lyrics found for ${search}!\nMake sure you entered your search correctly.`
            ),
        ],
      });
    }

    let text = lyrics.lyrics;
    let lyricsEmbed = new EmbedBuilder()
      .setColor(client.embedColor)
      .setTitle(`${lyrics.full_title}`)
      .setURL(lyrics.url)
      .setThumbnail(lyrics.thumbnail)
      .setDescription(text);

    if (text.length > 4096) {
      text = text.substring(0, 4090) + "[...]";
      lyricsEmbed
        .setDescription(text)
        .setFooter({ text: "Truncated, the lyrics were too long." });
    }

    return message.channel.send({ embeds: [lyricsEmbed] });
  },
};
