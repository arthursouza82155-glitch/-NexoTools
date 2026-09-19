// ================================
// NEXOTOOLS 5.0 - SCRIPT PRINCIPAL
// ================================

// MENU MOBILE
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ================================
// MODO ESCURO
// ================================

const themeButton = document.querySelector("#themeButton");

function updateThemeIcon() {
  if (!themeButton) return;

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀️";
  } else {
    themeButton.textContent = "🌙";
  }
}

const savedTheme = localStorage.getItem("nexotools-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

updateThemeIcon();

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(
      "nexotools-theme",
      isDark ? "dark" : "light"
    );

    updateThemeIcon();
  });
}

// ================================
// PESQUISA DE FERRAMENTAS
// ================================

const searchInput = document.querySelector("#searchInput");
const toolCards = document.querySelectorAll(".tool-card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const search = searchInput.value.toLowerCase().trim();

    toolCards.forEach((card) => {
      const text = card.textContent.toLowerCase();

      if (text.includes(search)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ================================
// FILTRO POR CATEGORIA
// ================================

const categoryButtons = document.querySelectorAll(".category-button");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;

    toolCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (
        category === "todos" ||
        category === cardCategory
      ) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ================================
// FAVORITOS
// ================================

const favoriteButtons = document.querySelectorAll(".favorite-button");

let favorites =
  JSON.parse(localStorage.getItem("nexotools-favorites")) || [];

function updateFavoriteButtons() {
  favoriteButtons.forEach((button) => {
    const tool = button.dataset.tool;

    if (favorites.includes(tool)) {
      button.classList.add("active");
      button.textContent = "★";
    } else {
      button.classList.remove("active");
      button.textContent = "☆";
    }
  });
}

updateFavoriteButtons();

favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tool = button.dataset.tool;

    if (favorites.includes(tool)) {
      favorites = favorites.filter((item) => item !== tool);
    } else {
      favorites.push(tool);
    }

    localStorage.setItem(
      "nexotools-favorites",
      JSON.stringify(favorites)
    );

    updateFavoriteButtons();
  });
});

// ================================
// COPIAR RESULTADO
// ================================

const copyButtons = document.querySelectorAll(".copy-result");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.dataset.target;
    const target = document.querySelector(targetId);

    if (!target) return;

    const text = target.textContent.trim();

    if (!text) {
      button.textContent = "Nada para copiar";
      setTimeout(() => {
        button.textContent = "Copiar";
      }, 1500);
      return;
    }

    try {
      await navigator.clipboard.writeText(text);

      button.textContent = "Copiado!";

      setTimeout(() => {
        button.textContent = "Copiar";
      }, 1500);
    } catch (error) {
      button.textContent = "Erro ao copiar";

      setTimeout(() => {
        button.textContent = "Copiar";
      }, 1500);
    }
  });
});

// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ================================
// ANIMAÇÃO AO APARECER
// ================================

const animatedElements =
  document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}

// ================================
// CALCULADORA
// ================================

const calculatorDisplay =
  document.querySelector("#calculatorDisplay");

const calculatorButtons =
  document.querySelectorAll("[data-calculator]");

if (calculatorDisplay && calculatorButtons.length) {
  let expression = "";

  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.calculator;

      if (value === "clear") {
        expression = "";
        calculatorDisplay.value = "";
        return;
      }

      if (value === "delete") {
        expression = expression.slice(0, -1);
        calculatorDisplay.value = expression;
        return;
      }

      if (value === "=") {
        try {
          expression = String(
            Function(
              `"use strict"; return (${expression})`
            )()
          );

          calculatorDisplay.value = expression;
        } catch {
          calculatorDisplay.value = "Erro";
          expression = "";
        }

        return;
      }

      expression += value;
      calculatorDisplay.value = expression;
    });
  });
}

// ================================
// GERADOR DE SENHA
// ================================

const passwordButton =
  document.querySelector("#generatePassword");

if (passwordButton) {
  passwordButton.addEventListener("click", () => {
    const lengthInput =
      document.querySelector("#passwordLength");

    const result =
      document.querySelector("#passwordResult");

    if (!lengthInput || !result) return;

    let length = parseInt(lengthInput.value);

    if (isNaN(length)) {
      length = 12;
    }

    length = Math.max(4, Math.min(length, 100));

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex =
        Math.floor(Math.random() * characters.length);

      password += characters[randomIndex];
    }

    result.textContent = password;
  });
}

// ================================
// NÚMERO ALEATÓRIO
// ================================

const randomButton =
  document.querySelector("#generateRandom");

if (randomButton) {
  randomButton.addEventListener("click", () => {
    const minInput =
      document.querySelector("#randomMin");

    const maxInput =
      document.querySelector("#randomMax");

    const result =
      document.querySelector("#randomResult");

    if (!minInput || !maxInput || !result) return;

    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    if (
      Number.isNaN(min) ||
      Number.isNaN(max) ||
      min > max
    ) {
      result.textContent = "Digite valores válidos.";
      return;
    }

    const number =
      Math.floor(Math.random() * (max - min + 1)) + min;

    result.textContent = number;
  });
}

// ================================
// CARA OU COROA
// ================================

const coinButton =
  document.querySelector("#flipCoin");

if (coinButton) {
  coinButton.addEventListener("click", () => {
    const result =
      document.querySelector("#coinResult");

    if (!result) return;

    result.textContent =
      Math.random() < 0.5
        ? "🪙 Cara"
        : "🪙 Coroa";
  });
}

// ================================
// DADO
// ================================

const diceButton =
  document.querySelector("#rollDice");

if (diceButton) {
  diceButton.addEventListener("click", () => {
    const result =
      document.querySelector("#diceResult");

    if (!result) return;

    const number =
      Math.floor(Math.random() * 6) + 1;

    result.textContent = `🎲 ${number}`;
  });
}

// ================================
// CRONÔMETRO
// ================================

let stopwatchInterval = null;
let stopwatchSeconds = 0;

const stopwatchDisplay =
  document.querySelector("#stopwatchDisplay");

const startStopwatch =
  document.querySelector("#startStopwatch");

const pauseStopwatch =
  document.querySelector("#pauseStopwatch");

const resetStopwatch =
  document.querySelector("#resetStopwatch");

function formatTime(seconds) {
  const minutes =
    Math.floor(seconds / 60);

  const secs =
    seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    secs
  ).padStart(2, "0")}`;
}

function updateStopwatch() {
  if (stopwatchDisplay) {
    stopwatchDisplay.textContent =
      formatTime(stopwatchSeconds);
  }
}

if (startStopwatch) {
  startStopwatch.addEventListener("click", () => {
    if (stopwatchInterval) return;

    stopwatchInterval = setInterval(() => {
      stopwatchSeconds++;
      updateStopwatch();
    }, 1000);
  });
}

if (pauseStopwatch) {
  pauseStopwatch.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  });
}

if (resetStopwatch) {
  resetStopwatch.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchSeconds = 0;
    updateStopwatch();
  });
}

// ================================
// DATA DE ATUALIZAÇÃO
// ================================

const yearElements =
  document.querySelectorAll(".current-year");

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// ================================
// LOG
// ================================

console.log("NexoTools 5.0 carregado com sucesso!");
