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

// 3. MODAL DE EXPERIÊNCIAS
function openExperience(card) {
  if (!card) return;

  const modal = document.getElementById("expModal");
  const banner = document.getElementById("expBanner");
  const logo = document.getElementById("expLogo");
  const title = document.getElementById("expTitle");
  const meta = document.getElementById("expMeta");
  const text = document.getElementById("expText");

  title.textContent = card.dataset.title;
  meta.textContent = card.dataset.meta;
  text.textContent = card.dataset.text;
  banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url("${card.dataset.image}")`;
  logo.src = card.querySelector(".company-logo").src;

  modal.classList.add("active");
}

function closeExperience() {
  document.getElementById("expModal").classList.remove("active");
}

const expClose = document.getElementById("expClose");
const expBackdrop = document.getElementById("expBackdrop");
const coursesPrev = document.getElementById("coursesPrev");
const coursesNext = document.getElementById("coursesNext");
const coursesCarousel = document.getElementById("coursesCarousel");

if (expClose && expBackdrop) {
  expClose.addEventListener("click", closeExperience);
  expBackdrop.addEventListener("click", closeExperience);
}

if (coursesPrev && coursesNext && coursesCarousel) {
  coursesPrev.addEventListener("click", () => {
    coursesCarousel.scrollBy({ left: -340, behavior: "smooth" });
  });

  coursesNext.addEventListener("click", () => {
    coursesCarousel.scrollBy({ left: 340, behavior: "smooth" });
  });
}

// Disparar ao carregar
window.addEventListener("DOMContentLoaded", initReveal);
