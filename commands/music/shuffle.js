module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({'embeds':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        if (!queue.tracks[0]) return message.channel.send({'embeds':[{'description': `No music in the queue after the current one ${message.author}... try again ? ❌`}]});

        await queue.shuffle();

        return message.channel.send({'embeds':[{'description': `Queue shuffled **${queue.tracks.length}** song(s) ! ✅`}]});
    },
};