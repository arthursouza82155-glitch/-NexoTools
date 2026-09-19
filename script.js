/* =========================
   NEXOTOOLS
========================= */

const searchInput = document.getElementById("searchInput");
const categories = document.querySelectorAll(".category");
const toolCards = document.querySelectorAll(".tool-card");
const noResults = document.getElementById("noResults");

const toolSection = document.getElementById("toolSection");
const toolTitle = document.getElementById("toolTitle");
const toolDescription = document.getElementById("toolDescription");
const toolContent = document.getElementById("toolContent");
const closeTool = document.getElementById("closeTool");

let currentCategory = "all";


/* =========================
   PESQUISA
========================= */

function filterTools() {

  const search = searchInput.value
    .toLowerCase()
    .trim();

  let visible = 0;

  toolCards.forEach(card => {

    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch =
      name.includes(search);

    const matchesCategory =
      currentCategory === "all" ||
      category === currentCategory;

    if (matchesSearch && matchesCategory) {

      card.style.display = "";

      visible++;

    } else {

      card.style.display = "none";

    }

  });

  noResults.classList.toggle(
    "hidden",
    visible !== 0
  );
}

searchInput.addEventListener(
  "input",
  filterTools
);


/* =========================
   CATEGORIAS
========================= */

categories.forEach(button => {

  button.addEventListener("click", () => {

    categories.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    currentCategory =
      button.dataset.category;

    filterTools();

  });

});


/* =========================
   ABRIR FERRAMENTA
========================= */

document.querySelectorAll(".open-tool")
.forEach(button => {

  button.addEventListener("click", () => {

    const tool =
      button.dataset.tool;

    openTool(tool);

  });

});


function openTool(tool) {

  toolSection.classList.remove("hidden");

  if (tool === "calculator") {

    toolTitle.textContent =
      "🧮 Calculadora";

    toolDescription.textContent =
      "Faça cálculos rapidamente.";

    toolContent.innerHTML = calculatorHTML();

  }


  if (tool === "counter") {

    toolTitle.textContent =
      "📝 Contador de texto";

    toolDescription.textContent =
      "Conte palavras e caracteres.";

    toolContent.innerHTML = counterHTML();

  }


  if (tool === "qr") {

    toolTitle.textContent =
      "🔳 Gerador de QR Code";

    toolDescription.textContent =
      "Transforme um texto ou link em QR Code.";

    toolContent.innerHTML = qrHTML();

  }


  if (tool === "password") {

    toolTitle.textContent =
      "🔐 Gerador de senha";

    toolDescription.textContent =
      "Crie uma senha aleatória.";

    toolContent.innerHTML = passwordHTML();

  }


  if (tool === "cpf") {

    toolTitle.textContent =
      "🪪 Gerador de CPF";

    toolDescription.textContent =
      "Gere um CPF para testes.";

    toolContent.innerHTML = cpfHTML();

  }


  toolSection.scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================
   CALCULADORA
========================= */

function calculatorHTML() {

  return `

    <div class="calculator">

      <input
        id="calcDisplay"
        class="calculator-display"
        readonly
      >

      <div class="calculator-grid">

        <button class="calc-btn" onclick="clearCalc()">C</button>
        <button class="calc-btn" onclick="deleteCalc()">⌫</button>
        <button class="calc-btn operator" onclick="addCalc('/')">÷</button>
        <button class="calc-btn operator" onclick="addCalc('*')">×</button>

        <button class="calc-btn" onclick="addCalc('7')">7</button>
        <button class="calc-btn" onclick="addCalc('8')">8</button>
        <button class="calc-btn" onclick="addCalc('9')">9</button>
        <button class="calc-btn operator" onclick="addCalc('-')">−</button>

        <button class="calc-btn" onclick="addCalc('4')">4</button>
        <button class="calc-btn" onclick="addCalc('5')">5</button>
        <button class="calc-btn" onclick="addCalc('6')">6</button>
        <button class="calc-btn operator" onclick="addCalc('+')">+</button>

        <button class="calc-btn" onclick="addCalc('1')">1</button>
        <button class="calc-btn" onclick="addCalc('2')">2</button>
        <button class="calc-btn" onclick="addCalc('3')">3</button>
        <button class="calc-btn equal" onclick="calculate()">=</button>

        <button class="calc-btn" onclick="addCalc('0')">0</button>
        <button class="calc-btn" onclick="addCalc('.')">.</button>

      </div>

    </div>

  `;
}


function addCalc(value) {

  const display =
    document.getElementById("calcDisplay");

  display.value += value;

}


function clearCalc() {

  document.getElementById(
    "calcDisplay"
  ).value = "";

}


function deleteCalc() {

  const display =
    document.getElementById("calcDisplay");

  display.value =
    display.value.slice(0, -1);

}


function calculate() {

  const display =
    document.getElementById("calcDisplay");

  try {

    if (!/^[0-9+\-*/.() ]+$/.test(display.value)) {
      throw new Error();
    }

    display.value =
      Function(`"use strict"; return (${display.value})`)();

  } catch {

    display.value = "Erro";

  }

}


/* =========================
   CONTADOR
========================= */

function counterHTML() {

  return `

    <div class="form-group">

      <label>Digite seu texto</label>

      <textarea
        id="counterText"
        class="form-control"
        placeholder="Digite ou cole seu texto..."
      ></textarea>

    </div>

    <div class="stats">

      <div class="stat-card">
        <strong id="wordCount">0</strong>
        <span>Palavras</span>
      </div>

      <div class="stat-card">
        <strong id="charCount">0</strong>
        <span>Caracteres</span>
      </div>

      <div class="stat-card">
        <strong id="charNoSpace">0</strong>
        <span>Sem espaços</span>
      </div>

    </div>

  `;

}


document.addEventListener("input", event => {

  if (event.target.id !== "counterText") {
    return;
  }

  const text =
    event.target.value;

  const words =
    text.trim()
      ? text.trim().split(/\s+/).length
      : 0;

  document.getElementById(
    "wordCount"
  ).textContent = words;

  document.getElementById(
    "charCount"
  ).textContent = text.length;

  document.getElementById(
    "charNoSpace"
  ).textContent =
    text.replace(/\s/g, "").length;

});


/* =========================
   QR CODE
========================= */

function qrHTML() {

  return `

    <div class="form-group">

      <label>Texto ou link</label>

      <input
        id="qrText"
        class="form-control"
        placeholder="https://exemplo.com"
      >

    </div>

    <div class="tool-actions">

      <button
        class="btn btn-primary"
        onclick="generateQR()"
      >
        Gerar QR Code
      </button>

    </div>

    <div
      id="qrResult"
      class="qr-container"
    ></div>

  `;

}


function generateQR() {

  const text =
    document.getElementById(
      "qrText"
    ).value.trim();

  const result =
    document.getElementById(
      "qrResult"
    );

  if (!text) {

    result.innerHTML =
      "<p>Digite algo primeiro.</p>";

    return;

  }

  result.innerHTML = `

    <div>

      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(text)}"
        alt="QR Code"
      >

      <br><br>

      <button
        class="btn btn-secondary"
        onclick="copyText('${text.replace(/'/g, "\\'")}')"
      >
        Copiar texto
      </button>

    </div>

  `;

}


/* =========================
   SENHA
========================= */

function passwordHTML() {

  return `

    <div class="form-group">

      <label>Tamanho da senha</label>

      <input
        id="passwordLength"
        class="form-control"
        type="number"
        min="4"
        max="50"
        value="16"
      >

    </div>

    <div class="tool-actions">

      <button
        class="btn btn-primary"
        onclick="generatePassword()"
      >
        Gerar senha
      </button>

    </div>

    <div
      id="passwordResult"
      class="result-box"
    ></div>

  `;

}


function generatePassword() {

  const length =
    Number(
      document.getElementById(
        "passwordLength"
      ).value
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

  const result =
    document.getElementById(
      "passwordResult"
    );

  result.classList.add("show");

  result.innerHTML = `

    <div class="result-title">
      Sua senha:
    </div>

    <div class="result-content">
      ${password}
    </div>

    <br>

    <button
      class="btn btn-secondary"
      onclick="copyText('${password}')"
    >
      Copiar senha
    </button>

  `;

}


/* =========================
   CPF
========================= */

function cpfHTML() {

  return `

    <div class="tool-actions">

      <button
        class="btn btn-primary"
        onclick="generateCPF()"
      >
        Gerar CPF
      </button>

    </div>

    <div
      id="cpfResult"
      class="result-box"
    ></div>

  `;

}


function generateCPF() {

  const numbers = [];

  for (let i = 0; i < 9; i++) {

    numbers.push(
      Math.floor(Math.random() * 10)
    );

  }

  let sum = 0;

  for (let i = 0; i < 9; i++) {

    sum +=
      numbers[i] * (10 - i);

  }

  let digit1 =
    11 - (sum % 11);

  if (digit1 >= 10) {
    digit1 = 0;
  }

  numbers.push(digit1);

  sum = 0;

  for (let i = 0; i < 10; i++) {

    sum +=
      numbers[i] * (11 - i);

  }

  let digit2 =
    11 - (sum % 11);

  if (digit2 >= 10) {
    digit2 = 0;
  }

  numbers.push(digit2);

  const cpf =
    numbers.join("")
      .replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );

  const result =
    document.getElementById(
      "cpfResult"
    );

  result.classList.add("show");

  result.innerHTML = `

    <div class="result-title">
      CPF gerado:
    </div>

    <div class="result-content">
      ${cpf}
    </div>

    <br>

    <button
      class="btn btn-secondary"
      onclick="copyText('${cpf}')"
    >
      Copiar CPF
    </button>

  `;

}


/* =========================
   COPIAR
========================= */

function copyText(text) {

  navigator.clipboard.writeText(text)
    .then(() => {

      alert("Copiado!");

    })
    .catch(() => {

      alert("Não foi possível copiar.");

    });

}


/* =========================
   FECHAR FERRAMENTA
========================= */

closeTool.addEventListener(
  "click",
  () => {

    toolSection.classList.add("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =========================
   MODO ESCURO
========================= */

const themeToggle =
  document.getElementById(
    "themeToggle"
  );

const savedTheme =
  localStorage.getItem(
    "nexotools-theme"
  );

if (savedTheme === "dark") {

  document.body.classList.add("dark");

  themeToggle.textContent = "☀️";

}


themeToggle.addEventListener(
  "click",
  () => {

    document.body.classList.toggle("dark");

    const dark =
      document.body.classList.contains("dark");

    themeToggle.textContent =
      dark ? "☀️" : "🌙";

    localStorage.setItem(
      "nexotools-theme",
      dark ? "dark" : "light"
    );

  }
);


/* =========================
   MENU MOBILE
========================= */

const menuButton =
  document.getElementById(
    "menuButton"
  );

menuButton.addEventListener(
  "click",
  () => {

    const nav =
      document.querySelector(
        ".nav-links"
      );

    nav.classList.toggle("mobile-open");

  }
);


/* =========================
   FORMULÁRIO
========================= */

const contactForm =
  document.getElementById(
    "contactForm"
  );

contactForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    const result =
      document.getElementById(
        "contactResult"
      );

    result.innerHTML = `

      <div class="alert alert-success">
        Mensagem preparada com sucesso!
        Em uma versão futura, podemos conectar
        este formulário a um serviço de e-mail.
      </div>

    `;

    contactForm.reset();

  }
);
