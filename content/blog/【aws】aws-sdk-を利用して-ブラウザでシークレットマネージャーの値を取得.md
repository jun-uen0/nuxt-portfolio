---
title: 【AWS】AWS-SDK を利用して ブラウザでシークレットマネージャーの値を取得
date: 2022-01-12T12:27:52.894Z
description: 簡単なJavaScriptでシークレットマネージャーの値を取得する
tag: AWS
---
### 前提

* AWSシークレットマネージャーでキー作成済み
* Node.js

  *



### 操作

* ⓶ `aws-sdk` のインストール

  ```jsx
  npm install aws-sdk
  ```

    この場合、このエラーメッセージが表示されるので、

  ```
  npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
  ```

    コマンドラインで以下のコマンドを入力

  ```

  npm uninstall --save node-uuid
  npm install --save uuid
  ```
* browserifyをインストール
* *   ブラウザでrequireを使うためのモジュール

      browserify をインストール (サイトの説明だと何故かグローバルインストールだったが、ここではプロジェクト直下にインストールする)

      `プロジェクトのあるディレクトリ`

    ```tsx
    npm i browserify
    ```
* JSファイルを作成

  ```tsx
  let AWS = require('aws-sdk'),
      region = "ap-northeast-1",
      secretName = "secretkey",
      secret;

  // Create a Secrets Manager client
  let client = new AWS.SecretsManager({
      region: region,
      accessKeyId: '<AWSアクセスキー>',
      secretAccessKey: '<シークレットアクセスキー>',
  });

  client.getSecretValue({SecretId: secretName}, function(err, data) {
      if (err) {
        console.error('err:getSecretValue', err.code);
      }
      else {
        console.log("getSecretValue Success")
        
        if ('SecretString' in data) {
            secret = data.SecretString;
        } else {
            let buff = new Buffer(data.SecretBinary, 'base64');
            decodedBinarySecret = buff.toString('ascii');
        }
      }
      
      // Your code goes here. 
      console.log(secret)
      
  });
  ```



* browserify の実行 (bundle)

  ```tsx
  browserify <ターゲットのファイル> -o bundle.js
  ```
* HTMLを作成し、LIve Server などでローカルサーバを立て、ブラウザのデベロッパーコンソールで確認

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <p>Secret Manager</p>
    <script src="bundle.js"></script>
  </body>
  </html>
  ```

### 番外編



* CLIから取得する方法 (簡単)

  * 目的のロールが付与されたEC2インスタンスにSSH接続
  * 暗号化されたテキストを表示： `get-secret-value`
  * 暗号化されたテキスト以外を表示： `describe-secret`

  ```tsx
  aws secretsmanager get-secret-value --region <リージョン> --secret-id <シークレットID (名前)>
  ```


* node.jsで取得する方法

  1. ファイルを作成

    `secret.js`

  ```tsx
  const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

  const REGION = "ap-northeast-1";
  const secretsClient = new SecretsManagerClient({ region: REGION });

  const params = {
    SecretId: "secretkey",
  };

  const run = async () => {
    let data;
    try {
      data = await secretsClient.send(new GetSecretValueCommand(params));
      console.log("data", data);
      return data;
    } catch (err) {
      console.log("err", err);
    }
  };
  run();
  ```

  1. RUN

  ```tsx
  node secret.js
  ```



### 参考

* 公式 GitHub サンプル

[aws-doc-sdk-examples/javascriptv3/example_code/secrets at main · awsdocs/aws-doc-sdk-examples](https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/secrets)

* 全体の把握

[AWS Secrets Manager で機密情報を保存する - げっとシステムログ](https://www.getto.systems/entry/2019/08/03/192052#get-secret)

[aws-sdkを用いてAWS SecretManagerからシークレットを取得する(Node.js TypeScript) - Qiita](https://qiita.com/iamsukesan/items/37d0d6668c4e43410463)

[AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/#getting-Started)

* aws-sdk

[SDK for JavaScript のインストール](https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v2/developer-guide/installing-jssdk.html)

[Class: AWS.SecretsManager](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SecretsManager.html)