const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


const embed = new Discord.MessageEmbed()
.setColor("#5865F2")
.setTitle(`Lecrian`)
.setDescription(`

Beni Davet Etmek İçin [Tıkla](https://discord.com/api/oauth2/authorize?client_id=${ayarlar.id}&permissions=8&scope=bot%20applications.commands)

`)

message.channel.send({embeds: [embed]})


},
name: "destek",
description: "",
aliases: [],
kategori: "yardim",
usage: "",
}
