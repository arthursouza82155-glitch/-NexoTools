/* =========================================================
   NEXOTOOLS 4.0
   SISTEMA COMPLETO
   ========================================================= */

const tools = [

  /* ================= MATEMÁTICA ================= */

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
    description: "Calcule a média de vários números."
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
    name: "Área geométrica",
    icon: "▱",
    category: "Matemática",
    description: "Calcule áreas."
  },

  {
    id: "tabuada",
    name: "Tabuada",
    icon: "✖️",
    category: "Matemática",
    description: "Gere uma tabuada completa."
  },

  {
    id: "idade",
    name: "Calculadora de idade",
    icon: "🎂",
    category: "Matemática",
    description: "Descubra sua idade."
  },


  /* ================= CONVERSORES ================= */

  {
    id: "temperatura",
    name: "Temperatura",
    icon: "🌡️",
    category: "Conversores",
    description: "Celsius, Fahrenheit e Kelvin."
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
    description: "Converta velocidades."
  },

  {
    id: "dados",
    name: "Dados digitais",
    icon: "💾",
    category: "Conversores",
    description: "Converta bytes, KB, MB e GB."
  },

  {
    id: "tempo",
    name: "Tempo",
    icon: "⏱️",
    category: "Conversores",
    description: "Converta segundos, minutos, horas e dias."
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


  /* ================= TEXTO ================= */

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
    description: "Altere o formato do texto."
  },

  {
    id: "espacos",
    name: "Limpar espaços",
    icon: "↔️",
    category: "Texto",
    description: "Remova espaços desnecessários."
  },

  {
    id: "inverter",
    name: "Inverter texto",
    icon: "↔",
    category: "Texto",
    description: "Inverta seu texto."
  },

  {
    id: "caracteres",
    name: "Contador de caracteres",
    icon: "🔢",
    category: "Texto",
    description: "Conte caracteres."
  },

  {
    id: "linhas",
    name: "Contador de linhas",
    icon: "☰",
    category: "Texto",
    description: "Conte linhas do texto."
  },

  {
    id: "slug",
    name: "Gerador de slug",
    icon: "🔗",
    category: "Texto",
    description: "Transforme textos em URLs."
  },

  {
    id: "duplicados",
    name: "Remover duplicados",
    icon: "🧹",
    category: "Texto",
    description: "Remova linhas repetidas."
  },


  /* ================= PRODUTIVIDADE ================= */

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
    description: "Faça uma contagem regressiva."
  },

  {
    id: "pomodoro",
    name: "Pomodoro",
    icon: "🍅",
    category: "Produtividade",
    description: "Estude em ciclos de foco."
  },

  {
    id: "dias",
    name: "Diferença de datas",
    icon: "📅",
    category: "Produtividade",
    description: "Descubra quantos dias existem entre datas."
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


  /* ================= GERADORES ================= */

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
    description: "Sorteie um número."
  },

  {
    id: "nomes",
    name: "Sorteador de nomes",
    icon: "👥",
    category: "Geradores",
    description: "Sorteie um nome."
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
    name: "Gerador de código",
    icon: "🔢",
    category: "Geradores",
    description: "Gere códigos aleatórios."
  },

  {
    id: "qrcode",
    name: "QR Code",
    icon: "▦",
    category: "Geradores",
    description: "Crie QR Codes."
  },

  {
    id: "cores",
    name: "Gerador de cores",
    icon: "🎨",
    category: "Geradores",
    description: "Gere cores HEX."
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
    name: "Gerador de UUID",
    icon: "🆔",
    category: "Geradores",
    description: "Gere identificadores únicos."
  }

];


/* =========================================================
   ESTADO
   ========================================================= */

let favorites =
  JSON.parse(localStorage.getItem("nexoFavorites") || "[]");

let recent =
  JSON.parse(localStorage.getItem("nexoRecent") || "[]");

let notes =
  localStorage.getItem("nexoNotes") || "";

let tasks =
  JSON.parse(localStorage.getItem("nexoTasks") || "[]");

let currentCategory = "Todas";
let currentMode = "home";

let stopwatchInterval = null;
let stopwatchSeconds = 0;

let timerInterval = null;
let timerSeconds = 0;

let pomodoroInterval = null;
let pomodoroSeconds = 25 * 60;

let lastCopyText = "";


/* =========================================================
   ELEMENTOS
   ========================================================= */

const grid =
  document.getElementById("toolsGrid");

const empty =
  document.getElementById("empty");

const modal =
  document.getElementById("modal");

const modalContent =
  document.getElementById("modalContent");

const searchInput =
  document.getElementById("searchInput");


/* =========================================================
   FUNÇÕES BÁSICAS
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


function getTool(id) {
  return tools.find(tool => tool.id === id);
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

  if (!Number.isFinite(Number(value))) {
    return "0";
  }

  return Number(value).toLocaleString(
    "pt-BR",
    {
      maximumFractionDigits: 10
    }
  );
}


function field(
  id,
  placeholder = "",
  type = "text",
  value = ""
) {

  return `
    <input
      id="${id}"
      class="tool-input"
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
      id="${id}"
      class="tool-textarea"
      placeholder="${placeholder}"
    >${escapeHTML(value)}</textarea>
  `;
}


function select(id, options) {

  return `
    <select id="${id}" class="tool-input">

      ${options.map(option => `
        <option value="${option.value}">
          ${option.label}
        </option>
      `).join("")}

    </select>
  `;
}


function result(value, copyValue = null) {

  lastCopyText =
    copyValue !== null
      ? String(copyValue)
      : String(value)
          .replace(/<[^>]*>/g, "");

  return `
    <div class="tool-result">

      <div class="result-value">
        ${value}
      </div>

      <button
        class="copy-result"
        onclick="copyLastResult()"
      >
        Copiar
      </button>

    </div>
  `;
}


function actionButtons(text = "Calcular") {

  return `
    <div class="tool-actions">

      <button
        id="toolPrimary"
        class="primary-button"
      >
        ${text}
      </button>

      <button
        class="secondary-button"
        onclick="clearToolFields()"
      >
        Limpar
      </button>

    </div>
  `;
}


/* =========================================================
   FAVORITOS
   ========================================================= */

function isFavorite(id) {

  return favorites.includes(id);
}


function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        item => item !== id
      );

  } else {

    favorites.push(id);

  }

  saveData();
  render();
}


/* =========================================================
   RECENTES
   ========================================================= */

function addRecent(id) {

  recent =
    recent.filter(
      item => item !== id
    );

  recent.unshift(id);

  recent =
    recent.slice(0, 15);

  saveData();
}


/* =========================================================
   CARDS
   ========================================================= */

function renderTools(list) {

  grid.innerHTML = "";

  if (!list.length) {

    empty.style.display = "block";

    updateCount(0);

    return;
  }

  empty.style.display = "none";

  list.forEach(tool => {

    const card =
      document.createElement("article");

    card.className =
      "tool-card";

    card.innerHTML = `

      <button
        class="favorite-button ${
          isFavorite(tool.id)
            ? "active"
            : ""
        }"
        onclick="
          event.stopPropagation();
          toggleFavorite('${tool.id}')
        "
      >
        ${
          isFavorite(tool.id)
            ? "★"
            : "☆"
        }
      </button>

      <div
        class="tool-card-click"
        onclick="openTool('${tool.id}')"
      >

        <div class="tool-icon">
          ${tool.icon}
        </div>

        <span class="tool-category">
          ${tool.category}
        </span>

        <h3>
          ${tool.name}
        </h3>

        <p>
          ${tool.description}
        </p>

        <span class="tool-open">
          Abrir ferramenta →
        </span>

      </div>
    `;

    grid.appendChild(card);

  });

  updateCount(list.length);
}


/* =========================================================
   CONTADORES DA INTERFACE
   ========================================================= */

function updateCount(number) {

  const count =
    document.getElementById("toolCount");

  if (count) {

    count.textContent =
      `${number} ${
        number === 1
          ? "ferramenta"
          : "ferramentas"
      }`;

  }

  const hero =
    document.querySelector(
      ".hero-info strong"
    );

  if (hero) {

    hero.textContent =
      `${tools.length}+`;

  }

  const stats =
    document.querySelectorAll(
      ".stat-card strong"
    );

  if (stats[2]) {

    stats[2].textContent =
      `${tools.length}+ ferramentas`;

  }
}


/* =========================================================
   RENDER
   ========================================================= */

function render() {

  let list = [...tools];

  if (currentMode === "favorites") {

    list =
      tools.filter(tool =>
        favorites.includes(tool.id)
      );

  }

  if (currentMode === "recent") {

    list =
      recent
        .map(id => getTool(id))
        .filter(Boolean);

  }

  if (currentCategory !== "Todas") {

    list =
      list.filter(
        tool =>
          tool.category ===
          currentCategory
      );

  }

  const search =
    searchInput
      ? searchInput.value
          .trim()
          .toLowerCase()
      : "";

  if (search) {

    list =
      list.filter(tool =>
        `${tool.name}
         ${tool.description}
         ${tool.category}`
          .toLowerCase()
          .includes(search)
      );

  }

  renderTools(list);

  updateCategoryButtons();
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

  document.getElementById(
    "sectionTitle"
  ).textContent =
    "Todas as ferramentas";

  render();

  scrollToTools();
}


function showFavorites() {

  currentMode = "favorites";
  currentCategory = "Todas";

  document.getElementById(
    "sectionTitle"
  ).textContent =
    "Meus favoritos";

  render();

  scrollToTools();
}


function showRecent() {

  currentMode = "recent";
  currentCategory = "Todas";

  document.getElementById(
    "sectionTitle"
  ).textContent =
    "Usadas recentemente";

  render();

  scrollToTools();
}


function filterCategory(category) {

  currentMode = "home";

  currentCategory =
    category;

  document.getElementById(
    "sectionTitle"
  ).textContent =
    category === "Todas"
      ? "Todas as ferramentas"
      : category;

  render();

  scrollToTools();
}


function updateCategoryButtons() {

  document
    .querySelectorAll(".category")
    .forEach(button => {

      button.classList.remove(
        "active"
      );

      if (
        button.textContent.trim() ===
        currentCategory
      ) {

        button.classList.add(
          "active"
        );

      }

    });
}


function searchTools() {

  currentMode = "home";

  currentCategory =
    "Todas";

  document.getElementById(
    "sectionTitle"
  ).textContent =
    "Resultados da pesquisa";

  render();
}


function scrollToTools() {

  const section =
    document.getElementById(
      "toolsSection"
    );

  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }
}


/* =========================================================
   MODAL
   ========================================================= */

function openTool(id) {

  const tool =
    getTool(id);

  if (!tool) return;

  addRecent(id);

  modalContent.innerHTML = `

    <div class="modal-tool-header">

      <div class="modal-tool-icon">
        ${tool.icon}
      </div>

      <div>

        <span>
          ${tool.category}
        </span>

        <h2>
          ${tool.name}
        </h2>

        <p>
          ${tool.description}
        </p>

      </div>

    </div>

    <div id="toolInterface"></div>

  `;

  modal.classList.add(
    "active"
  );

  createTool(id);

  setTimeout(() => {

    const first =
      modalContent.querySelector(
        "input, textarea, select"
      );

    if (first) {
      first.focus();
    }

  }, 100);
}


function closeTool() {

  stopTimers();

  modal.classList.remove(
    "active"
  );

  modalContent.innerHTML = "";
}


modal.addEventListener(
  "click",
  event => {

    if (
      event.target === modal
    ) {
      closeTool();
    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {
      closeTool();
    }

  }
);


/* =========================================================
   LIMPAR / COPIAR
   ========================================================= */

function clearToolFields() {

  modalContent
    .querySelectorAll(
      "input, textarea"
    )
    .forEach(element => {

      if (
        element.type ===
        "checkbox"
      ) {

        element.checked =
          false;

      } else {

        element.value = "";

      }

    });

  modalContent
    .querySelectorAll(
      ".tool-result"
    )
    .forEach(element =>
      element.remove()
    );

  lastCopyText = "";
}


async function copyText(text) {

  try {

    await navigator.clipboard
      .writeText(String(text));

    showToast(
      "Copiado!"
    );

  } catch {

    const temporary =
      document.createElement(
        "textarea"
      );

    temporary.value =
      String(text);

    document.body.appendChild(
      temporary
    );

    temporary.select();

    document.execCommand(
      "copy"
    );

    temporary.remove();

    showToast(
      "Copiado!"
    );

  }
}


function copyLastResult() {

  if (lastCopyText) {

    copyText(
      lastCopyText
    );

  }
}


function showToast(message) {

  const old =
    document.querySelector(
      ".nexo-toast"
    );

  if (old) {
    old.remove();
  }

  const toast =
    document.createElement(
      "div"
    );

  toast.className =
    "nexo-toast";

  toast.textContent =
    message;

  toast.style.cssText = `
    position:fixed;
    left:50%;
    bottom:28px;
    transform:translateX(-50%);
    z-index:99999;
    padding:12px 20px;
    border-radius:14px;
    background:#111827;
    color:white;
    font-weight:700;
    box-shadow:0 15px 40px rgba(0,0,0,.25);
  `;

  document.body.appendChild(
    toast
  );

  setTimeout(
    () => toast.remove(),
    1800
  );
}


/* =========================================================
   CRIAÇÃO DAS FERRAMENTAS
   ========================================================= */

function createTool(id) {

  const box =
    document.getElementById(
      "toolInterface"
    );

  if (!box) return;


  /* CALCULADORA */

  if (id === "calculadora") {

    box.innerHTML = `
      ${field(
        "calc",
        "Ex.: 25 * 4 + 10"
      )}

      ${actionButtons(
        "Calcular"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculate;

    return;
  }


  /* PORCENTAGEM */

  if (id === "porcentagem") {

    box.innerHTML = `
      ${field(
        "pValue",
        "Valor",
        "number"
      )}

      ${field(
        "pPercent",
        "Porcentagem",
        "number"
      )}

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculatePercentage;

    return;
  }


  /* DESCONTO */

  if (id === "desconto") {

    box.innerHTML = `
      ${field(
        "discountPrice",
        "Preço",
        "number"
      )}

      ${field(
        "discountPercent",
        "Desconto (%)",
        "number"
      )}

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateDiscount;

    return;
  }


  /* JUROS */

  if (id === "juros") {

    box.innerHTML = `
      ${field(
        "jPrincipal",
        "Capital",
        "number"
      )}

      ${field(
        "jRate",
        "Taxa (%)",
        "number"
      )}

      ${field(
        "jTime",
        "Tempo",
        "number"
      )}

      ${select(
        "jUnit",
        [
          {
            value:"meses",
            label:"Meses"
          },
          {
            value:"anos",
            label:"Anos"
          }
        ]
      )}

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateInterest;

    return;
  }


  /* REGRA DE 3 */

  if (id === "regra") {

    box.innerHTML = `
      ${field(
        "ruleA",
        "A",
        "number"
      )}

      ${field(
        "ruleB",
        "B",
        "number"
      )}

      ${field(
        "ruleC",
        "C",
        "number"
      )}

      <p class="tool-help">
        A está para B assim como C está para X.
      </p>

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateRule;

    return;
  }


  /* MÉDIA */

  if (id === "media") {

    box.innerHTML = `
      ${textarea(
        "averageText",
        "Ex.: 7, 8, 9, 10"
      )}

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateAverage;

    return;
  }


  /* MÉDIA ESCOLAR */

  if (id === "mediaEscolar") {

    box.innerHTML = `
      ${field(
        "grade1",
        "Nota 1",
        "number"
      )}

      ${field(
        "grade2",
        "Nota 2",
        "number"
      )}

      ${field(
        "grade3",
        "Nota 3",
        "number"
      )}

      ${field(
        "grade4",
        "Nota 4",
        "number"
      )}

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateSchoolAverage;

    return;
  }


  /* POTÊNCIA */

  if (id === "potencia") {

    box.innerHTML = `
      ${field(
        "powerBase",
        "Base",
        "number"
      )}

      ${field(
        "powerExponent",
        "Expoente",
        "number"
      )}

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculatePower;

    return;
  }


  /* RAIZ */

  if (id === "raiz") {

    box.innerHTML = `
      ${field(
        "rootValue",
        "Número",
        "number"
      )}

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateRoot;

    return;
  }


  /* ÁREA */

  if (id === "area") {

    box.innerHTML = `
      ${select(
        "areaType",
        [
          {
            value:"quadrado",
            label:"Quadrado"
          },
          {
            value:"retangulo",
            label:"Retângulo"
          },
          {
            value:"triangulo",
            label:"Triângulo"
          },
          {
            value:"circulo",
            label:"Círculo"
          }
        ]
      )}

      ${field(
        "areaA",
        "Medida 1",
        "number"
      )}

      ${field(
        "areaB",
        "Medida 2",
        "number"
      )}

      ${actionButtons()}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateArea;

    return;
  }


  /* TABUADA */

  if (id === "tabuada") {

    box.innerHTML = `
      ${field(
        "tableNumber",
        "Número",
        "number"
      )}

      ${field(
        "tableStart",
        "Começar em",
        "number",
        1
      )}

      ${field(
        "tableEnd",
        "Terminar em",
        "number",
        10
      )}

      ${actionButtons(
        "Gerar tabuada"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      generateTable;

    return;
  }


  /* IDADE */

  if (id === "idade") {

    box.innerHTML = `
      <label class="tool-label">
        Data de nascimento
      </label>

      ${field(
        "birthDate",
        "",
        "date"
      )}

      ${actionButtons(
        "Calcular idade"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateAge;

    return;
  }


  /* TEMPERATURA */

  if (id === "temperatura") {

    box.innerHTML = `
      ${field(
        "temperatureValue",
        "Valor",
        "number"
      )}

      ${select(
        "temperatureFrom",
        [
          {
            value:"c",
            label:"Celsius"
          },
          {
            value:"f",
            label:"Fahrenheit"
          },
          {
            value:"k",
            label:"Kelvin"
          }
        ]
      )}

      ${select(
        "temperatureTo",
        [
          {
            value:"c",
            label:"Celsius"
          },
          {
            value:"f",
            label:"Fahrenheit"
          },
          {
            value:"k",
            label:"Kelvin"
          }
        ]
      )}

      ${actionButtons(
        "Converter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      convertTemperature;

    return;
  }


  /* COMPRIMENTO */

  if (id === "comprimento") {

    box.innerHTML = `
      ${field(
        "lengthValue",
        "Valor",
        "number"
      )}

      ${select(
        "lengthFrom",
        [
          {
            value:"mm",
            label:"Milímetros"
          },
          {
            value:"cm",
            label:"Centímetros"
          },
          {
            value:"m",
            label:"Metros"
          },
          {
            value:"km",
            label:"Quilômetros"
          }
        ]
      )}

      ${select(
        "lengthTo",
        [
          {
            value:"mm",
            label:"Milímetros"
          },
          {
            value:"cm",
            label:"Centímetros"
          },
          {
            value:"m",
            label:"Metros"
          },
          {
            value:"km",
            label:"Quilômetros"
          }
        ]
      )}

      ${actionButtons(
        "Converter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      convertLength;

    return;
  }


  /* PESO */

  if (id === "peso") {

    box.innerHTML = `
      ${field(
        "weightValue",
        "Valor",
        "number"
      )}

      ${select(
        "weightFrom",
        [
          {
            value:"mg",
            label:"Miligramas"
          },
          {
            value:"g",
            label:"Gramas"
          },
          {
            value:"kg",
            label:"Quilogramas"
          },
          {
            value:"t",
            label:"Toneladas"
          }
        ]
      )}

      ${select(
        "weightTo",
        [
          {
            value:"mg",
            label:"Miligramas"
          },
          {
            value:"g",
            label:"Gramas"
          },
          {
            value:"kg",
            label:"Quilogramas"
          },
          {
            value:"t",
            label:"Toneladas"
          }
        ]
      )}

      ${actionButtons(
        "Converter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      convertWeight;

    return;
  }


  /* VELOCIDADE */

  if (id === "velocidade") {

    box.innerHTML = `
      ${field(
        "speedValue",
        "Valor",
        "number"
      )}

      ${select(
        "speedFrom",
        [
          {
            value:"kmh",
            label:"km/h"
          },
          {
            value:"ms",
            label:"m/s"
          },
          {
            value:"mph",
            label:"mph"
          }
        ]
      )}

      ${select(
        "speedTo",
        [
          {
            value:"kmh",
            label:"km/h"
          },
          {
            value:"ms",
            label:"m/s"
          },
          {
            value:"mph",
            label:"mph"
          }
        ]
      )}

      ${actionButtons(
        "Converter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      convertSpeed;

    return;
  }


  /* DADOS */

  if (id === "dados") {

    box.innerHTML = `
      ${field(
        "dataValue",
        "Valor",
        "number"
      )}

      ${select(
        "dataFrom",
        [
          {
            value:"b",
            label:"Bytes"
          },
          {
            value:"kb",
            label:"KB"
          },
          {
            value:"mb",
            label:"MB"
          },
          {
            value:"gb",
            label:"GB"
          },
          {
            value:"tb",
            label:"TB"
          }
        ]
      )}

      ${select(
        "dataTo",
        [
          {
            value:"b",
            label:"Bytes"
          },
          {
            value:"kb",
            label:"KB"
          },
          {
            value:"mb",
            label:"MB"
          },
          {
            value:"gb",
            label:"GB"
          },
          {
            value:"tb",
            label:"TB"
          }
        ]
      )}

      ${actionButtons(
        "Converter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      convertData;

    return;
  }


  /* TEMPO */

  if (id === "tempo") {

    box.innerHTML = `
      ${field(
        "timeValue",
        "Valor",
        "number"
      )}

      ${select(
        "timeFrom",
        [
          {
            value:"seg",
            label:"Segundos"
          },
          {
            value:"min",
            label:"Minutos"
          },
          {
            value:"h",
            label:"Horas"
          },
          {
            value:"d",
            label:"Dias"
          }
        ]
      )}

      ${select(
        "timeTo",
        [
          {
            value:"seg",
            label:"Segundos"
          },
          {
            value:"min",
            label:"Minutos"
          },
          {
            value:"h",
            label:"Horas"
          },
          {
            value:"d",
            label:"Dias"
          }
        ]
      )}

      ${actionButtons(
        "Converter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      convertTime;

    return;
  }


  /* VOLUME */

  if (id === "volume") {

    box.innerHTML = `
      ${field(
        "volumeValue",
        "Valor",
        "number"
      )}

      ${select(
        "volumeFrom",
        [
          {
            value:"ml",
            label:"Mililitros"
          },
          {
            value:"l",
            label:"Litros"
          },
          {
            value:"m3",
            label:"Metros cúbicos"
          }
        ]
      )}

      ${select(
        "volumeTo",
        [
          {
            value:"ml",
            label:"Mililitros"
          },
          {
            value:"l",
            label:"Litros"
          },
          {
            value:"m3",
            label:"Metros cúbicos"
          }
        ]
      )}

      ${actionButtons(
        "Converter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      convertVolume;

    return;
  }


  /* ÂNGULO */

  if (id === "angulo") {

    box.innerHTML = `
      ${field(
        "angleValue",
        "Valor",
        "number"
      )}

      ${select(
        "angleFrom",
        [
          {
            value:"deg",
            label:"Graus"
          },
          {
            value:"rad",
            label:"Radianos"
          }
        ]
      )}

      ${select(
        "angleTo",
        [
          {
            value:"deg",
            label:"Graus"
          },
          {
            value:"rad",
            label:"Radianos"
          }
        ]
      )}

      ${actionButtons(
        "Converter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      convertAngle;

    return;
  }


  /* PALAVRAS */

  if (id === "palavras") {

    box.innerHTML = `
      ${textarea(
        "wordText",
        "Digite ou cole seu texto..."
      )}

      ${actionButtons(
        "Contar"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      countWords;

    return;
  }


  /* MAIÚSCULAS */

  if (id === "maiusculas") {

    box.innerHTML = `
      ${textarea(
        "caseText",
        "Digite seu texto..."
      )}

      <div class="tool-actions">

        <button
          class="primary-button"
          onclick="toUpperCaseText()"
        >
          MAIÚSCULAS
        </button>

        <button
          class="secondary-button"
          onclick="toLowerCaseText()"
        >
          minúsculas
        </button>

      </div>

      <div id="toolOutput"></div>
    `;

    return;
  }


  /* ESPAÇOS */

  if (id === "espacos") {

    box.innerHTML = `
      ${textarea(
        "spaceText",
        "Digite seu texto..."
      )}

      ${actionButtons(
        "Limpar espaços"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      removeExtraSpaces;

    return;
  }


  /* INVERTER */

  if (id === "inverter") {

    box.innerHTML = `
      ${textarea(
        "reverseText",
        "Digite seu texto..."
      )}

      ${actionButtons(
        "Inverter"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      reverseText;

    return;
  }


  /* CARACTERES */

  if (id === "caracteres") {

    box.innerHTML = `
      ${textarea(
        "characterText",
        "Digite seu texto..."
      )}

      ${actionButtons(
        "Contar"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      countCharacters;

    return;
  }


  /* LINHAS */

  if (id === "linhas") {

    box.innerHTML = `
      ${textarea(
        "lineText",
        "Digite seu texto..."
      )}

      ${actionButtons(
        "Contar linhas"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      countLines;

    return;
  }


  /* SLUG */

  if (id === "slug") {

    box.innerHTML = `
      ${field(
        "slugText",
        "Ex.: Meu novo artigo"
      )}

      ${actionButtons(
        "Gerar slug"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      generateSlug;

    return;
  }


  /* DUPLICADOS */

  if (id === "duplicados") {

    box.innerHTML = `
      ${textarea(
        "duplicateText",
        "Digite uma linha por item..."
      )}

      ${actionButtons(
        "Remover duplicados"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      removeDuplicates;

    return;
  }


  /* CRONÔMETRO */

  if (id === "cronometro") {

    box.innerHTML = `
      <div
        class="big-timer"
        id="stopwatchDisplay"
      >
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

    return;
  }


  /* TIMER */

  if (id === "timer") {

    box.innerHTML = `
      ${field(
        "timerMinutes",
        "Minutos",
        "number",
        5
      )}

      <div
        class="big-timer"
        id="timerDisplay"
      >
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

    return;
  }


  /* POMODORO */

  if (id === "pomodoro") {

    box.innerHTML = `
      <div
        class="pomodoro-status"
      >
        Foco
      </div>

      <div
        class="big-timer"
        id="pomodoroDisplay"
      >
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

    return;
  }


  /* DATAS */

  if (id === "dias") {

    box.innerHTML = `
      <label class="tool-label">
        Data inicial
      </label>

      ${field(
        "dateStart",
        "",
        "date"
      )}

      <label class="tool-label">
        Data final
      </label>

      ${field(
        "dateEnd",
        "",
        "date"
      )}

      ${actionButtons(
        "Calcular"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      calculateDays;

    return;
  }


  /* NOTAS */

  if (id === "notas") {

    box.innerHTML = `
      ${textarea(
        "notesText",
        "Escreva suas notas...",
        notes
      )}

      <div class="tool-actions">

        <button
          class="primary-button"
          onclick="saveNotes()"
        >
          Salvar
        </button>

        <button
          class="secondary-button"
          onclick="clearNotes()"
        >
          Limpar
        </button>

      </div>
    `;

    return;
  }


  /* TAREFAS */

  if (id === "tarefas") {

    box.innerHTML = `
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

    renderTaskList();

    return;
  }


  /* SENHA */

  if (id === "senha") {

    box.innerHTML = `
      ${field(
        "passwordLength",
        "Tamanho",
        "number",
        16
      )}

      <label class="check-row">
        <input
          type="checkbox"
          id="passwordUpper"
          checked
        >
        Letras maiúsculas
      </label>

      <label class="check-row">
        <input
          type="checkbox"
          id="passwordNumbers"
          checked
        >
        Números
      </label>

      <label class="check-row">
        <input
          type="checkbox"
          id="passwordSymbols"
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

    return;
  }


  /* NÚMERO */

  if (id === "numero") {

    box.innerHTML = `
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

      ${actionButtons(
        "Sortear"
      )}

      <div id="toolOutput"></div>
    `;

    document.getElementById(
      "toolPrimary"
    ).onclick =
      generateRandomNumber;

    return;
  }


  /* NOMES */

  if (id === "nomes") {

    box.innerHTML = `
      ${textarea(
        "namesText",
        "Um nome por linha..."
      )}

      <button
        class="primary-button tool-action"
        onclick="drawName()"
      >
        Sortear nome
      </button>

      <div id="toolOutput"></div>
    `;

    return;
  }


  /* MOEDA */

  if (id === "moeda") {

    box.innerHTML = `
      <div
        id="coinDisplay"
        style="
          font-size:80px;
          text-align:center;
          margin:20px;
        "
      >
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

    return;
  }


  /* DADO */

  if (id === "dado") {

    box.innerHTML = `
      <div
        id="diceDisplay"
        style="
          font-size:80px;
          text-align:center;
          margin:20px;
        "
      >
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

    return;
  }


  /* CÓDIGO */

  if (id === "codigo") {

    box.innerHTML = `
      ${field(
        "codeLength",
        "Tamanho",
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

    return;
  }


  /* QR CODE */

  if (id === "qrcode") {

    box.innerHTML = `
      ${field(
        "qrText",
        "Digite um texto ou link..."
      )}

      <button
        class="primary-button tool-action"
        onclick="generateQRCode()"
      >
        Gerar QR Code
      </button>

      <div id="toolOutput"></div>
    `;

    return;
  }


  /* CORES */

  if (id === "cores") {

    box.innerHTML = `
      <div
        id="colorPreview"
        style="
          height:160px;
          border-radius:20px;
          background:#7C3AED;
          display:flex;
          align-items:center;
          justify-content:center;
          color:white;
          font-size:25px;
          font-weight:800;
          margin-bottom:20px;
        "
      >
        #7C3AED
      </div>

      <button
        class="primary-button tool-action"
        onclick="generateColor()"
      >
        Gerar nova cor
      </button>

      <div id="toolOutput"></div>
    `;

    return;
  }


  /* LOREM */

  if (id === "lorem") {

    box.innerHTML = `
      ${field(
        "loremCount",
        "Parágrafos",
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

    return;
  }


  /* UUID */

  if (id === "uuid") {

    box.innerHTML = `
      <button
        class="primary-button tool-action"
        onclick="generateUUID()"
      >
        Gerar UUID
      </button>

      <div id="toolOutput"></div>
    `;

    return;
  }

}


/* =========================================================
   MATEMÁTICA
   ========================================================= */

function calculate() {

  const input =
    document.getElementById(
      "calc"
    );

  const output =
    document.getElementById(
      "toolOutput"
    );

  const expression =
    input.value.trim();

  if (!expression) {

    output.innerHTML =
      result(
        "Digite uma expressão."
      );

    return;
  }

  if (
    !/^[0-9+\-*/().%\s]+$/
      .test(expression)
  ) {

    output.innerHTML =
      result(
        "Expressão inválida."
      );

    return;
  }

  try {

    const safe =
      expression.replace(
        /(\d+(?:\.\d+)?)%/g,
        "($1/100)"
      );

    const value =
      Function(
        `"use strict";return (${safe})`
      )();

    if (
      !Number.isFinite(value)
    ) {
      throw new Error();
    }

    output.innerHTML =
      result(
        `<strong>${formatNumber(value)}</strong>`,
        value
      );

  } catch {

    output.innerHTML =
      result(
        "Não foi possível calcular."
      );

  }
}


function calculatePercentage() {

  const value =
    Number(
      document.getElementById(
        "pValue"
      ).value
    );

  const percent =
    Number(
      document.getElementById(
        "pPercent"
      ).value
    );

  if (
    !Number.isFinite(value) ||
    !Number.isFinite(percent)
  ) {

    document.getElementById(
      "toolOutput"
    ).innerHTML =
      result(
        "Preencha os campos."
      );

    return;
  }

  const answer =
    value * percent / 100;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `${formatNumber(percent)}% de ${formatNumber(value)} = <strong>${formatNumber(answer)}</strong>`,
      answer
    );
}


function calculateDiscount() {

  const price =
    Number(
      document.getElementById(
        "discountPrice"
      ).value
    );

  const percent =
    Number(
      document.getElementById(
        "discountPercent"
      ).value
    );

  if (
    !Number.isFinite(price) ||
    !Number.isFinite(percent)
  ) return;

  const discount =
    price * percent / 100;

  const total =
    price - discount;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `
      Desconto:
      <strong>R$ ${formatNumber(discount)}</strong>
      <br>
      Preço final:
      <strong>R$ ${formatNumber(total)}</strong>
      `,
      total
    );
}


function calculateInterest() {

  const capital =
    Number(
      document.getElementById(
        "jPrincipal"
      ).value
    );

  const rate =
    Number(
      document.getElementById(
        "jRate"
      ).value
    );

  const time =
    Number(
      document.getElementById(
        "jTime"
      ).value
    );

  const unit =
    document.getElementById(
      "jUnit"
    ).value;

  if (
    !Number.isFinite(capital) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(time)
  ) return;

  const months =
    unit === "anos"
      ? time * 12
      : time;

  const interest =
    capital *
    rate / 100 *
    months;

  const total =
    capital + interest;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `
      Juros:
      <strong>R$ ${formatNumber(interest)}</strong>
      <br>
      Total:
      <strong>R$ ${formatNumber(total)}</strong>
      `,
      total
    );
}


function calculateRule() {

  const a =
    Number(
      document.getElementById(
        "ruleA"
      ).value
    );

  const b =
    Number(
      document.getElementById(
        "ruleB"
      ).value
    );

  const c =
    Number(
      document.getElementById(
        "ruleC"
      ).value
    );

  if (
    !Number.isFinite(a) ||
    !Number.isFinite(b) ||
    !Number.isFinite(c) ||
    a === 0
  ) return;

  const x =
    b * c / a;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `X = <strong>${formatNumber(x)}</strong>`,
      x
    );
}


function calculateAverage() {

  const text =
    document.getElementById(
      "averageText"
    ).value;

  const numbers =
    text
      .split(/[,;\s]+/)
      .map(Number)
      .filter(Number.isFinite);

  if (!numbers.length) {

    document.getElementById(
      "toolOutput"
    ).innerHTML =
      result(
        "Digite números válidos."
      );

    return;
  }

  const average =
    numbers.reduce(
      (sum, value) =>
        sum + value,
      0
    ) / numbers.length;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `Média: <strong>${formatNumber(average)}</strong>`,
      average
    );
}


function calculateSchoolAverage() {

  const ids = [
    "grade1",
    "grade2",
    "grade3",
    "grade4"
  ];

  const grades =
    ids
      .map(id =>
        Number(
          document.getElementById(
            id
          ).value
        )
      )
      .filter(Number.isFinite);

  if (!grades.length) return;

  const average =
    grades.reduce(
      (sum, value) =>
        sum + value,
      0
    ) / grades.length;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `Média: <strong>${formatNumber(average)}</strong>`,
      average
    );
}


function calculatePower() {

  const base =
    Number(
      document.getElementById(
        "powerBase"
      ).value
    );

  const exponent =
    Number(
      document.getElementById(
        "powerExponent"
      ).value
    );

  const answer =
    Math.pow(
      base,
      exponent
    );

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<strong>${formatNumber(answer)}</strong>`,
      answer
    );
}


function calculateRoot() {

  const value =
    Number(
      document.getElementById(
        "rootValue"
      ).value
    );

  if (
    !Number.isFinite(value) ||
    value < 0
  ) {

    document.getElementById(
      "toolOutput"
    ).innerHTML =
      result(
        "Digite um número válido."
      );

    return;
  }

  const answer =
    Math.sqrt(value);

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `√${value} = <strong>${formatNumber(answer)}</strong>`,
      answer
    );
}


function calculateArea() {

  const type =
    document.getElementById(
      "areaType"
    ).value;

  const a =
    Number(
      document.getElementById(
        "areaA"
      ).value
    );

  const b =
    Number(
      document.getElementById(
        "areaB"
      ).value
    );

  let area;

  if (type === "quadrado") {

    area =
      a * a;

  }

  if (type === "retangulo") {

    area =
      a * b;

  }

  if (type === "triangulo") {

    area =
      a * b / 2;

  }

  if (type === "circulo") {

    area =
      Math.PI *
      Math.pow(a, 2);

  }

  if (!Number.isFinite(area)) return;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `Área = <strong>${formatNumber(area)}</strong>`,
      area
    );
}


function generateTable() {

  const number =
    Number(
      document.getElementById(
        "tableNumber"
      ).value
    );

  const start =
    Number(
      document.getElementById(
        "tableStart"
      ).value
    );

  const end =
    Number(
      document.getElementById(
        "tableEnd"
      ).value
    );

  if (
    !Number.isFinite(number) ||
    !Number.isFinite(start) ||
    !Number.isFinite(end)
  ) return;

  let text = "";

  for (
    let i = start;
    i <= end;
    i++
  ) {

    text +=
      `${number} × ${i} = ${number * i}\n`;

  }

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<pre>${escapeHTML(text)}</pre>`,
      text
    );
}


function calculateAge() {

  const value =
    document.getElementById(
      "birthDate"
    ).value;

  if (!value) return;

  const birth =
    new Date(
      `${value}T00:00:00`
    );

  const today =
    new Date();

  let age =
    today.getFullYear() -
    birth.getFullYear();

  const birthday =
    new Date(
      today.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );

  if (
    today < birthday
  ) {
    age--;
  }

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `Você tem <strong>${age} anos</strong>.`,
      `${age} anos`
    );
}


/* =========================================================
   CONVERSORES
   ========================================================= */

function convertTemperature() {

  const value =
    Number(
      document.getElementById(
        "temperatureValue"
      ).value
    );

  const from =
    document.getElementById(
      "temperatureFrom"
    ).value;

  const to =
    document.getElementById(
      "temperatureTo"
    ).value;

  let celsius;

  if (from === "c")
    celsius = value;

  if (from === "f")
    celsius =
      (value - 32) * 5 / 9;

  if (from === "k")
    celsius =
      value - 273.15;

  let answer;

  if (to === "c")
    answer = celsius;

  if (to === "f")
    answer =
      celsius * 9 / 5 + 32;

  if (to === "k")
    answer =
      celsius + 273.15;

  showConversion(answer);
}


function genericConversion(
  value,
  from,
  to,
  factors
) {

  if (!Number.isFinite(value))
    return NaN;

  return (
    value * factors[from] /
    factors[to]
  );
}


function convertLength() {

  const value =
    Number(
      document.getElementById(
        "lengthValue"
      ).value
    );

  const from =
    document.getElementById(
      "lengthFrom"
    ).value;

  const to =
    document.getElementById(
      "lengthTo"
    ).value;

  const factors = {
    mm:1,
    cm:10,
    m:1000,
    km:1000000
  };

  showConversion(
    genericConversion(
      value,
      from,
      to,
      factors
    )
  );
}


function convertWeight() {

  const value =
    Number(
      document.getElementById(
        "weightValue"
      ).value
    );

  const from =
    document.getElementById(
      "weightFrom"
    ).value;

  const to =
    document.getElementById(
      "weightTo"
    ).value;

  const factors = {
    mg:1,
    g:1000,
    kg:1000000,
    t:1000000000
  };

  showConversion(
    genericConversion(
      value,
      from,
      to,
      factors
    )
  );
}


function convertSpeed() {

  const value =
    Number(
      document.getElementById(
        "speedValue"
      ).value
    );

  const from =
    document.getElementById(
      "speedFrom"
    ).value;

  const to =
    document.getElementById(
      "speedTo"
    ).value;

  const factors = {
    kmh:1,
    ms:3.6,
    mph:1.609344
  };

  showConversion(
    genericConversion(
      value,
      from,
      to,
      factors
    )
  );
}


function convertData() {

  const value =
    Number(
      document.getElementById(
        "dataValue"
      ).value
    );

  const from =
    document.getElementById(
      "dataFrom"
    ).value;

  const to =
    document.getElementById(
      "dataTo"
    ).value;

  const factors = {
    b:1,
    kb:1024,
    mb:1024 ** 2,
    gb:1024 ** 3,
    tb:1024 ** 4
  };

  showConversion(
    genericConversion(
      value,
      from,
      to,
      factors
    )
  );
}


function convertTime() {

  const value =
    Number(
      document.getElementById(
        "timeValue"
      ).value
    );

  const from =
    document.getElementById(
      "timeFrom"
    ).value;

  const to =
    document.getElementById(
      "timeTo"
    ).value;

  const factors = {
    seg:1,
    min:60,
    h:3600,
    d:86400
  };

  showConversion(
    genericConversion(
      value,
      from,
      to,
      factors
    )
  );
}


function convertVolume() {

  const value =
    Number(
      document.getElementById(
        "volumeValue"
      ).value
    );

  const from =
    document.getElementById(
      "volumeFrom"
    ).value;

  const to =
    document.getElementById(
      "volumeTo"
    ).value;

  const factors = {
    ml:1,
    l:1000,
    m3:1000000
  };

  showConversion(
    genericConversion(
      value,
      from,
      to,
      factors
    )
  );
}


function convertAngle() {

  const value =
    Number(
      document.getElementById(
        "angleValue"
      ).value
    );

  const from =
    document.getElementById(
      "angleFrom"
    ).value;

  const to =
    document.getElementById(
      "angleTo"
    ).value;

  let answer;

  if (from === to) {

    answer = value;

  } else if (from === "deg") {

    answer =
      value * Math.PI / 180;

  } else {

    answer =
      value * 180 / Math.PI;

  }

  showConversion(answer);
}


function showConversion(value) {

  if (!Number.isFinite(value)) {

    document.getElementById(
      "toolOutput"
    ).innerHTML =
      result(
        "Valor inválido."
      );

    return;
  }

  document.getElementById(
    "toolOutput"
  ).innerHTML =
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
    document.getElementById(
      "wordText"
    ).value.trim();

  const words =
    text
      ? text.split(/\s+/).length
      : 0;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `
      Palavras:
      <strong>${words}</strong>
      <br>
      Caracteres:
      <strong>${text.length}</strong>
      `,
      `${words} palavras`
    );
}


function toUpperCaseText() {

  const input =
    document.getElementById(
      "caseText"
    );

  input.value =
    input.value.toUpperCase();

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      escapeHTML(input.value),
      input.value
    );
}


function toLowerCaseText() {

  const input =
    document.getElementById(
      "caseText"
    );

  input.value =
    input.value.toLowerCase();

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      escapeHTML(input.value),
      input.value
    );
}


function removeExtraSpaces() {

  const input =
    document.getElementById(
      "spaceText"
    );

  const text =
    input.value
      .replace(/\s+/g, " ")
      .trim();

  input.value =
    text;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      escapeHTML(text),
      text
    );
}


function reverseText() {

  const text =
    document.getElementById(
      "reverseText"
    ).value;

  const reversed =
    [...text]
      .reverse()
      .join("");

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      escapeHTML(reversed),
      reversed
    );
}


function countCharacters() {

  const text =
    document.getElementById(
      "characterText"
    ).value;

  const total =
    text.length;

  const noSpaces =
    text.replace(
      /\s/g,
      ""
    ).length;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `
      Com espaços:
      <strong>${total}</strong>
      <br>
      Sem espaços:
      <strong>${noSpaces}</strong>
      `,
      total
    );
}


function countLines() {

  const text =
    document.getElementById(
      "lineText"
    ).value;

  const lines =
    text
      ? text.split(/\r?\n/).length
      : 0;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `Linhas: <strong>${lines}</strong>`,
      lines
    );
}


function generateSlug() {

  const text =
    document.getElementById(
      "slugText"
    ).value;

  const slug =
    text
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        ""
      )
      .toLowerCase()
      .trim()
      .replace(
        /[^a-z0-9\s-]/g,
        ""
      )
      .replace(
        /\s+/g,
        "-"
      )
      .replace(
        /-+/g,
        "-"
      );

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<strong>${escapeHTML(slug)}</strong>`,
      slug
    );
}


function removeDuplicates() {

  const text =
    document.getElementById(
      "duplicateText"
    ).value;

  const lines =
    text
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean);

  const unique =
    [...new Set(lines)];

  const output =
    unique.join("\n");

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<pre>${escapeHTML(output)}</pre>`,
      output
    );
}


/* =========================================================
   CRONÔMETRO
   ========================================================= */

function formatTime(seconds) {

  const hours =
    Math.floor(
      seconds / 3600
    );

  const minutes =
    Math.floor(
      (seconds % 3600) / 60
    );

  const secs =
    seconds % 60;

  return [
    hours,
    minutes,
    secs
  ]
    .map(value =>
      String(value)
        .padStart(2, "0")
    )
    .join(":");
}


function startStopwatch() {

  if (stopwatchInterval)
    return;

  stopwatchInterval =
    setInterval(() => {

      stopwatchSeconds++;

      const display =
        document.getElementById(
          "stopwatchDisplay"
        );

      if (display) {

        display.textContent =
          formatTime(
            stopwatchSeconds
          );

      }

    }, 1000);
}


function pauseStopwatch() {

  clearInterval(
    stopwatchInterval
  );

  stopwatchInterval =
    null;
}


function resetStopwatch() {

  pauseStopwatch();

  stopwatchSeconds =
    0;

  const display =
    document.getElementById(
      "stopwatchDisplay"
    );

  if (display) {

    display.textContent =
      "00:00:00";

  }
}


/* =========================================================
   TIMER
   ========================================================= */

function updateTimerDisplay() {

  const display =
    document.getElementById(
      "timerDisplay"
    );

  if (!display)
    return;

  const minutes =
    Math.floor(
      timerSeconds / 60
    );

  const seconds =
    timerSeconds % 60;

  display.textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}


function startTimer() {

  if (timerInterval)
    return;

  if (timerSeconds <= 0) {

    const minutes =
      Number(
        document.getElementById(
          "timerMinutes"
        ).value
      );

    if (
      !Number.isFinite(minutes) ||
      minutes <= 0
    ) {

      showToast(
        "Digite um tempo válido."
      );

      return;
    }

    timerSeconds =
      Math.round(
        minutes * 60
      );
  }

  timerInterval =
    setInterval(() => {

      timerSeconds--;

      updateTimerDisplay();

      if (
        timerSeconds <= 0
      ) {

        clearInterval(
          timerInterval
        );

        timerInterval =
          null;

        showToast(
          "Tempo encerrado!"
        );

      }

    }, 1000);
}


function pauseTimer() {

  clearInterval(
    timerInterval
  );

  timerInterval =
    null;
}


function resetTimer() {

  pauseTimer();

  const minutes =
    Number(
      document.getElementById(
        "timerMinutes"
      ).value
    );

  timerSeconds =
    Number.isFinite(minutes)
      ? Math.max(
          0,
          Math.round(
            minutes * 60
          )
        )
      : 0;

  updateTimerDisplay();
}


/* =========================================================
   POMODORO
   ========================================================= */

function updatePomodoroDisplay() {

  const display =
    document.getElementById(
      "pomodoroDisplay"
    );

  if (!display)
    return;

  const minutes =
    Math.floor(
      pomodoroSeconds / 60
    );

  const seconds =
    pomodoroSeconds % 60;

  display.textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}


function startPomodoro() {

  if (pomodoroInterval)
    return;

  pomodoroInterval =
    setInterval(() => {

      pomodoroSeconds--;

      updatePomodoroDisplay();

      if (
        pomodoroSeconds <= 0
      ) {

        clearInterval(
          pomodoroInterval
        );

        pomodoroInterval =
          null;

        showToast(
          "Pomodoro concluído!"
        );

      }

    }, 1000);
}


function pausePomodoro() {

  clearInterval(
    pomodoroInterval
  );

  pomodoroInterval =
    null;
}


function resetPomodoro() {

  pausePomodoro();

  pomodoroSeconds =
    25 * 60;

  updatePomodoroDisplay();
}


function stopTimers() {

  clearInterval(
    stopwatchInterval
  );

  clearInterval(
    timerInterval
  );

  clearInterval(
    pomodoroInterval
  );

  stopwatchInterval =
    null;

  timerInterval =
    null;

  pomodoroInterval =
    null;
}


/* =========================================================
   DATAS
   ========================================================= */

function calculateDays() {

  const start =
    document.getElementById(
      "dateStart"
    ).value;

  const end =
    document.getElementById(
      "dateEnd"
    ).value;

  if (!start || !end)
    return;

  const date1 =
    new Date(
      `${start}T00:00:00`
    );

  const date2 =
    new Date(
      `${end}T00:00:00`
    );

  const difference =
    Math.abs(
      date2 - date1
    );

  const days =
    Math.round(
      difference /
      86400000
    );

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `Diferença: <strong>${days} dias</strong>`,
      days
    );
}


/* =========================================================
   NOTAS
   ========================================================= */

function saveNotes() {

  const input =
    document.getElementById(
      "notesText"
    );

  notes =
    input.value;

  saveData();

  showToast(
    "Notas salvas!"
  );
}


function clearNotes() {

  notes = "";

  saveData();

  const input =
    document.getElementById(
      "notesText"
    );

  if (input) {
    input.value = "";
  }

  showToast(
    "Notas apagadas."
  );
}


/* =========================================================
   TAREFAS
   ========================================================= */

function renderTaskList() {

  const list =
    document.getElementById(
      "taskList"
    );

  if (!list)
    return;

  if (!tasks.length) {

    list.innerHTML = `
      <div class="tool-result">
        Nenhuma tarefa adicionada.
      </div>
    `;

    return;
  }

  list.innerHTML =
    tasks.map(
      (task, index) => `

        <div class="task-item">

          <label>

            <input
              type="checkbox"
              ${
                task.done
                  ? "checked"
                  : ""
              }
              onchange="
                toggleTask(${index})
              "
            >

            <span
              class="${
                task.done
                  ? "done"
                  : ""
              }"
            >
              ${escapeHTML(
                task.text
              )}
            </span>

          </label>

          <button
            onclick="
              deleteTask(${index})
            "
          >
            ×
          </button>

        </div>

      `
    ).join("");
}


function addTask() {

  const input =
    document.getElementById(
      "newTask"
    );

  const text =
    input.value.trim();

  if (!text)
    return;

  tasks.push({
    text,
    done:false
  });

  saveData();

  input.value = "";

  renderTaskList();
}


function toggleTask(index) {

  if (!tasks[index])
    return;

  tasks[index].done =
    !tasks[index].done;

  saveData();

  renderTaskList();
}


function deleteTask(index) {

  tasks.splice(
    index,
    1
  );

  saveData();

  renderTaskList();
}


/* =========================================================
   GERADORES
   ========================================================= */

function secureRandom(max) {

  if (
    window.crypto &&
    crypto.getRandomValues
  ) {

    const array =
      new Uint32Array(1);

    crypto.getRandomValues(
      array
    );

    return (
      array[0] % max
    );

  }

  return Math.floor(
    Math.random() * max
  );
}


function randomInt(min, max) {

  return (
    Math.floor(
      secureRandom(
        max - min + 1
      )
    ) + min
  );
}


function generatePassword() {

  let length =
    Number(
      document.getElementById(
        "passwordLength"
      ).value
    );

  length =
    Math.max(
      4,
      Math.min(
        100,
        Math.floor(
          length || 16
        )
      )
    );

  let chars =
    "abcdefghijklmnopqrstuvwxyz";

  if (
    document.getElementById(
      "passwordUpper"
    ).checked
  ) {

    chars +=
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  }

  if (
    document.getElementById(
      "passwordNumbers"
    ).checked
  ) {

    chars +=
      "0123456789";

  }

  if (
    document.getElementById(
      "passwordSymbols"
    ).checked
  ) {

    chars +=
      "!@#$%&*+-_=<>?";

  }

  let password = "";

  for (
    let i = 0;
    i < length;
    i++
  ) {

    password +=
      chars[
        randomInt(
          0,
          chars.length - 1
        )
      ];

  }

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<strong style="word-break:break-all">${escapeHTML(password)}</strong>`,
      password
    );
}


function generateRandomNumber() {

  const min =
    Number(
      document.getElementById(
        "randomMin"
      ).value
    );

  const max =
    Number(
      document.getElementById(
        "randomMax"
      ).value
    );

  if (
    !Number.isFinite(min) ||
    !Number.isFinite(max) ||
    min > max
  ) {

    document.getElementById(
      "toolOutput"
    ).innerHTML =
      result(
        "Valores inválidos."
      );

    return;
  }

  const number =
    randomInt(
      min,
      max
    );

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<strong>${number}</strong>`,
      number
    );
}


function drawName() {

  const text =
    document.getElementById(
      "namesText"
    ).value;

  const names =
    text
      .split(/\r?\n/)
      .map(
        name => name.trim()
      )
      .filter(Boolean);

  if (!names.length)
    return;

  const chosen =
    names[
      randomInt(
        0,
        names.length - 1
      )
    ];

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `🎉 <strong>${escapeHTML(chosen)}</strong>`,
      chosen
    );
}


function flipCoin() {

  const value =
    Math.random() < 0.5
      ? "Cara"
      : "Coroa";

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<strong>${value}</strong>`,
      value
    );
}


function rollDice() {

  const number =
    randomInt(
      1,
      6
    );

  const faces = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
  ];

  const display =
    document.getElementById(
      "diceDisplay"
    );

  if (display) {

    display.textContent =
      faces[number - 1];

  }

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `Resultado: <strong>${number}</strong>`,
      number
    );
}


function generateCode() {

  let length =
    Number(
      document.getElementById(
        "codeLength"
      ).value
    );

  length =
    Math.max(
      1,
      Math.min(
        100,
        Math.floor(
          length || 8
        )
      )
    );

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code = "";

  for (
    let i = 0;
    i < length;
    i++
  ) {

    code +=
      chars[
        randomInt(
          0,
          chars.length - 1
        )
      ];

  }

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<strong>${code}</strong>`,
      code
    );
}


function generateQRCode() {

  const text =
    document.getElementById(
      "qrText"
    ).value.trim();

  if (!text)
    return;

  const url =
    "https://api.qrserver.com/v1/create-qr-code/" +
    "?size=250x250&data=" +
    encodeURIComponent(text);

  document.getElementById(
    "toolOutput"
  ).innerHTML = `

    <div class="tool-result">

      <img
        src="${url}"
        alt="QR Code"
        style="
          width:250px;
          max-width:100%;
          border-radius:16px;
          background:white;
          padding:10px;
        "
      >

      <button
        class="copy-result"
        onclick="
          copyText(
            ${JSON.stringify(text)}
          )
        "
      >
        Copiar conteúdo
      </button>

    </div>
  `;
}


function generateColor() {

  const value =
    randomInt(
      0,
      0xFFFFFF
    );

  const hex =
    "#" +
    value
      .toString(16)
      .padStart(
        6,
        "0"
      )
      .toUpperCase();

  const preview =
    document.getElementById(
      "colorPreview"
    );

  preview.style.background =
    hex;

  preview.textContent =
    hex;

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<strong>${hex}</strong>`,
      hex
    );
}


function generateLorem() {

  let count =
    Number(
      document.getElementById(
        "loremCount"
      ).value
    );

  count =
    Math.max(
      1,
      Math.min(
        10,
        Math.floor(
          count || 2
        )
      )
    );

  const base =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, neque sed tincidunt facilisis, justo lorem tincidunt libero, vitae aliquam massa neque vitae erat.";

  const text =
    Array.from(
      {length:count},
      () => base
    ).join("\n\n");

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<div style="white-space:pre-wrap;text-align:left">${escapeHTML(text)}</div>`,
      text
    );
}


function generateUUID() {

  let uuid;

  if (
    crypto &&
    crypto.randomUUID
  ) {

    uuid =
      crypto.randomUUID();

  } else {

    uuid =
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
        .replace(
          /[xy]/g,
          char => {

            const random =
              Math.random() * 16 |
              0;

            const value =
              char === "x"
                ? random
                : (
                    random &
                    0x3 |
                    0x8
                  );

            return value.toString(
              16
            );

          }
        );

  }

  document.getElementById(
    "toolOutput"
  ).innerHTML =
    result(
      `<strong>${uuid}</strong>`,
      uuid
    );
}


/* =========================================================
   TEMA
   ========================================================= */

function toggleTheme() {

  document.body.classList.toggle(
    "dark"
  );

  localStorage.setItem(
    "nexoTheme",
    document.body.classList.contains(
      "dark"
    )
      ? "dark"
      : "light"
  );
}


function loadTheme() {

  if (
    localStorage.getItem(
      "nexoTheme"
    ) === "dark"
  ) {

    document.body.classList.add(
      "dark"
    );

  }
}


/* =========================================================
   MENU MOBILE
   ========================================================= */

function toggleSidebar() {

  const sidebar =
    document.querySelector(
      ".sidebar"
    );

  if (sidebar) {

    sidebar.classList.toggle(
      "open"
    );

  }
}


/* =========================================================
   ENTER
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !== "Enter" ||
      event.target.tagName ===
        "TEXTAREA"
    ) {

      return;

    }

    const primary =
      document.getElementById(
        "toolPrimary"
      );

    if (
      primary &&
      modal.classList.contains(
        "active"
      )
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

updateCount(
  tools.length
);
