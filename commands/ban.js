const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {
 if (!args[0]) return message.channel.send(client.em('No user specified!'))
 if (message.mentions.users.size === 0 && isNaN(args[0])) return message.channel.send('Not a valid User')
  const user = (!isNaN(args[0])) || message.mentions.users.first().id;
  console.log(user)
    if (!message.member.permissions.has("ADMINISTRATOR") || !message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(client.em('You don\'t have permissions!'))
    else {
      let banned = args[0] || message.mentions.users.first();
      message.guild.members.ban(banned).then(
      await message.guild.fetchBans()
.then(bans => { 
  console.log(bans.get(banned))
  client.db.set('ban', bans.get(banned).user.tag)
})
)
let target = client.db.get(`ban`)
      message.channel.send(client.em(`***${target}*** was banned by ${message.author.tag}`))
    }
}


module.exports.config = {
    name: "ban",
    description: "ban a User!",
    usage: "ban",
    accessableby: "Members",
    aliases: ["ban"]
}
