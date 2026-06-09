window.quizData = window.quizData || {};

window.quizData.ansHybrid = [

{q:"オンプレミスとAWSを専用線で接続するサービスは？",c:["AWS Direct Connect","AWS VPN Client","Amazon CloudFront","AWS WAF"],a:"AWS Direct Connect"},
{q:"インターネット経由でオンプレミスとAWSを暗号化接続するサービスは？",c:["AWS Site-to-Site VPN","AWS Direct Connect","Amazon Route 53","AWS Shield"],a:"AWS Site-to-Site VPN"},
{q:"Direct Connectで利用されるルーティングプロトコルは？",c:["BGP","OSPF","RIP","EIGRP"],a:"BGP"},
{q:"Site-to-Site VPNで標準的に作成されるトンネル数は？",c:["2本","1本","3本","4本"],a:"2本"},
{q:"オンプレミス側のVPN装置をAWS上で表すリソースは？",c:["Customer Gateway","Internet Gateway","NAT Gateway","Transit Gateway"],a:"Customer Gateway"},

{q:"AWS側でVPN接続の終端として使えるものは？",c:["Virtual Private GatewayまたはTransit Gateway","NAT Gatewayのみ","Internet Gatewayのみ","S3 Gateway"],a:"Virtual Private GatewayまたはTransit Gateway"},
{q:"Direct Connectの可用性を高める設計は？",c:["複数ロケーション・複数接続を使う","1本の接続だけにする","BGPを無効にする","VPC CIDRを重複させる"],a:"複数ロケーション・複数接続を使う"},
{q:"Direct Connect Gatewayの役割は？",c:["Direct Connectを複数リージョンのVPC接続に利用しやすくする","EC2へSSH接続する","S3を公開する","CloudFrontを作る"],a:"Direct Connectを複数リージョンのVPC接続に利用しやすくする"},
{q:"Private VIFの用途は？",c:["VPCのプライベートIPへ接続する","AWSパブリックサービスへ接続する","CloudFront専用接続を作る","IAMを管理する"],a:"VPCのプライベートIPへ接続する"},
{q:"Public VIFの用途は？",c:["S3などAWSパブリックサービスへ接続する","VPC内EC2だけへ接続する","オンプレDNSだけへ接続する","NAT Gatewayを作る"],a:"S3などAWSパブリックサービスへ接続する"},

{q:"Transit VIFの用途は？",c:["Direct Connect Gateway経由でTransit Gatewayへ接続する","EC2にElastic IPを付与する","S3静的サイトを公開する","Route 53のドメインを購入する"],a:"Direct Connect Gateway経由でTransit Gatewayへ接続する"},
{q:"Direct ConnectでLAGを使う目的は？",c:["複数接続を束ねて帯域と冗長性を高める","DNSを高速化する","S3を暗号化する","IAM権限を分離する"],a:"複数接続を束ねて帯域と冗長性を高める"},
{q:"LAGの正式名称は？",c:["Link Aggregation Group","Local Access Gateway","Logical Account Group","Latency Acceleration Gateway"],a:"Link Aggregation Group"},
{q:"Direct Connectで冗長性が最も高い構成は？",c:["異なるDXロケーションに複数接続を用意する","同じルーターに1本だけ接続する","VPNを使わない","BGPを静的ルートにする"],a:"異なるDXロケーションに複数接続を用意する"},
{q:"Direct Connectのバックアップとしてよく使われるものは？",c:["Site-to-Site VPN","CloudFront","AWS WAF","Amazon SNS"],a:"Site-to-Site VPN"},

{q:"VPN接続で動的ルーティングを使う場合に必要なものは？",c:["BGP対応","HTTP/2対応","S3バケット","CloudFront証明書"],a:"BGP対応"},
{q:"VPNで静的ルーティングを使う場合、設定するものは？",c:["オンプレミス側ネットワークの静的ルート","CloudFrontキャッシュポリシー","IAMアクセスキー","S3ライフサイクル"],a:"オンプレミス側ネットワークの静的ルート"},
{q:"BGP ASNとは何か？",c:["自律システム番号","暗号化キー番号","IAMロール番号","S3バケット番号"],a:"自律システム番号"},
{q:"AWS Site-to-Site VPNの暗号化に使われる代表的な技術は？",c:["IPsec","TLSだけ","SSHだけ","WEP"],a:"IPsec"},
{q:"VPNトンネルの状態監視に使えるサービスは？",c:["Amazon CloudWatch","Amazon Polly","AWS Glue","Amazon Rekognition"],a:"Amazon CloudWatch"},

{q:"Direct ConnectでオンプレからVPCに接続する際、CIDR重複があるとどうなる？",c:["ルーティングが困難になる","必ず高速化する","無料になる","DNSが不要になる"],a:"ルーティングが困難になる"},
{q:"ハイブリッド接続設計で最初に確認すべきことは？",c:["CIDR重複と経路要件","EC2のAMI名","S3のバケット色","IAMユーザーの表示名"],a:"CIDR重複と経路要件"},
{q:"オンプレミスから複数VPCへ接続を集約する代表的な構成は？",c:["Transit Gatewayを使う","全VPCに個別Internet Gatewayを作る","CloudFrontを使う","S3を使う"],a:"Transit Gatewayを使う"},
{q:"多数のVPCとオンプレをフルメッシュVPNで接続する問題点は？",c:["管理が複雑になる","必ず通信できない","料金がゼロになる","IAMが不要になる"],a:"管理が複雑になる"},
{q:"Transit Gatewayを使ったハイブリッド接続の利点は？",c:["VPCとVPN/DX接続を集約できる","S3の容量が増える","EC2のCPUが増える","Route 53が不要になる"],a:"VPCとVPN/DX接続を集約できる"},

{q:"Transit GatewayのVPNアタッチメントとは？",c:["VPNをTGWに接続するための関連付け","S3をTGWへ接続する機能","EC2を暗号化する機能","DNSを購入する機能"],a:"VPNをTGWに接続するための関連付け"},
{q:"Transit GatewayのVPCアタッチメントとは？",c:["VPCをTGWに接続するための関連付け","IAMユーザーをTGWに接続する機能","S3を公開する機能","CloudTrailを保存する機能"],a:"VPCをTGWに接続するための関連付け"},
{q:"TGWルートテーブルで制御できるものは？",c:["アタッチメント間の通信経路","IAMパスワード","S3暗号化キー","CloudFrontキャッシュ"],a:"アタッチメント間の通信経路"},
{q:"本番VPCと開発VPCをTGW上で分離する方法は？",c:["別々のTGWルートテーブルを使う","同じルートテーブルに全て入れる","CIDRを重複させる","全通信を許可する"],a:"別々のTGWルートテーブルを使う"},
{q:"Direct ConnectとTransit Gatewayを接続する場合に使うVIFは？",c:["Transit VIF","Public VIFのみ","Hosted Zone","Gateway Endpoint"],a:"Transit VIF"},

{q:"Hosted Connectionとは？",c:["DXパートナー経由で提供される接続","AWSが自動作成するVPN","CloudFront接続","S3専用接続"],a:"DXパートナー経由で提供される接続"},
{q:"Hosted VIFとは？",c:["別AWSアカウントに提供できる仮想インターフェイス","EC2の仮想NIC","S3のDNS名","Route 53レコード"],a:"別AWSアカウントに提供できる仮想インターフェイス"},
{q:"Direct Connectの通信は通常どのような特徴を持つ？",c:["インターネットを経由しない専用接続","必ずインターネット経由","Wi-Fi接続","CloudFront専用"],a:"インターネットを経由しない専用接続"},
{q:"Direct Connectで通信暗号化が必要な場合の選択肢は？",c:["DX上でVPNを併用する","暗号化は絶対不可","Internet Gatewayを削除する","S3を無効化する"],a:"DX上でVPNを併用する"},
{q:"MACsecを利用できるDirect Connectの目的は？",c:["レイヤー2暗号化","DNS転送","S3ライフサイクル","EC2自動停止"],a:"レイヤー2暗号化"},

{q:"オンプレDNSとVPC DNSを連携するサービスは？",c:["Route 53 Resolver","AWS WAF","Amazon GuardDuty","AWS Backup"],a:"Route 53 Resolver"},
{q:"オンプレからVPC内のプライベートホスト名を解決するには？",c:["Inbound Resolver Endpoint","Outbound Resolver Endpoint","NAT Gateway","Internet Gateway"],a:"Inbound Resolver Endpoint"},
{q:"VPCからオンプレDNSへ問い合わせを転送するには？",c:["Outbound Resolver Endpoint","Inbound Resolver Endpoint","CloudFront","EBS"],a:"Outbound Resolver Endpoint"},
{q:"Route 53 Resolver Ruleの用途は？",c:["特定ドメインの転送先DNSを指定する","EC2のIPを固定する","VPC CIDRを変える","S3を圧縮する"],a:"特定ドメインの転送先DNSを指定する"},
{q:"ハイブリッドDNSで注意すべきことは？",c:["名前解決ループを避ける","IAMを削除する","SGを全開放する","NATを必ず削除する"],a:"名前解決ループを避ける"},

{q:"Private Hosted Zoneをオンプレから解決したい場合に必要な構成は？",c:["Route 53 Resolver Inbound Endpoint","Internet Gatewayのみ","CloudFrontのみ","NAT Gatewayのみ"],a:"Route 53 Resolver Inbound Endpoint"},
{q:"オンプレの社内ドメインをVPCから解決したい場合に使うものは？",c:["Resolver Outbound EndpointとForwarding Rule","ALB Listener","S3 Endpoint","CloudTrail Trail"],a:"Resolver Outbound EndpointとForwarding Rule"},
{q:"Resolver Endpointはどこに作成する？",c:["VPCのサブネット","S3バケット","CloudFrontエッジ","IAMグループ"],a:"VPCのサブネット"},
{q:"Resolver Endpointの高可用性設計として適切なのは？",c:["複数AZにIPを配置する","1つのAZに限定する","NACLを削除する","DNSを無効化する"],a:"複数AZにIPを配置する"},
{q:"DNS Firewallの用途は？",c:["不正ドメインへのDNS問い合わせを制御する","EC2を起動する","DXを作る","S3を複製する"],a:"不正ドメインへのDNS問い合わせを制御する"},

{q:"オンプレからAWSへ閉域でS3アクセスしたい場合の選択肢は？",c:["Direct Connect Public VIFやPrivateLink等を検討する","必ずInternet Gatewayだけを使う","IAMを削除する","NACLを無効化する"],a:"Direct Connect Public VIFやPrivateLink等を検討する"},
{q:"S3 Gateway Endpointはどこから利用するものか？",c:["VPC内リソース","オンプレから直接","CloudFrontのみ","IAMユーザーのみ"],a:"VPC内リソース"},
{q:"オンプレからInterface Endpointへ接続するには何が必要か？",c:["VPCへの到達性とDNS解決","CloudFront OAC","S3静的Webサイト","IAMユーザー名"],a:"VPCへの到達性とDNS解決"},
{q:"PrivateLinkの利点は？",c:["サービスをプライベートIP経由で公開・利用できる","BGPが不要になるだけ","EC2のCPUを増やす","S3を削除する"],a:"サービスをプライベートIP経由で公開・利用できる"},
{q:"オンプレからPrivateLinkサービスを利用する際に重要なのは？",c:["DX/VPN経由の到達性とプライベートDNS","CloudFrontキャッシュ","EC2 AMI","IAM MFAのみ"],a:"DX/VPN経由の到達性とプライベートDNS"},

{q:"ハイブリッド接続で経路優先度に影響するものは？",c:["BGP属性や最長一致","S3バケット名","EC2タグ","IAMユーザー名"],a:"BGP属性や最長一致"},
{q:"ルーティングで最も優先される基本ルールは？",c:["最長プレフィックス一致","作成日時が新しい順","アルファベット順","料金が安い順"],a:"最長プレフィックス一致"},
{q:"Direct ConnectとVPNの両方で同じ経路を学習した場合に考慮するものは？",c:["経路優先度と冗長化設計","S3のバージョニング","CloudTrailの保存期間","IAMグループ名"],a:"経路優先度と冗長化設計"},
{q:"BGPで経路選択に使われる属性の一例は？",c:["AS_PATH","HTTP Header","S3 Prefix","Lambda Layer"],a:"AS_PATH"},
{q:"オンプレ側からAWSへの経路を制御する方法として適切なのは？",c:["BGP広告経路を設計する","CloudFrontを削除する","IAMユーザーを増やす","S3を公開する"],a:"BGP広告経路を設計する"},

{q:"Site-to-Site VPNでトンネルの片方が停止した場合の理想的な動作は？",c:["もう片方のトンネルへフェイルオーバーする","全通信が必ず停止する","S3が削除される","DNSが永久停止する"],a:"もう片方のトンネルへフェイルオーバーする"},
{q:"VPNの冗長性を高めるためオンプレ側で重要なことは？",c:["両方のトンネルを監視・利用できる設定にする","1本だけ設定する","BGPを無効にする","IPsecを使わない"],a:"両方のトンネルを監視・利用できる設定にする"},
{q:"Direct Connect障害時にVPNへ切り替える設計で重要なのは？",c:["経路優先度とフェイルオーバー確認","S3の暗号化のみ","CloudFrontの圧縮のみ","IAMの表示名"],a:"経路優先度とフェイルオーバー確認"},
{q:"ハイブリッド接続の疎通確認に使えるAWSツールは？",c:["Reachability AnalyzerやCloudWatch","Amazon Polly","AWS Glue Studio","Amazon Lex"],a:"Reachability AnalyzerやCloudWatch"},
{q:"VPNのトンネルメトリクス確認に使うサービスは？",c:["CloudWatch","Route 53 Registrar","AWS Artifact","Amazon Macieのみ"],a:"CloudWatch"},

{q:"ハイブリッド環境のログ監査で役立つものは？",c:["VPC Flow Logs","Amazon Translate","AWS DeepRacer","AWS IQ"],a:"VPC Flow Logs"},
{q:"VPC Flow Logsで確認できるものは？",c:["通信のACCEPT/REJECT","HTTPS本文全文","パスワード","SQL実行内容"],a:"通信のACCEPT/REJECT"},
{q:"オンプレからAWSへの通信が失敗する場合に確認すべきものは？",c:["ルート、SG、NACL、VPN/DX状態","S3ライフサイクルだけ","IAMユーザー名だけ","CloudFront圧縮だけ"],a:"ルート、SG、NACL、VPN/DX状態"},
{q:"VPN接続でNACLを確認する理由は？",c:["ステートレスなので戻り通信も許可が必要なため","IAMを変更するため","DNSを購入するため","EC2を停止するため"],a:"ステートレスなので戻り通信も許可が必要なため"},
{q:"セキュリティグループでオンプレCIDRを許可する用途は？",c:["オンプレからEC2等への通信を許可する","S3を圧縮する","CloudFrontを作る","IAMを削除する"],a:"オンプレからEC2等への通信を許可する"},

{q:"AWS Client VPNの用途は？",c:["個別ユーザー端末からVPCへVPN接続する","オンプレルーター同士を専用線接続する","S3を公開する","DNSを購入する"],a:"個別ユーザー端末からVPCへVPN接続する"},
{q:"Client VPNで認証に使えるものは？",c:["証明書やフェデレーション認証","S3バケット名","CloudFront OAC","NAT Gateway"],a:"証明書やフェデレーション認証"},
{q:"Client VPNのターゲットネットワークとして関連付けるものは？",c:["VPCのサブネット","CloudFront Distribution","IAM Group","S3 Bucket"],a:"VPCのサブネット"},
{q:"Client VPNとSite-to-Site VPNの違いは？",c:["Client VPNはユーザー端末向け、Site-to-Siteは拠点間接続向け","完全に同じ","Client VPNはS3専用","Site-to-SiteはDNS専用"],a:"Client VPNはユーザー端末向け、Site-to-Siteは拠点間接続向け"},
{q:"Client VPNで接続ユーザーごとの制御に関係するものは？",c:["認可ルール","S3ライフサイクル","CloudTrail Trail名","EC2 AMI ID"],a:"認可ルール"},

{q:"AWS Cloud WANの目的は？",c:["グローバルネットワークを一元的に構築・管理する","S3を高速化する","IAMを削除する","EC2のAMIを作る"],a:"グローバルネットワークを一元的に構築・管理する"},
{q:"Cloud WANが向いているケースは？",c:["多数の拠点・VPCをグローバルに統合管理する","単一EC2だけを公開する","S3バケットだけを作る","CloudFrontだけを使う"],a:"多数の拠点・VPCをグローバルに統合管理する"},
{q:"Transit Gateway Network Managerの用途は？",c:["TGWを中心としたネットワークを可視化・監視する","S3を暗号化する","IAMを作る","Lambdaを実行する"],a:"TGWを中心としたネットワークを可視化・監視する"},
{q:"Network Managerで確認しやすいものは？",c:["グローバルネットワークのトポロジ","S3オブジェクト本文","IAMパスワード","EC2のアプリログ全文"],a:"グローバルネットワークのトポロジ"},
{q:"Cloud WANのセグメントの考え方は？",c:["ネットワークを論理的に分離する","EC2 CPUを分割する","S3を分割する","DNSを削除する"],a:"ネットワークを論理的に分離する"},

{q:"ハイブリッド構成でマルチアカウント接続を共有するサービスは？",c:["AWS Resource Access Manager","Amazon Comprehend","AWS Glue","Amazon Textract"],a:"AWS Resource Access Manager"},
{q:"Transit Gatewayを他アカウントと共有する場合に使うものは？",c:["AWS RAM","AWS Backup","Amazon Polly","AWS Device Farm"],a:"AWS RAM"},
{q:"中央ネットワークアカウントを使う利点は？",c:["接続とルーティング管理を集約できる","すべて無料になる","SGが不要になる","DNSが使えなくなる"],a:"接続とルーティング管理を集約できる"},
{q:"AWS Organizations環境でネットワーク統制を強める仕組みは？",c:["SCPや専用ネットワークアカウント","S3公開のみ","IAMユーザー共有","CloudFront削除"],a:"SCPや専用ネットワークアカウント"},
{q:"複数アカウントのVPCをオンプレへ集約接続する設計でよく使うものは？",c:["Transit Gateway共有","各EC2のElastic IP","S3静的ホスティング","CloudWatch Dashboardのみ"],a:"Transit Gateway共有"},

{q:"ハイブリッド接続で帯域要件を満たすために検討するものは？",c:["DX接続速度やLAG","IAMグループ数","S3バケット名","CloudFront CNAME"],a:"DX接続速度やLAG"},
{q:"低遅延で安定したオンプレ接続が必要な場合の第一候補は？",c:["Direct Connect","Site-to-Site VPNのみ","Client VPN","Internet Gatewayのみ"],a:"Direct Connect"},
{q:"すぐに拠点間接続を開始したい場合に導入しやすいものは？",c:["Site-to-Site VPN","Direct Connect専用線のみ","Cloud WANのみ","MACsecのみ"],a:"Site-to-Site VPN"},
{q:"Direct Connect導入に時間がかかる理由として正しいものは？",c:["物理接続や回線手配が必要なため","S3作成に時間がかかるため","IAMが使えないため","CloudTrailが必要なため"],a:"物理接続や回線手配が必要なため"},
{q:"VPNの欠点として考慮すべきものは？",c:["インターネット品質に影響される場合がある","暗号化できない","VPCに接続できない","BGPを使えない"],a:"インターネット品質に影響される場合がある"},

{q:"オンプレとAWS間の通信を暗号化しつつ専用線の安定性も使いたい場合は？",c:["Direct Connect上にVPNを構成する","Internet Gatewayのみ使う","NACLを削除する","S3を公開する"],a:"Direct Connect上にVPNを構成する"},
{q:"Direct ConnectでプライベートIP通信を行うには何が必要か？",c:["Private VIF","Public Hosted Zone","NAT Gateway","CloudFront Function"],a:"Private VIF"},
{q:"DXで複数VPCへ接続する際に設計を簡素化するものは？",c:["Direct Connect Gateway","NAT Instance","S3 Gateway Endpoint","AWS WAF"],a:"Direct Connect Gateway"},
{q:"VPN接続でオンプレ側グローバルIPをAWSに登録するリソースは？",c:["Customer Gateway","Virtual Private Gateway","Internet Gateway","Egress-only IGW"],a:"Customer Gateway"},
{q:"VPN接続でAWS側のルートテーブルに必要な設定は？",c:["オンプレCIDR宛のルート","CloudFront宛のCNAME","S3ライフサイクル","IAMロール信頼関係"],a:"オンプレCIDR宛のルート"},

{q:"ハイブリッド環境で戻り通信が失敗する典型原因は？",c:["ルート非対称や戻りルート不足","S3タグ不足","IAM表示名不足","CloudFront圧縮不足"],a:"ルート非対称や戻りルート不足"},
{q:"非対称ルーティングが問題になることがある理由は？",c:["ステートフル機器やファイアウォールで通信が破棄される場合がある","S3が消えるため","DNSが購入できないため","EC2が停止するため"],a:"ステートフル機器やファイアウォールで通信が破棄される場合がある"},
{q:"AWS Network Firewallをハイブリッド通信に挿入する目的は？",c:["オンプレ-AWS間通信を検査・制御する","DX帯域を無料にする","DNSを購入する","EC2を自動作成する"],a:"オンプレ-AWS間通信を検査・制御する"},
{q:"Gateway Load Balancerを使うハイブリッド設計の用途は？",c:["サードパーティFWを通信経路に挿入する","S3を公開する","IAMを監査する","CloudFront証明書を発行する"],a:"サードパーティFWを通信経路に挿入する"},
{q:"アプライアンス経由の通信設計で重要なのは？",c:["ルートテーブルで対称経路を設計する","すべてのルートを削除する","CIDRを重複させる","DNSを無効にする"],a:"ルートテーブルで対称経路を設計する"},

{q:"オンプレからAWSのプライベートIPへ接続できないとき、まず見るべきAWS側設定は？",c:["VPCルートテーブルとSG/NACL","S3バケット名","IAMユーザー写真","CloudFrontログ"],a:"VPCルートテーブルとSG/NACL"},
{q:"Direct ConnectのBGPセッションがDownの場合に確認するものは？",c:["ピアIP、ASN、認証、物理接続","S3ライフサイクル","IAM MFA","CloudFront OAC"],a:"ピアIP、ASN、認証、物理接続"},
{q:"VPNトンネルがDownの場合に確認するものは？",c:["IKE/IPsec設定とCustomer Gateway情報","S3イベント通知","Lambda Layer","Route 53ドメイン期限"],a:"IKE/IPsec設定とCustomer Gateway情報"},
{q:"ハイブリッドDNSで名前解決はできるが通信できない場合に疑うものは？",c:["ルートやセキュリティ制御","DNSだけ","S3ライフサイクル","IAM表示名"],a:"ルートやセキュリティ制御"},
{q:"通信はできるが名前解決できない場合に確認するものは？",c:["Resolver EndpointとDNSルール","NAT Gateway帯域だけ","EC2 CPUだけ","CloudTrail証跡名"],a:"Resolver EndpointとDNSルール"},

{q:"ハイブリッド接続の設計でRTO/RPOに関係する観点は？",c:["障害時の切替時間とデータ保護設計","IAMユーザー数","S3タグ名","EC2キーペア名"],a:"障害時の切替時間とデータ保護設計"},
{q:"アクティブ/アクティブの接続設計とは？",c:["複数経路を同時利用する設計","予備経路を完全停止する設計","単一回線だけの設計","DNSを使わない設計"],a:"複数経路を同時利用する設計"},
{q:"アクティブ/スタンバイの接続設計とは？",c:["通常経路障害時に待機経路へ切り替える設計","全経路を常時同時利用する設計","接続を作らない設計","S3専用設計"],a:"通常経路障害時に待機経路へ切り替える設計"},
{q:"BGPでアクティブ/スタンバイを実現する際に使う考え方は？",c:["経路属性で優先度を調整する","IAMグループを増やす","S3を公開する","DNS TTLを0にする"],a:"経路属性で優先度を調整する"},
{q:"フェイルオーバー試験を行う理由は？",c:["障害時に想定通り経路が切り替わるか確認するため","S3容量を増やすため","IAMを削除するため","EC2価格を下げるため"],a:"障害時に想定通り経路が切り替わるか確認するため"},

{q:"ハイブリッド接続でセキュリティ境界を明確にするため有効なものは？",c:["専用検査VPCやネットワークファイアウォール","全VPCを無条件接続","全ポート開放","NACL削除"],a:"専用検査VPCやネットワークファイアウォール"},
{q:"検査VPCを使う設計の目的は？",c:["トラフィックを集中検査する","S3を削除する","IAMを不要にする","DNSを無効化する"],a:"トラフィックを集中検査する"},
{q:"ハイブリッド環境で最小権限の通信制御をするには？",c:["必要なCIDRとポートだけ許可する","0.0.0.0/0を全許可する","全NACLを削除する","全SGを共通化する"],a:"必要なCIDRとポートだけ許可する"},
{q:"オンプレからDBへ接続させる場合の推奨に近い設計は？",c:["DBをプライベートサブネットに置き必要な送信元だけ許可する","DBをインターネット公開する","全ポートを開放する","Route 53を削除する"],a:"DBをプライベートサブネットに置き必要な送信元だけ許可する"},
{q:"ハイブリッド接続の本番運用で重要な監視対象は？",c:["トンネル状態、BGP状態、帯域、パケットドロップ","S3タグ色","IAMユーザー名","CloudFrontロゴ"],a:"トンネル状態、BGP状態、帯域、パケットドロップ"},

{q:"Direct Connectのメンテナンスや障害に備える方法は？",c:["冗長接続とVPNバックアップを用意する","単一接続だけにする","監視をしない","BGPを使わない"],a:"冗長接続とVPNバックアップを用意する"},
{q:"オンプレミス拠点が複数ある場合に考慮すべきことは？",c:["拠点ごとの経路、冗長性、集約ポイント","S3バケット名だけ","IAMユーザー写真","CloudFront圧縮"],a:"拠点ごとの経路、冗長性、集約ポイント"},
{q:"SD-WANとAWSを連携する選択肢として適切なのは？",c:["Transit Gateway Connect","S3 Gateway Endpoint","CloudFront OAC","IAM Access Analyzer"],a:"Transit Gateway Connect"},
{q:"Transit Gateway Connectで使われる技術は？",c:["GREとBGP","HTTPとSMTP","FTPとNFS","WAFとShield"],a:"GREとBGP"},
{q:"ハイブリッドネットワークのドキュメント化で重要なものは？",c:["CIDR、経路、接続、フェイルオーバー手順","EC2壁紙","IAM表示名","S3色設定"],a:"CIDR、経路、接続、フェイルオーバー手順"}

];