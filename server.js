const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
token: process.env.token,//.env adında dosya açıyoruz ve token adlı variableyi oluşturup karşısına tokenı yapıştırıyoruz 
prefix: "$getServerVar[prefix]",
intents: ["MessageContent", "Guilds", "GuildMessages"]
})

//Events
bot.onMessage()

//Command Loader
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/");

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Slash Interaction Command Example (ping)
/*MUST EXECUTE FUNCTION FOR IT TO WORK
$createApplicationCommand[$guildID;ping;Pong!;true;slash]
*/
bot.interactionCommand({
  name: "ping",
  prototype: 'slash',
  code: `$interactionReply[Pong! $pingms]`
})
bot.variables ({
  prefix: "."
})
