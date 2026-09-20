/* =========================================================
   NEXOTOOLS — SCRIPT PRINCIPAL
========================================================= */

const tools = [
  ["calculadora","🧮","Calculadora","Faça cálculos rapidamente.","Matemática"],
  ["porcentagem","％","Porcentagem","Calcule porcentagens.","Matemática"],
  ["desconto","🏷️","Desconto","Calcule preços com desconto.","Matemática"],
  ["juros","💰","Juros","Calcule juros simples.","Matemática"],
  ["regra","⅓","Regra de três","Resolva regras de três.","Matemática"],
  ["media","📊","Média","Calcule médias.","Matemática"],
  ["idade","🎂","Calculadora de idade","Descubra sua idade.","Matemática"],

  ["temperatura","🌡️","Temperatura","Converta temperaturas.","Conversores"],
  ["comprimento","📏","Comprimento","Converta medidas.","Conversores"],
  ["peso","⚖️","Peso","Converta pesos.","Conversores"],
  ["velocidade","🚀","Velocidade","Converta velocidades.","Conversores"],
  ["dados","💾","Dados digitais","Converta KB, MB, GB e TB.","Conversores"],
  ["tempo","🕐","Tempo","Converta unidades de tempo.","Conversores"],

  ["palavras","📝","Contador de palavras","Conte palavras e caracteres.","Texto"],
  ["maiusculas","Aa","Maiúsculas e minúsculas","Transforme seu texto.","Texto"],
  ["espacos","↔","Limpar espaços","Remova espaços extras.","Texto"],
  ["inverter","⇄","Inverter texto","Inverta qualquer texto.","Texto"],
  ["caracteres","#","Caracteres","Conte caracteres.","Texto"],

  ["cronometro","⏱️","Cronômetro","Cronômetro digital.","Produtividade"],
  ["timer","⏳","Temporizador","Faça contagens regressivas.","Produtividade"],
  ["dias","📅","Contador de dias","Calcule datas.","Produtividade"],
  ["notas","📒","Bloco de notas","Salve suas anotações.","Produtividade"],
  ["tarefas","✓","Lista de tarefas","Organize suas tarefas.","Produtividade"],

  ["senha","🔐","Gerador de senhas","Crie senhas aleatórias.","Geradores"],
  ["numero","🎲","Número aleatório","Sorteie números.","Geradores"],
  ["nomes","🎯","Sorteador de nomes","Escolha um nome aleatório.","Geradores"],
  ["moeda","🪙","Cara ou coroa","Jogue uma moeda.","Geradores"],
  ["dado","🎲","Dado virtual","Role um dado.","Geradores"],
  ["codigo","🔢","Gerador de códigos","Crie códigos numéricos.","Geradores"],
  ["qrcode","▦","QR Code","Gere QR Codes.","Geradores"]
];

let favorites = JSON.parse(
  localStorage.getItem("nexoFavorites") || "[]"
);

let recent = JSON.parse(
  localStorage.getItem("nexoRecent") || "[]"
);

let currentList = tools;


/* =========================================================
   RENDERIZAÇÃO
========================================================= */

function render(list = tools) {

  currentList = list;

  const grid = document.getElementById("toolsGrid");
  const empty = document.getElementById("empty");
  const count = document.getElementById("toolCount");

  if (!grid) return;

  grid.innerHTML = "";

  if (count) {
    count.textContent =
      `${list.length} ${list.length === 1 ? "ferramenta" : "ferramentas"}`;
  }

  if (list.length === 0) {
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  list.forEach(tool => {

    const card = document.createElement("div");

    card.className = "tool";

    const isFavorite = favorites.includes(tool[0]);

    card.innerHTML = `
      <button class="favorite ${isFavorite ? "active" : ""}" type="button">
        ${isFavorite ? "★" : "☆"}
      </button>

      <div class="tool-icon">${tool[1]}</div>

      <h3>${tool[2]}</h3>

      <p>${tool[3]}</p>

      <div class="tool-open">
        Abrir ferramenta →
      </div>
    `;

    const favoriteButton =
      card.querySelector(".favorite");

    favoriteButton.addEventListener("click", function(event) {

      event.preventDefault();
      event.stopPropagation();

      toggleFavorite(tool[0]);

    });

    card.addEventListener("click", function() {

      openTool(tool);

    });

    grid.appendChild(card);
  });
}


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites = favorites.filter(
      item => item !== id
    );

  } else {

    favorites.push(id);

  }

  localStorage.setItem(
    "nexoFavorites",
    JSON.stringify(favorites)
  );

  render(currentList);
}


function showFavorites() {

  document.getElementById("sectionTitle").textContent =
    "Seus favoritos";

  render(
    tools.filter(
      tool => favorites.includes(tool[0])
    )
  );
}


function showRecent() {

  const list = recent
    .map(id => tools.find(tool => tool[0] === id))
    .filter(Boolean);

  document.getElementById("sectionTitle").textContent =
    "Ferramentas recentes";

  render(list);
}


/* =========================================================
   CATEGORIAS
========================================================= */

function showHome() {

  document.getElementById("sectionTitle").textContent =
    "Todas as ferramentas";

  render(tools);
}


function filterCategory(category) {

  document.getElementById("sectionTitle").textContent =
    category;

  render(
    tools.filter(
      tool => tool[4] === category
    )
  );
}


/* =========================================================
   PESQUISA
========================================================= */

function searchTools() {

  const input =
    document.getElementById("searchInput");

  if (!input) return;

  const query =
    input.value.toLowerCase().trim();

  if (!query) {

    showHome();
    return;

  }

  const resultList =
    tools.filter(tool =>
      tool[1].toLowerCase().includes(query) ||
      tool[2].toLowerCase().includes(query) ||
      tool[3].toLowerCase().includes(query) ||
      tool[4].toLowerCase().includes(query)
    );

  document.getElementById("sectionTitle").textContent =
    "Resultados da pesquisa";

  render(resultList);
}


/* =========================================================
   MODAL
========================================================= */

function openTool(tool) {

  recent = [
    tool[0],
    ...recent.filter(id => id !== tool[0])
  ].slice(0, 10);

  localStorage.setItem(
    "nexoRecent",
    JSON.stringify(recent)
  );

  const modal =
    document.getElementById("modal");

  const content =
    document.getElementById("modalContent");

  if (!modal || !content) return;

  content.innerHTML = `
    <h2>${tool[1]} ${tool[2]}</h2>

    <p style="margin-bottom:20px;opacity:.7;">
      ${tool[3]}
    </p>

    ${createTool(tool[0])}
  `;

  modal.classList.add("show");

  setupTool(tool[0]);
}


function closeTool() {

  const modal =
    document.getElementById("modal");

  if (modal) {
    modal.classList.remove("show");
  }
}


/* Fechar clicando fora */

const modalElement =
  document.getElementById("modal");

if (modalElement) {

  modalElement.addEventListener(
    "click",
    function(event) {

      if (event.target === modalElement) {
        closeTool();
      }

    }
  );

}


/* ESC fecha o modal */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {
      closeTool();
    }

  }
);


/* =========================================================
   CAMPOS
========================================================= */

function field(id, placeholder, type = "number") {

  return `
    <div class="field">
      <input
        id="${id}"
        type="${type}"
        placeholder="${placeholder}"
      >
    </div>
  `;
}


function textarea(id, placeholder) {

  return `
    <div class="field">
      <textarea
        id="${id}"
        placeholder="${placeholder}"
      ></textarea>
    </div>
  `;
}


/* =========================================================
   INTERFACES
========================================================= */

function createTool(id) {

  switch (id) {

    case "calculadora":
      return `
        ${field("calc", "Ex.: 25 + 10 * 2", "text")}
        <button class="tool-button" onclick="calculate()">
          Calcular
        </button>
        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "porcentagem":
      return `
        ${field("p1", "Valor")}
        ${field("p2", "Porcentagem")}

        <button class="tool-button" onclick="percentage()">
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "desconto":
      return `
        ${field("price", "Preço")}
        ${field("discount", "Desconto (%)")}

        <button class="tool-button" onclick="discount()">
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "juros":
      return `
        ${field("capital", "Capital")}
        ${field("rate", "Taxa (%)")}
        ${field("months", "Tempo em meses")}

        <button class="tool-button" onclick="interest()">
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "regra":
      return `
        ${field("ra", "A")}
        ${field("rb", "B")}
        ${field("rc", "C")}

        <button class="tool-button" onclick="ruleOfThree()">
          Resolver
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "media":
      return `
        ${field("numbers", "Ex.: 7, 8, 9, 10", "text")}

        <button class="tool-button" onclick="average()">
          Calcular média
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "idade":
      return `
        ${field("birth", "", "date")}

        <button class="tool-button" onclick="calculateAge()">
          Calcular idade
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "temperatura":
      return converter(
        "temperatura",
        ["Celsius", "Fahrenheit", "Kelvin"]
      );


    case "comprimento":
      return converter(
        "comprimento",
        ["Metro", "Quilômetro", "Centímetro", "Milímetro"]
      );


    case "peso":
      return converter(
        "peso",
        ["Quilograma", "Grama", "Miligrama", "Tonelada"]
      );


    case "velocidade":
      return converter(
        "velocidade",
        ["km/h", "m/s", "mph"]
      );


    case "dados":
      return converter(
        "dados",
        ["KB", "MB", "GB", "TB"]
      );


    case "tempo":
      return converter(
        "tempo",
        ["Segundos", "Minutos", "Horas", "Dias"]
      );


    case "palavras":
      return `
        ${textarea("textTool", "Digite seu texto...")}

        <button class="tool-button" onclick="countWords()">
          Contar
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "maiusculas":
      return `
        ${textarea("textTool", "Digite seu texto...")}

        <button class="tool-button" onclick="toUpper()">
          MAIÚSCULAS
        </button>

        <button class="tool-button" onclick="toLower()">
          minúsculas
        </button>

        <div id="result" class="result"></div>
      `;


    case "espacos":
      return `
        ${textarea("textTool", "Digite seu texto...")}

        <button class="tool-button" onclick="cleanSpaces()">
          Limpar espaços
        </button>

        <div id="result" class="result"></div>
      `;


    case "inverter":
      return `
        ${textarea("textTool", "Digite seu texto...")}

        <button class="tool-button" onclick="reverseText()">
          Inverter
        </button>

        <div id="result" class="result"></div>
      `;


    case "caracteres":
      return `
        ${textarea("textTool", "Digite seu texto...")}

        <button class="tool-button" onclick="countCharacters()">
          Contar
        </button>

        <div id="result" class="result"></div>
      `;


    case "cronometro":
      return `
        <div
          id="stopwatch"
          class="result"
          style="font-size:36px;text-align:center"
        >
          00:00:00
        </div>

        <button class="tool-button" onclick="startStopwatch()">
          Iniciar
        </button>

        <button class="tool-button" onclick="stopStopwatch()">
          Parar
        </button>

        <button class="tool-button" onclick="resetStopwatch()">
          Resetar
        </button>
      `;


    case "timer":
      return `
        ${field("timerMinutes", "Minutos")}
        ${field("timerSeconds", "Segundos")}

        <button class="tool-button" onclick="startTimer()">
          Iniciar
        </button>

        <div
          id="timerDisplay"
          class="result"
          style="font-size:30px;text-align:center"
        >
          00:00
        </div>
      `;


    case "dias":
      return `
        ${field("dateStart", "", "date")}
        ${field("dateEnd", "", "date")}

        <button class="tool-button" onclick="calculateDays()">
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "notas":
      return `
        ${textarea("notes", "Escreva suas anotações...")}

        <button class="tool-button" onclick="saveNotes()">
          Salvar
        </button>

        <button class="tool-button" onclick="clearNotes()">
          Limpar
        </button>

        <div id="result" class="result"></div>
      `;


    case "tarefas":
      return `
        ${field("task", "Nova tarefa", "text")}

        <button class="tool-button" onclick="addTask()">
          Adicionar
        </button>

        <div id="taskList" class="result"></div>
      `;


    case "senha":
      return `
        ${field("passwordLength", "Quantidade de caracteres")}

        <button class="tool-button" onclick="generatePassword()">
          Gerar senha
        </button>

        <div id="result" class="result">
          Sua senha aparecerá aqui.
        </div>
      `;


    case "numero":
      return `
        ${field("randomMin", "Mínimo")}
        ${field("randomMax", "Máximo")}

        <button class="tool-button" onclick="randomNumber()">
          Sortear
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "nomes":
      return `
        ${textarea("names", "Digite um nome por linha...")}

        <button class="tool-button" onclick="drawName()">
          Sortear nome
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "moeda":
      return `
        <button class="tool-button" onclick="flipCoin()">
          Lançar moeda
        </button>

        <div
          id="result"
          class="result"
          style="font-size:30px;text-align:center"
        >
          🪙
        </div>
      `;


    case "dado":
      return `
        <button class="tool-button" onclick="rollDice()">
          Rolar dado
        </button>

        <div
          id="result"
          class="result"
          style="font-size:35px;text-align:center"
        >
          🎲
        </div>
      `;


    case "codigo":
      return `
        ${field("codeLength", "Quantidade de números")}

        <button class="tool-button" onclick="generateCode()">
          Gerar código
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "qrcode":
      return `
        ${field("qrText", "Texto ou link", "text")}

        <button class="tool-button" onclick="generateQR()">
          Gerar QR Code
        </button>

        <div
          id="qrResult"
          class="result"
          style="text-align:center"
        ></div>
      `;

    default:
      return `<p>Ferramenta não encontrada.</p>`;
  }
}


/* =========================================================
   CONVERSORES
========================================================= */

function converter(id, options) {

  return `
    ${field("convertValue", "Valor")}

    <div class="field">
      <select id="convertUnit">
        ${options.map(
          option => `<option>${option}</option>`
        ).join("")}
      </select>
    </div>

    <button
      class="tool-button"
      onclick="convertValue('${id}')"
    >
      Converter
    </button>

    <div id="result" class="result">
      Resultado
    </div>
  `;
}


/* =========================================================
   RESULTADO
========================================================= */

function result(value) {

  const element =
    document.getElementById("result");

  if (!element) return;

  element.innerHTML = value;
}


/* =========================================================
   MATEMÁTICA
========================================================= */

function calculate() {

  const input =
    document.getElementById("calc");

  if (!input) return;

  const expression =
    input.value.trim();

  if (!expression) {
    result("Digite uma expressão.");
    return;
  }

  if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
    result("Expressão inválida.");
    return;
  }

  try {

    const value = Function(
      `"use strict"; return (${expression})`
    )();

    if (!Number.isFinite(value)) {
      result("Resultado inválido.");
      return;
    }

    result("Resultado: <strong>" + value + "</strong>");

  } catch {

    result("Não foi possível calcular.");

  }
}


function percentage() {

  const value =
    Number(document.getElementById("p1").value);

  const percent =
    Number(document.getElementById("p2").value);

  if (!Number.isFinite(value) || !Number.isFinite(percent)) {
    result("Digite valores válidos.");
    return;
  }

  result(
    `${percent}% de ${value} = <strong>${(
      value * percent / 100
    ).toFixed(2)}</strong>`
  );
}


function discount() {

  const price =
    Number(document.getElementById("price").value);

  const discountValue =
    Number(document.getElementById("discount").value);

  if (!Number.isFinite(price) || !Number.isFinite(discountValue)) {
    result("Digite valores válidos.");
    return;
  }

  const finalPrice =
    price - price * discountValue / 100;

  result(
    `Preço final: <strong>R$ ${finalPrice.toFixed(2)}</strong>`
  );
}


function interest() {

  const capital =
    Number(document.getElementById("capital").value);

  const rate =
    Number(document.getElementById("rate").value);

  const months =
    Number(document.getElementById("months").value);

  if (
    !Number.isFinite(capital) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(months)
  ) {
    result("Preencha todos os campos.");
    return;
  }

  const interestValue =
    capital * rate / 100 * months;

  const total =
    capital + interestValue;

  result(`
    Juros: <strong>R$ ${interestValue.toFixed(2)}</strong>
    <br>
    Montante: <strong>R$ ${total.toFixed(2)}</strong>
  `);
}


function ruleOfThree() {

  const a = Number(
    document.getElementById("ra").value
  );

  const b = Number(
    document.getElementById("rb").value
  );

  const c = Number(
    document.getElementById("rc").value
  );

  if (!Number.isFinite(a) ||
      !Number.isFinite(b) ||
      !Number.isFinite(c)) {

    result("Preencha todos os campos.");
    return;
  }

  if (a === 0) {
    result("A não pode ser zero.");
    return;
  }

  result(
    `X = <strong>${(b * c / a).toFixed(2)}</strong>`
  );
}


function average() {

  const input =
    document.getElementById("numbers");

  const numbers =
    input.value
      .split(",")
      .map(Number)
      .filter(Number.isFinite);

  if (!numbers.length) {
    result("Digite números válidos.");
    return;
  }

  const avg =
    numbers.reduce(
      (sum, number) => sum + number,
      0
    ) / numbers.length;

  result(
    `Média: <strong>${avg.toFixed(2)}</strong>`
  );
}


function calculateAge() {

  const value =
    document.getElementById("birth").value;

  if (!value) {
    result("Escolha uma data.");
    return;
  }

  const birth = new Date(value + "T00:00:00");
  const today = new Date();

  let age =
    today.getFullYear() -
    birth.getFullYear();

  const birthdayThisYear =
    new Date(
      today.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );

  if (today < birthdayThisYear) {
    age--;
  }

  result(
    `Você tem <strong>${age} anos</strong>.`
  );
}


/* =========================================================
   TEXTO
========================================================= */

function countWords() {

  const text =
    document.getElementById("textTool").value;

  const words =
    text.trim()
      ? text.trim().split(/\s+/).length
      : 0;

  result(`
    Palavras: <strong>${words}</strong>
    <br>
    Caracteres: <strong>${text.length}</strong>
  `);
}


function toUpper() {

  result(
    document
      .getElementById("textTool")
      .value
      .toUpperCase()
  );
}


function toLower() {

  result(
    document
      .getElementById("textTool")
      .value
      .toLowerCase()
  );
}


function cleanSpaces() {

  result(
    document
      .getElementById("textTool")
      .value
      .replace(/\s+/g, " ")
      .trim()
  );
}


function reverseText() {

  result(
    document
      .getElementById("textTool")
      .value
      .split("")
      .reverse()
      .join("")
  );
}


function countCharacters() {

  const text =
    document.getElementById("textTool").value;

  result(`
    Com espaços: <strong>${text.length}</strong>
    <br>
    Sem espaços: <strong>${text.replace(/\s/g, "").length}</strong>
  `);
}


/* =========================================================
   GERADORES
========================================================= */

function generatePassword() {

  const lengthInput =
    Number(
      document.getElementById("passwordLength").value
    );

  const length =
    Math.min(
      Math.max(lengthInput || 12, 4),
      100
    );

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  let password = "";

  for (let i = 0; i < length; i++) {

    password +=
      chars[
        Math.floor(
          Math.random() * chars.length
        )
      ];

  }

  result(
    `<strong>${escapeHTML(password)}</strong>`
  );
}


function randomNumber() {

  const min =
    Number(
      document.getElementById("randomMin").value
    );

  const max =
    Number(
      document.getElementById("randomMax").value
    );

  if (!Number.isFinite(min) ||
      !Number.isFinite(max)) {

    result("Digite o mínimo e o máximo.");
    return;
  }

  if (max < min) {
    result("O máximo precisa ser maior que o mínimo.");
    return;
  }

  const number =
    Math.floor(
      Math.random() * (max - min + 1)
    ) + min;

  result(
    `Número sorteado: <strong>${number}</strong>`
  );
}


function drawName() {

  const names =
    document
      .getElementById("names")
      .value
      .split("\n")
      .map(name => name.trim())
      .filter(Boolean);

  if (!names.length) {
    result("Digite pelo menos um nome.");
    return;
  }

  const selected =
    names[
      Math.floor(
        Math.random() * names.length
      )
    ];

  result(
    `🎯 <strong>${escapeHTML(selected)}</strong>`
  );
}


function flipCoin() {

  result(
    Math.random() < 0.5
      ? "🪙 <strong>CARA</strong>"
      : "🪙 <strong>COROA</strong>"
  );
}


function rollDice() {

  const number =
    Math.floor(Math.random() * 6) + 1;

  result(
    `🎲 <strong>${number}</strong>`
  );
}


function generateCode() {

  const input =
    Number(
      document.getElementById("codeLength").value
    );

  const length =
    Math.min(
      Math.max(input || 6, 1),
      30
    );

  let code = "";

  for (let i = 0; i < length; i++) {

    code +=
      Math.floor(Math.random() * 10);

  }

  result(
    `<strong>${code}</strong>`
  );
}


/* =========================================================
   QR CODE
========================================================= */

function generateQR() {

  const input =
    document.getElementById("qrText");

  const output =
    document.getElementById("qrResult");

  if (!input || !output) return;

  const text =
    input.value.trim();

  if (!text) {

    output.innerHTML =
      "Digite um texto ou link.";

    return;
  }

  output.innerHTML = `
    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(text)}"
      alt="QR Code"
      style="width:220px;height:220px;max-width:100%;border-radius:12px;"
    >
  `;
}


/* =========================================================
   CRONÔMETRO
========================================================= */

let stopwatchSeconds = 0;
let stopwatchInterval = null;

function updateStopwatch() {

  const display =
    document.getElementById("stopwatch");

  if (!display) return;

  const hours =
    Math.floor(stopwatchSeconds / 3600);

  const minutes =
    Math.floor(
      (stopwatchSeconds % 3600) / 60
    );

  const seconds =
    stopwatchSeconds % 60;

  display.textContent =
    `${String(hours).padStart(2,"0")}:` +
    `${String(minutes).padStart(2,"0")}:` +
    `${String(seconds).padStart(2,"0")}`;
}


function startStopwatch() {

  if (stopwatchInterval !== null) return;

  stopwatchInterval =
    setInterval(function() {

      stopwatchSeconds++;
      updateStopwatch();

    }, 1000);
}


function stopStopwatch() {

  clearInterval(stopwatchInterval);

  stopwatchInterval = null;
}


function resetStopwatch() {

  stopStopwatch();

  stopwatchSeconds = 0;

  updateStopwatch();
}


/* =========================================================
   TEMPORIZADOR
========================================================= */

let timerInterval = null;

function startTimer() {

  clearInterval(timerInterval);

  const minutes =
    Number(
      document.getElementById("timerMinutes").value
    ) || 0;

  const seconds =
    Number(
      document.getElementById("timerSeconds").value
    ) || 0;

  let total =
    minutes * 60 + seconds;

  if (total <= 0) {

    result("Defina um tempo.");
    return;
  }

  const display =
    document.getElementById("timerDisplay");

  function updateTimer() {

    const min =
      Math.floor(total / 60);

    const sec =
      total % 60;

    display.textContent =
      `${String(min).padStart(2,"0")}:` +
      `${String(sec).padStart(2,"0")}`;

    if (total <= 0) {

      clearInterval(timerInterval);

      timerInterval = null;

      display.textContent = "00:00";

      return;
    }

    total--;
  }

  updateTimer();

  timerInterval =
    setInterval(updateTimer, 1000);
}


/* =========================================================
   DATAS
========================================================= */

function calculateDays() {

  const startValue =
    document.getElementById("dateStart").value;

  const endValue =
    document.getElementById("dateEnd").value;

  if (!startValue || !endValue) {

    result("Escolha as duas datas.");
    return;
  }

  const start =
    new Date(startValue + "T00:00:00");

  const end =
    new Date(endValue + "T00:00:00");

  const difference =
    Math.abs(end - start);

  const days =
    Math.round(
      difference / 86400000
    );

  result(
    `<strong>${days}</strong> ${
      days === 1 ? "dia" : "dias"
    }`
  );
}


/* =========================================================
   NOTAS
========================================================= */

function setupTool(id) {

  if (id === "notas") {

    const saved =
      localStorage.getItem("nexoNotes");

    const notes =
      document.getElementById("notes");

    if (saved && notes) {
      notes.value = saved;
    }
  }

  if (id === "tarefas") {
    renderTasks();
  }
}


function saveNotes() {

  const notes =
    document.getElementById("notes");

  if (!notes) return;

  localStorage.setItem(
    "nexoNotes",
    notes.value
  );

  result("✓ Anotação salva!");
}


function clearNotes() {

  const notes =
    document.getElementById("notes");

  if (!notes) return;

  notes.value = "";

  localStorage.removeItem("nexoNotes");

  result("Anotação apagada.");
}


/* =========================================================
   TAREFAS
========================================================= */

let tasks =
  JSON.parse(
    localStorage.getItem("nexoTasks") || "[]"
  );


function addTask() {

  const input =
    document.getElementById("task");

  if (!input) return;

  const text =
    input.value.trim();

  if (!text) {
    return;
  }

  tasks.push({
    text: text,
    done: false
  });

  input.value = "";

  saveTasks();

  renderTasks();
}


function renderTasks() {

  const list =
    document.getElementById("taskList");

  if (!list) return;

  if (!tasks.length) {

    list.innerHTML =
      "Nenhuma tarefa ainda.";

    return;
  }

  list.innerHTML = "";

  tasks.forEach(function(task, index) {

    const item =
      document.createElement("div");

    item.style.cssText = `
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      padding:10px 0;
      border-bottom:1px solid var(--border);
    `;

    const text =
      document.createElement("span");

    text.textContent = task.text;

    text.style.cssText = `
      cursor:pointer;
      text-decoration:${task.done ? "line-through" : "none"};
      opacity:${task.done ? ".5" : "1"};
      flex:1;
    `;

    text.onclick = function() {

      tasks[index].done =
        !tasks[index].done;

      saveTasks();
      renderTasks();
    };

    const remove =
      document.createElement("button");

    remove.textContent = "×";
    remove.className = "tool-button";
    remove.style.padding = "6px 10px";

    remove.onclick = function() {

      tasks.splice(index, 1);

      saveTasks();
      renderTasks();
    };

    item.appendChild(text);
    item.appendChild(remove);

    list.appendChild(item);
  });
}


function saveTasks() {

  localStorage.setItem(
    "nexoTasks",
    JSON.stringify(tasks)
  );
}


/* =========================================================
   CONVERSORES
========================================================= */

function convertValue(type) {

  const value =
    Number(
      document.getElementById("convertValue").value
    );

  const unit =
    document.getElementById("convertUnit").value;

  if (!Number.isFinite(value)) {

    result("Digite um valor válido.");
    return;
  }


  /* TEMPERATURA */

  if (type === "temperatura") {

    let celsius = value;

    if (unit === "Fahrenheit") {
      celsius = (value - 32) * 5 / 9;
    }

    if (unit === "Kelvin") {
      celsius = value - 273.15;
    }

    result(`
      Celsius: <strong>${celsius.toFixed(2)} °C</strong>
      <br>
      Fahrenheit: <strong>${(celsius * 9 / 5 + 32).toFixed(2)} °F</strong>
      <br>
      Kelvin: <strong>${(celsius + 273.15).toFixed(2)} K</strong>
    `);

    return;
  }


  /* COMPRIMENTO */

  if (type === "comprimento") {

    const factors = {
      "Metro": 1,
      "Quilômetro": 1000,
      "Centímetro": 0.01,
      "Milímetro": 0.001
    };

    const meters =
      value * factors[unit];

    result(`
      Metro: <strong>${meters.toFixed(4)} m</strong>
      <br>
      Quilômetro: <strong>${(meters / 1000).toFixed(4)} km</strong>
      <br>
      Centímetro: <strong>${(meters * 100).toFixed(2)} cm</strong>
      <br>
      Milímetro: <strong>${(meters * 1000).toFixed(2)} mm</strong>
    `);

    return;
  }


  /* PESO */

  if (type === "peso") {

    const factors = {
      "Quilograma": 1,
      "Grama": 0.001,
      "Miligrama": 0.000001,
      "Tonelada": 1000
    };

    const kg =
      value * factors[unit];

    result(`
      Quilogramas: <strong>${kg.toFixed(4)} kg</strong>
      <br>
      Gramas: <strong>${(kg * 1000).toFixed(2)} g</strong>
      <br>
      Miligramas: <strong>${(kg * 1000000).toFixed(2)} mg</strong>
      <br>
      Toneladas: <strong>${(kg / 1000).toFixed(6)} t</strong>
    `);

    return;
  }


  /* VELOCIDADE */

  if (type === "velocidade") {

    let ms;

    if (unit === "km/h") {
      ms = value / 3.6;
    }

    if (unit === "m/s") {
      ms = value;
    }

    if (unit === "mph") {
      ms = value * 0.44704;
    }

    result(`
      km/h: <strong>${(ms * 3.6).toFixed(2)}</strong>
      <br>
      m/s: <strong>${ms.toFixed(2)}</strong>
      <br>
      mph: <strong>${(ms / 0.44704).toFixed(2)}</strong>
    `);

    return;
  }


  /* DADOS */

  if (type === "dados") {

    const factors = {
      "KB": 1,
      "MB": 1024,
      "GB": 1024 ** 2,
      "TB": 1024 ** 3
    };

    const kb =
      value * factors[unit];

    result(`
      KB: <strong>${kb.toFixed(2)}</strong>
      <br>
      MB: <strong>${(kb / 1024).toFixed(2)}</strong>
      <br>
      GB: <strong>${(kb / 1024 ** 2).toFixed(2)}</strong>
      <br>
      TB: <strong>${(kb / 1024 ** 3).toFixed(2)}</strong>
    `);

    return;
  }


  /* TEMPO */

  if (type === "tempo") {

    let seconds = value;

    if (unit === "Minutos") {
      seconds = value * 60;
    }

    if (unit === "Horas") {
      seconds = value * 3600;
    }

    if (unit === "Dias") {
      seconds = value * 86400;
    }

    result(`
      Segundos: <strong>${seconds.toFixed(2)}</strong>
      <br>
      Minutos: <strong>${(seconds / 60).toFixed(2)}</strong>
      <br>
      Horas: <strong>${(seconds / 3600).toFixed(2)}</strong>
      <br>
      Dias: <strong>${(seconds / 86400).toFixed(2)}</strong>
    `);
  }
}


/* =========================================================
   TEMA
========================================================= */

function toggleTheme() {

  document.body.classList.toggle("dark");

  localStorage.setItem(
    "nexoTheme",
    document.body.classList.contains("dark")
      ? "dark"
      : "light"
  );
}


if (
  localStorage.getItem("nexoTheme") === "dark"
) {

  document.body.classList.add("dark");

}


/* =========================================================
   MENU MOBILE
========================================================= */

function toggleSidebar() {

  const sidebar =
    document.querySelector(".sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle("open");
}


/* =========================================================
   SCROLL
========================================================= */

function scrollToTools() {

  const section =
    document.getElementById("toolsSection");

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth"
  });
}


/* =========================================================
   AUXILIAR
========================================================= */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

render();
