const { Client, Attachment } = require('discord.js');

const token = 'NjExOTkwNzgwNjc2MTQ1MTY0.XVb3Dg.prZ_rurvbjdI6uVCv6NlHvQL5NY';
const bot = new Client();

bot.on('ready', () => {
});

bot.on('message', (msg) => {
  if (msg.content === 'hello') {
    msg.reply('hello');
  }

  if (msg.content === '!rip') {
    // Create the attachment using Attachment
    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    msg.channel.send(attachment);
  }
});

bot.login(token);
