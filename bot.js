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
      case 1:
        var a=Math.floor(math.random()*4)+1;
          if(a==1){
          message.channel.send("Santi",{files:["./image/santi.jpg"]});
          }
          if(a==2){
          message.channel.send("Santi",{files:["./image/santi2.jpg"]});
        }
          if(a==3){
          message.channel.send("Santi",{files:["./image/santi3.jpg"]});
        }
          if(a==4){
          message.channel.send("Santi",{files:["./image/santi4.jpg"]});
        }

      case 2:
        var ar=Math.floor(math.random()*3)+1;
        if(ar===1){
          message.channel.send("geno",{files:["./image/geno.jpg"]});
        }
          if(ar===2){
          message.channel.send("geno",{files:["./image/geno2.jpg"]});
          }
          if(ar===3)
          {
          message.channel.send("geno",{files:["./image/geno3.jpg"]});
          }
        
      
      case 3:
        var tt=Math.floor(math.random()*5)+1;
        if(tt==1){
          message.channel.send("Maxi",{files:["./image/maxi.jpg"]});
        }
          if(tt==2){
          message.channel.send("Maxi",{files:["./image/maxi2.jpg"]});}
          if(tt==3){
          message.channel.send("Maxi",{files:["./image/maxi3.jpg"]});}
          if(tt==4){
        message.channel.send("Maxi",{files:["./image/maxi4.jpg"]});}
        if(tt==5){
        message.channel.send("Maxi",{files:["./image/maxi5.jpg"]});}

      case 4:
        var fg=Math.floor(math.random()*4)+1;
          if(fg==1){
          message.channel.send("MonsterWeed",{files:["./image/yo.png"]});}
          if(fg==2){
          message.channel.send("MonsterWeed",{files:["./image/yo2.gif"]});}
          if(fg==3){
          message.channel.send("MonsterWeed",{files:["./image/yo3.gif"]});}
          if(fg==4){
          message.channel.send("MonsterWeed",{files:["./image/yo4.gif"]});}
        
      
      case 5:
        var m=Math.floor(math.random()*5)+1;
        
        if(m==1){
          message.channel.send("branca",{files:["./image/branca.jpg"]});}
          if(m==2){
          message.channel.send("branca",{files:["./image/branca2.jpg"]});}
          if(m==3){
          message.channel.send("branca",{files:["./image/branca3.jpg"]});}
          if(m==4){
          message.channel.send("branca",{files:["./image/branca4.jpg"]});}
          if(m==5){
          message.channel.send("branca",{files:["./image/branca5.jpg"]});}
       
      
      case 6:
        var sdd=Math.floor(math.random()*3)+1;
        
          if(sdd==1){
          message.channel.send("Tuki",{files:["./image/tuki.jpg"]});}
          if(sdd==2){
          message.channel.send("Tuki",{files:["./image/tuki2.jpg"]});}
          if(sdd==3){
          message.channel.send("Tuki",{files:["./image/tuki3.jpg"]});}
        
      
      case 7:
        var ff=Math.floor(math.random()*3)+1;
       if(ff==1){
          message.channel.send("Tinnico",{files:["./image/tinnico.gif"]});}
          if(ff==2){
          message.channel.send("Tinnico",{files:["./image/tinnico2.png"]});}
          if(ff==3){
          message.channel.send("Tinnico",{files:["./image/tinnico3.jpg"]});}
   
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
        
