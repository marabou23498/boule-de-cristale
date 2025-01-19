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
supportMesh.position.set(0, -2, 0); // Placer le support au centre de la scène
scene.add(supportMesh);

// Boule de cristal avec effet verre ajusté
const crystalGeometry = new THREE.SphereGeometry(5, 64, 64);
const crystalMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.85, // Réduire la transparence
    roughness: 0.1, // Légère rugosité pour capturer les lumières
    thickness: 2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.0, // Renforcer les reflets
    reflectivity: 0.7, // Réflexion plus prononcée
    ior: 1.45,
    opacity: 0.9, // Augmenter l'opacité pour plus de visibilité
    transparent: true,
});
const crystalBall = new THREE.Mesh(crystalGeometry, crystalMaterial);
crystalBall.position.set(0, 3, 0); // Centrer la boule au-dessus du support
scene.add(crystalBall);

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
textMesh.position.set(0, 3, 2); // Placer le texte légèrement devant la boule pour garantir la visibilité
scene.add(textMesh);

// DEBUG: Vérifier si le texte est redessiné correctement
console.log("Initial text:", textContext.getImageData(0, 0, textCanvas.width, textCanvas.height));

// Mettre à jour le texte au clic
document.body.addEventListener("click", () => {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages];
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages[randomIndex];
    romanticMessages.splice(randomIndex, 1);

    // Redessiner le texte sur le canvas
    textContext.clearRect(0, 0, textCanvas.width, textCanvas.height); // Effacer le texte précédent
    textContext.fillText(randomMessage, textCanvas.width / 2, textCanvas.height / 2); // Dessiner le nouveau texte
    textTexture.needsUpdate = true; // Mettre à jour la texture

    // DEBUG: Vérifier le texte mis à jour
    console.log("Updated text:", randomMessage);
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

    snowflake.position.set(x, y + 3, z); // Ajuster pour que les flocons soient dans la boule
    snowParticles.add(snowflake);
}
scene.add(snowParticles);

// Lumières
const light1 = new THREE.PointLight(0xffffff, 1.2, 100); // Lumière principale plus intense
light1.position.set(10, 10, 10);
scene.add(light1);

const light2 = new THREE.PointLight(0xfff0e0, 0.8, 100); // Lumière secondaire chaude
light2.position.set(-10, -10, -10);
scene.add(light2);

// Caméra et animation
camera.position.z = 20; // Ajuster pour un bon rendu centré

function animate() {
    requestAnimationFrame(animate);

    // Faire tourner la boule et déplacer les flocons
    crystalBall.rotation.y += 0.002;
    snowParticles.children.forEach((snowflake) => {
        snowflake.position.y -= 0.02;
        if (snowflake.position.y < -2) snowflake.position.y = 7; // Réinitialiser
    });

    renderer.render(scene, camera);
}

animate();

// Ajuster la scène lorsque la fenêtre est redimensionnée
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
