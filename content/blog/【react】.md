---
title: 【React】コンポーネント
date: 2021-12-25T02:13:02.275Z
description: Vue.jsと同じくReactにもコンポーネントという概念が存在する。飛ばさず、もう一度基礎から学び直す。
tag: React
---
### Reactにおける「コンポーネント」

* Vue.jsのコンポーネントとほぼ一緒の概念

  * 別のページで再利用が可能
  * コードやファイルを最小限に保つことができる
  * 修正も楽
* 見た目と機能、両方を併せ持つ**部品**



### コンポーネントには2種類ある

* **クラスコンポーネント** (Class Component) ※ 今はほとんど使われない

  ```jsx
  import React, {Component} from 'react';
  class Button extends Component {
  	render() {
  		return <button>Say, {this.porps.hello}</button>
  	}
  }
  export default Button;
  ```

    前まではこのクラスコンポーネントを使用しないと、ステートが扱えなかったりしたが、**「React Hooks」で解決**した。なので今は滅多に使われない。(React バージョン16.7から)
    
* **関数コンポーネント** (Functional Component)

  ```jsx
  import React from 'react';
  const Button = (props) => {
  	return <button>Say, {porps.hello}</button> 
  };
  export default Button;
  ```

### コンポーネントの使い方

※ Vue.jsと同じ

* コンポーネント仕様の記述ルール

  * **ファイル名の頭文字は大文字**
  * **コンポーネント名も頭文字を大文字にする**
* 子コンポーネントから親コンポーネントへ呼び出し

    `components/Button.jsx` (子コンポーネントから `export` )

  ```jsx
  const FormButton = () => {
  	return <button>送信</button>
  };
  export default FormButton;
  ```

    `App.jsx` (親コンポーネントで `import` )

  ```jsx
  import FormButton from './components/Button'
  function App() {
  	return (
  		<div>
  			<FormButton />
  		</div>
  	)
  }
  export default App;
  ```
* `props` を引数にして親コンポーネントからデータを受け取る

    `components/Blog.jsx` (子コンポーネントから `export` )

  ```jsx
  const Blog = (props) => {
  	return (
  		<div>
  			<h2>{props.title}</h2>
  			<p>{props.text}</h2>
  		</div>
  	)
  };
  export default Blog;
  ```

    `App.jsx` (親コンポーネントで `import` )

  ```jsx
  import Blog from './components/Blog'
  function App() {
  	return (
  		<div>
  			<Blog
  				title={'ブログタイトル'}
  				text={'ブログの内容'}
  			/>
  		</div>
  	)
  }
  export default App;
  ```

### propsで受け渡せるデータ

* propsデータは `{}` に記述する (文字列のみ `{}` なしでもOK)
* 型はなんでもOK (文字列、数値、真偽値、配列、オブジェクト、日付 ..)
* 変数も渡せる

### 参考

[\#04 新・日本一わかりやすいReact入門【基礎編】コンポーネントとprops](https://www.youtube.com/watch?v=Q-df0QgZuhE&list=PLX8Rsrpnn3IWPoM7-1YPDksRRkamRY25k&index=4)