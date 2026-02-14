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
    "Te amo demasiadooooooo",
    "Mi niña hermosa",
    "My honey",
    "Te amo mi vidaaaaaaa",
    "Me encantas demasiadooooo",
];

const button = document.getElementById("magicButton");
const music = document.getElementById("loveMusic");
const overlay = document.getElementById("overlay");
const photoContainer = document.getElementById("photoContainer");
const bubblesContainer = document.getElementById("bubbles-text");

let clickCount = 0;
let intervalStarted = false;

/* ===== Crear burbujas ===== */
function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.top = Math.random() * window.innerHeight + "px";

    bubblesContainer.appendChild(bubble);

    setTimeout(() => bubble.remove(), 8000);
}

/* ===== Cargar imágenes dinámicamente ===== */
function loadPhotos() {

    const photos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
 // asegúrate que existen

    photos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "love-photo";

        img.onerror = () => {
            console.warn("No se pudo cargar:", src);
        };

        photoContainer.appendChild(img);
    });
}

/* ===== Evento botón ===== */
button.addEventListener("click", () => {

    clickCount++;

    if (clickCount === 1) {

        music.volume = 0.7;
        music.play().catch(() => {});
        overlay.classList.add("active");

        if (!intervalStarted) {
            setInterval(createTextBubble, 600);
            intervalStarted = true;
        }

        button.innerText = "Presiona otra vez 🩵";
    }

    else if (clickCount === 2) {

        loadPhotos();
        photoContainer.classList.add("show");

        button.innerText = "Te amo 🩵";
        button.disabled = true;
    }
});
