const params = new URLSearchParams(location.search);

const exam = params.get("exam") || "ans";
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

// exam が存在しない場合は ans を使う
const currentExam = exams[exam] || exams.ans;
const currentType = type || "all";

// タイトル変更
document.title = currentExam.title;
document.getElementById("pageTitle").textContent = currentExam.title;
document.getElementById("pageDesc").textContent = currentExam.desc;

// メニュー取得
const examList = document.getElementById("examList");
const quizList = document.getElementById("quizList");

// 試験一覧
examList.innerHTML = Object.keys(exams).map(key => `
  <a href="?exam=${key}" class="${key === exam ? "active" : ""}">
    ${exams[key].title}
  </a>
`).join("");

// カテゴリ一覧
quizList.innerHTML =
`
<a href="?exam=${exam}" class="${currentType === "all" ? "active" : ""}">
  全カテゴリ50問
</a>
`
+
Object.keys(currentExam.categories).map(key => `
  <a href="?exam=${exam}&type=${key}" class="${key === currentType ? "active" : ""}">
    ${currentExam.categories[key]}
  </a>
`).join("");

// データ形式統一
function normalizeQuestion(q){
  return {
    question: q.question || q.q,
    choices: q.choices || q.c,
    answer: q.answer || q.a,
    explanation: q.explanation || q.e || ""
  };
}

let questions = [];

if (currentType === "all") {
  Object.keys(currentExam.categories).forEach(key => {
    if (window.quizData && window.quizData[key]) {
      questions.push(...window.quizData[key].map(normalizeQuestion));
    }
  });
} else {
  questions = window.quizData?.[currentType]
    ? window.quizData[currentType].map(normalizeQuestion)
    : [];
}

questions = questions.sort(() => Math.random() - 0.5).slice(0, 50);

let currentIndex = 0;
let score = 0;
let answered = false;

const counter = document.getElementById("counter");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

function showQuestion() {
  answered = false;
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  if (questions.length === 0) {
    questionEl.textContent = "問題データが読み込めませんでした";
    choicesEl.innerHTML = "";
    return;
  }

  if (currentIndex >= questions.length) {
    questionEl.textContent = "終了！";
    choicesEl.innerHTML = "";
    counter.textContent = `${questions.length} / ${questions.length}`;
    scoreEl.textContent = `スコア: ${score}`;
    resultEl.textContent = `${questions.length}問中 ${score}問正解`;
    progressBar.style.width = "100%";
    return;
  }

  const q = questions[currentIndex];

  counter.textContent = `${currentIndex + 1} / ${questions.length}`;
  scoreEl.textContent = `スコア: ${score}`;
  questionEl.textContent = q.question;
  progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;

    btn.onclick = () => {
      if (answered) return;
      answered = true;

      if (choice === q.answer) {
        score++;
        resultEl.textContent = "正解！";
      } else {
        resultEl.textContent = `不正解。正解は「${q.answer}」`;
      }

      scoreEl.textContent = `スコア: ${score}`;
      nextBtn.style.display = "block";
    };

    choicesEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  currentIndex++;
  showQuestion();
};

showQuestion();