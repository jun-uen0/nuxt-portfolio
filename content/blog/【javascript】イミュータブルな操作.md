---
title: 【JavaScript】イミュータブルな操作
date: 2022-01-01T02:17:52.205Z
description: 「破壊的」「非破壊的」とはまた違った種類の配列操作がある。
tag: JavaScript
---
### **イミュータブルな操作とは**

JavaScriptの配列操作にに2種類の操作方法がある

- ミュータブル(可変)
- イミュータブル (不変)

### 比較

```tsx
const mutableArr   = [0,1,2]
const immutableArr = [0,1,2]

mutableArr.push(3)
[...immutableArr,3]

console.table(mutableArr);
0
1
2
3

console.table(immutableArr);
0
1
2
```

- `push` ：**破壊的メソッド (可変操作)**
- スプレッド構文：**非破壊的メソッド (不変操作)**

### 参考

[React Hooks と TypeScript で簡単 TODO アプリ](https://zenn.dev/sprout2000/articles/60cc8f1aa08b4b)