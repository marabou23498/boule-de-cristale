// Liste de phrases d'amour
const messages = [
    "Je t'aime plus que tout ❤️",
    "Tu es mon univers 🌌",
    "Chaque moment avec toi est un cadeau 💝",
    "Merci d’être la lumière de ma vie ✨",
    "Ton amour est mon plus beau trésor 💖",
    "Avec toi, la vie est plus douce 🌸",
    "Je t'aime au-delà des étoiles 🌌",
    "Tu es mon âme sœur 💕",
    "Merci de me combler de bonheur chaque jour 🌞",
    "À tes côtés, je suis la meilleure version de moi-même 💪",
    "Tu es ma raison de vivre 🌟",
    "Je suis chanceux(se) de t'aimer ❤️",
    "Tu es mon étoile dans la nuit ✨",
    "Mon cœur bat pour toi, toujours ❤️",
    "Avec toi, tout est magique 🌈",
    "Tu es mon tout, pour l'éternité 💕",
    "Merci d’être ma lumière dans l’obscurité 🌟"
    // Ajoutez autant de phrases que vous souhaitez ici
];

// Référence à l'élément du message
const messageContainer = document.getElementById("message");

// Gestion du clic pour changer le message
let messageIndex = 0;

function changeMessage() {
    messageContainer.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

// Flocons de neige animés
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snow");
    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".snow-globe").appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 5000);
}

setInterval(createSnowflake, 100);
