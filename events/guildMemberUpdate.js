module.exports = {
    name: 'guildMemberUpdate',
    execute(oldMember, newMember) {

            const channel = newMember.guild.channels.cache.find(ch => ch.name === '🤖〡xbftw-bot-spam');
            if (!channel) return;

            channel.send(` ${oldMember}, ${oldMember.displayName} has changed their name to ${newMember.displayName}`);

    }
}