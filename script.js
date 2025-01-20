// Messages romantiques
let romanticMessages = [
    "Tu es mon miracle au quotidien ❤️",
    "Chaque jour avec toi est une bénédiction 🥰",
    "Mon cœur bat pour toi, toujours 💖",
    "Je t’aime plus que tout au monde 💕",
    "Tu es la lumière de ma vie ✨",
    "Avec toi, chaque instant est magique ✨",
    "Tu es ma raison de sourire 😊",
    "Ton amour illumine mon monde 🌟",
    "Je t'aime plus que les mots ne peuvent le dire ❤️‍🔥"
];
let originalMessages = [...romanticMessages];

// Créer la scène 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Support pour la boule
const supportGeometry = new THREE.CylinderGeometry(3.5, 4, 2, 32);
const supportMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4af37, // Doré
    metalness: 0.8,
    roughness: 0.2,
});
const supportMesh = new THREE.Mesh(supportGeometry, supportMaterial);
supportMesh.position.set(0, -2, 0);
scene.add(supportMesh);

// Boule de cristal
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

// Lumière colorée dans la sphère
const colorLight = new THREE.PointLight(0xffffff, 2, 50);
colorLight.position.set(0, 3, 0);
scene.add(colorLight);

let hue = 0; // Teinte de la lumière
function updateColor() {
    hue += 0.01;
    if (hue > 1) hue = 0;
    const color = new THREE.Color().setHSL(hue, 0.7, 0.5);
    colorLight.color = color;
}

// Texte mis à jour au clic
function updateText(newMessage) {
    const domText = document.getElementById("message");
    domText.style.opacity = "0";
    setTimeout(() => {
        domText.innerHTML = newMessage;
        domText.style.opacity = "1";
    }, 1000);
}

// Gestion des clics pour afficher un message
document.body.addEventListener("click", () => {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages];
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages.splice(randomIndex, 1)[0];
    updateText(randomMessage);
});

// Caméra et animation
camera.position.z = 20;
function animate() {
    requestAnimationFrame(animate);
    crystalBall.rotation.y += 0.002; // Rotation de la boule
    updateColor();
    renderer.render(scene, camera);
}
animate();

// Ajustement de la taille au redimensionnement
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Contrôles de la musique
const vocarooIframe = document.getElementById("vocaroo");
const playButton = document.getElementById("play-music");
const pauseButton = document.getElementById("pause-music");

playButton.addEventListener("click", () => {
    vocarooIframe.src += "&autoplay=1";
});

pauseButton.addEventListener("click", () => {
    vocarooIframe.src = vocarooIframe.src.replace("&autoplay=1", "");
});
