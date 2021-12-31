---
title: 【TypeScript】ジェネリック
date: 2021-12-31T03:29:52.598Z
description: <T>で後から型定義を行う => 似たような型定義をテンプレ化できる機能。ジェネリック。
tag: TypeScript
---
### ジェネリック

* 型定義を呼び出し時に行う
* 型は違うけど似たような型定義をしようするときに使う
* Before & After

    `Before`

  ```tsx
  const generic1 = (el: number): number => {
    return el
  }

  const generic2 = (el: string): string => {
    return el
  }

  generic1(1)
  generic2('いち')
  ```

    `After`

  ```tsx
  function generic<T>(el: T): T {
    return el
  }

  generic<number>(1)
  generic<string>('いち')
  generic('型推論') // 型推論も行ってくれる
  ```
* `type` を使用した方法

  ```tsx
  type genericTypes<T> = {
    (el: T): T
  }

  const callGeneric: genericTypes<string> = el => {
    return el
  }

  callGeneric('Jun')
  ```

### ポリモーフィズム

* 多態性、多相性
* 型を当てはめず、型定義からもう一段回抽象化した定義づけを行う
* 上記ジェネリックを用いた方法のことを指す



### 参考

[【日本一わかりやすいTypeScript入門】ジェネリック型を使いながらポリモーフィズムを理解する](https://www.youtube.com/watch?v=5JYZzB7MMvo&list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad&index=8)

[【TypeScript】Generics(ジェネリックス)を理解する - Qiita](https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4)