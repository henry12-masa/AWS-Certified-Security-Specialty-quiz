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