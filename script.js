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
    // Ajoute jusqu'à 1000 messages ici...
];

let originalMessages = [...romanticMessages]; // Backup pour réinitialisation

// Mettre à jour le message romantique
const textElement = document.getElementById("romantic-text");

function updateMessage() {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages]; // Réinitialiser
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages[randomIndex];
    textElement.textContent = randomMessage;
    romanticMessages.splice(randomIndex, 1); // Retirer le message utilisé
}

// Créer la scène avec Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Boule de cristal
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
});
const crystalBall = new THREE.Mesh(geometry, material);
scene.add(crystalBall);

// Lumière
const light = new THREE.PointLight(0xfff0e0, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Sol
const floorGeometry = new THREE.CylinderGeometry(6, 6, 1, 32);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xd4af37 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -5.5;
scene.add(floor);

// Particules pour la neige
const snowParticles = new THREE.Group();
scene.add(snowParticles);

for (let i = 0; i < 500; i++) {
    const snowGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const snowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const snowflake = new THREE.Mesh(snowGeometry, snowMaterial);
    snowflake.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
    );
    snowParticles.add(snowflake);
}

// Variables pour les couleurs
let colorStep = 0; // Étape pour changer les couleurs

function animateColors() {
    colorStep += 0.01; // Augmente progressivement

    // Changer l'arrière-plan
    const r = Math.floor(128 + 128 * Math.sin(colorStep));
    const g = Math.floor(128 + 128 * Math.sin(colorStep + Math.PI / 2));
    const b = Math.floor(128 + 128 * Math.sin(colorStep + Math.PI));
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;

    // Changer la couleur de la boule de cristal
    crystalBall.material.color.setRGB(
        0.5 + 0.5 * Math.sin(colorStep),
        0.5 + 0.5 * Math.sin(colorStep + Math.PI / 3),
        0.5 + 0.5 * Math.sin(colorStep + (2 * Math.PI) / 3)
    );
}

// Animation principale
function animate() {
    requestAnimationFrame(animate);

    // Faire tourner la boule et animer la neige
    crystalBall.rotation.y += 0.005;
    snowParticles.children.forEach((particle) => {
        particle.position.y -= 0.02;
        if (particle.position.y < -5) {
            particle.position.y = 5; // Réinitialise la neige
        }
    });

    // Appeler l'animation des couleurs
    animateColors();

    renderer.render(scene, camera);
}
camera.position.z = 15;

// Interaction : Afficher un message sur clic
crystalBall.userData = { isCrystal: true };
document.body.addEventListener("click", (event) => {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(crystalBall);
    if (intersects.length > 0) {
        updateMessage();
    }
});

animate();
