const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription(`**Enabled Commands** - \`${commands.size}\``);
        for (const tmpCmd of commands) {
            const cmd = tmpCmd[1];

            let cmdAliases = ' ';
            if (cmd.aliases && cmd.aliases.length > 0) {
                const aliasesStr = cmd.aliases.map(y => y).join(', ');
                cmdAliases = cmd.aliases[0] ? aliasesStr : '';
            }

            embed.addField(cmd.name, `[${cmdAliases}]`, true);
        }

        // todo: remove 
        // embed.addField(, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Made with ❤️ by Zerio & TechnicallyCoded', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};