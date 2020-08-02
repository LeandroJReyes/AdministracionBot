const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
  client.user.setActivity('!comandos', { type: 'LISTENING' });

  var generalChannel = client.channels.get("587678594525036568"); // Replace with known channel ID
  var generalChannel2 = client.channels.get("277915104018825226");
  generalChannel.send("Volvi a estar Online manga de cornetas, me extrañaron?").then(sentMessage => {
    sentMessage.react('✅');
    sentMessage.react('❌');
  });
  /*generalChannel2.send("Volvi a estar Online manga de cornetas, me extrañaron?").then(sentMessage => {
    sentMessage.react('✅');
    sentMessage.react('❌');
  });*/
  
});

client.on('message', (receivedMessage) => { 
try{
var chanelmensaje=client.channels.get("739617321446014997");
chanelmensaje.send("DE: "+receivedMessage.author.toString()+"Mensaje: "+receivedMessage.toString());
}
catch(error)
{receivedMessage.author.send("Error de mensajeee");}

})


client.on("message", (message) => {
  /*if(message.content===("Volvi a estar Online manga de cornetas, me extrañaron?")&&message.author.bot){
    message.react('✅');
    message.react('❌');
    
  }*/

  if (message.content===("!puestada")) {
    message.channel.send("con toda la puestada con toda la puestada ayer pille dossss y hoy otros doossss",{files:["./image/puestadaa.gif"]});
  }

  /*if (message.content===("!capitanes")){
    var random1=Math.floor(Math.random() * 2)+1;
    switch(random1){
case 1:message.channel.send("El que comienza eligiendo es: Mancoman");break;
case 2:message.channel.send("El que comienza eligiendo es: Tuki");break;
  }
}*/

/*if (message.content===("!capitanes")){
  message.channel.send("***\nLos capitanes ya se elijieron, son Mancoman y Tuki,los equipos ya estan designados***");
}*/

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
      description: "__Los comandos actuales en el servidor son:__\n\n**!puestada\n!baja\n!inflacion\n!patada\n!host\n!limpiar\n!torneo\n!judio\n!F\n!sale\n!lindo\n!test**"
      
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
   

   //nuevos comandos (Alpha)
    
   if(message.content===("!lindo")){
       message.delete();
    message.channel.send("Segun "+message.author.toString()+ " el bebe mas hermoso de este servidor es:");
    var ran=Math.floor(Math.random() * 7)+1;
    var cuat=Math.floor(Math.random() * 4)+1;
    var tres=Math.floor(Math.random() * 3)+1;
    var cin=Math.floor(Math.random() * 5)+1;
    switch(ran){
      case 1:
          if(cuat==1){
          message.channel.send("Santi",{files:["./image/santi.jpg"]});
          }
          if(cuat==2){
          message.channel.send("Santi",{files:["./image/santi2.jpg"]});
        }
          if(cuat==3){
          message.channel.send("Santi",{files:["./image/santi3.jpg"]});
        }
          if(cuat==4){
          message.channel.send("Santi",{files:["./image/santi4.jpg"]});
        }
        break;
      case 2:
        if(tres==1){
          message.channel.send("geno",{files:["./image/geno.jpg"]});
        }
          if(tres==2){
          message.channel.send("geno",{files:["./image/geno2.jpg"]});
          }
          if(tres==3)
          {
          message.channel.send("geno",{files:["./image/geno3.jpg"]});
          }
        break;
      
      case 3:
        if(cin==1){
          message.channel.send("Maxi",{files:["./image/maxi.jpg"]});
        }
          if(cin==2){
          message.channel.send("Maxi",{files:["./image/maxi2.jpg"]});}
          if(cin==3){
          message.channel.send("Maxi",{files:["./image/maxi3.jpg"]});}
          if(cin==4){
        message.channel.send("Maxi",{files:["./image/maxi4.jpg"]});}
        if(cin==5){
        message.channel.send("Maxi",{files:["./image/maxi5.jpg"]});}
          break;
      case 4:
          if(cuat==1){
          message.channel.send("MonsterWeed",{files:["./image/yo.png"]});}
          if(cuat==2){
          message.channel.send("MonsterWeed",{files:["./image/yo2.gif"]});}
          if(cuat==3){
          message.channel.send("MonsterWeed",{files:["./image/yo3.gif"]});}
          if(cuat==4){
          message.channel.send("MonsterWeed",{files:["./image/yo4.gif"]});}
        break;
      
      case 5:
        if(cin==1){
          message.channel.send("branca",{files:["./image/branca.jpg"]});}
          if(cin==2){
          message.channel.send("branca",{files:["./image/branca2.jpg"]});}
          if(cin==3){
          message.channel.send("branca",{files:["./image/branca3.jpg"]});}
          if(cin==4){
          message.channel.send("branca",{files:["./image/branca4.jpg"]});}
          if(cin==5){
          message.channel.send("branca",{files:["./image/branca5.jpg"]});}
       break;
      
      case 6:
        
          if(tres==1){
          message.channel.send("Tuki",{files:["./image/tuki.jpg"]});}
          if(tres==2){
          message.channel.send("Tuki",{files:["./image/tuki2.jpg"]});}
          if(tres==3){
          message.channel.send("Tuki",{files:["./image/tuki3.jpg"]});}
      break;
      case 7:
       if(tres==1){
          message.channel.send("Tinnico",{files:["./image/tinnico.gif"]});}
          if(tres==2){
          message.channel.send("Tinnico",{files:["./image/tinnico2.png"]});}
          if(tres==3){
          message.channel.send("Tinnico",{files:["./image/tinnico3.jpg"]});}
          
   break;
     }
  } 
   
 if(message.content===("!sale")){
    message.delete();
    message.channel.send("**Sale o no sale?**")
    var sale=Math.floor(Math.random() * 10)+1;
    switch(sale){
      case 1:message.channel.send("No Sale "+message.author.toString(),{files:["./image/nosale.png"]});break;
      case 2:message.channel.send("No Sale "+message.author.toString(),{files:["./image/nosale.png"]});break;
      case 3:message.channel.send("No Sale "+message.author.toString(),{files:["./image/nosale.png"]});break;
      case 4:message.channel.send("No Sale "+message.author.toString(),{files:["./image/nosale.png"]});break;
      case 5:message.channel.send("No Sale "+message.author.toString(),{files:["./image/nosale.png"]});break;
      case 6:message.channel.send("No Sale "+message.author.toString(),{files:["./image/nosale.png"]});break;
      case 7:message.channel.send("No Sale "+message.author.toString(),{files:["./image/nosale.png"]});break;
      case 8:message.channel.send("Sale "+message.author.toString(),{files:["./image/sale.png"]});break;
      case 9:message.channel.send("Sale "+message.author.toString(),{files:["./image/sale.png"]});break;
      case 10:message.channel.send("Sale "+message.author.toString(),{files:["./image/sale.png"]});break;
    }
  }
  
   
   if(message.content===("!F")){
  message.channel.send(message.author.toString()+" **Pays Respect To Tiquino**",{files:["./image/fres.jpg"]});
}
if(message.content===("!f")){
  message.channel.send("**PEDAZO DE CORNUDO ESCRIBI BIEN EL COMANDO ES: !F (con mayucula imbecil)**");
}

   
/*if (message.content===("!lanz")){
   message.delete();
 message.channel.send("[LNDC]©                                                                                                                                    31/10/2019\n\n"+
 "La Administración ha tomado la decisión de jugar el ultimo mapa del torneo 5v5 (mirage) el día domingo 03/11/2019 a partir de la hora 16:30, debido a que nuestro programador designado MonsterWeed ha hablado con alguno de los integrantes para tomar una fecha en común.\n\n"+
 "Les informamos a los participantes que hay algunos cambios en miembros de equipo que se muestra continuación:\n\n"+
 "__Team Mancoman__                                    __Team Tuki__\n"+
     "Clocken                                                MonsterWeed\n"+
     "Titi                                                        Branca\n"+
     "Santi                                                     Tinnico\n"+
     "Adoxx                                                   Max\n\n"+
   "Se les recomienda a TODOS los participantes que confirmen que pueden jugar el día domingo a las 16:30 horas para llevar a cabo el evento.\n"+
   "Desde ya muchas gracias.\n\n"+
 "ATT: Administración");
}*/
   
if (message.content.startsWith("!")&&message.content!==("!comandos")&&message.content!==("!baja")&&message.content!==("!puestada")&&message.content!==("!inflacion")&&message.content!==("!patada")
  &&message.content!==("!host")&&message.content!==("!limpiar")&&message.content!==("!torneo")&&message.content!==("!judio")&&message.content!==("!test")&&message.content!==("!sale")&&message.content!==("!lanz")
  &&message.content!==("!F")&&message.content!==("!f")&&message.content!==("!test")&&message.content!==("!mimir")&&message.content!==("!5v5")&&message.content!==("!lindo")&&!message.content.startsWith("!!")&&!message.content.startsWith("!!!")&&!message.content.endsWith("!")){
     message.delete();
    message.channel.send(message.author.toString()+" __**No se reconocio el comando,por favor compruebe el comando usando !comandos **__");
  }

  if(message.content===("!mimir")){
    message.channel.send({files:["./image/mimir.jpg"]});
  }  
   

  if(message.content===("!test").toLowerCase()){
    message.delete();
    message.channel.send("["+message.author.toString()+"]"+" **Gracias por testearme,la administracion esta ON** ");
  }

  if(message.content===("!limpiar"))
  {
    message.channel.send("Limpiando.... \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nPantalla Limpia :newspaper:");
  }

  if(message.content===("!5v5")){
    message.delete();
    message.channel.send("[LNDC]©                                                                                                                                    02/05/2020\n\n"+
    "La Administracion se complace en presentar el nuevo canal de texto 5v5, el cual servira para organizar eventos 5 versus 5."+
    "\n Este canal permanecera abierto a todos, de modo que se les agradece **NO** usar comandos dentro de este canal, y solo sea utilizado para organizar el evento 5v5."+
    "A continuacion tendran 2 canales de voz que seran utilizados cuando el evento este en curso.")

  }
   

  
  

});
client.login(process.env.BOT_TOKEN);