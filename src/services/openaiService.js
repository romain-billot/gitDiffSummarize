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
		const completion = await openai.chat.completions.create({
			model: "gpt-4o",
			messages: [
				{"role": "user", "content": prompt + diff}
			]
		});

		return completion.choices[0].message.content;

	} catch (error) {
		console.error(error);
		throw new Error('Erreur lors de la génération de la réponse.');
	}
};
