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
  /*if (message.content.startsWith("!capitanes")&&message.content.endsWith("!capitanes")){
    var random1=Math.floor(Math.random() * 10)+1;  
    var random2=Math.floor(Math.random()*10)+1;
    while (random1==random2){random2=Math.floor(Math.random()*10)+1;}
    message.channel.send("Los capitanes son:\n");
    switch(random1){
case 1:message.channel.send("Santi"+" (Comienza eligiendo miembros)");break;
case 2:message.channel.send("geno"+" (Comienza eligiendo miembros)");break;
case 3:message.channel.send("Tinnico"+" (Comienza eligiendo miembros)");break;
case 4:message.channel.send("MonsterWeed"+" (Comienza eligiendo miembros)");break;
case 5:message.channel.send("branca"+" (Comienza eligiendo miembros)");break;
case 6:message.channel.send("Tuki"+" (Comienza eligiendo miembros)");break;
case 7:message.channel.send("Emiliano"+" (Comienza eligiendo miembros)");break;
case 8:message.channel.send("clocken"+" (Comienza eligiendo miembros)");break;
case 9:message.channel.send("Max"+" (Comienza eligiendo miembros)");break;
case 10:message.channel.send("Adox"+" (Comienza eligiendo miembros)");break;
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

if (message.content.startsWith("!capitanes")&&message.content.endsWith("!capitanes")){
  message.channel.send("***\nEl comando !capitanes NO estara disponible hasta el 26/10/2019***");
}

  if (message.content.startsWith("!patada")&&message.content.endsWith("!patada")){
    message.channel.send({files:["./image/tinnico.gif"]});
  }
  if(message.content.startsWith("!judio")&&message.content.endsWith("!judio")){
    message.channel.send("Como vas a decir eso judio hijo de puta!!",{files:["./image/judio.gif"]});
  }
   if(message.content.startsWith("!inflacion")&&message.content.endsWith("!inflacion")){
  message.channel.send( "La inflacion es siempre y en todo lugar un FENOMENO MONETARIO",{files:["./image/milei.jpg"]});
}

  if (message.content.startsWith("!comandos")&&message.content.endsWith("!comandos")){
    message.channel.send({embed: {
      color: 3447003,
      description: "__Los comandos actuales en el servidor son:__\n\n**!puestada\n!baja\n!inflacion\n!patada\n!host\n!limpiar\n!capitanes (solo disponible el 26/10/2019)\n!torneo\n!judio**"
    }});

  }

  if (message.content.startsWith("!torneo")&&message.content.endsWith("!torneo")){
    message.channel.send("\n__**El torneo se llevara a cabo el dia 26/10/2019**__"+"\n\n__Integrantes Confirmados:__"+"\nSanti\ngeno\nTinnico\nMonsterWeed\nbranca\nTuki\nEmiliano\nclocken\nMax\nAdox"+"\n\n__Suplentes:__\nTiti\n2puntosbcorta");
  }
   
   if (message.content.startsWith("!host")&&message.content.endsWith("!host")){
    message.channel.send("\n__**Mi creador MonsterWeed ya me hosteo y ahora soy mas rapido y eficaz :yum:**__");
  }
   
   if(message.content.startsWith("!baja")&&message.content.endsWith("!baja")){
  message.channel.send({files:["./image/baja.gif"]});
}  
   
if(message.content.startsWith("!limpiar")&&message.content.endsWith("!limpiar")){
  message.channel.send("limpiando... \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nPantalla Limpia :page_facing_up: ");
  }
   
   
//comunicadoss
   /*
  if(message.content.startsWith("!das")){
    message.channel.send("[LNDC]©                                                  13/10/2019\n\n"+
    "La administracion se complace en presentar el canal de Updates del servidor.\n"
    +"En esta seccion se publicara las modificaciones que se le hagan al servidor.\n\n"
    +"**Este canal es exclusivamente para publicaciones de la administracion por lo tanto permanecera cerrado(solo lectura).**\n@here");
  }
 if (message.content.startsWith("!asd")){
    message.channel.send("[LNDC]©                                                  13/10/2019\n\n"+
    "__**Actualizacion v1.1:**__\n"+
    "-Nuevo comando de **!limpiar**. Este comando es util para aquellos que desean limpiar el chat cuando alguien manda algun tipo de material comprometido de instagram o twitter dentro del canal de mensajes.\n\n"+
    "-Se arreglo el bug de comandos que cuando escribian un comando y segian escribiendo salia el ejecutable del comando.");
  }*/
   
   //nuevos comandos (Alpha)
 
if(message.content.startsWith("!lindo")&&message.content.endsWith("!lindo")){
    message.channel.send("Segun "+message.author.toString()+ " el bebe mas hermoso de este servidor es:");
    var ran=Math.floor(Math.random() * 7)+1;
    switch(ran){
      case 1:message.channel.send("Santi",{files:["./image/santi.jpg"]});break;
      case 2:message.channel.send("geno",{files:["./image/geno.jpg"]});break;
      case 3:message.channel.send("Maxi",{files:["./image/maxi.jpg"]});break;
      case 4:message.channel.send("MonsterWeed",{files:["./image/yo.png"]});break;
      case 5:message.channel.send("branca",{files:["./image/branca.jpg"]});break;
      case 6:message.channel.send("Tuki",{files:["./image/tuki.jpg"]});break;
      case 7:message.channel.send("Tinnico",{files:["./image/tinnico.gif"]});break;
     }
  }
   
 if (message.content.startsWith("!test")){
    message.channel.send(message.author.toString()+"si salio");
  }
 
   


});
client.login(process.env.BOT_TOKEN);
        
