const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const token = 'ODkzODY1ODA2MjkzNzYyMDc5.YVhrZw.khEkp5sw2CxZ3nIqKvFq2AGQBZQ';

const PREFIX = 'e-';


bot.on('ready', () => {
    console.log('This bot is active!');
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    

    switch (args[0]) { 
        case 'Nitro':
            const Embed = new RichEmbed()
            .setTitle("Helper Embed")
            .setColor(0xFF0000)
            .setDescription("This is your nitro generator link made by Eke47 - https://replit.com/@Cyber-SmartSmar/Nitro-generator?v=1");

            message.author.send(Embed);
        break;
    }


});

            
                        
bot.login(token);
