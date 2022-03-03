module.exports = {
	name: 'guildMemberAdd',
	execute(member) {

		const channel = member.guild.channels.cache.find(ch => ch.name === '👋〡welcome');
  		if (!channel) return;

  		channel.send(`Welcome to the server, ${member}`);

  		var role = member.guild.roles.cache.find(role => role.name === "Member");
  		member.roles.add(role);
		console.log(`${member.user.tag} has joined the server`)

	},
};