import OpenAI from 'openai';

const initializeOpenAI = () => {
	if (!process.env.OPENAI_API_KEY) {
		throw new Error(`La clé API OpenAI est manquante dans les variables d'environnement.`);
	}

	return new OpenAI({apiKey: process.env.OPENAI_API_KEY});
};

export const generateOpenaiMessage = async (diff, prompt) => {

	const openai = initializeOpenAI();
	try {
		const stream = await openai.chat.completions.create({
			model: "gpt-4o",
			stream: true,
			messages: [
				{"role": "user", "content": prompt + diff}
			]
		});

		let fullResponse = '';

		// Itération sur les chunks du flux reçu
		for await (const part of stream) {
			const content = part.choices?.[0]?.delta?.content || '';
			process.stdout.write(content); // Affiche le contenu au fur et à mesure
			fullResponse += content;
		}

		return fullResponse;

	} catch (error) {
		console.error(error);
		throw new Error('Erreur lors de la génération de la réponse.');
	}
};
