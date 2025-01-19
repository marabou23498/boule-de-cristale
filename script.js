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

// Canvas pour le texte
const textCanvas = document.createElement("canvas");
const textContext = textCanvas.getContext("2d");
textCanvas.width = 1024;
textCanvas.height = 512;

// Fonction pour afficher le texte
function drawText(message) {
    textContext.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textContext.fillStyle = "white";
    textContext.font = "40px Arial"; // Taille augmentée pour meilleure visibilité
    textContext.textAlign = "center";
    textContext.fillText(message, textCanvas.width / 2, textCanvas.height / 2);
}

// Charger un message initial
drawText("Cliquez sur la sphère pour recevoir un message ❤️");
const textTexture = new THREE.CanvasTexture(textCanvas);
const textMaterial = new THREE.MeshBasicMaterial({ map: textTexture, transparent: true });
const textGeometry = new THREE.PlaneGeometry(6, 3); // Ajusté pour la taille de la sphère
const textMesh = new THREE.Mesh(textGeometry, textMaterial);
textMesh.position.set(0, 3, 0); // Position dans la sphère
scene.add(textMesh);

// Mettre à jour le texte au clic
document.body.addEventListener("click", () => {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages]; // Réinitialiser les messages
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages[randomIndex];
    romanticMessages.splice(randomIndex, 1);

    // Mettre à jour la texture du texte
    drawText(randomMessage);
    textTexture.needsUpdate = true;
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
