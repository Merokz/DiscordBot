const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roles')
		.setDescription('Replies with the list of roles in the server'),
	async execute(interaction) {
		await interaction.reply(/*reply with all roles that the user has*/interaction.member.roles.cache.map(role => role.name).join(', '));
	},
};