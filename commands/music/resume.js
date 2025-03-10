module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send({'embeds':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        const success = queue.setPaused(false);

        return message.channel.send(success ? 
            {'embeds':[{'description': `Current music ${queue.current.title} resumed ✅`}]} : 
            {'embeds':[{'description': `Something went wrong ${message.author}... try again ? ❌`}]});
    },
};