const Discord = require('discord.js')

function quickem (title, des, footer){
  if(!title) title = ''
  if(!des) des = ''
  if(!footer) footer = ''
  const embed = new Discord.MessageEmbed()
  .setColor('BLURPLE')
  .setTitle(title)
  .setDescription(des)
  .setFooter(footer)
  return embed
}

module.exports.quickembed = quickem
