const prefix = 'pro!'
const owner = ["560484031838552064", "662207542486630401"];
module.exports.run = async (client, message, args) => {
const Discord = require('discord.js')
if (!owner.includes(message.author.id)) return;

    let cmdUsage = client.commands.get('eval', 'help.usage');

    try {
        const code = args.join(' ');
        if (!code) return message.channel.send(`You want to eval air?`).then(msg => msg.delete(3000)).catch(err => client.logger.error(err));
        let evaled = eval(code);

        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

        await message.channel.send(clean(evaled).replace(process.env.TOKEN, "no lmao"), { code: 'xl' });
    } catch (err) {
        await message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
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
    if (typeof(text) === 'string') return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
};
