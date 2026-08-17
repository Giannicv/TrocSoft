const year = document.getElementById("year");
const messageBtn = document.getElementById("messageBtn");
const toast = document.getElementById("toast");
const terminalText = document.getElementById("terminalText");

year.textContent = new Date().getFullYear();

messageBtn.addEventListener("click", () => {
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
});

const terminalMessages = [
    "Sistema iniciado correctamente.",
    "Cargando equipo TrocSoft...",
    "Preparando soluciones digitales...",
    "HTML + CSS + JavaScript listo."
];

let messageIndex = 0;

setInterval(() => {
    messageIndex = (messageIndex + 1) % terminalMessages.length;
    terminalText.textContent = terminalMessages[messageIndex];
}, 2800);

const cards = document.querySelectorAll(".member-card");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.animate(
                    [
                        {
                            opacity: 0,
                            transform: "translateY(30px)"
                        },
                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }
                    ],
                    {
                        duration: 600,
                        easing: "ease-out",
                        fill: "forwards"
                    }
                );

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {
    observer.observe(card);
});