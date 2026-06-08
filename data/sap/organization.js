window.quizData = window.quizData || {};

window.quizData.sapOrganization = [

{
q:"AWS Organizationsで複数アカウントに一括で制限をかける機能は？",
c:["SCP","IAMユーザー","Security Group","Route Table"],
a:"SCP",
e:"SCPはService Control Policyの略で、組織単位で利用可能なAWS操作を制限できます。"
},

{
q:"複数AWSアカウントの請求をまとめる機能は？",
c:["一括請求","Auto Scaling","CloudFront","Direct Connect"],
a:"一括請求"
},

{
q:"AWS Control Towerの主な目的は？",
c:["マルチアカウント環境の標準構築","EC2の高速化","S3の暗号化解除","DNS管理"],
a:"マルチアカウント環境の標準構築"
},

{
q:"本番・開発・監査アカウントを分ける主な理由は？",
c:["権限分離と影響範囲の限定","料金を必ず無料にするため","リージョンを増やすため","EC2を停止しないため"],
a:"権限分離と影響範囲の限定"
},

{
q:"AWS Organizationsでアカウントを階層管理する単位は？",
c:["OU","VPC","Subnet","AMI"],
a:"OU"
}

];