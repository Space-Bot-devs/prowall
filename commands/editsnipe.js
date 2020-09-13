const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
let snipe = client.db.get(`esnipe_${message.guild.id}`);
let author = client.db.get(`esauthor_${message.guild.id}`);
if (!snipe) return message.channel.send('There\'s nothing to snipe!');
let embed = new Discord.MessageEmbed()
.setDescription(snipe)
.setTitle(author)
.setTimestamp()
.setColor('BLURPLE')
message.channel.send(embed)
}

module.exports.config = {
    name: "editsnipe",
    description: "k",
    usage: "editsnipe",
    accessableby: "Members",
    aliases: ["esnp"]
}
