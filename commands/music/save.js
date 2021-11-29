module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({'embed':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        message.author.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${message.guild.name} ✅`).then(() => {
            message.channel.send({'embed':[{'description': `I have sent you the title of the music by private messages ✅`}]});
        }).catch(error => {
            message.channel.send({'embed':[{'description': `Unable to send you a private message ${message.author}... try again ? ❌`}]});
        });
    },
};