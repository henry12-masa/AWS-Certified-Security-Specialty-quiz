const params = new URLSearchParams(location.search);
const type = params.get("type") || "sapOrganization";

const quizInfo = {
  sapOrganization: {
    title: "組織とガバナンス",
    desc: "AWS Organizations・Control Tower・SCP・マルチアカウント設計"
  },
  sapDesign: {
    title: "高度なアーキテクチャ設計",
    desc: "高可用性・DR・ネットワーク・セキュア設計"
  },
  sapMigration: {
    title: "移行とモダナイゼーション",
    desc: "DMS・MGN・Snowball・7R移行戦略"
  },
  sapCost: {
    title: "コスト最適化",
    desc: "Savings Plans・RI・S3ライフサイクル・Trusted Advisor"
  },
  sapPractice: {
    title: "総合演習",
    desc: "SAP-C02本番対策ミックス問題"
  }
};

const currentInfo = quizInfo[type] || quizInfo.sapOrganization;

document.title = `SAP-C02 ${currentInfo.title}`;
document.getElementById("pageTitle").textContent =
  `AWS Solutions Architect Professional（SAP-C02）`;

document.getElementById("pageDesc").textContent = currentInfo.desc;

const quizList = document.getElementById("quizList");

quizList.innerHTML = Object.keys(quizInfo).map(key => `
  <a href="?type=${key}" class="${key === type ? "active" : ""}">
    ${quizInfo[key].title}
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

const rawQuestions = window.quizData?.[type] || [];
let questions = shuffle(rawQuestions.map(normalizeQuestion)).slice(0, 50);

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
    resultEl.textContent = `window.quizData.${type} が読み込まれていません`;
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
      <a class="home-btn" href="./">科目選択へ戻る</a>
    </div>
  `;

  resultEl.textContent = "";
}

showQuestion();