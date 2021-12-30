---
title: 【TypeScript】配列を活用した型定義
date: 2021-12-30T01:01:32.060Z
description: 便利で厳格&安全な型定義を覚える
tag: TypeScript
---
### 配列内の値に型定義

- オーソドックスな方法で配列内の値に型定義
    
    ```tsx
    // シンプルな配列の型定義
    const colors: string[] = ['red', 'blue']
    colors.push('yellow') // OK
    // colors.push(123) // NG
    ```
    
    ※ `colors.push(<string型以外の型>)`：エラーになる
    
- `Array<型>` を使った型定義
    
    ```tsx
    const even: Array<number> = [2, 4, 6]
    even.push(8) // OK
    // even.push("10") // NG
    ```
    
- 合併型を使った型定義
    
    ```tsx
    const ids: (string | number)[] =[1, 'に']
    ids.push(3) //OK!
    ids.push("ヨン") //OK!
    ```
    
    `string型` も `number型` も両方OK
    
- アノテーションなしで型推論
    
    ```tsx
    const typeInferenceArr = () => {
      const _typeArr = []  // any型
      _typeArr.push(123)   // 数値型
      _typeArr.push('推論') // 文字列型
      return _typeArr
    }
    ```
    

### 読み取り専用の厳格な配列内型定義

- 読み取り専用配列 ① ( **`readonly T[]`** )
    
    下記コードは読み取り専用 ( `readonly` )で追記、変更ともに不可
    
    ```tsx
    const gitCommand: readonly string[] = ['git add', 'git commit', 'git push']
    gitCommand.push('git pull') // できない
    gitCommand[2] = 'git commit -m "commit message' // できない
    ```
    
- 読み取り専用配列 ② ( **`ReadonlyArray<T>`** )
    
    ```tsx
    const gitCommand: ReadonlyArray<string> = ['git add', 'git commit', 'git push']
    gitCommand.push('git pull') // できない
    gitCommand[2] = 'git commit -m "commit message' // できない
    ```
    
- 読み取り専用配列 ③ ( **`as const`** )
    
    ```tsx
    const gitCommand = ['git add', 'git commit', 'git push'] as const
    // gitCommand.push('git pull') // できない
    // gitCommand[2] = 'git commit -m "commit message' // できない
    ```
    

### 参考

[【日本一わかりやすいTypeScript入門】積極的に使いたい配列・タプルの型定義](https://www.youtube.com/watch?v=BUSlgsUWn4I&list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad&index=7)