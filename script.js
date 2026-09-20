/* =========================================================
   NEXOTOOLS 3.0
   ========================================================= */

const tools = [
  // ==================== MATEMÁTICA ====================
  {
    id: "calculadora",
    name: "Calculadora",
    icon: "🧮",
    category: "Matemática",
    description: "Faça cálculos rapidamente."
  },
  {
    id: "porcentagem",
    name: "Porcentagem",
    icon: "%",
    category: "Matemática",
    description: "Calcule porcentagens."
  },
  {
    id: "desconto",
    name: "Desconto",
    icon: "🏷️",
    category: "Matemática",
    description: "Calcule descontos e preços finais."
  },
  {
    id: "juros",
    name: "Juros simples",
    icon: "💰",
    category: "Matemática",
    description: "Calcule juros simples."
  },
  {
    id: "regra",
    name: "Regra de 3",
    icon: "📐",
    category: "Matemática",
    description: "Resolva regras de três."
  },
  {
    id: "media",
    name: "Média",
    icon: "📊",
    category: "Matemática",
    description: "Calcule a média de números."
  },
  {
    id: "mediaEscolar",
    name: "Média escolar",
    icon: "🎓",
    category: "Matemática",
    description: "Calcule sua média de notas."
  },
  {
    id: "potencia",
    name: "Potência",
    icon: "x²",
    category: "Matemática",
    description: "Calcule potências."
  },
  {
    id: "raiz",
    name: "Raiz quadrada",
    icon: "√",
    category: "Matemática",
    description: "Calcule raízes quadradas."
  },
  {
    id: "area",
    name: "Área",
    icon: "▱",
    category: "Matemática",
    description: "Calcule áreas geométricas."
  },
  {
    id: "tabuada",
    name: "Tabuada",
    icon: "✖️",
    category: "Matemática",
    description: "Gere tabuadas instantaneamente."
  },
  {
    id: "idade",
    name: "Calculadora de idade",
    icon: "🎂",
    category: "Matemática",
    description: "Descubra sua idade."
  },

  // ==================== CONVERSORES ====================
  {
    id: "temperatura",
    name: "Temperatura",
    icon: "🌡️",
    category: "Conversores",
    description: "Converta Celsius, Fahrenheit e Kelvin."
  },
  {
    id: "comprimento",
    name: "Comprimento",
    icon: "📏",
    category: "Conversores",
    description: "Converta unidades de comprimento."
  },
  {
    id: "peso",
    name: "Peso",
    icon: "⚖️",
    category: "Conversores",
    description: "Converta unidades de peso."
  },
  {
    id: "velocidade",
    name: "Velocidade",
    icon: "🚀",
    category: "Conversores",
    description: "Converta km/h e m/s."
  },
  {
    id: "dados",
    name: "Dados digitais",
    icon: "💾",
    category: "Conversores",
    description: "Converta KB, MB, GB e mais."
  },
  {
    id: "tempo",
    name: "Tempo",
    icon: "⏱️",
    category: "Conversores",
    description: "Converta unidades de tempo."
  },
  {
    id: "volume",
    name: "Volume",
    icon: "🧊",
    category: "Conversores",
    description: "Converta unidades de volume."
  },
  {
    id: "angulo",
    name: "Ângulo",
    icon: "📐",
    category: "Conversores",
    description: "Converta graus e radianos."
  },

  // ==================== TEXTO ====================
  {
    id: "palavras",
    name: "Contador de palavras",
    icon: "📝",
    category: "Texto",
    description: "Conte palavras e caracteres."
  },
  {
    id: "maiusculas",
    name: "Maiúsculas e minúsculas",
    icon: "Aa",
    category: "Texto",
    description: "Transforme seu texto."
  },
  {
    id: "espacos",
    name: "Remover espaços",
    icon: "↔️",
    category: "Texto",
    description: "Remova espaços desnecessários."
  },
  {
    id: "inverter",
    name: "Inverter texto",
    icon: "↔",
    category: "Texto",
    description: "Inverta qualquer texto."
  },
  {
    id: "caracteres",
    name: "Contador de caracteres",
    icon: "🔢",
    category: "Texto",
    description: "Conte caracteres do texto."
  },
  {
    id: "linhas",
    name: "Contador de linhas",
    icon: "☰",
    category: "Texto",
    description: "Conte linhas de um texto."
  },
  {
    id: "slug",
    name: "Gerador de slug",
    icon: "🔗",
    category: "Texto",
    description: "Transforme títulos em URLs."
  },

  // ==================== PRODUTIVIDADE ====================
  {
    id: "cronometro",
    name: "Cronômetro",
    icon: "⏱️",
    category: "Produtividade",
    description: "Cronometre seu tempo."
  },
  {
    id: "timer",
    name: "Timer",
    icon: "⏳",
    category: "Produtividade",
    description: "Defina uma contagem regressiva."
  },
  {
    id: "pomodoro",
    name: "Pomodoro",
    icon: "🍅",
    category: "Produtividade",
    description: "Estude usando ciclos Pomodoro."
  },
  {
    id: "dias",
    name: "Calculadora de dias",
    icon: "📅",
    category: "Produtividade",
    description: "Descubra a diferença entre datas."
  },
  {
    id: "notas",
    name: "Bloco de notas",
    icon: "📒",
    category: "Produtividade",
    description: "Escreva e salve suas notas."
  },
  {
    id: "tarefas",
    name: "Lista de tarefas",
    icon: "✅",
    category: "Produtividade",
    description: "Organize suas tarefas."
  },

  // ==================== GERADORES ====================
  {
    id: "senha",
    name: "Gerador de senha",
    icon: "🔐",
    category: "Geradores",
    description: "Crie senhas aleatórias."
  },
  {
    id: "numero",
    name: "Número aleatório",
    icon: "🎲",
    category: "Geradores",
    description: "Sorteie números."
  },
  {
    id: "nomes",
    name: "Sorteador de nomes",
    icon: "👥",
    category: "Geradores",
    description: "Sorteie um nome da sua lista."
  },
  {
    id: "moeda",
    name: "Cara ou coroa",
    icon: "🪙",
    category: "Geradores",
    description: "Jogue uma moeda virtual."
  },
  {
    id: "dado",
    name: "Dado",
    icon: "🎲",
    category: "Geradores",
    description: "Role um dado virtual."
  },
  {
    id: "codigo",
    name: "Código aleatório",
    icon: "🔢",
    category: "Geradores",
    description: "Gere códigos aleatórios."
  },
  {
    id: "qrcode",
    name: "QR Code",
    icon: "▦",
    category: "Geradores",
    description: "Crie QR Codes rapidamente."
  },
  {
    id: "cores",
    name: "Gerador de cores",
    icon: "🎨",
    category: "Geradores",
    description: "Gere cores HEX aleatórias."
  },
  {
    id: "lorem",
    name: "Lorem Ipsum",
    icon: "📄",
    category: "Geradores",
    description: "Gere textos de exemplo."
  },
  {
    id: "uuid",
    name: "UUID",
    icon: "🆔",
    category: "Geradores",
    description: "Gere identificadores aleatórios."
  }
];


/* =========================================================
   ESTADO
   ========================================================= */

let favorites = JSON.parse(
  localStorage.getItem("nexoFavorites") || "[]"
);

let recent = JSON.parse(
  localStorage.getItem("nexoRecent") || "[]"
);

let notes = localStorage.getItem("nexoNotes") || "";

let tasks = JSON.parse(
  localStorage.getItem("nexoTasks") || "[]"
);

let currentCategory = "Todas";
let currentMode = "home";

let stopwatchInterval = null;
let stopwatchSeconds = 0;

let timerInterval = null;
let timerSeconds = 0;

let pomodoroInterval = null;
let pomodoroSeconds = 25 * 60;
let pomodoroRunning = false;

let lastCopyText = "";


/* =========================================================
   ELEMENTOS
   ========================================================= */

const grid = document.getElementById("toolsGrid");
const empty = document.getElementById("empty");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const searchInput = document.getElementById("searchInput");


/* =========================================================
   UTILITÁRIOS
   ========================================================= */

function saveData() {
  localStorage.setItem(
    "nexoFavorites",
    JSON.stringify(favorites)
  );

  localStorage.setItem(
    "nexoRecent",
    JSON.stringify(recent)
  );

  localStorage.setItem(
    "nexoNotes",
    notes
  );

  localStorage.setItem(
    "nexoTasks",
    JSON.stringify(tasks)
  );
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatNumber(value) {
  if (!Number.isFinite(Number(value))) return "0";

  return Number(value).toLocaleString("pt-BR", {
    maximumFractionDigits: 10
  });
}

function field(
  id,
  placeholder = "",
  type = "text",
  value = ""
) {
  return `
    <input
      class="tool-input"
      id="${id}"
      type="${type}"
      placeholder="${placeholder}"
      value="${value}"
    >
  `;
}

function textarea(
  id,
  placeholder = "",
  value = ""
) {
  return `
    <textarea
      class="tool-textarea"
      id="${id}"
      placeholder="${placeholder}"
    >${escapeHTML(value)}</textarea>
  `;
}

function select(id, options) {
  return `
    <select class="tool-input" id="${id}">
      ${options.map(option => `
        <option value="${option.value}">
          ${option.label}
        </option>
      `).join("")}
    </select>
  `;
}

function result(
  value = "",
  copyValue = null
) {
  lastCopyText =
    copyValue !== null
      ? String(copyValue)
      : String(value).replace(/<[^>]*>/g, "");

  return `
    <div class="tool-result">
      <div class="result-value">${value}</div>
      ${
        lastCopyText
          ? `<button class="copy-result" onclick="copyLastResult()">Copiar</button>`
          : ""
      }
    </div>
  `;
}

function actionButtons() {
  return `
    <div class="tool-actions">
      <button class="primary-button tool-action" id="toolPrimary">
        Calcular
      </button>
      <button class="secondary-button tool-action" onclick="clearToolFields()">
        Limpar
      </button>
    </div>
  `;
}

function getTool(id) {
  return tools.find(tool => tool.id === id);
}

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
  } else {
    favorites.push(id);
  }

  saveData();
  render();
}

function addRecent(id) {
  recent = recent.filter(item => item !== id);
  recent.unshift(id);

  recent = recent.slice(0, 12);

  saveData();
}


/* =========================================================
   ATUALIZAÇÕES VISUAIS
   ========================================================= */

function updateToolCount(count = tools.length) {
  const countElement = document.getElementById("toolCount");

  if (countElement) {
    countElement.textContent =
      `${count} ${count === 1 ? "ferramenta" : "ferramentas"}`;
  }

  const heroNumber = document.querySelector(".hero-info strong");

  if (heroNumber) {
    heroNumber.textContent =
      `${tools.length}+`;
  }

  const statCards = document.querySelectorAll(".stat-card");

  if (statCards[2]) {
    const strong = statCards[2].querySelector("strong");

    if (strong) {
      strong.textContent = `${tools.length}+ ferramentas`;
    }
  }
}


/* =========================================================
   CARDS
   ========================================================= */

function renderTools(list = tools) {
  if (!grid) return;

  grid.innerHTML = "";

  if (!list.length) {
    empty.style.display = "block";
    updateToolCount(0);
    return;
  }

  empty.style.display = "none";

  list.forEach(tool => {
    const favorite = isFavorite(tool.id);

    const card = document.createElement("article");

    card.className = "tool-card";

    card.innerHTML = `
      <button
        class="favorite-button ${favorite ? "active" : ""}"
        onclick="event.stopPropagation(); toggleFavorite('${tool.id}')"
        title="Favoritar"
      >
        ${favorite ? "★" : "☆"}
      </button>

      <div
        class="tool-card-click"
        onclick="openTool('${tool.id}')"
      >
        <div class="tool-icon">${tool.icon}</div>

        <span class="tool-category">
          ${tool.category}
        </span>

        <h3>${tool.name}</h3>

        <p>${tool.description}</p>

        <span class="tool-open">
          Abrir ferramenta →
        </span>
      </div>
    `;

    grid.appendChild(card);
  });

  updateToolCount(list.length);
}


/* =========================================================
   RENDER PRINCIPAL
   ========================================================= */

function render() {
  let list = [...tools];

  if (currentMode === "favorites") {
    list = tools.filter(tool =>
      favorites.includes(tool.id)
    );
  }

  if (currentMode === "recent") {
    list = recent
      .map(id => getTool(id))
      .filter(Boolean);
  }

  if (currentCategory !== "Todas") {
    list = list.filter(tool =>
      tool.category === currentCategory
    );
  }

  const query = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  if (query) {
    list = list.filter(tool =>
      `${tool.name} ${tool.description} ${tool.category}`
        .toLowerCase()
        .includes(query)
    );
  }

  renderTools(list);
  updateActiveCategory();
}


/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

function showHome() {
  currentMode = "home";
  currentCategory = "Todas";

  if (searchInput) {
    searchInput.value = "";
  }

  const title = document.getElementById("sectionTitle");

  if (title) {
    title.textContent = "Todas as ferramentas";
  }

  render();
  scrollToTools();
}

function showFavorites() {
  currentMode = "favorites";
  currentCategory = "Todas";

  const title = document.getElementById("sectionTitle");

  if (title) {
    title.textContent = "Meus favoritos";
  }

  render();
  scrollToTools();
}

function showRecent() {
  currentMode = "recent";
  currentCategory = "Todas";

  const title = document.getElementById("sectionTitle");

  if (title) {
    title.textContent = "Usadas recentemente";
  }

  render();
  scrollToTools();
}

function filterCategory(category) {
  currentMode = "home";
  currentCategory = category;

  const title = document.getElementById("sectionTitle");

  if (title) {
    title.textContent =
      category === "Todas"
        ? "Todas as ferramentas"
        : category;
  }

  render();
  scrollToTools();
}

function updateActiveCategory() {
  document
    .querySelectorAll(".category")
    .forEach(button => {
      button.classList.remove("active");

      if (
        currentCategory === "Todas" &&
        button.textContent.trim() === "Todas"
      ) {
        button.classList.add("active");
      }

      if (
        currentCategory !== "Todas" &&
        button.textContent.trim() === currentCategory
      ) {
        button.classList.add("active");
      }
    });
}

function searchTools() {
  currentMode = "home";
  currentCategory = "Todas";

  const title = document.getElementById("sectionTitle");

  if (title) {
    title.textContent = "Resultados da pesquisa";
  }

  render();
}

function scrollToTools() {
  const section = document.getElementById("toolsSection");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================================================
   MODAL
   ========================================================= */

function openTool(id) {
  const tool = getTool(id);

  if (!tool) return;

  addRecent(id);

  modalContent.innerHTML = `
    <div class="modal-tool-header">
      <div class="modal-tool-icon">${tool.icon}</div>

      <div>
        <span>${tool.category}</span>
        <h2>${tool.name}</h2>
        <p>${tool.description}</p>
      </div>
    </div>

    <div id="toolInterface"></div>
  `;

  modal.classList.add("active");

  createTool(id);

  setTimeout(() => {
    const firstInput =
      modalContent.querySelector(
        "input:not([type='button']), textarea, select"
      );

    if (firstInput) {
      firstInput.focus();
    }
  }, 100);
}

function closeTool() {
  stopAllIntervals();

  modal.classList.remove("active");

  modalContent.innerHTML = "";
}

function stopAllIntervals() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (pomodoroInterval) {
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
  }
}

function toggleModalOutside(event) {
  if (event.target === modal) {
    closeTool();
  }
}

modal.addEventListener(
  "click",
  toggleModalOutside
);

document.addEventListener(
  "keydown",
  event => {
    if (event.key === "Escape") {
      closeTool();
    }
  }
);


/* =========================================================
   COPIAR / LIMPAR
   ========================================================= */

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(String(text));

    showToast("Copiado!");
  } catch {
    const textareaElement =
      document.createElement("textarea");

    textareaElement.value = String(text);

    document.body.appendChild(textareaElement);

    textareaElement.select();

    document.execCommand("copy");

    textareaElement.remove();

    showToast("Copiado!");
  }
}

function copyLastResult() {
  if (lastCopyText) {
    copyText(lastCopyText);
  }
}

function clearToolFields() {
  const elements =
    modalContent.querySelectorAll(
      "input, textarea, select"
    );

  elements.forEach(element => {
    if (element.tagName === "SELECT") {
      element.selectedIndex = 0;
    } else {
      element.value = "";
    }
  });

  const results =
    modalContent.querySelectorAll(".tool-result");

  results.forEach(item => {
    item.remove();
  });

  lastCopyText = "";
}

function showToast(message) {
  const old =
    document.querySelector(".nexo-toast");

  if (old) {
    old.remove();
  }

  const toast =
    document.createElement("div");

  toast.className = "nexo-toast";

  toast.textContent = message;

  toast.style.cssText = `
    position: fixed;
    left: 50%;
    bottom: 28px;
    transform: translateX(-50%);
    z-index: 99999;
    padding: 12px 18px;
    border-radius: 12px;
    background: #111827;
    color: white;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 12px 35px rgba(0,0,0,.25);
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 1800);
}


/* =========================================================
   CRIAÇÃO DAS FERRAMENTAS
   ========================================================= */

function createTool(id) {
  const container =
    document.getElementById("toolInterface");

  if (!container) return;

  switch (id) {

    /* ================= CALCULADORA ================= */

    case "calculadora":
      container.innerHTML = `
        ${field("calc", "Ex.: 25 * 4 + 10")}
        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculate;

      document
        .getElementById("calc")
        .addEventListener("keydown", e => {
          if (e.key === "Enter") calculate();
        });

      break;


    /* ================= PORCENTAGEM ================= */

    case "porcentagem":
      container.innerHTML = `
        ${field("pValue", "Valor", "number")}
        ${field("pPercent", "Porcentagem", "number")}
        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculatePercentage;

      break;


    /* ================= DESCONTO ================= */

    case "desconto":
      container.innerHTML = `
        ${field("discountPrice", "Preço", "number")}
        ${field("discountPercent", "Desconto (%)", "number")}
        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateDiscount;

      break;


    /* ================= JUROS ================= */

    case "juros":
      container.innerHTML = `
        ${field("jPrincipal", "Capital", "number")}
        ${field("jRate", "Taxa (%)", "number")}
        ${field("jTime", "Tempo", "number")}

        ${select("jUnit", [
          { value: "meses", label: "Meses" },
          { value: "anos", label: "Anos" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateInterest;

      break;


    /* ================= REGRA DE 3 ================= */

    case "regra":
      container.innerHTML = `
        ${field("rA", "A", "number")}
        ${field("rB", "B", "number")}
        ${field("rC", "C", "number")}

        <p class="tool-help">
          A está para B assim como C está para X.
        </p>

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateRule;

      break;


    /* ================= MÉDIA ================= */

    case "media":
      container.innerHTML = `
        ${textarea(
          "mediaValues",
          "Digite os números separados por vírgula..."
        )}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateAverage;

      break;


    /* ================= MÉDIA ESCOLAR ================= */

    case "mediaEscolar":
      container.innerHTML = `
        ${field("nota1", "Nota 1", "number")}
        ${field("nota2", "Nota 2", "number")}
        ${field("nota3", "Nota 3", "number")}
        ${field("nota4", "Nota 4", "number")}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateSchoolAverage;

      break;


    /* ================= POTÊNCIA ================= */

    case "potencia":
      container.innerHTML = `
        ${field("powerBase", "Base", "number")}
        ${field("powerExp", "Expoente", "number")}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculatePower;

      break;


    /* ================= RAIZ ================= */

    case "raiz":
      container.innerHTML = `
        ${field("sqrtValue", "Número", "number")}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateRoot;

      break;


    /* ================= ÁREA ================= */

    case "area":
      container.innerHTML = `
        ${select("areaType", [
          { value: "quadrado", label: "Quadrado" },
          { value: "retangulo", label: "Retângulo" },
          { value: "triangulo", label: "Triângulo" },
          { value: "circulo", label: "Círculo" }
        ])}

        ${field("areaA", "Medida 1", "number")}
        ${field("areaB", "Medida 2", "number")}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateArea;

      break;


    /* ================= TABUADA ================= */

    case "tabuada":
      container.innerHTML = `
        ${field("tableNumber", "Número", "number")}
        ${field("tableStart", "Começar em", "number", 1)}
        ${field("tableEnd", "Terminar em", "number", 10)}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = generateTable;

      break;


    /* ================= IDADE ================= */

    case "idade":
      container.innerHTML = `
        <label class="tool-label">Data de nascimento</label>
        ${field("birthDate", "", "date")}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateAge;

      break;


    /* ================= TEMPERATURA ================= */

    case "temperatura":
      container.innerHTML = `
        ${field("tempValue", "Valor", "number")}

        ${select("tempFrom", [
          { value: "c", label: "Celsius" },
          { value: "f", label: "Fahrenheit" },
          { value: "k", label: "Kelvin" }
        ])}

        ${select("tempTo", [
          { value: "c", label: "Celsius" },
          { value: "f", label: "Fahrenheit" },
          { value: "k", label: "Kelvin" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = convertTemperature;

      break;


    /* ================= COMPRIMENTO ================= */

    case "comprimento":
      container.innerHTML = `
        ${field("lengthValue", "Valor", "number")}

        ${select("lengthFrom", [
          { value: "mm", label: "Milímetro" },
          { value: "cm", label: "Centímetro" },
          { value: "m", label: "Metro" },
          { value: "km", label: "Quilômetro" }
        ])}

        ${select("lengthTo", [
          { value: "mm", label: "Milímetro" },
          { value: "cm", label: "Centímetro" },
          { value: "m", label: "Metro" },
          { value: "km", label: "Quilômetro" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = convertLength;

      break;


    /* ================= PESO ================= */

    case "peso":
      container.innerHTML = `
        ${field("weightValue", "Valor", "number")}

        ${select("weightFrom", [
          { value: "mg", label: "Miligrama" },
          { value: "g", label: "Grama" },
          { value: "kg", label: "Quilograma" },
          { value: "t", label: "Tonelada" }
        ])}

        ${select("weightTo", [
          { value: "mg", label: "Miligrama" },
          { value: "g", label: "Grama" },
          { value: "kg", label: "Quilograma" },
          { value: "t", label: "Tonelada" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = convertWeight;

      break;


    /* ================= VELOCIDADE ================= */

    case "velocidade":
      container.innerHTML = `
        ${field("speedValue", "Valor", "number")}

        ${select("speedFrom", [
          { value: "kmh", label: "km/h" },
          { value: "ms", label: "m/s" },
          { value: "mph", label: "mph" }
        ])}

        ${select("speedTo", [
          { value: "kmh", label: "km/h" },
          { value: "ms", label: "m/s" },
          { value: "mph", label: "mph" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = convertSpeed;

      break;


    /* ================= DADOS ================= */

    case "dados":
      container.innerHTML = `
        ${field("dataValue", "Valor", "number")}

        ${select("dataFrom", [
          { value: "b", label: "Bytes" },
          { value: "kb", label: "KB" },
          { value: "mb", label: "MB" },
          { value: "gb", label: "GB" },
          { value: "tb", label: "TB" }
        ])}

        ${select("dataTo", [
          { value: "b", label: "Bytes" },
          { value: "kb", label: "KB" },
          { value: "mb", label: "MB" },
          { value: "gb", label: "GB" },
          { value: "tb", label: "TB" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = convertData;

      break;


    /* ================= TEMPO ================= */

    case "tempo":
      container.innerHTML = `
        ${field("timeValue", "Valor", "number")}

        ${select("timeFrom", [
          { value: "seg", label: "Segundos" },
          { value: "min", label: "Minutos" },
          { value: "h", label: "Horas" },
          { value: "d", label: "Dias" }
        ])}

        ${select("timeTo", [
          { value: "seg", label: "Segundos" },
          { value: "min", label: "Minutos" },
          { value: "h", label: "Horas" },
          { value: "d", label: "Dias" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = convertTime;

      break;


    /* ================= VOLUME ================= */

    case "volume":
      container.innerHTML = `
        ${field("volumeValue", "Valor", "number")}

        ${select("volumeFrom", [
          { value: "ml", label: "Mililitros" },
          { value: "l", label: "Litros" },
          { value: "m3", label: "Metros cúbicos" }
        ])}

        ${select("volumeTo", [
          { value: "ml", label: "Mililitros" },
          { value: "l", label: "Litros" },
          { value: "m3", label: "Metros cúbicos" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = convertVolume;

      break;


    /* ================= ÂNGULO ================= */

    case "angulo":
      container.innerHTML = `
        ${field("angleValue", "Valor", "number")}

        ${select("angleFrom", [
          { value: "graus", label: "Graus" },
          { value: "rad", label: "Radianos" }
        ])}

        ${select("angleTo", [
          { value: "graus", label: "Graus" },
          { value: "rad", label: "Radianos" }
        ])}

        ${actionButtons()}
        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = convertAngle;

      break;


    /* ================= PALAVRAS ================= */

    case "palavras":
      container.innerHTML = `
        ${textarea(
          "wordText",
          "Digite ou cole seu texto..."
        )}

        <button
          class="primary-button tool-action"
          onclick="countWords()"
        >
          Contar
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= MAIÚSCULAS ================= */

    case "maiusculas":
      container.innerHTML = `
        ${textarea(
          "caseText",
          "Digite seu texto..."
        )}

        <div class="tool-actions">
          <button
            class="primary-button"
            onclick="toUpper()"
          >
            MAIÚSCULAS
          </button>

          <button
            class="secondary-button"
            onclick="toLower()"
          >
            minúsculas
          </button>
        </div>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= ESPAÇOS ================= */

    case "espacos":
      container.innerHTML = `
        ${textarea(
          "spaceText",
          "Digite seu texto..."
        )}

        ${actionButtons()}

        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = removeSpaces;

      break;


    /* ================= INVERTER ================= */

    case "inverter":
      container.innerHTML = `
        ${textarea(
          "reverseText",
          "Digite seu texto..."
        )}

        ${actionButtons()}

        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = reverseText;

      break;


    /* ================= CARACTERES ================= */

    case "caracteres":
      container.innerHTML = `
        ${textarea(
          "charText",
          "Digite seu texto..."
        )}

        <button
          class="primary-button tool-action"
          onclick="countCharacters()"
        >
          Contar caracteres
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= LINHAS ================= */

    case "linhas":
      container.innerHTML = `
        ${textarea(
          "lineText",
          "Digite seu texto..."
        )}

        <button
          class="primary-button tool-action"
          onclick="countLines()"
        >
          Contar linhas
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= SLUG ================= */

    case "slug":
      container.innerHTML = `
        ${field(
          "slugText",
          "Ex.: Meu novo artigo incrível"
        )}

        ${actionButtons()}

        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = generateSlug;

      break;


    /* ================= CRONÔMETRO ================= */

    case "cronometro":
      container.innerHTML = `
        <div class="big-timer" id="stopwatchDisplay">
          00:00:00
        </div>

        <div class="tool-actions">
          <button
            class="primary-button"
            onclick="startStopwatch()"
          >
            Iniciar
          </button>

          <button
            class="secondary-button"
            onclick="pauseStopwatch()"
          >
            Pausar
          </button>

          <button
            class="secondary-button"
            onclick="resetStopwatch()"
          >
            Zerar
          </button>
        </div>
      `;

      break;


    /* ================= TIMER ================= */

    case "timer":
      container.innerHTML = `
        ${field(
          "timerMinutes",
          "Minutos",
          "number",
          5
        )}

        <div class="big-timer" id="timerDisplay">
          05:00
        </div>

        <div class="tool-actions">
          <button
            class="primary-button"
            onclick="startTimer()"
          >
            Iniciar
          </button>

          <button
            class="secondary-button"
            onclick="pauseTimer()"
          >
            Pausar
          </button>

          <button
            class="secondary-button"
            onclick="resetTimer()"
          >
            Zerar
          </button>
        </div>
      `;

      break;


    /* ================= POMODORO ================= */

    case "pomodoro":
      container.innerHTML = `
        <div class="pomodoro-status" id="pomodoroStatus">
          Foco
        </div>

        <div class="big-timer" id="pomodoroDisplay">
          25:00
        </div>

        <div class="tool-actions">
          <button
            class="primary-button"
            onclick="startPomodoro()"
          >
            Iniciar
          </button>

          <button
            class="secondary-button"
            onclick="pausePomodoro()"
          >
            Pausar
          </button>

          <button
            class="secondary-button"
            onclick="resetPomodoro()"
          >
            Reiniciar
          </button>
        </div>
      `;

      break;


    /* ================= DIAS ================= */

    case "dias":
      container.innerHTML = `
        <label class="tool-label">
          Data inicial
        </label>

        ${field(
          "date1",
          "",
          "date"
        )}

        <label class="tool-label">
          Data final
        </label>

        ${field(
          "date2",
          "",
          "date"
        )}

        ${actionButtons()}

        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = calculateDays;

      break;


    /* ================= NOTAS ================= */

    case "notas":
      container.innerHTML = `
        ${textarea(
          "notesText",
          "Escreva suas notas aqui...",
          notes
        )}

        <div class="tool-actions">
          <button
            class="primary-button"
            onclick="saveNotes()"
          >
            Salvar notas
          </button>

          <button
            class="secondary-button"
            onclick="clearNotes()"
          >
            Limpar
          </button>
        </div>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= TAREFAS ================= */

    case "tarefas":
      renderTasksTool(container);
      break;


    /* ================= SENHA ================= */

    case "senha":
      container.innerHTML = `
        ${field(
          "passwordLength",
          "Tamanho",
          "number",
          16
        )}

        <label class="check-row">
          <input
            type="checkbox"
            id="passUpper"
            checked
          >
          Maiúsculas
        </label>

        <label class="check-row">
          <input
            type="checkbox"
            id="passNumbers"
            checked
          >
          Números
        </label>

        <label class="check-row">
          <input
            type="checkbox"
            id="passSymbols"
            checked
          >
          Símbolos
        </label>

        <button
          class="primary-button tool-action"
          onclick="generatePassword()"
        >
          Gerar senha
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= NÚMERO ================= */

    case "numero":
      container.innerHTML = `
        ${field(
          "randomMin",
          "Mínimo",
          "number",
          1
        )}

        ${field(
          "randomMax",
          "Máximo",
          "number",
          100
        )}

        ${actionButtons()}

        <div id="toolOutput"></div>
      `;

      document
        .getElementById("toolPrimary")
        .onclick = generateRandomNumber;

      break;


    /* ================= NOMES ================= */

    case "nomes":
      container.innerHTML = `
        ${textarea(
          "namesText",
          "Digite os nomes, um por linha..."
        )}

        <button
          class="primary-button tool-action"
          onclick="drawName()"
        >
          Sortear nome
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= MOEDA ================= */

    case "moeda":
      container.innerHTML = `
        <div class="coin" id="coinDisplay">
          🪙
        </div>

        <button
          class="primary-button tool-action"
          onclick="flipCoin()"
        >
          Jogar moeda
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= DADO ================= */

    case "dado":
      container.innerHTML = `
        <div class="dice-display" id="diceDisplay">
          🎲
        </div>

        <button
          class="primary-button tool-action"
          onclick="rollDice()"
        >
          Rolar dado
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= CÓDIGO ================= */

    case "codigo":
      container.innerHTML = `
        ${field(
          "codeLength",
          "Quantidade de caracteres",
          "number",
          8
        )}

        <button
          class="primary-button tool-action"
          onclick="generateCode()"
        >
          Gerar código
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= QR CODE ================= */

    case "qrcode":
      container.innerHTML = `
        ${field(
          "qrText",
          "Digite um texto ou link..."
        )}

        <button
          class="primary-button tool-action"
          onclick="generateQR()"
        >
          Gerar QR Code
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= CORES ================= */

    case "cores":
      container.innerHTML = `
        <div
          id="colorPreview"
          style="
            width:100%;
            height:150px;
            border-radius:20px;
            margin-bottom:18px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:24px;
            font-weight:800;
            color:white;
            background:#7c3aed;
          "
        >
          #7C3AED
        </div>

        <button
          class="primary-button tool-action"
          onclick="generateColor()"
        >
          Gerar cor
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= LOREM ================= */

    case "lorem":
      container.innerHTML = `
        ${field(
          "loremParagraphs",
          "Quantidade de parágrafos",
          "number",
          2
        )}

        <button
          class="primary-button tool-action"
          onclick="generateLorem()"
        >
          Gerar texto
        </button>

        <div id="toolOutput"></div>
      `;

      break;


    /* ================= UUID ================= */

    case "uuid":
      container.innerHTML = `
        <button
          class="primary-button tool-action"
          onclick="generateUUID()"
        >
          Gerar UUID
        </button>

        <div id="toolOutput"></div>
      `;

      break;
  }
}


/* =========================================================
   MATEMÁTICA
   ========================================================= */

function calculate() {
  const input =
    document.getElementById("calc");

  const output =
    document.getElementById("toolOutput");

  if (!input || !output) return;

  const expression =
    input.value.trim();

  if (!expression) {
    output.innerHTML =
      result("Digite uma expressão.");
    return;
  }

  if (
    !/^[0-9+\-*/().,%\s]+$/.test(expression)
  ) {
    output.innerHTML =
      result("Expressão inválida.");
    return;
  }

  try {
    const safeExpression =
      expression.replaceAll("%", "/100");

    const answer =
      Function(
        `"use strict"; return (${safeExpression})`
      )();

    if (!Number.isFinite(answer)) {
      throw new Error();
    }

    output.innerHTML =
      result(
        `<strong>${formatNumber(answer)}</strong>`,
        answer
      );
  } catch {
    output.innerHTML =
      result("Não foi possível calcular.");
  }
}

function calculatePercentage() {
  const value =
    Number(document.getElementById("pValue").value);

  const percent =
    Number(document.getElementById("pPercent").value);

  if (!Number.isFinite(value) || !Number.isFinite(percent)) {
    document.getElementById("toolOutput").innerHTML =
      result("Preencha os campos corretamente.");
    return;
  }

  const answer =
    value * percent / 100;

  document.getElementById("toolOutput").innerHTML =
    result(
      `${formatNumber(percent)}% de ${formatNumber(value)} = <strong>${formatNumber(answer)}</strong>`,
      answer
    );
}

function calculateDiscount() {
  const price =
    Number(
      document.getElementById("discountPrice").value
    );

  const percent =
    Number(
      document.getElementById("discountPercent").value
    );

  if (
    !Number.isFinite(price) ||
    !Number.isFinite(percent)
  ) {
    document.getElementById("toolOutput").innerHTML =
      result("Preencha os campos corretamente.");
    return;
  }

  const discount =
    price * percent / 100;

  const finalPrice =
    price - discount;

  document.getElementById("toolOutput").innerHTML =
    result(`
      Desconto: <strong>R$ ${formatNumber(discount)}</strong><br>
      Preço final: <strong>R$ ${formatNumber(finalPrice)}</strong>
    `, finalPrice);
}

function calculateInterest() {
  const principal =
    Number(
      document.getElementById("jPrincipal").value
    );

  const rate =
    Number(
      document.getElementById("jRate").value
    );

  const time =
    Number(
      document.getElementById("jTime").value
    );

  const unit =
    document.getElementById("jUnit").value;

  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(time)
  ) {
    document.getElementById("toolOutput").innerHTML =
      result("Preencha os campos corretamente.");
    return;
  }

  let period = time;

  if (unit === "anos") {
    period *= 12;
  }

  const interest =
    principal * (rate / 100) * period;

  const total =
    principal + interest;

  document.getElementById("toolOutput").innerHTML =
    result(`
      Juros: <strong>R$ ${formatNumber(interest)}</strong><br>
      Total: <strong>R$ ${formatNumber(total)}</strong>
    `, total);
}

function calculateRule() {
  const a =
    Number(document.getElementById("rA").value);

  const b =
    Number(document.getElementById("rB").value);

  const c =
    Number(document.getElementById("rC").value);

  if (
    !Number.isFinite(a) ||
    !Number.isFinite(b) ||
    !Number.isFinite(c) ||
    a === 0
  ) {
    document.getElementById("toolOutput").innerHTML =
      result("Preencha os valores corretamente.");
    return;
  }

  const x =
    b * c / a;

  document.getElementById("toolOutput").innerHTML =
    result(
      `X = <strong>${formatNumber(x)}</strong>`,
      x
    );
}

function calculateAverage() {
  const text =
    document.getElementById("mediaValues").value;

  const numbers =
    text
      .split(/[,;\s]+/)
      .map(Number)
      .filter(Number.isFinite);

  if (!numbers.length) {
    document.getElementById("toolOutput").innerHTML =
      result("Digite números válidos.");
    return;
  }

  const average =
    numbers.reduce(
      (sum, number) => sum + number,
      0
    ) / numbers.length;

  document.getElementById("toolOutput").innerHTML =
    result(
      `Média: <strong>${formatNumber(average)}</strong>`,
      average
    );
}

function calculateSchoolAverage() {
  const values = [
    "nota1",
    "nota2",
    "nota3",
    "nota4"
  ]
    .map(id =>
      Number(document.getElementById(id).value)
    )
    .filter(Number.isFinite);

  if (!values.length) {
    document.getElementById("toolOutput").innerHTML =
      result("Digite pelo menos uma nota.");
    return;
  }

  const average =
    values.reduce(
      (sum, value) => sum + value,
      0
    ) / values.length;

  document.getElementById("toolOutput").innerHTML =
    result(
      `Média: <strong>${formatNumber(average)}</strong>`,
      average
    );
}

function calculatePower() {
  const base =
    Number(document.getElementById("powerBase").value);

  const exp =
    Number(document.getElementById("powerExp").value);

  if (!Number.isFinite(base) || !Number.isFinite(exp)) {
    document.getElementById("toolOutput").innerHTML =
      result("Preencha os campos corretamente.");
    return;
  }

  const answer =
    Math.pow(base, exp);

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong>${formatNumber(answer)}</strong>`,
      answer
    );
}

function calculateRoot() {
  const value =
    Number(document.getElementById("sqrtValue").value);

  if (!Number.isFinite(value) || value < 0) {
    document.getElementById("toolOutput").innerHTML =
      result("Digite um número positivo.");
    return;
  }

  const answer =
    Math.sqrt(value);

  document.getElementById("toolOutput").innerHTML =
    result(
      `√${value} = <strong>${formatNumber(answer)}</strong>`,
      answer
    );
}

function calculateArea() {
  const type =
    document.getElementById("areaType").value;

  const a =
    Number(document.getElementById("areaA").value);

  const b =
    Number(document.getElementById("areaB").value);

  if (!Number.isFinite(a)) {
    document.getElementById("toolOutput").innerHTML =
      result("Digite as medidas.");
    return;
  }

  let area;

  if (type === "quadrado") {
    area = a * a;
  }

  if (type === "retangulo") {
    if (!Number.isFinite(b)) {
      document.getElementById("toolOutput").innerHTML =
        result("Digite a segunda medida.");
      return;
    }

    area = a * b;
  }

  if (type === "triangulo") {
    if (!Number.isFinite(b)) {
      document.getElementById("toolOutput").innerHTML =
        result("Digite a altura.");
      return;
    }

    area = (a * b) / 2;
  }

  if (type === "circulo") {
    area = Math.PI * Math.pow(a, 2);
  }

  document.getElementById("toolOutput").innerHTML =
    result(
      `Área = <strong>${formatNumber(area)}</strong>`,
      area
    );
}

function generateTable() {
  const number =
    Number(
      document.getElementById("tableNumber").value
    );

  const start =
    Number(
      document.getElementById("tableStart").value
    );

  const end =
    Number(
      document.getElementById("tableEnd").value
    );

  if (
    !Number.isFinite(number) ||
    !Number.isFinite(start) ||
    !Number.isFinite(end)
  ) {
    document.getElementById("toolOutput").innerHTML =
      result("Preencha os campos.");
    return;
  }

  const lines = [];

  for (
    let i = start;
    i <= end;
    i++
  ) {
    lines.push(
      `${number} × ${i} = ${number * i}`
    );
  }

  const text = lines.join("\n");

  document.getElementById("toolOutput").innerHTML =
    result(
      `<pre>${escapeHTML(text)}</pre>`,
      text
    );
}

function calculateAge() {
  const value =
    document.getElementById("birthDate").value;

  if (!value) {
    document.getElementById("toolOutput").innerHTML =
      result("Escolha sua data de nascimento.");
    return;
  }

  const birth =
    new Date(`${value}T00:00:00`);

  const today =
    new Date();

  if (birth > today) {
    document.getElementById("toolOutput").innerHTML =
      result("A data não pode estar no futuro.");
    return;
  }

  let years =
    today.getFullYear() -
    birth.getFullYear();

  const birthdayThisYear =
    new Date(
      today.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );

  if (today < birthdayThisYear) {
    years--;
  }

  document.getElementById("toolOutput").innerHTML =
    result(
      `Você tem <strong>${years} anos</strong>.`,
      `${years} anos`
    );
}


/* =========================================================
   CONVERSORES
   ========================================================= */

function genericConvert(
  value,
  from,
  to,
  factors
) {
  return value * factors[from] / factors[to];
}

function convertTemperature() {
  const value =
    Number(
      document.getElementById("tempValue").value
    );

  const from =
    document.getElementById("tempFrom").value;

  const to =
    document.getElementById("tempTo").value;

  if (!Number.isFinite(value)) {
    document.getElementById("toolOutput").innerHTML =
      result("Digite um valor.");
    return;
  }

  let celsius;

  if (from === "c") celsius = value;
  if (from === "f") celsius = (value - 32) * 5 / 9;
  if (from === "k") celsius = value - 273.15;

  let answer;

  if (to === "c") answer = celsius;
  if (to === "f") answer = celsius * 9 / 5 + 32;
  if (to === "k") answer = celsius + 273.15;

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong>${formatNumber(answer)}</strong>`,
      answer
    );
}

function convertLength() {
  const value =
    Number(
      document.getElementById("lengthValue").value
    );

  const from =
    document.getElementById("lengthFrom").value;

  const to =
    document.getElementById("lengthTo").value;

  const factors = {
    mm: 1,
    cm: 10,
    m: 1000,
    km: 1000000
  };

  const answer =
    genericConvert(value, from, to, factors);

  showConversion(answer);
}

function convertWeight() {
  const value =
    Number(
      document.getElementById("weightValue").value
    );

  const from =
    document.getElementById("weightFrom").value;

  const to =
    document.getElementById("weightTo").value;

  const factors = {
    mg: 1,
    g: 1000,
    kg: 1000000,
    t: 1000000000
  };

  const answer =
    genericConvert(value, from, to, factors);

  showConversion(answer);
}

function convertSpeed() {
  const value =
    Number(
      document.getElementById("speedValue").value
    );

  const from =
    document.getElementById("speedFrom").value;

  const to =
    document.getElementById("speedTo").value;

  const factors = {
    kmh: 1,
    ms: 3.6,
    mph: 1.609344
  };

  const answer =
    genericConvert(value, from, to, factors);

  showConversion(answer);
}

function convertData() {
  const value =
    Number(
      document.getElementById("dataValue").value
    );

  const from =
    document.getElementById("dataFrom").value;

  const to =
    document.getElementById("dataTo").value;

  const factors = {
    b: 1,
    kb: 1024,
    mb: 1024 ** 2,
    gb: 1024 ** 3,
    tb: 1024 ** 4
  };

  const answer =
    genericConvert(value, from, to, factors);

  showConversion(answer);
}

function convertTime() {
  const value =
    Number(
      document.getElementById("timeValue").value
    );

  const from =
    document.getElementById("timeFrom").value;

  const to =
    document.getElementById("timeTo").value;

  const factors = {
    seg: 1,
    min: 60,
    h: 3600,
    d: 86400
  };

  const answer =
    genericConvert(value, from, to, factors);

  showConversion(answer);
}

function convertVolume() {
  const value =
    Number(
      document.getElementById("volumeValue").value
    );

  const from =
    document.getElementById("volumeFrom").value;

  const to =
    document.getElementById("volumeTo").value;

  const factors = {
    ml: 1,
    l: 1000,
    m3: 1000000
  };

  const answer =
    genericConvert(value, from, to, factors);

  showConversion(answer);
}

function convertAngle() {
  const value =
    Number(
      document.getElementById("angleValue").value
    );

  const from =
    document.getElementById("angleFrom").value;

  const to =
    document.getElementById("angleTo").value;

  if (!Number.isFinite(value)) {
    document.getElementById("toolOutput").innerHTML =
      result("Digite um valor.");
    return;
  }

  let answer;

  if (from === to) {
    answer = value;
  } else if (from === "graus") {
    answer = value * Math.PI / 180;
  } else {
    answer = value * 180 / Math.PI;
  }

  showConversion(answer);
}

function showConversion(value) {
  const output =
    document.getElementById("toolOutput");

  if (!Number.isFinite(value)) {
    output.innerHTML =
      result("Digite um valor válido.");
    return;
  }

  output.innerHTML =
    result(
      `<strong>${formatNumber(value)}</strong>`,
      value
    );
}


/* =========================================================
   TEXTO
   ========================================================= */

function countWords() {
  const text =
    document.getElementById("wordText").value.trim();

  const words =
    text
      ? text.split(/\s+/).length
      : 0;

  const chars =
    text.length;

  document.getElementById("toolOutput").innerHTML =
    result(`
      Palavras: <strong>${words}</strong><br>
      Caracteres: <strong>${chars}</strong>
    `, `${words} palavras | ${chars} caracteres`);
}

function toUpper() {
  const input =
    document.getElementById("caseText");

  const text =
    input.value.toUpperCase();

  input.value = text;

  document.getElementById("toolOutput").innerHTML =
    result(text, text);
}

function toLower() {
  const input =
    document.getElementById("caseText");

  const text =
    input.value.toLowerCase();

  input.value = text;

  document.getElementById("toolOutput").innerHTML =
    result(text, text);
}

function removeSpaces() {
  const input =
    document.getElementById("spaceText");

  const text =
    input.value
      .replace(/\s+/g, " ")
      .trim();

  input.value = text;

  document.getElementById("toolOutput").innerHTML =
    result(text, text);
}

function reverseText() {
  const text =
    document.getElementById("reverseText").value;

  const reversed =
    [...text].reverse().join("");

  document.getElementById("toolOutput").innerHTML =
    result(reversed, reversed);
}

function countCharacters() {
  const text =
    document.getElementById("charText").value;

  const withSpaces =
    text.length;

  const withoutSpaces =
    text.replace(/\s/g, "").length;

  document.getElementById("toolOutput").innerHTML =
    result(`
      Com espaços: <strong>${withSpaces}</strong><br>
      Sem espaços: <strong>${withoutSpaces}</strong>
    `, `${withSpaces} | ${withoutSpaces}`);
}

function countLines() {
  const text =
    document.getElementById("lineText").value;

  const lines =
    text
      ? text.split(/\r?\n/).length
      : 0;

  document.getElementById("toolOutput").innerHTML =
    result(
      `Linhas: <strong>${lines}</strong>`,
      lines
    );
}

function generateSlug() {
  const text =
    document.getElementById("slugText").value;

  const slug =
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong>${escapeHTML(slug)}</strong>`,
      slug
    );
}


/* =========================================================
   CRONÔMETRO
   ========================================================= */

function formatStopwatch(seconds) {
  const h =
    Math.floor(seconds / 3600);

  const m =
    Math.floor((seconds % 3600) / 60);

  const s =
    seconds % 60;

  return [
    h,
    m,
    s
  ]
    .map(value =>
      String(value).padStart(2, "0")
    )
    .join(":");
}

function updateStopwatch() {
  const display =
    document.getElementById(
      "stopwatchDisplay"
    );

  if (display) {
    display.textContent =
      formatStopwatch(stopwatchSeconds);
  }
}

function startStopwatch() {
  if (stopwatchInterval) return;

  stopwatchInterval =
    setInterval(() => {
      stopwatchSeconds++;
      updateStopwatch();
    }, 1000);
}

function pauseStopwatch() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
}

function resetStopwatch() {
  pauseStopwatch();

  stopwatchSeconds = 0;

  updateStopwatch();
}


/* =========================================================
   TIMER
   ========================================================= */

function updateTimer() {
  const display =
    document.getElementById("timerDisplay");

  if (!display) return;

  const minutes =
    Math.floor(timerSeconds / 60);

  const seconds =
    timerSeconds % 60;

  display.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (timerInterval) return;

  if (timerSeconds <= 0) {
    const minutes =
      Number(
        document.getElementById("timerMinutes").value
      );

    if (!Number.isFinite(minutes) || minutes <= 0) {
      showToast("Digite um tempo válido.");
      return;
    }

    timerSeconds =
      Math.round(minutes * 60);
  }

  timerInterval =
    setInterval(() => {
      timerSeconds--;

      updateTimer();

      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;

        showToast("Tempo encerrado!");
      }
    }, 1000);
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  pauseTimer();

  const minutes =
    Number(
      document.getElementById("timerMinutes").value
    );

  timerSeconds =
    Number.isFinite(minutes) && minutes > 0
      ? Math.round(minutes * 60)
      : 0;

  updateTimer();
}


/* =========================================================
   POMODORO
   ========================================================= */

function updatePomodoro() {
  const display =
    document.getElementById(
      "pomodoroDisplay"
    );

  if (!display) return;

  const minutes =
    Math.floor(pomodoroSeconds / 60);

  const seconds =
    pomodoroSeconds % 60;

  display.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startPomodoro() {
  if (pomodoroInterval) return;

  pomodoroRunning = true;

  pomodoroInterval =
    setInterval(() => {
      pomodoroSeconds--;

      updatePomodoro();

      if (pomodoroSeconds <= 0) {
        clearInterval(pomodoroInterval);
        pomodoroInterval = null;

        pomodoroRunning = false;

        showToast("Ciclo concluído!");
      }
    }, 1000);
}

function pausePomodoro() {
  if (pomodoroInterval) {
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
  }

  pomodoroRunning = false;
}

function resetPomodoro() {
  pausePomodoro();

  pomodoroSeconds =
    25 * 60;

  updatePomodoro();
}


/* =========================================================
   DATAS
   ========================================================= */

function calculateDays() {
  const date1 =
    document.getElementById("date1").value;

  const date2 =
    document.getElementById("date2").value;

  if (!date1 || !date2) {
    document.getElementById("toolOutput").innerHTML =
      result("Escolha as duas datas.");
    return;
  }

  const d1 =
    new Date(`${date1}T00:00:00`);

  const d2 =
    new Date(`${date2}T00:00:00`);

  const difference =
    Math.abs(
      d2.getTime() - d1.getTime()
    );

  const days =
    Math.round(
      difference / 86400000
    );

  document.getElementById("toolOutput").innerHTML =
    result(
      `Diferença: <strong>${days} dias</strong>`,
      days
    );
}


/* =========================================================
   NOTAS
   ========================================================= */

function saveNotes() {
  const textareaElement =
    document.getElementById("notesText");

  notes =
    textareaElement.value;

  saveData();

  showToast("Notas salvas!");
}

function clearNotes() {
  notes = "";

  saveData();

  const textareaElement =
    document.getElementById("notesText");

  if (textareaElement) {
    textareaElement.value = "";
  }

  showToast("Notas apagadas.");
}


/* =========================================================
   TAREFAS
   ========================================================= */

function renderTasksTool(container) {
  container.innerHTML = `
    <div class="task-add">
      ${field(
        "newTask",
        "Digite uma tarefa..."
      )}

      <button
        class="primary-button"
        onclick="addTask()"
      >
        Adicionar
      </button>
    </div>

    <div id="taskList"></div>
  `;

  renderTasks();
}

function renderTasks() {
  const list =
    document.getElementById("taskList");

  if (!list) return;

  if (!tasks.length) {
    list.innerHTML = `
      <div class="tool-result">
        Nenhuma tarefa adicionada.
      </div>
    `;

    return;
  }

  list.innerHTML =
    tasks.map((task, index) => `
      <div class="task-item">
        <label>
          <input
            type="checkbox"
            ${task.done ? "checked" : ""}
            onchange="toggleTask(${index})"
          >

          <span class="${task.done ? "done" : ""}">
            ${escapeHTML(task.text)}
          </span>
        </label>

        <button
          class="task-delete"
          onclick="deleteTask(${index})"
        >
          ×
        </button>
      </div>
    `).join("");
}

function addTask() {
  const input =
    document.getElementById("newTask");

  const text =
    input.value.trim();

  if (!text) return;

  tasks.push({
    text,
    done: false
  });

  saveData();

  input.value = "";

  renderTasks();
}

function toggleTask(index) {
  if (!tasks[index]) return;

  tasks[index].done =
    !tasks[index].done;

  saveData();

  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  saveData();

  renderTasks();
}


/* =========================================================
   GERADORES
   ========================================================= */

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (window.crypto && crypto.getRandomValues) {
    const range =
      max - min + 1;

    const array =
      new Uint32Array(1);

    crypto.getRandomValues(array);

    return (
      min +
      (array[0] % range)
    );
  }

  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;
}

function generatePassword() {
  let length =
    Number(
      document.getElementById("passwordLength").value
    );

  if (!Number.isFinite(length)) {
    length = 16;
  }

  length =
    Math.max(
      4,
      Math.min(128, Math.floor(length))
    );

  const upper =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lower =
    "abcdefghijklmnopqrstuvwxyz";

  const numbers =
    "0123456789";

  const symbols =
    "!@#$%^&*()_+-=[]{}";

  let chars =
    lower;

  if (
    document.getElementById("passUpper").checked
  ) {
    chars += upper;
  }

  if (
    document.getElementById("passNumbers").checked
  ) {
    chars += numbers;
  }

  if (
    document.getElementById("passSymbols").checked
  ) {
    chars += symbols;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    password +=
      chars[
        randomInt(0, chars.length - 1)
      ];
  }

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong style="word-break:break-all">${escapeHTML(password)}</strong>`,
      password
    );
}

function generateRandomNumber() {
  const min =
    Number(
      document.getElementById("randomMin").value
    );

  const max =
    Number(
      document.getElementById("randomMax").value
    );

  if (
    !Number.isFinite(min) ||
    !Number.isFinite(max) ||
    min > max
  ) {
    document.getElementById("toolOutput").innerHTML =
      result("Valores inválidos.");
    return;
  }

  const number =
    randomInt(min, max);

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong>${number}</strong>`,
      number
    );
}

function drawName() {
  const text =
    document.getElementById("namesText").value;

  const names =
    text
      .split(/\r?\n/)
      .map(name => name.trim())
      .filter(Boolean);

  if (!names.length) {
    document.getElementById("toolOutput").innerHTML =
      result("Digite pelo menos um nome.");
    return;
  }

  const chosen =
    names[
      randomInt(0, names.length - 1)
    ];

  document.getElementById("toolOutput").innerHTML =
    result(
      `🎉 <strong>${escapeHTML(chosen)}</strong>`,
      chosen
    );
}

function flipCoin() {
  const resultText =
    Math.random() < 0.5
      ? "Cara"
      : "Coroa";

  const coin =
    document.getElementById("coinDisplay");

  if (coin) {
    coin.textContent =
      resultText === "Cara"
        ? "🪙"
        : "🔵";
  }

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong>${resultText}</strong>`,
      resultText
    );
}

function rollDice() {
  const number =
    randomInt(1, 6);

  const faces = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
  ];

  const display =
    document.getElementById("diceDisplay");

  if (display) {
    display.textContent =
      faces[number - 1];
  }

  document.getElementById("toolOutput").innerHTML =
    result(
      `Resultado: <strong>${number}</strong>`,
      number
    );
}

function generateCode() {
  let length =
    Number(
      document.getElementById("codeLength").value
    );

  if (!Number.isFinite(length)) {
    length = 8;
  }

  length =
    Math.max(
      1,
      Math.min(100, Math.floor(length))
    );

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code = "";

  for (let i = 0; i < length; i++) {
    code +=
      chars[
        randomInt(0, chars.length - 1)
      ];
  }

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong>${code}</strong>`,
      code
    );
}

function generateQR() {
  const text =
    document.getElementById("qrText").value.trim();

  if (!text) {
    document.getElementById("toolOutput").innerHTML =
      result("Digite um texto ou link.");
    return;
  }

  const url =
    `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(text)}`;

  document.getElementById("toolOutput").innerHTML = `
    <div class="tool-result">
      <img
        src="${url}"
        alt="QR Code"
        style="
          width:240px;
          max-width:100%;
          border-radius:14px;
          background:white;
          padding:10px;
        "
      >

      <button
        class="copy-result"
        onclick="copyText('${escapeHTML(text).replaceAll("'", "\\'")}')"
      >
        Copiar conteúdo
      </button>
    </div>
  `;
}

function generateColor() {
  const number =
    randomInt(
      0,
      0xFFFFFF
    );

  const hex =
    `#${number
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()}`;

  const preview =
    document.getElementById("colorPreview");

  if (preview) {
    preview.style.background =
      hex;

    preview.textContent =
      hex;
  }

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong>${hex}</strong>`,
      hex
    );
}

function generateLorem() {
  let paragraphs =
    Number(
      document.getElementById("loremParagraphs").value
    );

  if (!Number.isFinite(paragraphs)) {
    paragraphs = 2;
  }

  paragraphs =
    Math.max(
      1,
      Math.min(10, Math.floor(paragraphs))
    );

  const base =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, neque sed consequat tincidunt, justo erat tincidunt libero, vitae tincidunt massa lorem vitae erat. Praesent posuere, nisl at consequat tincidunt, lorem ipsum tincidunt justo, vitae aliquam neque libero sed massa.";

  const text =
    Array.from(
      { length: paragraphs },
      () => base
    ).join("\n\n");

  document.getElementById("toolOutput").innerHTML =
    result(
      `<div style="white-space:pre-wrap;text-align:left">${escapeHTML(text)}</div>`,
      text
    );
}

function generateUUID() {
  let uuid;

  if (
    crypto &&
    typeof crypto.randomUUID === "function"
  ) {
    uuid =
      crypto.randomUUID();
  } else {
    uuid =
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
        .replace(/[xy]/g, char => {
          const r =
            Math.random() * 16 | 0;

          const v =
            char === "x"
              ? r
              : (r & 0x3 | 0x8);

          return v.toString(16);
        });
  }

  document.getElementById("toolOutput").innerHTML =
    result(
      `<strong>${uuid}</strong>`,
      uuid
    );
}


/* =========================================================
   TEMA
   ========================================================= */

function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "nexoTheme",
    isDark ? "dark" : "light"
  );
}

function loadTheme() {
  const theme =
    localStorage.getItem("nexoTheme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  }
}


/* =========================================================
   SIDEBAR MOBILE
   ========================================================= */

function toggleSidebar() {
  const sidebar =
    document.querySelector(".sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle("open");
}


/* =========================================================
   ENTER AUTOMÁTICO
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {
    if (
      event.key !== "Enter" ||
      event.target.tagName === "TEXTAREA"
    ) {
      return;
    }

    const primary =
      modalContent.querySelector(
        "#toolPrimary"
      );

    if (
      primary &&
      modal.classList.contains("active")
    ) {
      primary.click();
    }
  }
);


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

loadTheme();

render();

updateToolCount(tools.length);
