const params = new URLSearchParams(location.search);

const exam = params.get("exam") || "sap";
const type = params.get("type");

const exams = {
  sap: {
    title: "AWS Solutions Architect Professional（SAP-C02）",
    desc: "組織設計・高度なアーキテクチャ・移行・コスト最適化",
    categories: {
      sapOrganization: "組織とガバナンス",
      sapDesign: "高度な設計",
      sapMigration: "移行・モダナイゼーション",
      sapCost: "コスト最適化",
      sapPractice: "総合演習"
    }
  },

  dop: {
    title: "AWS DevOps Engineer Professional（DOP-C02）",
    desc: "CI/CD・構成管理・監視・自動化・信頼性",
    categories: {
      dopSdlc: "SDLC自動化",
      dopConfiguration: "構成管理",
      dopResilience: "高可用性・復旧",
      dopMonitoring: "監視・ログ",
      dopPractice: "総合演習"
    }
  }
};

const currentExam = exams[exam] || exams.sap;
const currentType = type || "all";

document.title = currentExam.title;
document.getElementById("pageTitle").textContent = currentExam.title;
document.getElementById("pageDesc").textContent = currentExam.desc;

const examList = document.getElementById("examList");
const quizList = document.getElementById("quizList");

examList.innerHTML = Object.keys(exams).map(key => `
  <a href="?exam=${key}" class="${key === exam ? "active" : ""}">
    ${exams[key].title}
  </a>
`).join("");

quizList.innerHTML = `
  <a href="?exam=${exam}" class="${currentType === "all" ? "active" : ""}">
    全カテゴリ50問
  </a>
` + Object.keys(currentExam.categories).map(key => `
  <a href="?exam=${exam}&type=${key}" class="${key === currentType ? "active" : ""}">
    ${currentExam.categories[key]}
  </a>
`).join("");

function normalizeQuestion(q){
  return {
    question: q.question || q.q,
    choices: q.choices || q.c,
    answer: q.answer || q.a,
    explanation: q.explanation || q.e || ""
  };
}

function shuffle(array){
  return [...array].sort(() => Math.random() - 0.5);
}

function getQuestions(){
  let sourceQuestions = [];

  if (currentType === "all" || currentType === "sapPractice" || currentType === "dopPractice") {
    Object.keys(currentExam.categories).forEach(key => {
      if (key === "sapPractice" || key === "dopPractice") return;

      if (window.quizData?.[key]) {
        sourceQuestions = sourceQuestions.concat(window.quizData[key]);
      }
    });
  } else {
    sourceQuestions = window.quizData?.[currentType] || [];
  }

  const seen = new Set();

  return shuffle(
    sourceQuestions
      .map(normalizeQuestion)
      .filter(q => {
        if (!q.question || !q.choices || !q.answer) return false;
        if (!Array.isArray(q.choices) || q.choices.length < 2) return false;

        if (seen.has(q.question)) return false;
        seen.add(q.question);

        return true;
      })
  ).slice(0, 50);
}

let questions = getQuestions();

let current = 0;
let score = 0;
let answered = false;

const counter = document.getElementById("counter");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const progressBar = document.getElementById("progressBar");

function showQuestion(){
  if(questions.length === 0){
    counter.textContent = "0 / 0";
    questionEl.textContent = "問題データがありません";
    choicesEl.innerHTML = "";

    resultEl.textContent = currentType === "all"
      ? `${exam} のカテゴリJSが読み込まれていません`
      : `window.quizData.${currentType} が読み込まれていません`;

    return;
  }

  if(current >= questions.length){
    finishQuiz();
    return;
  }

  answered = false;

  const q = questions[current];

  counter.textContent = `${current + 1} / ${questions.length}`;
  scoreEl.textContent = `スコア: ${score}`;
  questionEl.textContent = q.question;
  resultEl.textContent = "";

  progressBar.style.width = `${(current / questions.length) * 100}%`;

  choicesEl.innerHTML = "";

  shuffle(q.choices).forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => checkAnswer(button, choice);
    choicesEl.appendChild(button);
  });
}

function checkAnswer(button, choice){
  if(answered) return;

  answered = true;

  const q = questions[current];

  document.querySelectorAll("#choices button").forEach(btn => {
    btn.disabled = true;

    if(btn.textContent === q.answer){
      btn.classList.add("correct");
    }
  });

  if(choice === q.answer){
    score++;
    button.classList.add("correct");
    resultEl.textContent = q.explanation
      ? `正解！ ${q.explanation}`
      : "正解！";
  }else{
    button.classList.add("wrong");
    resultEl.textContent = q.explanation
      ? `不正解！ 正解は「${q.answer}」 ${q.explanation}`
      : `不正解！ 正解は「${q.answer}」`;
  }

  scoreEl.textContent = `スコア: ${score}`;

  setTimeout(() => {
    current++;
    showQuestion();
  }, 1700);
}

function finishQuiz(){
  counter.textContent = "終了";
  progressBar.style.width = "100%";
  questionEl.textContent = "結果発表";

  choicesEl.innerHTML = `
    <div class="finish">
      <p>${questions.length}問中 ${score}問正解！</p>
      <button onclick="location.reload()">もう一度挑戦</button>
      <a class="home-btn" href="./">資格選択へ戻る</a>
    </div>
  `;

  resultEl.textContent = "";
}

showQuestion();