const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription('Sets up the bot, roles, and channels'),
	async execute(interaction, client) {

const roleName = 'MUTED'
const { Permissions, IntegrationApplication } = require('discord.js');

await interaction.reply('This bot has started the initial setup process!')

//Checks each part of the setup process to see if it has already completed
function setupTest(){

  if(!interaction.guild.roles.cache.find(role => role.name === roleName)){
    mutedCreate();
  }else(
    interaction.followUp('The MUTED role has already been created.')
  )
  
  if(!interaction.guild.roles.cache.find(role => role.name === 'Member')){
    memberCreate();
  }else{
    interaction.followUp('The Member role has already been created.')
  }

  if(!interaction.guild.channels.cache.find(channel => channel.name === '👋〡welcome')){
    welcomeChannelCreate();
  }else{
    interaction.followUp('The Welcome channel has already been created.')
  }

  if(!interaction.guild.channels.cache.find(channel => channel.name === '🤖〡xbftw-bot-spam')){
    xbftwBotChannelCreate();
  }else{
    interaction.followUp('The xbftw-bot-spam channel has already been created.')
  }

}


//Creates the muted role
function mutedCreate(){

  interaction.guild.roles.create({
  name: roleName,
  color: 'RED',
  permissions: [
    "VIEW_CHANNEL",
    "READ_MESSAGE_HISTORY",
    "CONNECT",
    "SPEAK",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "ADD_REACTIONS"
    ],
  reason: 'A role that is used to mute people.',
    })
  .catch(console.error)

}


//Creates the Member role that may be given to Users when they join
function memberCreate(){

  interaction.guild.roles.create({
    name: 'Member',
    reason: 'Created the welcome role.',
    })
    .catch(console.error)

}


//Creates the welcome channel
function welcomeChannelCreate(){

  interaction.guild.channels.create('👋〡welcome', {
    type: 'GUILD_TEXT',
      permissionOverwrites: [{
        id: interaction.guild.id,
          allow: ['VIEW_CHANNEL'],
          deny: ['SEND_MESSAGES'],
    }]
  })
  .catch(console.error)
}


//Creates the XBFTW-BOT-SPAM channel
function xbftwBotChannelCreate(){

  interaction.guild.channels.create('🤖〡xbftw-bot-spam', {
    type: 'GUILD_TEXT',
      permissionOverwrites: [{
        id: interaction.guild.id,
          deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
    }]
  })
  .catch(console.error)
}


//starts the setup process
setupTest();
//stop here
	},
};