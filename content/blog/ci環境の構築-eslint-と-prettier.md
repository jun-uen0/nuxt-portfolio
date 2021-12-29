---
title: 【TypeScript】CI環境の構築 (ESLint と Prettier)
date: 2021-12-28T03:16:29.396Z
description: TypeScriptで便利なCI設定を各用語を理解しながら進める
tag: TypeScript
---
### 前提

下記の基礎的な知識がある

* [CIとパイプライン](https://www.notion.so/CI-662aa0e507c344de960b0cd6aceccacb)
* [ESLint](https://www.notion.so/ESLint-a987b74c70ee4f589d1321e8b6466aa0)
* [Prettier](https://www.notion.so/Prettier-a5ba7e7292184e058192f5e98357a3c6)

### パッケージインストール

* ① NPMインストール (※ 開発用 `--save-dev` )

    `プロジェクト直下`

  ```json
  npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged
  ```

  * `eslint-config-prettier` ：ESLintとPrettierの併用
  * `@typescript-eslint/parser` ：ESLintでTypeScriptを解析する
  * `@typescript-eslint/eslint-plugin` ：ESLintでTypeScriptのチェックを行うプラグイン
  * `husky` ：Gitコマンドをフックにしてべつのコマンドを呼び出す
  * `lint-staged` ：コミットしたファイル (stagingにあるファイル)にlintを実行する

### Prettier 設定

1. ルートディレクトリで `.prettierrc` を作成
2. 設定値を記述

   * `.prettierrc`

     ```json
     {
       "printWidth": 120,
       "singleQuote": true,
       "semi": false
     }
     ```

     * `printWidth` ：「何文字で折り返すか」を決定する。デフォルトでは `80` だが最近のパソコンは `120` でも横にスクロールせずにみることができる。
     * `singleQuote` ：シングルクオーツに対応するか
     * `semi` ：文末のセミコロンは Vim で邪魔になる

### ESLint 設定

ここではJSファイルで記述しているが、JSONファイルでも記述することができる。

1. ルートディレクトリで `.eslintrc.js` を作成
2. 設定値を記述

   * `.eslintrc.js`

     ```json
     module.exports = {
       env: {
         browser: true,
         es6: true
       },
       extends: [
         "eslint:recommended",
         "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
         "prettier", // (※1) prettierのextendsは他のextendsより後に記述する
         "prettier/@typescript-eslint",
       ],
       plugins: ["@typescript-eslint"],
       parser: "@typescript-eslint/parser",
       parserOptions: {
         "sourceType": "module",
         "project": "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
       },
       root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
       rules: {}
     }
     ```

     * (※1) `extends`の `prettier`：の他のextendsの**後に記述する**

### pack.json にもちょっと追加

* リンティングの設定

    `package.json`

  ```json
  "scripts": {
      "build": "webpack --mode=production",
      "start": "webpack-cli serve --mode development",
  		
  		// 下記2行を追加
      "lint": "eslint --fix 'src/**/*.{js,ts}'",
      "lint-fix": "eslint --fix './src/**/*.{js,ts}' && prettier --write './src/**/*.{js,ts}'"
    
  	},
  ```

  * `scr`の拡張子が `js` か `ts` の全てのファイルを参照
  * `**` ：ファイル内全てを選択
  * `&& prettier` ：Prettierを使用し、コードを整形
* `husky` の設定

    `package.json`

  ```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  ```

  * コミット前に `lint-staged` を呼び出す
* `lint-staged` の設定

    `package.json`

  ```json
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "npm run lint-fix" // 実際に実行するコマンド
    ]
  }
  ```

  * 「どのファイルにたいしてリンティングを実行するか」を設定する。
* Git にコミット

    必要に応じて `.gitignore` を作成してコミット

    ![スクリーンショット 2021-12-28 11.52.55.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5e6e245-ce55-4b45-9142-94f62481912b/スクリーンショット_2021-12-28_11.52.55.png)
    

### 参考

[CI環境の構築 (ESLint と Prettier)](https://www.notion.so/CI-ESLint-Prettier-6a4a33738473474a993cac24b296a302) 

[【日本一わかりやすいTypeScript入門】ESLintとPrettierでコードの品質を高めよう](https://www.youtube.com/watch?v=R35LJL6a-p0&list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad&index=3)

<https://github.com/deatiger/ts-basic-demo>