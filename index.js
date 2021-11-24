require('dotenv')
const { Client,Util, Collection,MessageEmbed,Structures } = require("discord.js");
const keepAlive = require('./server.js')
keepAlive()
async function errorEmbed(text,message){
      const newembed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.me.displayName}`)
      .setDescription(`**❌ | ${text} **`)
      .setColor("#FF7676")
       return message.channel.send(newembed);
    }
const Discord = require('discord.js');
const client = new Client({
    disableEveryone: true
})
const axios = require("axios")


//=============================================
const channel_id = "904937907981271090"
//=============================================


client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
  if (message.channel.id != channel_id) return
  let res = await axios.get( `${process.env.BRAIN}${encodeURIComponent(message.content)}`);
  message.reply(res.data.cnt);
  } catch {
   errorEmbed(`Bot error, please try again!`,message)
   }
})

client.on('ready', async () => {
    console.clear()
    console.log(`${client.user.tag} is online!`)
})
client.on('ready', () => {
	
    console.log(client.user.tag + " has logged in.");
 client.user.setPresence({activity: {
          name: `AI-CHAT SYSTEM AT VENOMOUS`,
          type: "WATCHING",
        },
        status: "online",
      })

      .catch(console.error);
  
});
client.login(process.env.TOKEN);
