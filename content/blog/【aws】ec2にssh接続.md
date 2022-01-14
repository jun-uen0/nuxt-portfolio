---
title: 【AWS】EC2にSSH接続
date: 2022-01-14T23:28:37.047Z
description: EC2インスタンスSSH接続する初歩的な操作を備忘録として残す。
tag: AWS
---
### 手順

- ⓵ キーペア作成
    
    ![68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3233343634302f62303666363661392d343433302d666337372d623565342d6433306565393334303937342e706e67.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/569da4fc-e8af-4d7a-a915-8effa1aab0bd/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3233343634302f62303666363661392d343433302d666337372d623565342d6433306565393334303937342e706e67.png)
    
- ⓶ 権限設定
    
    ```yaml
    mv /Users/username/Downloads/web_app.pem  ~/.ssh
    ```
    
    ```yaml
    chmod 600 /Users/username/.ssh/○○.pem
    ```
    
- ⓷ 接続
    
    ```yaml
    ssh -i /Users/username/.ssh/○○.pem ec2-user@ec2のグローバルIP
    ```