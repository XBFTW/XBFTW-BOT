
## 🎭 Features
- [x] Music
- [x] 24/7
- [x] Dj 
- [x] Custom Playlist (global)
- [x] SlashCommand
- [x] Custom prefix
- [x] Filters
- [x] Easy to use
- [x] More


## 📎 Requirements
* [Nodejs](https://nodejs.org/en/)-v16 
* [Discord.js](https://github.com/discordjs/discord.js/)-v13
* [Java](https://adoptopenjdk.net/) for lavalink
* [Lavalink](https://ci.fredboat.com/viewLog.html?buildId=lastSuccessful&buildTypeId=Lavalink_Build&tab=artifacts&guest=1)

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

## 🎶 Available music sources:

- youtube`*`
- bandcamp`*`
- soundcloud`*`
- twitch`*`
- vimeo`*`
- http (you can use radio for it)`*`
- spotify`*`
- deezer`*`


<!-- INSTALL -->
## 🚀 Installation from source
```
git clone https://github.com/XBFTW/XBFTW-BOT.git
```
After cloning, run an
```
npm install
```
* Start the bot with `node .`

to snag all of the dependencies. Of course, you need [node](https://nodejs.org/en/) installed. I also strongly recommend [nodemon](https://www.npmjs.com/package/nodemon) as it makes testing *much* easier.

## intents

<p align="center">
  <a href="https://github.xbftw.com">
    <img src="https://media.discordapp.net/attachments/848492641585725450/894114853382410260/unknown.png">

  </a>
</p>
When Your Running The Code You Must Have Gotten This Error To Fix This Head Over To Your Bots Discord Application and Go To The Bot Settings And Find This

<p align="center">
  <a href="https://github.com/XBFTW/XBFTW-BOT">
    <img src="https://media.discordapp.net/attachments/848492641585725450/894115221701001216/unknown.png">

  </a>
</p>
Then Turn On Both Of Those Settings And Click "Save Changes" Then Your Are Done And The It Should Be Fixed

## 🐳 Installation Using Docker

If you are on a Debian based OS such as Ubuntu, you can run this docker container. I haven't tested this on Windows and I probably won't, so if you are on Windows, you can use the Direct installation.
 
```
#Create the volume
docker volume create xbftw-bot
#run the docker container, but make sure to replace the stuff in the <> with the correct information first. MAKE SURE TO REMOVE THE <> TOO!
docker run -d --name xbftw-bot --mount source=xbftw-bot,target=/opt/XBFTW-BOT \
  -e "TOKEN=" \
  -e "CLIENT_ID=" \
  -e "PREFIX=!" \
  -e "OWNERID=" \
  -e "SPOTIFYID=" \
  -e "SPOTIFYSECRET=" \
  -e "MONGO_URI=" \
  -e "COlOR=" \
  -e "LOGS=" \
  -e "IMG=https://xbftw.com/assets/img/xbftw.png" \
  -e "SUPPORT=https://xbftw.com/discord" \
  -e "INVITE=https://xbftw.com/bot/invite"
  -e "NODE_HOST=lavalink.xbftw.com" \
  -e "NODE_ID=" \
  -e "NODE_PORT=2000" \
  -e "NODE_PASSWORD=youshallnotpass" \
  -e "NODE_SECURE=false" \
  xbftw/xbftw-bot:main
```

<!-- CONFIGURATION -->

## ⚙️ Configurations
- edit in `src/config.js` and you can do in `.env` 
```js
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "491577179495333903", //your discord id
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs
```
## 🌋 lavalink 
Below is a free lavalink host.
```js
      "host": "lavalink.xbftw.com",
      "port": 2000,
      "password": "youshallnotpass",
      "retryDelay": 3000,
      "secure": false
```
- Create an application.yml file in your working directory and copy the [example](https://github.com/freyacodes/Lavalink/blob/master/LavalinkServer/application.yml.example) into the created file and edit it with your configuration.
- Run the jar file by running `java -jar Lavalink.jar` in a Terminal window.
