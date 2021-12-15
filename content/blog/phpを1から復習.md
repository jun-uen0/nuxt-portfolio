---
title: 【PHP】PHPを1から復習
date: 2021-11-30T22:45:45.706Z
description: 仕事で使うことになったので、PHPを一から復習。他の言語でそれなりに経験を積んだ後学び直すと新たな発見や気づきがあっておもしろい！
tag: PHP
---


### **PHPとは**

* スクリプト言語
* サーバーサイド言語
* Wordpressなどの有名なフレームワークが存在する



### MAMPとは

* M：Macintosh PC
* A：Apache (Webサーバ)
* M：MySQL (DBサーバ)
* P：PHP (プログラミング言語)



### PHPファイルを保存する場所

* 「/Applications/MAMP/htdocs」

  ![スクリーンショット 2021-11-30 19.24.37.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4f210f2-ee4d-4399-ba9e-557f3b34c28f/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2021-11-30_19.24.37.png)
* ダウンロードしたMAMPアプリを開き、その中にある「htdocs」の中にPHPファイルを保存する。そうすることで `[localhost](<http://localhost>)` (または `localhost:8888` ) でファイルを確認することができる。



### <?php?>

* PHPファイルは `<?php` ではじまり、 `?>` で終わる
* サンプルコード

  ```php

  ```

### echo "hello world";

* 文字を書くときは `echo` を使う
* サンプルコード

  ```php

  ```

### 「;」<- エラーのもと！

* 行の末尾は必ず `;` をつける

⚠️ エラーの大半が `;` のつけ忘れ



### 変数の命名規則

* **先頭に `$` マーク**がつく
* `**$` マークの後\*\*は文字のみ、**数字は使えない**
* 半角数字とアンスコ (_) のみ
* **大文字、小文字を区別**すること
* **スネークケース**か**キャメルケース**で記述すること

### 定数の命名規則

* **大文字**であること

  `const ID = "定数"`



### データ型

PHPには**8種類のデータ型**がある

* string：文字列型
* integer：整数型
* double：浮動小数点型
* boolean：論理型
* array：配列型
* object：オブジェクト型
* null：NULL型
* resource：リソース型



### 便利なフォーム機能

PHPには**フォームで値を受け取るための変数がすでに用意**されている

* &_POST：<form method="post" \~\~~> の値を**配列で受け取る**
* &_GET ：<form method="get" \~\~~> の値を**配列で受け取る**
* `form.html`

  ```php
  <form method="post" action="blog.php">
  	<input type="text" name="title">
  	<input type="submit" value="送信">
  </form>
  ```

  → `blog.php` 内にて `post` の値を配列で受け取る

  ※ `name` の値 (ここでは `title` )が配列のキーになる
* フォームのセキュリティ対策

  > 受け取った値には**特殊文字のエンコード**が必要

  → 悪意あるスクリプト送信を防ぐ

  エンコードしないと、**データベースに値**を入れられてしまう

  方法

  PHPには**特殊文字をエンコードしてくれるメソッド**が用意されている。

  `htmlspecialchars`

  * ENT_CONPAT：ダブルクオートのみ変換
  * **ENT_QUOTES：シングル・ダブルクオートを変換**
  * ENT_NOQUOTES：両方とも変換しない

  ```php
  $title = htmlspecialchars($blog,ENT_QUOTES,'UTF-8');
  ```
* GETとPOSTの使い分け

  * GET：ページを受け取るときに使用

    **URLで値が送信される**

    `http://localhost:8888/blog.php?title=こんにちは&contennt=どうも`

    → 「クエリストリング」と呼ぶ。

    主に画像表示や検索機能で使用
  * POST：データを送るときに使用

    **ボディにデータが送信される**

    `http://localhost:8888/blog.php`

    データを送る場合は**基本 POST**