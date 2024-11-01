const rateLimitMap = new Map();
const RATE_LIMIT = 5; // Nombre maximal de requêtes
const WINDOW_SIZE = 60 * 60 * 1000; // Fenêtre de 1 heure


export const rateLimit = async (req) => {
	// Obtenir l'adresse IP du client à partir des en-têtes
	const xForwardedFor = req.headers.get('x-forwarded-for');
	const ip = xForwardedFor ? xForwardedFor.split(',')[0].trim() : 'unknown';

	const currentTime = Date.now();

	// Initialiser les données pour l'IP si nécessaire
	if (!rateLimitMap.has(ip)) {
		rateLimitMap.set(ip, {
			count: 1,
			lastReset: currentTime,
		});
	} else {
		const ipData = rateLimitMap.get(ip);

		// Vérifier si la fenêtre de temps a expiré
		if (currentTime - ipData.lastReset > WINDOW_SIZE) {
			// Réinitialiser le compteur et le timestamp
			ipData.count = 1;
			ipData.lastReset = currentTime;
		} else {
			// Incrémenter le compteur de requêtes
			ipData.count += 1;

			// Vérifier si la limite est dépassée
			if (ipData.count > RATE_LIMIT) {
				return {allowed: false};
			}
		}

		// Mettre à jour les données pour l'IP
		rateLimitMap.set(ip, ipData);
	}

	return {allowed: true};
};
