const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

  const em = new Discord.MessageEmbed()
    .setTitle('About/Credits')
    .addFields(
		{ name: '**Bot Developers:**', value: '```Kyro#3400, Shade#0003```' },
		{ name: '**Guild Count:**', value: `${bot.guilds.cache.size} servers`, inline: false },
		{ name: '**Invite Me**:', value: '[Click Here](https://discord.com/api/oauth2/authorize?client_id=785673868567248916&permissions=2994733046&scope=bot)', inline: true },
    { name: '**Support Server**:', value: '[Click Here](https://discord.gg/zSazjPu4QQ)', inline: true },
	)
    .setFooter('Thanks to all contributors for contributing in this project!')
    .setColor("BLURPLE");
  message.channel.send(em)
}


module.exports.config = {
  name: "about",
  description: "Shows a list of contributors",
  usage: "about",
  accessableby: "Members",
  aliases: ["contributors", "invite"]
}
