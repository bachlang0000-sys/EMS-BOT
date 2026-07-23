require("dotenv").config();

const { REST, Routes, SlashCommandBuilder } = require("discord.js");
const config = require("./config.json");


const commands = [

    new SlashCommandBuilder()
        .setName("vaoca")
        .setDescription("Bắt đầu ca trực EMS"),


    new SlashCommandBuilder()
        .setName("roitca")
        .setDescription("Kết thúc ca trực EMS"),


    new SlashCommandBuilder()
        .setName("giotruc")
        .setDescription("Xem tổng số giờ trực EMS"),


    new SlashCommandBuilder()
        .setName("kiemtrangay")
        .setDescription("Xem báo cáo EMS hôm nay"),


    new SlashCommandBuilder()
        .setName("kiemtratuan")
        .setDescription("Xem báo cáo EMS tuần")

].map(command => command.toJSON());


const rest = new REST({
    version: "10"
}).setToken(process.env.DISCORD_TOKEN);



async function main(){

    try{

        console.log("Đang đăng ký Slash Command...");


        await rest.put(
            Routes.applicationGuildCommands(
                config.botId,
                config.serverId
            ),
            {
                body: commands
            }
        );


        console.log("Đăng ký Slash Command thành công!");

    }

    catch(error){

        console.error(error);

    }

}


main();
