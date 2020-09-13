const Bot = require('./Bot');
const client = new Bot();
const Discord = require('discord.js')

client.on('ready', () => {
    console.log(`Online | Logged in as ${client.user.tag}, ${client.guilds.cache.size} servers`)
          client.user.setPresence({activity: {name: 'for Rule Breakers', type: "WATCHING"}, status: 'dnd'})  
})

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  client.db.set(`esnipe_${oldMessage.guild.id}`, oldMessage.content);
  client.db.set(`esauthor_${oldMessage.guild.id}`, oldMessage.author.tag)
  const channel = client.channels.cache.get(client.db.get(`logs_${oldMessage.guild.id}`));
  const em = new Discord.MessageEmbed()
  .setTitle(oldMessage.author.tag)
  .setDescription(`Message sent by <@${oldMessage.author.id}> edited in <#${oldMessage.channel.id}>`)
  .setColor("BLURPLE")
  .addField('Old Message', oldMessage)
  .addField('New Message', newMessage)
  .setFooter('Prowall | Logging')
  .setTimestamp();
  channel.send(em);
})

client.on("messageDelete", async (message) => {
  client.db.set(`snipe_${message.guild.id}`, message.content);
  client.db.set(`sauthor_${message.guild.id}`, message.author.tag)
  const channel = client.channels.cache.get(client.db.get(`logs_${message.guild.id}`));
  const em = new Discord.MessageEmbed()
  .setTitle(message.author.tag)
  .setDescription(`Message sent by <@${message.author.id}> deleted in <#${message.channel.id}>`)
  .setColor("BLURPLE")
  .addField('Message', message)
  .setFooter('Prowall | Logging')
  .setTimestamp();
  channel.send(em);
})


const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    return console.log("[LOGS] Couldn't Find Commands!");
  }
  
  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    client.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      client.aliases.set(alias, pull.config.name);
    });
  });
});


client.on("message", async (message) => {
if (message.author.bot || message.channel.type === "dm") return;
  client.em = require('./Quick.js').quickembed
  client.db = require('quick.db')
  let prefix = client.db.get(`prefix_${message.guild.id}`) || "pro!";
  //done <??..
  // try this
  const ping = `<@746311179986534475>` || `<@!746311179986534475>`;
 if (message.content === ping) return message.channel.send(`My prefix in the server is \`${prefix}`);
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length)) ||
    client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(client, message, args);  
})

client.login(process.env.TOKEN)
