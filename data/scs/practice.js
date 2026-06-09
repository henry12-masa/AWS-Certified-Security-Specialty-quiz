
window.quizData = window.quizData || {};

window.quizData.scsPractice = [

{q:"EC2からS3へ安全にアクセスする推奨方法は？",c:["IAMロールを付与する","アクセスキーをコードに埋め込む","rootキーを利用する","全員共通キーを使う"],a:"IAMロールを付与する"},

{q:"S3バケットを誤って公開しないために有効な機能は？",c:["S3 Block Public Access","CloudFront","Route 53","NAT Gateway"],a:"S3 Block Public Access"},

{q:"AWS APIの操作履歴を記録するサービスは？",c:["CloudTrail","CloudWatch","GuardDuty","Inspector"],a:"CloudTrail"},

{q:"脅威検知サービスとして最も適切なのは？",c:["Amazon GuardDuty","AWS Backup","AWS Glue","Amazon Polly"],a:"Amazon GuardDuty"},

{q:"S3内の機密データ検出に使うサービスは？",c:["Amazon Macie","AWS WAF","CloudFormation","Route 53"],a:"Amazon Macie"},

{q:"脆弱性スキャンに利用するサービスは？",c:["Amazon Inspector","CloudFront","SNS","SES"],a:"Amazon Inspector"},

{q:"複数サービスのセキュリティ結果を集約するサービスは？",c:["AWS Security Hub","IAM","EBS","Kinesis"],a:"AWS Security Hub"},

{q:"EC2へSSHを開放せず管理する方法は？",c:["Session Manager","FTP","Telnet","RDP公開"],a:"Session Manager"},

{q:"暗号鍵管理サービスは？",c:["AWS KMS","AWS Shield","AWS Config","AWS Backup"],a:"AWS KMS"},

{q:"保存データの暗号化でS3と統合しやすい方式は？",c:["SSE-KMS","HTTP","FTP","SSE-None"],a:"SSE-KMS"},

{q:"Web攻撃(SQLi/XSS)対策サービスは？",c:["AWS WAF","CloudTrail","Macie","Backup"],a:"AWS WAF"},

{q:"高度なDDoS対策サービスは？",c:["AWS Shield Advanced","AWS Glue","Amazon Athena","SES"],a:"AWS Shield Advanced"},

{q:"EC2ボリューム暗号化に利用するサービスは？",c:["AWS KMS","IAM","SNS","SQS"],a:"AWS KMS"},

{q:"DBパスワード管理に適したサービスは？",c:["Secrets Manager","CloudShell","Cloud9","CodeBuild"],a:"Secrets Manager"},

{q:"Config Rulesの用途は？",c:["設定準拠チェック","DNS管理","メール送信","画像解析"],a:"設定準拠チェック"},

{q:"Flow Logsで確認できるものは？",c:["通信情報","SQL文","IAMパスワード","OS画面"],a:"通信情報"},

{q:"CloudTrailで確認できる内容は？",c:["API操作履歴","CPU使用率","DNS TTL","メモリ内容"],a:"API操作履歴"},

{q:"最小権限の原則とは？",c:["必要最小限だけ許可","全員Admin","root共有","全部拒否"],a:"必要最小限だけ許可"},

{q:"IAMロールを使う最大の利点は？",c:["一時認証情報を利用できる","容量が増える","通信が速くなる","料金が無料"],a:"一時認証情報を利用できる"},

{q:"GuardDutyの検知結果名称は？",c:["Finding","Bucket","Alarm","Volume"],a:"Finding"},

{q:"Inspectorでスキャン可能なのは？",c:["EC2・ECR・Lambda","Route53","IAMのみ","CloudFrontのみ"],a:"EC2・ECR・Lambda"},

{q:"CloudFront経由だけS3公開する仕組みは？",c:["Origin Access Control","NAT Gateway","VPC Peering","DX Gateway"],a:"Origin Access Control"},

{q:"バックアップ削除防止機能は？",c:["Backup Vault Lock","Object Lambda","SNS","EventBridge"],a:"Backup Vault Lock"},

{q:"KMSキー利用履歴の監査サービスは？",c:["CloudTrail","Inspector","Athena","Glue"],a:"CloudTrail"},

{q:"IAM Identity Centerの旧名称は？",c:["AWS Single Sign-On","AWS IAM Plus","AWS Login","IAM Connect"],a:"AWS Single Sign-On"},

{q:"CloudTrail Data Events対象例は？",c:["S3オブジェクト操作","EC2起動","IAM作成","VPC作成"],a:"S3オブジェクト操作"},

{q:"S3 Object Lockの目的は？",c:["削除防止","容量削減","高速化","暗号解除"],a:"削除防止"},

{q:"Macieが検出する代表例は？",c:["個人情報","CPU不足","DNS遅延","Route不足"],a:"個人情報"},

{q:"IAM認証でDB接続可能なサービスは？",c:["Amazon RDS","CloudFront","SNS","SQS"],a:"Amazon RDS"},

{q:"Inspectorの目的は？",c:["脆弱性管理","DNS管理","ログ削除","画像解析"],a:"脆弱性管理"},

{q:"Config Aggregatorの用途は？",c:["複数アカウント集約","バックアップ","暗号化","翻訳"],a:"複数アカウント集約"},

{q:"AWS Organizations全体の最大権限制御は？",c:["SCP","IAM User","Bucket Policy","NACL"],a:"SCP"},

{q:"IAM評価で優先されるものは？",c:["明示的Deny","Allow","タグ","MFA"],a:"明示的Deny"},

{q:"EC2→AWS APIアクセス推奨は？",c:["IAMロール","rootキー","アクセスキー共有","公開キー"],a:"IAMロール"},

{q:"Route53 Resolver Query Loggingは何を保存する？",c:["DNSクエリ","HTTP本文","IAMログ","SSHログ"],a:"DNSクエリ"},

{q:"Security Hubの目的は？",c:["セキュリティ結果集約","ストレージ管理","翻訳","動画配信"],a:"セキュリティ結果集約"},

{q:"CloudWatch Alarmの用途は？",c:["閾値超過通知","IAM作成","S3暗号化","VPC作成"],a:"閾値超過通知"},

{q:"Athenaの用途は？",c:["S3上データをSQL分析","EC2暗号化","Route追加","VPN接続"],a:"S3上データをSQL分析"},

{q:"KMS Decrypt権限を制限する理由は？",c:["不正復号防止","速度向上","コスト削減","DNS高速化"],a:"不正復号防止"},

{q:"Security Specialtyで最重要の考え方は？",c:["多層防御","全公開","root利用","ログ削除"],a:"多層防御"}

];


//100問になるまで自動生成//


for(let i=41;i<=100;i++){
  window.quizData.scsPractice.push({
    q:`AWS Security Specialty 総合問題${i}：最も重要な考え方は？`,
    c:[
      "最小権限・暗号化・監査・自動化",
      "rootユーザー常用",
      "アクセスキー共有",
      "ログを保存しない"
    ],
    a:"最小権限・暗号化・監査・自動化"
  });
}

