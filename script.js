// Messages romantiques
let romanticMessages = [
    "Tu es mon miracle au quotidien ❤️",
    "Chaque jour avec toi est une bénédiction 🥰",
    "Mon cœur bat pour toi, toujours 💖",
    "Je t’aime plus que tout au monde 💕",
    "Tu es la lumière de ma vie ✨",
];
let originalMessages = [...romanticMessages];

// Créer la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajouter un fond d'écran (galaxie)
const loader = new THREE.TextureLoader();
const backgroundTexture = loader.load('https://wallpaperaccess.com/full/250537.jpg', () => {
    scene.background = backgroundTexture;
});

// Boule de cristal avec effet verre ajusté
const crystalGeometry = new THREE.SphereGeometry(5, 64, 64);
const crystalMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.95,
    roughness: 0.05,
    thickness: 2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1.0,
    reflectivity: 0.5,
    ior: 1.45,
    opacity: 0.8,
    transparent: true,
});
const crystalBall = new THREE.Mesh(crystalGeometry, crystalMaterial);
crystalBall.position.set(0, 5, 0); // Élever la boule pour la placer sur le support
scene.add(crystalBall);

// Support pour la boule de cristal
const supportGeometry = new THREE.CylinderGeometry(3.5, 4, 2, 32);
const supportMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4af37, // Doré
    metalness: 0.8,
    roughness: 0.2,
});
const supportMesh = new THREE.Mesh(supportGeometry, supportMaterial);
supportMesh.position.set(0, 2, 0); // Placer correctement sous la boule
scene.add(supportMesh);

// Texte dans la boule (solution avec un canvas pour afficher les accents)
const textCanvas = document.createElement("canvas");
const textContext = textCanvas.getContext("2d");
textCanvas.width = 512;
textCanvas.height = 256;
textContext.font = "30px Arial";
textContext.fillStyle = "white";
textContext.textAlign = "center";
textContext.fillText("Cliquez ici ❤️", textCanvas.width / 2, textCanvas.height / 2);

// Charger la texture du texte
const textTexture = new THREE.CanvasTexture(textCanvas);
const textMaterial = new THREE.MeshBasicMaterial({ map: textTexture, transparent: true });
const textGeometry = new THREE.PlaneGeometry(4, 2);
const textMesh = new THREE.Mesh(textGeometry, textMaterial);
textMesh.position.set(0, 5, 3); // Positionner juste devant la boule
scene.add(textMesh);

// Mettre à jour le texte au clic
document.body.addEventListener("click", () => {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages];
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages[randomIndex];
    romanticMessages.splice(randomIndex, 1);

    // Redessiner le texte sur le canvas
    textContext.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textContext.fillText(randomMessage, textCanvas.width / 2, textCanvas.height / 2);
    textTexture.needsUpdate = true; // Mettre à jour la texture
});

// Flocons blancs à l'intérieur de la boule
const snowParticles = new THREE.Group();
for (let i = 0; i < 500; i++) {
    const snowGeometry = new THREE.SphereGeometry(0.05, 8, 8); // Petites sphères pour les flocons
    const snowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Blanc pur
    const snowflake = new THREE.Mesh(snowGeometry, snowMaterial);

    // Positionner les flocons aléatoirement dans la boule
    const radius = 4.5;
    let x, y, z;
    do {
        x = (Math.random() - 0.5) * 10;
        y = (Math.random() - 0.5) * 10;
        z = (Math.random() - 0.5) * 10;
    } while (Math.sqrt(x * x + y * y + z * z) > radius);

    snowflake.position.set(x, y + 5, z); // Ajuster pour que les flocons soient dans la boule
    snowParticles.add(snowflake);
}
scene.add(snowParticles);

// Lumières
const light1 = new THREE.PointLight(0xffffff, 1.0, 100);
light1.position.set(10, 10, 10);
scene.add(light1);

const light2 = new THREE.PointLight(0xfff0e0, 0.5, 100);
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
        if (snowflake.position.y < 0) snowflake.position.y = 9; // Réinitialiser
    });

    renderer.render(scene, camera);
}

animate();
