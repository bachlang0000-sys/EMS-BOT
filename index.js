require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});


client.once("ready", () => {

    console.log("--------------------------------");
    console.log("🚑 EMS BOT ONLINE");
    console.log(`Bot: ${client.user.tag}`);
    console.log(`Server ID: ${config.serverId}`);
    console.log("--------------------------------");

});


client.on("interactionCreate", async interaction => {

    if (!interaction.isChatInputCommand()) return;


    if(interaction.commandName === "vaoca"){

        await interaction.reply({
            content:"🚑 EMS: Bắt đầu ca trực!",
            ephemeral:true
        });

    }


    if(interaction.commandName === "roitca"){

        await interaction.reply({
            content:"🚑 EMS: Kết thúc ca trực!",
            ephemeral:true
        });

    }


});


client.login(process.env.DISCORD_TOKEN);
