const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
  client.user.setActivity('!comandos', { type: 'LISTENING' });
  
  
});
client.on("message", (message) => {
  if (message.content.startsWith("!puestada")) {
    message.channel.send("con toda la puestada con toda la puestada ayer pille dossss y hoy otros doossss",{files:["./image/puestadaa.gif"]});
  }
  /*if (message.content.startsWith("!capitanes")){
    var random1=Math.floor(Math.random() * 10)+1;  
    var random2=Math.floor(Math.random()*10)+1;
    while (random1==random2){random2=Math.floor(Math.random()*10)+1;}
    message.channel.send("Los capitanes son:\n");
    switch(random1){
case 1:message.channel.send("Santi");break;
case 2:message.channel.send("geno");break;
case 3:message.channel.send("Tinnico");break;
case 4:message.channel.send("MonsterWeed");break;
case 5:message.channel.send("branca");break;
case 6:message.channel.send("Tuki");break;
case 7:message.channel.send("Emiliano");break;
case 8:message.channel.send("clocken");break;
case 9:message.channel.send("Max");break;
case 10:message.channel.send("Adox");break;
    }
   switch(random2){
    case 1:message.channel.send("Santi");break;
    case 2:message.channel.send("geno");break;
    case 3:message.channel.send("Tinnico");break;
    case 4:message.channel.send("MonsterWeed");break;
    case 5:message.channel.send("branca");break;
    case 6:message.channel.send("Tuki");break;
    case 7:message.channel.send("Emiliano");break;
    case 8:message.channel.send("clocken");break;
    case 9:message.channel.send("Max");break;
    case 10:message.channel.send("Adox");break;
   }
  }*/

if (message.content.startsWith("!capitanes")){
  message.channel.send("***\nEl comando !capitanes NO estara disponible hasta el 26/10/2019***");
}

  if (message.content.startsWith("!patada")){
    message.channel.send({files:["./image/tinnico.gif"]});
  }
  if(message.content.startsWith("!judio")){
    message.channel.send("Como vas a decir eso judio hijo de puta!!",{files:["./image/judio.gif"]});
  }
   if(message.content.startsWith("!inflacion")){
  message.channel.send( "La inflacion es siempre y en todo lugar un FENOMENO MONETARIO",{files:["./image/milei.jpg"]});
}

  if (message.content.startsWith("!comandos")){
    message.channel.send({embed: {
      color: 3447003,
      description: "__Los comandos actuales en el servidor son:__\n\n**!puestada\n!inflacion\n!patada\n!host\n!capitanes (solo disponible el 26/10/2019)\n!torneo\n!judio**"
    }});

  }

  if (message.content.startsWith("!torneo")){
    message.channel.send("\n__**El torneo se llevara a cabo el dia 26/10/2019**__"+"\n\n__Integrantes Confirmados:__"+"\nSanti\ngeno\nTinnico\nMonsterWeed\nbranca\nTuki\nEmiliano\nclocken\nMax\nAdox"+"\n\n__Suplentes:__\nTiti");
  }
   
   if (message.content.startsWith("!host")){
    message.channel.send("\n__**Mi creador MonsterWeed ya me hosteo y ahora soy mas rapido y eficaz :yum:**__");
  }
   
   if(message.content.substring(0,5)=="!baja"){
  message.channel.send("jejojo");
}
   

});
client.login(process.env.BOT_TOKEN);
        
