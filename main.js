import { default as config } from './config.js';
import { Client, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS] });

client.on('presenceUpdate', (_, newPresence) => {
    // Checks if user is in voice, if user is not in voice .setMute() throws.
    if (newPresence.member.voice.channel) 
    {
        console.log(newPresence.activities.toString());//DEBUG
        
        // Checks if the user started playing league of legends.
        if (newPresence.activities.toString() === "League of Legends") 
        {
            newPresence.member.voice.setMute(true);
        }
        // If the user is not playing league of legends unmute them.
        // This should probably be: "if the user WAS playing league of legends, unmute them"
        else 
        {
            newPresence.member.voice.setMute(false);
        }
    }
});

// ! DOESN'T WORK
// * This is for the case where somebody starts a game, THEN joins voice.
// voiceStateUpdate fires way too often, and somehow 
// newState.member.voice.channel exists even after leaving a channel

/*
client.on('voiceStateUpdate', (_, newState) => {
    if (newState.member.voice.channel) 
    {
        console.log(newState.member.presence.activities.toString());
        if (newState.member.presence.activities.toString() === "League of Legends") 
        {
            newState.member.voice.setMute(true);
        }
        else 
        {
            newState.member.voice.setMute(false);
        }
    }
});    
*/

client.login(config.token);