const express = require('express');
const app = express();
const port = 8080;
const http = require('http')
const Discord = require('discord.js')
// Use Prototype.

const client = require("./Prowall");
client;

const Bot = require('./Bot')
const bot = new Bot();
// Client should be above



// Website Zone
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

bot.on('ready', () => {
  // Keep this to just work on website as it will send http requests to website
})
bot.login(process.env.TOKEN)


// Returns Homepage
app.get('/', (req, res) => {
  console.log('SpaceBot Ping Recived:' + Date.now())
  // man let the client be here
  res.render('index.ejs', { servers: bot.guilds.cache.size, users: bot.users.cache.size, channels: bot.channels.cache.size, client: client })
});

app.listen(port, () => console.log(`App listening at https://spacebot.jonfirexbox.repl.co`));

setInterval(() => {
  http.get(`https://spacebot.jonfirexbox.repl.co`);
}, 280000);

// Website Zone
