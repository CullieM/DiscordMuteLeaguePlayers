import { default as config } from './config.js';
import { Client, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] });

client.on('presenceUpdate', (oldPresence, newPresence) => {
    console.log(oldPresence.activities.toString());
    console.log(newPresence.activities.toString());
    if (newPresence.activities.toString() === "Owlboy")
    {
        newPresence.member.voice.setMute(true);
    }
    else if (!(newPresence.activities.toString() === "Owlboy"))
    {
        newPresence.member.voice.setMute(false);
    }
});
client.login(config.token);