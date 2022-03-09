import { Client, Intents, TextChannel } from "discord.js"
import { DiscordBotToken, GuildId, ChannelId } from "./config.json"

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.once("ready", async () => {
  if (!client.user) console.warn("Client user is undefined")
  else {
    console.log(`Logged in as ${client.user.tag}`)

    client.user.setStatus("online")
    const link = client.generateInvite({
      scopes: ["bot"],
      permissions: ["CREATE_PUBLIC_THREADS"]
    })
    console.log(`Invite link: ${link}`);

    (await client.guilds.fetch()).forEach(async guild => {
      console.log(`${guild.name}: ${guild.id}`);
      (await guild.fetch()).channels.fetch().then(channels => {
        console.log(` There are ${channels.size} channels`);
        channels.forEach(channel => {
          console.log(` - ${channel.name}: ${channel.id}, ${channel.type}`);
        })
      })
    })
  }
})

client.on("messageCreate", async msg => {
  if (msg.guildId !== GuildId || msg.channelId !== ChannelId) return;
  if (msg.channel.type === "GUILD_TEXT") {
    const _channel = await msg.channel.fetch();
    if (_channel.isText()) {
      const channel = _channel as TextChannel;
      await channel.threads.create({
        name: msg.content.split("\n")[0],
        type: "GUILD_PUBLIC_THREAD",
        startMessage: msg,
        autoArchiveDuration: "MAX"
      })
    }
  }
})

client.login(DiscordBotToken)