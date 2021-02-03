// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    aliases: ["yardım"],
    execute(client, message){
        if (message.guild) {
            message.reply('DM Kutuna bak! Eğer mesaj gelmediyse özel mesajlara izin ver.');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/erenvein/')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Giveaway nasıl oluşturulur;')
            .setColor('BLACK')
            .addField(`${prefix}giveaway [süre] [ödül]`, 'Süre bir sayı ve bir zaman değişkeninde belirtilir.\nÖdül herhangi bir şey olabilir ama birinden fazla olmalı.')
            .addField('Örnek:', `${prefix}giveaway 10h $9.99 Nitro\nÖdül olarak "9,99 $ Nitro" ile 10 saatlik bir çekiliş oluşturur.`)
            .setFooter('discord.js ile ern#2088 tarafından yapıldı.', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
        if (!message.guild) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/erenvein/')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Giveaway nasıl oluşturulur;')
            .setColor('BLACK')
            .addField(`${prefix}giveaway [süre] [ödül]`, 'Süre bir sayı ve bir zaman değişkeninde belirtilir.\nÖdül herhangi bir şey olabilir ama birinden fazla olmalı.')
            .addField('Örnek:', `${prefix}giveaway 10h $9.99 Nitro\nÖdül olarak "9,99 $ Nitro" ile 10 saatlik bir çekiliş oluşturur.`)
            .setFooter('discord.js ile ern#2088 tarafından yapıldı.', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
}
