import { default as config } from './config.js';
import { Client, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('presenceUpdate', (oldPresence, newPresence) => {
if (newPresence.member.voice.channel) 
    {
        console.log(newPresence.activities.toString());
        if (newPresence.activities.toString() === "League of Legends") 
        {
            newPresence.member.voice.setMute(true);
        }
        else 
        {
            newPresence.member.voice.setMute(false);
        }
    }
});

client.login(config.token);