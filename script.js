const params = new URLSearchParams(location.search);

const exam = params.get("exam") || "sap";
const type = params.get("type");

const exams = {

  ans: {
    title: "AWS Advanced Networking Specialty（ANS-C01）",
    desc: "VPC・Direct Connect・Transit Gateway・DNS・ハイブリッド接続",
    categories: {
      ansNetworkDesign: "ネットワーク設計",
      ansHybrid: "ハイブリッド接続",
      ansSecurity: "ネットワークセキュリティ",
      ansAutomation: "自動化・運用",
      ansPractice: "総合演習"
    }
  },

  scs: {
    title: "AWS Certified Security – Specialty（SCS-C02）",
    desc: "IAM・暗号化・ログ監査・インシデント対応",
    categories: {
      scsIdentity: "IAM・認証",
      scsDetection: "検知・監査",
      scsInfrastructure: "インフラ保護",
      scsDataProtection: "データ保護",
      scsPractice: "総合演習"
    }
  },

  aif: {
    title: "AWS Certified AI Practitioner（AIF-C01）",
    desc: "生成AI・機械学習基礎・責任あるAI・AWS AIサービス",
    categories: {
      aifFundamentals: "AI基礎",
      aifGenerative: "生成AI",
      aifAwsServices: "AWS AIサービス",
      aifResponsible: "責任あるAI",
      aifPractice: "総合演習"
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