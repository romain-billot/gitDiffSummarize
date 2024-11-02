import {generateOpenaiMessage} from "@/services/openaiService";
import PROMPTS from "@/constants/openai";
import {gitDiffSchema} from "@schemas/gitDiffSchemas";
import {rateLimit} from "@/services/rateLimitService";

export const POST = async (req) => {
	try {
		const {diff} = await req.json();

		const {error} = gitDiffSchema.validate(diff);
		if (error) {
			return new Response(JSON.stringify({error: error.details[0].message}), {status: 400});
		}

		const rateLimitResult = await rateLimit(req);
		if (!rateLimitResult.allowed) {
			return new Response(JSON.stringify({error: 'Limite de requêtes atteinte. Veuillez réessayer plus tard.'}), {status: 429});
		}

		const response = await generateOpenaiMessage(diff, PROMPTS.COMMIT_MESSAGE);

		console.log("Requête message de commit");
		return new Response(JSON.stringify({response}), {status: 200});
	} catch (error) {
		return new Response(JSON.stringify({error: 'Erreur lors de la génération de la réponse.'}), {status: 500});
	}
}