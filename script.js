// script.js

// Configurações do WhatsApp
const whatsappNumber = "5511987817963"; // Número com DDI e DDD
const message = "Olá! Gostaria de saber mais sobre os empréstimos e cartões de crédito da Elite Ventures.";

// Função para redirecionar para o WhatsApp
function redirectToWhatsApp() {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// Animação suave ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 300 * index);
    });
});
