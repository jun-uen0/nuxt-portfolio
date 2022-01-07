---
title: 【Firebase】ReactアプリにFirebaseを導入
date: 2022-01-07T01:15:51.056Z
description: "Firebaseの導入 (React以外の開発環境でもほぼ一緒なので便宜読み替える) "
tag: Firebase
---
### 実際に使用するFirebaseのサービス

* Firestore
* Cloud Functions
* Hosting



### 前提

* firebase-tool がグローバルインストールされている
* Firebaseプロジェクトの作成、及び FirestoreのDBが作成されている



### インストール手順 (ターミナル)

1. Reactアプリのあるディレクトリで `firebase init`
2. **Firestore, Cloud Functions, Hosting** の3を選択 (スペースキー)
3. 使用するFirebaseプロジェクトを選択
4. **YES**「firestore.rules」を選択
5. **YES**「firestore.indexes.json」を選択
6. Cloud Functions のプログラミング言語は「**TypeScript**」を選択
7. **YES**「ESLint」を選択
8. What do you want to use as your public directory? ⇒ 「**build**」
9. Configure as a single-page app (rewrite all urls to /index.html)? ⇒ 「**y**」
10. Set up automatic builds and deploys with GitHub? 「**No**」
11. `npm run build` 
12. `functions/src/index.ts` を全てコメントアウト
13. `firebase deploy`

* デプロイ時に怒られたら ① 「 `functions predeploy error` 」

    原因：ESLintで引っかかる。

    解決： `firebase.json` を編集(削除)

  * 削除する箇所

      `firebase.json`

    ```jsx
    {
    	...
      "functions": {
        "predeploy": [
          "npm --prefix \"$RESOURCE_DIR\" run lint",
          "npm --prefix \"$RESOURCE_DIR\" run build"
        ]
      },
    	...
    }

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    {
    	...
      "functions": {
    		// 削除
      },
    	...
    }
    ```

    1. `functions` の `predeploy` の部分を全て削除する
    2. もう一回デプロイ
* デプロイ時に怒られたら ② 「アップグレードしてね」(Pay-as-you-go)

    デプロイ自体がうまくいってもクレカを登録してないと使えない

  ```jsx
  Error: Your project react-chat-bot-b494f must be on the Blaze (pay-as-you-go) plan to complete this command. Required API cloudbuild.googleapis.com can't be enabled until the upgrade is complete. To upgrade, visit the following URL:
  https://console.firebase.google.com/project/react-chat-bot-b494f/usage/details
  ```

  1. URLへ行き、Blazeプラン (Pay as you go) に変更する

    ※ 「budget alert」 という機能があるので、課金がかかりそうな時にのアラートを設定する。
    

### 参考

[日本一わかりやすいReact入門【実践編】#3...Firebaseプロジェクトの作成と初めてのデプロイ](https://www.youtube.com/watch?v=ta2m6nfYHuQ&list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn&index=3)

[firebase deploy時のeslintを無効にする - Tech Tips](https://sumito.jp/2019/12/11/firebase-deploy%e6%99%82%e3%81%aeeslint%e3%82%92%e7%84%a1%e5%8a%b9%e3%81%ab%e3%81%99%e3%82%8b/)

[functions predeploy errorの回避及び対処方法について - Qiita](https://qiita.com/pontarou194/items/55b53700082a59a148fb)