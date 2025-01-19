// Messages romantiques
let romanticMessages = [
    "Tu es mon miracle au quotidien ❤️",
    "Chaque jour avec toi est une bénédiction 🥰",
    "Mon cœur bat pour toi, toujours 💖",
    "Je t’aime plus que tout au monde 💕",
    "Tu es la lumière de ma vie ✨",
    "Avec toi, tout est magique 🌟",
    "Ton sourire illumine mes jours 🌞",
    "Je t’aime comme les étoiles brillent ✨",
];
let originalMessages = [...romanticMessages]; // Backup pour réinitialisation

// Mettre à jour les messages en douceur
const textElement = document.getElementById("romantic-text");

function updateMessage() {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages];
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages[randomIndex];
    textElement.style.opacity = 0; // Cacher le texte
    setTimeout(() => {
        textElement.textContent = randomMessage; // Mettre à jour
        textElement.style.opacity = 1; // Réafficher le texte
    }, 500);
    romanticMessages.splice(randomIndex, 1);
}

// Créer la scène avec Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajouter la texture de la boule de cristal
const textureLoader = new THREE.TextureLoader();
const crystalTexture = textureLoader.load('https://img.sellercube.com/uploadfile2/Uploadfile/6/NewProduct/Shoot/803325/0b0da3b8-deb2-474d-be35-e329a872355d.jpg');

const crystalGeometry = new THREE.SphereGeometry(5, 64, 64);
const crystalMaterial = new THREE.MeshPhysicalMaterial({
    map: crystalTexture,
    transmission: 0.95,
    roughness: 0.1,
    thickness: 1.5,
});
const crystalBall = new THREE.Mesh(crystalGeometry, crystalMaterial);
scene.add(crystalBall);

// Flocons de neige
const snowParticles = new THREE.Group();
const snowTexture = textureLoader.load('https://png.pngtree.com/png-clipart/20221217/ourlarge/pngtree-realistic-falling-snowflakes-snow-flake-png-image_6526793.png');
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

// Lumières
const light1 = new THREE.PointLight(0xffffff, 1, 100);
light1.position.set(10, 10, 10);
scene.add(light1);

camera.position.z = 15;

// Animation
function animate() {
    requestAnimationFrame(animate);

    crystalBall.rotation.y += 0.005; // Rotation de la boule
    snowParticles.children.forEach((snowflake) => {
        snowflake.position.y -= 0.02;
        if (snowflake.position.y < -5) snowflake.position.y = 10;
    });

    renderer.render(scene, camera);
}

// Interaction : Changer le message
document.body.addEventListener('click', () => updateMessage());

animate();
