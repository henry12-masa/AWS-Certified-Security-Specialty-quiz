window.quizData = window.quizData || {};

window.quizData.ansNetworkDesign = [

{q:"VPC内でインターネット向け通信を可能にするため、パブリックサブネットに関連付ける代表的なゲートウェイは？",c:["Internet Gateway","NAT Gateway","Transit Gateway","Virtual Private Gateway"],a:"Internet Gateway"},
{q:"プライベートサブネットのEC2からインターネットへアウトバウンド通信させる代表的な構成は？",c:["NAT Gatewayを利用する","Internet Gatewayを直接関連付ける","Route 53を使う","AWS WAFを使う"],a:"NAT Gatewayを利用する"},
{q:"複数VPCやオンプレミスネットワークを集約接続するための中心的なサービスは？",c:["AWS Transit Gateway","Amazon CloudFront","AWS Direct Connect Gateway","Amazon Route 53"],a:"AWS Transit Gateway"},
{q:"VPCピアリングの特徴として正しいものは？",c:["推移的ルーティングはサポートされない","すべてのVPCへ自動で伝播される","NAT Gatewayが必須","同一リージョンのみ利用可能"],a:"推移的ルーティングはサポートされない"},
{q:"Transit Gatewayを利用する主なメリットは？",c:["多数のVPC接続をハブアンドスポークで簡素化できる","S3の暗号化を自動化できる","EC2のCPU性能を上げられる","DNS名を自動取得できる"],a:"多数のVPC接続をハブアンドスポークで簡素化できる"},

{q:"VPCのCIDR設計で避けるべきことは？",c:["接続予定のネットワークとCIDRが重複すること","十分なIPアドレスを確保すること","将来拡張を考慮すること","AZごとにサブネットを分けること"],a:"接続予定のネットワークとCIDRが重複すること"},
{q:"VPC作成後に追加できるものは？",c:["セカンダリCIDRブロック","プライマリCIDRの完全変更","リージョンの変更","AWSアカウントIDの変更"],a:"セカンダリCIDRブロック"},
{q:"高可用性を考慮したサブネット設計として適切なのは？",c:["複数AZにサブネットを配置する","1つのAZにすべて集約する","パブリックサブネットだけ作る","ルートテーブルを使わない"],a:"複数AZにサブネットを配置する"},
{q:"パブリックサブネットの条件として正しいものは？",c:["Internet Gatewayへのルートを持つ","NAT Gatewayへのルートを持つだけ","セキュリティグループが不要","CIDRが/16である"],a:"Internet Gatewayへのルートを持つ"},
{q:"プライベートサブネットの特徴として正しいものは？",c:["Internet Gatewayへの直接ルートを持たない","必ずパブリックIPを持つ","ルートテーブルを持てない","ELBを配置できない"],a:"Internet Gatewayへの直接ルートを持たない"},

{q:"サブネットはどの単位に属するリソースか？",c:["アベイラビリティゾーン","リージョン全体","グローバル","AWS Organizations"],a:"アベイラビリティゾーン"},
{q:"VPCはどの範囲のリソースか？",c:["リージョン単位","AZ単位","グローバル単位","エッジロケーション単位"],a:"リージョン単位"},
{q:"ルートテーブルの役割は？",c:["宛先CIDRごとの通信経路を定義する","IAM権限を管理する","DNSレコードを保存する","ログを暗号化する"],a:"宛先CIDRごとの通信経路を定義する"},
{q:"VPC内のローカル通信に自動的に存在するルートは？",c:["localルート","defaultルート","internetルート","natルート"],a:"localルート"},
{q:"0.0.0.0/0 の意味として正しいものは？",c:["IPv4の全宛先","VPC内通信のみ","特定サブネットのみ","IPv6通信のみ"],a:"IPv4の全宛先"},

{q:"IPv6の全宛先を表すルートは？",c:["::/0","0.0.0.0/0","127.0.0.1/32","169.254.0.0/16"],a:"::/0"},
{q:"IPv6でアウトバウンドのみ許可したい場合に利用するゲートウェイは？",c:["Egress-only Internet Gateway","NAT Gateway","Virtual Private Gateway","Customer Gateway"],a:"Egress-only Internet Gateway"},
{q:"NAT Gatewayの配置先として正しいものは？",c:["パブリックサブネット","プライベートサブネット","Route 53 hosted zone","CloudFront distribution"],a:"パブリックサブネット"},
{q:"NAT Gatewayを冗長化する設計として適切なのは？",c:["AZごとにNAT Gatewayを配置する","1つのAZだけに配置する","Internet Gatewayを削除する","すべての通信をVPC Peeringへ流す"],a:"AZごとにNAT Gatewayを配置する"},
{q:"NAT Gateway障害時のAZ間依存を避けるには？",c:["各AZのプライベートサブネットから同一AZのNAT Gatewayへルーティングする","全AZから1つのNAT Gatewayへ集約する","NACLを削除する","CIDRを重複させる"],a:"各AZのプライベートサブネットから同一AZのNAT Gatewayへルーティングする"},

{q:"セキュリティグループの特徴は？",c:["ステートフル","ステートレス","サブネット単位のみ適用","拒否ルールのみ設定可能"],a:"ステートフル"},
{q:"ネットワークACLの特徴は？",c:["ステートレス","ステートフル","ENI単位で適用","許可ルールのみ設定可能"],a:"ステートレス"},
{q:"セキュリティグループで設定できるルールは？",c:["許可ルール","拒否ルールのみ","ルート伝播","DNS転送"],a:"許可ルール"},
{q:"NACLで設定できるルールは？",c:["許可と拒否の両方","許可のみ","拒否のみ","IAMポリシーのみ"],a:"許可と拒否の両方"},
{q:"NACLの評価順序として正しいものは？",c:["ルール番号の小さい順","作成日時の新しい順","ランダム","CIDRの大きい順"],a:"ルール番号の小さい順"},

{q:"VPC Flow Logsで取得できる情報は？",c:["ENI単位のIPトラフィック情報","アプリケーションのSQL内容","HTTPリクエスト本文","IAMパスワード"],a:"ENI単位のIPトラフィック情報"},
{q:"VPC Flow Logsの出力先として利用できるものは？",c:["CloudWatch LogsやS3","Route 53 hosted zoneのみ","IAMのみ","CloudFrontのみ"],a:"CloudWatch LogsやS3"},
{q:"VPC Flow Logsで確認しやすい内容は？",c:["通信がACCEPTされたかREJECTされたか","EC2のOSユーザー名","HTTPS本文","DBクエリ全文"],a:"通信がACCEPTされたかREJECTされたか"},
{q:"AWS Network Firewallの用途は？",c:["VPC境界で詳細なネットワークトラフィック制御を行う","EC2のインスタンスタイプを変更する","S3の静的サイトを公開する","IAMユーザーを作成する"],a:"VPC境界で詳細なネットワークトラフィック制御を行う"},
{q:"Gateway Load Balancerの代表的な用途は？",c:["仮想アプライアンスを透過的に挿入する","DNS解決を高速化する","S3を高速化する","Lambdaをスケジュール実行する"],a:"仮想アプライアンスを透過的に挿入する"},

{q:"PrivateLinkの説明として正しいものは？",c:["VPCエンドポイント経由でサービスへプライベート接続できる","必ずインターネット経由になる","VPC CIDRを変更する機能","EC2のOS管理機能"],a:"VPCエンドポイント経由でサービスへプライベート接続できる"},
{q:"Interface VPC Endpointで利用されるものは？",c:["ENI","Internet Gateway","NAT Instance","Elastic Beanstalk"],a:"ENI"},
{q:"Gateway VPC Endpointで対応する代表的なAWSサービスは？",c:["Amazon S3とDynamoDB","EC2とLambda","CloudFrontとWAF","RDSとEFS"],a:"Amazon S3とDynamoDB"},
{q:"S3へインターネットを通さずアクセスしたい場合の代表的な選択肢は？",c:["Gateway VPC Endpoint","Internet Gateway","NAT Gatewayのみ","Elastic IPのみ"],a:"Gateway VPC Endpoint"},
{q:"Interface Endpointのセキュリティ制御に使えるものは？",c:["セキュリティグループ","CloudFront Functions","Route 53 Registrar","S3ライフサイクル"],a:"セキュリティグループ"},

{q:"Route 53 Resolverの主な役割は？",c:["VPCとオンプレミス間のDNS名前解決を連携する","EC2を自動スケールする","S3を暗号化する","CloudWatchアラームを作る"],a:"VPCとオンプレミス間のDNS名前解決を連携する"},
{q:"オンプレミスからVPC内のプライベートDNSを解決したい場合に使うエンドポイントは？",c:["Inbound Resolver Endpoint","Outbound Resolver Endpoint","NAT Gateway","Internet Gateway"],a:"Inbound Resolver Endpoint"},
{q:"VPCからオンプレミスDNSへ問い合わせを転送したい場合に使うエンドポイントは？",c:["Outbound Resolver Endpoint","Inbound Resolver Endpoint","Egress-only Internet Gateway","Transit Gateway Attachment"],a:"Outbound Resolver Endpoint"},
{q:"Route 53 Resolver Ruleの用途は？",c:["特定ドメインのDNS問い合わせ転送先を定義する","BGP AS番号を設定する","EC2の秘密鍵を管理する","HTTPヘッダーを書き換える"],a:"特定ドメインのDNS問い合わせ転送先を定義する"},
{q:"Private Hosted Zoneを関連付ける対象は？",c:["VPC","CloudFront Distribution","IAM Group","S3バケットのみ"],a:"VPC"},

{q:"Elastic Load BalancingでL7のHTTP/HTTPSルーティングに適したものは？",c:["Application Load Balancer","Network Load Balancer","Gateway Load Balancer","ClassicLink"],a:"Application Load Balancer"},
{q:"超低レイテンシでTCP/UDP処理に適したロードバランサーは？",c:["Network Load Balancer","Application Load Balancer","Route 53 Resolver","CloudTrail"],a:"Network Load Balancer"},
{q:"ALBで利用できるルーティングは？",c:["パスベースルーティング","BGPルーティング","CIDR自動割当","VPC作成"],a:"パスベースルーティング"},
{q:"NLBの特徴として正しいものは？",c:["固定IPアドレスを利用しやすい","HTTPパスルーティング専用","WAFを直接必須化する","S3専用"],a:"固定IPアドレスを利用しやすい"},
{q:"ELBを複数AZに配置する主な理由は？",c:["高可用性を確保するため","料金を必ず無料にするため","IAM権限をなくすため","DNSを不要にするため"],a:"高可用性を確保するため"},

{q:"Route 53のレイテンシールーティングの目的は？",c:["ユーザーから低遅延のリージョンへ誘導する","最も安いAZへ誘導する","EC2を停止する","VPCを削除する"],a:"ユーザーから低遅延のリージョンへ誘導する"},
{q:"Route 53のフェイルオーバールーティングに必要な代表的機能は？",c:["ヘルスチェック","NAT Gateway","IAM Access Analyzer","EBS Snapshot"],a:"ヘルスチェック"},
{q:"加重ルーティングの用途は？",c:["トラフィックを比率で分散する","暗号鍵を管理する","VPC CIDRを拡張する","EC2にSSHする"],a:"トラフィックを比率で分散する"},
{q:"地理位置情報ルーティングの用途は？",c:["ユーザーの地域に基づき応答先を変える","CPU使用率でルーティングする","IAMロールで分岐する","S3容量で分岐する"],a:"ユーザーの地域に基づき応答先を変える"},
{q:"複数値回答ルーティングの特徴は？",c:["正常な複数リソースのIPを返せる","BGPを必ず使う","VPCを結合する","CloudFront専用"],a:"正常な複数リソースのIPを返せる"},

{q:"CloudFrontの主な役割は？",c:["エッジロケーションからコンテンツを配信する","VPC CIDRを管理する","NACLを作成する","BGP経路を広告する"],a:"エッジロケーションからコンテンツを配信する"},
{q:"CloudFrontでオリジンとして利用できるものは？",c:["S3やALB","IAMユーザー","Security Group","Route Tableのみ"],a:"S3やALB"},
{q:"CloudFrontでHTTPS証明書を使う場合、ACM証明書を配置するリージョンは？",c:["us-east-1","ap-northeast-1のみ","eu-west-1のみ","任意のAZ"],a:"us-east-1"},
{q:"CloudFrontのキャッシュ動作を制御する設定は？",c:["Cache Policy","Transit Gateway Route Table","NACL Rule","IAM Permission Boundary"],a:"Cache Policy"},
{q:"CloudFrontで送信元アクセスをS3に限定する仕組みは？",c:["Origin Access Control","NAT Gateway","Egress-only IGW","VPC Peering"],a:"Origin Access Control"},

{q:"AWS Global Acceleratorの主な目的は？",c:["AWSグローバルネットワークでアプリへの経路を最適化する","S3のバージョニングを有効化する","EC2 AMIを作る","DNSゾーンを削除する"],a:"AWSグローバルネットワークでアプリへの経路を最適化する"},
{q:"Global Acceleratorで利用される固定IPは？",c:["Anycast IP","プライベートIPのみ","リンクローカルIPのみ","Elastic Fabric Adapter"],a:"Anycast IP"},
{q:"Global Acceleratorが向いている用途は？",c:["低遅延・高可用なグローバルアプリ接続","VPC内限定のDNS転送","EC2のログ収集","IAM認証"],a:"低遅延・高可用なグローバルアプリ接続"},
{q:"CloudFrontとGlobal Acceleratorの違いとして正しいものは？",c:["CloudFrontは主にコンテンツ配信、Global Acceleratorはアプリ接続最適化","両方ともVPC専用","Global AcceleratorはS3専用","CloudFrontはBGP専用"],a:"CloudFrontは主にコンテンツ配信、Global Acceleratorはアプリ接続最適化"},
{q:"Global Acceleratorのエンドポイントにできる代表例は？",c:["ALBやNLB","IAMユーザー","Route Table","S3 Glacier Vaultのみ"],a:"ALBやNLB"},

{q:"Direct Connectの主な用途は？",c:["オンプレミスとAWSを専用線で接続する","VPC内のDNSを変更する","Lambdaを実行する","CloudFrontを無効化する"],a:"オンプレミスとAWSを専用線で接続する"},
{q:"Site-to-Site VPNの主な用途は？",c:["インターネット経由で暗号化トンネルを作る","専用線だけで接続する","S3の静的ホスティングを有効化する","CloudTrailを保存する"],a:"インターネット経由で暗号化トンネルを作る"},
{q:"Direct Connectで冗長性を高める設計は？",c:["複数ロケーションや複数接続を使う","1本の接続だけにする","BGPを無効にする","VPC CIDRを重複させる"],a:"複数ロケーションや複数接続を使う"},
{q:"Direct Connect Gatewayの用途は？",c:["複数リージョンのVPC接続をDXと連携しやすくする","EC2にパブリックIPを付ける","S3を暗号化する","NACLを管理する"],a:"複数リージョンのVPC接続をDXと連携しやすくする"},
{q:"VPN接続でAWS側に作成するゲートウェイの代表例は？",c:["Virtual Private GatewayまたはTransit Gateway","Internet Gatewayのみ","NAT Gatewayのみ","CloudFront Distribution"],a:"Virtual Private GatewayまたはTransit Gateway"},

{q:"Customer Gatewayとは？",c:["オンプレミス側VPN装置をAWS上で表すリソース","AWS側のInternet Gateway","S3のエンドポイント","Route 53のDNSサーバー"],a:"オンプレミス側VPN装置をAWS上で表すリソース"},
{q:"Site-to-Site VPNで高可用性のため標準的に作成されるものは？",c:["2本のVPNトンネル","1つのS3バケット","1つのIAMユーザー","1つのCloudFront関数"],a:"2本のVPNトンネル"},
{q:"BGPの用途として正しいものは？",c:["動的ルーティングで経路情報を交換する","HTTPを暗号化する","S3を圧縮する","EC2をバックアップする"],a:"動的ルーティングで経路情報を交換する"},
{q:"静的ルーティングと比較した動的ルーティングの利点は？",c:["経路変更に追従しやすい","必ず安価になる","DNSが不要になる","セキュリティグループが不要になる"],a:"経路変更に追従しやすい"},
{q:"ASNとは何に関連する番号か？",c:["BGPの自律システム","S3バケット","IAMポリシー","CloudWatchメトリクス"],a:"BGPの自律システム"},

{q:"Transit Gateway Route Tableの役割は？",c:["アタッチメント間のルーティングを制御する","S3のアクセス権を制御する","EC2のCPUを制限する","DNS名を登録する"],a:"アタッチメント間のルーティングを制御する"},
{q:"Transit Gateway Attachmentの対象として正しいものは？",c:["VPCやVPN","IAMユーザー","S3オブジェクト","CloudWatch Log Group"],a:"VPCやVPN"},
{q:"Transit Gatewayでネットワーク分離を行う方法は？",c:["複数のTGWルートテーブルを使い関連付けを分ける","すべてを同じルートテーブルに集約する","CIDRを重複させる","NAT Gatewayを削除する"],a:"複数のTGWルートテーブルを使い関連付けを分ける"},
{q:"Transit Gateway Connectの用途は？",c:["SD-WANなどのアプライアンスとGRE/BGPで接続する","S3に直接接続する","CloudFrontを作る","IAM認証を行う"],a:"SD-WANなどのアプライアンスとGRE/BGPで接続する"},
{q:"TGW Peeringの用途は？",c:["Transit Gateway同士を接続する","EC2同士をSSH接続する","S3バケットを同期する","Route 53レコードを削除する"],a:"Transit Gateway同士を接続する"},

{q:"AWS RAMを使うネットワーク設計例として正しいものは？",c:["Transit Gatewayを複数アカウントで共有する","EC2のAMIを自動削除する","S3をCDN化する","WAFルールを無効化する"],a:"Transit Gatewayを複数アカウントで共有する"},
{q:"マルチアカウント環境で共有VPC設計に使うサービスは？",c:["AWS Resource Access Manager","AWS Batch","Amazon Polly","Amazon Rekognition"],a:"AWS Resource Access Manager"},
{q:"共有VPCの利点は？",c:["ネットワーク管理を集約しつつ参加アカウントがリソースを配置できる","すべての通信が無料になる","IAMが不要になる","リージョン制限がなくなる"],a:"ネットワーク管理を集約しつつ参加アカウントがリソースを配置できる"},
{q:"複数アカウントのネットワーク統制に役立つAWSサービスは？",c:["AWS Organizations","Amazon Translate","Amazon Lex","AWS Glue DataBrew"],a:"AWS Organizations"},
{q:"中央集権型ネットワークアカウントで管理しやすいものは？",c:["Transit Gatewayや共有VPC","個人のIAMパスワード","EC2内のアプリコード","S3オブジェクト本文"],a:"Transit Gatewayや共有VPC"},

{q:"VPC Reachability Analyzerの用途は？",c:["送信元から宛先までの到達性を分析する","S3を暗号化する","EC2を起動する","DNSドメインを購入する"],a:"送信元から宛先までの到達性を分析する"},
{q:"Network Access Analyzerの用途は？",c:["意図しないネットワークアクセス経路を検出する","CloudFrontを高速化する","IAMユーザーを削除する","EBSを拡張する"],a:"意図しないネットワークアクセス経路を検出する"},
{q:"到達性確認で確認対象になりやすい設定は？",c:["ルートテーブル、SG、NACL","S3ライフサイクルのみ","IAMユーザー名のみ","CloudWatchダッシュボードのみ"],a:"ルートテーブル、SG、NACL"},
{q:"VPC Traffic Mirroringの用途は？",c:["ENIの通信を監視アプライアンスへ複製する","NAT Gatewayを作成する","DNSを登録する","S3に静的サイトを作る"],a:"ENIの通信を監視アプライアンスへ複製する"},
{q:"Traffic Mirroringの一般的な利用目的は？",c:["侵入検知や詳細パケット分析","EC2料金削減のみ","DNS登録","CloudFrontキャッシュ削除"],a:"侵入検知や詳細パケット分析"},

{q:"EC2インスタンスに複数のネットワークインターフェイスを付ける用途は？",c:["管理用とデータ用の通信分離","S3の容量拡張","IAM権限昇格","Route 53登録"],a:"管理用とデータ用の通信分離"},
{q:"Elastic IPの特徴は？",c:["静的なパブリックIPv4アドレス","動的なプライベートIPv6のみ","VPC CIDRそのもの","DNSゾーン"],a:"静的なパブリックIPv4アドレス"},
{q:"ENIに関連付けられるものは？",c:["プライベートIPアドレス","S3バケットポリシー","CloudFront証明書","IAMグループ"],a:"プライベートIPアドレス"},
{q:"送信元/送信先チェックを無効化する代表的なケースは？",c:["NATインスタンスやルーター用途のEC2","通常のWebサーバー","S3バケット","Route 53 hosted zone"],a:"NATインスタンスやルーター用途のEC2"},
{q:"ジャンボフレームに関連するネットワーク設定は？",c:["MTU","TTL","IAM","KMS"],a:"MTU"},

{q:"AWSで一般的なVPC内MTUは？",c:["9001を利用できる場合がある","常に1500固定","常に576固定","MTUは存在しない"],a:"9001を利用できる場合がある"},
{q:"VPN接続でMTU設計が重要な理由は？",c:["暗号化ヘッダーによりフラグメントが起こり得るため","IAM認証が必要なため","S3が使えないため","DNSが無効になるため"],a:"暗号化ヘッダーによりフラグメントが起こり得るため"},
{q:"Path MTU Discoveryで使われる代表的なプロトコルは？",c:["ICMP","SMTP","FTP","LDAP"],a:"ICMP"},
{q:"通信遅延を小さくする設計として適切なのは？",c:["利用者に近いリージョンやエッジを活用する","常に遠いリージョンを使う","NACLを全拒否にする","DNSを無効化する"],a:"利用者に近いリージョンやエッジを活用する"},
{q:"高スループットが必要なEC2間通信で考慮するものは？",c:["拡張ネットワーキングやインスタンスタイプ","IAMユーザー名","S3バケット名","Route 53レコード数"],a:"拡張ネットワーキングやインスタンスタイプ"},

{q:"Elastic Network Adapterに関連する機能は？",c:["拡張ネットワーキング","S3暗号化","CloudFrontキャッシュ","Route 53登録"],a:"拡張ネットワーキング"},
{q:"Placement GroupのClusterタイプが向いている用途は？",c:["低レイテンシ・高帯域な密結合通信","災害対策で広域分散","DNSフェイルオーバー","S3静的配信"],a:"低レイテンシ・高帯域な密結合通信"},
{q:"Partition Placement Groupが向いている用途は？",c:["大規模分散ワークロードの障害分離","単一AZ内の最低遅延だけ","CloudFront配信","IAM管理"],a:"大規模分散ワークロードの障害分離"},
{q:"Spread Placement Groupの目的は？",c:["インスタンスを別ハードウェアに分散する","同一ラックに集約する","S3を高速化する","DNSを転送する"],a:"インスタンスを別ハードウェアに分散する"},
{q:"ネットワーク設計で単一障害点を避ける方法は？",c:["複数AZ・複数接続を使う","1つのAZへ集約する","1つのVPNトンネルのみ使う","ルートを1本だけにする"],a:"複数AZ・複数接続を使う"},

{q:"マルチリージョン設計でユーザーを最適なリージョンへ誘導するサービスは？",c:["Route 53やGlobal Accelerator","IAMとKMS","CloudTrailのみ","EBSのみ"],a:"Route 53やGlobal Accelerator"},
{q:"災害対策でアクティブ/スタンバイ構成を作る際に重要なDNS機能は？",c:["フェイルオーバールーティング","単純ルーティングのみ","逆引き専用ゾーン","TXTレコードのみ"],a:"フェイルオーバールーティング"},
{q:"ネットワーク分離の基本設計として適切なのは？",c:["環境ごとにVPCやサブネットを分ける","本番と開発を同一サブネットに混在させる","全ポートを開放する","全CIDRを重複させる"],a:"環境ごとにVPCやサブネットを分ける"},
{q:"本番環境と開発環境の通信を制御する設計で有効なのは？",c:["ルートテーブルとセキュリティ制御を分離する","同じSGを全環境で使う","NACLを削除する","全VPCを無条件ピアリングする"],a:"ルートテーブルとセキュリティ制御を分離する"},
{q:"VPC間接続でCIDR重複がある場合の問題は？",c:["ルーティングが困難になる","通信が必ず高速化する","料金が無料になる","DNSが不要になる"],a:"ルーティングが困難になる"},

{q:"CIDR重複時の回避策として検討できるものは？",c:["CIDR再設計やNATによるアドレス変換","NACL削除","IAMユーザー追加","CloudFront削除"],a:"CIDR再設計やNATによるアドレス変換"},
{q:"VPC Latticeの主な用途は？",c:["サービス間通信の接続・認証・監視を簡素化する","S3の容量を増やす","EC2 AMIを作る","DNSドメインを購入する"],a:"サービス間通信の接続・認証・監視を簡素化する"},
{q:"サービス間通信をVPCやアカウントをまたいで簡素化したい場合の選択肢は？",c:["VPC Lattice","EBS Snapshot","AWS Backup Vault","CloudFront OACのみ"],a:"VPC Lattice"},
{q:"ネットワーク設計で最小権限に近い考え方は？",c:["必要な送信元・宛先・ポートだけ許可する","すべてのポートを全開放する","0.0.0.0/0を常に許可する","NACLを使わない"],a:"必要な送信元・宛先・ポートだけ許可する"},
{q:"Webサーバーを公開する一般的な構成は？",c:["ALBをパブリック、EC2をプライベートに配置する","EC2を全てパブリックにする","DBをパブリックにする","NAT Gatewayを削除する"],a:"ALBをパブリック、EC2をプライベートに配置する"},

{q:"DBサーバーの配置として一般的に適切なのは？",c:["プライベートサブネット","パブリックサブネットのみ","Internet Gateway直下","CloudFront上"],a:"プライベートサブネット"},
{q:"踏み台サーバーを減らし安全にEC2へ接続する選択肢は？",c:["AWS Systems Manager Session Manager","全EC2に22番を公開","NACLを全許可","Elastic IPを全台に付与"],a:"AWS Systems Manager Session Manager"},
{q:"内部向けALBの特徴は？",c:["プライベートIPでVPC内部向けに提供できる","必ずインターネット公開される","S3専用","Route 53を使えない"],a:"プライベートIPでVPC内部向けに提供できる"},
{q:"インターネット向けALBを使うには何が必要か？",c:["パブリックサブネットに配置する","プライベートサブネットだけに配置する","Virtual Private Gatewayが必須","S3バケットが必須"],a:"パブリックサブネットに配置する"},
{q:"VPC設計で将来拡張を考える場合に重要なのは？",c:["十分なCIDRサイズを確保する","最小の/28だけを使う","全サブネットを同一AZにする","CIDRを頻繁に重複させる"],a:"十分なCIDRサイズを確保する"},

{q:"サブネットCIDRでAWSが予約するIPアドレス数は？",c:["各サブネットで5個","各サブネットで1個","予約されない","全体の半分"],a:"各サブネットで5個"},
{q:"/24 CIDRの利用可能IP数を概算する際、AWS予約分を考慮すると何個程度か？",c:["251個","256個","128個","24個"],a:"251個"},
{q:"ネットワーク監査でCloudTrailが記録するものは？",c:["API操作履歴","全パケット本文","TCP再送回数","DNS応答速度のみ"],a:"API操作履歴"},
{q:"ネットワーク構成変更の追跡に役立つサービスは？",c:["AWS Config","Amazon Polly","AWS Glue","Amazon Comprehend"],a:"AWS Config"},
{q:"セキュリティグループの変更履歴確認に役立つものは？",c:["CloudTrailとAWS Config","CloudFrontのみ","S3 Transfer Accelerationのみ","Route 53 Registrarのみ"],a:"CloudTrailとAWS Config"},

{q:"ネットワーク設計のベストプラクティスとして正しいものは？",c:["可用性・拡張性・セキュリティを考慮して冗長化する","単一AZにすべて集約する","すべての通信を全許可する","CIDR重複を許容する"],a:"可用性・拡張性・セキュリティを考慮して冗長化する"},
{q:"ハイブリッド接続でバックアップ回線としてよく使われる組み合わせは？",c:["Direct ConnectとSite-to-Site VPN","S3とCloudFront","IAMとKMS","LambdaとSQS"],a:"Direct ConnectとSite-to-Site VPN"},
{q:"大量のVPCをフルメッシュのVPCピアリングで接続する問題点は？",c:["接続数とルート管理が複雑になる","必ず通信できなくなる","DNSが使えなくなる","EC2が起動できない"],a:"接続数とルート管理が複雑になる"},
{q:"フルメッシュVPCピアリングの代替として適したものは？",c:["Transit Gateway","NAT Gateway","Internet Gateway","Egress-only Internet Gateway"],a:"Transit Gateway"},
{q:"ネットワーク設計で最初に決めるべき重要項目は？",c:["CIDR計画と接続要件","EC2のキーペア名だけ","S3バケット名だけ","IAMユーザーの表示名"],a:"CIDR計画と接続要件"}

];