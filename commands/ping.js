const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!\n just joking, this is ur ping: ' + Math.round(interaction.client.ws.ping) + 'ms');
	},
};