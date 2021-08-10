import { default as config } from './config.js';
import { Client, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('messageCreate', message => 
{
  console.log(message.content);
});

client.login(config.token);