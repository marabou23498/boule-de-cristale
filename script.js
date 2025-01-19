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

// Fond d'écran
scene.background = new THREE.Color(0x000000); // Simple fond noir pour diagnostic

// Boule de cristal
const crystalGeometry = new THREE.SphereGeometry(5, 64, 64);
const crystalMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.85,
    roughness: 0.1,
    thickness: 2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.0,
    reflectivity: 0.7,
    ior: 1.45,
    opacity: 0.9,
    transparent: true,
});
const crystalBall = new THREE.Mesh(crystalGeometry, crystalMaterial);
crystalBall.position.set(0, 3, 0); // Positionner la boule au centre
scene.add(crystalBall);

// Texte dans la boule
const textCanvas = document.createElement("canvas");
const textContext = textCanvas.getContext("2d");
textCanvas.width = 512;
textCanvas.height = 256;

// Configuration initiale du texte
textContext.font = "30px Arial";
textContext.fillStyle = "white";
textContext.textAlign = "center";
textContext.fillText("Cliquez ici ❤️", textCanvas.width / 2, textCanvas.height / 2);

// Charger la texture du texte
const textTexture = new THREE.CanvasTexture(textCanvas);
textTexture.needsUpdate = true;

const textMaterial = new THREE.MeshBasicMaterial({ map: textTexture, transparent: true });
const textGeometry = new THREE.PlaneGeometry(5, 2);
const textMesh = new THREE.Mesh(textGeometry, textMaterial);
textMesh.position.set(0, 3, 2); // Position juste devant la boule
scene.add(textMesh);

// DEBUG : Vérifier si le texte s'affiche bien dans le canvas
console.log("Texte initial : Cliquez ici ❤️");

// Gestion des clics pour changer le texte
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
    textTexture.needsUpdate = true; // Mise à jour explicite de la texture

    // DEBUG : Vérifier le texte mis à jour
    console.log("Nouveau message :", randomMessage);
});

// Lumières minimales pour diagnostic
const light1 = new THREE.PointLight(0xffffff, 1.5, 100);
light1.position.set(10, 10, 10);
scene.add(light1);

camera.position.z = 15;

function animate() {
    requestAnimationFrame(animate);

    // Faire tourner la boule pour observer les effets
    crystalBall.rotation.y += 0.002;

    renderer.render(scene, camera);
}

animate();
