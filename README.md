# AutoThread Discord Bot

## What is this?

This is a bot that automatically creates threads in a Discord channel, when a message is posted.

## Usage

1. Create a new Discord application from the [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a bot and generate a token.
3. Create `src/config.json` with the following content:
```json
{
  "DiscordBotToken": "<YOUR TOKEN HERE>",
  "GuildId": "",
  "ChannelId": ""
}
```
4. Install deps. `yarn install`
5. Run the bot. `yarn build && node .`
6. Invite the bot to a server. You can get the invite link from the console.
7. Restart the bot. `^C` (Ctrl-C) and `node .`
8. Console shows the server name and ID, and its channel names and IDs. Copy the IDs where you want to create threads to `src/config.json`. Server ID should be `GuildId` and channel ID should be `ChannelId` in `src/config.json`.
9. Restart the bot. `^C` (Ctrl-C) and `yarn start`
10. Now try posting a message in the channel. The bot will create a thread.
11. To stop the bot, `yarn stop`