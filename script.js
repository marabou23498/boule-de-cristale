// Messages romantiques
let romanticMessages = [
    "Tu es mon miracle au quotidien ❤️",
    "Chaque jour avec toi est une bénédiction 🥰",
    "Mon cœur bat pour toi, toujours 💖",
    "Je t’aime plus que tout au monde 💕",
    "Tu es la lumière de ma vie ✨",
];
let originalMessages = [...romanticMessages];

// Gérer les messages
const textElement = document.getElementById("romantic-text");
function updateMessage() {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages];
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages[randomIndex];
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = randomMessage;
        textElement.style.opacity = 1;
    }, 500);
    romanticMessages.splice(randomIndex, 1);
}

// Créer la scène avec Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajouter un fond de galaxie
const loader = new THREE.TextureLoader();
const backgroundTexture = loader.load('https://wallpaperaccess.com/full/250537.jpg');
scene.background = backgroundTexture;

// Texture de la boule de cristal
const crystalTexture = loader.load('https://img.sellercube.com/uploadfile2/Uploadfile/6/NewProduct/Shoot/803325/0b0da3b8-deb2-474d-be35-e329a872355d.jpg');
const crystalGeometry = new THREE.SphereGeometry(5, 64, 64);
const crystalMaterial = new THREE.MeshPhysicalMaterial({
    map: crystalTexture,
    transmission: 0.9, // Transparence
    roughness: 0.2,    // Réduction de l'opacité
    thickness: 1.5,    // Épaisseur simulée
    envMapIntensity: 2, // Intensité des reflets
});
const crystalBall = new THREE.Mesh(crystalGeometry, crystalMaterial);
scene.add(crystalBall);

// Flocons de neige
const snowParticles = new THREE.Group();
const snowTexture = loader.load('https://png.pngtree.com/png-clipart/20221217/ourlarge/pngtree-realistic-falling-snowflakes-snow-flake-png-image_6526793.png');
for (let i = 0; i < 500; i++) {
    const snowGeometry = new THREE.PlaneGeometry(0.3, 0.3);
    const snowMaterial = new THREE.MeshBasicMaterial({
        map: snowTexture,
        transparent: true,
    });
    const snowflake = new THREE.Mesh(snowGeometry, snowMaterial);
    snowflake.position.set(
        (Math.random() - 0.5) * 20,
        Math.random() * 10,
        (Math.random() - 0.5) * 20
    );
    snowflake.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    snowParticles.add(snowflake);
}
scene.add(snowParticles);

// Lumières pour la scène
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

    // Faire tourner la boule et les flocons
    crystalBall.rotation.y += 0.002;
    snowParticles.children.forEach((snowflake) => {
        snowflake.position.y -= 0.02;
        if (snowflake.position.y < -5) snowflake.position.y = 10; // Réinitialiser les flocons
    });

    renderer.render(scene, camera);
}

// Interaction : Changer le message au clic
document.body.addEventListener('click', () => updateMessage());
animate();
