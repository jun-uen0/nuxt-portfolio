---
title: 【インフラ】GitLab CI/CD “Runner”
date: 2022-01-05T12:08:59.534Z
description: 昨日に引き続き、GitLab CI/CD の設定。今回は "Runner" について
tag: インフラ
---
### **Shared Runner**

* GitLabがデフォルトで提供する機能
* 簡単CI/CDに適している

スペック (Linux版とWindows版で異なる)

* GCP n1-standard-1 instances

  * CoreOS + Docker Engine
  * vCPU:1
  * RAM:3.75GB
  * HDD:25GB

（参考: <https://docs.gitlab.com/ee/user/gitlab_com/#linux-shared-runners>）



### **Specific Runner**

* 自前のマシンリソースを使う時に適する
* Projectごとに Runnerを使い分ける場合



### 参考

[GitLab CI/CD 実践編 ～GitLab Pagesを使ったドキュメントのホスティング～ | Insight Technology](https://www.insight-tec.com/tech-blog/20201119_gitlab/)

[GitLab CI/CD 発展編 ～GitLab Runnerの使い方～ | Insight Technology](https://www.insight-tec.com/tech-blog/20201222_gitlab_runner/)