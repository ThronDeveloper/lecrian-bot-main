const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


const embed = new Discord.MessageEmbed()
.setColor("#5865F2")
.setTitle(`<:snow_globe:952221059552251934> | Lecrian`)
.setDescription(`

<:wumpio:952221052128337940> | Geliştiricim <@!792984862550130728>

`)

message.channel.send({embeds: [embed]})


},

name: "developer",
description: "Botun Developerını Görürsünüz.",
aliases: [],
kategori: "yardim",
usage: "",
}
