module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send({'content':' ','embed':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        const success = queue.setPaused(true);

        return message.channel.send(success ? 
            {'content':' ','embed':[{'description': `Current music ${queue.current.title} paused ✅`}]} : 
            {'content':' ','embed':[{'description': `Something went wrong ${message.author}... try again ? ❌`}]});
    },
};