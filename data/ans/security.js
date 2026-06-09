window.quizData = window.quizData || {};

window.quizData.ansSecurity = [

{q:"VPC内のEC2インスタンス単位で通信制御を行う機能は？",c:["セキュリティグループ","ネットワークACL","Route Table","Internet Gateway"],a:"セキュリティグループ"},
{q:"サブネット単位で通信制御を行う機能は？",c:["ネットワークACL","セキュリティグループ","IAM Role","CloudTrail"],a:"ネットワークACL"},
{q:"セキュリティグループの特徴は？",c:["ステートフル","ステートレス","拒否ルールを設定する","ルール番号順に評価される"],a:"ステートフル"},
{q:"ネットワークACLの特徴は？",c:["ステートレス","ステートフル","ENI単位で適用される","許可ルールのみ設定できる"],a:"ステートレス"},
{q:"セキュリティグループで設定できるルールは？",c:["許可ルールのみ","拒否ルールのみ","許可と拒否の両方","ルート伝播"],a:"許可ルールのみ"},

{q:"NACLで設定できるルールは？",c:["許可と拒否の両方","許可のみ","拒否のみ","IAMポリシーのみ"],a:"許可と拒否の両方"},
{q:"NACLの評価順序は？",c:["ルール番号の小さい順","ルール番号の大きい順","作成日時順","ランダム"],a:"ルール番号の小さい順"},
{q:"戻り通信を意識する必要が高いのはどれ？",c:["ネットワークACL","セキュリティグループ","IAMロール","Route 53"],a:"ネットワークACL"},
{q:"WebサーバーにHTTP/HTTPSだけを許可する場合に使う代表的な機能は？",c:["セキュリティグループ","AWS Backup","CloudTrail Lake","Amazon Polly"],a:"セキュリティグループ"},
{q:"VPC Flow Logsで確認できる情報は？",c:["IPトラフィックのACCEPT/REJECT","HTTPS本文","パスワード","SQL全文"],a:"IPトラフィックのACCEPT/REJECT"},

{q:"VPC Flow Logsの出力先として正しいものは？",c:["CloudWatch LogsやS3","Route 53のみ","IAMのみ","CloudFrontのみ"],a:"CloudWatch LogsやS3"},
{q:"不審な通信元IPを調査する際に役立つログは？",c:["VPC Flow Logs","AWS Pricing Calculator","Amazon Translate","AWS Budgets"],a:"VPC Flow Logs"},
{q:"ネットワーク構成変更の履歴確認に役立つサービスは？",c:["AWS CloudTrail","Amazon Polly","Amazon Lex","AWS Glue DataBrew"],a:"AWS CloudTrail"},
{q:"セキュリティグループ変更のコンプライアンス確認に役立つサービスは？",c:["AWS Config","AWS Batch","Amazon Rekognition","Amazon Personalize"],a:"AWS Config"},
{q:"意図しないネットワーク到達経路を分析するサービスは？",c:["Network Access Analyzer","Amazon Athena","AWS Backup","AWS AppSync"],a:"Network Access Analyzer"},

{q:"送信元から宛先までの到達性を検証するサービスは？",c:["VPC Reachability Analyzer","AWS Shield","Amazon Inspector","Amazon Textract"],a:"VPC Reachability Analyzer"},
{q:"VPC Reachability Analyzerが確認する代表的な設定は？",c:["ルートテーブル、SG、NACL","S3ライフサイクル","IAMユーザー名","請求アラーム"],a:"ルートテーブル、SG、NACL"},
{q:"AWS Network Firewallの主な用途は？",c:["VPC内外の通信を詳細に検査・制御する","S3を圧縮する","EC2をバックアップする","DNSを購入する"],a:"VPC内外の通信を詳細に検査・制御する"},
{q:"AWS Network Firewallでできる制御は？",c:["ドメイン名やプロトコルに基づく制御","EC2料金の割引","S3の自動翻訳","IAMユーザー作成"],a:"ドメイン名やプロトコルに基づく制御"},
{q:"Network Firewallを集中配置する設計でよく使う構成は？",c:["検査VPC","S3専用VPC","IAM専用VPC","CloudFront専用VPC"],a:"検査VPC"},

{q:"検査VPCの目的は？",c:["通信を集中検査する","EC2を高速化する","S3容量を増やす","DNSを削除する"],a:"通信を集中検査する"},
{q:"Gateway Load Balancerの代表的な用途は？",c:["サードパーティ仮想アプライアンスを通信経路に挿入する","IAM認証を行う","S3を静的公開する","CloudWatchを削除する"],a:"サードパーティ仮想アプライアンスを通信経路に挿入する"},
{q:"GWLBで使われるカプセル化プロトコルは？",c:["GENEVE","BGP","SMTP","FTP"],a:"GENEVE"},
{q:"IDS/IPS製品をVPC通信に挿入する際に適したサービスは？",c:["Gateway Load Balancer","Amazon Polly","AWS Glue","AWS Backup"],a:"Gateway Load Balancer"},
{q:"通信経路にファイアウォールを挿入する際に重要な設計は？",c:["対称ルーティング","CIDR重複","全ポート開放","NACL削除"],a:"対称ルーティング"},

{q:"AWS Shield Standardの特徴は？",c:["追加料金なしで基本的なDDoS保護を提供する","WAFルールを自動作成する","EC2を暗号化する","VPCを作成する"],a:"追加料金なしで基本的なDDoS保護を提供する"},
{q:"AWS Shield Advancedの特徴は？",c:["高度なDDoS保護とDRT支援を提供する","S3専用のバックアップ機能","IAMユーザー管理専用","DNS購入サービス"],a:"高度なDDoS保護とDRT支援を提供する"},
{q:"L7のWeb攻撃対策に使う代表的サービスは？",c:["AWS WAF","AWS Backup","Amazon EBS","AWS CodeBuild"],a:"AWS WAF"},
{q:"AWS WAFで防御できる代表例は？",c:["SQLインジェクションやXSS","BGP経路障害","EC2ディスク障害","S3容量不足"],a:"SQLインジェクションやXSS"},
{q:"AWS WAFを関連付けられる代表的なリソースは？",c:["CloudFrontやALB","EBS Volume","IAM User","Route Table"],a:"CloudFrontやALB"},

{q:"CloudFrontとWAFを組み合わせる利点は？",c:["エッジでWeb攻撃を防御できる","EC2のCPUを増やせる","S3容量を無制限にできる","IAMを不要にできる"],a:"エッジでWeb攻撃を防御できる"},
{q:"AWS WAFのManaged Rulesの利点は？",c:["一般的な攻撃対策ルールを簡単に利用できる","VPC CIDRを自動変更する","S3を複製する","BGPを設定する"],a:"一般的な攻撃対策ルールを簡単に利用できる"},
{q:"特定IPからのアクセスを遮断するWAF機能は？",c:["IP set","Transit Gateway","NAT Gateway","Private Hosted Zone"],a:"IP set"},
{q:"レートベースルールの用途は？",c:["一定時間内のリクエスト数で制限する","DNSを転送する","EC2を再起動する","S3を圧縮する"],a:"一定時間内のリクエスト数で制限する"},
{q:"DDoS対策としてCloudFrontを使う利点は？",c:["エッジでトラフィックを分散・吸収しやすい","VPC CIDRが増える","IAMが不要になる","RDSが高速化する"],a:"エッジでトラフィックを分散・吸収しやすい"},

{q:"PrivateLinkのセキュリティ上の利点は？",c:["インターネットを経由せずサービスへプライベート接続できる","必ずパブリックIPが必要","SGを使えない","DNSを使えない"],a:"インターネットを経由せずサービスへプライベート接続できる"},
{q:"Interface VPC Endpointで通信制御に使えるものは？",c:["セキュリティグループ","CloudFront Cache Policy","IAM User Password","S3 Lifecycle"],a:"セキュリティグループ"},
{q:"Gateway VPC Endpointの代表的な対象サービスは？",c:["S3とDynamoDB","EC2とLambda","ALBとNLB","CloudFrontとWAF"],a:"S3とDynamoDB"},
{q:"S3への通信をインターネットに出さない構成は？",c:["Gateway VPC Endpointを使う","Internet Gatewayだけを使う","全EC2にEIPを付ける","WAFだけを使う"],a:"Gateway VPC Endpointを使う"},
{q:"VPC Endpoint Policyで制御できることは？",c:["エンドポイント経由で許可するAWS API操作","EC2のCPU使用率","NACLルール番号","Route 53 TTL"],a:"エンドポイント経由で許可するAWS API操作"},

{q:"S3バケットを特定VPCエンドポイントからのみ許可する制御に使う条件キーは？",c:["aws:sourceVpce","aws:username","aws:RequestedRegionOnly","aws:CloudFront"],a:"aws:sourceVpce"},
{q:"VPCエンドポイント経由の通信制限で使う主なものは？",c:["Endpoint Policyとリソースポリシー","EC2 UserDataのみ","CloudFront Functionsのみ","EBS Snapshotのみ"],a:"Endpoint Policyとリソースポリシー"},
{q:"PrivateLinkサービス提供側で利用するロードバランサーは？",c:["Network Load Balancer","Application Load Balancerのみ","Classic Load Balancerのみ","Route 53 Resolver"],a:"Network Load Balancer"},
{q:"PrivateLinkでサービス利用側に作成するものは？",c:["Interface Endpoint","Internet Gateway","NAT Instance","CloudFront Distribution"],a:"Interface Endpoint"},
{q:"プライベート接続で外部SaaSに接続する選択肢として正しいものは？",c:["AWS PrivateLink対応サービス","必ずInternet Gateway","必ずPublic IP","S3 Gateway Endpointのみ"],a:"AWS PrivateLink対応サービス"},

{q:"DNSレベルで不審ドメインへの通信を制御する機能は？",c:["Route 53 Resolver DNS Firewall","AWS Backup","Amazon Macie","CloudTrail Lake"],a:"Route 53 Resolver DNS Firewall"},
{q:"DNS Firewallで使うルールグループの用途は？",c:["許可・ブロックするドメインリストを管理する","EC2のSSH鍵を管理する","S3の容量を増やす","VPNトンネルを作る"],a:"許可・ブロックするドメインリストを管理する"},
{q:"マルウェア通信対策として有効なDNS制御は？",c:["悪性ドメインをブロックする","CIDRを重複させる","IAMを削除する","全通信を許可する"],a:"悪性ドメインをブロックする"},
{q:"DNSクエリログの出力先として使えるものは？",c:["CloudWatch LogsやS3","IAMのみ","EBSのみ","NAT Gatewayのみ"],a:"CloudWatch LogsやS3"},
{q:"VPC内のDNSクエリを監査したい場合に使う機能は？",c:["Route 53 Resolver Query Logging","CloudFront OAC","AWS Backup Vault","EBS Fast Snapshot Restore"],a:"Route 53 Resolver Query Logging"},

{q:"オンプレDNSとAWS DNS連携で注意することは？",c:["DNSループを避ける","全ポート開放する","NACLを削除する","CIDRを重複させる"],a:"DNSループを避ける"},
{q:"Private Hosted Zoneを関連付ける対象は？",c:["VPC","CloudFront","IAM Group","S3 Object"],a:"VPC"},
{q:"Private Hosted Zoneのセキュリティ面の特徴は？",c:["関連付けたVPC内から名前解決できる","必ずインターネット公開される","Public IPを自動発行する","WAFを無効化する"],a:"関連付けたVPC内から名前解決できる"},
{q:"オンプレからPrivate Hosted Zoneを解決させるには？",c:["Resolver Inbound Endpointを使う","Internet Gatewayを使う","NAT Gatewayだけ使う","S3 Endpointだけ使う"],a:"Resolver Inbound Endpointを使う"},
{q:"VPCからオンプレDNSへ問い合わせを送るには？",c:["Resolver Outbound Endpointを使う","CloudFrontを使う","WAFを使う","EBSを使う"],a:"Resolver Outbound Endpointを使う"},

{q:"Direct Connectの通信を暗号化したい場合の選択肢は？",c:["Direct Connect上でVPNを併用する","暗号化は不可能","Internet Gatewayを追加する","NACLを削除する"],a:"Direct Connect上でVPNを併用する"},
{q:"Direct ConnectのMACsecの目的は？",c:["レイヤー2暗号化","DNS転送","S3暗号化","IAM認証"],a:"レイヤー2暗号化"},
{q:"Site-to-Site VPNで使われる暗号化技術は？",c:["IPsec","WEP","FTP","SMTP"],a:"IPsec"},
{q:"VPN接続で事前共有キーが関係するものは？",c:["IPsec/IKE設定","S3バケットポリシー","CloudFront OAC","IAM Access Analyzer"],a:"IPsec/IKE設定"},
{q:"VPNトンネルを安全に運用するために重要なことは？",c:["トンネル状態と設定変更を監視する","監視しない","1本だけ使う","暗号化を切る"],a:"トンネル状態と設定変更を監視する"},

{q:"ハイブリッド接続でオンプレCIDRをSGに許可する目的は？",c:["オンプレからAWSリソースへの必要通信を許可する","S3を高速化する","CloudFrontを無効化する","IAMを削除する"],a:"オンプレからAWSリソースへの必要通信を許可する"},
{q:"セキュリティ上避けるべきSG設定は？",c:["不要な0.0.0.0/0の広範許可","特定IPのみ許可","必要ポートのみ許可","送信元SG指定"],a:"不要な0.0.0.0/0の広範許可"},
{q:"SSHをインターネット全体に公開する設定は？",c:["避けるべき設定","常に推奨","AWS必須","無料化設定"],a:"避けるべき設定"},
{q:"踏み台サーバーを減らす安全な接続方法は？",c:["Systems Manager Session Manager","全EC2にEIP付与","22番を全開放","NACLを削除"],a:"Systems Manager Session Manager"},
{q:"Session Managerの利点は？",c:["インバウンドSSHを開けずに管理接続できる","必ずPublic IPが必要","SGを全開放する","VPNを削除する"],a:"インバウンドSSHを開けずに管理接続できる"},

{q:"ALBにWAFを関連付ける目的は？",c:["Webアプリへの攻撃を防ぐ","DBを暗号化する","EC2をバックアップする","DNSを購入する"],a:"Webアプリへの攻撃を防ぐ"},
{q:"ALBでHTTPSを終端する際に使う証明書サービスは？",c:["AWS Certificate Manager","AWS KMSのみ","AWS Config","AWS CloudTrail"],a:"AWS Certificate Manager"},
{q:"TLS通信を実現するために必要なものは？",c:["サーバー証明書","NACL削除","CIDR重複","Public VIF"],a:"サーバー証明書"},
{q:"CloudFrontでACM証明書を使う際のリージョンは？",c:["us-east-1","ap-northeast-1のみ","任意のAZ","eu-central-1のみ"],a:"us-east-1"},
{q:"NLBでTLSを終端する構成に使えるものは？",c:["TLS Listener","WAF Ruleのみ","Route Table","NACL番号"],a:"TLS Listener"},

{q:"S3オリジンをCloudFront経由に限定する仕組みは？",c:["Origin Access Control","NAT Gateway","Transit Gateway","Public VIF"],a:"Origin Access Control"},
{q:"CloudFront OACの目的は？",c:["S3への直接アクセスを防ぎCloudFront経由に制限する","VPC CIDRを増やす","EC2を高速化する","VPNを作る"],a:"S3への直接アクセスを防ぎCloudFront経由に制限する"},
{q:"CloudFrontの署名付きURLの用途は？",c:["限定されたユーザーにコンテンツアクセスを許可する","VPCを作成する","IAMを削除する","BGPを設定する"],a:"限定されたユーザーにコンテンツアクセスを許可する"},
{q:"CloudFrontのGeo制限でできることは？",c:["国単位でアクセスを許可・拒否する","IAM権限を作る","VPCを削除する","DX接続を暗号化する"],a:"国単位でアクセスを許可・拒否する"},
{q:"CloudFront FunctionsやLambda@Edgeの用途は？",c:["エッジでリクエスト処理を変更する","Direct Connectを作る","S3を暗号化する","SGを削除する"],a:"エッジでリクエスト処理を変更する"},

{q:"ネットワークの脅威検知に使えるAWSサービスは？",c:["Amazon GuardDuty","Amazon Polly","AWS Glue","Amazon Forecast"],a:"Amazon GuardDuty"},
{q:"GuardDutyが分析するデータソースの例は？",c:["VPC Flow LogsやDNSログ","EC2画面サイズ","S3ファイル名のみ","IAM表示名"],a:"VPC Flow LogsやDNSログ"},
{q:"GuardDutyで検知できる可能性があるものは？",c:["不審な通信や侵害兆候","EC2料金割引","S3容量不足","Route 53ドメイン購入"],a:"不審な通信や侵害兆候"},
{q:"Security Hubの役割は？",c:["複数セキュリティ検出結果を集約・評価する","DNSを転送する","EC2を起動する","VPNを作る"],a:"複数セキュリティ検出結果を集約・評価する"},
{q:"Amazon Inspectorの主な用途は？",c:["脆弱性管理","DNS購入","VPC作成","DXルーティング"],a:"脆弱性管理"},

{q:"AWS Config Rulesで確認できる例は？",c:["SGが0.0.0.0/0でSSH公開されていないか","EC2の壁紙","S3のファイル名だけ","IAMの色設定"],a:"SGが0.0.0.0/0でSSH公開されていないか"},
{q:"CloudTrailで確認できるものは？",c:["誰がどのAPIを実行したか","HTTPS本文","TCP再送回数","EC2の画面表示"],a:"誰がどのAPIを実行したか"},
{q:"ネットワーク設定変更のアラート化に使える組み合わせは？",c:["CloudTrail、EventBridge、SNS","S3、Polly、Translate","EC2、EBS、AMIのみ","CloudFront、Route 53 Registrarのみ"],a:"CloudTrail、EventBridge、SNS"},
{q:"不正なSG変更を検知して通知する構成は？",c:["EventBridgeでCloudTrailイベントを検知する","NAT Gatewayを削除する","S3を公開する","IAMを無効化する"],a:"EventBridgeでCloudTrailイベントを検知する"},
{q:"設定の継続的な評価に向いているサービスは？",c:["AWS Config","Amazon Lex","AWS Glue","Amazon Kendra"],a:"AWS Config"},

{q:"DDoS対策でRoute 53を使う利点は？",c:["高可用なDNS基盤を利用できる","EC2を暗号化できる","SGを自動削除する","S3を圧縮する"],a:"高可用なDNS基盤を利用できる"},
{q:"Global AcceleratorがDDoS耐性に寄与する理由は？",c:["AWSグローバルネットワークと固定Anycast IPを利用できる","VPCを削除する","IAMを暗号化する","S3を高速化する"],a:"AWSグローバルネットワークと固定Anycast IPを利用できる"},
{q:"インターネット公開アプリの入口として推奨されやすい構成は？",c:["CloudFrontまたはALBにWAFを組み合わせる","EC2を全台直接公開する","DBを公開する","SGを全開放する"],a:"CloudFrontまたはALBにWAFを組み合わせる"},
{q:"オリジン保護の考え方として正しいものは？",c:["CloudFrontからの通信のみ許可する","全世界から直接許可する","SGを削除する","WAFを外す"],a:"CloudFrontからの通信のみ許可する"},
{q:"ALBのアクセスログ保存先は？",c:["S3","IAM","EBSのみ","Route Table"],a:"S3"},

{q:"NLBのフローログとして利用できるものは？",c:["VPC Flow Logs","CloudFront Functions","S3 Inventoryのみ","IAM Credential Report"],a:"VPC Flow Logs"},
{q:"ロードバランサーへのアクセスを監査するには？",c:["アクセスログやCloudWatchメトリクスを使う","IAMを削除する","NACLを空にする","DNSを無効化する"],a:"アクセスログやCloudWatchメトリクスを使う"},
{q:"Webアクセスログ分析に使えるサービスは？",c:["Athena","EC2キーペア","NAT Gateway","VPC Peering"],a:"Athena"},
{q:"WAFログの保存先として使えるものは？",c:["CloudWatch Logs、S3、Kinesis Data Firehose","IAMのみ","EBSのみ","Route 53のみ"],a:"CloudWatch Logs、S3、Kinesis Data Firehose"},
{q:"WAFログを分析する目的は？",c:["攻撃傾向や誤検知を確認する","EC2を起動する","S3を削除する","VPNを作る"],a:"攻撃傾向や誤検知を確認する"},

{q:"NAT Gatewayを使うプライベートサブネットのセキュリティ上の特徴は？",c:["インバウンドを直接受けずアウトバウンド通信できる","必ず外部から直接接続できる","SGが使えない","DNSが使えない"],a:"インバウンドを直接受けずアウトバウンド通信できる"},
{q:"Egress-only Internet Gatewayの用途は？",c:["IPv6のアウトバウンド専用通信","IPv4 NAT変換","Direct Connect終端","WAFログ保存"],a:"IPv6のアウトバウンド専用通信"},
{q:"アウトバウンド通信の宛先制御を強めるには？",c:["Network Firewallやプロキシを使う","全通信を0.0.0.0/0許可する","ログを取らない","NACLを削除する"],a:"Network Firewallやプロキシを使う"},
{q:"プライベートサブネットからAWS APIへ安全に接続する選択肢は？",c:["VPC Endpoint","Internet Gatewayのみ","Public IP必須","SSH必須"],a:"VPC Endpoint"},
{q:"EC2にパブリックIPを付けずにSSM接続するには？",c:["SSM用VPCエンドポイントまたはNAT経由を用意する","必ずEIPを付ける","SGを全開放する","DBを公開する"],a:"SSM用VPCエンドポイントまたはNAT経由を用意する"},

{q:"ネットワーク分離の設計として正しいものは？",c:["本番・開発・共有サービスを分離する","すべて同一サブネットに置く","全VPCを無条件接続する","全ポートを開く"],a:"本番・開発・共有サービスを分離する"},
{q:"Transit Gatewayで環境分離する方法は？",c:["ルートテーブルを分ける","全アタッチメントを同一ルートにする","CIDRを重複させる","BGPを無効にする"],a:"ルートテーブルを分ける"},
{q:"共有サービスVPCの用途は？",c:["DNS、検査、共通エンドポイントなどを集約する","全DBを公開する","IAMを削除する","S3を無効化する"],a:"DNS、検査、共通エンドポイントなどを集約する"},
{q:"最小権限のネットワーク設計として適切なのは？",c:["必要な送信元・宛先・ポートだけ許可する","全通信を許可する","NACLを削除する","Public IPを全リソースに付ける"],a:"必要な送信元・宛先・ポートだけ許可する"},
{q:"ゼロトラストに近い考え方は？",c:["ネットワーク内外を問わず認証・認可・監査を行う","VPC内なら全許可する","SGを使わない","ログを取らない"],a:"ネットワーク内外を問わず認証・認可・監査を行う"},

{q:"VPC Latticeのセキュリティ機能として正しいものは？",c:["サービス間通信に認証・認可を適用できる","S3を圧縮する","Direct Connectを暗号化する","Route 53ドメインを購入する"],a:"サービス間通信に認証・認可を適用できる"},
{q:"VPC Latticeが向いている用途は？",c:["複数VPC・複数アカウント間のサービス通信管理","EBS拡張","S3静的ホスティング","CloudFrontキャッシュ削除"],a:"複数VPC・複数アカウント間のサービス通信管理"},
{q:"サービス間通信の認可を強めたい場合の選択肢は？",c:["VPC Lattice auth policy","NAT Gatewayのみ","Internet Gatewayのみ","EBS Snapshot"],a:"VPC Lattice auth policy"},
{q:"mTLSの目的は？",c:["クライアントとサーバー双方を証明書で認証する","DNSを購入する","NACLを削除する","VPNを無効化する"],a:"クライアントとサーバー双方を証明書で認証する"},
{q:"内部サービス通信の暗号化で使われる代表的な技術は？",c:["TLS","FTP","Telnet","WEP"],a:"TLS"},

{q:"ネットワークセキュリティ運用で重要なことは？",c:["ログ収集、監視、定期レビュー","ログを取らない","全通信許可","設定を放置"],a:"ログ収集、監視、定期レビュー"},
{q:"広すぎるセキュリティグループを見直す目的は？",c:["攻撃面を減らす","EC2料金を必ず下げる","S3容量を増やす","DNSを速くする"],a:"攻撃面を減らす"},
{q:"NACLを使う主な理由は？",c:["サブネット境界で追加の制御を行う","IAMユーザーを増やす","CloudFrontを作る","S3を圧縮する"],a:"サブネット境界で追加の制御を行う"},
{q:"通信トラブルとセキュリティ調査の両方に役立つ情報は？",c:["Flow Logs","EC2壁紙","IAMユーザー写真","S3タグ色"],a:"Flow Logs"},
{q:"本番ネットワーク変更の安全な進め方は？",c:["影響範囲を確認し、変更管理とロールバック手順を用意する","即時全開放する","ログを削除する","検証しない"],a:"影響範囲を確認し、変更管理とロールバック手順を用意する"},

{q:"ネットワークセキュリティのベストプラクティスは？",c:["多層防御を行う","1つのSGだけに依存する","すべて公開する","監視しない"],a:"多層防御を行う"},
{q:"多層防御に含まれる代表例は？",c:["WAF、SG、NACL、Network Firewall、ログ監視","S3タグのみ","IAM表示名のみ","EC2キーペア名のみ"],a:"WAF、SG、NACL、Network Firewall、ログ監視"},
{q:"インターネット公開を減らす設計として適切なのは？",c:["PrivateLinkやVPC Endpointを活用する","全EC2にPublic IPを付ける","DBを公開する","SSHを全開放する"],a:"PrivateLinkやVPC Endpointを活用する"},
{q:"侵害調査で最初に確認しやすいネットワーク証跡は？",c:["VPC Flow LogsとCloudTrail","S3容量","EC2壁紙","IAM表示色"],a:"VPC Flow LogsとCloudTrail"},
{q:"安全なAWSネットワーク設計で最も重要な考え方は？",c:["必要な通信だけを許可し、監視とログを有効化する","すべての通信を許可する","ログを無効化する","全リソースを公開する"],a:"必要な通信だけを許可し、監視とログを有効化する"}

];