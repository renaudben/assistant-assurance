# Chatbot d'Assistance Assurance

Ce projet est un chatbot conçu pour aider les utilisateurs à trouver des informations et des conseils sur les assurances. Il utilise l'API Gemini de Google pour fournir des réponses pertinentes et personnalisées.

## Fonctionnalités

* **Assistance Personnalisée :** Le chatbot aide les utilisateurs à trouver des informations sur différents types d'assurances (santé, auto, voyage, etc.) en fonction de leurs besoins et de leur budget.
* **Interface Utilisateur Intuitive :** Une interface de chat conviviale avec des icônes pour les interlocuteurs et des couleurs distinctes pour les messages.
* **Temps de Latence Réaliste :** Un indicateur de saisie simule un temps de latence pour une expérience de conversation plus naturelle.
* **Envoi de Messages Facile :** Les utilisateurs peuvent envoyer des messages en cliquant sur le bouton "Envoyer" ou en appuyant sur la touche "Entrée".
* **Message de Bienvenue :** Le chatbot accueille les utilisateurs avec un message initial pour les guider.

## Technologies Utilisées

* **HTML :** Structure de la page web.
* **CSS :** Style et mise en page de l'interface utilisateur.
* **JavaScript :** Logique du chatbot et interaction avec l'API Gemini.
* **API Gemini (Google) :** Traitement du langage naturel et génération de réponses.
* **Font Awesome :** Icônes pour l'interface utilisateur.

## Installation et Utilisation

1.  **Clonage du dépôt :**
    ```bash
    git clone [URL_DU_DÉPÔT]
    cd [NOM_DU_RÉPERTOIRE]
    ```
2.  **Remplacement de la clé API :**
    * Ouvrez le fichier `script.js` et remplacez `'VOTRE_CLÉ_API_ICI'` par votre clé API Gemini.
    * **Attention :** Pour des raisons de sécurité, il est fortement recommandé de ne pas exposer votre clé API dans le code frontend en production. Utilisez plutôt un backend pour gérer les appels à l'API.
3.  **Ouverture du fichier HTML :**
    * Ouvrez le fichier `index.html` dans votre navigateur web.
4.  **Interaction avec le chatbot :**
    * Saisissez votre message dans le champ de saisie et appuyez sur "Envoyer" ou sur la touche "Entrée".
    * Le chatbot vous répondra avec des informations et des conseils pertinents.

## Structure des Fichiers

* `index.html` : Structure HTML de la page web.
* `style.css` : Styles CSS de l'interface utilisateur.
* `script.js` : Logique JavaScript du chatbot.

## Améliorations Possibles

* **Intégration d'un backend :** Pour sécuriser la clé API et gérer les appels à l'API Gemini.
* **Personnalisation des réponses :** En fonction du type d'assurance et du budget de l'utilisateur.
* **Ajout de fonctionnalités supplémentaires :** Comme la possibilité de sauvegarder les conversations ou de contacter un conseiller.
* **Amélioration de l'interface utilisateur :** Pour une expérience encore plus agréable.

## Auteur

* Renaud

## Licence

* \[Type de licence]
