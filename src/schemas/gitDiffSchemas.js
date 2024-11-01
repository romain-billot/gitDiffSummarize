const Joi = require('joi');

const gitDiffSchema = Joi.string()
	.pattern(/[\s\S]*diff --git[\s\S]*index[\s\S]*---[\s\S]*\+\+\+[\s\S]*@@/)
	.required()
	.min(10)
	.max(200000)
	.messages({
		'string.base': "Le 'diff' doit être une chaîne de caractères.",
		'string.empty': "Le 'diff' ne peut pas être vide.",
		'string.min': "Le 'diff' doit contenir au moins 10 caractères.",
		'string.max': "Le 'diff' est trop long.",
		'string.pattern.base': "Le 'diff' n'est pas valide.",
		'any.required': "Le champ 'diff' est requis."
	});

module.exports = {
	gitDiffSchema
};