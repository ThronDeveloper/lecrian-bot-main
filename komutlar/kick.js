const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("<:failed:952221040656937030> | Yönetici Yetkiniz Yok.")


/////  !ban @kişi sebep

        let user = message.mentions.users.first();


        if(!user) return message.channel.send("<:failed:952221040656937030> | Lütfen Atılacak Kişiyi Belirtiniz.")


const üye = message.guild.members.cache.get(user.id)

üye.kick()


const kick = new Discord.MessageEmbed()
.setColor("#5865F2")
.setDescription(`<:passed:952221046092730378> | ${user} isimli kişi başarılı bir şekilde Sunucudan Atıldı
`)


message.channel.send({embeds:[kick]})


},

name: "kick",
description: "Belirlenen kişiyi Sunucudan Atarsın",
aliases: [],
kategori: "yardim",
usage: "",
}
