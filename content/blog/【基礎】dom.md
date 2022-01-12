---
title: 【基礎】DOM
date: 2021-12-26T01:36:06.218Z
description: Reactの仮想DOMを理解するにあたり、それまでふんわり理解していた「DOM」をもう一度基礎から学ぶ。
tag: 基礎
---
### DOMとは

- **HTMLコードのことではない**
- ブラウザが解釈したWebページを描画するためのもの
- **Webページとスクリプト(JavaScriptなど)や他のプログラミング言語を接続するもの**
    
    ⇒ 動的なWebサイトで、JavaScriptによりデータを扱っている場合、その**JavaScriptによって要素の値をダイレクトに変更**する
    
- ブラウザのコンソール画面、「要素」(Element)で確認できるもの
    
    この画面に表示されているものが所謂「**DOMツリー**」
    
    ![68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3231383635362f36376432643331622d386337332d656435622d313064632d3630376238623237363736382e706e67.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8236beb5-f9d0-412a-97ae-7df038f06e10/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3231383635362f36376432643331622d386337332d656435622d313064632d3630376238623237363736382e706e67.png)
    
- DOMツリー (イメージ)
    
    ![https___qiita-image-store.s3.ap-northeast-1.amazonaws.com_0_218656_9dd7e4e5-11d2-3536-6c9c-5a2ded905080.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8ace8641-9c61-4a41-b661-8ee26b2c0c7e/https___qiita-image-store.s3.ap-northeast-1.amazonaws.com_0_218656_9dd7e4e5-11d2-3536-6c9c-5a2ded905080.gif)
    
    (出典： [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp))
    

**DOM = Document Object Model**

### 参考

[【React】仮想DOMって何！？コンポーネントのレンダリングと描画について理解しよう！ - Qiita](https://qiita.com/seira/items/6767e222890c9890ecb9)