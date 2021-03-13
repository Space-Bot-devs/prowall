const Discord = require("discord.js")
const help = require('../help.json')

module.exports.run = async (bot, message, args) => {
  let cmds = message.content.split(' ')[1]
  if (!cmds) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Help Commands')
      .addField('General', '`ping`, `help`, `snipe`, `editsnipe`, `about`')
      .addField('Moderation', '`kick <@user||userID>`, `ban <@user||userID>`, `unban <userID>`')
      .addField('Config', '`logs <#channel>`, `prefix <prefix>`')
      .setColor('BLURPLE')
    message.channel.send(embed)
  } else {
    var content = null
    for (let i = 0; i < help.length; i++) {
      if (cmds.toLowerCase() == help[i].name) {
        var content = `**Description:**\n${help[i].description}\n**Usage:**\n${help[i].usage}`
      }
    }
    const embed = new Discord.MessageEmbed()
      .setColor('BLURPLE')
    if (content == null) embed.setDescription(`Cannot find command ${cmds}`)
    else embed.setTitle(`Command: ${cmds}`).setDescription(content)
    message.channel.send(embed)
  }
}


module.exports.config = {
  name: "help",
  description: "Help Command",
  usage: "help",
  accessableby: "Members",
  aliases: ["cmds"]
}
