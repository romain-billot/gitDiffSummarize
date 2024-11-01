const PROMPTS = {
	SUMMARY: `Vous êtes un assistant qui résume en français les modifications dans un diff Git. Résumez les changements dans le code Git diff fourni de manière concise et claire sous forme de points sans markdown et au format "- description" pour chaque point :`,
	COMMIT_MESSAGE:
		`Vous êtes un assistant qui génère un message de commit Git en français basés sur des diffs.
		À partir du diff, générez un message de commit en français en suivant le format suivant:
		Format: <type>(<scope>): <subject>
		<scope> est optionnel
		Types:
		- feat: (nouvelle fonctionnalité pour l'utilisateur, pas une nouvelle fonctionnalité pour le script de build)
		- fix: (correction de bug pour l'utilisateur, pas une correction pour un script de build)
		- docs: (modifications de la documentation)
		- style: (formatage, points-virgules manquants, etc.; pas de changement dans le code de production)
		- refactor: (refactorisation du code de production, par ex. renommage d'une variable)
		- test: (ajout de tests manquants, refactorisation des tests; pas de changement dans le code de production)
		- chore: (mise à jour des tâches grunt, etc.; pas de changement dans le code de production)
		- ci: (mise à jour de l'intégration continue)

		Message de commit avec ! pour signaler un changement important si pertinent

		Exemples:
		feat(auth): ajout de l'authentification basée sur JWT
		fix(login): résolution d'une condition de concurrence dans le flux de connexion
		docs: correction de l'orthographe de CHANGELOG
		refactor(auth): séparation de la logique d'authentification dans un module distinct
		feat(lang): ajout de la langue polonaise
		feat(api)!: envoi d'un email au client lorsque le produit est expédié
		chore!: suppression de la compatibilité avec Node 6

		Aucune explication de code ou détails techniques, juste le message de commit en une ligne.`
};

export default PROMPTS;
