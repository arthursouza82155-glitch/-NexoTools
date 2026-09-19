const tools = [

  {
    id: "calculator",
    name: "Calculadora",
    description: "Faça cálculos rapidamente.",
    icon: "🧮",
    category: "matematica"
  },

  {
    id: "percentage",
    name: "Porcentagem",
    description: "Calcule porcentagens facilmente.",
    icon: "％",
    category: "matematica"
  },

  {
    id: "rule3",
    name: "Regra de três",
    description: "Resolva regras de três.",
    icon: "📐",
    category: "matematica"
  },

  {
    id: "average",
    name: "Calculadora de média",
    description: "Calcule a média de vários números.",
    icon: "📊",
    category: "matematica"
  },

  {
    id: "age",
    name: "Calculadora de idade",
    description: "Descubra sua idade.",
    icon: "🎂",
    category: "matematica"
  },

  {
    id: "discount",
    name: "Calculadora de desconto",
    description: "Descubra o preço com desconto.",
    icon: "💰",
    category: "matematica"
  },

  {
    id: "interest",
    name: "Juros simples",
    description: "Calcule juros simples.",
    icon: "💵",
    category: "matematica"
  },

  {
    id: "speed",
    name: "Calculadora de velocidade",
    description: "Calcule velocidade, distância ou tempo.",
    icon: "🚗",
    category: "matematica"
  },

  {
    id: "bmi",
    name: "Calculadora de IMC",
    description: "Calcule o índice de massa corporal.",
    icon: "⚖️",
    category: "matematica"
  },

  {
    id: "counter",
    name: "Contador de palavras",
    description: "Conte palavras e caracteres.",
    icon: "📝",
    category: "texto"
  },

  {
    id: "case",
    name: "Maiúsculas e minúsculas",
    description: "Transforme o seu texto.",
    icon: "🔤",
    category: "texto"
  },

  {
    id: "shuffle",
    name: "Embaralhador de texto",
    description: "Embaralhe palavras.",
    icon: "🔀",
    category: "texto"
  },

  {
    id: "lorem",
    name: "Lorem Ipsum",
    description: "Gere textos de exemplo.",
    icon: "📄",
    category: "texto"
  },

  {
    id: "temperature",
    name: "Temperatura",
    description: "Converta Celsius, Fahrenheit e Kelvin.",
    icon: "🌡️",
    category: "conversores"
  },

  {
    id: "length",
    name: "Comprimento",
    description: "Converta unidades de comprimento.",
    icon: "📏",
    category: "conversores"
  },

  {
    id: "weight",
    name: "Peso",
    description: "Converta unidades de peso.",
    icon: "⚖️",
    category: "conversores"
  },

  {
    id: "storage",
    name: "Armazenamento",
    description: "Converta bytes, KB, MB e GB.",
    icon: "💾",
    category: "conversores"
  },

  {
    id: "binary",
    name: "Decimal ↔ Binário",
    description: "Converta números entre decimal e binário.",
    icon: "01",
    category: "conversores"
  },

  {
    id: "password",
    name: "Gerador de senha",
    description: "Crie senhas aleatórias.",
    icon: "🔐",
    category: "geradores"
  },

  {
    id: "number",
    name: "Gerador de números",
    description: "Gere números aleatórios.",
    icon: "🔢",
    category: "geradores"
  },

  {
    id: "name",
    name: "Gerador de nomes",
    description: "Gere nomes aleatórios.",
    icon: "👤",
    category: "geradores"
  },

  {
    id: "color",
    name: "Gerador de cores",
    description: "Gere cores aleatórias.",
    icon: "🎨",
    category: "geradores"
  },

  {
    id: "uuid",
    name: "Gerador de UUID",
    description: "Gere identificadores únicos.",
    icon: "🆔",
    category: "geradores"
  },

  {
    id: "qr",
    name: "Gerador de QR Code",
    description: "Transforme texto em QR Code.",
    icon: "🔳",
    category: "geradores"
  },

  {
    id: "cpf",
    name: "CPF para testes",
    description: "Gere CPFs válidos para testes.",
    icon: "🪪",
    category: "utilidades"
  },

  {
    id: "stopwatch",
    name: "Cronômetro",
    description: "Cronometre seu tempo.",
    icon: "⏱️",
    category: "tempo"
  },

  {
    id: "timer",
    name: "Temporizador",
    description: "Configure uma contagem regressiva.",
    icon: "⏰",
    category: "tempo"
  },

  {
    id: "sort",
    name: "Sorteador",
    description: "Sorteie uma opção.",
    icon: "🎲",
    category: "utilidades"
  },

  {
    id: "url",
    name: "Encurtador visual",
    description: "Organize e copie links.",
    icon: "🔗",
    category: "utilidades"
  }

];


const toolsGrid =
  document.getElementById("toolsGrid");

const searchInput =
  document.getElementById("searchInput");

const categories =
  document.querySelectorAll(".category");

const noResults =
  document.getElementById("noResults");

const toolSection =
  document.getElementById("toolSection");

const toolTitle =
  document.getElementById("toolTitle");

const toolDescription =
  document.getElementById("toolDescription");

const toolIcon =
  document.getElementById("toolIcon");

const toolContent =
  document.getElementById("toolContent");


let currentCategory = "todos";


/* RENDER */

function renderTools() {

  const search =
    searchInput.value
      .toLowerCase()
      .trim();

  toolsGrid.innerHTML = "";

  const filtered =
    tools.filter(tool => {

      const categoryMatch =
        currentCategory === "todos" ||
        tool.category === currentCategory;

      const searchMatch =
        tool.name
          .toLowerCase()
          .includes(search) ||
        tool.description
          .toLowerCase()
          .includes(search);

      return categoryMatch && searchMatch;

    });


  noResults.classList.toggle(
    "hidden",
    filtered.length !== 0
  );


  filtered.forEach(tool => {

    const card =
      document.createElement("article");

    card.className = "tool-card";

    card.innerHTML = `

      <div class="tool-card-icon">
        ${tool.icon}
      </div>

      <h3>
        ${tool.name}
      </h3>

      <p>
        ${tool.description}
      </p>

      <button
        class="btn btn-primary"
        data-tool="${tool.id}"
      >
        Abrir ferramenta
      </button>

    `;


    card
      .querySelector("button")
      .addEventListener(
        "click",
        () => openTool(tool.id)
      );


    toolsGrid.appendChild(card);

  });

}


renderTools();


/* SEARCH */

searchInput.addEventListener(
  "input",
  renderTools
);


/* CATEGORIES */

categories.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      categories.forEach(item =>
        item.classList.remove("active")
      );

      button.classList.add("active");

      currentCategory =
        button.dataset.category;

      renderTools();

    }
  );

});


/* OPEN */

function openTool(id) {

  const tool =
    tools.find(item => item.id === id);

  if (!tool) return;

  toolTitle.textContent =
    tool.name;

  toolDescription.textContent =
    tool.description;

  toolIcon.textContent =
    tool.icon;

  toolContent.innerHTML =
    getToolHTML(id);

  toolSection.classList.remove("hidden");

  toolSection.scrollIntoView({
    behavior: "smooth"
  });

}


/* BACK */

document
  .getElementById("backButton")
  .addEventListener(
    "click",
    () => {

      toolSection.classList.add(
        "hidden"
      );

      document
        .getElementById("ferramentas")
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );


/* TOOL HTML */

function getToolHTML(id) {

  const html = {


calculator: `

<div class="calculator">

<input
id="calcDisplay"
class="calc-display"
readonly
>

<div class="calc-grid">

<button class="calc-button"
onclick="calcClear()">C</button>

<button class="calc-button"
onclick="calcDelete()">⌫</button>

<button class="calc-button operator"
onclick="calcAdd('/')">÷</button>

<button class="calc-button operator"
onclick="calcAdd('*')">×</button>

<button class="calc-button"
onclick="calcAdd('7')">7</button>

<button class="calc-button"
onclick="calcAdd('8')">8</button>

<button class="calc-button"
onclick="calcAdd('9')">9</button>

<button class="calc-button operator"
onclick="calcAdd('-')">−</button>

<button class="calc-button"
onclick="calcAdd('4')">4</button>

<button class="calc-button"
onclick="calcAdd('5')">5</button>

<button class="calc-button"
onclick="calcAdd('6')">6</button>

<button class="calc-button operator"
onclick="calcAdd('+')">+</button>

<button class="calc-button"
onclick="calcAdd('1')">1</button>

<button class="calc-button"
onclick="calcAdd('2')">2</button>

<button class="calc-button"
onclick="calcAdd('3')">3</button>

<button class="calc-button equal"
onclick="calcResult()">=</button>

<button class="calc-button"
onclick="calcAdd('0')">0</button>

<button class="calc-button"
onclick="calcAdd('.')">.</button>

</div>

</div>
`,


percentage: `

<div class="form-group">
<label>Valor</label>
<input id="percentValue"
class="input"
type="number">
</div>

<div class="form-group">
<label>Porcentagem</label>
<input id="percentNumber"
class="input"
type="number">
</div>

<button class="btn btn-primary"
onclick="calculatePercentage()">
Calcular
</button>

<div id="percentResult"></div>

`,


rule3: `

<div class="form-group">
<label>A</label>
<input id="ruleA"
class="input"
type="number">
</div>

<div class="form-group">
<label>B</label>
<input id="ruleB"
class="input"
type="number">
</div>

<div class="form-group">
<label>C</label>
<input id="ruleC"
class="input"
type="number">
</div>

<button class="btn btn-primary"
onclick="calculateRule3()">
Calcular X
</button>

<div id="ruleResult"></div>

`,


average: `

<div class="form-group">

<label>
Números separados por vírgula
</label>

<input
id="averageInput"
class="input"
placeholder="7, 8, 9, 10"
>

</div>

<button
class="btn btn-primary"
onclick="calculateAverage()">

Calcular média

</button>

<div id="averageResult"></div>

`,


age: `

<div class="form-group">

<label>
Data de nascimento
</label>

<input
id="birthDate"
class="input"
type="date"
>

</div>

<button
class="btn btn-primary"
onclick="calculateAge()">

Calcular idade

</button>

<div id="ageResult"></div>

`,


discount: `

<div class="form-group">
<label>Preço</label>
<input id="discountPrice"
class="input"
type="number">
</div>

<div class="form-group">
<label>Desconto (%)</label>
<input id="discountPercent"
class="input"
type="number">
</div>

<button
class="btn btn-primary"
onclick="calculateDiscount()">

Calcular

</button>

<div id="discountResult"></div>

`,


interest: `

<div class="form-group">
<label>Capital</label>
<input id="interestCapital"
class="input"
type="number">
</div>

<div class="form-group">
<label>Taxa (%)</label>
<input id="interestRate"
class="input"
type="number">
</div>

<div class="form-group">
<label>Tempo</label>
<input id="interestTime"
class="input"
type="number">
</div>

<button
class="btn btn-primary"
onclick="calculateInterest()">

Calcular

</button>

<div id="interestResult"></div>

`,


speed: `

<div class="form-group">
<label>Distância</label>
<input id="speedDistance"
class="input"
type="number">
</div>

<div class="form-group">
<label>Tempo</label>
<input id="speedTime"
class="input"
type="number">
</div>

<button
class="btn btn-primary"
onclick="calculateSpeed()">

Calcular velocidade

</button>

<div id="speedResult"></div>

`,


bmi: `

<div class="form-group">
<label>Peso (kg)</label>
<input id="bmiWeight"
class="input"
type="number">
</div>

<div class="form-group">
<label>Altura (m)</label>
<input id="bmiHeight"
class="input"
type="number">
</div>

<button
class="btn btn-primary"
onclick="calculateBMI()">

Calcular

</button>

<div id="bmiResult"></div>

`,


counter: `

<div class="form-group">

<label>
Digite seu texto
</label>

<textarea
id="counterText"
class="input textarea"
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
<strong id="spaceCount">0</strong>
<span>Sem espaços</span>
</div>

</div>

`,


case: `

<div class="form-group">

<label>
Texto
</label>

<textarea
id="caseText"
class="input textarea"
placeholder="Digite seu texto..."
></textarea>

</div>

<div class="hero-buttons">

<button
class="btn btn-primary"
onclick="changeCase('upper')">

MAIÚSCULAS

</button>

<button
class="btn btn-secondary"
onclick="changeCase('lower')">

minúsculas

</button>

<button
class="btn btn-secondary"
onclick="changeCase('title')">

Título

</button>

</div>

`,


shuffle: `

<div class="form-group">

<label>
Texto
</label>

<textarea
id="shuffleText"
class="input textarea"
></textarea>

</div>

<button
class="btn btn-primary"
onclick="shuffleText()">

Embaralhar

</button>

<div id="shuffleResult"></div>

`,


lorem: `

<div class="form-group">

<label>
Quantidade de palavras
</label>

<input
id="loremCount"
class="input"
type="number"
min="1"
max="500"
value="50"
>

</div>

<button
class="btn btn-primary"
onclick="generateLorem()">

Gerar texto

</button>

<div id="loremResult"></div>

`,


temperature: `

<div class="form-group">
<label>Valor</label>
<input
id="tempValue"
class="input"
type="number">
</div>

<div class="form-group">
<label>De</label>

<select id="tempFrom"
class="input">

<option value="c">Celsius</option>
<option value="f">Fahrenheit</option>
<option value="k">Kelvin</option>

</select>
</div>

<div class="form-group">
<label>Para</label>

<select id="tempTo"
class="input">

<option value="c">Celsius</option>
<option value="f">Fahrenheit</option>
<option value="k">Kelvin</option>

</select>
</div>

<button
class="btn btn-primary"
onclick="convertTemperature()">

Converter

</button>

<div id="tempResult"></div>

`,


length: `

<div class="form-group">
<label>Valor</label>
<input id="lengthValue"
class="input"
type="number">
</div>

<div class="form-group">
<label>De</label>

<select id="lengthFrom"
class="input">

<option value="m">Metros</option>
<option value="km">Quilômetros</option>
<option value="cm">Centímetros</option>
<option value="mm">Milímetros</option>

</select>

</div>

<div class="form-group">
<label>Para</label>

<select id="lengthTo"
class="input">

<option value="m">Metros</option>
<option value="km">Quilômetros</option>
<option value="cm">Centímetros</option>
<option value="mm">Milímetros</option>

</select>

</div>

<button
class="btn btn-primary"
onclick="convertLength()">

Converter

</button>

<div id="lengthResult"></div>

`,


weight: `

<div class="form-group">
<label>Valor</label>
<input
id="weightValue"
class="input"
type="number">
</div>

<div class="form-group">
<label>De</label>

<select id="weightFrom"
class="input">

<option value="kg">Quilogramas</option>
<option value="g">Gramas</option>
<option value="mg">Miligramas</option>

</select>

</div>

<div class="form-group">
<label>Para</label>

<select id="weightTo"
class="input">

<option value="kg">Quilogramas</option>
<option value="g">Gramas</option>
<option value="mg">Miligramas</option>

</select>

</div>

<button
class="btn btn-primary"
onclick="convertWeight()">

Converter

</button>

<div id="weightResult"></div>

`,


storage: `

<div class="form-group">
<label>Valor</label>
<input id="storageValue"
class="input"
type="number">
</div>

<div class="form-group">
<label>De</label>

<select id="storageFrom"
class="input">

<option value="B">Bytes</option>
<option value="KB">KB</option>
<option value="MB">MB</option>
<option value="GB">GB</option>
<option value="TB">TB</option>

</select>

</div>

<div class="form-group">
<label>Para</label>

<select id="storageTo"
class="input">

<option value="B">Bytes</option>
<option value="KB">KB</option>
<option value="MB">MB</option>
<option value="GB">GB</option>
<option value="TB">TB</option>

</select>

</div>

<button
class="btn btn-primary"
onclick="convertStorage()">

Converter

</button>

<div id="storageResult"></div>

`,


binary: `

<div class="form-group">

<label>Número</label>

<input
id="binaryValue"
class="input"
placeholder="101010"
>

</div>

<div class="hero-buttons">

<button
class="btn btn-primary"
onclick="decimalToBinary()">

Decimal → Binário

</button>

<button
class="btn btn-secondary"
onclick="binaryToDecimal()">

Binário → Decimal

</button>

</div>

<div id="binaryResult"></div>

`,


password: `

<div class="form-group">

<label>
Tamanho
</label>

<input
id="passwordLength"
class="input"
type="number"
min="4"
max="100"
value="16"
>

</div>

<button
class="btn btn-primary"
onclick="generatePassword()">

Gerar senha

</button>

<div id="passwordResult"></div>

`,


number: `

<div class="form-row">

<div class="form-group">

<label>Mínimo</label>

<input
id="numberMin"
class="input"
type="number"
value="1"
>

</div>

<div class="form-group">

<label>Máximo</label>

<input
id="numberMax"
class="input"
type="number"
value="100"
>

</div>

</div>

<button
class="btn btn-primary"
onclick="generateNumber()">

Gerar número

</button>

<div id="numberResult"></div>

`,


name: `

<button
class="btn btn-primary"
onclick="generateName()">

Gerar nome

</button>

<div id="nameResult"></div>

`,


color: `

<button
class="btn btn-primary"
onclick="generateColor()">

Gerar cor

</button>

<div id="colorResult"></div>

`,


uuid: `

<button
class="btn btn-primary"
onclick="generateUUID()">

Gerar UUID

</button>

<div id="uuidResult"></div>

`,


qr: `

<div class="form-group">

<label>
Texto ou URL
</label>

<input
id="qrText"
class="input"
placeholder="https://exemplo.com"
>

</div>

<button
class="btn btn-primary"
onclick="generateQR()">

Gerar QR Code

</button>

<div
id="qrResult"
class="qr-result">
</div>

`,


cpf: `

<p>
Este gerador cria números de CPF para
uso em testes e desenvolvimento.
</p>

<br>

<button
class="btn btn-primary"
onclick="generateCPF()">

Gerar CPF

</button>

<div id="cpfResult"></div>

`,


stopwatch: `

<div
id="stopwatchDisplay"
class="timer-display">

00:00:00

</div>

<div class="hero-buttons">

<button
class="btn btn-primary"
onclick="startStopwatch()">

Iniciar

</button>

<button
class="btn btn-secondary"
onclick="stopStopwatch()">

Parar

</button>

<button
class="btn btn-secondary"
onclick="resetStopwatch()">

Zerar

</button>

</div>

`,


timer: `

<div class="form-row">

<div class="form-group">

<label>Minutos</label>

<input
id="timerMinutes"
class="input"
type="number"
min="0"
value="1"
>

</div>

<div class="form-group">

<label>Segundos</label>

<input
id="timerSeconds"
class="input"
type="number"
min="0"
max="59"
value="0"
>

</div>

</div>

<div
id="timerDisplay"
class="timer-display">

01:00

</div>

<div class="hero-buttons">

<button
class="btn btn-primary"
onclick="startTimer()">

Iniciar

</button>

<button
class="btn btn-secondary"
onclick="stopTimer()">

Parar

</button>

</div>

`,


sort: `

<div class="form-group">

<label>
Opções separadas por vírgula
</label>

<textarea
id="sortOptions"
class="input textarea"
placeholder="Pizza, Hambúrguer, Sushi"
></textarea>

</div>

<button
class="btn btn-primary"
onclick="sortOption()">

Sortear

</button>

<div id="sortResult"></div>

`,


url: `

<div class="form-group">

<label>
URL
</label>

<input
id="urlInput"
class="input"
placeholder="https://exemplo.com"
>

</div>

<button
class="btn btn-primary"
onclick="copyURL()">

Copiar URL

</button>

<div id="urlResult"></div>

`

  };


  return html[id] || `
    <p>Ferramenta em desenvolvimento.</p>
  `;

}


/* RESULT */

function showResult(id, value) {

  document.getElementById(id).innerHTML = `

    <div class="result">

      <div class="result-value">
        ${value}
      </div>

    </div>

  `;

}


/* CALCULATOR */

function calcAdd(value) {

  document.getElementById(
    "calcDisplay"
  ).value += value;

}


function calcClear() {

  document.getElementById(
    "calcDisplay"
  ).value = "";

}


function calcDelete() {

  const display =
    document.getElementById(
      "calcDisplay"
    );

  display.value =
    display.value.slice(0,-1);

}


function calcResult() {

  const display =
    document.getElementById(
      "calcDisplay"
    );

  try {

    if (!/^[0-9+\-*/.() ]+$/.test(display.value)) {
      throw new Error();
    }

    display.value =
      Function(
        `"use strict";return (${display.value})`
      )();

  } catch {

    display.value = "Erro";

  }

}


/* PERCENTAGE */

function calculatePercentage() {

  const value =
    Number(
      document.getElementById(
        "percentValue"
      ).value
    );

  const percent =
    Number(
      document.getElementById(
        "percentNumber"
      ).value
    );

  showResult(
    "percentResult",
    `${value * percent / 100}`
  );

}


/* RULE 3 */

function calculateRule3() {

  const a =
    Number(
      document.getElementById("ruleA").value
    );

  const b =
    Number(
      document.getElementById("ruleB").value
    );

  const c =
    Number(
      document.getElementById("ruleC").value
    );

  if (!a) return;

  showResult(
    "ruleResult",
    (b * c / a).toFixed(2)
  );

}


/* AVERAGE */

function calculateAverage() {

  const values =
    document.getElementById(
      "averageInput"
    ).value
      .split(",")
      .map(Number)
      .filter(Number.isFinite);

  if (!values.length) return;

  const average =
    values.reduce(
      (a,b) => a+b,
      0
    ) / values.length;

  showResult(
    "averageResult",
    average.toFixed(2)
  );

}


/* AGE */

function calculateAge() {

  const value =
    document.getElementById(
      "birthDate"
    ).value;

  if (!value) return;

  const birth =
    new Date(value);

  const today =
    new Date();

  let age =
    today.getFullYear() -
    birth.getFullYear();

  const month =
    today.getMonth() -
    birth.getMonth();

  if (
    month < 0 ||
    (
      month === 0 &&
      today.getDate() < birth.getDate()
    )
  ) {
    age--;
  }

  showResult(
    "ageResult",
    `${age} anos`
  );

}


/* DISCOUNT */

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

  const final =
    price -
    price * percent / 100;

  showResult(
    "discountResult",
    `R$ ${final.toFixed(2)}`
  );

}


/* INTEREST */

function calculateInterest() {

  const capital =
    Number(
      document.getElementById(
        "interestCapital"
      ).value
    );

  const rate =
    Number(
      document.getElementById(
        "interestRate"
      ).value
    );

  const time =
    Number(
      document.getElementById(
        "interestTime"
      ).value
    );

  const interest =
    capital * rate / 100 * time;

  const total =
    capital + interest;

  showResult(
    "interestResult",
    `Juros: R$ ${interest.toFixed(2)}
     | Total: R$ ${total.toFixed(2)}`
  );

}


/* SPEED */

function calculateSpeed() {

  const distance =
    Number(
      document.getElementById(
        "speedDistance"
      ).value
    );

  const time =
    Number(
      document.getElementById(
        "speedTime"
      ).value
    );

  if (!time) return;

  showResult(
    "speedResult",
    `${(distance / time).toFixed(2)} unidades/h`
  );

}


/* BMI */

function calculateBMI() {

  const weight =
    Number(
      document.getElementById(
        "bmiWeight"
      ).value
    );

  const height =
    Number(
      document.getElementById(
        "bmiHeight"
      ).value
    );

  if (!height) return;

  const bmi =
    weight /
    (height * height);

  showResult(
    "bmiResult",
    bmi.toFixed(2)
  );

}


/* COUNTER */

document.addEventListener(
  "input",
  event => {

    if (
      event.target.id !==
      "counterText"
    ) return;

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
    ).textContent =
      text.length;

    document.getElementById(
      "spaceCount"
    ).textContent =
      text.replace(/\s/g,"").length;

  }
);


/* CASE */

function changeCase(type) {

  const textarea =
    document.getElementById(
      "caseText"
    );

  if (type === "upper") {
    textarea.value =
      textarea.value.toUpperCase();
  }

  if (type === "lower") {
    textarea.value =
      textarea.value.toLowerCase();
  }

  if (type === "title") {

    textarea.value =
      textarea.value
        .toLowerCase()
        .replace(
          /\b\w/g,
          char => char.toUpperCase()
        );

  }

}


/* SHUFFLE */

function shuffleText() {

  const text =
    document.getElementById(
      "shuffleText"
    ).value;

  const words =
    text.trim()
      .split(/\s+/);

  words.sort(
    () => Math.random() - 0.5
  );

  showResult(
    "shuffleResult",
    words.join(" ")
  );

}


/* LOREM */

function generateLorem() {

  const count =
    Number(
      document.getElementById(
        "loremCount"
      ).value
    );

  const base =
    `Lorem ipsum dolor sit amet consectetur
     adipiscing elit sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua`;

  const words =
    base.split(/\s+/);

  let result = [];

  for (
    let i = 0;
    i < count;
    i++
  ) {

    result.push(
      words[
        i % words.length
      ]
    );

  }

  showResult(
    "loremResult",
    result.join(" ")
  );

}


/* TEMPERATURE */

function convertTemperature() {

  const value =
    Number(
      document.getElementById(
        "tempValue"
      ).value
    );

  const from =
    document.getElementById(
      "tempFrom"
    ).value;

  const to =
    document.getElementById(
      "tempTo"
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

  let result;

  if (to === "c")
    result = celsius;

  if (to === "f")
    result =
      celsius * 9 / 5 + 32;

  if (to === "k")
    result =
      celsius + 273.15;

  showResult(
    "tempResult",
    result.toFixed(2)
  );

}


/* LENGTH */

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
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000
  };

  const meters =
    value * factors[from];

  const result =
    meters / factors[to];

  showResult(
    "lengthResult",
    result
  );

}


/* WEIGHT */

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
    mg: 0.000001,
    g: 0.001,
    kg: 1
  };

  const kg =
    value * factors[from];

  const result =
    kg / factors[to];

  showResult(
    "weightResult",
    result
  );

}


/* STORAGE */

function convertStorage() {

  const value =
    Number(
      document.getElementById(
        "storageValue"
      ).value
    );

  const from =
    document.getElementById(
      "storageFrom"
    ).value;

  const to =
    document.getElementById(
      "storageTo"
    ).value;

  const factors = {
    B: 1,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4
  };

  const bytes =
    value * factors[from];

  const result =
    bytes / factors[to];

  showResult(
    "storageResult",
    result
  );

}


/* BINARY */

function decimalToBinary() {

  const value =
    document.getElementById(
      "binaryValue"
    ).value;

  const result =
    Number(value).toString(2);

  showResult(
    "binaryResult",
    result
  );

}


function binaryToDecimal() {

  const value =
    document.getElementById(
      "binaryValue"
    ).value;

  if (!/^[01]+$/.test(value)) {

    showResult(
      "binaryResult",
      "Digite um binário válido."
    );

    return;

  }

  showResult(
    "binaryResult",
    parseInt(value,2)
  );

}


/* PASSWORD */

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

  for (
    let i = 0;
    i < length;
    i++
  ) {

    password +=
      chars[
        Math.floor(
          Math.random() *
          chars.length
        )
      ];

  }

  showResult(
    "passwordResult",
    password
  );

}


/* NUMBER */

function generateNumber() {

  const min =
    Number(
      document.getElementById(
        "numberMin"
      ).value
    );

  const max =
    Number(
      document.getElementById(
        "numberMax"
      ).value
    );

  const number =
    Math.floor(
      Math.random() *
      (max - min + 1)
    ) + min;

  showResult(
    "numberResult",
    number
  );

}


/* NAME */

function generateName() {

  const names = [
    "Lucas",
    "Arthur",
    "Gabriel",
    "Miguel",
    "Rafael",
    "João",
    "Pedro",
    "Daniel",
    "Matheus",
    "Felipe",
    "Laura",
    "Maria",
    "Ana",
    "Julia",
    "Beatriz",
    "Sofia",
    "Helena"
  ];

  const name =
    names[
      Math.floor(
        Math.random() *
        names.length
      )
    ];

  showResult(
    "nameResult",
    name
  );

}


/* COLOR */

function generateColor() {

  const color =
    "#" +
    Math.floor(
      Math.random() *
      16777215
    )
    .toString(16)
    .padStart(6,"0");

  document.getElementById(
    "colorResult"
  ).innerHTML = `

    <div class="result">

      <div
        style="
          width:120px;
          height:120px;
          margin:auto;
          border-radius:20px;
          background:${color};
        "
      ></div>

      <br>

      <div class="result-value">
        ${color}
      </div>

    </div>

  `;

}


/* UUID */

function generateUUID() {

  const uuid =
    crypto.randomUUID
      ? crypto.randomUUID()
      : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
        .replace(
          /[xy]/g,
          c => {

            const r =
              Math.random() * 16 | 0;

            const v =
              c === "x"
                ? r
                : (r & 0x3 | 0x8);

            return v.toString(16);

          }
        );

  showResult(
    "uuidResult",
    uuid
  );

}


/* QR */

function generateQR() {

  const text =
    document.getElementById(
      "qrText"
    ).value.trim();

  if (!text) return;

  document.getElementById(
    "qrResult"
  ).innerHTML = `

    <img
      src="
      https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}
      "
      alt="QR Code"
    >

    <br><br>

    <button
      class="btn btn-secondary"
      onclick="copyText('${escapeQuotes(text)}')"
    >
      Copiar texto
    </button>

  `;

}


/* CPF */

function generateCPF() {

  const numbers = [];

  for (
    let i = 0;
    i < 9;
    i++
  ) {

    numbers.push(
      Math.floor(
        Math.random() * 10
      )
    );

  }

  let sum = 0;

  for (
    let i = 0;
    i < 9;
    i++
  ) {

    sum +=
      numbers[i] *
      (10-i);

  }

  let digit =
    11 - sum % 11;

  if (digit >= 10)
    digit = 0;

  numbers.push(digit);

  sum = 0;

  for (
    let i = 0;
    i < 10;
    i++
  ) {

    sum +=
      numbers[i] *
      (11-i);

  }

  digit =
    11 - sum % 11;

  if (digit >= 10)
    digit = 0;

  numbers.push(digit);

  const cpf =
    numbers.join("")
      .replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );

  showResult(
    "cpfResult",
    cpf
  );

}


/* STOPWATCH */

let stopwatchSeconds = 0;
let stopwatchInterval = null;


function startStopwatch() {

  if (stopwatchInterval)
    return;

  stopwatchInterval =
    setInterval(() => {

      stopwatchSeconds++;

      updateStopwatch();

    },1000);

}


function stopStopwatch() {

  clearInterval(
    stopwatchInterval
  );

  stopwatchInterval = null;

}


function resetStopwatch() {

  stopStopwatch();

  stopwatchSeconds = 0;

  updateStopwatch();

}


function updateStopwatch() {

  const h =
    Math.floor(
      stopwatchSeconds / 3600
    );

  const m =
    Math.floor(
      (stopwatchSeconds % 3600) / 60
    );

  const s =
    stopwatchSeconds % 60;

  const display =
    document.getElementById(
      "stopwatchDisplay"
    );

  if (!display) return;

  display.textContent =
    `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

}


/* TIMER */

let timerSeconds = 0;
let timerInterval = null;


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

    const seconds =
      Number(
        document.getElementById(
          "timerSeconds"
        ).value
      );

    timerSeconds =
      minutes * 60 +
      seconds;

  }

  timerInterval =
    setInterval(() => {

      if (timerSeconds <= 0) {

        stopTimer();

        alert("Tempo encerrado!");

        return;

      }

      timerSeconds--;

      updateTimer();

    },1000);

  updateTimer();

}


function stopTimer() {

  clearInterval(
    timerInterval
  );

  timerInterval = null;

}


function updateTimer() {

  const display =
    document.getElementById(
      "timerDisplay"
    );

  if (!display) return;

  const minutes =
    Math.floor(
      timerSeconds / 60
    );

  const seconds =
    timerSeconds % 60;

  display.textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

}


/* SORT */

function sortOption() {

  const options =
    document.getElementById(
      "sortOptions"
    ).value
      .split(",")
      .map(x => x.trim())
      .filter(Boolean);

  if (!options.length)
    return;

  const selected =
    options[
      Math.floor(
        Math.random() *
        options.length
      )
    ];

  showResult(
    "sortResult",
    selected
  );

}


/* URL */

function copyURL() {

  const url =
    document.getElementById(
      "urlInput"
    ).value.trim();

  if (!url) return;

  copyText(url);

  showResult(
    "urlResult",
    "URL copiada!"
  );

}


/* COPY */

function escapeQuotes(text) {

  return text
    .replace(/\\/g,"\\\\")
    .replace(/'/g,"\\'");

}


function copyText(text) {

  navigator.clipboard
    .writeText(text)
    .then(() => {

      alert("Copiado!");

    });

}


/* DARK MODE */

const themeButton =
  document.getElementById(
    "themeButton"
  );


const savedTheme =
  localStorage.getItem(
    "nexotools-theme"
  );


if (savedTheme === "dark") {

  document.body.classList.add("dark");

  themeButton.textContent = "☀️";

}


themeButton.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "dark"
    );

    const dark =
      document.body.classList.contains(
        "dark"
      );

    themeButton.textContent =
      dark ? "☀️" : "🌙";

    localStorage.setItem(
      "nexotools-theme",
      dark ? "dark" : "light"
    );

  }
);


/* MOBILE MENU */

document
  .getElementById("menuButton")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("navLinks")
        .classList.toggle("open");

    }
  );


/* CONTACT */

document
  .getElementById("contactForm")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();

      document.getElementById(
        "contactResult"
      ).innerHTML = `

        <div class="result">

          <div class="result-value">
            ✓ Mensagem preparada!
          </div>

          <p>
            O formulário está funcionando.
            Para receber mensagens de verdade,
            depois conectaremos um serviço de e-mail.
          </p>

        </div>

      `;

      event.target.reset();

    }
  );
