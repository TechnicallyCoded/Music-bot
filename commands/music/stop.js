module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({'content':'.','embed':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        queue.destroy();

        message.channel.send({'content':'.','embed':[{'description': `Music stopped into this server, see you next time ✅`}]});
    },
};