window.quizData = window.quizData || {};

window.quizData.sapMigration = [

{
q:"AWS移行の6R戦略に含まれないものは？",
c:["Refactor","Rehost","Retire","Replicate"],
a:"Replicate"
},

{
q:"Rehostとは？",
c:["そのまま移行","再設計して移行","廃止する","SaaSへ置換"],
a:"そのまま移行"
},

{
q:"Replatformとは？",
c:["最小限の変更で移行","完全再設計","廃止","維持"],
a:"最小限の変更で移行"
},

{
q:"Refactorとは？",
c:["クラウド向けに再設計","そのまま移行","廃止","維持"],
a:"クラウド向けに再設計"
},

{
q:"Retireとは？",
c:["不要システムの廃止","移行","維持","統合"],
a:"不要システムの廃止"
},

{
q:"Retainとは？",
c:["現状維持","再設計","統合","廃止"],
a:"現状維持"
},

{
q:"Repurchaseとは？",
c:["SaaSへ置換","EC2へ移行","再設計","統合"],
a:"SaaSへ置換"
},

{
q:"AWS Migration Hubの役割は？",
c:["移行進捗管理","DNS管理","監査","負荷分散"],
a:"移行進捗管理"
},

{
q:"サーバ移行に利用するサービスは？",
c:["Application Migration Service","CloudFront","IAM","Athena"],
a:"Application Migration Service"
},

{
q:"Application Migration Serviceの旧名称は？",
c:["CloudEndure Migration","Server Migration Service","DataSync","Snowball"],
a:"CloudEndure Migration"
},

{
q:"データベース移行サービスは？",
c:["DMS","SNS","SQS","Glue"],
a:"DMS"
},

{
q:"DMSの正式名称は？",
c:["Database Migration Service","Data Management Service","Database Monitor Service","Data Move Service"],
a:"Database Migration Service"
},

{
q:"DMSで利用するCDCとは？",
c:["継続的データ変更同期","暗号化","圧縮","バックアップ"],
a:"継続的データ変更同期"
},

{
q:"異種DB移行でスキーマ変換に利用するサービスは？",
c:["Schema Conversion Tool","CloudTrail","Config","Inspector"],
a:"Schema Conversion Tool"
},

{
q:"大量データをオフラインで移行するサービスは？",
c:["Snowball","CloudFront","ECR","Lambda"],
a:"Snowball"
},

{
q:"Snowmobileの用途は？",
c:["超大容量データ移行","監視","分析","認証"],
a:"超大容量データ移行"
},

{
q:"オンラインでファイル転送するサービスは？",
c:["DataSync","Macie","GuardDuty","Organizations"],
a:"DataSync"
},

{
q:"DataSyncの特徴は？",
c:["高速データ転送","DNS管理","監査","暗号鍵管理"],
a:"高速データ転送"
},

{
q:"ハイブリッドストレージ接続サービスは？",
c:["Storage Gateway","CloudWatch","Route53","EKS"],
a:"Storage Gateway"
},

{
q:"Storage GatewayのFile Gatewayは何と接続する？",
c:["S3","RDS","DynamoDB","EFS"],
a:"S3"
},

{
q:"Storage GatewayのTape Gateway用途は？",
c:["バックアップテープ置換","負荷分散","認証","分析"],
a:"バックアップテープ置換"
},

{
q:"Storage GatewayのVolume Gateway用途は？",
c:["ブロックストレージ連携","DNS","メール","分析"],
a:"ブロックストレージ連携"
},

{
q:"移行前評価サービスは？",
c:["Migration Evaluator","CloudShell","SNS","Inspector"],
a:"Migration Evaluator"
},

{
q:"Migration Evaluatorの目的は？",
c:["移行コスト試算","認証管理","監査","暗号化"],
a:"移行コスト試算"
},

{
q:"AWS移行の最初のステップとして重要なのは？",
c:["現状分析","Auto Scaling設定","CloudFront導入","WAF設定"],
a:"現状分析"
},

{
q:"移行計画で最も重要な指標の一つは？",
c:["RTOとRPO","CPUクロック","画面数","IPアドレス数"],
a:"RTOとRPO"
},

{
q:"移行時のパイロットプロジェクトの目的は？",
c:["リスク低減","課金削減","監査対応","ライセンス削減"],
a:"リスク低減"
},

{
q:"移行時にネットワーク接続確認で利用するサービスは？",
c:["Direct Connect","Athena","Macie","Glue"],
a:"Direct Connect"
},

{
q:"ハイブリッド構成でよく利用される接続方法は？",
c:["VPN","S3 Event","SNS","CloudFormation"],
a:"VPN"
},

{
q:"移行後の性能比較に利用するサービスは？",
c:["CloudWatch","WAF","Shield","SES"],
a:"CloudWatch"
},

{
q:"オンプレミスVMをAWSへ移行する代表的サービスは？",
c:["Application Migration Service","CodeDeploy","CodeCommit","WorkSpaces"],
a:"Application Migration Service"
},

{
q:"移行時にデータ整合性確認で重要なのは？",
c:["検証テスト","コスト最適化","タグ付け","DNS変更"],
a:"検証テスト"
},

{
q:"Blue/Green移行のメリットは？",
c:["ダウンタイム最小化","費用削減のみ","認証強化","バックアップ不要"],
a:"ダウンタイム最小化"
},

{
q:"DNS切替でよく利用されるサービスは？",
c:["Route53","CloudTrail","Inspector","KMS"],
a:"Route53"
},

{
q:"移行リハーサルの目的は？",
c:["本番前検証","料金削減","暗号化","監査"],
a:"本番前検証"
},

{
q:"移行中のデータ同期に利用される機能は？",
c:["CDC","Auto Scaling","SCP","WAF"],
a:"CDC"
},

{
q:"大容量ファイル転送に適したサービスは？",
c:["DataSync","SNS","SES","Macie"],
a:"DataSync"
},

{
q:"S3へ継続的にデータ転送する用途に向くサービスは？",
c:["DataSync","IAM","CloudFormation","Inspector"],
a:"DataSync"
},

{
q:"AWS移行でよく使われる評価フレームワークは？",
c:["CAF","OSI","ITILのみ","PMBOKのみ"],
a:"CAF"
},

{
q:"CAFとは？",
c:["Cloud Adoption Framework","Cloud Architecture Function","Cloud Access Framework","Cloud Audit Framework"],
a:"Cloud Adoption Framework"
},

{
q:"CAFの目的は？",
c:["クラウド導入支援","監査ログ取得","暗号化","負荷分散"],
a:"クラウド導入支援"
},

{
q:"移行対象の依存関係分析に利用するサービスは？",
c:["Migration Hub","SES","SNS","Athena"],
a:"Migration Hub"
},

{
q:"サーバレス化による移行戦略は？",
c:["Refactor","Rehost","Retain","Retire"],
a:"Refactor"
},

{
q:"EC2からLambdaへ移行する戦略は？",
c:["Refactor","Rehost","Retain","Relocate"],
a:"Refactor"
},

{
q:"VMware環境をAWSへ移行するサービスは？",
c:["VMware Cloud on AWS","Lightsail","Cloud9","CloudShell"],
a:"VMware Cloud on AWS"
},

{
q:"VMware Cloud on AWSのメリットは？",
c:["既存運用を維持しやすい","無料","DNS不要","監査不要"],
a:"既存運用を維持しやすい"
},

{
q:"AWS移行でアプリケーション依存関係を可視化する目的は？",
c:["移行リスク低減","課金削減","監査対応","タグ管理"],
a:"移行リスク低減"
},

{
q:"データベース移行時にダウンタイム削減へ有効なのは？",
c:["CDC同期","手動コピー","CSV出力","EBS Snapshotのみ"],
a:"CDC同期"
},

{
q:"移行完了後に実施すべきことは？",
c:["運用検証","即削除","監査停止","バックアップ停止"],
a:"運用検証"
},

{
q:"AWS SAP試験で移行設計の主な評価ポイントは？",
c:["大規模移行戦略とリスク管理","CLI操作","HTML作成","請求書確認"],
a:"大規模移行戦略とリスク管理"
},

{
q:"AWS移行でTCO分析の目的は？",
c:["コスト比較と投資判断","暗号化","認証","ログ管理"],
a:"コスト比較と投資判断"
},

{
q:"TCOとは？",
c:["総所有コスト","総運用時間","転送容量","障害回数"],
a:"総所有コスト"
},

{
q:"AWS移行時に現状環境の情報収集で利用されるサービスは？",
c:["Application Discovery Service","CloudTrail","Athena","SES"],
a:"Application Discovery Service"
},

{
q:"Application Discovery Serviceの目的は？",
c:["サーバ構成分析","メール送信","暗号化","DNS管理"],
a:"サーバ構成分析"
},

{
q:"移行対象サーバの依存関係把握に重要なのは？",
c:["通信分析","タグ付け","請求確認","認証設定"],
a:"通信分析"
},

{
q:"移行時のカットオーバーとは？",
c:["本番切替","バックアップ","監査","暗号化"],
a:"本番切替"
},

{
q:"カットオーバー時のリスク低減策は？",
c:["ロールバック計画","監査停止","バックアップ削除","固定IP削除"],
a:"ロールバック計画"
},

{
q:"ロールバック計画の目的は？",
c:["障害時に元へ戻す","コスト削減","性能向上","認証強化"],
a:"障害時に元へ戻す"
},

{
q:"移行後の最適化フェーズで確認する項目は？",
c:["性能・コスト・運用","DNSのみ","IPのみ","IAMのみ"],
a:"性能・コスト・運用"
},

{
q:"オンプレミスNASからAWSへの移行で利用されるサービスは？",
c:["DataSync","Lambda","Cloud9","SES"],
a:"DataSync"
},

{
q:"AWSへのバックアップ移行に適したStorage Gatewayは？",
c:["Tape Gateway","Volume Gateway","File Gateway","Transit Gateway"],
a:"Tape Gateway"
},

{
q:"移行時にDNS TTLを短くする目的は？",
c:["切替を迅速化","暗号化強化","料金削減","ログ収集"],
a:"切替を迅速化"
},

{
q:"クラウドネイティブ化を目的とする移行戦略は？",
c:["Refactor","Rehost","Retain","Relocate"],
a:"Refactor"
},

{
q:"既存アプリをほぼ変更せず移行する戦略は？",
c:["Rehost","Refactor","Retire","Repurchase"],
a:"Rehost"
},

{
q:"既存ライセンスを維持しながら移行する際に重要なのは？",
c:["ライセンス確認","CloudFront設定","SNS設定","Athena設定"],
a:"ライセンス確認"
},

{
q:"SAP試験で重要な移行テーマは？",
c:["最小リスクでの移行","HTML開発","CLI暗記","Linux操作"],
a:"最小リスクでの移行"
},

{
q:"データ移行後に最優先で行うべきことは？",
c:["整合性確認","インスタンス削除","ログ削除","IAM削除"],
a:"整合性確認"
},

{
q:"移行テストで確認すべき内容は？",
c:["機能・性能・接続","課金のみ","IPのみ","タグのみ"],
a:"機能・性能・接続"
},

{
q:"アプリケーション移行時のダウンタイム削減策は？",
c:["段階的移行","即時停止","手動移行のみ","バックアップ削除"],
a:"段階的移行"
},

{
q:"段階的移行を英語で何という？",
c:["Phased Migration","Cold Backup","Immutable","Warm Storage"],
a:"Phased Migration"
},

{
q:"移行時に利用するPoCの目的は？",
c:["技術検証","監査","課金","タグ付け"],
a:"技術検証"
},

{
q:"PoCとは？",
c:["Proof of Concept","Plan of Cost","Policy of Cloud","Program of Compute"],
a:"Proof of Concept"
},

{
q:"AWS移行後の継続的改善で活用するフレームワークは？",
c:["Well-Architected Framework","OSI","ITILのみ","PMBOKのみ"],
a:"Well-Architected Framework"
},

{
q:"移行後にコスト最適化を確認するサービスは？",
c:["Cost Explorer","CloudTrail","WAF","Shield"],
a:"Cost Explorer"
},

{
q:"AWS SAP試験の移行問題で重視されるのは？",
c:["ビジネス要件に応じた移行方式選択","CLIコマンド暗記","Linux操作","HTML知識"],
a:"ビジネス要件に応じた移行方式選択"
},

{
q:"移行時に最も重要な成功要因は？",
c:["事前計画","インスタンスタイプ","タグ数","AZ数"],
a:"事前計画"
},

{
q:"移行プロジェクトで最初に定義すべきものは？",
c:["ビジネス要件","CloudWatch Alarm","IAMユーザー","Route53レコード"],
a:"ビジネス要件"
},

{
q:"移行時にアプリケーション性能を確認する目的は？",
c:["要件を満たすか確認","課金確認","DNS設定","認証設定"],
a:"要件を満たすか確認"
},

{
q:"AWS移行でよく利用されるテストは？",
c:["UAT","Route Test","Subnet Test","AZ Test"],
a:"UAT"
},

{
q:"UATとは？",
c:["User Acceptance Test","Unified Access Test","User Audit Tool","Utility Analysis Test"],
a:"User Acceptance Test"
},

{
q:"移行後に監視設定で利用するサービスは？",
c:["CloudWatch","CloudFront","Macie","Inspector"],
a:"CloudWatch"
},

{
q:"移行後にログ収集で利用するサービスは？",
c:["CloudWatch Logs","SNS","SQS","EBS"],
a:"CloudWatch Logs"
},

{
q:"移行後のセキュリティ評価で利用するサービスは？",
c:["Security Hub","CloudShell","DataSync","Athena"],
a:"Security Hub"
},

{
q:"移行後の脅威検知に利用するサービスは？",
c:["GuardDuty","SES","Cloud9","ECR"],
a:"GuardDuty"
},

{
q:"移行後の設定監査で利用するサービスは？",
c:["AWS Config","S3","Route53","ELB"],
a:"AWS Config"
},

{
q:"移行後のAPI監査ログ確認に利用するサービスは？",
c:["CloudTrail","IAM","SNS","EFS"],
a:"CloudTrail"
},

{
q:"オンプレミスとAWS間で名前解決統合に利用するサービスは？",
c:["Route53 Resolver","Inspector","Athena","Glue"],
a:"Route53 Resolver"
},

{
q:"移行時にネットワーク遅延を最小化する方法は？",
c:["Direct Connect","S3 Lifecycle","CloudFormation","WAF"],
a:"Direct Connect"
},

{
q:"Direct Connect Gatewayの目的は？",
c:["複数VPC接続","メール送信","ログ収集","認証管理"],
a:"複数VPC接続"
},

{
q:"AWSへのデータ移行で最も高速な物理デバイスは？",
c:["Snowmobile","Snowball Edge","DataSync","Storage Gateway"],
a:"Snowmobile"
},

{
q:"数PB規模のデータ移行に推奨されるサービスは？",
c:["Snowmobile","DMS","Glue","SNS"],
a:"Snowmobile"
},

{
q:"データ移行時の暗号化で推奨されるサービスは？",
c:["KMS","CloudFront","Athena","SES"],
a:"KMS"
},

{
q:"移行後のバックアップ管理に利用するサービスは？",
c:["AWS Backup","CloudTrail","Inspector","Macie"],
a:"AWS Backup"
},

{
q:"AWS Backupの目的は？",
c:["バックアップ統合管理","負荷分散","監査","認証"],
a:"バックアップ統合管理"
},

{
q:"移行後にDR戦略を検証する理由は？",
c:["障害対策確認","課金削減","タグ整理","IP変更"],
a:"障害対策確認"
},

{
q:"移行後にWell-Architected Reviewを行う目的は？",
c:["設計改善","認証設定","IP確認","監査停止"],
a:"設計改善"
},

{
q:"移行完了後に不要なオンプレミス資産を停止する理由は？",
c:["コスト削減","暗号化","DNS改善","監査強化"],
a:"コスト削減"
},

{
q:"AWS SAP試験で移行設計問題の中心となるテーマは？",
c:["移行方式・リスク・ダウンタイム最小化","CLI暗記","Linuxコマンド","HTML作成"],
a:"移行方式・リスク・ダウンタイム最小化"
},

{
q:"AWS SAP試験で重要な移行判断基準は？",
c:["ビジネス要件","画面デザイン","OS種類のみ","AZ数のみ"],
a:"ビジネス要件"
},

{
q:"AWS Solutions Architect Professionalで求められる移行能力は？",
c:["大規模移行アーキテクチャ設計","タイピング速度","プログラミングのみ","会計知識"],
a:"大規模移行アーキテクチャ設計"
}



];