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
    // 90+ phrases supplémentaires
    "Avec toi, chaque instant est un trésor 💎",
    "Tu es la lumière qui guide mes pas ✨",
    "Ton amour est ma plus belle aventure 🌍",
    "Je t’aime comme le soleil aime éclairer la terre ☀️",
    "Chaque sourire de toi remplit mon cœur de joie 💓",
    "Dans tes bras, je trouve ma maison 🏡",
    "Avec toi, la vie est une mélodie parfaite 🎵",
    "Tu es mon étoile dans la nuit 🌟",
    "Ton rire est la plus douce des musiques 🎶",
    "Je t’aime d’un amour pur et infini ♾️",
    // Ajoute d'autres phrases ici si nécessaire
];
let originalMessages = [...romanticMessages];

// Gestion du texte affiché
const domText = document.createElement("div");
domText.style.position = "absolute";
domText.style.bottom = "20px";
domText.style.width = "100%";
domText.style.textAlign = "center";
domText.style.color = "white";
domText.style.fontFamily = "Arial, sans-serif";
domText.style.fontSize = "24px";
domText.style.textShadow = "2px 2px 5px black";
domText.style.opacity = "1";
domText.style.transition = "opacity 1s ease-in-out";
domText.innerHTML = "Cliquez sur la sphère pour recevoir un message ❤️";
document.body.appendChild(domText);

function updateText(newMessage) {
    domText.style.opacity = "0";
    setTimeout(() => {
        domText.innerHTML = newMessage;
        domText.style.opacity = "1";
    }, 1000);
}

document.body.addEventListener("click", () => {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages];
    }
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const randomMessage = romanticMessages.splice(randomIndex, 1)[0];
    updateText(randomMessage);
});

// Animation et gestion de la sphère
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sphère et lumières
const crystalGeometry = new THREE.SphereGeometry(5, 64, 64);
const crystalMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.9,
    roughness: 0.1,
    thickness: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.2,
    reflectivity: 0.8,
});
const crystalBall = new THREE.Mesh(crystalGeometry, crystalMaterial);
crystalBall.position.set(0, 3, 0);
scene.add(crystalBall);

// Animation
camera.position.z = 20;
function animate() {
    requestAnimationFrame(animate);
    crystalBall.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// Ajustement responsive
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
