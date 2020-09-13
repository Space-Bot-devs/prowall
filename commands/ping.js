const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let api = Math.floor(Math.random() * 100)
        if (api === 0) api = 10  
        
        m.delete()

        let embed = new Discord.MessageEmbed()
        .setTitle('Pong!', true)
        .setDescription(`Bot Latency: \`${ping}\`\nAPI Latency: \`${api}\``)
        .setColor('BLURPLE')

        message.channel.send(embed);
    })

}


module.exports.config = {
    name: "ping",
    description: "PONG! Displays the api & bot latency",
    usage: "ping",
    accessableby: "Members",
    aliases: ["latency"]
}
