module.exports ={
    name: "guildMemberAdd",
    run: async (member) => {
        
        const channel = member.guild.channels.cache.find(ch => ch.name === '👋〡welcome');
              if (!channel) return;
    
              channel.send(`Welcome to the server, ${member}`);
        
            }
    }