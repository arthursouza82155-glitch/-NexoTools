const tools = [
  // MATEMÁTICA
  {id:"calculadora",name:"Calculadora",category:"Matemática",icon:"∑",description:"Faça cálculos rapidamente.",keywords:"calcular conta matemática"},
  {id:"porcentagem",name:"Porcentagem",category:"Matemática",icon:"%",description:"Calcule porcentagens.",keywords:"porcentagem percent"},
  {id:"desconto",name:"Desconto",category:"Matemática",icon:"↓",description:"Calcule descontos.",keywords:"desconto preço"},
  {id:"juros",name:"Juros simples",category:"Matemática",icon:"₿",description:"Calcule juros simples.",keywords:"juros dinheiro"},
  {id:"regra",name:"Regra de três",category:"Matemática",icon:"⅓",description:"Resolva regras de três.",keywords:"regra três proporção"},
  {id:"media",name:"Média simples",category:"Matemática",icon:"x̄",description:"Calcule a média de números.",keywords:"média números"},
  {id:"mediaEscolar",name:"Média escolar",category:"Matemática",icon:"🎓",description:"Calcule sua média escolar.",keywords:"escola notas"},
  {id:"idade",name:"Calculadora de idade",category:"Matemática",icon:"🎂",description:"Descubra sua idade.",keywords:"idade aniversário"},
  {id:"area",name:"Calculadora de área",category:"Matemática",icon:"▣",description:"Calcule áreas.",keywords:"área quadrado círculo"},
  {id:"potencia",name:"Potência",category:"Matemática",icon:"xⁿ",description:"Calcule potências.",keywords:"potência expoente"},
  {id:"raiz",name:"Raiz quadrada",category:"Matemática",icon:"√",description:"Calcule raízes quadradas.",keywords:"raiz"},
  {id:"tabuada",name:"Tabuada",category:"Matemática",icon:"×",description:"Gere uma tabuada.",keywords:"tabuada multiplicação"},

  // CONVERSORES
  {id:"temperatura",name:"Temperatura",category:"Conversores",icon:"℃",description:"Converta temperaturas.",keywords:"celsius fahrenheit kelvin"},
  {id:"comprimento",name:"Comprimento",category:"Conversores",icon:"↔",description:"Converta medidas.",keywords:"metro km cm"},
  {id:"peso",name:"Peso",category:"Conversores",icon:"⚖",description:"Converta unidades de peso.",keywords:"kg grama"},
  {id:"velocidade",name:"Velocidade",category:"Conversores",icon:"🚀",description:"Converta velocidades.",keywords:"kmh mph"},
  {id:"dados",name:"Dados digitais",category:"Conversores",icon:"▤",description:"Converta bytes, KB, MB e GB.",keywords:"bytes kb mb gb"},
  {id:"tempo",name:"Tempo",category:"Conversores",icon:"◷",description:"Converta unidades de tempo.",keywords:"segundos minutos horas"},
  {id:"angulo",name:"Ângulos",category:"Conversores",icon:"∠",description:"Converta graus e radianos.",keywords:"graus radianos"},
  {id:"volume",name:"Volume",category:"Conversores",icon:"◇",description:"Calcule volumes.",keywords:"volume cubo esfera"},
  {id:"moeda",name:"Conversor de moeda",category:"Conversores",icon:"R$",description:"Converta usando uma taxa informada.",keywords:"moeda dinheiro dólar euro"},

  // TEXTO
  {id:"palavras",name:"Contador de palavras",category:"Texto",icon:"Aa",description:"Conte palavras.",keywords:"palavras texto"},
  {id:"maiusculas",name:"Maiúsculas e minúsculas",category:"Texto",icon:"Aa",description:"Altere o formato do texto.",keywords:"maiúsculas minúsculas"},
  {id:"espacos",name:"Remover espaços extras",category:"Texto",icon:"↔",description:"Limpe espaços desnecessários.",keywords:"espaços limpar"},
  {id:"inverter",name:"Inverter texto",category:"Texto",icon:"↶",description:"Inverta um texto.",keywords:"inverter"},
  {id:"caracteres",name:"Contador de caracteres",category:"Texto",icon:"#",description:"Conte caracteres.",keywords:"caracteres"},
  {id:"caracteresSemEspacos",name:"Caracteres sem espaços",category:"Texto",icon:"#",description:"Conte caracteres sem espaços.",keywords:"caracteres espaços"},
  {id:"linhas",name:"Contador de linhas",category:"Texto",icon:"☷",description:"Conte linhas.",keywords:"linhas texto"},
  {id:"slug",name:"Gerador de Slug",category:"Texto",icon:"🔗",description:"Crie URLs amigáveis.",keywords:"slug url link"},

  // PRODUTIVIDADE
  {id:"cronometro",name:"Cronômetro",category:"Produtividade",icon:"⏱",description:"Cronometre seu tempo.",keywords:"cronômetro"},
  {id:"timer",name:"Timer",category:"Produtividade",icon:"⏲",description:"Faça uma contagem regressiva.",keywords:"timer"},
  {id:"dias",name:"Contador de dias",category:"Produtividade",icon:"📅",description:"Calcule diferenças entre datas.",keywords:"dias datas"},
  {id:"notas",name:"Notas",category:"Produtividade",icon:"📝",description:"Escreva e salve notas.",keywords:"notas"},
  {id:"tarefas",name:"Lista de tarefas",category:"Produtividade",icon:"✓",description:"Organize suas tarefas.",keywords:"tarefas lista"},
  {id:"pomodoro",name:"Pomodoro",category:"Produtividade",icon:"🍅",description:"Estude usando Pomodoro.",keywords:"pomodoro estudo foco"},

  // GERADORES
  {id:"senha",name:"Gerador de senha",category:"Geradores",icon:"🔐",description:"Gere senhas aleatórias.",keywords:"senha segurança"},
  {id:"numero",name:"Número aleatório",category:"Geradores",icon:"#",description:"Gere números aleatórios.",keywords:"número aleatório"},
  {id:"nomes",name:"Gerador de nomes",category:"Geradores",icon:"✦",description:"Gere nomes aleatórios.",keywords:"nomes"},
  {id:"dado",name:"Dado",category:"Geradores",icon:"⚄",description:"Role um dado.",keywords:"dado sorte"},
  {id:"codigo",name:"Código aleatório",category:"Geradores",icon:"</>",description:"Gere códigos.",keywords:"código"},
  {id:"qrcode",name:"QR Code",category:"Geradores",icon:"▦",description:"Crie um QR Code.",keywords:"qr código"},
  {id:"cores",name:"Cor aleatória",category:"Geradores",icon:"◉",description:"Gere uma cor.",keywords:"cor hex rgb"},
  {id:"lorem",name:"Lorem Ipsum",category:"Geradores",icon:"¶",description:"Gere texto para testes.",keywords:"lorem texto"},
  {id:"uuid",name:"Gerador UUID",category:"Geradores",icon:"ID",description:"Gere identificadores únicos.",keywords:"uuid id"}
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


// =====================================
// FUNÇÕES BÁSICAS
// =====================================

function esc(text) {
  return String(text ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}

function getNumber(id) {
  return parseFloat(document.getElementById(id)?.value || 0);
}

function setResult(text) {
  const result = document.getElementById("toolResult");

  if (!result) return;

  result.innerHTML = `
    <div>${esc(text).replace(/\n/g,"<br>")}</div>
    <button class="tool-button" style="margin-top:10px" onclick='copyText(${JSON.stringify(String(text))})'>
      Copiar
    </button>
  `;
}

function copyText(text) {
  navigator.clipboard?.writeText(text)
    .then(() => alert("Copiado!"))
    .catch(() => {
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

function randomInt(min,max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function formatTime(seconds) {
  const h = Math.floor(seconds/3600);
  const m = Math.floor((seconds%3600)/60);
  const s = seconds%60;

  return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}


// =====================================
// CAMPOS DAS FERRAMENTAS
// =====================================

function inputField(id,label,type="text",placeholder="") {
  return `
    <div class="field">
      <label>${label}</label>
      <input id="${id}" type="${type}" placeholder="${placeholder}">
    </div>
  `;
}

function textareaField(id,label,placeholder="") {
  return `
    <div class="field">
      <label>${label}</label>
      <textarea id="${id}" placeholder="${placeholder}"></textarea>
    </div>
  `;
}

function selectField(id,label,options) {
  return `
    <div class="field">
      <label>${label}</label>
      <select id="${id}">
        ${options.map(o => `<option value="${o[0]}">${o[1]}</option>`).join("")}
      </select>
    </div>
  `;
}

function toolActions(action) {
  return `
    <div style="display:flex;gap:8px;margin-top:15px;flex-wrap:wrap">
      <button class="tool-button" onclick="${action}">Calcular</button>
      <button class="tool-button" style="background:var(--card2);color:var(--text)" onclick="clearTool()">Limpar</button>
    </div>
  `;
}

function resultBox() {
  return `<div class="result" id="toolResult"></div>`;
}


// =====================================
// RENDER
// =====================================

function render() {

  const grid = document.getElementById("toolsGrid");

  if (!grid) return;

  let list = tools.filter(tool => {

    const categoryOK =
      currentFilter === "Todas" ||
      tool.category === currentFilter;

    const searchOK =
      !searchTerm ||
      `${tool.name} ${tool.description} ${tool.keywords}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return categoryOK && searchOK;
  });

  grid.innerHTML = list.map(tool => `
    <div class="tool" onclick="openTool('${tool.id}')">

      <button
        class="favorite ${favorites.includes(tool.id) ? "active" : ""}"
        onclick="event.stopPropagation();toggleFavorite('${tool.id}')">
        ${favorites.includes(tool.id) ? "★" : "☆"}
      </button>

      <div class="tool-icon">${tool.icon}</div>

      <h3>${tool.name}</h3>

      <p>${tool.description}</p>

      <div class="tool-open">Abrir ferramenta →</div>

    </div>
  `).join("");

  document.getElementById("toolCount").textContent =
    `${list.length} ${list.length === 1 ? "ferramenta" : "ferramentas"}`;

  document.getElementById("empty").style.display =
    list.length ? "none" : "block";

  updateCount();
}

function updateCount() {

  document.querySelectorAll(".hero-info strong").forEach(el => {
    el.textContent = `${tools.length}+`;
  });

  document.querySelectorAll(".stat-card strong").forEach(el => {

    if (el.textContent.includes("ferramentas")) {
      el.textContent = `${tools.length}+ ferramentas`;
    }

  });
}


// =====================================
// NAVEGAÇÃO
// =====================================

function showHome() {

  currentFilter = "Todas";
  searchTerm = "";

  const input = document.getElementById("searchInput");

  if (input) input.value = "";

  document.getElementById("sectionTitle").textContent =
    "Todas as ferramentas";

  document.querySelectorAll(".category").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.textContent.trim() === "Todas"
    );
  });

  render();
}

function filterCategory(category) {

  currentFilter = category;
  searchTerm = "";

  const input = document.getElementById("searchInput");

  if (input) input.value = "";

  document.getElementById("sectionTitle").textContent = category;

  document.querySelectorAll(".category").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.textContent.trim() === category
    );
  });

  render();
  scrollToTools();
}

function searchTools() {

  searchTerm =
    document.getElementById("searchInput")?.value || "";

  currentFilter = "Todas";

  document.querySelectorAll(".category").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.textContent.trim() === "Todas"
    );
  });

  render();
}

function scrollToTools() {
  document.getElementById("toolsSection")?.scrollIntoView({
    behavior:"smooth"
  });
}

function showFavorites() {

  document.getElementById("sectionTitle").textContent =
    "Favoritos";

  const list = tools.filter(tool =>
    favorites.includes(tool.id)
  );

  renderCustomList(list);
}

function showRecent() {

  document.getElementById("sectionTitle").textContent =
    "Recentes";

  const list = recent
    .map(id => tools.find(tool => tool.id === id))
    .filter(Boolean);

  renderCustomList(list);
}

function renderCustomList(list) {

  const grid = document.getElementById("toolsGrid");

  grid.innerHTML = list.map(tool => `
    <div class="tool" onclick="openTool('${tool.id}')">

      <button
        class="favorite ${favorites.includes(tool.id) ? "active" : ""}"
        onclick="event.stopPropagation();toggleFavorite('${tool.id}')">
        ${favorites.includes(tool.id) ? "★" : "☆"}
      </button>

      <div class="tool-icon">${tool.icon}</div>

      <h3>${tool.name}</h3>

      <p>${tool.description}</p>

      <div class="tool-open">Abrir ferramenta →</div>

    </div>
  `).join("");

  document.getElementById("toolCount").textContent =
    `${list.length} ${list.length === 1 ? "ferramenta" : "ferramentas"}`;

  document.getElementById("empty").style.display =
    list.length ? "none" : "block";
}

function toggleFavorite(id) {

  if (favorites.includes(id)) {
    favorites = favorites.filter(x => x !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem(
    "nexoFavorites",
    JSON.stringify(favorites)
  );

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


// =====================================
// MODAL
// =====================================

function openTool(id) {

  const tool = tools.find(x => x.id === id);

  if (!tool) return;

  recent = [
    id,
    ...recent.filter(x => x !== id)
  ].slice(0,10);

  localStorage.setItem(
    "nexoRecent",
    JSON.stringify(recent)
  );

  document.getElementById("modalContent").innerHTML = `
    <div style="display:flex;gap:15px;align-items:center;margin-bottom:22px">

      <div class="tool-icon" style="margin:0">
        ${tool.icon}
      </div>

      <div>
        <small style="color:var(--primary)">
          ${tool.category}
        </small>

        <h2 style="margin:4px 0">
          ${tool.name}
        </h2>

        <p style="color:var(--muted);font-size:12px">
          ${tool.description}
        </p>
      </div>

    </div>

    ${createTool(id)}
  `;

  document.getElementById("modal").classList.add("show");

  if (id === "notas") {
    setTimeout(loadNotes,50);
  }

  if (id === "tarefas") {
    setTimeout(renderTasks,50);
  }
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


// =====================================
// FERRAMENTAS
// =====================================

function createTool(id) {

  switch(id) {

    case "calculadora":
      return `
        ${inputField("calc","Expressão","text","Ex: 25*4+10")}
        ${resultBox()}
        ${toolActions("calculate()")}
      `;

    case "porcentagem":
      return `
        ${inputField("p1","Porcentagem","number")}
        ${inputField("p2","Valor","number")}
        ${resultBox()}
        ${toolActions("calcPercentage()")}
      `;

    case "desconto":
      return `
        ${inputField("d1","Preço original","number")}
        ${inputField("d2","Desconto (%)","number")}
        ${resultBox()}
        ${toolActions("calcDiscount()")}
      `;

    case "juros":
      return `
        ${inputField("j1","Capital","number")}
        ${inputField("j2","Taxa (%)","number")}
        ${inputField("j3","Tempo","number")}
        ${resultBox()}
        ${toolActions("calcInterest()")}
      `;

    case "regra":
      return `
        ${inputField("r1","A","number")}
        ${inputField("r2","B","number")}
        ${inputField("r3","C","number")}
        ${resultBox()}
        ${toolActions("calcRule()")}
      `;

    case "media":
      return `
        ${inputField("m1","Números","text","Ex: 7,8,9,10")}
        ${resultBox()}
        ${toolActions("calcAverage()")}
      `;

    case "mediaEscolar":
      return `
        ${inputField("e1","Nota 1","number")}
        ${inputField("e2","Nota 2","number")}
        ${inputField("e3","Nota 3","number")}
        ${inputField("e4","Nota 4","number")}
        ${resultBox()}
        ${toolActions("calcSchoolAverage()")}
      `;

    case "idade":
      return `
        ${inputField("birth","Data de nascimento","date")}
        ${resultBox()}
        ${toolActions("calcAge()")}
      `;

    case "area":
      return `
        ${selectField("areaType","Figura",[
          ["quadrado","Quadrado"],
          ["retangulo","Retângulo"],
          ["triangulo","Triângulo"],
          ["circulo","Círculo"]
        ])}

        ${inputField("a1","Medida 1","number")}
        ${inputField("a2","Medida 2","number")}

        ${resultBox()}
        ${toolActions("calcArea()")}
      `;

    case "potencia":
      return `
        ${inputField("pot1","Base","number")}
        ${inputField("pot2","Expoente","number")}
        ${resultBox()}
        ${toolActions("calcPower()")}
      `;

    case "raiz":
      return `
        ${inputField("root","Número","number")}
        ${resultBox()}
        ${toolActions("calcRoot()")}
      `;

    case "tabuada":
      return `
        ${inputField("tab","Número","number")}
        ${resultBox()}
        ${toolActions("calcTable()")}
      `;

    case "temperatura":
      return `
        ${inputField("temp","Valor","number")}

        ${selectField("tempFrom","Converter de",[
          ["C","Celsius"],
          ["F","Fahrenheit"],
          ["K","Kelvin"]
        ])}

        ${selectField("tempTo","Converter para",[
          ["C","Celsius"],
          ["F","Fahrenheit"],
          ["K","Kelvin"]
        ])}

        ${resultBox()}
        ${toolActions("convertTemperature()")}
      `;

    case "comprimento":
      return `
        ${inputField("lengthValue","Valor","number")}

        ${selectField("lengthFrom","Converter de",[
          ["m","Metro"],
          ["km","Quilômetro"],
          ["cm","Centímetro"],
          ["mm","Milímetro"]
        ])}

        ${selectField("lengthTo","Converter para",[
          ["m","Metro"],
          ["km","Quilômetro"],
          ["cm","Centímetro"],
          ["mm","Milímetro"]
        ])}

        ${resultBox()}
        ${toolActions("convertLength()")}
      `;

    case "peso":
      return `
        ${inputField("weightValue","Valor","number")}

        ${selectField("weightFrom","Converter de",[
          ["kg","Quilograma"],
          ["g","Grama"],
          ["mg","Miligrama"]
        ])}

        ${selectField("weightTo","Converter para",[
          ["kg","Quilograma"],
          ["g","Grama"],
          ["mg","Miligrama"]
        ])}

        ${resultBox()}
        ${toolActions("convertWeight()")}
      `;

    case "velocidade":
      return `
        ${inputField("speed","Valor","number")}

        ${selectField("speedFrom","Converter de",[
          ["kmh","km/h"],
          ["mph","mph"],
          ["ms","m/s"]
        ])}

        ${selectField("speedTo","Converter para",[
          ["kmh","km/h"],
          ["mph","mph"],
          ["ms","m/s"]
        ])}

        ${resultBox()}
        ${toolActions("convertSpeed()")}
      `;

    case "dados":
      return `
        ${inputField("dataValue","Valor","number")}

        ${selectField("dataFrom","Converter de",[
          ["B","Bytes"],
          ["KB","KB"],
          ["MB","MB"],
          ["GB","GB"]
        ])}

        ${selectField("dataTo","Converter para",[
          ["B","Bytes"],
          ["KB","KB"],
          ["MB","MB"],
          ["GB","GB"]
        ])}

        ${resultBox()}
        ${toolActions("convertData()")}
      `;

    case "tempo":
      return `
        ${inputField("timeValue","Valor","number")}

        ${selectField("timeFrom","Converter de",[
          ["s","Segundos"],
          ["min","Minutos"],
          ["h","Horas"],
          ["d","Dias"]
        ])}

        ${selectField("timeTo","Converter para",[
          ["s","Segundos"],
          ["min","Minutos"],
          ["h","Horas"],
          ["d","Dias"]
        ])}

        ${resultBox()}
        ${toolActions("convertTime()")}
      `;

    case "angulo":
      return `
        ${inputField("angle","Valor","number")}

        ${selectField("angleFrom","Converter de",[
          ["deg","Graus"],
          ["rad","Radianos"]
        ])}

        ${selectField("angleTo","Converter para",[
          ["deg","Graus"],
          ["rad","Radianos"]
        ])}

        ${resultBox()}
        ${toolActions("convertAngle()")}
      `;

    case "volume":
      return `
        ${selectField("volumeType","Figura",[
          ["cube","Cubo"],
          ["box","Paralelepípedo"],
          ["cylinder","Cilindro"],
          ["sphere","Esfera"]
        ])}

        ${inputField("v1","Medida 1","number")}
        ${inputField("v2","Medida 2","number")}
        ${inputField("v3","Medida 3","number")}

        ${resultBox()}
        ${toolActions("calcVolume()")}
      `;

    case "moeda":
      return `
        ${inputField("money","Valor","number")}
        ${inputField("rate","Taxa de conversão","number","Ex: 5.40")}
        ${resultBox()}
        ${toolActions("convertMoney()")}
      `;

    case "palavras":
      return `
        ${textareaField("text","Texto","Digite seu texto...")}
        ${resultBox()}
        ${toolActions("countWords()")}
      `;

    case "maiusculas":
      return `
        ${textareaField("caseText","Texto","Digite seu texto...")}

        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="tool-button" onclick="changeUpper()">MAIÚSCULAS</button>
          <button class="tool-button" onclick="changeLower()">minúsculas</button>
        </div>

        ${resultBox()}
      `;

    case "espacos":
      return `
        ${textareaField("spaceText","Texto","Digite seu texto...")}
        ${resultBox()}
        ${toolActions("removeSpaces()")}
      `;

    case "inverter":
      return `
        ${textareaField("reverseText","Texto","Digite seu texto...")}
        ${resultBox()}
        ${toolActions("reverseTextTool()")}
      `;

    case "caracteres":
      return `
        ${textareaField("charText","Texto","Digite seu texto...")}
        ${resultBox()}
        ${toolActions("countChars()")}
      `;

    case "caracteresSemEspacos":
      return `
        ${textareaField("charNoSpaceText","Texto","Digite seu texto...")}
        ${resultBox()}
        ${toolActions("countCharsNoSpaces()")}
      `;

    case "linhas":
      return `
        ${textareaField("lineText","Texto","Digite seu texto...")}
        ${resultBox()}
        ${toolActions("countLines()")}
      `;

    case "slug":
      return `
        ${inputField("slugText","Texto","text","Ex: Meu novo site")}
        ${resultBox()}
        ${toolActions("generateSlug()")}
      `;

    case "cronometro":
      return `
        <div id="stopwatch" style="font-size:40px;font-weight:800;text-align:center;margin:25px 0">
          00:00:00
        </div>

        <div style="display:flex;gap:8px;justify-content:center">
          <button class="tool-button" onclick="startStopwatch()">Iniciar</button>
          <button class="tool-button" onclick="stopStopwatch()">Parar</button>
          <button class="tool-button" onclick="resetStopwatch()">Zerar</button>
        </div>
      `;

    case "timer":
      return `
        ${inputField("timerMinutes","Minutos","number","Ex: 5")}

        <div id="timerDisplay" style="font-size:40px;font-weight:800;text-align:center;margin:25px 0">
          00:00:00
        </div>

        <div style="display:flex;gap:8px;justify-content:center">
          <button class="tool-button" onclick="startTimer()">Iniciar</button>
          <button class="tool-button" onclick="stopTimer()">Parar</button>
          <button class="tool-button" onclick="resetTimer()">Zerar</button>
        </div>
      `;

    case "dias":
      return `
        ${inputField("date1","Data inicial","date")}
        ${inputField("date2","Data final","date")}
        ${resultBox()}
        ${toolActions("calculateDays()")}
      `;

    case "notas":
      return `
        ${textareaField("notes","Sua nota","Escreva aqui...")}

        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="tool-button" onclick="saveNotes()">Salvar nota</button>
          <button class="tool-button" onclick="clearNotes()">Apagar</button>
        </div>

        ${resultBox()}
      `;

    case "tarefas":
      return `
        ${inputField("taskInput","Nova tarefa","text","Digite uma tarefa")}

        <button class="tool-button" onclick="addTask()">
          Adicionar
        </button>

        <div id="taskList" style="margin-top:15px"></div>
      `;

    case "pomodoro":
      return `
        <div id="pomodoroDisplay" style="font-size:40px;font-weight:800;text-align:center;margin:25px 0">
          25:00
        </div>

        <p style="text-align:center;color:var(--muted);margin-bottom:20px">
          Foco
        </p>

        <div style="display:flex;gap:8px;justify-content:center">
          <button class="tool-button" onclick="startPomodoro()">Iniciar</button>
          <button class="tool-button" onclick="stopPomodoro()">Pausar</button>
          <button class="tool-button" onclick="resetPomodoro()">Reiniciar</button>
        </div>
      `;

    case "senha":
      return `
        ${inputField("passLength","Tamanho","number","Ex: 16")}

        <button class="tool-button" onclick="generatePassword()">
          Gerar senha
        </button>

        ${resultBox()}
      `;

    case "numero":
      return `
        ${inputField("numMin","Mínimo","number","Ex: 1")}
        ${inputField("numMax","Máximo","number","Ex: 100")}
        ${resultBox()}
        ${toolActions("generateNumber()")}
      `;

    case "nomes":
      return `
        <button class="tool-button" onclick="generateName()">
          Gerar nome
        </button>

        ${resultBox()}
      `;

    case "dado":
      return `
        <button class="tool-button" onclick="rollDice()">
          Rolar dado
        </button>

        ${resultBox()}
      `;

    case "codigo":
      return `
        ${inputField("codeLength","Tamanho","number","Ex: 8")}

        <button class="tool-button" onclick="generateCode()">
          Gerar código
        </button>

        ${resultBox()}
      `;

    case "qrcode":
      return `
        ${inputField("qrText","Texto ou link","text","https://...")}

        <button class="tool-button" onclick="generateQR()">
          Gerar QR Code
        </button>

        <div id="qrResult" style="margin-top:20px;text-align:center"></div>
      `;

    case "cores":
      return `
        <div id="colorPreview" style="height:120px;border-radius:15px;margin-bottom:15px"></div>

        <button class="tool-button" onclick="generateColor()">
          Gerar cor
        </button>

        ${resultBox()}
      `;

    case "lorem":
      return `
        ${inputField("loremCount","Quantidade de parágrafos","number","Ex: 2")}
        ${resultBox()}
        ${toolActions("generateLorem()")}
      `;

    case "uuid":
      return `
        <button class="tool-button" onclick="generateUUID()">
          Gerar UUID
        </button>

        ${resultBox()}
      `;

    default:
      return `<p>Ferramenta não encontrada.</p>`;
  }
}


// =====================================
// MATEMÁTICA
// =====================================

function calculate() {

  let expression = document.getElementById("calc").value
    .replace(/,/g,".")
    .replace(/×/g,"*")
    .replace(/÷/g,"/");

  if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
    setResult("Expressão inválida.");
    return;
  }

  try {
    const result = Function(`"use strict";return (${expression})`)();

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
  setResult(`${getNumber("p1")}% de ${getNumber("p2")} = ${(getNumber("p1")/100*getNumber("p2")).toFixed(2)}`);
}

function calcDiscount() {

  const price = getNumber("d1");
  const discount = getNumber("d2");

  setResult(`Preço final: R$ ${(price*(1-discount/100)).toFixed(2)}`);
}

function calcInterest() {

  const capital = getNumber("j1");
  const rate = getNumber("j2");
  const time = getNumber("j3");

  const interest = capital*rate/100*time;

  setResult(
    `Juros: R$ ${interest.toFixed(2)} | Total: R$ ${(capital+interest).toFixed(2)}`
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

  setResult(`X = ${(b*c/a).toFixed(2)}`);
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

  const avg = values.reduce((a,b)=>a+b,0)/values.length;

  setResult(`Média: ${avg.toFixed(2)}`);
}

function calcSchoolAverage() {

  const values = ["e1","e2","e3","e4"]
    .map(id => getNumber(id))
    .filter(x => !isNaN(x));

  if (!values.length) {
    setResult("Digite pelo menos uma nota.");
    return;
  }

  const avg = values.reduce((a,b)=>a+b,0)/values.length;

  setResult(`Média escolar: ${avg.toFixed(2)}`);
}

function calcAge() {

  const value = document.getElementById("birth").value;

  if (!value) {
    setResult("Informe a data de nascimento.");
    return;
  }

  const birth = new Date(value+"T00:00:00");
  const today = new Date();

  let age = today.getFullYear()-birth.getFullYear();

  const month =
    today.getMonth()-birth.getMonth();

  if (
    month < 0 ||
    (month === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  setResult(`Você tem ${age} anos.`);
}

function calcArea() {

  const type = document.getElementById("areaType").value;
  const a = getNumber("a1");
  const b = getNumber("a2");

  let area;

  if(type==="quadrado") area=a*a;
  if(type==="retangulo") area=a*b;
  if(type==="triangulo") area=(a*b)/2;
  if(type==="circulo") area=Math.PI*a*a;

  setResult(`Área = ${area.toFixed(2)}`);
}

function calcPower() {
  setResult(Math.pow(getNumber("pot1"),getNumber("pot2")));
}

function calcRoot() {

  const n=getNumber("root");

  if(n<0){
    setResult("Número inválido.");
    return;
  }

  setResult(Math.sqrt(n).toFixed(4));
}

function calcTable() {

  const n=getNumber("tab");

  let text="";

  for(let i=1;i<=10;i++){
    text+=`${n} × ${i} = ${n*i}\n`;
  }

  setResult(text);
}


// =====================================
// CONVERSORES
// =====================================

function convertTemperature() {

  const value=getNumber("temp");
  const from=document.getElementById("tempFrom").value;
  const to=document.getElementById("tempTo").value;

  let c;

  if(from==="C") c=value;
  if(from==="F") c=(value-32)*5/9;
  if(from==="K") c=value-273.15;

  let result;

  if(to==="C") result=c;
  if(to==="F") result=c*9/5+32;
  if(to==="K") result=c+273.15;

  setResult(`${result.toFixed(2)} ${to}`);
}

function convertLength() {

  const units={mm:.001,cm:.01,m:1,km:1000};

  const value=getNumber("lengthValue");

  const from=document.getElementById("lengthFrom").value;
  const to=document.getElementById("lengthTo").value;

  setResult(`${value*units[from]/units[to]} ${to}`);
}

function convertWeight() {

  const units={mg:.000001,g:.001,kg:1};

  const value=getNumber("weightValue");

  const from=document.getElementById("weightFrom").value;
  const to=document.getElementById("weightTo").value;

  setResult(`${value*units[from]/units[to]} ${to}`);
}

function convertSpeed() {

  const units={
    ms:1,
    kmh:1000/3600,
    mph:1609.344/3600
  };

  const value=getNumber("speed");

  const from=document.getElementById("speedFrom").value;
  const to=document.getElementById("speedTo").value;

  setResult(`${(value*units[from]/units[to]).toFixed(3)} ${to}`);
}

function convertData() {

  const units={
    B:1,
    KB:1000,
    MB:1000000,
    GB:1000000000
  };

  const value=getNumber("dataValue");

  const from=document.getElementById("dataFrom").value;
  const to=document.getElementById("dataTo").value;

  setResult(`${value*units[from]/units[to]} ${to}`);
}

function convertTime() {

  const units={
    s:1,
    min:60,
    h:3600,
    d:86400
  };

  const value=getNumber("timeValue");

  const from=document.getElementById("timeFrom").value;
  const to=document.getElementById("timeTo").value;

  setResult(`${value*units[from]/units[to]} ${to}`);
}

function convertAngle() {

  const value=getNumber("angle");

  const from=document.getElementById("angleFrom").value;
  const to=document.getElementById("angleTo").value;

  let degrees =
    from==="deg"
      ? value
      : value*180/Math.PI;

  const result =
    to==="deg"
      ? degrees
      : degrees*Math.PI/180;

  setResult(result.toFixed(6));
}

function calcVolume() {

  const type=document.getElementById("volumeType").value;

  const a=getNumber("v1");
  const b=getNumber("v2");
  const c=getNumber("v3");

  let result=0;

  if(type==="cube") result=a**3;
  if(type==="box") result=a*b*c;
  if(type==="cylinder") result=Math.PI*a*a*b;
  if(type==="sphere") result=(4/3)*Math.PI*a**3;

  setResult(`Volume = ${result.toFixed(2)}`);
}

function convertMoney() {

  setResult(
    `Resultado: ${(getNumber("money")*getNumber("rate")).toFixed(2)}`
  );
}


// =====================================
// TEXTO
// =====================================

function countWords() {

  const text=document.getElementById("text").value.trim();

  setResult(
    text ? `${text.split(/\s+/).length} palavras.` : "0 palavras."
  );
}

function changeUpper() {
  setResult(
    document.getElementById("caseText").value.toUpperCase()
  );
}

function changeLower() {
  setResult(
    document.getElementById("caseText").value.toLowerCase()
  );
}

function removeSpaces() {

  const text=document.getElementById("spaceText").value;

  setResult(
    text.replace(/\s+/g," ").trim()
  );
}

function reverseTextTool() {

  setResult(
    [...document.getElementById("reverseText").value]
      .reverse()
      .join("")
  );
}

function countChars() {

  setResult(
    `${document.getElementById("charText").value.length} caracteres.`
  );
}

function countCharsNoSpaces() {

  setResult(
    `${document.getElementById("charNoSpaceText").value.replace(/\s/g,"").length} caracteres sem espaços.`
  );
}

function countLines() {

  const text=document.getElementById("lineText").value;

  setResult(
    text ? `${text.split(/\r?\n/).length} linhas.` : "0 linhas."
  );
}

function generateSlug() {

  const text=document.getElementById("slugText").value;

  const slug=text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g,"")
    .replace(/\s+/g,"-")
    .replace(/-+/g,"-");

  setResult(slug);
}


// =====================================
// CRONÔMETRO
// =====================================

function startStopwatch() {

  if(stopwatchInterval) return;

  stopwatchInterval=setInterval(()=>{

    stopwatchSeconds++;

    const display=document.getElementById("stopwatch");

    if(display)
      display.textContent=formatTime(stopwatchSeconds);

  },1000);
}

function stopStopwatch() {

  clearInterval(stopwatchInterval);
  stopwatchInterval=null;
}

function resetStopwatch() {

  stopStopwatch();

  stopwatchSeconds=0;

  const display=document.getElementById("stopwatch");

  if(display)
    display.textContent="00:00:00";
}


// =====================================
// TIMER
// =====================================

function startTimer() {

  if(timerInterval) return;

  if(timerSeconds<=0){

    timerSeconds =
      Number(document.getElementById("timerMinutes").value||0)*60;
  }

  if(timerSeconds<=0){

    alert("Digite os minutos.");
    return;
  }

  timerInterval=setInterval(()=>{

    timerSeconds--;

    const display=document.getElementById("timerDisplay");

    if(display)
      display.textContent=formatTime(timerSeconds);

    if(timerSeconds<=0){

      stopTimer();
      alert("Tempo encerrado!");
    }

  },1000);
}

function stopTimer() {

  clearInterval(timerInterval);
  timerInterval=null;
}

function resetTimer() {

  stopTimer();

  timerSeconds=0;

  const display=document.getElementById("timerDisplay");

  if(display)
    display.textContent="00:00:00";
}


// =====================================
// DATAS
// =====================================

function calculateDays() {

  const a=new Date(document.getElementById("date1").value);
  const b=new Date(document.getElementById("date2").value);

  if(isNaN(a)||isNaN(b)){

    setResult("Escolha as duas datas.");
    return;
  }

  const days=Math.abs(b-a)/86400000;

  setResult(`${Math.ceil(days)} dias de diferença.`);
}


// =====================================
// NOTAS
// =====================================

function saveNotes() {

  const text=document.getElementById("notes").value;

  localStorage.setItem("nexoNotes",text);

  setResult("Nota salva!");
}

function loadNotes() {

  const notes=document.getElementById("notes");

  if(notes)
    notes.value=localStorage.getItem("nexoNotes")||"";
}

function clearNotes() {

  localStorage.removeItem("nexoNotes");

  const notes=document.getElementById("notes");

  if(notes)
    notes.value="";

  setResult("Nota apagada.");
}


// =====================================
// TAREFAS
// =====================================

function getTasks() {

  return JSON.parse(
    localStorage.getItem("nexoTasks")||"[]"
  );
}

function saveTasks(tasks) {

  localStorage.setItem(
    "nexoTasks",
    JSON.stringify(tasks)
  );
}

function addTask() {

  const input=document.getElementById("taskInput");

  if(!input || !input.value.trim())
    return;

  const tasks=getTasks();

  tasks.push({
    text:input.value.trim(),
    done:false
  });

  saveTasks(tasks);

  input.value="";

  renderTasks();
}

function renderTasks() {

  const list=document.getElementById("taskList");

  if(!list) return;

  const tasks=getTasks();

  list.innerHTML=tasks.map((task,index)=>`

    <div style="
      display:flex;
      align-items:center;
      gap:10px;
      padding:10px;
      margin-bottom:8px;
      background:var(--card2);
      border-radius:10px;
    ">

      <button
        class="tool-button"
        onclick="toggleTask(${index})">
        ${task.done?"✓":"○"}
      </button>

      <span style="
        flex:1;
        ${task.done?"text-decoration:line-through;opacity:.5":""}
      ">
        ${esc(task.text)}
      </span>

      <button
        class="tool-button"
        onclick="deleteTask(${index})">
        ×
      </button>

    </div>

  `).join("");
}

function toggleTask(index) {

  const tasks=getTasks();

  tasks[index].done=!tasks[index].done;

  saveTasks(tasks);

  renderTasks();
}

function deleteTask(index) {

  const tasks=getTasks();

  tasks.splice(index,1);

  saveTasks(tasks);

  renderTasks();
}


// =====================================
// POMODORO
// =====================================

function startPomodoro() {

  if(pomodoroInterval) return;

  pomodoroInterval=setInterval(()=>{

    pomodoroSeconds--;

    const display=
      document.getElementById("pomodoroDisplay");

    if(display){

      const min=Math.floor(pomodoroSeconds/60);
      const sec=pomodoroSeconds%60;

      display.textContent=
        `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    }

    if(pomodoroSeconds<=0){

      stopPomodoro();
      alert("Tempo concluído!");
    }

  },1000);
}

function stopPomodoro() {

  clearInterval(pomodoroInterval);
  pomodoroInterval=null;
}

function resetPomodoro() {

  stopPomodoro();

  pomodoroSeconds=1500;

  const display=
    document.getElementById("pomodoroDisplay");

  if(display)
    display.textContent="25:00";
}


// =====================================
// GERADORES
// =====================================

function secureRandom(max) {

  if(window.crypto?.getRandomValues){

    const array=new Uint32Array(1);

    crypto.getRandomValues(array);

    return array[0]%max;
  }

  return Math.floor(Math.random()*max);
}

function generatePassword() {

  let length=
    Number(document.getElementById("passLength").value||16);

  length=Math.max(4,Math.min(length,100));

  const chars=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  let password="";

  for(let i=0;i<length;i++)
    password+=chars[secureRandom(chars.length)];

  setResult(password);
}

function generateNumber() {

  const min=getNumber("numMin");
  const max=getNumber("numMax");

  if(max<min){

    setResult("O máximo precisa ser maior que o mínimo.");
    return;
  }

  setResult(randomInt(min,max));
}

function generateName() {

  const names=[
    "Lucas","Arthur","Miguel","Gabriel",
    "Rafael","Pedro","João","Matheus",
    "Nicolas","Henrique","Laura","Sofia",
    "Alice","Helena","Manuela","Julia"
  ];

  const surnames=[
    "Silva","Souza","Oliveira","Santos",
    "Costa","Pereira","Almeida",
    "Ferreira","Rodrigues","Gomes"
  ];

  setResult(
    names[secureRandom(names.length)]+" "+
    surnames[secureRandom(surnames.length)]
  );
}

function rollDice() {
  setResult(`🎲 Você tirou ${randomInt(1,6)}`);
}

function generateCode() {

  let length=
    Number(document.getElementById("codeLength").value||8);

  length=Math.max(4,Math.min(length,50));

  const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code="";

  for(let i=0;i<length;i++)
    code+=chars[secureRandom(chars.length)];

  setResult(code);
}

function generateQR() {

  const text=
    document.getElementById("qrText").value.trim();

  if(!text){

    alert("Digite um texto ou link.");
    return;
  }

  const url=
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+
    encodeURIComponent(text);

  document.getElementById("qrResult").innerHTML=`
    <img
      src="${url}"
      alt="QR Code"
      style="width:250px;max-width:100%;border-radius:12px"
    >
  `;
}

function generateColor() {

  const r=secureRandom(256);
  const g=secureRandom(256);
  const b=secureRandom(256);

  const hex=
    "#"+
    [r,g,b]
      .map(x=>x.toString(16).padStart(2,"0"))
      .join("")
      .toUpperCase();

  const preview=
    document.getElementById("colorPreview");

  if(preview)
    preview.style.background=hex;

  setResult(`${hex} | RGB(${r}, ${g}, ${b})`);
}

function generateLorem() {

  const count=Math.max(
    1,
    Math.min(
      Number(document.getElementById("loremCount").value||2),
      10
    )
  );

  const text=
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "+
    "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.";

  setResult(
    Array(count).fill(text).join("\n\n")
  );
}

function generateUUID() {

  let uuid;

  if(crypto.randomUUID){

    uuid=crypto.randomUUID();

  } else {

    uuid=
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
      .replace(/[xy]/g,c=>{

        const r=secureRandom(16);

        const v=
          c==="x"
            ? r
            : (r&3)|8;

        return v.toString(16);
      });
  }

  setResult(uuid);
}


// =====================================
// MODAL E INICIALIZAÇÃO
// =====================================

document.addEventListener("DOMContentLoaded",()=>{

  if(localStorage.getItem("nexoTheme")==="dark")
    document.body.classList.add("dark");

  render();

});

document.addEventListener("keydown",event=>{

  if(event.key==="Escape")
    closeTool();

});

document.addEventListener("click",event=>{

  const modal=document.getElementById("modal");

  if(event.target===modal)
    closeTool();

});
