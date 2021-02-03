// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');
const client = new Discord.Client();

module.exports = {
    name: 'giveaway',
    execute(client, message){
        if (!message.guild) return;
        message.delete();
        async function giveaway() {
            var time = '';
            var time2 = '';
            var time3 = '';
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komudu kullanmak için gerekli `ADMINISTRATOR` yetkiniz yok.');
            if (message.content === `${prefix}giveaway`) return message.channel.send(`Hediye için bir süre veya ödül belirtmediniz.`)
            if (message.content !== `${prefix}giveaway`) {
                const stated_duration_hours = message.content.split(' ')[1];
                const stated_duration_hours2 = stated_duration_hours.toLowerCase();
                if (stated_duration_hours2.includes('s')) {
                    var time = 's';
                }
                if (stated_duration_hours2.includes('m')) {
                    var time = 'm';
                }
                if (stated_duration_hours2.includes('h')) {
                    var time = 'h';
                }
                if (stated_duration_hours2.includes('d')) {
                    var time = 'd';
                }
                const stated_duration_hours3 = stated_duration_hours2.replace(time, '');
                if (stated_duration_hours3 === '0') {
                    message.channel.send('Süre en az bir olmalıdır.');
                }
                if (isNaN(stated_duration_hours3)) {
                    message.channel.send('Süre, geçerli bir zaman değişkeni olmalıdır.');
                }
                if (stated_duration_hours3 > 1) {
                    var time3 = 's';
                }
                if (time === 's') {
                    var actual_duration_hours = stated_duration_hours3 * 1000;
                    var time2 = 'second';
                }
                if (time === 'm') {
                    var actual_duration_hours = stated_duration_hours3 * 60000;
                    var time2 = 'minute';
                }
                if (time === 'h') {
                    var actual_duration_hours = stated_duration_hours3 * 3600000;
                    var time2 = 'hour';
                }
                if (time === 'd') {
                    var actual_duration_hours = stated_duration_hours3 * 86400000;
                    var time2 = 'day';
                }
                if (!isNaN(stated_duration_hours3)) {
                    const prize = message.content.split(' ').slice(2).join(' ');
                    if (prize === '') return message.channel.send('Bir ödül girmelisiniz.');
                    if (stated_duration_hours3 !== '0') {
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`Ödül: ${prize}`)
                        .setColor('BLACK')
                        .setDescription(`Katılmak için "🎉" tepkisine tıklayın!\nKalan zaman: **${stated_duration_hours3}** ${time2}${time3}\nÇekilişi yapan: ${message.author}`)
                        .setTimestamp(Date.now() + (actual_duration_hours))
                        .setFooter('Bitiş')
                        let msg = await message.channel.send(':tada: **ÇEKİLİŞ BAŞLADI** :tada:\n@everyone', embed)
                        await msg.react('🎉')
                        setTimeout(() => {
                            msg.reactions.cache.get('🎉').users.remove(client.user.id)
                            setTimeout(() => {
                                let winner = msg.reactions.cache.get('🎉').users.cache.random();
                                if (msg.reactions.cache.get('🎉').users.cache.size < 1) {
                                    const winner_embed = new Discord.MessageEmbed()
                                    .setTitle(`${prize}`)
                                    .setColor('BLACK')
                                    .setDescription(`Kazanan:\nKimse çekilişe girmedi.\nÇekilişi yapan: ${message.author}`)
                                    .setTimestamp()
                                    .setFooter('Bitiş')
                                    msg.edit(':tada: **GIVEAWAY SONA ERDİ** :tada:\n@everyone', winner_embed);
                                }
                                if (!msg.reactions.cache.get('🎉').users.cache.size < 1) {
                                    const winner_embed = new Discord.MessageEmbed()
                                    .setTitle(`Ödül: ${prize}`)
                                    .setColor('BLACK')
                                    .setDescription(`Kazanan:\n${winner}\nÇekilişi yapan: ${message.author}`)
                                    .setTimestamp()
                                    .setFooter('Bitiş')
                                    msg.edit(':tada: **ÇEKİLİŞ SONA ERDİ** :tada:\n@everyone', winner_embed);
                                }
                            }, 1000);
                        }, actual_duration_hours);
                    }
                }
            }
        }
        giveaway();
    }
}
