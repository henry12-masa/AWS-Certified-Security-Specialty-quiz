window.quizData = window.quizData || {};

window.quizData.ansAutomation = [

{q:"AWSネットワーク構成をコードで管理する代表的なサービスは？",c:["AWS CloudFormation","Amazon Polly","AWS Shield","Amazon Textract"],a:"AWS CloudFormation"},
{q:"CloudFormationテンプレートでAWSリソースを定義する形式は？",c:["YAMLまたはJSON","CSVのみ","HTMLのみ","画像ファイル"],a:"YAMLまたはJSON"},
{q:"CloudFormation Stackとは？",c:["テンプレートから作成されたリソースのまとまり","EC2のディスク","S3のファイル","IAMユーザー名"],a:"テンプレートから作成されたリソースのまとまり"},
{q:"CloudFormationで変更差分を事前確認する機能は？",c:["Change Set","Flow Log","Hosted Zone","Security Hub"],a:"Change Set"},
{q:"ネットワーク構成変更の自動化でCloudFormationを使う利点は？",c:["再現性のある構成管理ができる","必ず料金が無料になる","DNSが不要になる","SGが使えなくなる"],a:"再現性のある構成管理ができる"},

{q:"AWS CDKの特徴は？",c:["プログラミング言語でAWSリソースを定義できる","画像だけでVPCを作る","DNS専用サービス","EC2専用監視ツール"],a:"プログラミング言語でAWSリソースを定義できる"},
{q:"CDKで生成されるデプロイ単位は主に何か？",c:["CloudFormation Stack","EBS Snapshot","IAM Password","Route 53 Domain"],a:"CloudFormation Stack"},
{q:"TerraformのようなIaCツールを使う目的は？",c:["インフラ構成をコードとして管理する","EC2のOSだけ更新する","S3を手動作成する","DNSを無効化する"],a:"インフラ構成をコードとして管理する"},
{q:"IaCのメリットとして正しいものは？",c:["レビュー・再利用・差分管理がしやすい","手作業が増える","構成を記録できない","変更履歴が残らない"],a:"レビュー・再利用・差分管理がしやすい"},
{q:"VPCやサブネットを複数環境に同じ形で作る場合に有効なのは？",c:["IaCテンプレート化","手動クリックのみ","スクリーンショット管理","DNS削除"],a:"IaCテンプレート化"},

{q:"AWS Configの主な用途は？",c:["リソース設定の記録と評価","EC2のCPU増強","S3の翻訳","CloudFront配信"],a:"リソース設定の記録と評価"},
{q:"AWS Config Rulesでできることは？",c:["設定がルールに準拠しているか評価する","VPNトンネルを自動暗号化する","S3を削除する","IAMパスワードを表示する"],a:"設定がルールに準拠しているか評価する"},
{q:"セキュリティグループがSSHを全世界に開放していないか確認するには？",c:["AWS Config Rule","Amazon Polly","AWS Glue","Amazon Forecast"],a:"AWS Config Rule"},
{q:"設定変更の履歴を確認するのに役立つサービスは？",c:["AWS Config","Amazon Comprehend","AWS Backupのみ","AWS IQ"],a:"AWS Config"},
{q:"AWS Configの修復アクションでできることは？",c:["非準拠リソースに対して自動修復を実行する","EC2料金を下げる","VPC CIDRを無限に増やす","DNSを削除する"],a:"非準拠リソースに対して自動修復を実行する"},

{q:"AWS CloudTrailの主な役割は？",c:["AWS API操作履歴を記録する","全パケット本文を保存する","EC2のCPUを増やす","DNSを高速化する"],a:"AWS API操作履歴を記録する"},
{q:"誰がセキュリティグループを変更したか確認するサービスは？",c:["CloudTrail","CloudFront","Amazon Polly","AWS Batch"],a:"CloudTrail"},
{q:"CloudTrailログの保存先として代表的なものは？",c:["Amazon S3","Amazon EBSのみ","Route Table","NAT Gateway"],a:"Amazon S3"},
{q:"CloudTrailイベントをトリガーに自動処理するサービスは？",c:["Amazon EventBridge","Amazon Translate","Amazon Lex","Amazon Macieのみ"],a:"Amazon EventBridge"},
{q:"不正なネットワーク変更を検知して通知する構成は？",c:["CloudTrail + EventBridge + SNS","S3 + Polly + Lex","EC2 + EBS + AMI","CloudFront + Route 53 Registrar"],a:"CloudTrail + EventBridge + SNS"},

{q:"Amazon EventBridgeの用途は？",c:["イベントに応じて処理を起動する","VPCを暗号化する","S3を圧縮する","IAMユーザーを翻訳する"],a:"イベントに応じて処理を起動する"},
{q:"EventBridgeでSG変更を検知した後に実行できる処理は？",c:["Lambdaで通知や修復を行う","NAT Gatewayを必ず削除する","DNSを購入する","S3を翻訳する"],a:"Lambdaで通知や修復を行う"},
{q:"AWS Lambdaの特徴は？",c:["サーバーレスでコードを実行できる","常にEC2管理が必要","VPC専用DNSサービス","Direct Connect専用機能"],a:"サーバーレスでコードを実行できる"},
{q:"ネットワーク運用でLambdaを使う例は？",c:["不正なSGルールを自動削除する","EC2の画面を変更する","S3を手動で読む","DNSを無効にする"],a:"不正なSGルールを自動削除する"},
{q:"EventBridgeのスケジュール機能でできることは？",c:["定期的にLambdaを実行する","VPCを削除不能にする","CloudFrontを必ず無料にする","IAMを使えなくする"],a:"定期的にLambdaを実行する"},

{q:"VPC Flow Logsを有効化する目的は？",c:["IPトラフィックを記録・分析する","EC2を暗号化する","DNSを購入する","IAMを削除する"],a:"IPトラフィックを記録・分析する"},
{q:"Flow Logsの保存先として利用できるものは？",c:["CloudWatch LogsやS3","IAMのみ","EBSのみ","Route 53のみ"],a:"CloudWatch LogsやS3"},
{q:"CloudWatch Logs Insightsの用途は？",c:["ログをクエリで分析する","VPCを作成する","IAMを削除する","S3を購入する"],a:"ログをクエリで分析する"},
{q:"Flow Logsから拒否通信を探すときに見る値は？",c:["REJECT","ALLOWONLY","DENYALL","DROPZONE"],a:"REJECT"},
{q:"ネットワーク障害調査でFlow Logsが役立つ理由は？",c:["通信の許可・拒否や送受信情報を確認できる","HTTPS本文が全て見える","パスワードが見える","EC2の画面が見える"],a:"通信の許可・拒否や送受信情報を確認できる"},

{q:"Amazon CloudWatchの主な用途は？",c:["メトリクス・ログ・アラーム監視","DNS購入","EC2のAMI作成のみ","S3の手動削除"],a:"メトリクス・ログ・アラーム監視"},
{q:"VPNトンネル状態を監視するのに使えるサービスは？",c:["CloudWatch","Amazon Polly","AWS Glue","Amazon Textract"],a:"CloudWatch"},
{q:"CloudWatch Alarmでできることは？",c:["条件を満たしたときに通知やアクションを実行する","VPC CIDRを自動変更する","IAMを削除する","DNSを購入する"],a:"条件を満たしたときに通知やアクションを実行する"},
{q:"Direct Connectのメトリクス監視に使えるサービスは？",c:["CloudWatch","Amazon Rekognition","AWS Backup","Amazon Personalize"],a:"CloudWatch"},
{q:"CloudWatch Dashboardの用途は？",c:["複数メトリクスを可視化する","VPCを暗号化する","DNSを購入する","IAMパスワードを変更する"],a:"複数メトリクスを可視化する"},

{q:"Amazon SNSの用途は？",c:["通知を配信する","VPCを作る","EC2を暗号化する","CloudFrontを削除する"],a:"通知を配信する"},
{q:"ネットワーク障害時にメール通知する構成は？",c:["CloudWatch Alarm + SNS","S3 + IAM","Route 53 + EBS","CloudFront + AMI"],a:"CloudWatch Alarm + SNS"},
{q:"Amazon SQSの用途は？",c:["メッセージキューで処理を非同期化する","DNSを解決する","VPCを作成する","VPNを暗号化する"],a:"メッセージキューで処理を非同期化する"},
{q:"大量イベントを順番に処理したい場合に使うサービスは？",c:["SQS","Route 53","NACL","Internet Gateway"],a:"SQS"},
{q:"運用自動化でSNSとLambdaを組み合わせる目的は？",c:["通知を受けて自動処理を起動する","EC2を手動管理する","DNSを無効化する","S3を公開する"],a:"通知を受けて自動処理を起動する"},

{q:"Systems Manager Automationの用途は？",c:["運用手順を自動実行する","DNSを購入する","CloudFrontを削除する","S3を翻訳する"],a:"運用手順を自動実行する"},
{q:"Systems Manager Run Commandでできることは？",c:["管理対象インスタンスにコマンドを実行する","VPCを作成する","Direct Connectを敷設する","Route 53を購入する"],a:"管理対象インスタンスにコマンドを実行する"},
{q:"Session Managerの利点は？",c:["SSHポートを開けずにインスタンスへ接続できる","必ずPublic IPが必要","SGを全開放する","DNSが不要"],a:"SSHポートを開けずにインスタンスへ接続できる"},
{q:"SSMをプライベートサブネットから使う場合に役立つものは？",c:["VPCエンドポイント","Internet Gatewayのみ","Public IP必須","CloudFront必須"],a:"VPCエンドポイント"},
{q:"運用自動化でSSMドキュメントを使う目的は？",c:["標準化された手順を定義する","EC2を削除するだけ","DNSを購入する","S3を公開する"],a:"標準化された手順を定義する"},

{q:"VPC Reachability Analyzerの用途は？",c:["送信元から宛先までの到達性を分析する","S3を圧縮する","EC2を翻訳する","DNSを購入する"],a:"送信元から宛先までの到達性を分析する"},
{q:"Reachability Analyzerで確認できる設定は？",c:["ルートテーブル、SG、NACLなど","S3の画像内容","IAMユーザー写真","CloudFrontロゴ"],a:"ルートテーブル、SG、NACLなど"},
{q:"Network Access Analyzerの用途は？",c:["意図しないネットワークアクセス経路を検出する","EC2料金を下げる","S3を圧縮する","DNSを購入する"],a:"意図しないネットワークアクセス経路を検出する"},
{q:"Network Access Analyzerの活用例は？",c:["インターネットから到達可能なリソースを検出する","AMIを作る","S3を翻訳する","IAMユーザーを作る"],a:"インターネットから到達可能なリソースを検出する"},
{q:"ネットワーク到達性を自動チェックする目的は？",c:["変更後の疎通問題を早期発見する","EC2を必ず安くする","DNSを削除する","S3容量を増やす"],a:"変更後の疎通問題を早期発見する"},

{q:"Traffic Mirroringの用途は？",c:["ENIの通信を監視アプライアンスへ複製する","VPCを作る","S3を公開する","DNSを購入する"],a:"ENIの通信を監視アプライアンスへ複製する"},
{q:"Traffic Mirroringの主な利用目的は？",c:["IDS/IPSやパケット分析","EC2料金削減のみ","S3暗号化","IAM認証"],a:"IDS/IPSやパケット分析"},
{q:"Traffic Mirroringの送信元として使うものは？",c:["ENI","S3 Bucket","IAM Group","Route Table"],a:"ENI"},
{q:"Traffic Mirroringのターゲットにできる代表例は？",c:["NLBまたはENI","IAMユーザー","S3タグ","CloudFront関数"],a:"NLBまたはENI"},
{q:"パケット分析を自動化する際に重要なことは？",c:["保存先と監視ルールを設計する","ログを取らない","全通信を削除する","DNSを無効にする"],a:"保存先と監視ルールを設計する"},

{q:"Transit Gateway Network Managerの用途は？",c:["グローバルネットワークを可視化・監視する","S3を暗号化する","IAMユーザーを作る","CloudFrontを削除する"],a:"グローバルネットワークを可視化・監視する"},
{q:"Network Managerで確認できるものは？",c:["ネットワークトポロジ","S3本文","IAMパスワード","EC2画面"],a:"ネットワークトポロジ"},
{q:"Transit Gatewayの運用で監視すべきものは？",c:["アタッチメント状態やルート","S3タグ色","IAM表示名","EC2壁紙"],a:"アタッチメント状態やルート"},
{q:"Transit Gateway Route Tableの設定ミスで起こることは？",c:["意図した通信ができない、または不要な通信が許可される","S3が削除される","EC2が翻訳される","IAMが作成される"],a:"意図した通信ができない、または不要な通信が許可される"},
{q:"TGW設定をコード化する利点は？",c:["ルートやアタッチメント管理を標準化できる","BGPが不要になる","DNSが使えなくなる","SGが消える"],a:"ルートやアタッチメント管理を標準化できる"},

{q:"AWS Resource Access Managerの用途は？",c:["リソースを複数アカウントで共有する","EC2を暗号化する","S3を圧縮する","DNSを購入する"],a:"リソースを複数アカウントで共有する"},
{q:"Transit Gatewayを複数アカウントで共有するサービスは？",c:["AWS RAM","AWS Backup","Amazon Polly","Amazon Forecast"],a:"AWS RAM"},
{q:"共有VPCを使う利点は？",c:["ネットワーク管理を集約しつつ別アカウントがリソースを配置できる","全通信が無料になる","IAMが不要になる","SGが使えない"],a:"ネットワーク管理を集約しつつ別アカウントがリソースを配置できる"},
{q:"マルチアカウントの統制に使うサービスは？",c:["AWS Organizations","Amazon Translate","Amazon Textract","AWS DeepRacer"],a:"AWS Organizations"},
{q:"SCPの用途は？",c:["組織内アカウントの利用可能な操作を制限する","VPCを暗号化する","DNSを購入する","S3を圧縮する"],a:"組織内アカウントの利用可能な操作を制限する"},

{q:"ネットワーク作成を標準化するサービスとして適切なのは？",c:["AWS Service Catalog","Amazon Polly","AWS IQ","Amazon Lex"],a:"AWS Service Catalog"},
{q:"Service Catalogの用途は？",c:["承認済みの構成を利用者に提供する","DNSを購入する","VPCを削除する","EC2を翻訳する"],a:"承認済みの構成を利用者に提供する"},
{q:"Control Tower環境でネットワークアカウントを分ける目的は？",c:["ネットワーク管理とワークロード管理を分離する","全通信を公開する","VPCを使わない","DNSを削除する"],a:"ネットワーク管理とワークロード管理を分離する"},
{q:"Landing Zone設計で重要なネットワーク観点は？",c:["共有ネットワーク、ログ、セキュリティ境界","EC2の壁紙","IAM表示色","S3ファイル名"],a:"共有ネットワーク、ログ、セキュリティ境界"},
{q:"マルチアカウントでVPC作成を統制する方法は？",c:["IaCテンプレートとSCPを組み合わせる","全員に管理者権限を配る","手作業だけにする","ログを無効化する"],a:"IaCテンプレートとSCPを組み合わせる"},

{q:"Route 53 Resolver Query Loggingの用途は？",c:["DNSクエリを記録する","EC2を再起動する","VPCを削除する","S3を暗号化する"],a:"DNSクエリを記録する"},
{q:"DNS Firewallで自動防御する対象は？",c:["悪性ドメインへの問い合わせ","EC2 CPU使用率","S3容量","IAM表示名"],a:"悪性ドメインへの問い合わせ"},
{q:"DNS Firewallのルール管理を自動化する方法は？",c:["ドメインリストをIaCや運用フローで更新する","ログを削除する","VPCを公開する","NACLを無効化する"],a:"ドメインリストをIaCや運用フローで更新する"},
{q:"Resolver Ruleを複数VPCに共有する方法は？",c:["AWS RAMを使う","IAMユーザーを共有する","S3を公開する","EC2をコピーする"],a:"AWS RAMを使う"},
{q:"ハイブリッドDNS設定をコード化する利点は？",c:["転送ルールやエンドポイントを再現しやすい","DNSが不要になる","VPCが不要になる","SGが使えない"],a:"転送ルールやエンドポイントを再現しやすい"},

{q:"Route 53ヘルスチェックの用途は？",c:["エンドポイントの正常性を確認する","EC2を暗号化する","S3を削除する","IAMを作る"],a:"エンドポイントの正常性を確認する"},
{q:"DNSフェイルオーバーを自動化するRoute 53機能は？",c:["フェイルオーバールーティング","単純ルーティングのみ","TXTレコード","逆引きゾーンのみ"],a:"フェイルオーバールーティング"},
{q:"加重ルーティングの用途は？",c:["トラフィックを比率で分散する","BGPを暗号化する","S3を圧縮する","IAMを削除する"],a:"トラフィックを比率で分散する"},
{q:"Blue/Green切替でRoute 53加重ルーティングを使う理由は？",c:["段階的にトラフィックを移行できる","EC2料金が無料になる","DNSが不要になる","SGが消える"],a:"段階的にトラフィックを移行できる"},
{q:"Route 53変更を自動化する方法は？",c:["APIやIaCでレコードを管理する","手書きメモだけで管理する","ログを取らない","VPCを削除する"],a:"APIやIaCでレコードを管理する"},

{q:"CloudFront設定を自動管理する代表的な方法は？",c:["CloudFormationやCDKを使う","手動だけ","EC2のSSHだけ","S3タグだけ"],a:"CloudFormationやCDKを使う"},
{q:"CloudFrontキャッシュ無効化を自動実行するAPIは？",c:["CreateInvalidation","CreateVpc","PutBucketOnly","DeleteNat"],a:"CreateInvalidation"},
{q:"WAFルールを自動管理する方法は？",c:["AWS WAF APIやCloudFormationを使う","NACLで代替するだけ","IAMパスワードを使う","DNSを削除する"],a:"AWS WAF APIやCloudFormationを使う"},
{q:"WAFログを分析してルール改善する流れは？",c:["ログ収集、分析、ルール調整","ログ削除、全許可、放置","EC2停止、DNS削除","IAM削除"],a:"ログ収集、分析、ルール調整"},
{q:"Shield Advancedのイベント対応で役立つものは？",c:["DDoS Response Team","Amazon Polly","AWS Glue","Amazon Forecast"],a:"DDoS Response Team"},

{q:"Network Firewallのルール管理で重要なことは？",c:["変更管理と検証を行う","本番に直接無検証で投入する","全許可にする","ログを無効にする"],a:"変更管理と検証を行う"},
{q:"Network Firewallログの用途は？",c:["許可・拒否・アラート通信の分析","EC2壁紙変更","S3翻訳","IAM作成"],a:"許可・拒否・アラート通信の分析"},
{q:"Firewall Managerの用途は？",c:["複数アカウントにセキュリティポリシーを一元適用する","EC2を翻訳する","S3を削除する","DNSを購入する"],a:"複数アカウントにセキュリティポリシーを一元適用する"},
{q:"AWS Firewall Managerで管理できる代表例は？",c:["WAFやSecurity Groupポリシー","EC2 AMIのみ","S3オブジェクト本文","IAMパスワード"],a:"WAFやSecurity Groupポリシー"},
{q:"Organizations環境でネットワークセキュリティ統制を自動化するなら？",c:["Firewall Managerを検討する","全アカウント手動設定にする","ログを取らない","全SGを公開する"],a:"Firewall Managerを検討する"},

{q:"GuardDutyの検出結果を自動処理するには？",c:["EventBridgeで検出結果を受けてLambda等を起動する","S3を削除する","DNSを無効化する","EC2を公開する"],a:"EventBridgeで検出結果を受けてLambda等を起動する"},
{q:"GuardDuty検出後の自動対応例は？",c:["不審インスタンスの隔離SGへ変更する","全VPCを削除する","IAMを公開する","ログを削除する"],a:"不審インスタンスの隔離SGへ変更する"},
{q:"Security Hubの検出結果を集約する利点は？",c:["複数サービスのセキュリティ状態を一元確認できる","EC2が無料になる","DNSが不要になる","S3が増える"],a:"複数サービスのセキュリティ状態を一元確認できる"},
{q:"Security Hubから自動修復を行う構成は？",c:["EventBridge + Lambda/SSM Automation","CloudFront + Route 53 Registrar","S3 + IAM User","EBS + AMI"],a:"EventBridge + Lambda/SSM Automation"},
{q:"自動修復で注意すべきことは？",c:["業務影響を考えて承認や除外条件を設計する","常に全リソース削除する","ログを消す","通知しない"],a:"業務影響を考えて承認や除外条件を設計する"},

{q:"ネットワーク運用でタグを使う目的は？",c:["所有者や環境を識別し自動処理に活用する","通信を暗号化する","DNSを購入する","VPNを作る"],a:"所有者や環境を識別し自動処理に活用する"},
{q:"タグベースの自動化例は？",c:["Environmentタグに応じて監視設定を変える","全通信を許可する","DNSを削除する","S3を公開する"],a:"Environmentタグに応じて監視設定を変える"},
{q:"AWS Systems Manager Parameter Storeの用途は？",c:["設定値や秘密情報を管理する","VPCを作る","DNSを買う","EC2を翻訳する"],a:"設定値や秘密情報を管理する"},
{q:"Secrets Managerの主な用途は？",c:["シークレットの保管とローテーション","VPC CIDR作成","CloudFront削除","NACL番号管理のみ"],a:"シークレットの保管とローテーション"},
{q:"自動化スクリプトで認証情報を直書きしない理由は？",c:["漏えいリスクを下げるため","EC2を高速化するため","DNSを増やすため","S3容量を減らすため"],a:"漏えいリスクを下げるため"},

{q:"CI/CDでネットワークIaCをデプロイする利点は？",c:["レビュー後に一貫した変更を適用できる","手作業を増やせる","ログを消せる","SGを全開放できる"],a:"レビュー後に一貫した変更を適用できる"},
{q:"CodePipelineの用途は？",c:["ビルド・テスト・デプロイの流れを自動化する","DNSを購入する","EC2を暗号化する","S3を翻訳する"],a:"ビルド・テスト・デプロイの流れを自動化する"},
{q:"CodeBuildの用途は？",c:["ソースをビルド・テストする","VPCを暗号化する","Direct Connectを敷設する","DNSを購入する"],a:"ソースをビルド・テストする"},
{q:"IaCのデプロイ前に実施すべきことは？",c:["検証と差分確認","本番へ即反映","ログ削除","全許可設定"],a:"検証と差分確認"},
{q:"CloudFormationのRollback機能の目的は？",c:["失敗時に変更を戻す","DNSを高速化する","S3を圧縮する","IAMを削除する"],a:"失敗時に変更を戻す"},

{q:"ネットワーク変更後に自動テストすべき内容は？",c:["到達性、名前解決、セキュリティ制御","EC2壁紙","IAM表示名","S3色"],a:"到達性、名前解決、セキュリティ制御"},
{q:"疎通確認を自動化する方法として適切なのは？",c:["Reachability Analyzerやテスト用Lambdaを使う","手作業だけ","ログを無効化する","DNSを削除する"],a:"Reachability Analyzerやテスト用Lambdaを使う"},
{q:"変更失敗時の運用で重要なのは？",c:["ロールバック手順を用意する","記録しない","即座に全削除する","通知しない"],a:"ロールバック手順を用意する"},
{q:"ネットワーク自動化で権限設計が重要な理由は？",c:["自動処理に必要最小限の権限だけ与えるため","全権限を常に与えるため","IAMを使わないため","ログを消すため"],a:"自動処理に必要最小限の権限だけ与えるため"},
{q:"LambdaにAWSリソース操作権限を与える仕組みは？",c:["IAM Role","Security Group","NACL","Route Table"],a:"IAM Role"},

{q:"自動修復Lambdaに過剰権限を与えた場合のリスクは？",c:["誤動作時の影響範囲が大きくなる","必ず料金が下がる","DNSが速くなる","SGが不要になる"],a:"誤動作時の影響範囲が大きくなる"},
{q:"運用自動化のログを残す理由は？",c:["監査とトラブルシューティングのため","料金を無料にするため","DNSを削除するため","S3を圧縮するため"],a:"監査とトラブルシューティングのため"},
{q:"Lambda実行ログの確認先は？",c:["CloudWatch Logs","Route 53","EBS","NACL"],a:"CloudWatch Logs"},
{q:"自動化処理の失敗通知に使えるサービスは？",c:["SNS","S3 Glacier","Route Table","Internet Gateway"],a:"SNS"},
{q:"運用RunbookをAWS上で自動化するサービスは？",c:["Systems Manager Automation","CloudFront","Amazon Polly","AWS Glue DataBrew"],a:"Systems Manager Automation"},

{q:"災害対策でネットワーク切替を自動化する代表的な方法は？",c:["Route 53フェイルオーバーやGlobal Acceleratorを使う","NACLを削除する","SGを全開放する","VPCを消す"],a:"Route 53フェイルオーバーやGlobal Acceleratorを使う"},
{q:"Global Acceleratorでエンドポイント障害時にできることは？",c:["正常なエンドポイントへトラフィックを振り分ける","EC2を翻訳する","IAMを削除する","S3を暗号化する"],a:"正常なエンドポイントへトラフィックを振り分ける"},
{q:"Route 53ヘルスチェック連動の利点は？",c:["異常時にDNS応答先を切り替えられる","BGPが不要になる","EC2が無料になる","S3が増える"],a:"異常時にDNS応答先を切り替えられる"},
{q:"DR切替の自動化で重要なのは？",c:["定期的なテスト","一度も試験しない","ログを消す","全通信を許可する"],a:"定期的なテスト"},
{q:"自動フェイルオーバーで注意すべきことは？",c:["誤検知による不要な切替を避ける","監視を無効化する","DNSを削除する","SGを削除する"],a:"誤検知による不要な切替を避ける"},

{q:"コスト監視でNAT Gatewayの利用量を見る目的は？",c:["不要なアウトバウンド通信やデータ処理量を把握する","IAMを削除する","DNSを購入する","S3を翻訳する"],a:"不要なアウトバウンド通信やデータ処理量を把握する"},
{q:"ネットワークコストの可視化に使うサービスは？",c:["Cost Explorer","Amazon Polly","AWS Glue","Amazon Textract"],a:"Cost Explorer"},
{q:"データ転送料金を抑える設計として適切なのは？",c:["同一AZ/リージョンやVPCエンドポイント活用を検討する","常に遠いリージョンを使う","全通信をインターネット経由にする","ログを消す"],a:"同一AZ/リージョンやVPCエンドポイント活用を検討する"},
{q:"NAT Gateway経由のS3アクセスコストを抑える選択肢は？",c:["S3 Gateway Endpointを使う","CloudTrailを削除する","IAMを削除する","EC2を公開する"],a:"S3 Gateway Endpointを使う"},
{q:"コスト異常を検知するサービスは？",c:["AWS Cost Anomaly Detection","AWS WAF","Route 53 Resolver","VPC Peering"],a:"AWS Cost Anomaly Detection"},

{q:"ネットワーク運用のベストプラクティスは？",c:["コード化、監視、ログ、変更管理を行う","すべて手動で記憶する","ログを取らない","全通信を許可する"],a:"コード化、監視、ログ、変更管理を行う"},
{q:"自動化で最も避けるべきことは？",c:["検証なしで本番を変更する","変更前に差分確認する","権限を最小化する","ログを残す"],a:"検証なしで本番を変更する"},
{q:"本番ネットワーク変更前に行うべきことは？",c:["影響範囲確認とバックアウト計画","全通信許可","ログ削除","DNS無効化"],a:"影響範囲確認とバックアウト計画"},
{q:"継続的なネットワーク改善に必要なものは？",c:["メトリクスとログのレビュー","一度作って放置","全SG公開","監視停止"],a:"メトリクスとログのレビュー"},
{q:"ANS-C01の自動化・運用で重要な考え方は？",c:["再現性・監視・安全な変更管理","手作業だけ","ログ削除","全公開"],a:"再現性・監視・安全な変更管理"}

];