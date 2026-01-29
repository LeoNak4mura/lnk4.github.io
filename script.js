// 1. ANIMAÇÃO DE REVEAL (Scroll Infinito - Vai e Volta)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Quando entra na tela, adiciona a classe
      entry.target.classList.add("visible");
    } else {
      // O PULO DO GATO: Quando sai da tela, remove a classe
      // Assim, ao rolar novamente, o efeito acontece de novo
      entry.target.classList.remove("visible");
    }
  });
}, observerOptions);

// Inicializa o Observer
function initReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
}

// 2. CONTROLE DO MENU SANDUÍCHE
const menuToggle = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// 3. EXPANSÃO DOS CARDS DE EXPERIÊNCIA
function toggleExp(card) {
  if (!card) return;
  const isActive = card.classList.contains("active");
  document
    .querySelectorAll(".exp-card")
    .forEach((c) => c.classList.remove("active"));
  if (!isActive) card.classList.add("active");
}

// Disparar ao carregar
window.addEventListener("DOMContentLoaded", initReveal);
