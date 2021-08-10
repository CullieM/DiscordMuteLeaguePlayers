import { default as config } from './config.js';
import { Client, Guild, Intents, VoiceChannel } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('messageCreate', (message) => {
    if (message.content === '!mute') { 
        message.member.voice.setMute(true);
     }

     const channels = message.guild.channels;
     for (const [channelID, channel] of channels) {
       for (const [memberID, member] of channel.members) {
           // !IF PLAYING LEAGUE
       }
     }

});

client.on('presenceUpdate', (oldMember, newMember) => {
    console.log("Test");
    console.log(oldMember.activities.name);
    console.log(newMember.activities.name);
});



client.login(config.token);