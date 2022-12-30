## 🎭 Features

- ✅ Setup System
- ✅ Music
- ✅ 24/7
- ✅ Dj
- ✅ Custom Playlist (global)
- ✅ SlashCommand
- ✅ Custom prefix
- ✅ Filters
- ✅ Easy to use
- ✅ And much more!

## 📎 Requirements

- [Nodejs](https://nodejs.org/en/) v18 and more
- [Discord.js](https://github.com/discordjs/discord.js/) v14
- [Java](https://adoptopenjdk.net/) for lavalink
- [Lavalink](https://github.com/freyacodes/Lavalink/releases)

Note: Java v11 or newer is required to run the Lavalink.jar. Java v13 is recommended. If you are using sdkman then its a manager, not Java, you have to install sdkman and use sdkman to install Java

Warning: Java v14 has issues with Lavalink.

### 🌐 Main

- Discord bot's
  token `You should know why you need this or you won't go to this repo` [Get or create bot here](https://discord.com/developers/applications)
- Mongodb
  URI `for custom prefix` [MongoDB](https://account.mongodb.com/account/login)
- Your ID `for eval command. It's dangerous if eval accessible to everyone`
- Spotify client ID `for spotify support` [Click here to get](https://developer.spotify.com/dashboard/login)
- Spotify client Secret `for spotify support` [Click here to get](https://developer.spotify.com/dashboard/login)

## 🎶 Available music sources

- ✅ YouTube
- ✅ Bandcamp
- ✅ SoundCloud
- ✅ Twitch
- ✅ Vimeo
- ✅ http (you can use radio for it)
- ✅ Spotify
- ✅ Deezer

<!-- INSTALL -->

## 🚀 Installation from source

```bash
git clone https://github.com/XBFTW/XBFTW-BOT.git
```

After cloning, run

```bash
npm install
```

- Start the bot with `node src/sharder.js`

to snag all of the dependencies. Of course, you need [node](https://nodejs.org/en/) installed. I also strongly recommend [nodemon](https://www.npmjs.com/package/nodemon) as it makes testing _much_ easier.

## Intents

<p align="center">
  <a href="https://github.com/brblacky/lavamusic">
    <img src="https://media.discordapp.net/attachments/848492641585725450/894114853382410260/unknown.png">

  </a>
</p>
When you are running the Code you must have gotten this Error. To fix this head over to your Bot's Discord Application and go to the Bot Settings and find this:

<p align="center">
  <a href="https://github.com/brblacky/lavamusic">
    <img src="https://user-images.githubusercontent.com/50886682/196232974-d9cfc18c-92c5-43bd-b1bc-ff1cae3df701.png">

  </a>
</p>
Then turn on both of those Settings and click "Save Changes". Then you are done and it should be fixed!
<!-- CONFIGURATION -->

## ⚙️ Configurations

- edit in `src/config.js` and you can do in `.env`

```js
    token: process.env.TOKEN || "",  // your bot token
    clientID: process.env.CLIENT_ID || "", // your bot client id
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNER_ID || "", //your discord id
    SpotifyID: process.env.SPOTIFY_ID || "",
    SpotifySecret: process.env.SPOTIFY_SECRET || "",
    mongourl: process.env.MONGO_URL || "", // MongoDb URL
    embedColor: process.env.EMBED_COLOR || 0x303236, // embed colour
    logs: process.env.LOGS || "channel_id", // channel id for guild create and delete logs
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "channel_id", //error logs channel id
    SearchPlatform: process.env.SEARCH_PLATFORM || "youtube music", // Sets the Search Platform. Possibilities: youtube || youtube music || soundcloud
```

## 🌋 Lavalink

```js
      "host": "localhost",
      "port": 2333,
      "password": "coders",
      "retryDelay": 3000,
      "secure": false
```

- Create an application.yml file in your working directory and copy the [example](https://github.com/freyacodes/Lavalink/blob/master/LavalinkServer/application.yml.example) into the created file and edit it with your configuration.
- Run the jar file by running `java -jar Lavalink.jar` in a Terminal window.

## ⚙️ SHARDS

- edit in `sharder.js`

```js
  respawn: true,
  autoSpawn: true,
  token: token,
  totalShards: 1,
  shardList: "auto",
```