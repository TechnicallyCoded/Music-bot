module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({'embeds':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        if (!queue.previousTracks[1]) return message.channel.send({'embeds':[{'description': `There was no music played before ${message.author}... try again ? ❌`}]});

        await queue.back();

        message.channel.send({'embeds':[{'description': `Playing the **previous** track ✅`}]});
    },
};