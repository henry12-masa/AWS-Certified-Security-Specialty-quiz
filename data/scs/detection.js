window.quizData = window.quizData || {};

window.quizData.scsDetection = [

{q:"AWS環境の脅威検知に使う代表的サービスは？",c:["Amazon GuardDuty","Amazon S3","Amazon EC2","AWS Backup"],a:"Amazon GuardDuty"},
{q:"GuardDutyが検出するものとして正しいのは？",c:["不審なAPI操作や通信","EC2の料金割引","S3の容量不足","DNSドメイン購入"],a:"不審なAPI操作や通信"},
{q:"GuardDutyが分析する代表的なデータソースは？",c:["CloudTrail、VPC Flow Logs、DNSログ","EC2画面","S3オブジェクト本文","IAM表示名"],a:"CloudTrail、VPC Flow Logs、DNSログ"},
{q:"GuardDutyの検出結果を何と呼ぶ？",c:["Finding","Metric","Bucket","Stack"],a:"Finding"},
{q:"GuardDutyの検出結果を自動処理する代表的な構成は？",c:["EventBridge + Lambda","S3 + EBS","Route 53 + NAT","IAM + AMI"],a:"EventBridge + Lambda"},

{q:"GuardDutyで不審なEC2通信を検出した後の対応例は？",c:["隔離用セキュリティグループへ変更する","ログを削除する","MFAを無効化する","S3を公開する"],a:"隔離用セキュリティグループへ変更する"},
{q:"GuardDuty Malware Protectionの用途は？",c:["マルウェアの検出を支援する","DNSを購入する","VPCを作る","IAMユーザーを作る"],a:"マルウェアの検出を支援する"},
{q:"GuardDutyでS3保護を有効にすると検出しやすいものは？",c:["S3に対する不審なアクセス","EC2 CPU不足","Route 53 TTL不足","CloudFront圧縮不足"],a:"S3に対する不審なアクセス"},
{q:"GuardDutyの検出結果を集約管理したい場合に使うサービスは？",c:["AWS Security Hub","Amazon Polly","AWS Glue","Amazon Translate"],a:"AWS Security Hub"},
{q:"GuardDutyの管理者アカウント設定に関係するサービスは？",c:["AWS Organizations","Amazon Textract","AWS Backup","AWS Device Farm"],a:"AWS Organizations"},

{q:"AWS Security Hubの主な役割は？",c:["セキュリティ検出結果を集約し標準に基づき評価する","EC2を高速化する","S3を圧縮する","DNSを購入する"],a:"セキュリティ検出結果を集約し標準に基づき評価する"},
{q:"Security Hubで有効化できるセキュリティ標準の例は？",c:["AWS Foundational Security Best Practices","EC2 Pricing Standard","S3 Storage Class Guide","Route 53 DNS Only"],a:"AWS Foundational Security Best Practices"},
{q:"Security Hubの検出結果を何と呼ぶ？",c:["Findings","Images","Zones","Stacks"],a:"Findings"},
{q:"Security Hubの検出結果をイベント駆動で処理するサービスは？",c:["Amazon EventBridge","Amazon CloudFront","AWS Direct Connect","Amazon Route 53"],a:"Amazon EventBridge"},
{q:"Security Hubの利点は？",c:["複数サービスのセキュリティ状況を一元確認できる","EC2料金を無料にする","VPCを自動削除する","DNSを高速化する"],a:"複数サービスのセキュリティ状況を一元確認できる"},

{q:"Amazon Detectiveの主な用途は？",c:["セキュリティ調査と根本原因分析を支援する","EC2をバックアップする","S3を暗号化する","DNSを登録する"],a:"セキュリティ調査と根本原因分析を支援する"},
{q:"Detectiveが役立つ場面は？",c:["GuardDuty Findingの調査","EC2インスタンスタイプ選定","S3料金計算","Route 53ドメイン購入"],a:"GuardDuty Findingの調査"},
{q:"Detectiveが分析に使う代表的データは？",c:["ログや検出結果から作る行動グラフ","HTMLファイルのみ","EC2画面キャプチャ","S3オブジェクト本文のみ"],a:"ログや検出結果から作る行動グラフ"},
{q:"GuardDutyとDetectiveの関係として正しいものは？",c:["GuardDutyで検知し、Detectiveで調査を深める","DetectiveだけでIAMを作る","GuardDutyはDNS専用","両方ともバックアップ専用"],a:"GuardDutyで検知し、Detectiveで調査を深める"},
{q:"Security Hub、GuardDuty、Detectiveを組み合わせる目的は？",c:["検知・集約・調査を効率化する","EC2を安くする","S3容量を増やす","CloudFrontを削除する"],a:"検知・集約・調査を効率化する"},

{q:"AWS CloudTrailの主な用途は？",c:["AWS API操作を記録する","全パケット本文を保存する","EC2の画面を録画する","DNSを購入する"],a:"AWS API操作を記録する"},
{q:"CloudTrailで確認できるものは？",c:["誰がいつどのAPIを実行したか","HTTPS本文","EC2メモリ使用率","DNS応答内容全文"],a:"誰がいつどのAPIを実行したか"},
{q:"CloudTrail管理イベントの例は？",c:["IAMユーザー作成やEC2起動","S3オブジェクトGetのみ","VPCパケット本文","CPU使用率"],a:"IAMユーザー作成やEC2起動"},
{q:"CloudTrailデータイベントの例は？",c:["S3オブジェクトレベルAPI操作","IAMユーザー名変更のみ","EC2起動のみ","Route Table作成のみ"],a:"S3オブジェクトレベルAPI操作"},
{q:"CloudTrail Insightsの用途は？",c:["通常と異なるAPI呼び出しパターンを検出する","S3を圧縮する","VPCを作る","DNSを購入する"],a:"通常と異なるAPI呼び出しパターンを検出する"},

{q:"CloudTrailログの改ざん検知に役立つ機能は？",c:["ログファイル整合性検証","NAT Gateway","EC2 UserData","Route 53 TTL"],a:"ログファイル整合性検証"},
{q:"CloudTrailログの保存先として代表的なのは？",c:["Amazon S3","Amazon EBSのみ","NAT Gateway","Route Table"],a:"Amazon S3"},
{q:"CloudTrailを全リージョンで有効化する理由は？",c:["意図しないリージョンでの操作も記録するため","料金を無料化するため","EC2を高速化するため","DNSを削除するため"],a:"意図しないリージョンでの操作も記録するため"},
{q:"組織全体のCloudTrailを管理する機能は？",c:["Organization Trail","Public VIF","Hosted Zone","Placement Group"],a:"Organization Trail"},
{q:"CloudTrail Lakeの用途は？",c:["CloudTrailイベントを保存・SQLで分析する","EC2を起動する","S3を圧縮する","VPCを削除する"],a:"CloudTrailイベントを保存・SQLで分析する"},

{q:"AWS Configの主な用途は？",c:["リソース設定の記録と準拠評価","EC2の画面録画","DNS購入","S3転送高速化"],a:"リソース設定の記録と準拠評価"},
{q:"AWS Config Ruleでできることは？",c:["リソース設定がルールに準拠しているか評価する","全パケット本文を保存する","EC2料金を下げる","DNSを高速化する"],a:"リソース設定がルールに準拠しているか評価する"},
{q:"AWS Configでセキュリティグループの全開放を検出する目的は？",c:["危険な設定を早期に把握する","S3容量を増やす","EC2を翻訳する","DNSを購入する"],a:"危険な設定を早期に把握する"},
{q:"AWS Config Aggregatorの用途は？",c:["複数アカウント・リージョンのConfig情報を集約する","S3を圧縮する","CloudFrontを削除する","IAMを無効化する"],a:"複数アカウント・リージョンのConfig情報を集約する"},
{q:"AWS Configの修復アクションでできることは？",c:["非準拠リソースの自動修復","EC2のCPU増強","Route 53購入","S3容量追加"],a:"非準拠リソースの自動修復"},

{q:"Amazon Inspectorの主な用途は？",c:["脆弱性管理","DNS登録","EC2料金見積","S3静的サイト作成"],a:"脆弱性管理"},
{q:"Inspectorがスキャンできる代表的対象は？",c:["EC2、ECR、Lambda","Route 53レコード","CloudFrontキャッシュ","NAT Gatewayのみ"],a:"EC2、ECR、Lambda"},
{q:"Inspectorで検出するものは？",c:["CVEなどの脆弱性","DNS TTL","S3タグ色","VPC CIDRの余り"],a:"CVEなどの脆弱性"},
{q:"Inspectorの検出結果を集約しやすいサービスは？",c:["Security Hub","Amazon Polly","AWS Glue","Amazon Forecast"],a:"Security Hub"},
{q:"InspectorでECRイメージをスキャンする目的は？",c:["コンテナイメージの脆弱性を検出する","S3を暗号化する","DNSを登録する","VPCを作成する"],a:"コンテナイメージの脆弱性を検出する"},

{q:"Amazon Macieの主な用途は？",c:["S3内の機密データ検出","EC2 CPU監視","VPC CIDR管理","DNS転送"],a:"S3内の機密データ検出"},
{q:"Macieが検出できる代表例は？",c:["個人情報や認証情報のような機密データ","EC2のインスタンスタイプ","Route 53のTTL","NAT Gateway帯域"],a:"個人情報や認証情報のような機密データ"},
{q:"Macieが主に対象とするストレージは？",c:["Amazon S3","Amazon EBSのみ","Amazon EFSのみ","Route 53"],a:"Amazon S3"},
{q:"S3バケットに機密情報が置かれていないか確認するサービスは？",c:["Amazon Macie","AWS WAF","AWS Backup","Amazon Polly"],a:"Amazon Macie"},
{q:"Macieの検出結果を通知・自動処理する構成は？",c:["EventBridge + SNS/Lambda","NAT Gateway + IGW","EBS + AMI","Route 53 + Registrar"],a:"EventBridge + SNS/Lambda"},

{q:"VPC Flow Logsの用途は？",c:["VPC内のIPトラフィック情報を記録する","AWS API操作を記録する","S3本文を保存する","IAMパスワードを保存する"],a:"VPC内のIPトラフィック情報を記録する"},
{q:"VPC Flow Logsで確認できるアクションは？",c:["ACCEPTまたはREJECT","ALLOW-ROOT","BLOCK-USER","TRACE"],a:"ACCEPTまたはREJECT"},
{q:"Flow Logsの出力先として正しいものは？",c:["CloudWatch Logs、S3、Kinesis Data Firehose","IAMのみ","Route 53のみ","NAT Gatewayのみ"],a:"CloudWatch Logs、S3、Kinesis Data Firehose"},
{q:"セキュリティ調査でFlow Logsが役立つ理由は？",c:["通信元・宛先・ポート・許可拒否を確認できる","HTTPS本文を読める","パスワードが見える","IAMキーが見える"],a:"通信元・宛先・ポート・許可拒否を確認できる"},
{q:"Flow LogsでREJECTが多い場合に疑う設定は？",c:["NACLやセキュリティグループ","S3ライフサイクル","EC2タグ","DNS購入"],a:"NACLやセキュリティグループ"},

{q:"Route 53 Resolver Query Loggingの用途は？",c:["DNSクエリを記録する","VPCを作る","EC2を翻訳する","S3を削除する"],a:"DNSクエリを記録する"},
{q:"DNSログがセキュリティ検知に役立つ理由は？",c:["不審ドメインへの問い合わせを確認できる","EC2 CPUを増やせる","S3容量を増やせる","IAMを削除できる"],a:"不審ドメインへの問い合わせを確認できる"},
{q:"Route 53 Resolver DNS Firewallの用途は？",c:["不審ドメインへの問い合わせをブロックする","EC2をバックアップする","S3を暗号化する","CloudFrontを削除する"],a:"不審ドメインへの問い合わせをブロックする"},
{q:"DNS Firewallのルールグループで管理するものは？",c:["許可または拒否するドメインリスト","EC2 AMI","VPC CIDR","S3オブジェクト"],a:"許可または拒否するドメインリスト"},
{q:"マルウェアのC2通信検知に役立つログは？",c:["DNSログやVPC Flow Logs","EC2壁紙","S3タグ","Route 53請求書のみ"],a:"DNSログやVPC Flow Logs"},

{q:"AWS WAFログで確認できるものは？",c:["Webリクエストの許可・ブロック状況","EC2 OSログ全体","S3オブジェクト本文","IAMパスワード"],a:"Webリクエストの許可・ブロック状況"},
{q:"WAFログの出力先として使えるものは？",c:["CloudWatch Logs、S3、Kinesis Data Firehose","Route Tableのみ","EBSのみ","IAMのみ"],a:"CloudWatch Logs、S3、Kinesis Data Firehose"},
{q:"WAFのレートベースルールで検知・制御できるものは？",c:["大量リクエスト","EC2 CPU不足","S3容量不足","DNS TTL不足"],a:"大量リクエスト"},
{q:"WAFのManaged Rulesを使う利点は？",c:["一般的な攻撃パターンを簡単に防御できる","VPCを作成できる","EC2をバックアップできる","DNSを購入できる"],a:"一般的な攻撃パターンを簡単に防御できる"},
{q:"SQLインジェクション検出に使うAWSサービスは？",c:["AWS WAF","Amazon Route 53","AWS Backup","Amazon Polly"],a:"AWS WAF"},

{q:"CloudFrontアクセスログの用途は？",c:["エッジ経由のリクエストを分析する","EC2内部メモリを確認する","IAMパスワードを表示する","VPC CIDRを作る"],a:"エッジ経由のリクエストを分析する"},
{q:"ALBアクセスログの保存先は？",c:["Amazon S3","Amazon EBSのみ","IAM Role","Route Table"],a:"Amazon S3"},
{q:"ロードバランサーの異常検知で確認するものは？",c:["CloudWatchメトリクスやアクセスログ","S3タグ色","IAM表示名","DNS登録者"],a:"CloudWatchメトリクスやアクセスログ"},
{q:"大量の4xx/5xxを検知するのに使うサービスは？",c:["CloudWatch Alarm","AWS Glue","Amazon Polly","AWS Backup"],a:"CloudWatch Alarm"},
{q:"CloudWatch Logs Insightsの用途は？",c:["ログをクエリで分析する","DNSを購入する","EC2を起動する","S3を圧縮する"],a:"ログをクエリで分析する"},

{q:"Amazon EventBridgeの用途は？",c:["イベントに応じて処理を起動する","EC2を暗号化する","S3を翻訳する","DNSを購入する"],a:"イベントに応じて処理を起動する"},
{q:"Security Hub Findingを自動処理する構成は？",c:["EventBridge + Lambda","CloudFront + NAT","S3 + Route Table","EBS + AMI"],a:"EventBridge + Lambda"},
{q:"GuardDuty Findingを受けて通知する構成は？",c:["EventBridge + SNS","S3 + EBS","NAT + IGW","Route 53 + Hosted Zone"],a:"EventBridge + SNS"},
{q:"Amazon SNSの用途は？",c:["通知を配信する","脅威を検出する","VPCを作成する","DNSを購入する"],a:"通知を配信する"},
{q:"インシデント検知後にRunbookを自動実行するサービスは？",c:["Systems Manager Automation","Amazon Polly","AWS Batch","Amazon Forecast"],a:"Systems Manager Automation"},

{q:"AWS Configの非準拠検出を自動修復したい場合に使うものは？",c:["SSM AutomationやLambda","CloudFront OACのみ","S3 Transfer Acceleration","Route 53 Registrar"],a:"SSM AutomationやLambda"},
{q:"不正に開いたセキュリティグループを自動で閉じる構成は？",c:["Config/EventBridge + Lambda","S3 + IAM User","CloudFront + AMI","EBS + Route Table"],a:"Config/EventBridge + Lambda"},
{q:"自動修復で注意すべきことは？",c:["誤修復を防ぐため承認や例外条件を設計する","全リソースを削除する","ログを無効化する","通知しない"],a:"誤修復を防ぐため承認や例外条件を設計する"},
{q:"セキュリティ自動化の権限設計で重要なのは？",c:["必要最小限のIAM権限にする","常にAdministratorAccess","rootキーを使う","MFAを無効化する"],a:"必要最小限のIAM権限にする"},
{q:"Lambdaの実行ログを確認するサービスは？",c:["CloudWatch Logs","Route 53","EBS","NACL"],a:"CloudWatch Logs"},

{q:"AWS Audit Managerの用途は？",c:["監査証跡と証拠収集を支援する","VPCを作成する","EC2を暗号化する","S3を翻訳する"],a:"監査証跡と証拠収集を支援する"},
{q:"AWS Artifactの用途は？",c:["AWSのコンプライアンスレポートを取得する","EC2を監視する","S3を削除する","DNSを登録する"],a:"AWSのコンプライアンスレポートを取得する"},
{q:"コンプライアンス証跡として重要なものは？",c:["CloudTrail、Config、ログ保存","EC2壁紙","IAM表示色","DNS購入履歴"],a:"CloudTrail、Config、ログ保存"},
{q:"ログの長期保管に適したサービスは？",c:["Amazon S3 Glacier系ストレージクラス","EC2インスタンスストア","NAT Gateway","Route Table"],a:"Amazon S3 Glacier系ストレージクラス"},
{q:"ログ保管で改ざん防止を強めるS3機能は？",c:["S3 Object Lock","S3 Static Website","S3 Transfer Acceleration","S3 Select"],a:"S3 Object Lock"},

{q:"S3 Object Lockの用途は？",c:["一定期間オブジェクトの削除・上書きを防ぐ","S3を高速化する","EC2を停止する","DNSを購入する"],a:"一定期間オブジェクトの削除・上書きを防ぐ"},
{q:"ログ保存用S3バケットで有効化すべき設定は？",c:["暗号化、アクセス制限、バージョニング等","パブリック書き込み","匿名削除","MFA無効化"],a:"暗号化、アクセス制限、バージョニング等"},
{q:"ログ用S3バケットのアクセス制御で重要なことは？",c:["最小権限で書き込み元と閲覧者を制限する","全世界に公開する","削除権限を全員に付与する","rootキーを共有する"],a:"最小権限で書き込み元と閲覧者を制限する"},
{q:"CloudTrailログの不正削除対策として有効なのは？",c:["S3 Object Lockや権限分離","ログを同じ管理者だけに任せる","S3を公開する","MFAを無効化する"],a:"S3 Object Lockや権限分離"},
{q:"ログの完全性確認でCloudTrailが提供する機能は？",c:["ログファイル整合性検証","NACL検証","DNS検証","EC2起動検証"],a:"ログファイル整合性検証"},

{q:"Amazon Athenaの用途は？",c:["S3上のログをSQLで分析する","EC2を起動する","DNSを登録する","VPCを作成する"],a:"S3上のログをSQLで分析する"},
{q:"CloudTrailログ分析にAthenaを使う利点は？",c:["大量ログをSQLで検索できる","ログを自動削除できる","EC2を暗号化できる","DNSを購入できる"],a:"大量ログをSQLで検索できる"},
{q:"OpenSearch Serviceのセキュリティ運用での用途は？",c:["ログ検索・可視化","S3バージョニング","IAMユーザー作成","VPC削除"],a:"ログ検索・可視化"},
{q:"SIEM連携で重要なことは？",c:["ログ形式、保存先、転送方法を設計する","ログを取らない","全通知を無効にする","S3を公開する"],a:"ログ形式、保存先、転送方法を設計する"},
{q:"Kinesis Data Firehoseの用途は？",c:["ログをS3やOpenSearch等へ配信する","EC2を起動する","DNSを購入する","VPCを削除する"],a:"ログをS3やOpenSearch等へ配信する"},

{q:"AWS Organizationsでセキュリティサービスを集中管理する利点は？",c:["複数アカウントの検知・監査を集約できる","EC2が無料になる","S3が無限になる","DNSが不要になる"],a:"複数アカウントの検知・監査を集約できる"},
{q:"委任管理者を設定できる代表的セキュリティサービスは？",c:["GuardDutyやSecurity Hub","Amazon Polly","AWS Glue","Amazon Translate"],a:"GuardDutyやSecurity Hub"},
{q:"マルチアカウントのログ集約先として適切なのは？",c:["専用ログアーカイブアカウント","各開発者PC","公開S3バケット","rootアカウントのメール"],a:"専用ログアーカイブアカウント"},
{q:"ログアーカイブアカウントを分ける目的は？",c:["改ざんリスクを下げ監査性を高める","全通信を許可する","EC2を高速化する","DNSを削除する"],a:"改ざんリスクを下げ監査性を高める"},
{q:"Security Hubの集約リージョン設定の目的は？",c:["複数リージョンの検出結果を集約する","EC2を移動する","S3を削除する","VPCを暗号化する"],a:"複数リージョンの検出結果を集約する"},

{q:"インシデント対応で最初に重要なことは？",c:["検知内容を確認し影響範囲を特定する","すぐ全ログ削除","全リソース削除","MFA無効化"],a:"検知内容を確認し影響範囲を特定する"},
{q:"侵害が疑われるEC2の初動として適切なのは？",c:["隔離し証拠保全する","即座に全ログ削除","公開範囲を広げる","IAM権限を増やす"],a:"隔離し証拠保全する"},
{q:"EC2の証拠保全で取得するものは？",c:["EBSスナップショットやメモリ取得を検討する","DNS購入履歴のみ","S3タグ色","IAM表示名"],a:"EBSスナップショットやメモリ取得を検討する"},
{q:"侵害されたアクセスキーの対応として適切なのは？",c:["無効化しCloudTrailで利用履歴を調査する","放置する","GitHubに公開する","権限を増やす"],a:"無効化しCloudTrailで利用履歴を調査する"},
{q:"インシデント対応でRunbookを用意する目的は？",c:["対応手順を標準化し迅速化する","ログを削除する","全通信を許可する","MFAを無効化する"],a:"対応手順を標準化し迅速化する"},

{q:"EventBridgeでインシデント対応を自動化する例は？",c:["GuardDuty Finding発生時にLambdaを実行する","S3を公開する","EC2を全削除する","DNSを購入する"],a:"GuardDuty Finding発生時にLambdaを実行する"},
{q:"隔離用セキュリティグループの目的は？",c:["疑わしいインスタンスの通信を制限する","通信を全開放する","S3を公開する","IAMを無効化する"],a:"疑わしいインスタンスの通信を制限する"},
{q:"インシデント対応でIAM権限を一時停止する理由は？",c:["不正利用の拡大を防ぐため","EC2を高速化するため","DNSを速くするため","S3容量を増やすため"],a:"不正利用の拡大を防ぐため"},
{q:"CloudTrailで侵害範囲を調べる際に見るものは？",c:["不審なAPI呼び出し、ユーザー、リージョン","EC2壁紙","S3タグ色","Route 53請求先"],a:"不審なAPI呼び出し、ユーザー、リージョン"},
{q:"検知後の復旧で重要なことは？",c:["原因除去、認証情報更新、再発防止","ログ削除のみ","全SG開放","MFA無効化"],a:"原因除去、認証情報更新、再発防止"},

{q:"Amazon CloudWatchの用途は？",c:["メトリクス・ログ・アラーム監視","DNS購入","IAM作成のみ","S3翻訳"],a:"メトリクス・ログ・アラーム監視"},
{q:"CloudWatch Alarmの用途は？",c:["条件を満たした時に通知やアクションを実行する","S3を暗号化する","VPCを削除する","IAMを作る"],a:"条件を満たした時に通知やアクションを実行する"},
{q:"CloudWatch Logs Metric Filterの用途は？",c:["ログ内の特定パターンをメトリクス化する","EC2を起動する","S3を圧縮する","DNSを購入する"],a:"ログ内の特定パターンをメトリクス化する"},
{q:"特定のエラー文字列をログから検知してアラームにする機能は？",c:["Metric Filter","Route Table","Hosted Zone","NACL"],a:"Metric Filter"},
{q:"CloudWatchで検知後に通知するサービスは？",c:["SNS","S3 Glacier","NAT Gateway","VPC Endpoint"],a:"SNS"},

{q:"AWS Health Dashboardの用途は？",c:["AWSサービスイベントやアカウント影響を確認する","S3を暗号化する","EC2を翻訳する","DNSを購入する"],a:"AWSサービスイベントやアカウント影響を確認する"},
{q:"AWS Healthイベントを自動処理するには？",c:["EventBridgeと連携する","NAT Gatewayを使う","S3を公開する","MFAを無効化する"],a:"EventBridgeと連携する"},
{q:"Trusted Advisorのセキュリティチェックで分かる例は？",c:["危険なSG設定やMFA未設定","EC2壁紙","S3タグ色","DNS購入履歴"],a:"危険なSG設定やMFA未設定"},
{q:"Trusted Advisorを運用で使う目的は？",c:["ベストプラクティス逸脱を確認する","VPCを削除する","S3を翻訳する","EC2を暗号化する"],a:"ベストプラクティス逸脱を確認する"},
{q:"AWS Support APIやTrusted Advisor連携の用途は？",c:["運用チェックを自動化する","S3を公開する","DNSを購入する","EC2を翻訳する"],a:"運用チェックを自動化する"},

{q:"Security Lakeの用途は？",c:["セキュリティログを標準化してデータレイク化する","EC2を起動する","DNSを買う","VPCを削除する"],a:"セキュリティログを標準化してデータレイク化する"},
{q:"Security Lakeが採用する標準スキーマは？",c:["OCSF","CSV-only","HTML","XML-only"],a:"OCSF"},
{q:"Security Lakeの利点は？",c:["複数ソースのセキュリティデータを分析しやすくする","EC2料金を無料にする","S3を削除する","DNSを高速化する"],a:"複数ソースのセキュリティデータを分析しやすくする"},
{q:"Security Lakeの保存基盤として使われる代表サービスは？",c:["Amazon S3","Amazon EBSのみ","Route 53","NAT Gateway"],a:"Amazon S3"},
{q:"Security Lakeに取り込む代表的なログは？",c:["CloudTrail、VPC Flow Logs、Security Hub Findingsなど","EC2壁紙","IAM表示名","DNS請求書"],a:"CloudTrail、VPC Flow Logs、Security Hub Findingsなど"},

{q:"脅威検知で重要な設計は？",c:["ログを有効化し集約・監視する","ログを保存しない","全通知を切る","全通信を許可する"],a:"ログを有効化し集約・監視する"},
{q:"検知精度を高めるために必要なことは？",c:["継続的にルールやアラートを見直す","初期設定のまま放置","全ログ削除","MFA無効化"],a:"継続的にルールやアラートを見直す"},
{q:"セキュリティ運用で誤検知が多い場合の対応は？",c:["条件やしきい値を調整する","監視を全停止する","ログを削除する","全許可にする"],a:"条件やしきい値を調整する"},
{q:"検出結果の優先順位付けで考慮するものは？",c:["重大度、影響範囲、露出度","EC2壁紙","S3タグ色","DNS名の長さ"],a:"重大度、影響範囲、露出度"},
{q:"Security Specialtyの検知・監査分野で重要な考え方は？",c:["ログ収集、脅威検知、集約、調査、自動対応","ログ削除、全許可、監視停止","root常用","MFA無効化"],a:"ログ収集、脅威検知、集約、調査、自動対応"}

];