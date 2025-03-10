const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({'embeds':[{'description': `No music currently playing ${message.author}... try again ? ❌`}]});

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send({'embeds':[{'description': `The current volume is ${queue.volume} 🔊\n*To change the volume enter a valid number between **1** and **${maxVol}**.*`}]});

        if (queue.volume === vol) return message.channel.send({'embeds':[{'description': `The volume you want to change is already the current one ${message.author}... try again ? ❌`}]});

        if (vol < 0 || vol > maxVol) return message.channel.send({'embeds':[{'description': `The specified number is not valid. Enter a number between **1** and **${maxVol}** ${message.author}... try again ? ❌`}]});

        const success = queue.setVolume(vol);

        return message.channel.send(success ? 
            {'embeds':[{'description': `The volume has been modified to **${vol}**/**${maxVol}**% 🔊`}]} : 
            {'embeds':[{'description': `Something went wrong ${message.author}... try again ? ❌`}]});
    },
};