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

// Boule de cristal avec effet verre
const crystalGeometry = new THREE.SphereGeometry(5, 64, 64);
const crystalMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.99, // Transparence presque totale (effet verre)
    roughness: 0, // Surface lisse
    thickness: 2, // Épaisseur simulée
    clearcoat: 1.0, // Couche brillante
    clearcoatRoughness: 0, // Brillance parfaite
    envMapIntensity: 2, // Intensité des reflets
    reflectivity: 0.5, // Réflexion partielle
    ior: 1.5, // Indice de réfraction pour un effet de verre réaliste
});
const crystalBall = new THREE.Mesh(crystalGeometry, crystalMaterial);
scene.add(crystalBall);

// Texte à l'intérieur de la boule
const fontLoader = new THREE.FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new THREE.TextGeometry("Cliquez ici ❤️", {
        font: font,
        size: 0.5,
        height: 0.05,
    });
    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x999999 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-2.5, 0, 3); // Position dans la boule
    scene.add(textMesh);

    // Mise à jour du texte au clic
    document.body.addEventListener('click', () => {
        if (romanticMessages.length === 0) {
            romanticMessages = [...originalMessages];
        }
        const randomIndex = Math.floor(Math.random() * romanticMessages.length);
        const randomMessage = romanticMessages[randomIndex];
        romanticMessages.splice(randomIndex, 1);
        textMesh.geometry.dispose(); // Supprimer l'ancien texte
        textMesh.geometry = new THREE.TextGeometry(randomMessage, {
            font: font,
            size: 0.5,
            height: 0.05,
        });
    });
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

    snowflake.position.set(x, y, z);
    snowParticles.add(snowflake);
}
scene.add(snowParticles);

// Lumières
const light1 = new THREE.PointLight(0xffffff, 1.5, 100);
light1.position.set(10, 10, 10);
scene.add(light1);

const light2 = new THREE.PointLight(0xfff0e0, 0.5, 100);
light2.position.set(-10, -10, -10);
scene.add(light2);

// Caméra et animation
camera.position.z = 15;

function animate() {
    requestAnimationFrame(animate);

    // Faire tourner la boule et déplacer les flocons
    crystalBall.rotation.y += 0.002;
    snowParticles.children.forEach((snowflake) => {
        snowflake.position.y -= 0.02;
        if (snowflake.position.y < -4.5) snowflake.position.y = 4.5; // Réinitialiser
    });

    renderer.render(scene, camera);
}

animate()
