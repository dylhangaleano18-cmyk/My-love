const messages = [
    "Te amo muchísimo",
    "Eres muy linda",
    "La más bella",
    "La mejor diseñadora gráfica",
    "La mejor bailarina del mundo",
    "La mejor cantante",
    "La mujer de mis sueños",
    "Me encanta tu voz",
    "Me encantan tus ojos",
    "Me encanta tu sonrisa",
    "Admiro todo tu esfuerzo",
    "Admiro tus ganas de dar siempre lo mejor de ti",
    "Eres la mejor del mundo",
    "Me encantan tus besos",
    "Me encantan tus abrazos",
    "Te amo demasiadooooooooo",
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    // Posición en píxeles (NO vw/vh)
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;

    bubble.style.left = left + "px";
    bubble.style.top = top + "px";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

document.getElementById("magicButton")
    .addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(createTextBubble, i * 150);
        }
        let clickCount = 0;
document.getElementById("magicButton").addEventListener("click", () => {
    clickCount++;
    if(clickCount === 3) {
        alert("Me enamoro de ti como si fuera la primera vez\n"+
             "cada vez que te veo\n"+
             "¡Feliz dia del amor mi vida! ❤️");
    }
});
    });
