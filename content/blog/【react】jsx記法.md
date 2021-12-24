---
title: 【React】JSX記法
date: 2021-12-24T02:41:34.067Z
description: Reactに必要なJSX記法について基礎から学ぶ。
tag: React
---
### JSXとは

* JavaScriptの拡張言語 (Reactを開発したFB社がJSXも開発した)
* HTMLのような記述とJavaScript構文が合体した感じ
* Vueで使われているような「テンプレート言語」とは違う

### JSXを使う理由

`React.createElement` というReact要素を生成する式を使わず、簡単に読みやすくコードを記述するため。

* `React.createElement` を使用したコード

  ```jsx
  React.createElement(
  	'button',
  	{className: 'btn-blue'},
  	'click me!'
  )
  ```

    ⇒ 毎回クラスを定義するためにこの `React.createElement`を書く必要がある
    
* JSXを使用したコード (JSX)

  ```jsx
  <button className={'btn-blue'}>
  	Click me!
  </button>
  ```

    ⇒ JSXで書かれたこの文を「`React.createElement` を使用したコード」と全く同じ形にコンパイルしてくれる

    HTMLのクラスとJavaScriptのクラスを明示的に分けるため

    JSX記法でクラスを指定する場合は `className` と書く。
    

### 基礎文法 ①

* **毎回必ずReactライブラリをインポートする**

```jsx
import React from 'react';
```

### 基礎文法 ②

* 必ず**閉じタグ**が必要
* `**{}` 内で変数\*\*を扱う
* **キャメルケースで記述する**

    HTMLのクラスであっても本来はJavaScriptの派生言語なのでハイフンを使用せずキャメルケースで記述する (**JavaScriptはハイフンを理解しない**)

    ※ `{}` の中はJavaScriptの世界

    ❌　`<img src={image-path} />`

    ⭕️　`<img src={imagePath} />`
    



### 基礎構文 ③

* **最上位コンポーネントは並列表示にしない**

  * ❌　エラー

    ```jsx
    return (
    	<p>いきなりPタグはエラーの元</p>
    	<p>JSXは階層構造にしなければならない</p>
    )
    ```
  * ⭕️　`React.Fragment` で囲む

    ```jsx
    return (
    <React.Fragment>
    	<p>いきなりPタグはエラーの元</p>
    	<p>JSXは階層構造にしなければならない</p>
    </React.Fragment>
    )
    ```
  * ⭕️　`React.Fragment` の省略形

    ```jsx
    return (
    <>
    	<p>いきなりPタグはエラーの元</p>
    	<p>JSXは階層構造にしなければならない</p>
    </>
    )
    ```
  * `React.Fragment` で囲む必要のない記述

    * Pタグ１行だけだったら`React.Fragment` で囲む必要がない

        ⇒ 最上位コンポーネントとして並列するタグがないので必要なし
        

    ```jsx
    return (
    <>
    	<p>Pタグ1つだけなら別いらない</p>
    </>
    )
    ```

    * これでよし


**⚠️ divタグでも大丈夫だが、なんでもかんでもdivタグで括るのはNG**
**💭 Vue.jsのテンプレートみたいだなぁ**



### 参考

[\#02 新・日本一わかりやすいReact入門【基礎編】JSXの記法](https://www.youtube.com/watch?v=gLbTluYSb_U)