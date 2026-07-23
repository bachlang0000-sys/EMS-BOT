require("dotenv").config();

const {
    Client,
    GatewayIntentBits
} = require("discord.js");

const config = require("./config.json");


const client = new Client({
    intents:[
        GatewayIntentBits.Guilds
    ]
});


client.once("ready", () => {

    console.log("--------------------------------");
    console.log("🚑 EMS BOT ONLINE");
    console.log(`Bot: ${client.user.tag}`);
    console.log("--------------------------------");

});


client.on("interactionCreate", async interaction => {
    console.log("Có lệnh:", interaction.commandName);

    if(!interaction.isChatInputCommand()) return;


    try {

        if(interaction.commandName === "vaoca"){

            await interaction.reply({
                content:"🚑 EMS: Bạn đã bắt đầu ca trực!",
                ephemeral:true
            });

        }


        if(interaction.commandName === "roitca"){

            await interaction.reply({
                content:"🚑 EMS: Bạn đã kết thúc ca trực!",
                ephemeral:true
            });

        }


        if(interaction.commandName === "giotruc"){

            await interaction.reply({
                content:"⏰ Tổng giờ trực: Chưa có dữ liệu",
                ephemeral:true
            });

        }


        if(interaction.commandName === "kiemtrangay"){

            await interaction.reply({
                content:"📋 Báo cáo EMS hôm nay đang cập nhật",
                ephemeral:true
            });

        }


        if(interaction.commandName === "kiemtratuan"){

            await interaction.reply({
                content:"🏆 Báo cáo EMS tuần đang cập nhật",
                ephemeral:true
            });

        }


    } catch(error){

        console.error(error);

        if(!interaction.replied){

            await interaction.reply({
                content:"❌ Có lỗi xảy ra",
                ephemeral:true
            });

        }

    }

});


client.login(process.env.DISCORD_TOKEN);
