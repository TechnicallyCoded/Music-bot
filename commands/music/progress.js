module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({'content':'.','embed':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send({'content':'.','embed':[{'description': `Playing a live, no data to display 🎧`}]});

        message.channel.send({'content':'.','embed':[{'description': `${progress} (**${timestamp.progress}**%)`}]});
    },
};