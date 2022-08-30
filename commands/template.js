const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('template')
		.setDescription('This is a template for creating new commands'),
	async execute(interaction) {
		await interaction.reply('This is a template for creating new commands');
	},
};