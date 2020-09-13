const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send(client.em('No user specified!'))
  const user = message.mentions.users.first().id || args[0];
  let member = message.guild.members.cache.get(user);
  if (!member) return message.channel.send('Looks like that user isn\'t in this server!')
  
    if (!message.member.permissions.has("ADMINISTRATOR") || !message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(client.em('You don\'t have permissions!'))
    if (!member.kickable) return message.channel.send(client.em('Uh-oh! Looks like I can\'t kick that user'))
    else {
      member.kick()
      message.channel.send(client.em(`***${member.user.tag}*** was kicked by ${message.author.tag}`))
    }

}


module.exports.config = {
    name: "kick",
    description: "Kick a User!",
    usage: "kick",
    accessableby: "Members",
    aliases: ["kick"]
}
