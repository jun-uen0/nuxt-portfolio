---
title: 【JavaScript】コールバック関数
date: 2022-01-03T00:09:38.439Z
description: TypeScriptでも重要なJavaScriptのコールバック関数の挙動を見直す。
tag: JavaScript
---
### コールバック関数とは

> **他の関数に引数として渡される関数**で、**外側の関数で何らかの処理やアクションを実行**する関数のこと。
> 

```tsx
function greeting(name) {
  alert('こんにちは ' + name + '　さん');
}

function input(callback) {
  let name = prompt('名前を入力');
  callback(name);
}

input(greeting);
```

1. `input` 関数にて、名前を入力 ⇒ 変数 `name` に代入
2. `input` 関数にて、変数 `name` を `callback` 
3. `input` 関数にて、`greeting` 関数を引数として渡す
4. `greeting` 関数にて、`input` 関数で定義されていた変数 `name`の値を受け取る
5. 結果として「こんにちは 〇〇 さん」のアラートが呼び出される。

⇒ メリット：単一責任の法則に則った方法で関数定義ができる。

### 参考

[Callback function (コールバック関数) - MDN Web Docs 用語集: ウェブ関連用語の定義 | MDN](https://developer.mozilla.org/ja/docs/Glossary/Callback_function)