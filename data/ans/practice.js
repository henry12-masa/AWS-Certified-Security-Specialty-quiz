window.quizData = window.quizData || {};

window.quizData.ansPractice = [

{q:"オンプレミスと複数VPCを集約接続したい。最も適切なサービスは？",c:["AWS Transit Gateway","NAT Gateway","Internet Gateway","Amazon CloudFront"],a:"AWS Transit Gateway"},
{q:"VPCピアリングで注意すべき制約は？",c:["推移的ルーティングはできない","必ず推移的に通信できる","CIDR重複でも問題ない","NAT Gatewayが必須"],a:"推移的ルーティングはできない"},
{q:"プライベートサブネットのEC2からS3へNATを通さず接続したい。使うべきものは？",c:["Gateway VPC Endpoint","Internet Gateway","Public VIF","Egress-only IGW"],a:"Gateway VPC Endpoint"},
{q:"IPv6環境でアウトバウンド専用のインターネット通信を許可したい。使うものは？",c:["Egress-only Internet Gateway","NAT Gateway","Virtual Private Gateway","Transit Gateway"],a:"Egress-only Internet Gateway"},
{q:"VPC内の通信が拒否されているか確認したい。最も役立つログは？",c:["VPC Flow Logs","CloudTrail証跡名","S3 Inventory","IAM Credential Report"],a:"VPC Flow Logs"},

{q:"オンプレミスからVPC内のPrivate Hosted Zoneを解決したい。必要なものは？",c:["Route 53 Resolver Inbound Endpoint","Route 53 Resolver Outbound Endpoint","NAT Gateway","CloudFront"],a:"Route 53 Resolver Inbound Endpoint"},
{q:"VPCからオンプレミスDNSへ問い合わせたい。必要なものは？",c:["Route 53 Resolver Outbound Endpoint","Route 53 Resolver Inbound Endpoint","Internet Gateway","AWS WAF"],a:"Route 53 Resolver Outbound Endpoint"},
{q:"複数VPCで共通DNS転送ルールを共有したい。使うサービスは？",c:["AWS RAM","Amazon Polly","AWS Backup","AWS Glue"],a:"AWS RAM"},
{q:"Direct Connectで複数リージョンのVPCへ接続しやすくするものは？",c:["Direct Connect Gateway","NAT Gateway","Internet Gateway","CloudFront"],a:"Direct Connect Gateway"},
{q:"Direct ConnectとTransit Gatewayを接続するために使うVIFは？",c:["Transit VIF","Public VIF","Private Hosted Zone","Gateway Endpoint"],a:"Transit VIF"},

{q:"WebアプリへのSQLインジェクション対策として使う代表的サービスは？",c:["AWS WAF","AWS Backup","Amazon EBS","AWS CodeCommit"],a:"AWS WAF"},
{q:"DDoS対策で高度な保護とDRT支援を受けたい。使うサービスは？",c:["AWS Shield Advanced","AWS Shield Standard","Amazon Macie","AWS Glue"],a:"AWS Shield Advanced"},
{q:"サードパーティFWをVPC通信経路に透過的に挿入したい。使うサービスは？",c:["Gateway Load Balancer","Application Load Balancer","Route 53 Resolver","NAT Gateway"],a:"Gateway Load Balancer"},
{q:"VPC内外の通信をL3/L4/L7ルールで検査・制御したい。使うサービスは？",c:["AWS Network Firewall","Amazon CloudFront","AWS Backup","Amazon Textract"],a:"AWS Network Firewall"},
{q:"通信経路上にFirewallを挿入する際、特に重要な設計は？",c:["対称ルーティング","CIDR重複","全ポート開放","DNS無効化"],a:"対称ルーティング"},

{q:"EC2にSSHポートを公開せず管理接続したい。使うべきものは？",c:["Systems Manager Session Manager","Internet Gateway","Elastic IP","Public Subnet"],a:"Systems Manager Session Manager"},
{q:"特定のAWS APIをプライベート接続で利用したい。使うものは？",c:["Interface VPC Endpoint","Internet Gateway","NAT Instance","Route 53 Registrar"],a:"Interface VPC Endpoint"},
{q:"Interface Endpointに関連付けて通信制御できるものは？",c:["セキュリティグループ","NACLのみ","Route Tableのみ","IAM Userのみ"],a:"セキュリティグループ"},
{q:"S3へのアクセスを特定VPCエンドポイント経由に限定する条件キーは？",c:["aws:sourceVpce","aws:username","aws:TokenIssueTime","aws:ViaAWSServiceOnly"],a:"aws:sourceVpce"},
{q:"VPCエンドポイント経由で許可するAPI操作を制御するものは？",c:["Endpoint Policy","NAT Policy","Route Policy","DNS Policy"],a:"Endpoint Policy"},

{q:"複数AZ構成のNAT Gateway設計として適切なのは？",c:["AZごとにNAT Gatewayを配置する","1つのNAT Gatewayに全AZを集約する","NAT Gatewayをプライベートサブネットに置く","NAT Gatewayを使わない"],a:"AZごとにNAT Gatewayを配置する"},
{q:"プライベートサブネットから同一AZのNAT Gatewayへルーティングする理由は？",c:["AZ障害時の影響とクロスAZ依存を減らすため","IAMを不要にするため","DNSを削除するため","VPC CIDRを増やすため"],a:"AZ障害時の影響とクロスAZ依存を減らすため"},
{q:"パブリックサブネットの条件は？",c:["Internet Gatewayへのルートがある","NAT Gatewayへのルートだけある","SGがない","VPC外にある"],a:"Internet Gatewayへのルートがある"},
{q:"DBを配置する一般的なサブネットは？",c:["プライベートサブネット","パブリックサブネット","エッジロケーション","CloudFront"],a:"プライベートサブネット"},
{q:"ALBをインターネット公開する場合の配置先は？",c:["パブリックサブネット","プライベートサブネットのみ","S3バケット","Route 53 Hosted Zone"],a:"パブリックサブネット"},

{q:"ALBが得意なルーティングは？",c:["HTTP/HTTPSのパスベースルーティング","BGPルーティング","IPsec暗号化","DNS転送"],a:"HTTP/HTTPSのパスベースルーティング"},
{q:"NLBが得意な用途は？",c:["低レイテンシなTCP/UDP処理","画像変換","DNS購入","S3暗号化"],a:"低レイテンシなTCP/UDP処理"},
{q:"CloudFrontの主な役割は？",c:["エッジからコンテンツを配信する","VPC内ルートを設定する","BGPを広告する","CIDRを変更する"],a:"エッジからコンテンツを配信する"},
{q:"CloudFrontでACM証明書を使う場合のリージョンは？",c:["us-east-1","ap-northeast-1のみ","任意のAZ","リージョン不要"],a:"us-east-1"},
{q:"S3オリジンをCloudFront経由に限定する仕組みは？",c:["Origin Access Control","NAT Gateway","VPC Peering","Direct Connect Gateway"],a:"Origin Access Control"},

{q:"グローバルアプリへの接続をAnycast IPで最適化したい。使うサービスは？",c:["AWS Global Accelerator","Amazon Route 53 Resolver","AWS WAF","NAT Gateway"],a:"AWS Global Accelerator"},
{q:"Route 53でユーザーに近い低遅延リージョンへ誘導するルーティングは？",c:["レイテンシールーティング","加重ルーティング","単純ルーティング","複数値回答のみ"],a:"レイテンシールーティング"},
{q:"Route 53で障害時に別エンドポイントへ切り替える構成は？",c:["フェイルオーバールーティング","地理的近接性のみ","TXTレコード","逆引きゾーン"],a:"フェイルオーバールーティング"},
{q:"Blue/Green切替で段階的にトラフィック移行するRoute 53機能は？",c:["加重ルーティング","単純ルーティング","MXレコード","CAAレコード"],a:"加重ルーティング"},
{q:"Route 53フェイルオーバーに必要な代表的機能は？",c:["ヘルスチェック","NAT Gateway","IAM Group","EBS Snapshot"],a:"ヘルスチェック"},

{q:"Site-to-Site VPNでAWS側に作るゲートウェイの代表例は？",c:["Virtual Private GatewayまたはTransit Gateway","NAT Gateway","Internet Gateway","CloudFront"],a:"Virtual Private GatewayまたはTransit Gateway"},
{q:"Site-to-Site VPNの標準トンネル数は？",c:["2本","1本","4本","0本"],a:"2本"},
{q:"VPNで使われる暗号化技術は？",c:["IPsec","WEP","FTP","Telnet"],a:"IPsec"},
{q:"VPNで動的ルーティングを使う場合の代表的プロトコルは？",c:["BGP","HTTP","SMTP","FTP"],a:"BGP"},
{q:"BGP ASNとは？",c:["自律システム番号","暗号化キー名","DNSドメイン名","IAMロール名"],a:"自律システム番号"},

{q:"Direct Connectのバックアップ回線としてよく使うものは？",c:["Site-to-Site VPN","CloudFront","S3 Transfer Acceleration","AWS Batch"],a:"Site-to-Site VPN"},
{q:"Direct Connectの高可用性設計として適切なのは？",c:["複数ロケーション・複数接続","単一接続のみ","BGP無効化","CIDR重複"],a:"複数ロケーション・複数接続"},
{q:"Direct ConnectでパブリックAWSサービスへ接続するVIFは？",c:["Public VIF","Private VIF","Transit VIF","Hosted Zone"],a:"Public VIF"},
{q:"Direct ConnectでVPCのプライベートIPへ接続するVIFは？",c:["Private VIF","Public VIF","DNS VIF","S3 VIF"],a:"Private VIF"},
{q:"Direct ConnectでLAGを使う目的は？",c:["帯域と冗長性を高める","DNSを購入する","S3を暗号化する","EC2を停止する"],a:"帯域と冗長性を高める"},

{q:"ハイブリッドDNSでDNSループを避ける理由は？",c:["名前解決が循環して失敗する可能性があるため","料金が無料になるため","BGPが不要になるため","SGが不要になるため"],a:"名前解決が循環して失敗する可能性があるため"},
{q:"Route 53 Resolver Query Loggingの用途は？",c:["DNSクエリを記録する","EC2を起動する","VPNを作る","S3を削除する"],a:"DNSクエリを記録する"},
{q:"DNS Firewallの用途は？",c:["不審ドメインへのDNS問い合わせを制御する","EC2 CPUを上げる","Route Tableを作る","NATを暗号化する"],a:"不審ドメインへのDNS問い合わせを制御する"},
{q:"マルウェア通信の出口対策として有効なDNS制御は？",c:["悪性ドメインをブロックする","全DNSを許可する","DNSログを無効化する","NACLを削除する"],a:"悪性ドメインをブロックする"},
{q:"Private Hosted Zoneの名前解決範囲は？",c:["関連付けたVPC内","全インターネット","全AWSアカウント","CloudFrontのみ"],a:"関連付けたVPC内"},

{q:"VPC Reachability Analyzerの用途は？",c:["到達性を分析する","S3を圧縮する","EC2料金を下げる","DNSを購入する"],a:"到達性を分析する"},
{q:"Network Access Analyzerの用途は？",c:["意図しないネットワーク到達経路を検出する","EC2を翻訳する","S3を削除する","IAMを作成する"],a:"意図しないネットワーク到達経路を検出する"},
{q:"Traffic Mirroringの用途は？",c:["ENIの通信を複製して分析する","VPCを削除する","Route 53を購入する","CloudFrontを作る"],a:"ENIの通信を複製して分析する"},
{q:"Traffic Mirroringの代表的な利用目的は？",c:["IDS/IPSやパケット解析","S3暗号化","EC2バックアップ","IAM管理"],a:"IDS/IPSやパケット解析"},
{q:"GuardDutyが分析する代表的なデータソースは？",c:["VPC Flow LogsやDNSログ","EC2壁紙","S3ファイル名のみ","IAM表示名"],a:"VPC Flow LogsやDNSログ"},

{q:"セキュリティグループ変更を誰が行ったか調べるサービスは？",c:["CloudTrail","CloudFront","Amazon Lex","AWS Glue"],a:"CloudTrail"},
{q:"セキュリティグループの状態を継続評価するサービスは？",c:["AWS Config","Amazon Polly","Amazon Rekognition","AWS IQ"],a:"AWS Config"},
{q:"0.0.0.0/0でSSHが開いているSGを検出したい。使うものは？",c:["AWS Config Rule","S3 Inventory","CloudFront OAC","EBS Snapshot"],a:"AWS Config Rule"},
{q:"複数アカウントにWAFやSGポリシーを一元適用したい。使うサービスは？",c:["AWS Firewall Manager","Amazon Translate","AWS Backup","Amazon Forecast"],a:"AWS Firewall Manager"},
{q:"複数セキュリティ検出結果を集約するサービスは？",c:["AWS Security Hub","Route 53","NAT Gateway","AWS Batch"],a:"AWS Security Hub"},

{q:"VPC設定をコードで再現性高く管理するサービスは？",c:["AWS CloudFormation","Amazon Polly","AWS Shield","Amazon Comprehend"],a:"AWS CloudFormation"},
{q:"CloudFormationで変更前に差分確認する機能は？",c:["Change Set","Flow Logs","Hosted Zone","NACL"],a:"Change Set"},
{q:"AWS CDKの特徴は？",c:["プログラミング言語でインフラを定義できる","DNSだけを設定する","VPNだけを作る","S3専用ツール"],a:"プログラミング言語でインフラを定義できる"},
{q:"IaCの主なメリットは？",c:["レビュー・再利用・変更履歴管理がしやすい","手作業が増える","構成が残らない","監査できない"],a:"レビュー・再利用・変更履歴管理がしやすい"},
{q:"ネットワーク変更をイベントで検知し自動修復したい。使う組み合わせは？",c:["CloudTrail + EventBridge + Lambda","S3 + Polly + Lex","EC2 + EBS + AMI","Route 53 + Registrar"],a:"CloudTrail + EventBridge + Lambda"},

{q:"LambdaにAWSリソース操作権限を与える仕組みは？",c:["IAM Role","NACL","Route Table","Elastic IP"],a:"IAM Role"},
{q:"自動修復Lambdaで重要な権限設計は？",c:["必要最小限の権限にする","AdministratorAccessを常に付与する","認証情報をコードに直書きする","ログを残さない"],a:"必要最小限の権限にする"},
{q:"Systems Manager Automationの用途は？",c:["運用手順を自動実行する","DNSを購入する","VPCを暗号化する","S3を翻訳する"],a:"運用手順を自動実行する"},
{q:"プライベートサブネットのEC2でSSMを使うときに役立つものは？",c:["SSM用VPCエンドポイント","Public IP必須","Internet Gateway必須","WAF必須"],a:"SSM用VPCエンドポイント"},
{q:"Run Commandの用途は？",c:["管理対象インスタンスへコマンドを実行する","Direct Connectを敷設する","Route 53を購入する","VPCを削除する"],a:"管理対象インスタンスへコマンドを実行する"},

{q:"Transit Gatewayで本番と開発の通信を分離したい。使うものは？",c:["別々のTGWルートテーブル","同じルートテーブルに集約","CIDR重複","NAT削除"],a:"別々のTGWルートテーブル"},
{q:"Transit Gateway Connectの用途は？",c:["SD-WAN等とGRE/BGPで接続する","S3に接続する","IAMを管理する","CloudFrontを作る"],a:"SD-WAN等とGRE/BGPで接続する"},
{q:"TGW Peeringの用途は？",c:["Transit Gateway同士を接続する","VPC CIDRを増やす","EC2を翻訳する","S3を暗号化する"],a:"Transit Gateway同士を接続する"},
{q:"大量のVPCフルメッシュ接続の代替として適切なのは？",c:["Transit Gateway","NAT Gateway","Internet Gateway","Egress-only IGW"],a:"Transit Gateway"},
{q:"共有VPCの利点は？",c:["ネットワーク管理を集約しつつ参加アカウントがリソースを配置できる","全通信無料","IAM不要","SG不要"],a:"ネットワーク管理を集約しつつ参加アカウントがリソースを配置できる"},

{q:"Cloud WANが向いているケースは？",c:["多数の拠点やVPCをグローバルに一元管理する","単一EC2だけ公開する","S3だけ作る","IAMだけ管理する"],a:"多数の拠点やVPCをグローバルに一元管理する"},
{q:"Transit Gateway Network Managerの用途は？",c:["ネットワークトポロジの可視化・監視","S3暗号化","EC2作成","DNS購入"],a:"ネットワークトポロジの可視化・監視"},
{q:"ハイブリッド接続で経路選択の基本となる考え方は？",c:["最長プレフィックス一致","作成日時順","名前順","料金順"],a:"最長プレフィックス一致"},
{q:"CIDR重複があるVPC同士を接続する問題は？",c:["ルーティングが困難になる","必ず高速化する","料金が無料になる","DNSが不要"],a:"ルーティングが困難になる"},
{q:"CIDR設計で重要なことは？",c:["将来拡張と接続先との重複回避","最小CIDRだけ使う","全環境同じCIDRを使う","後で考える"],a:"将来拡張と接続先との重複回避"},

{q:"サブネットはどの単位に作成される？",c:["アベイラビリティゾーン","リージョン全体","グローバル","エッジロケーション"],a:"アベイラビリティゾーン"},
{q:"VPCはどの単位のリソース？",c:["リージョン","AZ","グローバル","エッジ"],a:"リージョン"},
{q:"各サブネットでAWSが予約するIP数は？",c:["5個","1個","0個","半分"],a:"5個"},
{q:"ルートテーブルの役割は？",c:["宛先CIDRごとの経路を定義する","IAM権限を管理する","DNS名を購入する","EC2を暗号化する"],a:"宛先CIDRごとの経路を定義する"},
{q:"VPC内通信に自動で存在するルートは？",c:["localルート","internetルート","natルート","vpn-onlyルート"],a:"localルート"},

{q:"NACLで戻り通信を明示的に許可する必要がある理由は？",c:["ステートレスだから","ステートフルだから","IAMだから","DNSだから"],a:"ステートレスだから"},
{q:"セキュリティグループが戻り通信を自動許可する理由は？",c:["ステートフルだから","ステートレスだから","NACLだから","BGPだから"],a:"ステートフルだから"},
{q:"WebサーバーのSGで80/443のみ許可する考え方は？",c:["最小権限の通信制御","全開放","推移的ルーティング","DNS転送"],a:"最小権限の通信制御"},
{q:"本番と開発環境のネットワーク分離で適切なのは？",c:["VPCやサブネット、ルートを分ける","同一サブネットに混在させる","全ポートを開放する","CIDRを重複させる"],a:"VPCやサブネット、ルートを分ける"},
{q:"ゼロトラストに近い考え方は？",c:["ネットワーク内外問わず認証・認可・監査する","VPC内なら全許可","ログ不要","SG不要"],a:"ネットワーク内外問わず認証・認可・監査する"},

{q:"VPC Latticeの主な用途は？",c:["複数VPC/アカウント間のサービス通信を簡素化する","S3を公開する","EC2をバックアップする","DNSを購入する"],a:"複数VPC/アカウント間のサービス通信を簡素化する"},
{q:"VPC Latticeでできることは？",c:["サービス間通信の認証・認可・監視","Direct Connect敷設","S3暗号化","CloudFront削除"],a:"サービス間通信の認証・認可・監視"},
{q:"mTLSの目的は？",c:["クライアントとサーバー双方を証明書で認証する","BGP経路を短くする","S3容量を増やす","NATを作る"],a:"クライアントとサーバー双方を証明書で認証する"},
{q:"内部サービス通信の暗号化で使われる代表的技術は？",c:["TLS","Telnet","FTP","WEP"],a:"TLS"},
{q:"サービス間通信の可視化と制御を強める設計で有効なのは？",c:["VPC LatticeやService Meshの活用","全通信を許可","ログ無効化","SG削除"],a:"VPC LatticeやService Meshの活用"},

{q:"Route 53 Resolver Endpointの高可用性設計として適切なのは？",c:["複数AZに配置する","1AZのみに配置する","NACLを削除する","DNSを無効化する"],a:"複数AZに配置する"},
{q:"VPNトンネル監視に使うサービスは？",c:["CloudWatch","Amazon Polly","AWS Glue","Amazon Forecast"],a:"CloudWatch"},
{q:"ネットワーク障害通知に使う組み合わせは？",c:["CloudWatch Alarm + SNS","S3 + IAM","EBS + AMI","Route 53 + Registrar"],a:"CloudWatch Alarm + SNS"},
{q:"不審なGuardDuty検出結果を自動処理するには？",c:["EventBridge + Lambda","S3 + Athenaのみ","EC2 + EBS","CloudFront + OAC"],a:"EventBridge + Lambda"},
{q:"Security Hubの検出結果から自動修復する構成は？",c:["EventBridge + Lambda/SSM Automation","Route 53 + MX","S3 + Static Website","IAM + Access Key"],a:"EventBridge + Lambda/SSM Automation"},

{q:"NAT Gateway経由のS3アクセスコストを抑えるには？",c:["S3 Gateway Endpointを使う","NAT Gatewayを増やす","Public IPを増やす","WAFを使う"],a:"S3 Gateway Endpointを使う"},
{q:"データ転送料金を考慮した設計として適切なのは？",c:["同一AZ/リージョン通信やエンドポイント活用を検討する","常に遠いリージョンを使う","全通信をインターネット経由にする","ログを削除する"],a:"同一AZ/リージョン通信やエンドポイント活用を検討する"},
{q:"ネットワークコストの可視化に使うサービスは？",c:["AWS Cost Explorer","AWS WAF","Route 53 Resolver","VPC Peering"],a:"AWS Cost Explorer"},
{q:"コスト異常を検知するサービスは？",c:["AWS Cost Anomaly Detection","Amazon Inspector","AWS Shield","NAT Gateway"],a:"AWS Cost Anomaly Detection"},
{q:"ネットワーク設計でコストと可用性のバランスを取る際に重要なことは？",c:["要件に応じて冗長化レベルを選ぶ","常に最小構成にする","常に最大構成にする","監視しない"],a:"要件に応じて冗長化レベルを選ぶ"},

{q:"Placement GroupのClusterタイプが向く用途は？",c:["低レイテンシ・高帯域の密結合通信","広域DR","DNSフェイルオーバー","S3静的配信"],a:"低レイテンシ・高帯域の密結合通信"},
{q:"Spread Placement Groupの目的は？",c:["別ハードウェアに分散して障害影響を減らす","同一ラックに集約する","DNSを高速化する","VPCを共有する"],a:"別ハードウェアに分散して障害影響を減らす"},
{q:"Partition Placement Groupが向く用途は？",c:["大規模分散ワークロードの障害分離","単一サーバー運用","DNS購入","S3公開"],a:"大規模分散ワークロードの障害分離"},
{q:"MTU設計でVPN接続時に注意する理由は？",c:["暗号化ヘッダーによりフラグメントが発生し得るため","IAMが不要になるため","DNSが使えないため","S3が削除されるため"],a:"暗号化ヘッダーによりフラグメントが発生し得るため"},
{q:"Path MTU Discoveryで関係する代表的プロトコルは？",c:["ICMP","SMTP","FTP","LDAP"],a:"ICMP"},

{q:"Direct ConnectでMACsecを使う目的は？",c:["レイヤー2暗号化","DNS転送","EC2バックアップ","S3公開"],a:"レイヤー2暗号化"},
{q:"Direct Connect上で暗号化が必要な場合の選択肢は？",c:["VPN over Direct Connect","Internet Gateway追加","NACL削除","SG全開放"],a:"VPN over Direct Connect"},
{q:"非対称ルーティングが問題になることがある理由は？",c:["ステートフル機器で戻り通信が破棄される可能性がある","DNSが必ず失敗する","S3が消える","EC2料金が増える"],a:"ステートフル機器で戻り通信が破棄される可能性がある"},
{q:"ハイブリッド通信が失敗した際に確認する基本項目は？",c:["ルート、SG、NACL、VPN/DX状態","S3タグだけ","IAM表示名だけ","CloudFront圧縮だけ"],a:"ルート、SG、NACL、VPN/DX状態"},
{q:"DNSは解決できるが通信できない場合に疑うべきものは？",c:["ルーティングやセキュリティ制御","DNSだけ","S3だけ","IAMだけ"],a:"ルーティングやセキュリティ制御"},

{q:"通信はできるが名前解決できない場合に確認するものは？",c:["Resolver EndpointとDNSルール","NAT Gateway帯域のみ","EC2 CPUのみ","CloudTrail証跡名"],a:"Resolver EndpointとDNSルール"},
{q:"CloudFormationのRollback機能の目的は？",c:["失敗時に変更を戻す","DNSを高速化する","S3を圧縮する","IAMを削除する"],a:"失敗時に変更を戻す"},
{q:"ネットワーク変更前に行うべきことは？",c:["影響範囲確認とバックアウト計画","全通信許可","ログ削除","DNS無効化"],a:"影響範囲確認とバックアウト計画"},
{q:"ネットワーク自動化で避けるべきことは？",c:["検証なしで本番変更する","差分確認する","ログを残す","最小権限にする"],a:"検証なしで本番変更する"},
{q:"ANS-C01の総合演習で重要な考え方は？",c:["可用性・セキュリティ・運用性・コストを総合的に設計する","とにかく全通信を許可する","ログを取らない","手作業だけで管理する"],a:"可用性・セキュリティ・運用性・コストを総合的に設計する"}

];