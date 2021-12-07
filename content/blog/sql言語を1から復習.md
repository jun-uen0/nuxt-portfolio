---
title: 【SQL】SQL言語を1から復習
date: 2021-12-03T00:15:17.274Z
description: なんとなく使っていたSQL言語を体系的に学び直す
---
### SQL言語とは

* RDBのDBMSを操作するための言語
* CRUDを行うことができる



### CRUDとは

追加、読取、更新、削除

* **C = Create**
* **R = Read**
* **U = Update**
* **D = Delete**

→ 以上4つの基本的な言語機能のことを 「CRUD」 という。



### SQL文の種類

* データの定義 (DDL = Data Description Language)：テーブルの操作

    **CREATE：テーブルの作成**

    **DROP：テーブルの削除**

    **ALTER：テーブルの更新**

    **JOIN：テーブルの結合**
    
* データの制御 (DML = Data Management Language ) ：データの操作

    **SELECT：データを取得**

    **INSERT：データを追加**

    **UPDATE：データを更新**

    **DELETE：データを削除**
    
* データの制御 (DCL = Data Control Language ) ：アクセスの制御

    **GRANT：ユーザー権限を付与**

    **BEGIN：トランザクションを開始**

    **COMMIT：トランザクションを確定**

    **ROLLBACK：トランザクションの取消**
    



### テーブル操作 (DDL)

[実際にテーブル作成をする動画](https://youtu.be/8hWoyQKErTc?t=374)

* 拡張性を保つためには**正規表現**を3次まで行い、DB設計をする
* たくさんの型が存在する
* MySQLの主な型

    数値型

  * **INT**
  * TINYINT
  * BIGINT

    文字列型

  * **VARCHAR：タイトルなど短い文**
  * **TEXT：本文など長い文**

    日付と時間型

  * **DATE：日付の格納**
  * **TIMESTAMP：作成時、更新時、などの時間を保存**
* プライマリーキーとオートインクリメント

  * PK = プライマリーキー

      → RDBにおいてテーブル結合をする際に鍵となる一意のID
      
  * A_I = オートインクリメント

      → 自動で1から順に番号を降ってくれる (連番)
      



### データ操作 (DML)

[実際にデータを操作する動画](https://youtu.be/8hWoyQKErTc?t=644)

* INSERT (データの追加)

    `insert.php`

  ```sql
  INSERT INTO <テーブル名> (カラム名) VALUES (入れたい値);
  ```
* DELETE (データの削除)

    `delete.php`

  ```sql
  DELETE FROM <テーブル名> WHERE (カラム名) = 消したい値;
  ```


**💡 SQL文を大文字で書いた方がパフォーマンスが良くなる (Oracleのみ)**