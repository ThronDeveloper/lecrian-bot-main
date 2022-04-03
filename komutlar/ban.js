const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("<:failed:952221040656937030> | Üyeleri Banla Yetkiniz Yok.")


/////  !ban @kişi sebep

        let user = message.mentions.users.first();


        if(!user) return message.channel.send("<:failed:952221040656937030> | Lütfen Banlanacak Kişiyi Belirtiniz.")


const üye = message.guild.members.cache.get(user.id)

üye.ban()


const ban = new Discord.MessageEmbed()
.setColor("#5865F2")
.setDescription(`<:passed:952221046092730378> | ${user}, isimli kişi başarılı bir şekilde banlandı!
`)


message.channel.send({embeds:[ban]})


},

name: "ban",
description: "Belirlenen kişiyi banlarsın",
aliases: [],
kategori: "yardim",
usage: "",
}
