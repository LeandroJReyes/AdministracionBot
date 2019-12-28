const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
  console.log("Estoy listo!");
});

client.on("message", (message) => {
 if(message.content.startsWith("ping")) {
   message.channel.send("pong!");
 }

 if(message.content.startsWith("!nonsdaasd"))
 {
   message.channel.send
   ("La administracion se enorgullece en presentar su nuevo atuendo.\n\n"+
   " programado y diseñfcggado por: MonsterPorro\n "+
   "@here"
   )
   
  
 }

});

client.login(process.env.BOT_TOKEN);