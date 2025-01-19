// Liste étendue des messages d'amour
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
    "Avec toi, la vie est belle et pleine de sens 🌸",
    "Je t’aime d’un amour pur et sincère 💕",
    "Tu es mon trésor, mon bien le plus précieux 💝",
    "Ton sourire illumine ma journée et enchante mon cœur 💫",
    "Avec toi, chaque instant est magique ✨",
    "Tu es mon étoile, mon guide, mon univers 🌟",
    "Je t’aime plus que tout au monde, aujourd’hui et pour toujours ❤️",
    "Ton amour est la force qui me pousse à avancer chaque jour 🌈",
    "Chaque regard échangé, chaque sourire partagé renforce notre lien 💑",
    "Tu es ma plus belle aventure 💕",
    "Avec toi, je découvre le bonheur chaque jour 💫",
    "Tu es ma plus grande fierté 🏆",
    "Ton amour illumine mon cœur comme un soleil radieux ☀️",
    "Tu es ma plus belle victoire 🏅",
    "Je suis chanceux(se) de vivre dans un monde où tu existes 🌍",
    "Mon amour pour toi est infini, tout comme les étoiles dans le ciel 🌌",
    "Tu es la douceur qui apaise mon âme 🕊️",
    "Je t’aime comme jamais je n’ai aimé 💞",
    "Chaque seconde avec toi est un moment précieux à chérir 🕰️",
    "Tu es mon rêve devenu réalité ✨",
    "Ton amour est un feu qui réchauffe mon cœur 🔥",
    "Je t’aime plus que tout au monde 🌟",
    "Avec toi, je peux conquérir tous mes rêves 💭",
    "Ton sourire est une lumière dans mes ténèbres 🌠",
    "Je suis à toi, aujourd’hui et pour toujours 💍",
    "Tu es la clé de mon bonheur 🔑",
    "Avec toi, tout semble plus simple 🌈",
    "Je suis comblé(e) de t’avoir dans ma vie 🎁",
    "Tu es la poésie qui donne un sens à ma vie 📝",
    "Chaque instant passé avec toi est une bénédiction 💖",
    "Tu es la symphonie de mon cœur 🎶",
    "Je t’aime au-delà des mots 💕",
    "Ton amour est la plus douce des mélodies 🎵",
    "Je suis ton/ta pour toujours, quoi qu’il arrive 💌",
    "Tu es mon étoile du nord, celle qui guide chacun de mes pas 🌟",
    "Ton amour est le plus beau cadeau que la vie m’ait offert 🎁",
    "Avec toi, la vie est une aventure incroyable 🌍",
    "Je t’aime plus que tout ce que je pourrais jamais exprimer ❤️",
    "Ton sourire illumine ma vie comme un rayon de soleil ☀️",
    "Tu es ma raison de vivre, mon tout 💕",
    "Chaque moment avec toi est gravé dans mon cœur 🕰️",
    "Je suis fou/folle de toi aujourd’hui et pour l’éternité 🌹",
    "Ton amour est la lumière qui éclaire mon chemin 🕯️",
    "Avec toi, le monde entier semble parfait 🌎",
    "Tu es mon havre de paix, mon refuge 🏡",
    "Je t’aime infiniment, plus grand que l’univers lui-même 🌌",
    "Ton amour est la force qui me pousse à avancer chaque jour 🛤️",
    "Tu es l’amour de ma vie, mon âme sœur 💖",
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
    console.log("Nouveau message affiché :", randomMessage);
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
