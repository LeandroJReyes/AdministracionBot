const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
  client.user.setActivity('!comandos', { type: 'LISTENING' });
  
  
});
client.on("message", (message) => {
  if (message.content===("!puestada")) {
    message.channel.send("con toda la puestada con toda la puestada ayer pille dossss y hoy otros doossss",{files:["./image/puestadaa.gif"]});
  }
  /*if (message.content===("!capitanes")){
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

if (message.content===("!capitanes")){
  message.channel.send("***\nEl comando !capitanes NO estara disponible hasta el 26/10/2019***");
}

  if (message.content===("!patada")){
    message.channel.send({files:["./image/tinnico.gif"]});
  }
  if(message.content===("!judio")){
    message.channel.send("Como vas a decir eso judio hijo de puta!!",{files:["./image/judio.gif"]});
  }
   if(message.content===("!inflacion")){
  message.channel.send( "La inflacion es siempre y en todo lugar un FENOMENO MONETARIO",{files:["./image/milei.jpg"]});
}

  if (message.content===("!comandos")){
    message.channel.send({embed: {
      color: 3447003,
      description: "__Los comandos actuales en el servidor son:__\n\n**!puestada\n!baja\n!inflacion\n!patada\n!host\n!limpiar\n!capitanes (solo disponible el 26/10/2019)\n!torneo\n!judio**"
    }});

  }

  if (message.content===("!torneo")){
    message.channel.send("\n__**El torneo se llevara a cabo el dia 26/10/2019**__"+"\n\n__Integrantes Confirmados:__"+"\nSanti\ngeno\nTinnico\nMonsterWeed\nbranca\nTuki\nEmiliano\nclocken\nMax\nAdox"+"\n\n__Suplentes:__\nTiti\n2puntosbcorta");
  }
   
   if (message.content===("!host")){
    message.channel.send("\n__**Mi creador MonsterWeed ya me hosteo y ahora soy mas rapido y eficaz :yum:**__");
  }
   
   if(message.content===("!baja")){
  message.channel.send({files:["./image/baja.gif"]});
}  
   
if(message.content===("!limpiar")){
  message.channel.send("limpiando... \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nPantalla Limpia :page_facing_up: ");
  }
   
   
//comunicadoss
   /*
  if(message.content===("!das")){
    message.channel.send("[LNDC]©                                                  13/10/2019\n\n"+
    "La administracion se complace en presentar el canal de Updates del servidor.\n"
    +"En esta seccion se publicara las modificaciones que se le hagan al servidor.\n\n"
    +"**Este canal es exclusivamente para publicaciones de la administracion por lo tanto permanecera cerrado(solo lectura).**\n@here");
  }
 if (message.content===("!asd")){
    message.channel.send("[LNDC]©                                                  13/10/2019\n\n"+
    "__**Actualizacion v1.1:**__\n"+
    "-Nuevo comando de **!limpiar**. Este comando es util para aquellos que desean limpiar el chat cuando alguien manda algun tipo de material comprometido de instagram o twitter dentro del canal de mensajes.\n\n"+
    "-Se arreglo el bug de comandos que cuando escribian un comando y segian escribiendo salia el ejecutable del comando.");
  }*/
   
   //nuevos comandos (Alpha)
if(message.content===("!lindo")){
    message.channel.send("Segun "+message.author.toString()+ " el bebe mas hermoso de este servidor es:");
    var ran=Math.floor(Math.random() * 7)+1;
    switch(ran){
      case 1:{
        var a=Math.floor(math.random()*4)+1;
        switch(a){
          case 1:message.channel.send("Santi",{files:["./image/santi.jpg"]});break;
          case 2:message.channel.send("Santi",{files:["./image/santi2.jpg"]});break;
          case 3:message.channel.send("Santi",{files:["./image/santi3.jpg"]});break;
          case 4:message.channel.send("Santi",{files:["./image/santi4.jpg"]});break;
          default:
            break;
       }
      
       
      }
      case 2:{
        var ar=Math.floor(math.random()*3)+1;
        switch(ar){
          case 1:message.channel.send("geno",{files:["./image/geno.jpg"]});break;
          case 2:message.channel.send("geno",{files:["./image/geno2.jpg"]});break;
          case 3:message.channel.send("geno",{files:["./image/geno3.jpg"]});break;
        }
      }
      case 3:{
        var tt=Math.floor(math.random()*5)+1;
        switch(tt){
          case 1:message.channel.send("Maxi",{files:["./image/maxi.jpg"]});break;
          case 2:message.channel.send("Maxi",{files:["./image/maxi2.jpg"]});break;
          case 3:message.channel.send("Maxi",{files:["./image/maxi3.jpg"]});break;
          case 4:message.channel.send("Maxi",{files:["./image/maxi4.jpg"]});break;
          case 5:message.channel.send("Maxi",{files:["./image/maxi5.jpg"]});break;
          
        }
      }
      case 4:{
        var fg=Math.floor(math.random()*4)+1;
        switch(fg){
          case 1:message.channel.send("MonsterWeed",{files:["./image/yo.png"]});break;
          case 2:message.channel.send("MonsterWeed",{files:["./image/yo2.gif"]});break;
          case 3:message.channel.send("MonsterWeed",{files:["./image/yo3.gif"]});break;
          case 4:message.channel.send("MonsterWeed",{files:["./image/yo4.gif"]});break;
        }
      }
      case 5:{
        var m=Math.floor(math.random()*5)+1;
        switch(m){
          case 1:message.channel.send("branca",{files:["./image/branca.jpg"]});break;
          case 2:message.channel.send("branca",{files:["./image/branca2.jpg"]});break;
          case 3:message.channel.send("branca",{files:["./image/branca3.jpg"]});break;
          case 4:message.channel.send("branca",{files:["./image/branca4.jpg"]});break;
          case 5:message.channel.send("branca",{files:["./image/branca5.jpg"]});break;
        }
      }
      case 6:{
        var sdd=Math.floor(math.random()*3)+1;
        switch(sdd){
          case 1:message.channel.send("Tuki",{files:["./image/tuki.jpg"]});break;
          case 2:message.channel.send("Tuki",{files:["./image/tuki2.jpg"]});break;
          case 3:message.channel.send("Tuki",{files:["./image/tuki3.jpg"]});break;
        }
      }
      case 7:{
        var ff=Math.floor(math.random()*3)+1;
        switch(ff){
          case 1:message.channel.send("Tinnico",{files:["./image/tinnico.gif"]});break;
          case 2:message.channel.send("Tinnico",{files:["./image/tinnico2.png"]});break;
          case 3:message.channel.send("Tinnico",{files:["./image/tinnico3.jpg"]});break;
        }
      }
      default:
        break;
     }
  } 
//sdasdd
   
 if (message.content===("!test")){
     message.delete();
    message.channel.send(message.author.toString()+" gracias por testearme, la administracion siempre esta atenta.");
     
  }
   
/*if (message.content.startsWith("!")&&message.content!==("!comandos")&&message.content!==("!baja")&&message.content!==("!puestada")&&message.content!==("!inflacion")&&message.content!==("!patada")
  &&message.content!==("!host")&&message.content!==("!limpiar")&&message.content!==("!capitanes")&&message.content!==("!torneo")&&message.content!==("!judio")&&message.content!==("!test")){
     message.delete();
    message.channel.send(message.author.toString()+" __**No se reconocio el comando,por favor compruebe el comando usando !comandos **__");
  }*/
   


});
client.login(process.env.BOT_TOKEN);
        
