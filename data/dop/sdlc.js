window.quizData = window.quizData || {};

window.quizData.dopSdlc = [

{
q:"SDLCとは何の略？",
c:["Software Development Life Cycle","System Data Load Control","Secure Design Log Center","Service Delivery Logic Code"],
a:"Software Development Life Cycle"
},

{
q:"DOPで重要なSDLCの考え方は？",
c:["継続的な開発・テスト・デプロイ","手動リリースのみ","本番直接修正","監視なし運用"],
a:"継続的な開発・テスト・デプロイ"
},

{
q:"CIとは？",
c:["継続的インテグレーション","継続的監視","構成管理","手動デプロイ"],
a:"継続的インテグレーション"
},

{
q:"CDとは？",
c:["継続的デリバリーまたは継続的デプロイ","継続的削除","暗号化","監査ログ"],
a:"継続的デリバリーまたは継続的デプロイ"
},

{
q:"AWSでCI/CDパイプラインを構築するサービスは？",
c:["CodePipeline","CloudTrail","CloudWatch","Config"],
a:"CodePipeline"
},

{
q:"CodePipelineの役割は？",
c:["リリース工程の自動化","DNS管理","ログ保存","暗号鍵作成"],
a:"リリース工程の自動化"
},

{
q:"ソースコード管理サービスは？",
c:["CodeCommit","CodeBuild","CodeDeploy","CodePipeline"],
a:"CodeCommit"
},

{
q:"CodeBuildの役割は？",
c:["ビルドとテストの実行","DNS管理","監査ログ保存","負荷分散"],
a:"ビルドとテストの実行"
},

{
q:"CodeDeployの役割は？",
c:["アプリケーションのデプロイ自動化","コード保存","ログ検索","認証管理"],
a:"アプリケーションのデプロイ自動化"
},

{
q:"CodeArtifactの用途は？",
c:["パッケージ管理","DNS管理","監査ログ","DDoS対策"],
a:"パッケージ管理"
},

{
q:"CodeGuruの用途は？",
c:["コードレビューと性能改善支援","DNS管理","課金管理","暗号化"],
a:"コードレビューと性能改善支援"
},

{
q:"CodeStarの用途は？",
c:["開発プロジェクト統合管理","監査ログ","データ移行","脅威検知"],
a:"開発プロジェクト統合管理"
},

{
q:"CodePipelineのSourceステージで利用できるものは？",
c:["CodeCommitやGitHub","CloudWatch Alarm","Security Group","KMS Key"],
a:"CodeCommitやGitHub"
},

{
q:"CodePipelineのBuildステージで主に利用するサービスは？",
c:["CodeBuild","CodeDeploy","CloudTrail","SNS"],
a:"CodeBuild"
},

{
q:"CodePipelineのDeployステージで主に利用するサービスは？",
c:["CodeDeploy","CodeCommit","CloudWatch","Config"],
a:"CodeDeploy"
},

{
q:"CodeBuildでビルド手順を定義するファイルは？",
c:["buildspec.yml","package.jsonのみ","template.yamlのみ","policy.json"],
a:"buildspec.yml"
},

{
q:"buildspec.ymlに記述する内容は？",
c:["ビルドコマンドや成果物設定","DNSレコード","IAMユーザー","請求情報"],
a:"ビルドコマンドや成果物設定"
},

{
q:"CodeBuildの成果物保存先としてよく使うサービスは？",
c:["S3","Route53","IAM","CloudTrail"],
a:"S3"
},

{
q:"CodeDeploy AppSpecファイルの役割は？",
c:["デプロイ手順を定義","課金設定","DNS設定","暗号鍵管理"],
a:"デプロイ手順を定義"
},

{
q:"EC2/オンプレミス向けCodeDeployで使うファイルは？",
c:["appspec.yml","buildspec.yml","policy.json","Dockerfileのみ"],
a:"appspec.yml"
},

{
q:"Lambda向けCodeDeployで可能なデプロイ方式は？",
c:["CanaryやLinear","SSH手動","EBS交換","NACL変更"],
a:"CanaryやLinear"
},

{
q:"Blue/Greenデプロイの目的は？",
c:["新旧環境を切り替えてリスクを下げる","ログを削除する","DNSを無効化する","IAMを削除する"],
a:"新旧環境を切り替えてリスクを下げる"
},

{
q:"Canaryデプロイの特徴は？",
c:["一部トラフィックから段階的に展開","全停止して更新","DBのみ更新","監視なしで更新"],
a:"一部トラフィックから段階的に展開"
},

{
q:"Linearデプロイの特徴は？",
c:["一定割合ずつ段階的にトラフィック移行","一括切替","手動SSH","バックアップのみ"],
a:"一定割合ずつ段階的にトラフィック移行"
},

{
q:"All-at-onceデプロイの特徴は？",
c:["全体を一度に更新","一部だけ更新","DNSだけ更新","監視のみ"],
a:"全体を一度に更新"
},

{
q:"CodePipelineのSourceステージで利用できるAWSサービスは？",
c:["CodeCommit","CloudWatch","Route53","SNS"],
a:"CodeCommit"
},

{
q:"CodePipelineのBuildステージで一般的に利用するサービスは？",
c:["CodeBuild","CodeDeploy","CodeArtifact","CloudTrail"],
a:"CodeBuild"
},

{
q:"CodePipelineのDeployステージで利用するサービスは？",
c:["CodeDeploy","CodeCommit","CloudFormationのみ","SNS"],
a:"CodeDeploy"
},

{
q:"CodeBuildでビルド手順を記述するファイル名は？",
c:["buildspec.yml","Dockerfile","template.yaml","appspec.yml"],
a:"buildspec.yml"
},

{
q:"CodeBuildで環境変数を管理する方法として適切なのは？",
c:["Parameter StoreやSecrets Manager","HTMLに埋め込む","Gitへ平文保存","手入力のみ"],
a:"Parameter StoreやSecrets Manager"
},

{
q:"CodeDeployのEC2デプロイで利用する設定ファイルは？",
c:["appspec.yml","buildspec.yml","package.json","serverless.yml"],
a:"appspec.yml"
},

{
q:"CodeDeployのBlue/Greenデプロイの利点は？",
c:["ダウンタイムを最小化できる","ログ削除が不要","IAM不要","DNS不要"],
a:"ダウンタイムを最小化できる"
},

{
q:"Canaryデプロイとは？",
c:["一部トラフィックのみ新バージョンへ流す","全台一括更新","DNSのみ更新","EC2停止"],
a:"一部トラフィックのみ新バージョンへ流す"
},

{
q:"Linearデプロイとは？",
c:["一定割合ずつ切り替える","一括更新","手動更新","停止して更新"],
a:"一定割合ずつ切り替える"
},

{
q:"All-at-onceデプロイとは？",
c:["全体を一度に更新","段階更新","1台ずつ更新","DNS更新のみ"],
a:"全体を一度に更新"
},

{
q:"CodeArtifactの用途は？",
c:["パッケージ管理","監査ログ","DNS管理","EC2管理"],
a:"パッケージ管理"
},

{
q:"CodeGuru Reviewerの役割は？",
c:["コードレビュー支援","ログ分析","DNS設定","バックアップ"],
a:"コードレビュー支援"
},

{
q:"CodeGuru Profilerの役割は？",
c:["アプリ性能分析","脆弱性診断","DDoS対策","IAM管理"],
a:"アプリ性能分析"
},

{
q:"CodeStar Connectionsの用途は？",
c:["GitHubなど外部リポジトリ連携","S3暗号化","CloudWatch監視","SNS通知"],
a:"GitHubなど外部リポジトリ連携"
},

{
q:"GitHubからCodePipelineを起動する一般的な方法は？",
c:["Webhook","SSH","FTP","SMTP"],
a:"Webhook"
},

{
q:"CIの主な目的は？",
c:["コードを頻繁に統合し品質を高める","DNS管理","課金管理","IAM作成"],
a:"コードを頻繁に統合し品質を高める"
},

{
q:"CDの主な目的は？",
c:["継続的なリリース","監査ログ保存","バックアップ","暗号化"],
a:"継続的なリリース"
},

{
q:"パイプラインで自動テストを行う理由は？",
c:["品質向上","DNS高速化","IAM削除","S3圧縮"],
a:"品質向上"
},

{
q:"本番環境への直接コミットを避ける理由は？",
c:["品質と安全性を保つため","コスト削減","暗号化","ログ削除"],
a:"品質と安全性を保つため"
},

{
q:"Pull Requestの目的は？",
c:["変更内容のレビュー","DNS変更","IAM更新","CloudTrail削除"],
a:"変更内容のレビュー"
},

{
q:"Infrastructure as Codeの利点は？",
c:["環境を再現可能にする","監視不要","IAM不要","DNS不要"],
a:"環境を再現可能にする"
},

{
q:"CloudFormation Change Setの目的は？",
c:["変更内容を事前確認","ログ分析","課金削減","DNS変更"],
a:"変更内容を事前確認"
},

{
q:"AWS CDKの特徴は？",
c:["プログラミング言語でIaCを書く","HTML専用","DNS専用","監査専用"],
a:"プログラミング言語でIaCを書く"
},

{
q:"SAMの用途は？",
c:["サーバーレスアプリの構築","EC2監視","Route53管理","IAM管理"],
a:"サーバーレスアプリの構築"
},

{
q:"DOP-C02でSDLCの重要な考え方は？",
c:["自動化・テスト・継続的デリバリー","手動デプロイ","本番直接編集","監視しない"],
a:"自動化・テスト・継続的デリバリー"
},

{
q:"CodePipelineで手動承認を入れる目的は？",
c:["本番反映前に人が確認する","DNSを作る","S3を削除する","IAMを暗号化する"],
a:"本番反映前に人が確認する"
},

{
q:"CodePipelineのManual Approvalアクションでできることは？",
c:["承認されるまで処理を停止","EC2を自動削除","ログを圧縮","DNSを変更"],
a:"承認されるまで処理を停止"
},

{
q:"CodeBuildのビルド環境で指定するものは？",
c:["ランタイムやコンピュートタイプ","Route53ゾーン","IAMユーザー名","S3バケットACLのみ"],
a:"ランタイムやコンピュートタイプ"
},

{
q:"CodeBuildのキャッシュ機能の目的は？",
c:["ビルド時間短縮","DNS管理","IAM削除","ログ停止"],
a:"ビルド時間短縮"
},

{
q:"CodeBuildでDockerイメージを作成する場合に必要な設定は？",
c:["Privileged mode","Public Subnet","SCP","NACL"],
a:"Privileged mode"
},

{
q:"ECRの用途は？",
c:["コンテナイメージ保存","DNS管理","ログ分析","IAM認証のみ"],
a:"コンテナイメージ保存"
},

{
q:"ECRイメージスキャンの目的は？",
c:["脆弱性検出","DNS高速化","EC2起動","S3暗号化"],
a:"脆弱性検出"
},

{
q:"CodeDeployで失敗時に重要な機能は？",
c:["Rollback","DNS Transfer","S3 Select","IAM Rotate"],
a:"Rollback"
},

{
q:"CodeDeploy Auto Rollbackのトリガーにできるものは？",
c:["CloudWatch Alarm","Route53 Zone","IAM User","S3 Folder"],
a:"CloudWatch Alarm"
},

{
q:"CodeDeploy Deployment Groupで指定するものは？",
c:["デプロイ対象","DNSレコード","請求情報","CloudTrail証跡"],
a:"デプロイ対象"
},

{
q:"EC2向けCodeDeployで必要なエージェントは？",
c:["CodeDeploy Agent","CloudWatch Agentのみ","SSM Agentのみ","X-Ray Daemonのみ"],
a:"CodeDeploy Agent"
},

{
q:"CodeDeploy Hooksの目的は？",
c:["デプロイ前後に処理を実行","DNSを変更","課金を止める","IAMを削除"],
a:"デプロイ前後に処理を実行"
},

{
q:"LambdaデプロイでPreTraffic Hookを使う目的は？",
c:["本番トラフィック前に検証","DNS作成","EBS暗号化","ログ削除"],
a:"本番トラフィック前に検証"
},

{
q:"LambdaデプロイでPostTraffic Hookを使う目的は？",
c:["切替後の検証","EC2起動","Route53削除","S3圧縮"],
a:"切替後の検証"
},

{
q:"ECS Blue/Greenデプロイで利用できるサービスは？",
c:["CodeDeploy","CodeCommit","CloudTrail","Athena"],
a:"CodeDeploy"
},

{
q:"ECSで新旧タスクへトラフィックを切り替える要素は？",
c:["Target Group","S3 Bucket","IAM Group","Hosted Zone"],
a:"Target Group"
},

{
q:"CloudFormationをCodePipelineで実行する目的は？",
c:["インフラ変更を自動化","DNSを暗号化","ログを削除","IAMを共有"],
a:"インフラ変更を自動化"
},

{
q:"CloudFormation Change Setをパイプラインに入れる目的は？",
c:["変更内容を確認してから適用","EC2を削除","S3を公開","DNS停止"],
a:"変更内容を確認してから適用"
},

{
q:"SAM Pipelineの用途は？",
c:["サーバレスCI/CD構築","DNS管理","コスト分析","ログ検索"],
a:"サーバレスCI/CD構築"
},

{
q:"CDK Pipelinesの用途は？",
c:["CDKアプリの継続的デリバリー","CloudTrail停止","IAM削除","Route53作成のみ"],
a:"CDKアプリの継続的デリバリー"
},

{
q:"パイプラインの成果物を保存する代表サービスは？",
c:["S3","Route53","IAM","CloudWatch Alarm"],
a:"S3"
},

{
q:"CodePipeline Artifact Storeとは？",
c:["ステージ間の成果物保存先","DNS保存先","IAM保存先","ログ監視先"],
a:"ステージ間の成果物保存先"
},

{
q:"パイプラインで環境ごとに承認を入れる理由は？",
c:["リリースリスクを下げる","ログを消す","DNSを高速化","S3を削除する"],
a:"リリースリスクを下げる"
},

{
q:"DOP-C02で安全なリリースに重要なものは？",
c:["自動テストと段階的デプロイ","本番直接編集","監視なし","手動コピー"],
a:"自動テストと段階的デプロイ"
},

{
q:"SDLC自動化で避けるべきことは？",
c:["手動で毎回異なる手順を実行する","テストを自動化する","承認を設ける","変更履歴を残す"],
a:"手動で毎回異なる手順を実行する"
},

{
q:"Feature Flagの目的は？",
c:["機能の有効・無効を切り替える","DNSを削除する","IAMを作成する","S3を暗号化する"],
a:"機能の有効・無効を切り替える"
},

{
q:"Canaryリリースで重要な監視項目は？",
c:["エラー率・レイテンシ","IAMユーザー数","S3バケット名","DNSゾーン数"],
a:"エラー率・レイテンシ"
},

{
q:"Blue/Greenデプロイで切替後に旧環境を残す理由は？",
c:["ロールバックしやすくする","課金を増やす","DNSを固定する","IAMを共有する"],
a:"ロールバックしやすくする"
},

{
q:"CodeDeployでCloudWatch Alarmを使う理由は？",
c:["異常時に自動ロールバックする","DNSを変更する","S3を公開する","IAMを削除する"],
a:"異常時に自動ロールバックする"
},

{
q:"CodePipelineで複数環境へ順番にデプロイする目的は？",
c:["段階的に品質を確認する","ログを削除する","DNSを暗号化する","S3を停止する"],
a:"段階的に品質を確認する"
},

{
q:"開発・ステージング・本番を分ける理由は？",
c:["本番影響を避けて検証する","料金を必ず無料にする","IAM不要にする","監視不要にする"],
a:"本番影響を避けて検証する"
},

{
q:"パイプラインで単体テストを実行する目的は？",
c:["早期に不具合を検出する","DNSを管理する","S3を削除する","IAMを暗号化する"],
a:"早期に不具合を検出する"
},

{
q:"パイプラインで統合テストを実行する目的は？",
c:["複数機能の連携を確認する","EC2を削除する","ログを圧縮する","Route53を停止する"],
a:"複数機能の連携を確認する"
},

{
q:"デプロイ失敗時に必要な設計は？",
c:["ロールバック設計","ログ削除","DNS削除","IAM共有"],
a:"ロールバック設計"
},

{
q:"Immutable Deploymentの特徴は？",
c:["新環境を作って切り替える","既存環境を直接変更","手動SSH更新","監視なし更新"],
a:"新環境を作って切り替える"
},

{
q:"Rolling Deploymentの特徴は？",
c:["一部ずつ順番に更新","全停止して更新","DNSのみ変更","IAMのみ更新"],
a:"一部ずつ順番に更新"
},

{
q:"ECSでRolling Updateを行う目的は？",
c:["稼働を維持しながら更新","全タスク停止","DNS削除","IAM削除"],
a:"稼働を維持しながら更新"
},

{
q:"Lambda Aliasを使ったデプロイの利点は？",
c:["バージョン間でトラフィック制御できる","EC2を起動できる","S3を暗号化する","DNSを削除する"],
a:"バージョン間でトラフィック制御できる"
},

{
q:"Lambda Versionの役割は？",
c:["関数コードの固定版を管理","IAMユーザー作成","DNS管理","ログ削除"],
a:"関数コードの固定版を管理"
},

{
q:"Lambda Aliasの役割は？",
c:["特定バージョンへの参照","EC2タイプ","S3階層","VPC CIDR"],
a:"特定バージョンへの参照"
},

{
q:"CodeBuildでテスト失敗時に期待される動作は？",
c:["パイプラインを停止する","本番へ強制デプロイ","ログを削除","DNS変更"],
a:"パイプラインを停止する"
},

{
q:"CodePipelineで承認者に通知するサービスは？",
c:["SNS","EBS","EFS","Athena"],
a:"SNS"
},

{
q:"CodePipelineのクロスアカウントデプロイで重要なのは？",
c:["IAMロールと権限設計","DNS TTLのみ","S3公開設定のみ","EC2サイズのみ"],
a:"IAMロールと権限設計"
},

{
q:"クロスリージョンパイプラインで必要になるものは？",
c:["リージョンごとのArtifact Store","IAMユーザー共有","DNS削除","CloudTrail停止"],
a:"リージョンごとのArtifact Store"
},

{
q:"デプロイ後に自動検証を行う目的は？",
c:["リリース品質確認","課金停止","IAM削除","S3公開"],
a:"リリース品質確認"
},

{
q:"DOP-C02でCI/CD設計の中心となる考え方は？",
c:["安全で再現性のある自動リリース","本番直接編集","手動FTP","監視なし"],
a:"安全で再現性のある自動リリース"
},

{
q:"パイプライン定義をコード化する利点は？",
c:["変更履歴を管理できる","DNSが不要になる","IAMが不要になる","ログが不要になる"],
a:"変更履歴を管理できる"
},

{
q:"CI/CDでセキュリティチェックを組み込む目的は？",
c:["早期に脆弱性を検出する","DNSを高速化する","EC2を削除する","S3を圧縮する"],
a:"早期に脆弱性を検出する"
},

{
q:"DOP-C02でSDLC自動化のベストプラクティスは？",
c:["小さく頻繁に安全にリリースする","巨大変更を一括反映","手動作業を増やす","本番で直接修正"],
a:"小さく頻繁に安全にリリースする"
},

{
q:"SDLC自動化で最も避けるべき状態は？",
c:["属人的な手動リリース","自動テスト","承認フロー","ロールバック設計"],
a:"属人的な手動リリース"
}



];