const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    const em = new Discord.MessageEmbed()
    .setTitle('Credits')
    .setDescription('**1) Shade#0003** Bot Developer\n**2) Scientific Guy#1792** Website Developer')
    .setFooter('Thanks to all contributors for contributing in this project!')
    .setColor("BLURPLE");
    message.channel.send(em)

}


module.exports.config = {
    name: "credits",
    description: "Shows a list of contributors",
    usage: "credits",
    accessableby: "Members",
    aliases: ["contributors"]
}
