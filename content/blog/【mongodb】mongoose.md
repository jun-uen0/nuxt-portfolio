---
title: 【MongoDB】Mongoose
date: 2022-01-15T02:13:13.939Z
description: Mongoose を使った操作とSchema や Modelの基礎
tag: MongoDB
---
### `Mongoose` とは

呼：「マングース」

* MongoDBを操作するためのnpmモジュール
* MongoDBのフィールドに様々な入力設定を行う
* フィールドに挿入するデータ型を設定することができる

### 始め方

* 前提
* NPM
* node (JavaScriptでの確認)
* Mongo Express

※ Mongo Express で確認するため予め用意する必要がある。(参考：[「**mongodbをGUIで。mongo-express**」](https://qiita.com/AkihiroTakamura/items/54c6a5bc1e4d67e94d46))

- - -

1. mongooseをインストール

`プロジェクトのあるディレクトリ`

```bash
npm i mongoose
```

1. `mongoose` を読み込む

`mongo.ts`

```jsx
// mongooseモジュールの読み込み
const mongoose = require('mongoose');

// mongodbのポートの読み込みと、mongoDBのコレクション名(test)をつける
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const Cat:Catというドキュメントを作成
// 'Cat':データモデルの名前
// nameフィールドのデータ型をStringに設定。
const Cat = mongoose.model('Cat', { name: String });

// "Cat"データモデルの新しいインスタンスを作成。
// kittyというドキュメントで、nameは'Zildjian'
const kitty = new Cat({ name: 'Zildjian' });

// kittyドキュメントをデータベースに保存する。保存できたら"meow"と表示させる
kitty.save().then(() => console.log('meow'));
```

* `save()` で保存

1. Mongo-Express で確認

   * データベース「test」

       ![スクリーンショット 2022-01-15 9.15.13.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98ebfbd0-1eb1-4a41-9115-f1a5172a7098/スクリーンショット_2022-01-15_9.15.13.png)
       
   * コレクション「cats」

       ![スクリーンショット 2022-01-15 9.15.32.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22181316-5a88-4468-81cd-a4e0e02c73f0/スクリーンショット_2022-01-15_9.15.32.png)
       
   * ドキュメント「61e2102a52fcbd9311973c07」

       ![スクリーンショット 2022-01-15 9.16.01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/722c8b77-671b-49de-b369-06eba08cfe72/スクリーンショット_2022-01-15_9.16.01.png)
       

### データ型の設定 (Model、Scheme)

* `mongoose` では入力する値のデータ型を設定することができる。
* `Model` でデータ型を定義

  ```jsx
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

  const Verify = mongoose.model('Verify', {
    name: { type: String },
    age: { type: Number },
    isMine: { type: Boolean },
    password: {
      type: String,
      require: true, // 必須項目
      trim: true, // 空白を認識しない
      minlength: 8, // 少なくとも8文字以上
      validate(val){
        if(val.toLowerCase().includes('password')){
          throw new Error ('パスワードに「password」を使用しないでください')
        }
      }
    }
  })

  // 入力
  const firstDoc = new Verify({
    name: 'Jun',
    age: 27,
    isMine: true,
    pasword: 'yyyyyyyy'
  });

  firstDoc.save().then(() => console.log('yes!'));
  ```

  ```jsx
  node mongo.js
  ```

    ![スクリーンショット 2022-01-15 9.58.58.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/799427c4-53b7-423f-801f-3fb6de82472a/スクリーンショット_2022-01-15_9.58.58.png)
    
* `Schema` でモデルをコンパイル

  * `mongoose` には `Schema` と呼ばれるTypeScriptの型エイリアスのような機能がある
  * `Schema` を作成・定義し `Model` へ型定義渡すことで

  1. `schemas.js` を作成

  ```jsx
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  // スキーマ
  var SakeType = new Schema({
    _id: Number,
    type: String
  });

  var Temperature = new Schema({
    _id: Number,
    temperature: String
  });

  var Sake = new Schema({
    brand: String,
    type: { type: Number, ref: 'SakeType' },
    impressions: [{
      temperature: { type: Number, ref: 'Temperature' },
      impression: String
    }]
  });

  // MongoDBへの接続
  mongoose.connect('mongodb://localhost/sake');

  // スキーマからモデルをコンパイルし、モデルをエクスポートする
  // exports.Temperature = mongoose.model('Temperature', Temperature);
  // exports.SakeType = mongoose.model('SakeType', SakeType);
  exports.Sake = mongoose.model('Sake', Sake);
  ```

  * `mongoose` へ接続
  * `Schema` の作成
  * MongoDBへの接続
  * `models.js` へ `Schema` をコンパイルし `exports`
* ドキュメントの検索

  * `mongoose` にはいろいろな操作メソッドが存在する。まずは基本的な `find()` でクエリを実行する。ファイルは先ほどの酒DBで。非常にわかりやすい上に面白いまとめで感謝。

    `find.js`

  ```jsx
  const model = require('./schemas');
  var Sake = model.Sake;

  Sake.find({ brand: '醸し人九平次' }, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  ```

  ```bash
  # コマンド

  ➜  schema git:(master) ✗ node find.js  
  [
    {
      _id: new ObjectId("61e2294d53c916cb3f72867e"),
      brand: '醸し人九平次',
      type: 9,
      impressions: [ [Object], [Object] ],
      __v: 0
    }
  ]
  ```

    やっていること

  * ローカルにあるMongoDBのデーターベース「sake」に接続 ( `schemas.js` で )
  * `schemas.js` で作成された `Schema` 「Sake」をモデルクラスとして受け取る
  * コレクション「sakes」にアクセスし、フィールド「brand」に「醸し人九平次」を含むドキュメントを検索
  * node で実行し結果を表示

### 参考

* 簡単な操作と理解に

[mongooseを使ってmongoDBを記述する - Qiita](https://qiita.com/Molly95554907/items/595a7d3f525d6774d50d)

* `Schema` の理解に

[Node.js用MongoDBライブラリ mongooseの基本操作まとめ（すぐ試せるサンプル付き） - Qiita](https://qiita.com/takehilo/items/4b89f8ee432b0a06c691#mongodb%E3%81%AB%E6%8E%A5%E7%B6%9A%E3%81%97%E3%82%B9%E3%82%AD%E3%83%BC%E3%83%9E%E3%81%8B%E3%82%89%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%81%99%E3%82%8B)

* さらに深堀りした記事

[MongoDB(Mongoose)上級者への道 - Qiita](https://qiita.com/teradonburi/items/e8bad98112515ec7e96e#updatemanyupdateone)