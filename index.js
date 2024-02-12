const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  message.reply({
    content: "Hello From BOT",
  });
  //   console.log(message);
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("pong!!");
});

client.login(
  "MTIwNjIxMTU0OTc1NzQ0MDAyMA.GcpBRB.4FLIF_SUsOoQiMqh4Lqqkcgv8WgEeO2O-YNGIA"
);
