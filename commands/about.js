const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

  const em = new Discord.MessageEmbed()
    .setTitle('About/Credits')
    .addField('**Bot Developers:**\n```Kyro#3400, Shade#0003```')
    .setField(`**Guild Count:**\n${bot.guilds.cache.size} servers`)
    .setFooter('Thanks to all contributors for contributing in this project!')
    .setColor("BLURPLE");
  message.channel.send(em)

}


module.exports.config = {
  name: "about",
  description: "Shows a list of contributors",
  usage: "about",
  accessableby: "Members",
  aliases: ["contributors"]
}
