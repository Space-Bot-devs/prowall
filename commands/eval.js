const prefix = 'sb!'
const owner = ["680506811031355413", "560484031838552064"];
module.exports.run = async (client, message, args) => {
  const Discord = require('discord.js')
  if (!owner.includes(message.author.id)) return;

  let cmdUsage = client.commands.get('eval', 'help.usage');

  try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

module.exports.config = {
  name: "eval",
  description: "eval",
  usage: "eval",
  accessableby: "Bot Owner",
  aliases: ["ev"]
}

const clean = text => {
  if (typeof (text) === 'string') return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
};

