// Sélection des éléments HTML importants
const messages = document.getElementById("messages"); // La zone où les messages sont affichés
const userInput = document.getElementById("userInput"); // Le champ de saisie de l'utilisateur
const sendBtn = document.getElementById("sendBtn"); // Le bouton d'envoi des messages

// Construction de l'URL de l'API Gemini avec la clé API
const apikey = "AIzaSyA1FbhB-5XFPTQfVzkcGY1oRPgk6Y-xq-c";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`;

/* Fonction pour ajouter un message à la boîte de chat. */
function addMessage(message, sender) {
    // Création d'un élément div pour le message
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender); // Ajout des classes 'message' et 'user' ou 'bot'

    // Création d'un élément div pour l'icône de l'expéditeur
    const iconElement = document.createElement("div");
    iconElement.classList.add("icon");

    // Ajout de l'icône appropriée en fonction de l'expéditeur
    iconElement.innerHTML = sender === "user" ? "<i class='fas fa-user'></i>" : "<i class='fas fa-robot'></i>";
    messageElement.appendChild(iconElement); // Ajout de l'icône au message

    // Création d'un élément div pour le texte du message
    const textElement = document.createElement("div");
    textElement.classList.add("text");
    textElement.textContent = message; // Ajout du texte au message
    messageElement.appendChild(textElement); // Ajout du texte au message

    messages.appendChild(messageElement); // Ajout du message à la boîte de chat
    messages.scrollTop = messages.scrollHeight; // Défilement vers le bas pour afficher le dernier message
}

//Initialisation du message du chatbot
addMessage("Salut, je vais vous aider à trouver une assurance. Quel est votre besoin ?", "bot");

/* Fonction pour simuler un temps de latence avec des pointillés animés. */
function showTypingIndicator() {
    // Création d'un élément div pour l'indicateur de saisie
    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("typing-indicator");
    // Ajout des pointillés animés
    typingIndicator.innerHTML = "<div class='dots'><div class='dot'></div><div class='dot'></div><div class='dot'></div></div>";
    messages.appendChild(typingIndicator); // Ajout de l'indicateur à la boîte de chat
    messages.scrollTop = messages.scrollHeight; // Défilement vers le bas
}

/*Fonction pour retirer l'indicateur de saisie.*/
function hideTypingIndicator() {
    // Sélection de l'indicateur de saisie
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove(); // Suppression de l'indicateur
    }
}

/* Fonction asynchrone pour envoyer un message à l'API Gemini et afficher la réponse.*/
async function getGeminiResponse(userMessage) {
    showTypingIndicator(); // Affiche l'indicateur de saisie

    try {
        // Envoi de la requête POST à l'API Gemini
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `Assistant assurance: ${userMessage}.Instructions :
                        1. Fournis des réponses claires et concises, en 100 mots maximum.
                        2. Réponds quand on te salue et ensuite assiste les utilisateurs.
                        3. Propose les 2 ou 3 meilleures offres d'assurance avec le meilleur rapport qualité/prix, en fonction des besoins et du budget de l'utilisateur.
                        4. Base-toi sur les informations disponibles sur les sites web des assureurs locaux pour formuler tes recommandations.
                        5. Ne mentionne pas explicitement la Côte d'Ivoire ; considère que l'utilisateur est déjà informé de la localisation.
                        NB: Tu ne réponds qu'aux questions liées au domaine de l'assurance. Face à des questions liées à d'autres domaines réponds, avec courtoisie, que tu n'es pas qualifié pour les aider dans ces domaines.` }]
                }]
            })
        });

        // Vérification si la requête a réussi
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        // Conversion de la réponse en JSON
        const data = await response.json();
        // Extraction de la réponse du bot
        const botResponse = data.candidates[0].content.parts[0].text;
        const cleanText = botResponse
        .replace(/\*\*/g, '') // Supprime les **
        .replace(/\*/g, '')   // Supprime les * simples
        .replace(/\n+/g, '\n') // Nettoyage des sauts de ligne
        .trim(); //Trim() supprime les espaces inutiles

        // Ajout d'un délai de 1 seconde avant d'afficher la réponse du bot
        setTimeout(() => {
            hideTypingIndicator(); // Retire l'indicateur de saisie
            addMessage(cleanText, 'bot'); // Affiche la réponse du bot
        }, 500); // Délai de 500ms
    } 
    catch (error) {
        console.log('Erreur : ', error);
    }
}

// Gestion de l'envoi du message lors du clic sur le bouton "Envoyer"
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value; // Récupération du message de l'utilisateur
    if (userMessage) {
        addMessage(userMessage, 'user'); // Ajout du message de l'utilisateur à la boîte de chat
        userInput.value = ''; // Effacement du champ de saisie
        getGeminiResponse(userMessage); // Envoi du message à l'API Gemini
    }
});

// Gestion de l'envoi du message lors de l'appui sur la touche "Entrée"
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Empêche le comportement par défaut (nouvelle ligne)
        sendBtn.click(); // Simule un clic sur le bouton "Envoyer"
    }
});
