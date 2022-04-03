const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("<:failed:952221040656937030> | Yönetici Yetkiniz Yok.")

const embed = new Discord.MessageEmbed()
.setColor("#5865F2")
.setDescription(`

<:verify:953737386871914546>** | Doğrulanmış Discord Sunucu Kuralları**


<:warmpus:952221049062314066> | Tüm üyelere karşı saygılı olmalısınız.

<:warmpus:952221049062314066> | Spam ve flood yapmamalısınız.

<:warmpus:952221049062314066> | Hakaret ve kışkırtmaya yönelik ileti göndermemelisiniz.

<:warmpus:952221049062314066> | Küfür ve ailevi küfür içerikli ileti göndermemelisiniz.

<:warmpus:952221049062314066> | Din, dil, ırk ve siyaset konularını sohbet konusu yapmamalısınız.

<:warmpus:952221049062314066> | Profilinizde herhangi bir uygunsuz içerik barındırmamalısınız.

<:warmpus:952221049062314066> | Herhangi bir ürünün satışını, reklamını yapmak yasaktır.

<:warmpus:952221049062314066> | Kullanıcıyı rahatsız edecek düzeyde etiket atmak yasaktır.

<:warmpus:952221049062314066> | Discord sunucularının herhangi bir şekilde reklamı yasaktır.

`)

message.channel.send({embeds: [embed]})


},

name: "kurallar",
description: "Sahibimin Ayarladığı Discord Sunucu Kurallarını Gösterir.",
aliases: [],
kategori: "yardim",
usage: "",
}
