window.quizData = window.quizData || {};

window.quizData.scsIdentity = [

{q:"AWSでユーザーや権限を管理する中心的なサービスは？",c:["AWS IAM","Amazon S3","Amazon EC2","AWS WAF"],a:"AWS IAM"},
{q:"IAMの正式名称は？",c:["Identity and Access Management","Internet Access Manager","Internal Account Module","Identity Audit Monitor"],a:"Identity and Access Management"},
{q:"AWSアカウントで最も強い権限を持つユーザーは？",c:["rootユーザー","IAMユーザー","IAMロール","フェデレーションユーザー"],a:"rootユーザー"},
{q:"rootユーザーの日常利用として適切なのは？",c:["原則使わず、必要時だけ利用する","毎日利用する","全員で共有する","アクセスキーを配布する"],a:"原則使わず、必要時だけ利用する"},
{q:"rootユーザーで必ず有効化すべき認証強化は？",c:["MFA","共有パスワード","アクセスキー常用","匿名ログイン"],a:"MFA"},

{q:"MFAの目的は？",c:["認証要素を増やして不正ログインを防ぐ","S3を暗号化する","EC2を高速化する","VPCを作る"],a:"認証要素を増やして不正ログインを防ぐ"},
{q:"IAMユーザーに直接長期アクセスキーを持たせる場合の注意点は？",c:["定期的なローテーションと最小権限が必要","共有してよい","無期限で放置してよい","rootキーを使うべき"],a:"定期的なローテーションと最小権限が必要"},
{q:"推奨されるAWSアクセス方法として適切なのは？",c:["IAMロールや一時認証情報を利用する","rootアクセスキーを配布する","全員AdministratorAccessにする","MFAを無効にする"],a:"IAMロールや一時認証情報を利用する"},
{q:"IAMユーザーに権限を付与する基本単位は？",c:["IAMポリシー","VPC","サブネット","NAT Gateway"],a:"IAMポリシー"},
{q:"IAMポリシーの形式は？",c:["JSON","CSVのみ","HTMLのみ","画像"],a:"JSON"},

{q:"IAMポリシーで操作を指定する要素は？",c:["Action","EffectOnly","Route","Subnet"],a:"Action"},
{q:"IAMポリシーで対象リソースを指定する要素は？",c:["Resource","TargetGroup","Gateway","HostedZoneOnly"],a:"Resource"},
{q:"IAMポリシーで許可または拒否を指定する要素は？",c:["Effect","ActionName","ServiceType","RoleName"],a:"Effect"},
{q:"IAMポリシーで条件を指定する要素は？",c:["Condition","Where","IfOnly","Filter"],a:"Condition"},
{q:"IAMポリシーで明示的なDenyがある場合の評価は？",c:["Allowより優先される","Allowに上書きされる","無視される","MFA時だけ無効"],a:"Allowより優先される"},

{q:"IAM評価ロジックでデフォルト状態は？",c:["暗黙的Deny","暗黙的Allow","全許可","rootのみ許可"],a:"暗黙的Deny"},
{q:"最小権限の原則とは？",c:["必要な操作だけ許可する考え方","全権限を付与する考え方","rootを共有する考え方","監査をしない考え方"],a:"必要な操作だけ許可する考え方"},
{q:"IAMグループの用途は？",c:["複数IAMユーザーに同じ権限をまとめて付与する","EC2をまとめる","VPCを共有する","S3を圧縮する"],a:"複数IAMユーザーに同じ権限をまとめて付与する"},
{q:"IAMロールの特徴は？",c:["一時的な認証情報を付与できる","パスワードを必ず持つ","人間専用","root専用"],a:"一時的な認証情報を付与できる"},
{q:"EC2からS3へ安全にアクセスする推奨方法は？",c:["EC2にIAMロールを付与する","アクセスキーをコードに直書きする","rootキーを配置する","S3を公開する"],a:"EC2にIAMロールを付与する"},

{q:"IAMロールを引き受ける操作は？",c:["sts:AssumeRole","iam:CreateUser","s3:GetObject","ec2:RunInstances"],a:"sts:AssumeRole"},
{q:"STSの役割は？",c:["一時的な認証情報を発行する","S3を暗号化する","VPCを作成する","EC2を監視する"],a:"一時的な認証情報を発行する"},
{q:"クロスアカウントアクセスでよく使う仕組みは？",c:["IAMロールのAssumeRole","rootパスワード共有","アクセスキー共有","S3公開"],a:"IAMロールのAssumeRole"},
{q:"IAMロールの信頼ポリシーで定義するものは？",c:["誰がそのロールを引き受けられるか","どのS3を削除するか","EC2のAMI","VPC CIDR"],a:"誰がそのロールを引き受けられるか"},
{q:"IAMロールの権限ポリシーで定義するものは？",c:["ロールが何を実行できるか","誰がロールを引き受けるか","請求金額","DNS設定"],a:"ロールが何を実行できるか"},

{q:"権限境界の用途は？",c:["IAMエンティティが持てる最大権限を制限する","VPC境界を作る","S3暗号化方式を決める","EC2を停止する"],a:"IAMエンティティが持てる最大権限を制限する"},
{q:"Permission Boundaryは何を直接与えるものか？",c:["権限を直接付与しない","常にAdministratorAccessを付与する","root権限を付与する","MFAを無効化する"],a:"権限を直接付与しない"},
{q:"サービスコントロールポリシーの略称は？",c:["SCP","SGP","ACLP","KMSP"],a:"SCP"},
{q:"SCPの用途は？",c:["AWS Organizations配下アカウントの最大権限を制限する","IAMユーザーに直接権限を付与する","S3を暗号化する","VPCを削除する"],a:"AWS Organizations配下アカウントの最大権限を制限する"},
{q:"SCPだけで操作を許可できるか？",c:["できない。IAM側のAllowも必要","できる。SCPだけで十分","rootだけ可能","MFA時だけ可能"],a:"できない。IAM側のAllowも必要"},

{q:"Resource-based Policyの例として正しいものは？",c:["S3バケットポリシー","IAMユーザーのログインパスワード","EC2キーペア","VPC CIDR"],a:"S3バケットポリシー"},
{q:"S3バケットポリシーで制御できるものは？",c:["バケットやオブジェクトへのアクセス","EC2 CPU","VPCサブネット","Route 53 TTL"],a:"バケットやオブジェクトへのアクセス"},
{q:"KMSキーポリシーの役割は？",c:["KMSキーを誰が使えるか制御する","VPCを作成する","EC2のOSを更新する","DNSを転送する"],a:"KMSキーを誰が使えるか制御する"},
{q:"Lambda関数のリソースベースポリシーでできることは？",c:["どのサービスやアカウントが関数を呼び出せるか制御する","関数のメモリを増やす","VPCを削除する","S3を暗号化する"],a:"どのサービスやアカウントが関数を呼び出せるか制御する"},
{q:"IAM Identity-based Policyとは？",c:["ユーザー・グループ・ロールに付与するポリシー","S3バケットだけに付けるポリシー","KMSキーだけに付けるポリシー","VPCだけに付けるポリシー"],a:"ユーザー・グループ・ロールに付与するポリシー"},

{q:"AWS管理ポリシーとは？",c:["AWSが作成・管理するポリシー","ユーザーが必ず手動更新するポリシー","S3専用ポリシー","root専用ポリシー"],a:"AWSが作成・管理するポリシー"},
{q:"カスタマー管理ポリシーとは？",c:["利用者が作成・管理するIAMポリシー","AWSが自動更新するだけのポリシー","root専用","SCP専用"],a:"利用者が作成・管理するIAMポリシー"},
{q:"インラインポリシーの特徴は？",c:["特定のIAMエンティティに直接埋め込まれる","複数アカウントで自動共有される","S3だけに付ける","AWSが管理する"],a:"特定のIAMエンティティに直接埋め込まれる"},
{q:"再利用性が高いIAMポリシー管理は？",c:["カスタマー管理ポリシーを使う","全てインラインにする","rootで管理する","アクセスキー共有"],a:"カスタマー管理ポリシーを使う"},
{q:"IAMポリシーの条件でMFA利用を要求する条件キーは？",c:["aws:MultiFactorAuthPresent","aws:SourceIpOnly","aws:VpceRequired","aws:MfaEnabledOnly"],a:"aws:MultiFactorAuthPresent"},

{q:"特定IPからのアクセスのみ許可する条件キーは？",c:["aws:SourceIp","aws:username","aws:PrincipalTag","aws:TokenAgeOnly"],a:"aws:SourceIp"},
{q:"特定VPCエンドポイント経由のみ許可する条件キーは？",c:["aws:sourceVpce","aws:SourceVpcOnly","aws:EndpointName","aws:VpcIdRequired"],a:"aws:sourceVpce"},
{q:"Principalタグを使ったアクセス制御は何と呼ばれることが多い？",c:["ABAC","RBACのみ","MACsec","NAT"],a:"ABAC"},
{q:"ABACの正式名称は？",c:["Attribute-Based Access Control","Account-Based Access Cache","Automatic Backup Access Control","Application Border Access Control"],a:"Attribute-Based Access Control"},
{q:"ABACでよく使う属性は？",c:["タグ","CIDRだけ","AMI IDだけ","DNS名だけ"],a:"タグ"},

{q:"IAM Access Analyzerの用途は？",c:["外部アクセスやポリシーの検証を支援する","EC2を暗号化する","VPCを作る","CloudFrontを削除する"],a:"外部アクセスやポリシーの検証を支援する"},
{q:"Access Analyzerで検出しやすいものは？",c:["外部アカウントに公開されたリソース","EC2のCPU不足","S3容量不足","DNS遅延"],a:"外部アカウントに公開されたリソース"},
{q:"Access Analyzer Policy Validationの用途は？",c:["ポリシーの構文やセキュリティ警告を確認する","S3を圧縮する","EC2を起動する","VPNを作る"],a:"ポリシーの構文やセキュリティ警告を確認する"},
{q:"未使用権限を見直すのに役立つIAM情報は？",c:["Access Advisor","Route Table","NACL","Hosted Zone"],a:"Access Advisor"},
{q:"Access Advisorで分かることは？",c:["サービスの最終アクセス情報","EC2の画面","S3ファイル内容","DNS応答全文"],a:"サービスの最終アクセス情報"},

{q:"IAM Credential Reportで確認できるものは？",c:["IAMユーザーの認証情報利用状況","EC2のCPU","VPC Flow Logs","DNSルール"],a:"IAMユーザーの認証情報利用状況"},
{q:"Credential Reportで確認できる項目は？",c:["MFA有無やアクセスキー使用状況","S3オブジェクト本文","EC2メモリ","Route 53 TTL"],a:"MFA有無やアクセスキー使用状況"},
{q:"長期間使われていないアクセスキーへの対応として適切なのは？",c:["無効化や削除を検討する","共有する","rootに移す","公開する"],a:"無効化や削除を検討する"},
{q:"アクセスキー漏えい時の初動として適切なのは？",c:["キーを無効化し影響調査する","放置する","GitHubに再投稿する","rootに昇格する"],a:"キーを無効化し影響調査する"},
{q:"アクセスキーの安全な管理方法は？",c:["Secrets Manager等で管理し直書きしない","コードに直書きする","READMEに記載する","全員で共有する"],a:"Secrets Manager等で管理し直書きしない"},

{q:"AWS IAM Identity Centerの用途は？",c:["複数AWSアカウントへのSSOを管理する","S3を暗号化する","VPCを作成する","CloudFrontを削除する"],a:"複数AWSアカウントへのSSOを管理する"},
{q:"IAM Identity Centerの旧称は？",c:["AWS Single Sign-On","AWS Directory Backup","AWS Access Vault","AWS Login Hub"],a:"AWS Single Sign-On"},
{q:"IAM Identity Centerで割り当てる権限セットは？",c:["Permission Set","Security Group","Route Table","Hosted Zone"],a:"Permission Set"},
{q:"Permission Setの用途は？",c:["アカウントに対する権限のテンプレートを定義する","VPC CIDRを設定する","S3を圧縮する","EC2を再起動する"],a:"アカウントに対する権限のテンプレートを定義する"},
{q:"複数AWSアカウントを人が利用する場合の推奨に近い方法は？",c:["IAM Identity CenterでSSO管理する","各アカウントでroot共有","長期アクセスキー配布","MFA無効"],a:"IAM Identity CenterでSSO管理する"},

{q:"外部IdPとAWSを連携する代表的なプロトコルは？",c:["SAML 2.0","FTP","SMTP","SNMP"],a:"SAML 2.0"},
{q:"Web ID Federationで使われる代表的な仕組みは？",c:["OIDC","NAT","BGP","ICMP"],a:"OIDC"},
{q:"Amazon Cognitoの用途として正しいものは？",c:["アプリ利用者の認証・認可を管理する","VPCを作成する","Direct Connectを敷設する","S3を暗号化する"],a:"アプリ利用者の認証・認可を管理する"},
{q:"Cognito User Poolの用途は？",c:["ユーザーディレクトリと認証","VPCルーティング","EC2監視","S3ストレージ"],a:"ユーザーディレクトリと認証"},
{q:"Cognito Identity Poolの用途は？",c:["認証済みユーザーにAWS認証情報を付与する","DNSを登録する","EC2を暗号化する","S3バケットを作る"],a:"認証済みユーザーにAWS認証情報を付与する"},

{q:"AssumeRoleWithSAMLの用途は？",c:["SAML認証後にIAMロールを引き受ける","S3を暗号化する","VPCを削除する","DNSを購入する"],a:"SAML認証後にIAMロールを引き受ける"},
{q:"AssumeRoleWithWebIdentityで使う代表的なIdPは？",c:["OIDC対応IdP","NACL","Route Table","NAT Gateway"],a:"OIDC対応IdP"},
{q:"IRSAが使われるサービスは？",c:["Amazon EKS","Amazon S3","Amazon Route 53","AWS WAF"],a:"Amazon EKS"},
{q:"IRSAの目的は？",c:["Kubernetes ServiceAccountにIAMロールを関連付ける","S3を公開する","VPCを削除する","DNSを購入する"],a:"Kubernetes ServiceAccountにIAMロールを関連付ける"},
{q:"EKS Podへ安全にAWS権限を渡す方法は？",c:["IRSAを使う","ノードのアクセスキーを共有する","rootキーをPodに置く","S3を公開する"],a:"IRSAを使う"},

{q:"IAM Roles Anywhereの用途は？",c:["AWS外部ワークロードに証明書ベースで一時認証情報を提供する","S3を暗号化する","EC2を停止する","DNSを転送する"],a:"AWS外部ワークロードに証明書ベースで一時認証情報を提供する"},
{q:"IAM Roles Anywhereで利用する認証方式は？",c:["X.509証明書","パスワードのみ","アクセスキーのみ","MACアドレスのみ"],a:"X.509証明書"},
{q:"オンプレサーバーからAWS APIへ安全にアクセスさせる選択肢は？",c:["IAM Roles Anywhere","rootアクセスキー共有","公開S3経由","IAMユーザーの長期キー直書き"],a:"IAM Roles Anywhere"},
{q:"一時認証情報を使うメリットは？",c:["漏えい時の影響期間を短くできる","無期限に使える","権限が無制限になる","MFAが不要になる"],a:"漏えい時の影響期間を短くできる"},
{q:"長期認証情報のリスクは？",c:["漏えい時に悪用され続ける可能性がある","必ず暗号化される","期限切れが早い","権限がない"],a:"漏えい時に悪用され続ける可能性がある"},

{q:"IAMロールの信頼ポリシーで外部アカウントを許可する場合に推奨される条件は？",c:["ExternalId","SourcePort","VpcName","SubnetMask"],a:"ExternalId"},
{q:"ExternalIdの目的は？",c:["混同代理問題を防ぐ","S3を圧縮する","EC2を暗号化する","VPCを作る"],a:"混同代理問題を防ぐ"},
{q:"クロスアカウントロールでPrincipalに指定するものは？",c:["信頼するAWSアカウントやロール","S3オブジェクト名","NACL番号","EC2 AMI"],a:"信頼するAWSアカウントやロール"},
{q:"第三者ベンダーにAWSアクセスを許可する安全な方法は？",c:["ExternalId付きクロスアカウントロール","rootパスワード共有","アクセスキーをメール送付","全リソース公開"],a:"ExternalId付きクロスアカウントロール"},
{q:"クロスアカウントアクセスの監査に役立つものは？",c:["CloudTrail","Amazon Polly","S3静的サイト","NAT Gateway"],a:"CloudTrail"},

{q:"CloudTrailでAssumeRoleイベントを見る目的は？",c:["誰がどのロールを引き受けたか確認する","S3容量を確認する","EC2 CPUを確認する","DNSを購入する"],a:"誰がどのロールを引き受けたか確認する"},
{q:"IAMの変更履歴を監査するサービスは？",c:["CloudTrail","CloudFront","Amazon Lex","AWS Glue"],a:"CloudTrail"},
{q:"IAM設定の準拠評価に使うサービスは？",c:["AWS Config","Amazon Translate","AWS Batch","Amazon Forecast"],a:"AWS Config"},
{q:"MFA未設定ユーザーを検出するために使えるものは？",c:["Credential ReportやConfig Rule","S3バケット名","EC2キーペア","Route Table"],a:"Credential ReportやConfig Rule"},
{q:"IAM Access Analyzerで外部公開S3を確認する目的は？",c:["意図しない外部アクセスを防ぐ","S3容量を増やす","EC2を起動する","DNSを買う"],a:"意図しない外部アクセスを防ぐ"},

{q:"KMSキーの利用権限で重要なポリシーは？",c:["キーポリシー","Route Table","NACL","Hosted Zone"],a:"キーポリシー"},
{q:"KMSキーをIAMポリシーだけで使えるようにするには何が必要か？",c:["キーポリシーでIAMポリシー利用を許可する","NAT Gatewayを作る","CloudFrontを使う","S3を公開する"],a:"キーポリシーでIAMポリシー利用を許可する"},
{q:"KMSグラントの用途は？",c:["一時的または限定的にキー使用権限を委任する","VPCを作る","EC2を停止する","DNSを登録する"],a:"一時的または限定的にキー使用権限を委任する"},
{q:"暗号化されたS3オブジェクトを読むには何が必要か？",c:["S3権限とKMS復号権限","S3権限だけで常に十分","EC2権限","VPC権限"],a:"S3権限とKMS復号権限"},
{q:"KMSのDecryptを制限する理由は？",c:["暗号化データの不正復号を防ぐため","EC2を高速化するため","DNSを買うため","NATを作るため"],a:"暗号化データの不正復号を防ぐため"},

{q:"Secrets Managerでシークレットへのアクセスを制御するものは？",c:["IAMポリシーやリソースポリシー","Route Table","NACL番号","VPC CIDR"],a:"IAMポリシーやリソースポリシー"},
{q:"Secrets Managerのローテーションで使われる代表的サービスは？",c:["Lambda","CloudFront","NAT Gateway","Route 53"],a:"Lambda"},
{q:"Parameter StoreでSecureStringを使う場合に関係するサービスは？",c:["AWS KMS","AWS WAF","Amazon Route 53","AWS Shield"],a:"AWS KMS"},
{q:"アプリにDBパスワードを安全に渡す方法は？",c:["Secrets Managerから取得させる","コードに直書きする","READMEに保存する","全員にメールする"],a:"Secrets Managerから取得させる"},
{q:"シークレットをコードに直書きしない理由は？",c:["漏えいリスクを下げるため","EC2を高速化するため","DNSを削除するため","VPCを作るため"],a:"漏えいリスクを下げるため"},

{q:"IAMポリシーのNotActionを使う際の注意点は？",c:["意図しない広範権限になりやすい","常に安全","Denyでは使えない","S3専用"],a:"意図しない広範権限になりやすい"},
{q:"ワイルドカード Action:'*' のリスクは？",c:["過剰権限になりやすい","権限が全く付かない","MFAが必須になる","S3だけ許可される"],a:"過剰権限になりやすい"},
{q:"Resource:'*' を使う際の注意点は？",c:["対象リソースが広くなりすぎる可能性がある","常に最小権限","Denyが無効になる","MFAが無効になる"],a:"対象リソースが広くなりすぎる可能性がある"},
{q:"IAMポリシーのSidの役割は？",c:["ステートメント識別子","必須の暗号鍵","VPC名","ユーザーID固定値"],a:"ステートメント識別子"},
{q:"ポリシーのVersionで一般的に使う値は？",c:["2012-10-17","2020-01-01-only","latest","v3"],a:"2012-10-17"},

{q:"IAMで一時的な権限昇格を管理する方法として適切なのは？",c:["期限付きロールや承認フローを使う","常時Adminを付与する","rootを共有する","MFAを無効にする"],a:"期限付きロールや承認フローを使う"},
{q:"Break-glassアカウントとは？",c:["緊急時用の特権アクセス","通常作業用の共有アカウント","S3専用ユーザー","VPN装置"],a:"緊急時用の特権アクセス"},
{q:"Break-glass運用で重要なことは？",c:["MFA、厳格な監査、利用手順の整備","全員共有","ログ削除","無期限アクセスキー"],a:"MFA、厳格な監査、利用手順の整備"},
{q:"IAMロールセッション名を監査で活用する理由は？",c:["誰の操作か追跡しやすくするため","S3を圧縮するため","EC2を停止するため","DNSを買うため"],a:"誰の操作か追跡しやすくするため"},
{q:"ロールセッションの期間を短くするメリットは？",c:["認証情報漏えい時の影響を抑えやすい","無期限利用できる","権限が増える","MFAが不要になる"],a:"認証情報漏えい時の影響を抑えやすい"},

{q:"IAMポリシーシミュレーターの用途は？",c:["ポリシー評価結果を確認する","EC2を起動する","DNSを購入する","S3を暗号化する"],a:"ポリシー評価結果を確認する"},
{q:"アクセス拒否の調査で確認すべきものは？",c:["IAMポリシー、SCP、リソースポリシー、Permission Boundary","EC2壁紙","S3タグ色","DNS料金"],a:"IAMポリシー、SCP、リソースポリシー、Permission Boundary"},
{q:"KMS AccessDeniedの原因としてあり得るものは？",c:["KMSキーポリシーまたはIAM権限不足","NAT Gateway不足のみ","Route 53 TTL不足","CloudFront圧縮不足"],a:"KMSキーポリシーまたはIAM権限不足"},
{q:"S3 AccessDeniedの原因として確認すべきものは？",c:["IAMポリシー、バケットポリシー、ACL、KMS権限","EC2 CPUのみ","DNS Resolverのみ","CloudFrontロゴ"],a:"IAMポリシー、バケットポリシー、ACL、KMS権限"},
{q:"AssumeRoleできない場合に確認すべきものは？",c:["信頼ポリシーとsts:AssumeRole権限","S3容量","VPC CIDR","DNS TTL"],a:"信頼ポリシーとsts:AssumeRole権限"},

{q:"IAMのベストプラクティスとして正しいものは？",c:["人にはSSO、ワークロードにはロールを使う","rootキーを配布する","全員Adminにする","MFAを無効化する"],a:"人にはSSO、ワークロードにはロールを使う"},
{q:"IAMセキュリティで重要な継続運用は？",c:["権限レビューと未使用権限削除","一度設定して放置","ログ削除","共有キー利用"],a:"権限レビューと未使用権限削除"},
{q:"最小権限を実現するために有効な情報は？",c:["CloudTrailの実利用履歴","EC2壁紙","S3タグ色","DNS購入履歴"],a:"CloudTrailの実利用履歴"},
{q:"AWS管理ポリシーAdministratorAccessの扱いとして適切なのは？",c:["必要最小限に限定して使う","全員に付ける","外部に共有する","MFAなしで使う"],a:"必要最小限に限定して使う"},
{q:"Security SpecialtyでIAM分野の重要ポイントは？",c:["最小権限、一時認証情報、監査、フェデレーション","全権限、共有キー、ログ削除","root常用","MFA無効化"],a:"最小権限、一時認証情報、監査、フェデレーション"}

];