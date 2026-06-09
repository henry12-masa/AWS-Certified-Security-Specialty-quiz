window.quizData = window.quizData || {};

window.quizData.aifAwsServices = [

{q:"AWSで生成AIアプリを構築する代表的なマネージドサービスは？",c:["Amazon Bedrock","Amazon Route 53","AWS WAF","Amazon VPC"],a:"Amazon Bedrock"},
{q:"Amazon Bedrockの主な特徴は？",c:["複数の基盤モデルをAPIで利用できる","DNSを管理する","EC2のみを監視する","S3を削除する"],a:"複数の基盤モデルをAPIで利用できる"},
{q:"Amazon Bedrockで利用できるモデルの種類は？",c:["テキスト生成、画像生成、埋め込みなど","DNSモデルのみ","VPCモデルのみ","EBSモデルのみ"],a:"テキスト生成、画像生成、埋め込みなど"},
{q:"Bedrockで基盤モデルを利用する際の基本的な呼び出し方法は？",c:["API経由","SSH経由","FTP経由","手動メール"],a:"API経由"},
{q:"Bedrock Guardrailsの用途は？",c:["生成AIの出力や入力を安全に制御する","EC2をバックアップする","DNSを購入する","VPCを作る"],a:"生成AIの出力や入力を安全に制御する"},

{q:"Bedrock Knowledge Basesの用途は？",c:["RAG構成を簡単に作る","S3を削除する","IAMユーザーを作る","DNSを購入する"],a:"RAG構成を簡単に作る"},
{q:"Bedrock Agentsの用途は？",c:["生成AIに外部システム連携やタスク実行をさせる","VPCを暗号化する","EBSを作る","DNSを転送する"],a:"生成AIに外部システム連携やタスク実行をさせる"},
{q:"Bedrockで社内文書に基づく回答を作る場合に使う機能は？",c:["Knowledge Bases for Amazon Bedrock","AWS Backup","Amazon Polly","Route 53"],a:"Knowledge Bases for Amazon Bedrock"},
{q:"Bedrock Guardrailsで抑制できるものは？",c:["有害コンテンツや機密情報の出力","EC2 CPU使用率","DNS TTL","S3容量"],a:"有害コンテンツや機密情報の出力"},
{q:"Amazon Bedrockを使う利点は？",c:["インフラ管理を抑えて生成AI機能を利用できる","必ず無料になる","IAMが不要になる","S3しか使えない"],a:"インフラ管理を抑えて生成AI機能を利用できる"},

{q:"Amazon SageMakerの主な用途は？",c:["機械学習モデルの構築・学習・デプロイ","DNS購入","IAMユーザー管理のみ","VPC作成のみ"],a:"機械学習モデルの構築・学習・デプロイ"},
{q:"SageMaker Studioとは？",c:["機械学習開発用の統合開発環境","DNS管理画面","S3専用バックアップ画面","IAMポリシー検証画面"],a:"機械学習開発用の統合開発環境"},
{q:"SageMaker Canvasの用途は？",c:["ノーコード/ローコードで機械学習を利用する","VPCを作る","EC2にSSHする","DNSを購入する"],a:"ノーコード/ローコードで機械学習を利用する"},
{q:"SageMaker Ground Truthの用途は？",c:["データラベリングを支援する","DNSを登録する","EC2を停止する","S3を削除する"],a:"データラベリングを支援する"},
{q:"SageMaker Clarifyの用途は？",c:["バイアス検出や説明可能性の支援","DNS購入","EC2バックアップ","VPC接続"],a:"バイアス検出や説明可能性の支援"},

{q:"SageMaker Model Monitorの用途は？",c:["本番モデルの品質やデータドリフトを監視する","DNS TTLを監視する","S3容量だけ監視する","IAMユーザー名を監視する"],a:"本番モデルの品質やデータドリフトを監視する"},
{q:"SageMaker Feature Storeの用途は？",c:["機械学習特徴量を管理・再利用する","DNSを管理する","EC2を起動する","S3を公開する"],a:"機械学習特徴量を管理・再利用する"},
{q:"SageMaker Pipelinesの用途は？",c:["MLワークフローを自動化する","Route 53を購入する","VPCを削除する","CloudFrontを作る"],a:"MLワークフローを自動化する"},
{q:"SageMaker JumpStartの用途は？",c:["事前構築済みモデルやソリューションを利用する","DNSを高速化する","IAMを削除する","EBSを作成する"],a:"事前構築済みモデルやソリューションを利用する"},
{q:"SageMakerエンドポイントの用途は？",c:["学習済みモデルを推論用にデプロイする","DNSを登録する","S3を暗号化する","EC2を停止する"],a:"学習済みモデルを推論用にデプロイする"},

{q:"Amazon Q Businessの用途は？",c:["社内データを活用した業務支援AIアシスタント","VPC作成","DNS購入","EBS暗号化"],a:"社内データを活用した業務支援AIアシスタント"},
{q:"Amazon Q Developerの用途は？",c:["開発者向けのコード生成や開発支援","S3削除","DNS登録","VPC接続"],a:"開発者向けのコード生成や開発支援"},
{q:"Amazon Qで重要なセキュリティ観点は？",c:["ユーザー権限に応じたデータアクセス制御","全データ公開","rootキー共有","ログ削除"],a:"ユーザー権限に応じたデータアクセス制御"},
{q:"Amazon Q Businessが役立つ場面は？",c:["社内文書検索や業務質問応答","EBS暗号化","VPC作成","Route 53登録"],a:"社内文書検索や業務質問応答"},
{q:"Amazon Q Developerが役立つ場面は？",c:["コード提案、説明、開発支援","DNS購入","S3公開","EC2課金停止"],a:"コード提案、説明、開発支援"},

{q:"Amazon Comprehendの用途は？",c:["自然言語処理","画像認識","音声合成","動画配信"],a:"自然言語処理"},
{q:"Comprehendでできることは？",c:["感情分析やエンティティ抽出","EC2起動","DNS購入","VPC作成"],a:"感情分析やエンティティ抽出"},
{q:"文章から人名や組織名を抽出するAWSサービスは？",c:["Amazon Comprehend","Amazon Polly","Amazon Rekognition","AWS WAF"],a:"Amazon Comprehend"},
{q:"文章のポジティブ/ネガティブを分析するサービスは？",c:["Amazon Comprehend","Amazon Route 53","AWS Backup","Amazon EBS"],a:"Amazon Comprehend"},
{q:"Comprehend Medicalの用途は？",c:["医療テキストから情報を抽出する","画像を生成する","VPCを作る","DNSを購入する"],a:"医療テキストから情報を抽出する"},

{q:"Amazon Rekognitionの用途は？",c:["画像・動画分析","文章翻訳","音声合成","DNS管理"],a:"画像・動画分析"},
{q:"Rekognitionでできることは？",c:["画像内の物体・顔・テキスト検出","DNS登録","VPC作成","EC2停止"],a:"画像内の物体・顔・テキスト検出"},
{q:"画像から不適切コンテンツを検出するサービスは？",c:["Amazon Rekognition","Amazon Translate","AWS Backup","Route 53"],a:"Amazon Rekognition"},
{q:"画像内の文字を検出したい場合に使うサービスは？",c:["Amazon Rekognition","AWS WAF","Amazon SNS","Amazon SQS"],a:"Amazon Rekognition"},
{q:"動画分析に使えるAWS AIサービスは？",c:["Amazon Rekognition Video","Amazon Polly","Amazon Comprehend","AWS Config"],a:"Amazon Rekognition Video"},

{q:"Amazon Transcribeの用途は？",c:["音声をテキスト化する","テキストを音声化する","文章を翻訳する","画像を分類する"],a:"音声をテキスト化する"},
{q:"会議音声を文字起こしするサービスは？",c:["Amazon Transcribe","Amazon Polly","Amazon Translate","Amazon Rekognition"],a:"Amazon Transcribe"},
{q:"Transcribeでコールセンター音声分析に関連するサービスは？",c:["Amazon Transcribe Call Analytics","Amazon Route 53","AWS WAF","Amazon EBS"],a:"Amazon Transcribe Call Analytics"},
{q:"Amazon Pollyの用途は？",c:["テキストを音声化する","音声をテキスト化する","画像を分析する","VPCを作る"],a:"テキストを音声化する"},
{q:"文章をナレーション音声に変換するサービスは？",c:["Amazon Polly","Amazon Transcribe","Amazon Textract","Amazon Macie"],a:"Amazon Polly"},

{q:"Amazon Translateの用途は？",c:["文章を翻訳する","画像を生成する","EC2を監視する","DBを復元する"],a:"文章を翻訳する"},
{q:"多言語対応チャットに使える翻訳サービスは？",c:["Amazon Translate","Amazon EBS","AWS Shield","Route 53"],a:"Amazon Translate"},
{q:"Amazon Lexの用途は？",c:["チャットボットや会話型インターフェース作成","画像圧縮","DNS購入","暗号鍵管理"],a:"チャットボットや会話型インターフェース作成"},
{q:"音声やテキストで対話するボットを作るサービスは？",c:["Amazon Lex","Amazon Pollyのみ","Amazon S3","AWS Backup"],a:"Amazon Lex"},
{q:"LexとPollyを組み合わせる用途は？",c:["音声対話型アプリを作る","S3を暗号化する","VPCを削除する","EC2を停止する"],a:"音声対話型アプリを作る"},

{q:"Amazon Textractの用途は？",c:["文書画像からテキストや表を抽出する","音声を生成する","DNSを購入する","VPCを作る"],a:"文書画像からテキストや表を抽出する"},
{q:"スキャンした請求書から文字を抽出するサービスは？",c:["Amazon Textract","Amazon Polly","Amazon Translate","AWS WAF"],a:"Amazon Textract"},
{q:"Textractが得意な対象は？",c:["フォームや表を含む文書","VPC CIDR","IAMポリシー","EBSボリューム"],a:"フォームや表を含む文書"},
{q:"Amazon Kendraの用途は？",c:["エンタープライズ検索","画像生成","DNS購入","EC2停止"],a:"エンタープライズ検索"},
{q:"社内文書を横断検索するためのAWSサービスは？",c:["Amazon Kendra","Amazon Polly","AWS Config","Route 53"],a:"Amazon Kendra"},

{q:"Amazon Personalizeの用途は？",c:["パーソナライズされたレコメンデーション","DNS管理","EC2バックアップ","S3暗号化"],a:"パーソナライズされたレコメンデーション"},
{q:"ECサイトでおすすめ商品を表示する用途に適したサービスは？",c:["Amazon Personalize","Amazon Route 53","AWS Backup","Amazon EBS"],a:"Amazon Personalize"},
{q:"Amazon Forecastの用途は？",c:["時系列予測","画像分類","音声合成","DNS管理"],a:"時系列予測"},
{q:"需要予測に使えるAWS AIサービスは？",c:["Amazon Forecast","Amazon Polly","Amazon Rekognition","AWS WAF"],a:"Amazon Forecast"},
{q:"Amazon Fraud Detectorの用途は？",c:["不正検知","翻訳","画像生成","DNS購入"],a:"不正検知"},

{q:"不正取引を検出するサービスは？",c:["Amazon Fraud Detector","Amazon Translate","Amazon S3","AWS Config"],a:"Amazon Fraud Detector"},
{q:"Amazon Lookout for Equipmentの用途は？",c:["設備異常検知","文章翻訳","画像生成","DNS管理"],a:"設備異常検知"},
{q:"Amazon Lookout for Visionの用途は？",c:["製品画像の異常検知","音声合成","DNS購入","S3バックアップ"],a:"製品画像の異常検知"},
{q:"製造ラインの外観検査に使えるサービスは？",c:["Amazon Lookout for Vision","Amazon Comprehend","Amazon Polly","Route 53"],a:"Amazon Lookout for Vision"},
{q:"産業機器の異常検知に使えるサービスは？",c:["Amazon Lookout for Equipment","Amazon Textract","Amazon Translate","AWS Shield"],a:"Amazon Lookout for Equipment"},

{q:"Amazon CodeWhispererの後継として位置づけられる開発支援は？",c:["Amazon Q Developer","Amazon Route 53","Amazon S3","AWS Backup"],a:"Amazon Q Developer"},
{q:"開発者がコード補完や説明を受ける用途に使うサービスは？",c:["Amazon Q Developer","Amazon Macie","Amazon Inspector","AWS Config"],a:"Amazon Q Developer"},
{q:"生成AIで業務ドキュメント検索を支援するサービスは？",c:["Amazon Q Business","Amazon EBS","AWS WAF","Route 53"],a:"Amazon Q Business"},
{q:"Amazon BedrockとSageMakerの違いとして正しいものは？",c:["Bedrockは基盤モデル利用、SageMakerはML開発全般に強い","完全に同じ","BedrockはDNS専用","SageMakerはS3専用"],a:"Bedrockは基盤モデル利用、SageMakerはML開発全般に強い"},
{q:"AIサービスを選ぶ際に最初に確認することは？",c:["解決したいユースケース","EC2の壁紙","DNS名","S3タグ色"],a:"解決したいユースケース"},

{q:"文書要約に適したサービスは？",c:["Amazon Bedrock","Amazon Route 53","AWS Backup","Amazon EBS"],a:"Amazon Bedrock"},
{q:"画像内の物体検出に適したサービスは？",c:["Amazon Rekognition","Amazon Polly","Amazon Translate","Amazon Lex"],a:"Amazon Rekognition"},
{q:"音声文字起こしに適したサービスは？",c:["Amazon Transcribe","Amazon Polly","Amazon Textract","Amazon Comprehend"],a:"Amazon Transcribe"},
{q:"テキスト読み上げに適したサービスは？",c:["Amazon Polly","Amazon Transcribe","Amazon Translate","Amazon Rekognition"],a:"Amazon Polly"},
{q:"機械翻訳に適したサービスは？",c:["Amazon Translate","Amazon Textract","Amazon Kendra","Amazon Macie"],a:"Amazon Translate"},

{q:"文書OCRに適したサービスは？",c:["Amazon Textract","Amazon Forecast","Amazon Personalize","AWS Shield"],a:"Amazon Textract"},
{q:"企業内検索に適したサービスは？",c:["Amazon Kendra","Amazon Rekognition","Amazon Polly","AWS WAF"],a:"Amazon Kendra"},
{q:"会話ボット構築に適したサービスは？",c:["Amazon Lex","Amazon Inspector","Amazon Macie","AWS Config"],a:"Amazon Lex"},
{q:"レコメンデーションに適したサービスは？",c:["Amazon Personalize","Amazon Textract","Amazon Polly","Amazon Translate"],a:"Amazon Personalize"},
{q:"需要予測に適したサービスは？",c:["Amazon Forecast","Amazon Rekognition","Amazon Lex","AWS WAF"],a:"Amazon Forecast"},

{q:"不正検知に適したサービスは？",c:["Amazon Fraud Detector","Amazon Polly","Amazon Translate","Route 53"],a:"Amazon Fraud Detector"},
{q:"生成AIの安全制御に適したBedrock機能は？",c:["Guardrails","Route Table","NACL","Public VIF"],a:"Guardrails"},
{q:"RAG構成に適したBedrock機能は？",c:["Knowledge Bases","NAT Gateway","CloudTrail Trail","VPC Peering"],a:"Knowledge Bases"},
{q:"タスク実行型生成AIアプリに適したBedrock機能は？",c:["Agents","Security Group","EBS Snapshot","Hosted Zone"],a:"Agents"},
{q:"AIサービス利用時の認証・認可に使う基本サービスは？",c:["IAM","Route 53","CloudFront","EBS"],a:"IAM"},

{q:"AIサービスのログ監査に使う代表サービスは？",c:["CloudTrailやCloudWatch","Route 53のみ","EBSのみ","NAT Gatewayのみ"],a:"CloudTrailやCloudWatch"},
{q:"AIサービスのデータ保護で重要なものは？",c:["暗号化、アクセス制御、データ最小化","全データ公開","rootキー共有","ログ削除"],a:"暗号化、アクセス制御、データ最小化"},
{q:"AIサービス選定で考慮すべきことは？",c:["精度、コスト、レイテンシ、セキュリティ","壁紙","DNS TTL","VPC名"],a:"精度、コスト、レイテンシ、セキュリティ"},
{q:"フルマネージドAIサービスを使う利点は？",c:["インフラ管理を減らしてAI機能を利用できる","必ず無料","セキュリティ不要","IAM不要"],a:"インフラ管理を減らしてAI機能を利用できる"},
{q:"AIF-C01のAWSサービス分野で重要な考え方は？",c:["ユースケースに合ったAWS AI/MLサービスを選ぶ","常にEC2だけ使う","DNSだけ見る","S3だけ使う"],a:"ユースケースに合ったAWS AI/MLサービスを選ぶ"}

];