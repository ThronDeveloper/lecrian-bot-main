const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        if(!args[0]) {
   
            if (!message.guild) {
                return message.author.send(ozelmesajuyari); }
            const LECRİAN = new Discord.MessageEmbed()
           .setColor("#5865F2")
          .setDescription(`<:snow_globe:952221059552251934> **| Lecrian**
        
          <:rules:952221047925641328> | Yetkili Komutları:
          
        > <:moderator:952221048252825620> **| \`!ban\` ➔ Belirtdiğiniz kullanıcıyı sunucudan yasaklar.**
        > <:moderator:952221048252825620> **| \`!kick\` ➔ Belirtdiğiniz kullanıcıyı sunucudan atar.**
        > <:moderator:952221048252825620> **| \`!rol-al\` ➔ Belirtdiğiniz üyeden rol alır.**
        > <:moderator:952221048252825620> **| \`!rol-ver\` ➔ Belirtdiğiniz üyeye rol verir.**
        > <:moderator:952221048252825620> **| \`!otorol\` ➔ Otorol Ayarlar.**
        > <:moderator:952221048252825620> **| \`!kurallar\` ➔ Discord sunucu kurallarını gösterir.**
        
          <:rules:952221047925641328> | Kullanıcı Komutları:
        
        > <:member:952221045140639755> **| \`!y\` ➔ Diğer Yardım Komutudur.**
        > <:member:952221045140639755> **| \`!developer\` ➔ Botun Sahibini Öğrenirsiniz.**
        > <:member:952221045140639755> **| \`!ping\` ➔ Botun Pingini Öğrenirsiniz.**
        > <:member:952221045140639755> **| \`!destek\` ➔ Botun destek sunucusunu görürsünüz.**
        
          `)   
        
          message.channel.send({embeds: [LECRİAN]})  
            }


},

name: "yardım",
description: "",
aliases: ["y"],
kategori: "",
usage: "",
}
