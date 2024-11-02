# Git Diff Summarize

Git Diff Summarize est une application web qui utilise l'API GPT-4 d'OpenAI pour générer des résumés concis et des
messages de commit à partir de diffs Git.

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contact](#contact)

## Fonctionnalités

- **Résumé de Diff :** Génère automatiquement un résumé clair et concis des diffs Git.
- **Génération de Message de Commit :** Produit des messages de commit descriptifs et concis basés sur les diffs
  selon les meilleures pratiques ([Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)).

## Technologies Utilisées

- [Next.js](https://nextjs.org/) - Framework React pour les applications server-rendered.
- [React](https://reactjs.org/) - Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire.
- [Node.js](https://nodejs.org/) - Environnement d'exécution JavaScript pour le développement côté serveur.

## Installation

Suivez ces étapes pour configurer l'application en local.

### Prérequis

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com) ou [Yarn](https://yarnpkg.com)
- Une [clé API OpenAI](https://platform.openai.com/account/api-keys)

### Étapes

1. **Cloner le Répertoire**

   ```bash
   git clone https://github.com/votreutilisateur/gitDiffSummarize.git
   cd gitDiffSummarize
   ```

2. **Installer les Dépendances**

   Avec npm :

   ```bash
   npm install
   ```

   Avec Yarn :

   ```bash
   yarn install
   ```

3. **Configurer les Variables d'Environnement**

   Créez un fichier `.env.local` à la racine du répertoire et ajoutez votre clé API OpenAI :

   ```env
   OPENAI_API_KEY=your-openai-api-key
   ```

   Remplacez `your-openai-api-key` par votre clé API réelle.

4. **Démarrer le Serveur de Développement**

   Avec npm :

   ```bash
   npm run dev
   ```

   Avec Yarn :

   ```bash
   yarn dev
   ```

   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Utilisation

1. **Entrer le Diff Git**

   [Exemple d'utilisation](doc/use-cases.gif)

   Dans la zone de texte fournie, collez votre diff Git. Assurez-vous que le diff suit le format standard de Git diff.

   ```diff
   diff --git a/src/App.js b/src/App.js
   index e69de29..0d1d7fc 100644
   --- a/src/App.js
   +++ b/src/App.js
   @@ -0,0 +1,5 @@
   +import React from 'react';
   +
   +function App() {
   +  return <h1>Bonjour le monde</h1>;
   +}
   +export default App;
   ```

2. **Générer un Résumé**

   Cliquez sur le bouton "Obtenir le résumé" pour générer un résumé du diff.

3. **Générer un Message de Commit**

   Cliquez sur le bouton "Obtenir un message de commit" pour générer un message de commit descriptif basé sur le diff.

## Contact

Pour toute question ou suggestion, veuillez contacter [romain@billot.xyz](mailto:romain@billot.xyz).