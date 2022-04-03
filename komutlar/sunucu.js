const Discord = require('discord.js');
const db = require("nrc.db")
const ayarlar = require('../ayarlar.json');

module.exports = {
    calistir: async(message) => {
   
   const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .addDescription(`
   
   Kimliği: ${message.guild.id}
   Bölgesi: ${message.guild.region}
   Sahibi: ${message.guild.owner}
   Kanal sayısı: ${message.guild.channels.size}
   Oluşturma tarihi:', ${message.guild.createdAt}

`)
 },

name: "sunucu",
description: "",
aliases: ["sunucu-bilgi"],
kategori: "",
usage: "",
}