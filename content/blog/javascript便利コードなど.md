---
title: JavaScript便利コードなど
date: 2021-11-29T05:08:16.066Z
description: JavaScriptの便利な知識やコードスニペットを自分なりにまとめてみました。
tag: JavaScript
---
### 三項演算子

```jsx
function getFee(isMember) {
  return isMember ? '$2' : '$10';
}
console.log('getFee(true)  : ' + getFee(true));
console.log('getFee(false) : ' + getFee(false));
console.log('getFee(null)  : ' + getFee(null));

// if文の省略形
```

### 分割代入

```jsx
const [a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20
```

```jsx
const [a, b, ...rest] = [10, 20, 30, 40, 50, 60];

console.log(rest);
// expected output: Array [30,40,50,60]
```

```jsx
let [prev, curr] = [0, 1];
console.log(curr) //1
console.log(prev) //0
```

### `forEach` と `map` の違い

* forEach  : ぐるぐる回す
* map        : 新しい配列をつくる returnする

### `var` と `let` の違い

※ (古い、新しいだけではない)

* **let** ：ブロックスコープ {}の中だけでしか生きられない
* **var** ：関数スコープ {}の外には出られる

### {}じゃなくて () だと return を省略できる。

※ 一列として判断されるから。

```jsx
// C019:完全数とほぼ完全数 しんじさんのコードより
const calcTimes = num => Math.floor(Math.sqrt(num)) + 1
    
	// 引数を素因数分解する
    const primeFactorize = num => (
		[...Array(calcTimes(num))].flatMap((el,i) => {
        	return num % i === 0 ? [i, num/i] : false
    	})
	)
	.filter((el,i,arr) => el && el !== num && el !== arr[i-1])
```

### 即時関数

```jsx
(function(){
	console.log("a")
}());

//出力結果　a
```

### SHA256

```jsx
const randomNum = Math.random() * 10;
console.log(randomNum);
const encryptSha256 = str => {
    const hash = createHash('sha256');
    hash.update(str);
    return hash.digest('hex');
};
const docId = encryptSha256(randomNum);
```

### 正規表現

```jsx
var regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
console.log(regex.test("murashun@gmail.com"))
```

### クラス

```jsx
var hooclass = class {
    constructor(z) {
        this.z = z
    }
    get getZ() {
        return this.z
    }
    set setZ(z) {
        /* set構文 */
        this.z = z
    }
}
var hoo = new hooclass(20)  
hoo.setZ = 100 /* プロパティに値を設定する */
var val = hoo.getZ
console.log(val) /* 100が出力される */
```

### 参照型

```jsx
let user = {
  name: "John",
  go: function() { console.log(this.name) }
};

(user.go)()
```

### 配列内の重複を削除

```jsx
const arr = [ "one", "two", "one" ]
const getNonDuplicateArr = arr => [...new Set(arr)]
```

### スプレッド構文

```jsx
const foo = [1, 2];

// 配列のクローン
const bar = [...foo]; // => [1, 2]

// 要素を追加して新しい配列を生成
const baz = [...foo, 3, 4]; // => [1, 2, 3, 4]

// 配列をマージ
const hoge = [...foo, ...bar]; // => [1, 2, 1, 2]
```

### 分割代入

```jsx
const [a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20
```