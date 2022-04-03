const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("<:failed:952221040656937030> | Rolleri Yönet Yetkiniz Bulunmamakta.")

let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

if(!user) return message.channel.send("<:failed:952221040656937030> | Lütfen Rolün Verileceği Kişiyi Belirtiniz.")
if(!rol) return message.channel.send("<:failed:952221040656937030> | Lütfen Verilecek Rolü Belirtiniz.")


message.guild.members.cache.get(user.id).roles.add(rol)

const embed = new Discord.MessageEmbed()
.setColor("#5865F2")
.setAuthor("Lecrian")
.setDescription(`<:passed:952221046092730378> | ${user}, isimli kişiye ${rol} isimli rol verildi.`)


message.channel.send({embeds:[embed]})





},

name: "rol-ver",
description: "Belirlediğiniz üyeye rol verirsiniz",
aliases: [],
kategori: "yardim",
usage: "",
}
