const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128', 'https://discord.gg/HRTXdA4')
        .setThumbnail('https://media.discordapp.net/attachments/611520936948006946/611845499426701312/recnd_qr.png')
        .setImage('https://cdn.discordapp.com/attachments/626532843530616833/632288121840730133/recnd_intro.gif')
        .setTimestamp()
        .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128')
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};