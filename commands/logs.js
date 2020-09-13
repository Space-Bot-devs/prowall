const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {
 if (!args[0]) return message.channel.send(client.em('No channel specified!'))
 if (message.mentions.channels.size === 0 && isNaN(args[0])) return message.channel.send('Not a valid channel')
  const logschannel = message.mentions.channels.first().id || args[0];
    if (!message.member.permissions.has("ADMINISTRATOR") || !message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(client.em('You don\'t have permissions!'))
    client.db.set(`logs_${message.guild.id}`, logschannel)
    message.channel.send({embed:{color: "BLURPLE", description: `Logs channel set to <#${logschannel}>`}})
}


module.exports.config = {
    name: "logs",
    description: "Set Logs Channel",
    usage: "logs",
    accessableby: "Staff",
    aliases: ["setlogs"]
}
