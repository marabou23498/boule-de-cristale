// Liste des messages d'amour
const messages = [
    "Je t'aime plus que tout ❤️",
    "Tu es mon univers 🌌",
    "Chaque moment avec toi est un cadeau 💝",
    "Merci d’être la lumière de ma vie ✨",
    "Ton sourire illumine mes journées 🌟",
    "Avec toi, tout est plus beau 🌸",
    "Tu es mon âme sœur 💕",
    "Merci de remplir ma vie de bonheur chaque jour 🌞",
    "Tu es mon étoile dans la nuit ✨",
    "Je suis chanceux(se) de t'aimer ❤️",
    "À tes côtés, je trouve la paix 🕊️",
    "Tu es ma raison de vivre 🌟",
    "Mon cœur bat uniquement pour toi ❤️",
    "Merci d'être mon tout 💝",
    "Avec toi, je suis invincible 💪",
    "Chaque jour avec toi est magique 💖",
    "Tu es mon rêve devenu réalité 🌈",
    "Je t'aime au-delà des étoiles 🌌"
    // Ajoutez d'autres messages ici si nécessaire
];

// Référence au conteneur de message
const messageContainer = document.getElementById("message");

// Fonction pour changer les messages au clic
let messageIndex = 0;
function changeMessage() {
    messageContainer.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

// Flocons de neige
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snow");
    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".snow-globe").appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 5000);
}

setInterval(createSnowflake, 150);
