import OpenAI from 'openai';
import { setTimeout } from 'timers/promises';

const initializeOpenAI = () => {
	if (!process.env.OPENAI_API_KEY) {
		throw new Error(`La clé API OpenAI est manquante dans les variables d'environnement.`);
	}

	return new OpenAI({apiKey: process.env.OPENAI_API_KEY});
};

export const generateOpenaiMessage = async (diff, prompt, timeout = 9500) => {

	const openai = initializeOpenAI();
	try {
		const openAIPromise =  openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [
				{"role": "user", "content": prompt + diff}
			]
		});

		const completion = await Promise.race([
			openAIPromise,
			setTimeout(timeout).then(() => {
				throw new Error(`Requête annulée : délai de 10 secondes dépassé (Vercel).`);
			})
		]);

		return completion.choices[0].message.content;

	} catch (error) {
		console.error(error);

		if (error && error.message.includes("Requête annulée")) {
			throw new Error(error.message);
		}

		throw new Error('Erreur lors de la génération de la réponse.');
	}
};
