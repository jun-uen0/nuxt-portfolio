---
title: 【AWS】ECSの設定 (Fargateを使用)
date: 2022-01-03T15:11:55.631Z
description: DockerizingされたアプリをECSクラスターで起動する。そのための準備。
tag: AWS
---
### 手順

- ⓵ タスク定義を作成 (Fargate)
    1. Fargateを選択して新しいタスク定義を作成
    2. タスク定義名「express-fargate」
    3. タスクロール：「ecsTaskExecutionRole」
    4. タスクメモリ：「0.5GB」(最小)
    5. タスクCPU：「0.25 vCPU」(最小)
    6. コンテナの追加
        1. コンテナ名：「fromDockerHub」
        2. イメージ：「junuen0/ec2-app:latest」(DockerHubにあるイメージ)
        3. あとは空欄のまま「追加」(※)
    7. 作成
    
- ⓶ クラスター作成
    1. クラスターテンプレート：「ネットワーキングのみ」(Fargate仕様)
    2. クラスター名：「express-fargate-cluster」
    3. VPC作成にチェックをつけない
    4. 作成
    
- ⓷ サービスの作成
    
    サービスの設定
    
    1. 起動タイプ：「FARGATE」
    2. タスク定義：「express-fargate」
    3. リビジョン：「〇〇 (latest)」
    4. サービス名：「express-fargate-service」
    5. タスクの数：「1」
    6. その他の項目は初期値のまま
    
    ネットワーク構成
    
    1. クラスター VPC：選択 (1つだけ)
    2. サブネット：全部選択
    3. セキュリティグループ：「express-764」(デフォルト)
    4. パブリック IP の自動割り当て：「ENABLE」(デフォルト)
    5. ロードバランサーは選べない
    
    Auto Scaling (オプション)
    
    1. サービスの必要数を直接調整しない
    
    ⇒ 確認後、「サービスの作成」を選択
    

- セキュリティグループの設定
    
    ⇒ だれでも3000番ポートにアクセスできるようにセキュリティグループを編集
    
    ![スクリーンショット 2022-01-03 16.34.33.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1287218-397e-44f6-b795-2711d0b7eb33/スクリーンショット_2022-01-03_16.34.33.png)
    
- パブリックIPにアクセスして確認する
    
    `パブリックIP:3000/status`
    
    ![スクリーンショット 2022-01-03 16.35.37.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f6f65a0-61c4-45ad-9d7d-9421b4d61eea/スクリーンショット_2022-01-03_16.35.37.png)