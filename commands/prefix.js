const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have any permissions to do this!");
  if (!message.member.hasPermission("MANAGE_GUILD") && message.author.id === "560484031838552064") {
if (!args[0]) return message.channel.send('Please specify the new prefix.')

client.db.set(`prefix_${message.guild.id}`, args[0]);
message.channel.send(`Prefix is now set to ${args[0]}`);
} else {
  if (!args[0]) return message.channel.send('Please specify the new prefix.')

client.db.set(`prefix_${message.guild.id}`, args[0]);
message.channel.send(`Prefix is now set to ${args[0]}`);
}
}

module.exports.config = {
    name: "prefix",
    description: "kek",
    usage: "prefix",
    accessableby: "Members",
    aliases: ["setprefix"]
}
