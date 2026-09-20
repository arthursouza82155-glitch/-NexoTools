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


/* =========================
   CARREGAR SITE
========================= */

function render(list = tools){

  currentList = list;

  const grid = document.getElementById("toolsGrid");
  const empty = document.getElementById("empty");

  if(!grid) return;

  grid.innerHTML = "";

  document.getElementById("toolCount").textContent =
    `${list.length} ${list.length === 1 ? "ferramenta" : "ferramentas"}`;

  if(list.length === 0){

    empty.style.display = "block";
    return;

  }

  empty.style.display = "none";

  list.forEach(tool => {

    const card = document.createElement("div");

    card.className = "tool";

    const fav = favorites.includes(tool[0]);

    card.innerHTML = `
      <button class="favorite ${fav ? "active" : ""}">
        ${fav ? "★" : "☆"}
      </button>

      <div class="tool-icon">${tool[1]}</div>

      <h3>${tool[2]}</h3>

      <p>${tool[3]}</p>

      <div class="tool-open">
        Abrir ferramenta →
      </div>
    `;

    card.querySelector(".favorite").onclick = function(e){

      e.stopPropagation();

      toggleFavorite(tool[0]);

    };

    card.onclick = function(){

      openTool(tool);

    };

    grid.appendChild(card);

  });

}


/* =========================
   FAVORITOS
========================= */

function toggleFavorite(id){

  if(favorites.includes(id)){

    favorites = favorites.filter(x => x !== id);

  }else{

    favorites.push(id);

  }

  localStorage.setItem(
    "nexoFavorites",
    JSON.stringify(favorites)
  );

  render(currentList);

}


function showFavorites(){

  document.getElementById("sectionTitle").textContent =
    "Seus favoritos";

  render(
    tools.filter(t => favorites.includes(t[0]))
  );

}


function showRecent(){

  const list = recent
    .map(id => tools.find(t => t[0] === id))
    .filter(Boolean);

  document.getElementById("sectionTitle").textContent =
    "Ferramentas recentes";

  render(list);

}


/* =========================
   CATEGORIAS
========================= */

function showHome(){

  document.getElementById("sectionTitle").textContent =
    "Todas as ferramentas";

  render(tools);

}


function filterCategory(category){

  document.getElementById("sectionTitle").textContent =
    category;

  render(
    tools.filter(t => t[4] === category)
  );

}


/* =========================
   PESQUISA
========================= */

function searchTools(){

  const input = document.getElementById("searchInput");

  const query = input.value.toLowerCase().trim();

  if(!query){

    showHome();

    return;

  }

  const result = tools.filter(tool =>
    tool[2].toLowerCase().includes(query) ||
    tool[3].toLowerCase().includes(query) ||
    tool[4].toLowerCase().includes(query)
  );

  document.getElementById("sectionTitle").textContent =
    "Resultados da pesquisa";

  render(result);

}


/* =========================
   ABRIR FERRAMENTA
========================= */

function openTool(tool){

  recent = [
    tool[0],
    ...recent.filter(id => id !== tool[0])
  ].slice(0, 10);

  localStorage.setItem(
    "nexoRecent",
    JSON.stringify(recent)
  );

  const modal = document.getElementById("modal");

  const content =
    document.getElementById("modalContent");

  content.innerHTML = `
    <h2>${tool[1]} ${tool[2]}</h2>
    ${createTool(tool[0])}
  `;

  modal.classList.add("show");

  setupTool(tool[0]);

}


function closeTool(){

  document
    .getElementById("modal")
    .classList.remove("show");

}


document.getElementById("modal").addEventListener(
  "click",
  function(e){

    if(e.target === this){

      closeTool();

    }

  }
);


/* =========================
   CAMPOS
========================= */

function field(
  id,
  placeholder,
  type = "number"
){

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


function textarea(
  id,
  placeholder
){

  return `
    <div class="field">

      <textarea
        id="${id}"
        placeholder="${placeholder}"
      ></textarea>

    </div>
  `;

}


/* =========================
   INTERFACES
========================= */

function createTool(id){

  switch(id){

    case "calculadora":

      return `
        ${field(
          "calc",
          "Ex.: 25 + 10 * 2",
          "text"
        )}

        <button
          class="tool-button"
          onclick="calculate()"
        >
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "porcentagem":

      return `
        ${field("p1","Valor")}
        ${field("p2","Porcentagem")}

        <button
          class="tool-button"
          onclick="percentage()"
        >
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "desconto":

      return `
        ${field("price","Preço")}
        ${field("discount","Desconto (%)")}

        <button
          class="tool-button"
          onclick="discount()"
        >
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "juros":

      return `
        ${field("capital","Capital")}
        ${field("rate","Taxa (%)")}
        ${field("months","Tempo")}

        <button
          class="tool-button"
          onclick="interest()"
        >
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "regra":

      return `
        ${field("ra","A")}
        ${field("rb","B")}
        ${field("rc","C")}

        <button
          class="tool-button"
          onclick="ruleOfThree()"
        >
          Resolver
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "media":

      return `
        ${field(
          "numbers",
          "Ex.: 7, 8, 9, 10",
          "text"
        )}

        <button
          class="tool-button"
          onclick="average()"
        >
          Calcular média
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "idade":

      return `
        ${field(
          "birth",
          "",
          "date"
        )}

        <button
          class="tool-button"
          onclick="calculateAge()"
        >
          Calcular idade
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "temperatura":

      return converter(
        "temperatura",
        [
          "Celsius",
          "Fahrenheit",
          "Kelvin"
        ]
      );


    case "comprimento":

      return converter(
        "comprimento",
        [
          "Metro",
          "Quilômetro",
          "Centímetro",
          "Milímetro"
        ]
      );


    case "peso":

      return converter(
        "peso",
        [
          "Quilograma",
          "Grama",
          "Miligrama",
          "Tonelada"
        ]
      );


    case "velocidade":

      return converter(
        "velocidade",
        [
          "km/h",
          "m/s",
          "mph"
        ]
      );


    case "dados":

      return converter(
        "dados",
        [
          "KB",
          "MB",
          "GB",
          "TB"
        ]
      );


    case "tempo":

      return converter(
        "tempo",
        [
          "Segundos",
          "Minutos",
          "Horas",
          "Dias"
        ]
      );


    case "palavras":

      return `
        ${textarea(
          "textTool",
          "Digite seu texto..."
        )}

        <button
          class="tool-button"
          onclick="countWords()"
        >
          Contar
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "maiusculas":

      return `
        ${textarea(
          "textTool",
          "Digite seu texto..."
        )}

        <button
          class="tool-button"
          onclick="toUpper()"
        >
          MAIÚSCULAS
        </button>

        <button
          class="tool-button"
          onclick="toLower()"
        >
          minúsculas
        </button>

        <div id="result" class="result"></div>
      `;


    case "espacos":

      return `
        ${textarea(
          "textTool",
          "Digite seu texto..."
        )}

        <button
          class="tool-button"
          onclick="cleanSpaces()"
        >
          Limpar espaços
        </button>

        <div id="result" class="result"></div>
      `;


    case "inverter":

      return `
        ${textarea(
          "textTool",
          "Digite seu texto..."
        )}

        <button
          class="tool-button"
          onclick="reverseText()"
        >
          Inverter
        </button>

        <div id="result" class="result"></div>
      `;


    case "caracteres":

      return `
        ${textarea(
          "textTool",
          "Digite seu texto..."
        )}

        <button
          class="tool-button"
          onclick="countCharacters()"
        >
          Contar
        </button>

        <div id="result" class="result"></div>
      `;


    case "senha":

      return `
        ${field(
          "passwordLength",
          "Quantidade de caracteres"
        )}

        <button
          class="tool-button"
          onclick="generatePassword()"
        >
          Gerar senha
        </button>

        <div id="result" class="result">
          Sua senha aparecerá aqui.
        </div>
      `;


    case "numero":

      return `
        ${field("randomMin","Mínimo")}
        ${field("randomMax","Máximo")}

        <button
          class="tool-button"
          onclick="randomNumber()"
        >
          Sortear
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "nomes":

      return `
        ${textarea(
          "names",
          "Digite um nome por linha..."
        )}

        <button
          class="tool-button"
          onclick="drawName()"
        >
          Sortear nome
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "moeda":

      return `
        <button
          class="tool-button"
          onclick="flipCoin()"
        >
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
        <button
          class="tool-button"
          onclick="rollDice()"
        >
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
        ${field(
          "codeLength",
          "Quantidade de números"
        )}

        <button
          class="tool-button"
          onclick="generateCode()"
        >
          Gerar código
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "qrcode":

      return `
        ${field(
          "qrText",
          "Texto ou link",
          "text"
        )}

        <button
          class="tool-button"
          onclick="generateQR()"
        >
          Gerar QR Code
        </button>

        <div
          id="qrResult"
          class="result"
          style="text-align:center"
        ></div>
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

        <button
          class="tool-button"
          onclick="startStopwatch()"
        >
          Iniciar
        </button>

        <button
          class="tool-button"
          onclick="stopStopwatch()"
        >
          Parar
        </button>

        <button
          class="tool-button"
          onclick="resetStopwatch()"
        >
          Resetar
        </button>
      `;


    case "timer":

      return `
        ${field("timerMinutes","Minutos")}
        ${field("timerSeconds","Segundos")}

        <button
          class="tool-button"
          onclick="startTimer()"
        >
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
        ${field(
          "dateStart",
          "",
          "date"
        )}

        ${field(
          "dateEnd",
          "",
          "date"
        )}

        <button
          class="tool-button"
          onclick="calculateDays()"
        >
          Calcular
        </button>

        <div id="result" class="result">
          Resultado
        </div>
      `;


    case "notas":

      return `
        ${textarea(
          "notes",
          "Escreva suas anotações..."
        )}

        <button
          class="tool-button"
          onclick="saveNotes()"
        >
          Salvar
        </button>

        <button
          class="tool-button"
          onclick="clearNotes()"
        >
          Limpar
        </button>

        <div id="result" class="result"></div>
      `;


    case "tarefas":

      return `
        ${field(
          "task",
          "Nova tarefa",
          "text"
        )}

        <button
          class="tool-button"
          onclick="addTask()"
        >
          Adicionar
        </button>

        <div id="taskList" class="result"></div>
      `;

  }

}


/* =========================
   CONVERSORES
========================= */

function converter(id, options){

  return `
    ${field(
      "convertValue",
      "Valor"
    )}

    <div class="field">

      <select id="convertUnit">

        ${options.map(
          x => `<option>${x}</option>`
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


/* =========================
   MATEMÁTICA
========================= */

function calculate(){

  const expression =
    document.getElementById("calc").value;

  if(!/^[0-9+\-*/().%\s]+$/.test(expression)){

    result("Expressão inválida.");

    return;

  }

  try{

    result(eval(expression));

  }catch{

    result("Não foi possível calcular.");

  }

}


function percentage(){

  const value =
    Number(document.getElementById("p1").value);

  const percent =
    Number(document.getElementById("p2").value);

  result(
    (value * percent / 100).toFixed(2)
  );

}


function discount(){

  const price =
    Number(document.getElementById("price").value);

  const discount =
    Number(document.getElementById("discount").value);

  const finalPrice =
    price - price * discount / 100;

  result(
    "Preço final: R$ " +
    finalPrice.toFixed(2)
  );

}


function interest(){

  const capital =
    Number(document.getElementById("capital").value);

  const rate =
    Number(document.getElementById("rate").value);

  const months =
    Number(document.getElementById("months").value);

  const interest =
    capital * rate / 100 * months;

  result(`
    Juros: R$ ${interest.toFixed(2)}
    <br>
    Montante: R$ ${(capital + interest).toFixed(2)}
  `);

}


function ruleOfThree(){

  const a =
    Number(document.getElementById("ra").value);

  const b =
    Number(document.getElementById("rb").value);

  const c =
    Number(document.getElementById("rc").value);

  if(a === 0){

    result("A não pode ser zero.");

    return;

  }

  result(
    "X = " + (b * c / a).toFixed(2)
  );

}


function average(){

  const numbers =
    document
      .getElementById("numbers")
      .value
      .split(",")
      .map(Number)
      .filter(n => !isNaN(n));

  if(!numbers.length){

    result("Digite números válidos.");

    return;

  }

  const avg =
    numbers.reduce(
      (a,b) => a+b,
      0
    ) / numbers.length;

  result(
    "Média: " + avg.toFixed(2)
  );

}


function calculateAge(){

  const birth =
    new Date(
      document.getElementById("birth").value
    );

  if(isNaN(birth)){

    result("Escolha uma data.");

    return;

  }

  const today = new Date();

  let age =
    today.getFullYear() -
    birth.getFullYear();

  const birthday =
    new Date(
      today.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );

  if(today < birthday){

    age--;

  }

  result(
    "Você tem " + age + " anos."
  );

}


/* =========================
   TEXTO
========================= */

function countWords(){

  const text =
    document.getElementById("textTool").value;

  const words =
    text.trim()
      ? text.trim().split(/\s+/).length
      : 0;

  result(`
    Palavras: ${words}
    <br>
    Caracteres: ${text.length}
  `);

}


function toUpper(){

  result(
    document
      .getElementById("textTool")
      .value
      .toUpperCase()
  );

}


function toLower(){

  result(
    document
      .getElementById("textTool")
      .value
      .toLowerCase()
  );

}


function cleanSpaces(){

  result(
    document
      .getElementById("textTool")
      .value
      .replace(/\s+/g," ")
      .trim()
  );

}


function reverseText(){

  result(
    document
      .getElementById("textTool")
      .value
      .split("")
      .reverse()
      .join("")
  );

}


function countCharacters(){

  const text =
    document.getElementById("textTool").value;

  result(`
    Com espaços: ${text.length}
    <br>
    Sem espaços: ${text.replace(/\s/g,"").length}
  `);

}


/* =========================
   GERADORES
========================= */

function generatePassword(){

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  const length =
    Math.max(
      4,
      Number(
        document.getElementById("passwordLength").value
      ) || 12
    );

  let password = "";

  for(let i=0;i<length;i++){

    password +=
      chars[
        Math.floor(
          Math.random() * chars.length
        )
      ];

  }

  result(password);

}


function randomNumber(){

  const min =
    Number(
      document.getElementById("randomMin").value
    );

  const max =
    Number(
      document.getElementById("randomMax").value
    );

  if(max < min){

    result("O máximo precisa ser maior.");

    return;

  }

  result(
    Math.floor(
      Math.random() * (max-min+1)
    ) + min
  );

}


function drawName(){

  const names =
    document
      .getElementById("names")
      .value
      .split("\n")
      .map(n => n.trim())
      .filter(Boolean);

  if(!names.length){

    result("Digite pelo menos um nome.");

    return;

  }

  result(
    "🎯 " +
    names[
      Math.floor(
        Math.random()*names.length
      )
    ]
  );

}


function flipCoin(){

  result(
    Math.random() < .5
      ? "🪙 CARA"
      : "🪙 COROA"
  );

}


function rollDice(){

  const number =
    Math.floor(
      Math.random()*6
    ) + 1;

  result("🎲 " + number);

}


function generateCode(){

  const length =
    Math.min(
      Math.max(
        Number(
          document.getElementById("codeLength").value
        ) || 6,
        1
      ),
      30
    );

  let code = "";

  for(let i=0;i<length;i++){

    code +=
      Math.floor(
        Math.random()*10
      );

  }

  result(code);

}


/* =========================
   QR CODE
========================= */

function generateQR(){

  const text =
    document.getElementById("qrText").value;

  if(!text){

    document.getElementById("qrResult").innerHTML =
      "Digite um texto ou link.";

    return;

  }

  document.getElementById("qrResult").innerHTML = `

    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(text)}"
      alt="QR Code"
      style="max-width:220px;border-radius:12px"
    >

  `;

}


/* =========================
   CRONÔMETRO
========================= */

let stopwatchSeconds = 0;
let stopwatchInterval = null;

function updateStopwatch(){

  const h =
    String(
      Math.floor(stopwatchSeconds / 3600)
    ).padStart(2,"0");

  const m =
    String(
      Math.floor(
        (stopwatchSeconds % 3600) / 60
      )
    ).padStart(2,"0");

  const s =
    String(
      stopwatchSeconds % 60
    ).padStart(2,"0");

  const display =
    document.getElementById("stopwatch");

  if(display){

    display.textContent =
      `${h}:${m}:${s}`;

  }

}


function startStopwatch(){

  if(stopwatchInterval) return;

  stopwatchInterval =
    setInterval(() => {

      stopwatchSeconds++;

      updateStopwatch();

    },1000);

}


function stopStopwatch(){

  clearInterval(stopwatchInterval);

  stopwatchInterval = null;

}


function resetStopwatch(){

  stopStopwatch();

  stopwatchSeconds = 0;

  updateStopwatch();

}


/* =========================
   TIMER
========================= */

let timerInterval = null;

function startTimer(){

  clearInterval(timerInterval);

  let total =
    Number(
      document.getElementById("timerMinutes").value
    ) * 60;

  total +=
    Number(
      document.getElementById("timerSeconds").value
    );

  if(total <= 0){

    result("Defina um tempo.");

    return;

  }

  const display =
    document.getElementById("timerDisplay");

  function update(){

    const minutes =
      String(
        Math.floor(total / 60)
      ).padStart(2,"0");

    const seconds =
      String(
        total % 60
      ).padStart(2,"0");

    display.textContent =
      `${minutes}:${seconds}`;

    if(total <= 0){

      clearInterval(timerInterval);

      display.textContent =
        "00:00";

      return;

    }

    total--;

  }

  update();

  timerInterval =
    setInterval(update,1000);

}


/* =========================
   DATAS
========================= */

function calculateDays(){

  const start =
    new Date(
      document.getElementById("dateStart").value
    );

  const end =
    new Date(
      document.getElementById("dateEnd").value
    );

  if(isNaN(start) || isNaN(end)){

    result("Escolha as duas datas.");

    return;

  }

  const difference =
    Math.abs(end-start);

  const days =
    Math.round(
      difference / 86400000
    );

  result(
    days + (days === 1 ? " dia" : " dias")
  );

}


/* =========================
   NOTAS
========================= */

function setupTool(id){

  if(id === "notas"){

    const saved =
      localStorage.getItem("nexoNotes");

    if(saved){

      document.getElementById("notes").value =
        saved;

    }

  }

  if(id === "tarefas"){

    renderTasks();

  }

}


function saveNotes(){

  const text =
    document.getElementById("notes").value;

  localStorage.setItem(
    "nexoNotes",
    text
  );

  result("✓ Anotação salva.");

}


function clearNotes(){

  document.getElementById("notes").value = "";

  localStorage.removeItem("nexoNotes");

  result("Anotação apagada.");

}


/* =========================
   TAREFAS
========================= */

let tasks =
  JSON.parse(
    localStorage.getItem("nexoTasks") || "[]"
  );


function addTask(){

  const input =
    document.getElementById("task");

  const value =
    input.value.trim();

  if(!value) return;

  tasks.push({
    text:value,
    done:false
  });

  input.value = "";

  saveTasks();

  renderTasks();

}


function renderTasks(){

  const list =
    document.getElementById("taskList");

  if(!list) return;

  if(!tasks.length){

    list.innerHTML =
      "Nenhuma tarefa ainda.";

    return;

  }

  list.innerHTML = "";

  tasks.forEach((task,index)=>{

    const item =
      document.createElement("div");

    item.style.cssText =
      "display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)";

    item.innerHTML = `

      <span
        style="
          cursor:pointer;
          text-decoration:${task.done ? "line-through" : "none"};
          opacity:${task.done ? ".5" : "1"};
        "
      >
        ${escapeHTML(task.text)}
      </span>

      <button
        class="tool-button"
        style="padding:6px 10px"
      >
        ×
      </button>

    `;

    item.querySelector("span").onclick =
      function(){

        tasks[index].done =
          !tasks[index].done;

        saveTasks();

        renderTasks();

      };

    item.querySelector("button").onclick =
      function(){

        tasks.splice(index,1);

        saveTasks();

        renderTasks();

      };

    list.appendChild(item);

  });

}


function saveTasks(){

  localStorage.setItem(
    "nexoTasks",
    JSON.stringify(tasks)
  );

}


/* =========================
   CONVERSORES
========================= */

function convertValue(type){

  const value =
    Number(
      document.getElementById("convertValue").value
    );

  const unit =
    document.getElementById("convertUnit").value;

  if(isNaN(value)){

    result("Digite um valor.");

    return;

  }


  if(type === "temperatura"){

    let celsius;

    if(unit === "Celsius")
      celsius = value;

    if(unit === "Fahrenheit")
      celsius = (value-32)*5/9;

    if(unit === "Kelvin")
      celsius = value-273.15;

    result(`
      Celsius: ${celsius.toFixed(2)} °C
      <br>
      Fahrenheit: ${(celsius*9/5+32).toFixed(2)} °F
      <br>
      Kelvin: ${(celsius+273.15).toFixed(2)} K
    `);

    return;

  }


  if(type === "comprimento"){

    const factors = {
      "Metro":1,
      "Quilômetro":1000,
      "Centímetro":0.01,
      "Milímetro":0.001
    };

    const meters =
      value * factors[unit];

    result(`
      Metro: ${meters}
      <br>
      Quilômetro: ${(meters/1000).toFixed(4)}
      <br>
      Centímetro: ${(meters*100).toFixed(2)}
      <br>
      Milímetro: ${(meters*1000).toFixed(2)}
    `);

    return;

  }


  if(type === "peso"){

    const factors = {
      "Quilograma":1,
      "Grama":0.001,
      "Miligrama":0.000001,
      "Tonelada":1000
    };

    const kg =
      value * factors[unit];

    result(`
      Quilogramas: ${kg}
      <br>
      Gramas: ${(kg*1000).toFixed(2)}
      <br>
      Miligramas: ${(kg*1000000).toFixed(2)}
      <br>
      Toneladas: ${(kg/1000).toFixed(6)}
    `);

    return;

  }


  if(type === "velocidade"){

    let ms;

    if(unit === "km/h")
      ms = value/3.6;

    if(unit === "m/s")
      ms = value;

    if(unit === "mph")
      ms = value*0.44704;

    result(`
      km/h: ${(ms*3.6).toFixed(2)}
      <br>
      m/s: ${ms.toFixed(2)}
      <br>
      mph: ${(ms/0.44704).toFixed(2)}
    `);

    return;

  }


  if(type === "dados"){

    const factors = {
      "KB":1,
      "MB":1024,
      "GB":1024**2,
      "TB":1024**3
    };

    const kb =
      value*factors[unit];

    result(`
      KB: ${kb.toFixed(2)}
      <br>
      MB: ${(kb/1024).toFixed(2)}
      <br>
      GB: ${(kb/1024**2).toFixed(2)}
      <br>
      TB: ${(kb/1024**3).toFixed(2)}
    `);

    return;

  }


  if(type === "tempo"){

    let seconds = value;

    if(unit === "Minutos")
      seconds = value*60;

    if(unit === "Horas")
      seconds = value*3600;

    if(unit === "Dias")
      seconds = value*86400;

    result(`
      Segundos: ${seconds}
      <br>
      Minutos: ${(seconds/60).toFixed(2)}
      <br>
      Horas: ${(seconds/3600).toFixed(2)}
      <br>
      Dias: ${(seconds/86400).toFixed(2)}
    `);

  }

}


/* =========================
   TEMA
========================= */

function toggleTheme(){

  document.body.classList.toggle("dark");

  localStorage.setItem(
    "nexoTheme",
    document.body.classList.contains("dark")
      ? "dark"
      : "light"
  );

}


if(
  localStorage.getItem("nexoTheme")
  === "dark"
){

  document.body.classList.add("dark");

}


/* =========================
   MOBILE
========================= */

function toggleSidebar(){

  document
    .querySelector(".sidebar")
    .classList.toggle("open");

}


/* =========================
   AUXILIARES
========================= */

function result(value){

  const element =
    document.getElementById("result");

  if(element){

    element.innerHTML = value;

  }

}


function escapeHTML(text){

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* =========================
   INICIALIZAÇÃO
========================= */

render();
