---
title: 【インフラ】GitLab CI/CD 基本
date: 2022-01-05T00:43:53.215Z
description: GitLab CI/CD の設定を通してGitLabに慣れてみる。
tag: インフラ
---
### **Gitlab CI/CDとは**

* Gitlab上で作るCI/CDシステム
* `.gitlab-ci.yml`  で定義する



### ルール・定義

* 1つのまとまった処理の単位を `pipeline` とする
* `pipeline` は `job` の集合体
* `job` は `stage` によってカゴライズ・順序づけができる
* CI/CDの実行主体を **Runner** と呼ぶ (Gitlab.comに存在する)
* Runner には Docker, kubernetes, VirtualBox などの仮想環境、

    SSH、Shell executor などのRunnerをそのまま実行するものがある
    

🤔 今のところは \`.gitlab-ci.yml\` = Runner の認識でいいかも知れない



### `.gitlab-ci.yml`サンプル

```yaml
stages:
  - prepare
  - echo

prepare-job:
  stage: prepare
  script: 
    - echo "「echo-jobが走る前に実行」"

echo-job:
  stage: echo
  script: 
    - echo "Gitlab　CI/CD　の実行"
```

* `stage` : `job` の実行順序を制御
* 初回はクレカを登録しなければならない

    ![スクリーンショット 2022-01-04 12.25.48.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57d7a560-d318-4c91-aab5-57b61c856a91/スクリーンショット_2022-01-04_12.25.48.png)
* Gitlabダッシュボード、CI/CDから 「CI LInt」 でリンティング、「Run Pipeline」でパイプラインの実行ができる。



### **Gitlab runner について**

大別して2種類の **Gitlab runner** がある

* **shared runner**

  * 上記サンプルのような runner
  * Gitlab上でリソースを共有している
* **specific runner**

  * (物理、仮想)環境で Gitlab runner を導入し、token を用いて register している場合



### 参考

[GitLab CI/CD 基本編 ～チュートリアルで感覚を掴む～ | Insight Technology](https://www.insight-tec.com/tech-blog/20200929_gitlab/)