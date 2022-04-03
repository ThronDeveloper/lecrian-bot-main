const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


const embed = new Discord.MessageEmbed()
.setColor("#5865F2")
.setTitle(`<:snow_globe:952221059552251934> | Lecrian`)
.setDescription(`

<:wumpigi:952221050974928916> | Geliştiricimin Discord Sunucusuna [Katıl](https://discord.gg/cA9wmmT4x4)

`)

message.channel.send({embeds: [embed]})


},

name: "destek",
description: "Botun destek sunucusunu görürsünüz.",
aliases: [],
kategori: "yardim",
usage: "",
}
