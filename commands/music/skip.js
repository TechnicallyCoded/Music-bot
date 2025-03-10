module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({'embeds':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        const success = queue.skip();

        return message.channel.send(success ? 
            {'embeds':[{'description': `Current music ${queue.current.title} skipped ✅`}]} : 
            {'embeds':[{'description': `Something went wrong ${message.author}... try again ? ❌`}]});
    },
};