// ===============================
// NEXOTOOLS 3.0
// ===============================

const tools = [
  // MATEMÁTICA
  {
    id: "calculadora",
    name: "Calculadora",
    category: "Matemática",
    icon: "∑",
    description: "Faça cálculos rapidamente.",
    keywords: "calcular conta matemática"
  },
  {
    id: "porcentagem",
    name: "Porcentagem",
    category: "Matemática",
    icon: "%",
    description: "Calcule porcentagens.",
    keywords: "porcentagem percent"
  },
  {
    id: "desconto",
    name: "Desconto",
    category: "Matemática",
    icon: "↓",
    description: "Calcule descontos.",
    keywords: "desconto preço"
  },
  {
    id: "juros",
    name: "Juros simples",
    category: "Matemática",
    icon: "₿",
    description: "Calcule juros simples.",
    keywords: "juros dinheiro"
  },
  {
    id: "regra",
    name: "Regra de três",
    category: "Matemática",
    icon: "⅓",
    description: "Resolva regras de três.",
    keywords: "regra três proporção"
  },
  {
    id: "media",
    name: "Média simples",
    category: "Matemática",
    icon: "x̄",
    description: "Calcule a média de números.",
    keywords: "media média"
  },
  {
    id: "mediaEscolar",
    name: "Média escolar",
    category: "Matemática",
    icon: "🎓",
    description: "Calcule sua média escolar.",
    keywords: "escola notas média"
  },
  {
    id: "idade",
    name: "Calculadora de idade",
    category: "Matemática",
    icon: "🎂",
    description: "Descubra sua idade exata.",
    keywords: "idade aniversário"
  },
  {
    id: "area",
    name: "Calculadora de área",
    category: "Matemática",
    icon: "▣",
    description: "Calcule áreas de figuras.",
    keywords: "área quadrado círculo"
  },
  {
    id: "potencia",
    name: "Potência",
    category: "Matemática",
    icon: "xⁿ",
    description: "Calcule potências.",
    keywords: "potência expoente"
  },
  {
    id: "raiz",
    name: "Raiz quadrada",
    category: "Matemática",
    icon: "√",
    description: "Calcule raízes quadradas.",
    keywords: "raiz matemática"
  },
  {
    id: "tabuada",
    name: "Tabuada",
    category: "Matemática",
    icon: "×",
    description: "Gere uma tabuada.",
    keywords: "tabuada multiplicação"
  },

  // CONVERSORES
  {
    id: "temperatura",
    name: "Temperatura",
    category: "Conversores",
    icon: "℃",
    description: "Converta temperaturas.",
    keywords: "celsius fahrenheit kelvin"
  },
  {
    id: "comprimento",
    name: "Comprimento",
    category: "Conversores",
    icon: "↔",
    description: "Converta medidas de comprimento.",
    keywords: "metro km cm distância"
  },
  {
    id: "peso",
    name: "Peso",
    category: "Conversores",
    icon: "⚖",
    description: "Converta unidades de peso.",
    keywords: "kg grama peso"
  },
  {
    id: "velocidade",
    name: "Velocidade",
    category: "Conversores",
    icon: "🚀",
    description: "Converta velocidades.",
    keywords: "kmh mph velocidade"
  },
  {
    id: "dados",
    name: "Dados digitais",
    category: "Conversores",
    icon: "▤",
    description: "Converta unidades digitais.",
    keywords: "bytes kb mb gb"
  },
  {
    id: "tempo",
    name: "Tempo",
    category: "Conversores",
    icon: "◷",
    description: "Converta unidades de tempo.",
    keywords: "segundos minutos horas"
  },
  {
    id: "angulo",
    name: "Ângulos",
    category: "Conversores",
    icon: "∠",
    description: "Converta graus e radianos.",
    keywords: "ângulo grau radiano"
  },
  {
    id: "volume",
    name: "Volume",
    category: "Conversores",
    icon: "◇",
    description: "Calcule volumes.",
    keywords: "volume cubo esfera cilindro"
  },
  {
    id: "moeda",
    name: "Conversor de moeda",
    category: "Conversores",
    icon: "R$",
    description: "Converta usando uma taxa informada.",
    keywords: "dinheiro moeda dólar euro"
  },

  // TEXTO
  {
    id: "palavras",
    name: "Contador de palavras",
    category: "Texto",
    icon: "Aa",
    description: "Conte palavras de um texto.",
    keywords: "palavras texto contador"
  },
  {
    id: "maiusculas",
    name: "Maiúsculas e minúsculas",
    category: "Texto",
    icon: "Aa",
    description: "Altere o formato do texto.",
    keywords: "maiúscula minúscula"
  },
  {
    id: "espacos",
    name: "Remover espaços extras",
    category: "Texto",
    icon: "↔",
    description: "Limpe espaços desnecessários.",
    keywords: "espaços limpar texto"
  },
  {
    id: "inverter",
    name: "Inverter texto",
    category: "Texto",
    icon: "↶",
    description: "Inverta um texto.",
    keywords: "inverter texto"
  },
  {
    id: "caracteres",
    name: "Contador de caracteres",
    category: "Texto",
    icon: "#",
    description: "Conte caracteres.",
    keywords: "caracteres texto"
  },
  {
    id: "caracteresSemEspacos",
    name: "Caracteres sem espaços",
    category: "Texto",
    icon: "#",
    description: "Conte caracteres ignorando espaços.",
    keywords: "caracteres espaços"
  },
  {
    id: "linhas",
    name: "Contador de linhas",
    category: "Texto",
    icon: "☷",
    description: "Conte linhas de um texto.",
    keywords: "linhas texto"
  },
  {
    id: "slug",
    name: "Gerador de Slug",
    category: "Texto",
    icon: "🔗",
    description: "Transforme textos em URLs amigáveis.",
    keywords: "slug url link"
  },

  // PRODUTIVIDADE
  {
    id: "cronometro",
    name: "Cronômetro",
    category: "Produtividade",
    icon: "⏱",
    description: "Cronometre seu tempo.",
    keywords: "cronômetro tempo"
  },
  {
    id: "timer",
    name: "Timer",
    category: "Produtividade",
    icon: "⏲",
    description: "Configure uma contagem regressiva.",
    keywords: "timer contador"
  },
  {
    id: "dias",
    name: "Contador de dias",
    category: "Produtividade",
    icon: "📅",
    description: "Calcule a diferença entre datas.",
    keywords: "dias datas calendário"
  },
  {
    id: "notas",
    name: "Notas",
    category: "Produtividade",
    icon: "📝",
    description: "Escreva e salve suas notas.",
    keywords: "notas anotações"
  },
  {
    id: "tarefas",
    name: "Lista de tarefas",
    category: "Produtividade",
    icon: "✓",
    description: "Organize suas tarefas.",
    keywords: "tarefas lista organização"
  },
  {
    id: "pomodoro",
    name: "Pomodoro",
    category: "Produtividade",
    icon: "🍅",
    description: "Use a técnica Pomodoro.",
    keywords: "pomodoro foco estudo"
  },

  // GERADORES
  {
    id: "senha",
    name: "Gerador de senha",
    category: "Geradores",
    icon: "🔐",
    description: "Gere senhas aleatórias.",
    keywords: "senha segurança"
  },
  {
    id: "numero",
    name: "Número aleatório",
    category: "Geradores",
    icon: "#",
    description: "Gere números aleatórios.",
    keywords: "número aleatório"
  },
  {
    id: "nomes",
    name: "Gerador de nomes",
    category: "Geradores",
    icon: "✦",
    description: "Gere nomes aleatórios.",
    keywords: "nome nomes"
  },
  {
    id: "dado",
    name: "Dado",
    category: "Geradores",
    icon: "⚄",
    description: "Role um dado.",
    keywords: "dado sorte"
  },
  {
    id: "codigo",
    name: "Código aleatório",
    category: "Geradores",
    icon: "</>",
    description: "Gere códigos aleatórios.",
    keywords: "código"
  },
  {
    id: "qrcode",
    name: "QR Code",
    category: "Geradores",
    icon: "▦",
    description: "Crie um QR Code.",
    keywords: "qr código link"
  },
  {
    id: "cores",
    name: "Cor aleatória",
    category: "Geradores",
    icon: "◉",
    description: "Gere uma cor aleatória.",
    keywords: "cor hex rgb"
  },
  {
    id: "lorem",
    name: "Lorem Ipsum",
    category: "Geradores",
    icon: "¶",
    description: "Gere texto para testes.",
    keywords: "lorem texto"
  },
  {
    id: "uuid",
    name: "Gerador UUID",
    category: "Geradores",
    icon: "ID",
    description: "Gere identificadores únicos.",
    keywords: "uuid id identificador"
  }
];

let currentFilter = "Todas";
let searchTerm = "";
let favorites = JSON.parse(localStorage.getItem("nexoFavorites") || "[]");
let recent = JSON.parse(localStorage.getItem("nexoRecent") || "[]");

let stopwatchInterval = null;
let stopwatchSeconds = 0;

let timerInterval = null;
let timerSeconds = 0;

let pomodoroInterval = null;
let pomodoroSeconds = 1500;

// ===============================
// UTILIDADES
// ===============================

function saveData() {
  localStorage.setItem("nexoFavorites", JSON.stringify(favorites));
  localStorage.setItem("nexoRecent", JSON.stringify(recent));
}

function esc(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function field(id, label, type = "text", placeholder = "") {
  return `
    <label class="tool-label">${label}</label>
    <input id="${id}" class="tool-input" type="${type}" placeholder="${placeholder}">
  `;
}

function textareaField(id, label, placeholder = "") {
  return `
    <label class="tool-label">${label}</label>
    <textarea id="${id}" class="tool-textarea" placeholder="${placeholder}"></textarea>
  `;
}

function resultBox(text = "") {
  return `
    <div class="tool-result" id="toolResult">
      ${esc(text)}
    </div>
  `;
}

function button(text, onclick, secondary = false) {
  return `
    <button class="${secondary ? "secondary-button" : "primary-button"} tool-action"
      onclick="${onclick}">
      ${text}
    </button>
  `;
}

function toolButtons(action) {
  return `
    <div class="tool-actions">
      ${button("Calcular", action)}
      ${button("Limpar", "clearTool()", true)}
    </div>
  `;
}

function setResult(text) {
  const box = document.getElementById("toolResult");
  if (box) {
    box.innerHTML = `
      <div>${esc(text)}</div>
      <button class="copy-result" onclick="copyText(${JSON.stringify(String(text))})">
        Copiar
      </button>
    `;
  }
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copiado!");
  }).catch(() => {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    alert("Copiado!");
  });
}

function clearTool() {
  document.querySelectorAll("#modalContent input, #modalContent textarea").forEach(el => {
    el.value = "";
  });

  const result = document.getElementById("toolResult");
  if (result) result.innerHTML = "";
}

function getNumber(id) {
  return parseFloat(document.getElementById(id)?.value || 0);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return [
    String(h).padStart(2, "0"),
    String(m).padStart(2, "0"),
    String(s).padStart(2, "0")
  ].join(":");
}

// ===============================
// RENDERIZAÇÃO
// ===============================

function render() {
  const grid = document.getElementById("toolsGrid");
  if (!grid) return;

  let filtered = tools.filter(tool => {
    const categoryOk =
      currentFilter === "Todas" ||
      tool.category === currentFilter;

    const searchOk =
      !searchTerm ||
      `${tool.name} ${tool.description} ${tool.keywords}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return categoryOk && searchOk;
  });

  grid.innerHTML = filtered.map(tool => `
    <div class="tool-card" onclick="openTool('${tool.id}')">

      <button
        class="favorite-button"
        onclick="event.stopPropagation(); toggleFavorite('${tool.id}')">
        ${favorites.includes(tool.id) ? "★" : "☆"}
      </button>

      <div class="tool-icon">${tool.icon}</div>

      <div class="tool-card-content">
        <small>${tool.category}</small>
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
      </div>

      <div class="tool-arrow">→</div>
    </div>
  `).join("");

  const count = document.getElementById("toolCount");
  if (count) {
    count.textContent =
      `${filtered.length} ${filtered.length === 1 ? "ferramenta" : "ferramentas"}`;
  }

  const empty = document.getElementById("empty");
  if (empty) {
    empty.style.display = filtered.length ? "none" : "block";
  }

  updateTotalCount();
}

function updateTotalCount() {
  document.querySelectorAll(".hero-info strong").forEach(el => {
    el.textContent = `${tools.length}+`;
  });

  document.querySelectorAll(".stat-card").forEach(card => {
    const strong = card.querySelector("strong");
    if (strong && strong.textContent.includes("ferramentas")) {
      strong.textContent = `${tools.length}+ ferramentas`;
    }
  });
}

// ===============================
// NAVEGAÇÃO
// ===============================

function showHome() {
  currentFilter = "Todas";
  searchTerm = "";

  const input = document.getElementById("searchInput");
  if (input) input.value = "";

  document.getElementById("sectionTitle").textContent =
    "Todas as ferramentas";

  updateActiveCategory("Todas");
  render();
}

function filterCategory(category) {
  currentFilter = category;
  searchTerm = "";

  const input = document.getElementById("searchInput");
  if (input) input.value = "";

  document.getElementById("sectionTitle").textContent = category;

  updateActiveCategory(category);
  render();
  scrollToTools();
}

function updateActiveCategory(category) {
  document.querySelectorAll(".category").forEach(button => {
    button.classList.toggle(
      "active",
      button.textContent.trim() === category
    );
  });
}

function searchTools() {
  searchTerm = document.getElementById("searchInput")?.value || "";
  currentFilter = "Todas";
  updateActiveCategory("Todas");
  render();
}

function scrollToTools() {
  document.getElementById("toolsSection")?.scrollIntoView({
    behavior: "smooth"
  });
}

function showFavorites() {
  currentFilter = "Favoritos";

  const grid = document.getElementById("toolsGrid");

  const favoriteTools = tools.filter(tool =>
    favorites.includes(tool.id)
  );

  document.getElementById("sectionTitle").textContent = "Favoritos";

  updateActiveCategory("");

  grid.innerHTML = favoriteTools.map(tool => `
    <div class="tool-card" onclick="openTool('${tool.id}')">

      <button
        class="favorite-button"
        onclick="event.stopPropagation(); toggleFavorite('${tool.id}')">
        ★
      </button>

      <div class="tool-icon">${tool.icon}</div>

      <div class="tool-card-content">
        <small>${tool.category}</small>
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
      </div>

      <div class="tool-arrow">→</div>
    </div>
  `).join("");

  document.getElementById("toolCount").textContent =
    `${favoriteTools.length} ${favoriteTools.length === 1 ? "ferramenta" : "ferramentas"}`;

  document.getElementById("empty").style.display =
    favoriteTools.length ? "none" : "block";
}

function showRecent() {
  const recentTools = recent
    .map(id => tools.find(tool => tool.id === id))
    .filter(Boolean);

  currentFilter = "Recentes";

  document.getElementById("sectionTitle").textContent = "Recentes";

  const grid = document.getElementById("toolsGrid");

  grid.innerHTML = recentTools.map(tool => `
    <div class="tool-card" onclick="openTool('${tool.id}')">

      <button
        class="favorite-button"
        onclick="event.stopPropagation(); toggleFavorite('${tool.id}')">
        ${favorites.includes(tool.id) ? "★" : "☆"}
      </button>

      <div class="tool-icon">${tool.icon}</div>

      <div class="tool-card-content">
        <small>${tool.category}</small>
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
      </div>

      <div class="tool-arrow">→</div>
    </div>
  `).join("");

  document.getElementById("toolCount").textContent =
    `${recentTools.length} ${recentTools.length === 1 ? "ferramenta" : "ferramentas"}`;

  document.getElementById("empty").style.display =
    recentTools.length ? "none" : "block";
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

function toggleTheme() {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "nexoTheme",
    document.body.classList.contains("dark")
      ? "dark"
      : "light"
  );
}

function toggleSidebar() {
  document.querySelector(".sidebar")?.classList.toggle("open");
}

// ===============================
// MODAL
// ===============================

function openTool(id) {
  const tool = tools.find(item => item.id === id);
  if (!tool) return;

  recent = [id, ...recent.filter(item => item !== id)].slice(0, 10);
  saveData();

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-header">
      <div class="tool-icon">${tool.icon}</div>
      <div>
        <small>${tool.category}</small>
        <h2>${tool.name}</h2>
        <p>${tool.description}</p>
      </div>
    </div>

    <div class="tool-content">
      ${createTool(tool.id)}
    </div>
  `;

  document.getElementById("modal").classList.add("show");

  setTimeout(() => {
    document.querySelector("#modalContent input, #modalContent textarea")?.focus();
  }, 100);
}

function closeTool() {
  clearInterval(stopwatchInterval);
  clearInterval(timerInterval);
  clearInterval(pomodoroInterval);

  stopwatchInterval = null;
  timerInterval = null;
  pomodoroInterval = null;

  document.getElementById("modal").classList.remove("show");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeTool();
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        closeTool();
      }
    });
  }
});

// ===============================
// CRIAÇÃO DAS FERRAMENTAS
// ===============================

function createTool(id) {

  switch (id) {

    // ---------- MATEMÁTICA ----------

    case "calculadora":
      return `
        ${field("calc", "Expressão", "text", "Ex: 25 * 4 + 10")}
        ${resultBox()}
        ${toolButtons("calculate()")}
      `;

    case "porcentagem":
      return `
        ${field("p1", "Porcentagem", "number", "Ex: 20")}
        ${field("p2", "Valor", "number", "Ex: 150")}
        ${resultBox()}
        ${toolButtons("calcPercentage()")}
      `;

    case "desconto":
      return `
        ${field("d1", "Preço original", "number", "Ex: 200")}
        ${field("d2", "Desconto (%)", "number", "Ex: 15")}
        ${resultBox()}
        ${toolButtons("calcDiscount()")}
      `;

    case "juros":
      return `
        ${field("j1", "Capital", "number")}
        ${field("j2", "Taxa (%)", "number")}
        ${field("j3", "Tempo", "number")}
        ${resultBox()}
        ${toolButtons("calcInterest()")}
      `;

    case "regra":
      return `
        ${field("r1", "A", "number")}
        ${field("r2", "B", "number")}
        ${field("r3", "C", "number")}
        ${resultBox()}
        ${toolButtons("calcRule()")}
      `;

    case "media":
      return `
        ${field("m1", "Números", "text", "Ex: 7, 8, 9, 10")}
        ${resultBox()}
        ${toolButtons("calcAverage()")}
      `;

    case "mediaEscolar":
      return `
        ${field("e1", "Nota 1", "number")}
        ${field("e2", "Nota 2", "number")}
        ${field("e3", "Nota 3", "number")}
        ${field("e4", "Nota 4", "number")}
        ${resultBox()}
        ${toolButtons("calcSchoolAverage()")}
      `;

    case "idade":
      return `
        ${field("birth", "Data de nascimento", "date")}
        ${resultBox()}
        ${toolButtons("calcAge()")}
      `;

    case "area":
      return `
        <label class="tool-label">Figura</label>
        <select id="areaType" class="tool-input">
          <option value="quadrado">Quadrado</option>
          <option value="retangulo">Retângulo</option>
          <option value="triangulo">Triângulo</option>
          <option value="circulo">Círculo</option>
        </select>
        ${field("a1", "Medida 1", "number")}
        ${field("a2", "Medida 2", "number")}
        ${resultBox()}
        ${toolButtons("calcArea()")}
      `;

    case "potencia":
      return `
        ${field("pot1", "Base", "number")}
        ${field("pot2", "Expoente", "number")}
        ${resultBox()}
        ${toolButtons("calcPower()")}
      `;

    case "raiz":
      return `
        ${field("root", "Número", "number")}
        ${resultBox()}
        ${toolButtons("calcRoot()")}
      `;

    case "tabuada":
      return `
        ${field("tab", "Número", "number", "Ex: 7")}
        ${resultBox()}
        ${toolButtons("calcTable()")}
      `;

    // ---------- CONVERSORES ----------

    case "temperatura":
      return `
        ${field("temp", "Valor", "number")}
        <select id="tempFrom" class="tool-input">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <select id="tempTo" class="tool-input">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        ${resultBox()}
        ${toolButtons("convertTemperature()")}
      `;

    case "comprimento":
      return `
        ${field("lengthValue", "Valor", "number")}
        <select id="lengthFrom" class="tool-input">
          <option value="m">Metro</option>
          <option value="km">Quilômetro</option>
          <option value="cm">Centímetro</option>
          <option value="mm">Milímetro</option>
        </select>
        <select id="lengthTo" class="tool-input">
          <option value="m">Metro</option>
          <option value="km">Quilômetro</option>
          <option value="cm">Centímetro</option>
          <option value="mm">Milímetro</option>
        </select>
        ${resultBox()}
        ${toolButtons("convertLength()")}
      `;

    case "peso":
      return `
        ${field("weightValue", "Valor", "number")}
        <select id="weightFrom" class="tool-input">
          <option value="kg">Quilograma</option>
          <option value="g">Grama</option>
          <option value="mg">Miligrama</option>
        </select>
        <select id="weightTo" class="tool-input">
          <option value="kg">Quilograma</option>
          <option value="g">Grama</option>
          <option value="mg">Miligrama</option>
        </select>
        ${resultBox()}
        ${toolButtons("convertWeight()")}
      `;

    case "velocidade":
      return `
        ${field("speed", "Valor", "number")}
        <select id="speedFrom" class="tool-input">
          <option value="kmh">km/h</option>
          <option value="mph">mph</option>
          <option value="ms">m/s</option>
        </select>
        <select id="speedTo" class="tool-input">
          <option value="kmh">km/h</option>
          <option value="mph">mph</option>
          <option value="ms">m/s</option>
        </select>
        ${resultBox()}
        ${toolButtons("convertSpeed()")}
      `;

    case "dados":
      return `
        ${field("dataValue", "Valor", "number")}
        <select id="dataFrom" class="tool-input">
          <option value="B">Bytes</option>
          <option value="KB">KB</option>
          <option value="MB">MB</option>
          <option value="GB">GB</option>
        </select>
        <select id="dataTo" class="tool-input">
          <option value="B">Bytes</option>
          <option value="KB">KB</option>
          <option value="MB">MB</option>
          <option value="GB">GB</option>
        </select>
        ${resultBox()}
        ${toolButtons("convertData()")}
      `;

    case "tempo":
      return `
        ${field("timeValue", "Valor", "number")}
        <select id="timeFrom" class="tool-input">
          <option value="s">Segundos</option>
          <option value="min">Minutos</option>
          <option value="h">Horas</option>
          <option value="d">Dias</option>
        </select>
        <select id="timeTo" class="tool-input">
          <option value="s">Segundos</option>
          <option value="min">Minutos</option>
          <option value="h">Horas</option>
          <option value="d">Dias</option>
        </select>
        ${resultBox()}
        ${toolButtons("convertTime()")}
      `;

    case "angulo":
      return `
        ${field("angle", "Valor", "number")}
        <select id="angleFrom" class="tool-input">
          <option value="deg">Graus</option>
          <option value="rad">Radianos</option>
        </select>
        <select id="angleTo" class="tool-input">
          <option value="deg">Graus</option>
          <option value="rad">Radianos</option>
        </select>
        ${resultBox()}
        ${toolButtons("convertAngle()")}
      `;

    case "volume":
      return `
        <select id="volumeType" class="tool-input">
          <option value="cube">Cubo</option>
          <option value="box">Paralelepípedo</option>
          <option value="cylinder">Cilindro</option>
          <option value="sphere">Esfera</option>
        </select>
        ${field("v1", "Medida 1", "number")}
        ${field("v2", "Medida 2", "number")}
        ${field("v3", "Medida 3", "number")}
        ${resultBox()}
        ${toolButtons("calcVolume()")}
      `;

    case "moeda":
      return `
        ${field("money", "Valor", "number", "Ex: 100")}
        ${field("rate", "Taxa de conversão", "number", "Ex: 5.40")}
        ${resultBox()}
        ${toolButtons("convertMoney()")}
      `;

    // ---------- TEXTO ----------

    case "palavras":
      return `
        ${textareaField("text", "Texto", "Digite ou cole seu texto...")}
        ${resultBox()}
        ${toolButtons("countWords()")}
      `;

    case "maiusculas":
      return `
        ${textareaField("caseText", "Texto", "Digite seu texto...")}
        <div class="tool-actions">
          ${button("MAIÚSCULAS", "changeUpper()")}
          ${button("minúsculas", "changeLower()", true)}
        </div>
        ${resultBox()}
      `;

    case "espacos":
      return `
        ${textareaField("spaceText", "Texto", "Digite seu texto...")}
        ${resultBox()}
        ${toolButtons("removeSpaces()")}
      `;

    case "inverter":
      return `
        ${textareaField("reverseText", "Texto", "Digite seu texto...")}
        ${resultBox()}
        ${toolButtons("reverseTextTool()")}
      `;

    case "caracteres":
      return `
        ${textareaField("charText", "Texto", "Digite seu texto...")}
        ${resultBox()}
        ${toolButtons("countChars()")}
      `;

    case "caracteresSemEspacos":
      return `
        ${textareaField("charNoSpaceText", "Texto", "Digite seu texto...")}
        ${resultBox()}
        ${toolButtons("countCharsNoSpaces()")}
      `;

    case "linhas":
      return `
        ${textareaField("lineText", "Texto", "Digite seu texto...")}
        ${resultBox()}
        ${toolButtons("countLines()")}
      `;

    case "slug":
      return `
        ${field("slugText", "Texto", "text", "Ex: Meu novo site")}
        ${resultBox()}
        ${toolButtons("generateSlug()")}
      `;

    // ---------- PRODUTIVIDADE ----------

    case "cronometro":
      return `
        <div class="big-timer" id="stopwatch">00:00:00</div>
        <div class="tool-actions">
          ${button("Iniciar", "startStopwatch()")}
          ${button("Parar", "stopStopwatch()", true)}
          ${button("Zerar", "resetStopwatch()", true)}
        </div>
      `;

    case "timer":
      return `
        ${field("timerMinutes", "Minutos", "number", "Ex: 5")}
        <div class="big-timer" id="timerDisplay">00:00:00</div>
        <div class="tool-actions">
          ${button("Iniciar", "startTimer()")}
          ${button("Parar", "stopTimer()", true)}
          ${button("Zerar", "resetTimer()", true)}
        </div>
      `;

    case "dias":
      return `
        ${field("date1", "Data inicial", "date")}
        ${field("date2", "Data final", "date")}
        ${resultBox()}
        ${toolButtons("calculateDays()")}
      `;

    case "notas":
      return `
        ${textareaField("notes", "Sua nota", "Escreva aqui...")}
        <div class="tool-actions">
          ${button("Salvar nota", "saveNotes()")}
          ${button("Limpar", "clearNotes()", true)}
        </div>
        ${resultBox()}
      `;

    case "tarefas":
      return `
        ${field("taskInput", "Nova tarefa", "text", "Digite uma tarefa")}
        <div class="tool-actions">
          ${button("Adicionar", "addTask()")}
          ${button("Apagar concluídas", "clearCompletedTasks()", true)}
        </div>
        <div id="taskList" class="task-list"></div>
      `;

    case "pomodoro":
      return `
        <div class="big-timer" id="pomodoroDisplay">25:00</div>
        <p id="pomodoroStatus">Foco</p>
        <div class="tool-actions">
          ${button("Iniciar", "startPomodoro()")}
          ${button("Pausar", "stopPomodoro()", true)}
          ${button("Reiniciar", "resetPomodoro()", true)}
        </div>
      `;

    // ---------- GERADORES ----------

    case "senha":
      return `
        ${field("passLength", "Tamanho", "number", "Ex: 16")}
        <div class="tool-actions">
          ${button("Gerar senha", "generatePassword()")}
        </div>
        ${resultBox()}
      `;

    case "numero":
      return `
        ${field("numMin", "Mínimo", "number", "Ex: 1")}
        ${field("numMax", "Máximo", "number", "Ex: 100")}
        ${resultBox()}
        ${toolButtons("generateNumber()")}
      `;

    case "nomes":
      return `
        <div class="tool-actions">
          ${button("Gerar nome", "generateName()")}
        </div>
        ${resultBox()}
      `;

    case "dado":
      return `
        <div class="tool-actions">
          ${button("Rolar dado", "rollDice()")}
        </div>
        ${resultBox()}
      `;

    case "codigo":
      return `
        ${field("codeLength", "Tamanho", "number", "Ex: 8")}
        <div class="tool-actions">
          ${button("Gerar código", "generateCode()")}
        </div>
        ${resultBox()}
      `;

    case "qrcode":
      return `
        ${field("qrText", "Texto ou link", "text", "https://...")}
        <div class="tool-actions">
          ${button("Gerar QR Code", "generateQR()")}
        </div>
        <div id="qrResult" class="qr-result"></div>
      `;

    case "cores":
      return `
        <div class="tool-actions">
          ${button("Gerar cor", "generateColor()")}
        </div>
        <div id="colorPreview"></div>
        ${resultBox()}
      `;

    case "lorem":
      return `
        ${field("loremCount", "Quantidade de parágrafos", "number", "Ex: 2")}
        ${resultBox()}
        ${toolButtons("generateLorem()")}
      `;

    case "uuid":
      return `
        <div class="tool-actions">
          ${button("Gerar UUID", "generateUUID()")}
        </div>
        ${resultBox()}
      `;

    default:
      return `
        <p>Esta ferramenta ainda não está disponível.</p>
      `;
  }
}

// ===============================
// MATEMÁTICA
// ===============================

function calculate() {
  let expression = document.getElementById("calc").value
    .replace(/,/g, ".")
    .replace(/×/g, "*")
    .replace(/÷/g, "/");

  if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
    setResult("Expressão inválida.");
    return;
  }

  try {
    const result = Function(`"use strict"; return (${expression})`)();

    if (!Number.isFinite(result)) {
      setResult("Resultado inválido.");
      return;
    }

    setResult(result);
  } catch {
    setResult("Não foi possível calcular.");
  }
}

function calcPercentage() {
  const p = getNumber("p1");
  const value = getNumber("p2");

  setResult(`${p}% de ${value} = ${(p / 100 * value).toFixed(2)}`);
}

function calcDiscount() {
  const price = getNumber("d1");
  const discount = getNumber("d2");

  const value = price * (1 - discount / 100);

  setResult(
    `Preço final: R$ ${value.toFixed(2)}`
  );
}

function calcInterest() {
  const capital = getNumber("j1");
  const rate = getNumber("j2");
  const time = getNumber("j3");

  const interest = capital * rate / 100 * time;
  const total = capital + interest;

  setResult(
    `Juros: R$ ${interest.toFixed(2)} | Total: R$ ${total.toFixed(2)}`
  );
}

function calcRule() {
  const a = getNumber("r1");
  const b = getNumber("r2");
  const c = getNumber("r3");

  if (a === 0) {
    setResult("A não pode ser zero.");
    return;
  }

  setResult(`X = ${(b * c / a).toFixed(2)}`);
}

function calcAverage() {
  const values = document.getElementById("m1").value
    .split(",")
    .map(x => Number(x.trim()))
    .filter(x => !isNaN(x));

  if (!values.length) {
    setResult("Digite números separados por vírgula.");
    return;
  }

  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  setResult(`Média: ${avg.toFixed(2)}`);
}

function calcSchoolAverage() {
  const values = ["e1", "e2", "e3", "e4"]
    .map(getNumber)
    .filter(x => !isNaN(x) && x > 0);

  if (!values.length) {
    setResult("Digite pelo menos uma nota.");
    return;
  }

  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  setResult(`Média escolar: ${avg.toFixed(2)}`);
}

function calcAge() {
  const input = document.getElementById("birth").value;

  if (!input) {
    setResult("Informe sua data de nascimento.");
    return;
  }

  const birth = new Date(input + "T00:00:00");
  const today = new Date();

  if (birth > today) {
    setResult("A data não pode estar no futuro.");
    return;
  }

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();

  if (
    months < 0 ||
    (months === 0 && today.getDate() < birth.getDate())
  ) {
    years--;
    months += 12;
  }

  if (today.getDate() < birth.getDate()) {
    months--;
    if (months < 0) months = 11;
  }

  setResult(`Você tem aproximadamente ${years} anos e ${months} meses.`);
}

function calcArea() {
  const type = document.getElementById("areaType").value;
  const a = getNumber("a1");
  const b = getNumber("a2");

  let area = 0;

  if (type === "quadrado") {
    area = a * a;
  }

  if (type === "retangulo") {
    area = a * b;
  }

  if (type === "triangulo") {
    area = (a * b) / 2;
  }

  if (type === "circulo") {
    area = Math.PI * a * a;
  }

  setResult(`Área = ${area.toFixed(2)}`);
}

function calcPower() {
  const base = getNumber("pot1");
  const exponent = getNumber("pot2");

  setResult(`Resultado: ${Math.pow(base, exponent)}`);
}

function calcRoot() {
  const value = getNumber("root");

  if (value < 0) {
    setResult("Não existe raiz quadrada real desse número.");
    return;
  }

  setResult(`√${value} = ${Math.sqrt(value).toFixed(4)}`);
}

function calcTable() {
  const n = getNumber("tab");

  let text = "";

  for (let i = 1; i <= 10; i++) {
    text += `${n} × ${i} = ${n * i}\n`;
  }

  setResult(text);
}

// ===============================
// CONVERSORES
// ===============================

function convertTemperature() {
  const value = getNumber("temp");
  const from = document.getElementById("tempFrom").value;
  const to = document.getElementById("tempTo").value;

  let celsius;

  if (from === "C") celsius = value;
  if (from === "F") celsius = (value - 32) * 5 / 9;
  if (from === "K") celsius = value - 273.15;

  let result;

  if (to === "C") result = celsius;
  if (to === "F") result = celsius * 9 / 5 + 32;
  if (to === "K") result = celsius + 273.15;

  setResult(`${result.toFixed(2)} ${to}`);
}

function convertLength() {
  const value = getNumber("lengthValue");
  const from = document.getElementById("lengthFrom").value;
  const to = document.getElementById("lengthTo").value;

  const units = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000
  };

  const result = value * units[from] / units[to];

  setResult(`${result} ${to}`);
}

function convertWeight() {
  const value = getNumber("weightValue");
  const from = document.getElementById("weightFrom").value;
  const to = document.getElementById("weightTo").value;

  const units = {
    mg: 0.000001,
    g: 0.001,
    kg: 1
  };

  const result = value * units[from] / units[to];

  setResult(`${result} ${to}`);
}

function convertSpeed() {
  const value = getNumber("speed");
  const from = document.getElementById("speedFrom").value;
  const to = document.getElementById("speedTo").value;

  const units = {
    ms: 1,
    kmh: 1000 / 3600,
    mph: 1609.344 / 3600
  };

  const result = value * units[from] / units[to];

  setResult(`${result.toFixed(3)} ${to}`);
}

function convertData() {
  const value = getNumber("dataValue");
  const from = document.getElementById("dataFrom").value;
  const to = document.getElementById("dataTo").value;

  const units = {
    B: 1,
    KB: 1000,
    MB: 1000000,
    GB: 1000000000
  };

  const result = value * units[from] / units[to];

  setResult(`${result} ${to}`);
}

function convertTime() {
  const value = getNumber("timeValue");
  const from = document.getElementById("timeFrom").value;
  const to = document.getElementById("timeTo").value;

  const units = {
    s: 1,
    min: 60,
    h: 3600,
    d: 86400
  };

  const result = value * units[from] / units[to];

  setResult(`${result} ${to}`);
}

function convertAngle() {
  const value = getNumber("angle");
  const from = document.getElementById("angleFrom").value;
  const to = document.getElementById("angleTo").value;

  let degrees = from === "deg"
    ? value
    : value * 180 / Math.PI;

  let result = to === "deg"
    ? degrees
    : degrees * Math.PI / 180;

  setResult(result.toFixed(6));
}

function calcVolume() {
  const type = document.getElementById("volumeType").value;
  const a = getNumber("v1");
  const b = getNumber("v2");
  const c = getNumber("v3");

  let result = 0;

  if (type === "cube") {
    result = a ** 3;
  }

  if (type === "box") {
    result = a * b * c;
  }

  if (type === "cylinder") {
    result = Math.PI * a * a * b;
  }

  if (type === "sphere") {
    result = (4 / 3) * Math.PI * a ** 3;
  }

  setResult(`Volume = ${result.toFixed(2)}`);
}

function convertMoney() {
  const value = getNumber("money");
  const rate = getNumber("rate");

  setResult(`Resultado: ${value * rate}`);
}

// ===============================
// TEXTO
// ===============================

function countWords() {
  const text = document.getElementById("text").value.trim();

  if (!text) {
    setResult("0 palavras.");
    return;
  }

  const count = text.split(/\s+/).length;

  setResult(`${count} palavras.`);
}

function changeUpper() {
  const text = document.getElementById("caseText").value;

  setResult(text.toUpperCase());
}

function changeLower() {
  const text = document.getElementById("caseText").value;

  setResult(text.toLowerCase());
}

function removeSpaces() {
  const text = document.getElementById("spaceText").value;

  setResult(text.replace(/\s+/g, " ").trim());
}

function reverseTextTool() {
  const text = document.getElementById("reverseText").value;

  setResult([...text].reverse().join(""));
}

function countChars() {
  const text = document.getElementById("charText").value;

  setResult(`${text.length} caracteres.`);
}

function countCharsNoSpaces() {
  const text = document.getElementById("charNoSpaceText").value;

  setResult(
    `${text.replace(/\s/g, "").length} caracteres sem espaços.`
  );
}

function countLines() {
  const text = document.getElementById("lineText").value;

  if (!text) {
    setResult("0 linhas.");
    return;
  }

  setResult(`${text.split(/\r?\n/).length} linhas.`);
}

function generateSlug() {
  const text = document.getElementById("slugText").value;

  const slug = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  setResult(slug);
}

// ===============================
// PRODUTIVIDADE
// ===============================

function startStopwatch() {
  if (stopwatchInterval) return;

  stopwatchInterval = setInterval(() => {
    stopwatchSeconds++;

    const display = document.getElementById("stopwatch");

    if (display) {
      display.textContent = formatTime(stopwatchSeconds);
    }
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchSeconds = 0;

  const display = document.getElementById("stopwatch");

  if (display) {
    display.textContent = "00:00:00";
  }
}

function startTimer() {
  if (timerInterval) return;

  const input = document.getElementById("timerMinutes");

  if (timerSeconds <= 0) {
    timerSeconds = Number(input.value || 0) * 60;
  }

  if (timerSeconds <= 0) {
    alert("Digite os minutos.");
    return;
  }

  timerInterval = setInterval(() => {
    timerSeconds--;

    const display = document.getElementById("timerDisplay");

    if (display) {
      display.textContent = formatTime(timerSeconds);
    }

    if (timerSeconds <= 0) {
      stopTimer();
      alert("Tempo encerrado!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timerSeconds = 0;

  const display = document.getElementById("timerDisplay");

  if (display) {
    display.textContent = "00:00:00";
  }
}

function calculateDays() {
  const d1 = new Date(document.getElementById("date1").value);
  const d2 = new Date(document.getElementById("date2").value);

  if (isNaN(d1) || isNaN(d2)) {
    setResult("Escolha as duas datas.");
    return;
  }

  const difference = Math.abs(d2 - d1);
  const days = Math.ceil(difference / 86400000);

  setResult(`${days} dias de diferença.`);
}

function saveNotes() {
  const text = document.getElementById("notes").value;

  localStorage.setItem("nexoNotes", text);

  setResult("Nota salva com sucesso!");
}

function clearNotes() {
  localStorage.removeItem("nexoNotes");

  const notes = document.getElementById("notes");

  if (notes) notes.value = "";

  setResult("Nota apagada.");
}

function loadNotes() {
  const notes = document.getElementById("notes");

  if (notes) {
    notes.value = localStorage.getItem("nexoNotes") || "";
  }
}

function getTasks() {
  return JSON.parse(localStorage.getItem("nexoTasks") || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem("nexoTasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (!input || !input.value.trim()) return;

  const tasks = getTasks();

  tasks.push({
    text: input.value.trim(),
    done: false
  });

  saveTasks(tasks);

  input.value = "";

  renderTasks();
}

function toggleTask(index) {
  const tasks = getTasks();

  tasks[index].done = !tasks[index].done;

  saveTasks(tasks);

  renderTasks();
}

function deleteTask(index) {
  const tasks = getTasks();

  tasks.splice(index, 1);

  saveTasks(tasks);

  renderTasks();
}

function clearCompletedTasks() {
  const tasks = getTasks().filter(task => !task.done);

  saveTasks(tasks);

  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");

  if (!list) return;

  const tasks = getTasks();

  list.innerHTML = tasks.map((task, index) => `
    <div class="task-item">
      <button onclick="toggleTask(${index})">
        ${task.done ? "✓" : "○"}
      </button>

      <span style="${task.done ? "text-decoration:line-through;opacity:.5;" : ""}">
        ${esc(task.text)}
      </span>

      <button onclick="deleteTask(${index})">×</button>
    </div>
  `).join("");
}

function startPomodoro() {
  if (pomodoroInterval) return;

  pomodoroInterval = setInterval(() => {
    pomodoroSeconds--;

    const display = document.getElementById("pomodoroDisplay");

    if (display) {
      const min = Math.floor(pomodoroSeconds / 60);
      const sec = pomodoroSeconds % 60;

      display.textContent =
        `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    }

    if (pomodoroSeconds <= 0) {
      stopPomodoro();
      alert("Tempo concluído!");
    }
  }, 1000);
}

function stopPomodoro() {
  clearInterval(pomodoroInterval);
  pomodoroInterval = null;
}

function resetPomodoro() {
  stopPomodoro();
  pomodoroSeconds = 1500;

  const display = document.getElementById("pomodoroDisplay");

  if (display) {
    display.textContent = "25:00";
  }
}

// ===============================
// GERADORES
// ===============================

function secureRandom(max) {
  if (window.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
  }

  return Math.floor(Math.random() * max);
}

function generatePassword() {
  let length = Number(document.getElementById("passLength").value || 16);

  length = Math.max(4, Math.min(length, 100));

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars[secureRandom(chars.length)];
  }

  setResult(password);
}

function generateNumber() {
  const min = getNumber("numMin");
  const max = getNumber("numMax");

  if (max < min) {
    setResult("O máximo precisa ser maior que o mínimo.");
    return;
  }

  setResult(randomInt(min, max));
}

function generateName() {
  const firstNames = [
    "Lucas",
    "Arthur",
    "Miguel",
    "Gabriel",
    "Rafael",
    "Pedro",
    "João",
    "Matheus",
    "Nicolas",
    "Henrique",
    "Laura",
    "Sofia",
    "Alice",
    "Helena",
    "Manuela",
    "Julia"
  ];

  const lastNames = [
    "Silva",
    "Souza",
    "Oliveira",
    "Santos",
    "Costa",
    "Pereira",
    "Almeida",
    "Ferreira",
    "Rodrigues",
    "Gomes"
  ];

  const name =
    firstNames[secureRandom(firstNames.length)] +
    " " +
    lastNames[secureRandom(lastNames.length)];

  setResult(name);
}

function rollDice() {
  setResult(`🎲 Você tirou ${randomInt(1, 6)}`);
}

function generateCode() {
  let length = Number(document.getElementById("codeLength").value || 8);

  length = Math.max(4, Math.min(length, 50));

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code = "";

  for (let i = 0; i < length; i++) {
    code += chars[secureRandom(chars.length)];
  }

  setResult(code);
}

function generateQR() {
  const text = document.getElementById("qrText").value.trim();

  if (!text) {
    alert("Digite um texto ou link.");
    return;
  }

  const url =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(text);

  document.getElementById("qrResult").innerHTML = `
    <img
      src="${url}"
      alt="QR Code"
      style="width:250px;max-width:100%;border-radius:12px;">
  `;
}

function generateColor() {
  const r = secureRandom(256);
  const g = secureRandom(256);
  const b = secureRandom(256);

  const hex =
    "#" +
    [r, g, b]
      .map(x => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();

  const preview = document.getElementById("colorPreview");

  if (preview) {
    preview.style.height = "120px";
    preview.style.borderRadius = "18px";
    preview.style.margin = "15px 0";
    preview.style.background = hex;
  }

  setResult(`${hex} | RGB(${r}, ${g}, ${b})`);
}

function generateLorem() {
  const count = Math.max(
    1,
    Math.min(
      Number(document.getElementById("loremCount").value || 2),
      10
    )
  );

  const base =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.";

  setResult(
    Array(count).fill(base).join("\n\n")
  );
}

function generateUUID() {
  let uuid;

  if (crypto.randomUUID) {
    uuid = crypto.randomUUID();
  } else {
    uuid =
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = secureRandom(16);
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
  }

  setResult(uuid);
}

// ===============================
// INICIALIZAÇÃO
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // Tema
  if (localStorage.getItem("nexoTheme") === "dark") {
    document.body.classList.add("dark");
  }

  render();

  // Carregar notas
  document.addEventListener("click", event => {
    if (
      event.target.closest(".tool-card") &&
      event.target.closest(".tool-card").getAttribute("onclick")?.includes("notas")
    ) {
      setTimeout(loadNotes, 100);
    }

    if (
      event.target.closest(".tool-card") &&
      event.target.closest(".tool-card").getAttribute("onclick")?.includes("tarefas")
    ) {
      setTimeout(renderTasks, 100);
    }
  });

});
