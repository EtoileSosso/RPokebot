module.exports = {
    name: 'serverInfo',
    description: 'Gets server info',
    execute(message) {
        message.channel.send(`${message.guild.name} was created by **${message.guild.owner.displayName}** on **${message.guild.createdAt}**.
        \nThere currently are ${message.guild.memberCount} members.`);
    },
};