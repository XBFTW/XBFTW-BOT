require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    clientID: process.env.CLIENT_ID || "", // your bot client id
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "415687999641354250", //your discord id
    SpotifyID: process.env.SPOTIFYID || "",
    SpotifySecret: process.env.SPOTIFYSECRET || "",
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || 0x303236, // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs
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
