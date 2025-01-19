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
    "Tes yeux sont les étoiles qui éclairent mes nuits, et ta voix est la mélodie qui apaise mon âme."
"Avec toi, chaque instant est une symphonie d’amour."
"Chaque regard échangé, chaque sourire partagé renforce notre lien."
"Tu es la muse qui inspire les plus belles pages de mon histoire."
"Ton amour est un feu qui réchauffe mon cœur, une flamme éternelle qui ne cesse de brûler."
"Je suis éperdument amoureux(se) de toi, et chaque jour avec toi est une bénédiction."
"Ton sourire illumine ma journée, et ta présence est un cadeau précieux."
"Dans tes bras, j’ai trouvé mon refuge et ma plus grande joie."
"Notre amour est une aventure merveilleuse que je chéris chaque jour."
"Tu es mon rêve devenu réalité, et je t’aime plus que tout."
"Chaque moment passé avec toi est un trésor que je garde précieusement."
"Ton regard me fait fondre, et ton cœur est le plus bel endroit où je puisse être."
"Je t’aime plus que les mots ne peuvent l’exprimer, tu es mon tout."
"Avec toi, j’ai découvert le véritable sens du bonheur et de l’amour."
"Tu es mon âme sœur, celle que j’ai toujours cherchée."
"Ton amour est la lumière qui guide mon chemin."
"Je suis comblé(e) de t’avoir dans ma vie, tu es mon trésor."
"Chaque jour à tes côtés est une page de bonheur qui s’écrit."
"Ton rire est une mélodie qui enchante mon cœur."
"Je t’aime plus que tout au monde, tu es ma raison de vivre."
"Ton amour est la plus belle des chansons, et je veux la chanter pour l’éternité."
"Avec toi, j’ai trouvé la paix, la joie et l’amour véritable."
"Tu es mon ange, mon étoile, mon univers."
"Je t’aime d’un amour infini, plus grand que l’univers lui-même."
"Ton sourire est mon lever de soleil, et tes bras sont mon foyer."
"Chaque baiser de toi est une promesse d’éternité."
"Je suis à toi, maintenant et pour toujours."
"Ton amour est la poésie qui donne un sens à ma vie."
"Avec toi, chaque jour est une fête, chaque instant est une danse."
"Je t’aime plus que les étoiles ne brillent dans le ciel."
"Tu es mon miracle, mon rêve éveillé."
"Ton amour est la clé qui a ouvert mon cœur."
"Je suis fou/folle de toi, aujourd’hui plus qu’hier et bien moins que demain."
"Avec toi, j’ai trouvé ma maison, mon refuge, mon tout."
"Tu es la raison pour laquelle je me lève chaque matin avec le sourire."
"Ton amour est la plus douce des mélodies à mes oreilles."
"Je t’aime plus que les mots ne sauront jamais le dire."
"Avec toi, j’ai découvert la véritable signification du mot 'amour'."
"Tu es mon soleil, celui qui éclaire mes jours et réchauffe mon cœur."
"Je suis reconnaissant(e) pour chaque moment passé à tes côtés."
"Ton amour est le trésor que j’ai cherché toute ma vie."
"Avec toi, le temps s’arrête et le monde devient parfait."
"Je t’aime plus que tout, et rien ne pourra jamais changer cela."
"Tu es mon étoile du nord, celle qui guide chacun de mes pas."
"Ton amour est la plus belle des aventures."
"Je suis comblé(e) de t’avoir dans ma vie, tu es mon tout."
"Avec toi, chaque jour est un cadeau que je chéris."
"Je t’aime d’un amour éternel et inconditionnel."
"Tu es la mélodie qui berce mon cœur."
"Ton sourire est la lumière qui illumine mes journées."
"Je suis à toi, corps et âme, pour toujours."
"Avec toi, j’ai trouvé le bonheur que je cherchais depuis toujours."
"Tu es mon rêve devenu réalité, mon amour éternel."
"Je t’aime plus que les mots ne peuvent l’exprimer."
"Ton amour est la force qui me pousse à avancer chaque jour."
"Avec toi, la vie est une aventure merveilleuse."
"Tu es mon ange, mon guide, mon amour."
"Je t’aime d’un amour pur et sincère."
"Ton sourire est le soleil qui éclaire ma vie."
"Avec toi, j’ai trouvé la paix et la joie véritables."
"Tu es mon trésor, mon bien le plus précieux."
"Je t’aime plus que tout au monde."
"Ton amour est la musique qui fait danser mon cœur."
"Avec toi, chaque instant est magique."
"Tu es mon univers, mon tout."
"Je t’aime d’un amour sans fin."
"Ton sourire est la clé de mon bonheur."
"Avec toi, la vie est belle et pleine de sens."
    "Avec toi, la vie est belle et pleine de sens 🌸",
    "Je t’aime d’un amour pur et sincère 💕",
    "Tu es mon trésor, mon bien le plus précieux 💝",
    "Ton sourire illumine ma journée et enchante mon cœur 💫",
    "Avec toi, chaque instant est magique ✨",
    "Tu es mon étoile, mon guide, mon univers 🌟",
    "Je t’aime plus que tout au monde, aujourd’hui et pour toujours ❤️",
    "Ton amour est la force qui me pousse à avancer chaque jour 🌈",
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
