window.quizData = window.quizData || {};

window.quizData.sapDesign = [

{
q:"AWS Well-Architected Frameworkの5本柱に含まれないものは？",
c:["運用上の優秀性","セキュリティ","持続可能性","ソフトウェアライセンス管理"],
a:"ソフトウェアライセンス管理"
},

{
q:"高可用性設計で最も推奨される構成は？",
c:["マルチAZ","単一AZ","単一EC2","単一リージョン単一AZ"],
a:"マルチAZ"
},

{
q:"耐障害性向上のために利用するサービスは？",
c:["Elastic Load Balancing","IAM","CloudShell","Cost Explorer"],
a:"Elastic Load Balancing"
},

{
q:"Auto Scalingの目的は？",
c:["負荷に応じて台数を増減","料金請求","暗号化","ログ分析"],
a:"負荷に応じて台数を増減"
},

{
q:"設計原則『単一障害点の排除』を実現する方法は？",
c:["冗長化","停止","削除","圧縮"],
a:"冗長化"
},

{
q:"リージョン障害対策として有効なのは？",
c:["マルチリージョン構成","単一AZ","単一VPC","単一EC2"],
a:"マルチリージョン構成"
},

{
q:"Route53のフェイルオーバールーティングの目的は？",
c:["障害時の切替","課金","暗号化","圧縮"],
a:"障害時の切替"
},

{
q:"CloudFrontの主な役割は？",
c:["CDN","監査","認証","課金"],
a:"CDN"
},

{
q:"RTOとは？",
c:["復旧目標時間","復旧目標時点","可用性","帯域幅"],
a:"復旧目標時間"
},

{
q:"RPOとは？",
c:["許容データ損失時間","応答時間","CPU利用率","転送量"],
a:"許容データ損失時間"
},

{
q:"AWSでDR設計時に最もコストが低い方式は？",
c:["バックアップ＆リストア","ウォームスタンバイ","ホットスタンバイ","アクティブ-アクティブ"],
a:"バックアップ＆リストア"
},

{
q:"最も復旧が速いDR方式は？",
c:["アクティブ-アクティブ","バックアップ","パイロットライト","ウォームスタンバイ"],
a:"アクティブ-アクティブ"
},

{
q:"設計時に推奨される考え方は？",
c:["疎結合","密結合","単一構成","手動運用"],
a:"疎結合"
},

{
q:"サーバレス設計で利用されるサービスは？",
c:["Lambda","EC2","Lightsail","VMware"],
a:"Lambda"
},

{
q:"Lambdaの特徴は？",
c:["サーバ管理不要","OS管理必須","固定料金","専用ハード必須"],
a:"サーバ管理不要"
},

{
q:"設計時にキャッシュとして利用されるサービスは？",
c:["ElastiCache","IAM","CloudTrail","Inspector"],
a:"ElastiCache"
},

{
q:"Auroraの特徴は？",
c:["高可用性と高性能","メール送信","DNS管理","認証"],
a:"高可用性と高性能"
},

{
q:"Aurora Storageは何AZに複製される？",
c:["3AZ","1AZ","2AZ","6AZ"],
a:"3AZ"
},

{
q:"S3の耐久性は？",
c:["99.999999999%","99%","95%","90%"],
a:"99.999999999%"
},

{
q:"設計で静的コンテンツ保存先として最適なのは？",
c:["S3","EC2","IAM","VPC"],
a:"S3"
},

{
q:"CloudFrontと組み合わせる代表的なサービスは？",
c:["S3","IAM","Organizations","CloudTrail"],
a:"S3"
},

{
q:"VPC設計で公開サーバを配置する場所は？",
c:["Public Subnet","Private Subnet","Transit Gateway","Direct Connect"],
a:"Public Subnet"
},

{
q:"DBを配置する推奨場所は？",
c:["Private Subnet","Public Subnet","Internet Gateway","Route53"],
a:"Private Subnet"
},

{
q:"VPC間接続で大規模環境向けなのは？",
c:["Transit Gateway","NAT Gateway","CloudFront","EBS"],
a:"Transit Gateway"
},

{
q:"オンプレミスとの専用線接続は？",
c:["Direct Connect","VPNのみ","CloudFront","SQS"],
a:"Direct Connect"
},

{
q:"オンプレミスとAWSを暗号化通信で接続するサービスは？",
c:["Site-to-Site VPN","CloudFront","S3 Glacier","CloudWatch"],
a:"Site-to-Site VPN"
},

{
q:"Direct Connectのメリットは？",
c:["安定した専用接続","無料のCDN","自動スケーリング","DNS管理"],
a:"安定した専用接続"
},

{
q:"NAT Gatewayの役割は？",
c:["Private Subnetからインターネットへ接続","DNS名前解決","ファイル共有","監査ログ取得"],
a:"Private Subnetからインターネットへ接続"
},

{
q:"Internet Gatewayの役割は？",
c:["VPCとインターネットを接続","DB暗号化","ログ分析","負荷分散"],
a:"VPCとインターネットを接続"
},

{
q:"セキュリティグループの特徴は？",
c:["ステートフル","ステートレス","VPC外専用","拒否ルールのみ"],
a:"ステートフル"
},

{
q:"ネットワークACLの特徴は？",
c:["ステートレス","ステートフル","許可ルールのみ","IAM専用"],
a:"ステートレス"
},

{
q:"マイクロサービス間の非同期連携に適したサービスは？",
c:["SQS","EC2 Image Builder","CloudTrail","WAF"],
a:"SQS"
},

{
q:"メッセージの順序保証が必要な場合に使うSQSキューは？",
c:["FIFOキュー","標準キュー","DLQ","一時キュー"],
a:"FIFOキュー"
},

{
q:"SQSのデッドレターキューの目的は？",
c:["処理失敗メッセージの退避","画像配信","DNS切替","暗号鍵管理"],
a:"処理失敗メッセージの退避"
},

{
q:"イベント駆動設計で複数ターゲットへイベントを配送できるサービスは？",
c:["EventBridge","IAM","EBS","Route53 Resolver"],
a:"EventBridge"
},

{
q:"Pub/Sub方式で通知を配信するサービスは？",
c:["SNS","S3","RDS","EFS"],
a:"SNS"
},

{
q:"大量データをストリーミング処理するサービスは？",
c:["Kinesis Data Streams","CloudTrail","Systems Manager","Shield"],
a:"Kinesis Data Streams"
},

{
q:"コンテナをAWSで実行するマネージドサービスは？",
c:["ECS","CloudFront","Route53","GuardDuty"],
a:"ECS"
},

{
q:"KubernetesをAWSで実行するマネージドサービスは？",
c:["EKS","ECS","Elastic Beanstalk","Lightsail"],
a:"EKS"
},

{
q:"サーバレスでコンテナを実行できる起動タイプは？",
c:["Fargate","EC2 Classic","Dedicated Host","AMI"],
a:"Fargate"
},

{
q:"Elastic Beanstalkの特徴は？",
c:["アプリケーション実行環境を簡単に構築","DNS専用サービス","暗号鍵管理","データレイク専用"],
a:"アプリケーション実行環境を簡単に構築"
},

{
q:"Blue/Greenデプロイの目的は？",
c:["切替リスクを下げる","ログを削除する","DB容量を減らす","IAM権限を増やす"],
a:"切替リスクを下げる"
},

{
q:"Canaryデプロイの特徴は？",
c:["一部ユーザーへ段階的に展開","全停止して一括更新","DBのみ更新","DNSを使わない"],
a:"一部ユーザーへ段階的に展開"
},

{
q:"インフラをコードで管理するAWSサービスは？",
c:["CloudFormation","CloudTrail","CloudWatch","Config"],
a:"CloudFormation"
},

{
q:"AWS CDKの特徴は？",
c:["プログラミング言語でIaCを定義","監査ログ取得","画像配信","DNS管理"],
a:"プログラミング言語でIaCを定義"
},

{
q:"CloudWatchの主な用途は？",
c:["監視とメトリクス収集","ID管理","CDN","請求代行"],
a:"監視とメトリクス収集"
},

{
q:"CloudTrailの主な用途は？",
c:["API操作履歴の記録","CPU監視","画像変換","DNS管理"],
a:"API操作履歴の記録"
},

{
q:"AWS Configの主な用途は？",
c:["リソース設定変更の記録と評価","メール配信","CDN","暗号化通信"],
a:"リソース設定変更の記録と評価"
},

{
q:"障害調査でAPI操作履歴を確認するサービスは？",
c:["CloudTrail","CloudFront","SQS","EFS"],
a:"CloudTrail"
},

{
q:"アプリケーションログの保存・検索に使うCloudWatch機能は？",
c:["CloudWatch Logs","CloudWatch Events","CloudWatch Billing","CloudWatch DNS"],
a:"CloudWatch Logs"
},

{
q:"CloudWatch Alarmの目的は？",
c:["閾値超過時の通知や自動アクション","DNS管理","暗号鍵生成","AMI作成"],
a:"閾値超過時の通知や自動アクション"
},

{
q:"運用自動化に利用されるサービスは？",
c:["Systems Manager","CloudFront","IAM Identity Center","Route53"],
a:"Systems Manager"
},

{
q:"Systems Manager Run Commandの用途は？",
c:["サーバへリモートコマンド実行","負荷分散","DNS解決","ログ保管"],
a:"サーバへリモートコマンド実行"
},

{
q:"パラメータやシークレット管理に利用できるSystems Manager機能は？",
c:["Parameter Store","Patch Manager","Fleet Manager","Session Manager"],
a:"Parameter Store"
},

{
q:"AWS Secrets Managerの用途は？",
c:["認証情報の安全な保管","ログ収集","画像配信","メール送信"],
a:"認証情報の安全な保管"
},

{
q:"KMSの主な役割は？",
c:["暗号鍵管理","負荷分散","DNS管理","サーバ構築"],
a:"暗号鍵管理"
},

{
q:"S3のサーバーサイド暗号化でKMSを利用する方式は？",
c:["SSE-KMS","SSE-S3","SSE-C","Client VPN"],
a:"SSE-KMS"
},

{
q:"WAFの役割は？",
c:["Web攻撃の防御","データ分析","メール送信","バックアップ"],
a:"Web攻撃の防御"
},

{
q:"DDoS対策サービスは？",
c:["Shield","Inspector","Macie","Detective"],
a:"Shield"
},

{
q:"脆弱性評価サービスは？",
c:["Inspector","CloudHSM","SNS","Athena"],
a:"Inspector"
},

{
q:"脅威検知サービスは？",
c:["GuardDuty","CodeBuild","Glue","Batch"],
a:"GuardDuty"
},

{
q:"個人情報検出サービスは？",
c:["Macie","Shield","KMS","Route53"],
a:"Macie"
},

{
q:"セキュリティイベント分析に利用されるサービスは？",
c:["Security Hub","Cloud9","WorkSpaces","App Runner"],
a:"Security Hub"
},

{
q:"複数AWSアカウントを統合管理するサービスは？",
c:["Organizations","IAM User","CloudShell","DataSync"],
a:"Organizations"
},

{
q:"Organizationsで利用するポリシーは？",
c:["SCP","Bucket Policy","NACL","Trust Policy"],
a:"SCP"
},

{
q:"SCPの目的は？",
c:["アカウント全体の権限制限","EC2監視","DNS管理","バックアップ"],
a:"アカウント全体の権限制限"
},

{
q:"クロスアカウントアクセスで利用するIAM機能は？",
c:["IAMロール","IAMグループ","NACL","Route Table"],
a:"IAMロール"
},

{
q:"設計時に推奨される認証方式は？",
c:["フェデレーション認証","root利用","共有アカウント","共通パスワード"],
a:"フェデレーション認証"
},

{
q:"AWS IAM Identity Centerの旧名称は？",
c:["AWS SSO","AWS Directory","IAM Access Analyzer","Cognito"],
a:"AWS SSO"
},

{
q:"データレイク構築で中心となるサービスは？",
c:["S3","SNS","IAM","CloudShell"],
a:"S3"
},

{
q:"S3上のデータをSQLで分析できるサービスは？",
c:["Athena","CloudFormation","ECR","Inspector"],
a:"Athena"
},

{
q:"ETL処理に利用されるサービスは？",
c:["Glue","WAF","Shield","SES"],
a:"Glue"
},

{
q:"大規模データ分析サービスは？",
c:["Redshift","Lightsail","WorkDocs","Transfer Family"],
a:"Redshift"
},

{
q:"Aurora Global Databaseの目的は？",
c:["グローバル分散とDR強化","メール送信","ログ監視","認証管理"],
a:"グローバル分散とDR強化"
},

{
q:"読み取り負荷分散に利用するAurora機能は？",
c:["Read Replica","NAT Gateway","Transit Gateway","Elastic IP"],
a:"Read Replica"
},

{
q:"Aurora Serverless v2の特徴は？",
c:["自動スケーリング","固定容量","手動拡張のみ","EC2必須"],
a:"自動スケーリング"
},

{
q:"EFSの特徴は？",
c:["複数EC2で共有可能なファイルストレージ","ブロックストレージ","オブジェクトストレージ","バックアップ専用"],
a:"複数EC2で共有可能なファイルストレージ"
},

{
q:"EC2専用のブロックストレージは？",
c:["EBS","EFS","S3","FSx"],
a:"EBS"
},

{
q:"長期アーカイブ向けストレージクラスは？",
c:["S3 Glacier Deep Archive","S3 Standard","EFS Standard","EBS gp3"],
a:"S3 Glacier Deep Archive"
},

{
q:"ストレージコスト最適化のために利用する機能は？",
c:["Lifecycle Policy","Security Group","Transit Gateway","NACL"],
a:"Lifecycle Policy"
},

{
q:"設計時に推奨される考え方『使った分だけ支払う』は何と呼ばれる？",
c:["従量課金","固定課金","前払い課金","永久ライセンス"],
a:"従量課金"
},

{
q:"長期利用EC2のコスト削減に最適なのは？",
c:["Savings Plans","オンデマンド","Elastic IP","CloudFront"],
a:"Savings Plans"
},

{
q:"最大割引率が期待できるEC2購入オプションは？",
c:["スポットインスタンス","オンデマンド","Dedicated Host","リザーブドなし"],
a:"スポットインスタンス"
},

{
q:"中断許容ワークロード向けなのは？",
c:["スポットインスタンス","オンデマンドのみ","Dedicated Host","Outposts"],
a:"スポットインスタンス"
},

{
q:"コスト分析サービスは？",
c:["Cost Explorer","Inspector","Macie","CloudHSM"],
a:"Cost Explorer"
},

{
q:"予算超過通知に利用するサービスは？",
c:["AWS Budgets","CloudTrail","GuardDuty","Athena"],
a:"AWS Budgets"
},

{
q:"Trusted Advisorの役割は？",
c:["コスト・セキュリティ・性能の改善提案","メール送信","DNS管理","暗号化"],
a:"コスト・セキュリティ・性能の改善提案"
},

{
q:"AWS Well-Architected Toolの目的は？",
c:["設計レビュー","監査ログ取得","課金管理","コード実行"],
a:"設計レビュー"
},

{
q:"設計時に推奨される『ペットではなく家畜』という考え方は？",
c:["Immutable Infrastructure","単一障害点","共有責任モデル","フェイルオーバー"],
a:"Immutable Infrastructure"
},

{
q:"Immutable Infrastructureの特徴は？",
c:["変更ではなく再作成","手動修正","SSH接続必須","サーバ固定運用"],
a:"変更ではなく再作成"
},

{
q:"共有責任モデルでAWSが責任を持つものは？",
c:["クラウドのセキュリティ","IAM設定","データ分類","OSパッチ"],
a:"クラウドのセキュリティ"
},

{
q:"共有責任モデルで顧客が責任を持つものは？",
c:["IAM設定","データセンター警備","物理サーバ管理","リージョン運営"],
a:"IAM設定"
},

{
q:"高可用性設計の基本は？",
c:["複数AZ利用","単一AZ","単一EC2","単一ディスク"],
a:"複数AZ利用"
},

{
q:"Design for Failureとは？",
c:["障害を前提に設計する","障害を無視する","手動運用を増やす","単一構成にする"],
a:"障害を前提に設計する"
},

{
q:"イベント駆動・疎結合設計で推奨されるサービスの組み合わせは？",
c:["SNS＋SQS","EC2＋SSH","Route53＋IAM","EBS＋EFS"],
a:"SNS＋SQS"
},

{
q:"グローバルアプリケーションのトラフィック制御に利用するサービスは？",
c:["Route53","CloudTrail","Inspector","Macie"],
a:"Route53"
},

{
q:"Route53のレイテンシールーティングの目的は？",
c:["最も応答の速いリージョンへ誘導","コスト削減","暗号化","監査"],
a:"最も応答の速いリージョンへ誘導"
},

{
q:"マルチリージョン構成の主な目的は？",
c:["災害対策と可用性向上","課金削減","権限管理","ログ保存"],
a:"災害対策と可用性向上"
},

{
q:"AWS SAP試験レベルで最も重要な設計テーマは？",
c:["高可用性・耐障害性・拡張性","CLI操作","EC2作成手順","請求書確認"],
a:"高可用性・耐障害性・拡張性"
},

{
q:"AWS Solutions Architect Professionalで求められる能力は？",
c:["大規模システム設計能力","タイピング速度","プログラミングのみ","経理知識"],
a:"大規模システム設計能力"
}


];