// Liste des messages d'amour
let romanticMessages = [
    "Tu es mon miracle au quotidien ❤️",
    "Chaque jour avec toi est une bénédiction 🥰",
    "Mon cœur bat pour toi, toujours 💖",
    "Je t’aime plus que tout au monde 💕",
    "Tu es la lumière de ma vie ✨",
    "Je suis chanceux(se) de t'avoir 🥂",
    "Mon âme danse quand je te vois 💃",
    "Tu es ma raison de sourire 😊",
    "Ton amour illumine mon monde 🌟",
    "Je t'aime plus que les mots ne peuvent le dire ❤️‍🔥",
    // Ajouter ici les phrases précédemment données
    "Ton sourire est le plus beau cadeau de chaque journée 💝",
    "Avec toi, la vie est une aventure magique 🌈",
    "Tu es la mélodie qui résonne dans mon cœur 🎵",
    "Dans tes bras, j’ai trouvé ma maison 🏡",
    "Chaque moment avec toi est une bénédiction infinie 🙏",
    "Je t’aime comme le soleil aime éclairer la terre ☀️",
    "Tu es l’étoile qui guide mes nuits 🌟",
    "Aimer, c’est toi et moi pour l’éternité 💞",
    "Tu es mon trésor, ma lumière, mon tout 💎",
    "Avec toi, chaque jour est un rêve devenu réalité 💤",
    "Ton rire est la musique la plus douce que j’ai entendue 🎶",
    "Mon cœur est rempli d’amour grâce à toi ❤️",
    "Tu es mon souffle, ma vie, mon univers 🌌",
    "Avec toi, chaque seconde compte 💓",
    "Je t’aime aujourd’hui plus qu’hier, mais moins que demain 💕",
    "Ton amour est le feu qui réchauffe mon âme 🔥",
    "Je t’aime plus que les étoiles ne brillent dans le ciel ✨",
    "Tu es ma force et ma faiblesse, tout à la fois 💪",
    "Avec toi, chaque instant est précieux 💍",
    "Je suis amoureux(se) de toi comme le premier jour 🌹",
    "Tu es ma raison de sourire chaque matin 😊",
    "Mon cœur chante ton nom chaque jour 🎤",
    "Je t’aime plus que les mots ne peuvent l’exprimer ❤️‍🔥",
    "Ton amour est la lumière dans mes jours les plus sombres 🌤️",
    "Avec toi, tout est possible 🦋",
    "Tu es ma poésie préférée 📝",
    "Mon cœur est captif de ton amour 💝",
    "Chaque baiser est une promesse d’éternité 💋",
    "Tu es le cadeau que la vie m’a offert 🎁",
    "Mon amour pour toi est infini ♾️",
    "Avec toi, je suis la meilleure version de moi-même 🌟",
    "Tu es ma raison de vivre, mon rêve éveillé 🌠",
    "Ton amour est la plus belle des aventures 🌎",
    "Je t’aime plus que l’océan ne contient d’eau 🌊",
    "Tu es ma lumière dans l’obscurité 🕯️",
    "Avec toi, mon cœur trouve la paix 🕊️",
    "Je t’aime plus que tout au monde 🌍",
    "Tu es la clef de mon bonheur 🔑",
    "Chaque jour à tes côtés est une bénédiction 🙌",
    "Tu es mon étoile filante dans le ciel 🌠",
    "Mon amour pour toi est aussi grand que l’univers 💫",
    "Avec toi, chaque instant est un trésor 💎",
    "Ton sourire illumine ma vie comme un rayon de soleil ☀️",
    "Je suis comblé(e) par ton amour ❤️",
    "Tu es la plus belle chose qui me soit arrivée 🌸",
    "Avec toi, je ne crains rien 💪",
    "Je t’aime plus que les mots ne peuvent le dire 💞",
    "Ton amour est mon refuge 🏡",
    "Tu es la flamme qui fait battre mon cœur 🔥",
    "Avec toi, la vie est un conte de fées 🧚",
    "Je t’aime d’un amour éternel ♾️",
    "Ton rire est la plus belle mélodie de ma vie 🎵",
    "Tu es mon espoir et mon inspiration 🌟",
    "Mon cœur est comblé grâce à toi 💓",
    "Avec toi, chaque jour est une fête 🎉",
    "Tu es mon tout, mon univers, mon amour 🌌",
    "Je t’aime comme je n’ai jamais aimé personne ❤️‍🔥",
    "Ton amour est ma force 💪",
    "Je suis à toi pour l’éternité 💕",
    "Avec toi, tout prend un sens profond 🌊",
    "Tu es la meilleure partie de moi 💞",
    "Mon cœur est à toi, maintenant et pour toujours 💖",
    "Chaque instant à tes côtés est magique ✨",
    "Tu es ma muse, mon inspiration 🌺",
    "Avec toi, la vie est pleine de couleurs 🌈",
    "Je t’aime plus que l’univers ne contient d’étoiles 🌌",
    "Tu es mon miracle, mon rêve éveillé 🌟",
    "Ton amour est la lumière de mon existence 💡",
    "Avec toi, chaque jour est une aventure merveilleuse 🌍",
    "Je t’aime plus que tout ce que je pourrais imaginer 💓",
    "Tu es la personne qui donne un sens à ma vie 💞",
    "Ton sourire illumine mon âme ☀️",
    "Avec toi, je me sens invincible 💪",
    "Tu es ma maison, mon refuge, mon tout 🏡",
    "Je t’aime d’un amour pur et sincère ❤️",
    "Ton amour est le soleil de ma vie 🌞",
    "Avec toi, la vie est douce et belle 🦋",
    "Tu es mon trésor inestimable 💎",
    "Mon amour pour toi est éternel ♾️",
    "Tu es la meilleure chose qui me soit arrivée 🌟"
];
let originalMessages = [...romanticMessages];
// Créer la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Support pour la boule de cristal
const supportGeometry = new THREE.CylinderGeometry(3.5, 4, 2, 32);
const supportMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4af37, // Doré
    metalness: 0.8,
    roughness: 0.2,
});
const supportMesh = new THREE.Mesh(supportGeometry, supportMaterial);
supportMesh.position.set(0, -2, 0);
scene.add(supportMesh);

// Boule de cristal avec effet verre
const crystalGeometry = new THREE.SphereGeometry(5, 64, 64);
const crystalMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.6,
    roughness: 0.1,
    thickness: 2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 1.5,
    reflectivity: 0.5,
    ior: 1.4,
    opacity: 0.95,
    transparent: true,
});
const crystalBall = new THREE.Mesh(crystalGeometry, crystalMaterial);
crystalBall.position.set(0, 3, 0);
scene.add(crystalBall);

// Ajouter un effet de lumière colorée à l'intérieur de la sphère
const colorLight = new THREE.PointLight(0xffffff, 2, 50);
colorLight.position.set(0, 3, 0);
scene.add(colorLight);

// Fonction pour animer les couleurs
let colorChangeSpeed = 0.01; // Vitesse du changement de couleur
let hue = 0; // Teinte de la couleur (0-1)
function updateColor() {
    hue += colorChangeSpeed;
    if (hue > 1) hue = 0; // Réinitialiser la teinte
    const color = new THREE.Color().setHSL(hue, 0.7, 0.5); // Créer une couleur HSL
    colorLight.color = color; // Appliquer la couleur à la lumière
}

// Ajouter un texte visible sur le site
const domText = document.createElement("div");
domText.style.position = "absolute";
domText.style.bottom = "20px"; // Texte placé en bas de l'écran
domText.style.width = "100%";
domText.style.textAlign = "center";
domText.style.color = "white";
domText.style.fontFamily = "Arial, sans-serif";
domText.style.fontSize = "24px";
domText.style.textShadow = "2px 2px 5px black";
domText.style.opacity = "1"; // Opacité initiale
domText.style.transition = "opacity 1s ease-in-out"; // Transition fluide
domText.innerHTML = "Cliquez sur la sphère pour recevoir un message ❤️";
document.body.appendChild(domText);

// Fonction pour mettre à jour le texte avec un effet de transition
function updateText(newMessage) {
    domText.style.opacity = "0"; // Commencer par masquer le texte
    setTimeout(() => {
        domText.innerHTML = newMessage; // Changer le message une fois masqué
        domText.style.opacity = "1"; // Réafficher le texte avec une transition
    }, 1000); // Attendre la fin de l'effet de fondu (1s)
}

// Mettre à jour le texte au clic
document.body.addEventListener("click", () => {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages]; // Réinitialiser les messages
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages[randomIndex];
    romanticMessages.splice(randomIndex, 1);

    updateText(randomMessage); // Appeler la fonction de transition
});

// Flocons de neige dans la boule
const snowParticles = new THREE.Group();
for (let i = 0; i < 500; i++) {
    const snowGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const snowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const snowflake = new THREE.Mesh(snowGeometry, snowMaterial);

    const radius = 4.5;
    let x, y, z;
    do {
        x = (Math.random() - 0.5) * 10;
        y = (Math.random() - 0.5) * 10;
        z = (Math.random() - 0.5) * 10;
    } while (Math.sqrt(x * x + y * y + z * z) > radius);

    snowflake.position.set(x, y + 3, z);
    snowParticles.add(snowflake);
}
scene.add(snowParticles);

// Lumières
const light1 = new THREE.PointLight(0xffffff, 1.2, 100);
light1.position.set(10, 10, 10);
scene.add(light1);

const light2 = new THREE.PointLight(0xfff0e0, 0.8, 100);
light2.position.set(-10, -10, -10);
scene.add(light2);

// Caméra et animation
camera.position.z = 20;

function animate() {
    requestAnimationFrame(animate);

    // Faire tourner la boule et déplacer les flocons
    crystalBall.rotation.y += 0.002;
    snowParticles.children.forEach((snowflake) => {
        snowflake.position.y -= 0.02;
        if (snowflake.position.y < -2) snowflake.position.y = 7;
    });

    updateColor(); // Changer les couleurs dans la sphère

    renderer.render(scene, camera);
}

animate();

// Ajustement lors du redimensionnement
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Contrôles de la musique avec SoundCloud
const soundcloudPlayer = document.getElementById("soundcloud-player");
const playButton = document.getElementById("play-music");
const pauseButton = document.getElementById("pause-music");

// Contrôles de la musique
const playButton = document.getElementById("play-music");
const pauseButton = document.getElementById("pause-music");

// Ajout d'une balise audio
const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
audio.loop = true; // Activer la boucle pour répéter la musique

// Lecture de la musique
playButton.addEventListener("click", () => {
    audio.play()
        .then(() => console.log("Musique en lecture."))
        .catch((error) => console.error("Erreur lors de la lecture :", error));
});

// Pause de la musique
pauseButton.addEventListener("click", () => {
    audio.pause();
    console.log("Musique mise en pause.");
});

// Code existant : Scène Three.js et boule de cristal
// (Ne change pas le reste du code de la scène)
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("background-video");

    // Forcer la lecture de la vidéo après le chargement
    video.play().catch((error) => {
        console.log("Autoplay bloqué, utilisateur requis :", error);
    });

    // En cas d'erreur ou si la vidéo ne se joue pas
    video.addEventListener("error", () => {
        document.body.classList.add("no-video");
    });
});
