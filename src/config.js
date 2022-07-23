require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "ODcxOTUzODUwNzEyNjE3MDEx.YQi0Tg.1TQNywUz4zpa2U4mXdH1IiY4mRw",  // your bot token
    clientID: process.env.CLIENT_ID || "871953850712617011", // your bot client id
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "415687999641354250", //your discord id
    SpotifyID: process.env.SPOTIFYID || "ce14065fba3544f2be8dad4ffd59a4b4",
    SpotifySecret: process.env.SPOTIFYSECRET || "6a76143731444917a7193042fa7c5422",
    mongourl: process.env.MONGO_URI || "mongodb+srv://xbftw:Aa1127574@xb-music.vx5zy.mongodb.net/XB-MUSIC?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || 0x303236, // embed colour
    logs: process.env.LOGS || "957219129457274901", // channel id for guild create and delete logs
    links: {
        img: process.env.IMG || 'https://xbftw.com/assets/img/xbftw.png', //setup system background image 
        support: process.env.SUPPORT || 'https://xbftw/com/discord', //support server invite link
        invite: process.env.INVITE || 'https://xbftw.com/bot/invite' //bot invite link
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "lavalink.xbftw.com",
            identifier: process.env.NODE_ID || "local",
            port: parseInt(process.env.NODE_PORT || "2000"),
            password: process.env.NODE_PASSWORD || "youshallnotpass",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
