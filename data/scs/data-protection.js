window.quizData = window.quizData || {};

window.quizData.scsDataProtection = [

{q:"AWSで暗号鍵を作成・管理する中心的なサービスは？",c:["AWS KMS","AWS WAF","Amazon Route 53","AWS Shield"],a:"AWS KMS"},
{q:"KMSの正式名称は？",c:["Key Management Service","Key Monitoring System","Kernel Management Service","Key Migration Storage"],a:"Key Management Service"},
{q:"KMSキーの利用権限を制御する基本ポリシーは？",c:["キーポリシー","ルートテーブル","NACL","Hosted Zone"],a:"キーポリシー"},
{q:"KMSキーの利用履歴を確認するサービスは？",c:["AWS CloudTrail","Amazon EC2","AWS WAF","Amazon Polly"],a:"AWS CloudTrail"},
{q:"KMSのDecrypt権限を制限する目的は？",c:["暗号化データの不正復号を防ぐ","EC2を高速化する","DNSを購入する","VPCを作る"],a:"暗号化データの不正復号を防ぐ"},

{q:"SSE-KMSとは？",c:["KMSキーを使ったサーバー側暗号化","クライアント側圧縮","DNS暗号化","IAM認証方式"],a:"KMSキーを使ったサーバー側暗号化"},
{q:"SSE-S3とは？",c:["S3管理キーによるサーバー側暗号化","KMS外部キーのみ","クライアント側暗号化のみ","WAFによる暗号化"],a:"S3管理キーによるサーバー側暗号化"},
{q:"SSE-Cとは？",c:["利用者提供キーによるサーバー側暗号化","AWS管理キーのみ","DNS暗号化","IAM認証"],a:"利用者提供キーによるサーバー側暗号化"},
{q:"S3バケットのデフォルト暗号化で使える代表的方式は？",c:["SSE-S3やSSE-KMS","WAF Rules","Route 53 Resolver","NACL"],a:"SSE-S3やSSE-KMS"},
{q:"S3に保存する機密データをKMSで管理したい場合に使う方式は？",c:["SSE-KMS","SSE-Cのみ","HTTPのみ","Public Read"],a:"SSE-KMS"},

{q:"S3 Block Public Accessの目的は？",c:["意図しないパブリック公開を防ぐ","S3を高速化する","EC2を暗号化する","DNSを購入する"],a:"意図しないパブリック公開を防ぐ"},
{q:"S3バケットポリシーの用途は？",c:["バケットやオブジェクトへのアクセス制御","EC2 CPU管理","VPC作成","Route 53 TTL管理"],a:"バケットやオブジェクトへのアクセス制御"},
{q:"S3 Object Lockの用途は？",c:["一定期間オブジェクトの削除や上書きを防ぐ","S3を公開する","EC2を起動する","DNSを登録する"],a:"一定期間オブジェクトの削除や上書きを防ぐ"},
{q:"S3 Object Lockのモードとして正しいものは？",c:["GovernanceとCompliance","PublicとPrivate","ReadとWrite","AllowとDeny"],a:"GovernanceとCompliance"},
{q:"S3バージョニングの目的は？",c:["オブジェクトの複数世代を保持する","DNSを高速化する","EC2を暗号化する","VPCを削除する"],a:"オブジェクトの複数世代を保持する"},

{q:"S3の誤削除対策として有効な組み合わせは？",c:["バージョニングとObject Lock","Public Readと匿名削除","MFA無効化","全員FullAccess"],a:"バージョニングとObject Lock"},
{q:"S3 Object OwnershipでACLを無効化する設定は？",c:["Bucket owner enforced","PublicReadOnly","ACLRequired","OwnerUnknown"],a:"Bucket owner enforced"},
{q:"S3 ACLより推奨されるアクセス制御は？",c:["IAMポリシーやバケットポリシー","匿名アクセス","Public ACL","root共有"],a:"IAMポリシーやバケットポリシー"},
{q:"S3 Access Pointsの用途は？",c:["用途ごとに異なるアクセス制御入口を作る","EC2を起動する","DNSを購入する","VPCを削除する"],a:"用途ごとに異なるアクセス制御入口を作る"},
{q:"S3 Access PointをVPC内アクセスに限定する設定は？",c:["VPC restricted access point","Public Read access point","Global open access point","Anonymous endpoint"],a:"VPC restricted access point"},

{q:"S3を特定VPCエンドポイント経由に限定する条件キーは？",c:["aws:sourceVpce","aws:username","aws:TokenIssueTime","aws:CloudFront"],a:"aws:sourceVpce"},
{q:"S3を特定VPCからのみ許可する条件キーは？",c:["aws:SourceVpc","aws:SourceIpOnly","aws:PrincipalName","aws:RouteTable"],a:"aws:SourceVpc"},
{q:"S3オブジェクトアクセスを詳細に監査するCloudTrailイベントは？",c:["データイベント","管理イベントのみ","DNSイベント","料金イベント"],a:"データイベント"},
{q:"S3サーバーアクセスログの用途は？",c:["バケットへのリクエストを記録する","EC2を高速化する","DNSを購入する","VPCを作る"],a:"バケットへのリクエストを記録する"},
{q:"S3に機密情報が含まれるか検出するサービスは？",c:["Amazon Macie","AWS WAF","Amazon Polly","AWS Backup"],a:"Amazon Macie"},

{q:"Amazon Macieが検出できる代表例は？",c:["個人情報や認証情報","EC2のCPU不足","DNS TTL不足","NAT Gateway帯域"],a:"個人情報や認証情報"},
{q:"Macieが主に対象とするストレージは？",c:["Amazon S3","Amazon EBSのみ","Route 53","CloudFront"],a:"Amazon S3"},
{q:"Macieの検出結果を通知する構成は？",c:["EventBridge + SNS","NAT Gateway + IGW","EBS + AMI","Route 53 + Registrar"],a:"EventBridge + SNS"},
{q:"S3に保存されたクレジットカード番号などを検出したい場合は？",c:["Amazon Macie","AWS Shield","Route 53","Amazon Lex"],a:"Amazon Macie"},
{q:"機密データ保護で重要な考え方は？",c:["分類・暗号化・アクセス制御・監査","全公開","ログ削除","MFA無効化"],a:"分類・暗号化・アクセス制御・監査"},

{q:"EBSボリューム暗号化に使うサービスは？",c:["AWS KMS","AWS WAF","CloudFront","Route 53"],a:"AWS KMS"},
{q:"EBS暗号化で保護されるものは？",c:["ボリューム、スナップショット、AMI等","DNS TTL","SGルール","IAMユーザー名"],a:"ボリューム、スナップショット、AMI等"},
{q:"EBSスナップショット共有時に注意するものは？",c:["KMSキー権限と共有先","ALBリスナー","CloudFront OAC","NACL番号"],a:"KMSキー権限と共有先"},
{q:"暗号化されたEBSスナップショットを他アカウントで使うには？",c:["スナップショット共有とKMSキー権限が必要","Public IPが必要","WAFが必要","NAT Gatewayが必要"],a:"スナップショット共有とKMSキー権限が必要"},
{q:"EBS暗号化をデフォルトで有効にする目的は？",c:["新規ボリュームの暗号化漏れを防ぐ","EC2料金を無料にする","DNSを高速化する","VPCを削除する"],a:"新規ボリュームの暗号化漏れを防ぐ"},

{q:"RDS暗号化に使うサービスは？",c:["AWS KMS","AWS WAF","Amazon Route 53","AWS Shield"],a:"AWS KMS"},
{q:"RDS暗号化で保護されるものは？",c:["DBストレージ、バックアップ、スナップショット等","DNS TTL","IAM表示名","Route Table"],a:"DBストレージ、バックアップ、スナップショット等"},
{q:"RDSの認証情報を安全に管理するサービスは？",c:["AWS Secrets Manager","Amazon Polly","AWS Batch","Route 53"],a:"AWS Secrets Manager"},
{q:"RDSスナップショット共有で注意すべきことは？",c:["共有範囲とKMSキー権限","EC2壁紙","CloudFront圧縮","DNS TTL"],a:"共有範囲とKMSキー権限"},
{q:"RDS IAM認証の特徴は？",c:["IAMを使ってDB接続認証できる","DBを必ず公開する","誰でも接続できる","KMS不要"],a:"IAMを使ってDB接続認証できる"},

{q:"DynamoDBの保存時暗号化に関係するサービスは？",c:["AWS KMS","AWS WAF","Route 53","CloudFront"],a:"AWS KMS"},
{q:"DynamoDBへのアクセス制御に使うものは？",c:["IAMポリシー","Security Groupのみ","NACLのみ","Internet Gateway"],a:"IAMポリシー"},
{q:"DynamoDBで細かいアクセス制御に使える条件キーの例は？",c:["dynamodb:LeadingKeys","aws:VpcOnly","s3:BucketName","ec2:Subnet"],a:"dynamodb:LeadingKeys"},
{q:"DynamoDB PITRの用途は？",c:["特定時点への復元","DNS購入","EC2起動","VPC作成"],a:"特定時点への復元"},
{q:"DynamoDB Streamsの用途は？",c:["テーブル変更イベントを取得する","S3を暗号化する","EC2を削除する","DNSを転送する"],a:"テーブル変更イベントを取得する"},

{q:"Secrets Managerの主な用途は？",c:["シークレットの保管とローテーション","VPC作成","DNS購入","EC2翻訳"],a:"シークレットの保管とローテーション"},
{q:"Secrets Managerのローテーションで使われる代表サービスは？",c:["AWS Lambda","Amazon CloudFront","NAT Gateway","Route 53"],a:"AWS Lambda"},
{q:"Parameter Store SecureStringで暗号化に使うサービスは？",c:["AWS KMS","AWS WAF","CloudFront","Route 53"],a:"AWS KMS"},
{q:"DBパスワードをコードに直書きしない理由は？",c:["漏えいリスクを下げるため","CPUを上げるため","DNSを速くするため","VPCを作るため"],a:"漏えいリスクを下げるため"},
{q:"シークレットのローテーション目的は？",c:["漏えい時の影響を下げる","EC2を高速化する","DNSを購入する","S3を圧縮する"],a:"漏えい時の影響を下げる"},

{q:"Secrets Managerアクセス制御で使うものは？",c:["IAMポリシーやリソースポリシー","Route Table","NACL番号","VPC CIDR"],a:"IAMポリシーやリソースポリシー"},
{q:"Secrets Managerでクロスアカウントアクセスを許可する際に使うものは？",c:["リソースポリシー","NAT Gateway","Security Groupのみ","Route 53"],a:"リソースポリシー"},
{q:"Secrets Managerのシークレットを暗号化するサービスは？",c:["AWS KMS","AWS WAF","Amazon Inspector","CloudFront"],a:"AWS KMS"},
{q:"アプリがシークレットを取得する際の推奨は？",c:["IAMロールで必要なシークレットだけ許可する","rootキーを使う","全シークレットを許可する","READMEに保存する"],a:"IAMロールで必要なシークレットだけ許可する"},
{q:"秘密情報管理のベストプラクティスは？",c:["暗号化、最小権限、ローテーション、監査","平文保存","共有キー","ログ削除"],a:"暗号化、最小権限、ローテーション、監査"},

{q:"AWS Backupの用途は？",c:["AWSリソースのバックアップを集中管理する","DNSを購入する","WAFを作る","EC2を翻訳する"],a:"AWSリソースのバックアップを集中管理する"},
{q:"AWS Backup Vaultとは？",c:["バックアップを保存する論理コンテナ","DNSゾーン","NAT Gateway","IAMグループ"],a:"バックアップを保存する論理コンテナ"},
{q:"AWS Backup Vault Lockの用途は？",c:["バックアップの削除・変更を防ぐ保護を強化する","EC2を高速化する","S3を公開する","DNSを購入する"],a:"バックアップの削除・変更を防ぐ保護を強化する"},
{q:"ランサムウェア対策として有効なバックアップ設計は？",c:["削除保護・世代管理・権限分離","同一権限で全削除可能","バックアップなし","ログなし"],a:"削除保護・世代管理・権限分離"},
{q:"復旧テストを行う理由は？",c:["実際に復元できることを確認するため","料金を無料にするため","DNSを削除するため","EC2を停止するため"],a:"実際に復元できることを確認するため"},

{q:"AWS Backupで組織全体のバックアップ方針を管理する機能は？",c:["Backup Policy","WAF Rule","NAT Policy","DNS Policy"],a:"Backup Policy"},
{q:"バックアップの保存期間を自動管理する設定は？",c:["ライフサイクル設定","Security Group","Route Table","Hosted Zone"],a:"ライフサイクル設定"},
{q:"バックアップ保護で権限分離を行う目的は？",c:["攻撃者による削除を防ぎやすくする","EC2を高速化する","S3容量を増やす","DNSを購入する"],a:"攻撃者による削除を防ぎやすくする"},
{q:"バックアップデータを暗号化する目的は？",c:["保存データの漏えいリスクを下げる","DNSを速くする","EC2料金を下げる","NATを削除する"],a:"保存データの漏えいリスクを下げる"},
{q:"バックアップの監査で確認すべきものは？",c:["成功/失敗、保存期間、復旧可能性","EC2壁紙","DNS TTL","S3タグ色"],a:"成功/失敗、保存期間、復旧可能性"},

{q:"CloudHSMの用途は？",c:["専用HSMで暗号鍵を管理する","VPCを作る","EC2を監視する","S3を公開する"],a:"専用HSMで暗号鍵を管理する"},
{q:"CloudHSMが向くケースは？",c:["専用HSM管理や厳格な暗号要件がある場合","DNS購入","EC2翻訳","S3静的配信"],a:"専用HSM管理や厳格な暗号要件がある場合"},
{q:"KMSとCloudHSMの違いとして正しいものは？",c:["KMSはマネージド、CloudHSMは専用HSMを利用できる","どちらも同じで差はない","CloudHSMはDNS専用","KMSはEC2専用"],a:"KMSはマネージド、CloudHSMは専用HSMを利用できる"},
{q:"KMSカスタムキーストアで利用できる基盤は？",c:["CloudHSM","CloudFront","Route 53","NAT Gateway"],a:"CloudHSM"},
{q:"外部キーストアの考え方として正しいものは？",c:["AWS外部のキー管理システムと連携する","S3だけで鍵を作る","DNSで鍵を管理する","IAMユーザー名を鍵にする"],a:"AWS外部のキー管理システムと連携する"},

{q:"AWS Certificate Managerの用途は？",c:["SSL/TLS証明書の発行・管理","VPC作成","EC2バックアップ","S3圧縮"],a:"SSL/TLS証明書の発行・管理"},
{q:"ACM証明書を利用できる代表的サービスは？",c:["ALBやCloudFront","EBSのみ","NACLのみ","IAM Group"],a:"ALBやCloudFront"},
{q:"CloudFrontでACM証明書を使う場合のリージョンは？",c:["us-east-1","ap-northeast-1のみ","任意のAZ","リージョン不要"],a:"us-east-1"},
{q:"TLS証明書の目的は？",c:["通信の暗号化とサーバー認証","VPC作成","EC2起動","DNS購入"],a:"通信の暗号化とサーバー認証"},
{q:"ACMの利点は？",c:["証明書の発行や更新管理を簡素化できる","EC2料金を無料にする","S3容量を増やす","IAMを削除する"],a:"証明書の発行や更新管理を簡素化できる"},

{q:"CloudFront署名付きURLの用途は？",c:["限定ユーザーにコンテンツアクセスを許可する","VPCを作る","IAMを削除する","BGPを設定する"],a:"限定ユーザーにコンテンツアクセスを許可する"},
{q:"CloudFront署名付きCookieの用途は？",c:["複数ファイルへの限定アクセスを許可する","EC2を暗号化する","DNSを転送する","S3を圧縮する"],a:"複数ファイルへの限定アクセスを許可する"},
{q:"S3への直接アクセスを防ぎCloudFront経由に限定する仕組みは？",c:["Origin Access Control","NAT Gateway","Transit Gateway","Public VIF"],a:"Origin Access Control"},
{q:"CloudFront OACとS3バケットポリシーを組み合わせる目的は？",c:["オリジンを保護する","VPCを削除する","EC2を起動する","DNSを購入する"],a:"オリジンを保護する"},
{q:"CloudFrontのフィールドレベル暗号化の用途は？",c:["特定の機密フィールドをエッジで暗号化する","EC2を高速化する","DNSを購入する","NATを作る"],a:"特定の機密フィールドをエッジで暗号化する"},

{q:"AWS Glue Data Catalogのデータ保護で重要なものは？",c:["IAMやLake Formationによるアクセス制御","NAT Gatewayのみ","CloudFront OACのみ","EC2キーペア"],a:"IAMやLake Formationによるアクセス制御"},
{q:"AWS Lake Formationの用途は？",c:["データレイクの権限管理を簡素化する","EC2を起動する","VPCを削除する","DNSを購入する"],a:"データレイクの権限管理を簡素化する"},
{q:"Lake Formationで制御できるものは？",c:["データベース、テーブル、列レベルのアクセス","EC2 CPU","DNS TTL","NAT Gateway"],a:"データベース、テーブル、列レベルのアクセス"},
{q:"AthenaでS3上の機密データを扱う際に重要なのは？",c:["S3権限、KMS権限、クエリ結果保存先の保護","EC2壁紙","DNS購入","NACL番号"],a:"S3権限、KMS権限、クエリ結果保存先の保護"},
{q:"Athenaのクエリ結果保存先で注意すべきことは？",c:["暗号化とアクセス制限","Public Write","削除権限全員付与","ログ無効化"],a:"暗号化とアクセス制限"},

{q:"Redshiftのデータ保護で使える暗号化サービスは？",c:["AWS KMS","AWS WAF","Route 53","CloudFront"],a:"AWS KMS"},
{q:"Redshiftへのアクセス制御で重要なものは？",c:["IAM、DB権限、ネットワーク制御","DNS TTLのみ","S3タグのみ","EC2壁紙"],a:"IAM、DB権限、ネットワーク制御"},
{q:"Redshift SpectrumでS3データを読む際に必要な権限は？",c:["S3とGlue Data Catalog等への権限","Route 53権限","EC2キーペア","CloudFront証明書"],a:"S3とGlue Data Catalog等への権限"},
{q:"EMRでS3データを扱う際の保護策は？",c:["IAMロール、暗号化、セキュリティ設定","全データ公開","ログ削除","MFA無効化"],a:"IAMロール、暗号化、セキュリティ設定"},
{q:"Kinesis Data Streamsの暗号化に使うサービスは？",c:["AWS KMS","AWS WAF","Route 53","NAT Gateway"],a:"AWS KMS"},

{q:"転送中データを保護する代表的な仕組みは？",c:["TLS","平文HTTP","匿名FTP","Telnet"],a:"TLS"},
{q:"保存データを保護する代表的な仕組みは？",c:["暗号化","Public Read","全員FullAccess","MFA無効化"],a:"暗号化"},
{q:"暗号化だけでは不十分な理由は？",c:["アクセス制御と監査も必要だから","暗号化は意味がないから","必ず復号できないから","AWSでは使えないから"],a:"アクセス制御と監査も必要だから"},
{q:"データ保護で最小権限が重要な理由は？",c:["不正アクセス範囲を限定するため","EC2を高速化するため","DNSを購入するため","VPCを削除するため"],a:"不正アクセス範囲を限定するため"},
{q:"データ分類の目的は？",c:["重要度に応じた保護策を選ぶため","料金を必ず無料にするため","DNSを速くするため","EC2を増やすため"],a:"重要度に応じた保護策を選ぶため"},

{q:"CloudTrailでKMS利用を監査する際に見るAPIは？",c:["DecryptやGenerateDataKey","RunInstancesのみ","CreateVpcのみ","ListHostedZonesのみ"],a:"DecryptやGenerateDataKey"},
{q:"S3データイベントをCloudTrailで有効にする目的は？",c:["オブジェクトレベル操作を監査する","VPCを作成する","EC2を停止する","DNSを買う"],a:"オブジェクトレベル操作を監査する"},
{q:"Macieの検出結果から自動対応する構成は？",c:["EventBridge + Lambda","NAT + IGW","EBS + AMI","Route 53 + Registrar"],a:"EventBridge + Lambda"},
{q:"機密データ検出後の対応として適切なのは？",c:["アクセス制限、暗号化、移動・削除、通知を検討する","全公開する","ログ削除","MFA無効化"],a:"アクセス制限、暗号化、移動・削除、通知を検討する"},
{q:"ログデータ自体を保護する理由は？",c:["攻撃調査や監査に必要な証拠だから","不要なデータだから","常に公開すべきだから","暗号化できないから"],a:"攻撃調査や監査に必要な証拠だから"},

{q:"ログ保管バケットで推奨される設定は？",c:["暗号化、Object Lock、アクセス制限","Public Write","匿名削除","バージョニング無効"],a:"暗号化、Object Lock、アクセス制限"},
{q:"ログの改ざん防止で有効なS3機能は？",c:["Object Lock","Static Website Hosting","Transfer Acceleration","S3 Select"],a:"Object Lock"},
{q:"CloudTrailログの完全性確認で使う機能は？",c:["ログファイル整合性検証","DNS検証","EC2検証","NACL検証"],a:"ログファイル整合性検証"},
{q:"ログアーカイブアカウントを分離する目的は？",c:["改ざんリスクを下げ監査性を高める","EC2を高速化する","DNSを削除する","S3を公開する"],a:"改ざんリスクを下げ監査性を高める"},
{q:"データ保護の総合的なベストプラクティスは？",c:["分類、暗号化、最小権限、監査、バックアップ","全公開、ログ削除、root常用","暗号化なし","MFA無効化"],a:"分類、暗号化、最小権限、監査、バックアップ"}

];