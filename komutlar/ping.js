const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


const embed = new Discord.MessageEmbed()
.setColor("#5865F2")
.setTitle(`<:snow_globe:952221059552251934> **| Lecrian**`)
.setDescription(`

<:hypesquad:952221041818750978> | Pingim: ${Math.round(message.client.ws.ping)} MS

`)

message.channel.send({embeds: [embed]})


},

name: "ping",
description: "Botun Anlık Pingini Görürsünüz.",
aliases: [],
kategori: "yardim",
usage: "",
}
