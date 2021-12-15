---
title: 【Git】コミット巻き戻し
date: 2021-12-13T00:49:16.632Z
description: Gitコマンドでコミットを巻き戻す (macOS ターミナル)
tag: Git
---
### コミット巻き戻し

[git resetコマンドで任意のpushまで巻き戻す - Qiita](https://qiita.com/aki4000/items/bec93ba631a83b687fb4)

- reset：無かったことにする
- revert：履歴を残しつつ削除

### reset 履歴の確認(コミットID)と巻き戻し

```jsx
git log --oneline
```

```jsx
git reset --mixed [コミットID]

// *********************************

git reset --soft コミットID      取り消すのはcommit
git reset --hard コミットID      取り消すのはcommitとaddとソース
git reset --mixed コミットID     取り消すのはcommitとadd
```

- もし `git reset --hard コミットID` でやらかしたら
    
    ```jsx
    git reset HEAD@{1}
    ```
    

[How to undo 'git reset'?](https://stackoverflow.com/questions/2510276/how-to-undo-git-reset)