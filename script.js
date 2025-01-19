// Liste étendue des messages d'amour
let romanticMessages = [
    "Tes yeux sont les étoiles qui éclairent mes nuits, et ta voix est la mélodie qui apaise mon âme.",
    "Avec toi, chaque instant est une symphonie d’amour.",
    "Chaque regard échangé, chaque sourire partagé renforce notre lien.",
    "Tu es la muse qui inspire les plus belles pages de mon histoire.",
    "Ton amour est un feu qui réchauffe mon cœur, une flamme éternelle qui ne cesse de brûler.",
    "Je suis éperdument amoureux(se) de toi, et chaque jour avec toi est une bénédiction.",
    "Ton sourire illumine ma journée, et ta présence est un cadeau précieux.",
    "Dans tes bras, j’ai trouvé mon refuge et ma plus grande joie.",
    "Notre amour est une aventure merveilleuse que je chéris chaque jour.",
    "Tu es mon rêve devenu réalité, et je t’aime plus que tout.",
    "Chaque moment passé avec toi est un trésor que je garde précieusement.",
    "Ton regard me fait fondre, et ton cœur est le plus bel endroit où je puisse être.",
    "Je t’aime plus que les mots ne peuvent l’exprimer, tu es mon tout.",
    "Avec toi, j’ai découvert le véritable sens du bonheur et de l’amour.",
    "Tu es mon âme sœur, celle que j’ai toujours cherchée.",
    "Ton amour est la lumière qui guide mon chemin.",
    "Je suis comblé(e) de t’avoir dans ma vie, tu es mon trésor.",
    "Chaque jour à tes côtés est une page de bonheur qui s’écrit.",
    "Ton rire est une mélodie qui enchante mon cœur.",
    "Je t’aime plus que tout au monde, tu es ma raison de vivre.",
    "Ton amour est la plus belle des chansons, et je veux la chanter pour l’éternité.",
    "Avec toi, j’ai trouvé la paix, la joie et l’amour véritable.",
    "Tu es mon ange, mon étoile, mon univers.",
    "Je t’aime d’un amour infini, plus grand que l’univers lui-même.",
    "Ton sourire est mon lever de soleil, et tes bras sont mon foyer.",
    "Chaque baiser de toi est une promesse d’éternité.",
    "Je suis à toi, maintenant et pour toujours.",
    "Ton amour est la poésie qui donne un sens à ma vie.",
    "Avec toi, chaque jour est une fête, chaque instant est une danse.",
    "Je t’aime plus que les étoiles ne brillent dans le ciel.",
    "Tu es mon miracle, mon rêve éveillé.",
    "Ton amour est la clé qui a ouvert mon cœur.",
    "Je suis fou/folle de toi, aujourd’hui plus qu’hier et bien moins que demain.",
    "Avec toi, j’ai trouvé ma maison, mon refuge, mon tout.",
    "Tu es la raison pour laquelle je me lève chaque matin avec le sourire.",
    "Ton amour est la plus douce des mélodies à mes oreilles.",
    "Je t’aime plus que les mots ne sauront jamais le dire.",
    "Avec toi, j’ai découvert la véritable signification du mot 'amour'.",
    "Tu es mon soleil, celui qui éclaire mes jours et réchauffe mon cœur.",
    "Je suis reconnaissant(e) pour chaque moment passé à tes côtés.",
    "Ton amour est le trésor que j’ai cherché toute ma vie.",
    "Avec toi, le temps s’arrête et le monde devient parfait.",
    "Je t’aime plus que tout, et rien ne pourra jamais changer cela.",
    "Tu es mon étoile du nord, celle qui guide chacun de mes pas.",
    "Ton amour est la plus belle des aventures.",
    "Je suis comblé(e) de t’avoir dans ma vie, tu es mon tout.",
    "Avec toi, chaque jour est un cadeau que je chéris.",
    "Je t’aime d’un amour éternel et inconditionnel.",
    "Tu es la mélodie qui berce mon cœur.",
    "Ton sourire est la lumière qui illumine mes journées.",
    "Je suis à toi, corps et âme, pour toujours.",
    "Avec toi, j’ai trouvé le bonheur que je cherchais depuis toujours.",
    "Tu es mon rêve devenu réalité, mon amour éternel.",
    "Je t’aime plus que les mots ne peuvent l’exprimer.",
    "Ton amour est la force qui me pousse à avancer chaque jour.",
    "Avec toi, la vie est une aventure merveilleuse.",
    "Tu es mon ange, mon guide, mon amour.",
    "Je t’aime d’un amour pur et sincère.",
    "Ton sourire est le soleil qui éclaire ma vie.",
    "Avec toi, j’ai trouvé la paix et la joie véritables.",
    "Tu es mon trésor, mon bien le plus précieux.",
    "Je t’aime plus que tout au monde.",
    "Ton amour est la musique qui fait danser mon cœur.",
    "Avec toi, chaque instant est magique.",
    "Tu es mon univers, mon tout.",
    "Je t’aime d’un amour sans fin.",
    "Ton sourire est la clé de mon bonheur.",
    "Avec toi, la vie est belle et pleine de sens.",
];
let originalMessages = [...romanticMessages];

// Texte progressif
const domText = document.createElement("div");
domText.style.position = "absolute";
domText.style.bottom = "20px";
domText.style.width = "100%";
domText.style.textAlign = "center";
domText.style.color = "white";
domText.style.fontSize = "24px";
domText.style.textShadow = "2px 2px 5px black";
domText.style.transition = "opacity 1s ease-in-out";
document.body.appendChild(domText);

function updateText(newMessage) {
    domText.style.opacity = "0"; // Masquer le texte
    setTimeout(() => {
        domText.innerHTML = newMessage;
        domText.style.opacity = "1"; // Réapparaître
    }, 1000);
}

document.body.addEventListener("click", () => {
    if (romanticMessages.length === 0) {
        romanticMessages = [...originalMessages];
    }
    const randomMessage = romanticMessages.splice(Math.floor(Math.random() * romanticMessages.length), 1)[0];
    updateText(randomMessage);
});
