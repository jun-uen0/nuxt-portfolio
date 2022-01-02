---
title: 【TypeScript】インターフェースと型エイリアス
date: 2022-01-02T03:46:27.935Z
description: Microsoftによるとできる限りインターフェースを使った方がいいらしい。=>  本当か？
tag: TypeScript
---
### インターフェースと型エイリアス

- オブジェクトの宣言時に使用
- **できる限りインターフェースを使った方がいい**らしい (Microsoftによると)
- TypeScriptの場合は同名インターフェースでマージすることができる。(※ 意図せずされてしまう場合に注意する)

両方とも**大体同じような機能**。インターフェースに関しては外の言語では同名のものを定義するとエラーになるが、TypeScriptだとエラーにならない。**マージが可能**。(拡張性がある、とされる)ただ、意図せずインターフェースを書き換えてしまう可能性があるため、より厳密な型エイリアスを使用することも検討しなければならない。

![スクリーンショット 2021-12-30 19.42.20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0747d9b5-0766-44f0-934d-fc9a7cec5c7a/スクリーンショット_2021-12-30_19.42.20.png)

### インターフェース

- 宣言のマージ
    
    ```tsx
    interface Book {
        title: string
    }
    
    // Bookに page: number をマージ
    interface Book {
        page: number
    }
    
    const book: Book = {
        title: 'TypeScript',
        page: 360
    }
    ```
    

- 型エイリアスの拡張
    
    ```tsx
    type BookType = {
      page: number
      title: string
    }
    
    interface HandBook extends BookType {
      theme: string
    }
    ```
    

### 型エイリアス

- マージしようとするとエラーに
    
    ```tsx
    type Book = {
        title: string
    }
    
    type Book = {
        page: number
    }
    
    // Duplicate identifier 'Book'
    ```
    
- 交差型を使用した手法
    
    ```tsx
    type BookInfo = {
      title: string,
    	author: string,
    	page: number
    }
    
    type BookDesc = {
      sum: string,
    	text: string
    }
    
    type BookAllAbout = BookInfo & BookDesc
    
    const theGreateGatsby: BookAllAbout = {
      title: 'The Great Gatsby',
    	author: 'F. Scott Fitzgerald',
    	page: 218,
      sum: 'Nick Carraway, a young man from Minnesota, moves to New York in the summer of 1922 to learn about the bond business. He rents a house in the West Egg district of Long Island, a wealthy but unfashionable area populated by the new rich, a group who have made their fortunes too recently to have established social connections and who are prone to garish displays of wealth. Nick’s next-door neighbor in West Egg is a mysterious man named Jay Gatsby, who lives in a gigantic Gothic mansion and throws extravagant parties every Saturday night.',
    	text: 'In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since. “Whenever you feel like criticizing any one,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.” He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I’m inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought — frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions. Reserving judgments is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth.'
    }
    ```
    

### 参考

[【日本一わかりやすいTypeScript入門】ハンズオンで理解するInterfaceとType Aliasの違い](https://www.youtube.com/watch?v=J2vox52T4W8&list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad&index=10)

[TypeScript InterfaceとType Aliasについて - Wiz テックブログ](https://tech.012grp.co.jp/entry/2021/08/06/111024#:~:text=Type%20Alias%20%E3%81%A8%20Interface%20%E3%81%AF,%E3%81%A8%E8%89%AF%E3%81%84%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82)