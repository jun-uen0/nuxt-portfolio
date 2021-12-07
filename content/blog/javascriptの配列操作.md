---
title: 【JavaScript】配列操作
date: 2021-11-27T11:19:42.982Z
description: アプリやテストで学んだJavaScriptの配列操作まとめ
tag: JavaScript
---
* 配列内**全ての数字に1000を足す**

  ```jsx
  const intial = [];
  const arr = [11, 22, 33];
   
  const result = arr.reduce((acc, value, index) => {
    acc[index] = 1000 + value;
    return acc;
  }, intial);

  // [ 1011, 1022, 1033 ]
  ```


* 配列内全ての数字から**3の倍数だけを取得**する

  ```jsx
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
  const result = arr.reduce((acc, value) => {
    if (value % 3 === 0) {
      acc.push(value);
    }
    return acc;
  }, []);

  // [ 3, 6, 9 ]
  // 3の倍数をとりだしている
  ```
* 配列の値に一つでも**偶数があればtrue**を返す

  ```jsx
  const array = [1, 3, 3, 7, 5];
  const even = (element) => element % 2 === 0;

  console.log(array.some(even));

  // false
  ```
* 連想配列を無理矢理**一元配列にする** (flat)

  ```jsx
  const arr = [
    11,
    [22, 33],
    44,
    [55, 66, 77],
  ];
  const result = arr.reduce((acc, value) => acc.concat(value), []);
  const flat   = arr.flat()

  // result と flat の出力値は同じ
  // [ 11, 22, 33, 44, 55, 66, 77 ]
  ```
* 配列同士を**結合**する (concat)

  ```jsx
  const letters = ['a', 'b', 'c'];
  const numbers = [1, 2, 3];

  letters.concat(numbers);
  // result in ['a', 'b', 'c', 1, 2, 3]
  ```
* 配列から**最後の要素**を取り除く (pop)

  ```jsx
  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = [...numbers];
  newNumbers.pop()
  console.log(numbers);  // [1, 2, 3, 4, 5]
  console.log(newNumbers);  // [1, 2, 3, 4]
  ```
* 配列から**最初の要素**を取り除く (shift)

  ```jsx
  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = [...numbers];
  newNumbers.shift()
  console.log(numbers);  // [1, 2, 3, 4, 5]
  console.log(newNumbers);  // [2,3,4,5]
  ```
* 配列から**特定の要素番号**を取り除く (slice)

  ```jsx
  // slice()
  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = numbers.slice(0, 4);
  console.log(numbers);  // [1, 2, 3, 4, 5]
  console.log(newNumbers);  // [1, 2, 3, 4]
  ```
* 配列内の数字を**番号順にする** (sort)

  ```jsx
  const numbers = [5, 1, 4, 2, 3];
  const newNumbers = [...numbers].sort()
  console.log(numbers);  // [5, 1, 4, 2, 3]
  console.log(newNumbers);  // [1, 2, 3, 4, 5]
  ```
* 配列内の**要素を逆順**にする (reverse)

  ```jsx
  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = [...numbers].reverse()
  console.log(numbers);  // [1, 2, 3, 4, 5]
  console.log(newNumbers);  // [5, 4, 3, 2, 1]
  ```