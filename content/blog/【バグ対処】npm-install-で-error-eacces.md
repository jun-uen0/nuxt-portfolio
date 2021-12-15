---
title: 【バグ対処】npm install で Error:EACCES
date: 2021-12-09T04:45:26.232Z
description: npm install をしようとしたら パラミッションエラーがでたため、調べながら解決してみる。
---
### 期待する処理

- 問題なくTypeScriptをインストールすること

### どんな処理をしたら対処が必要になったのか

- TypeScriptをNPMインストールしようとしたら発生 (TypeScriptに問題がなく、NPMに問題がある。他のインストールでも同様のエラーが発生)

```php
junjun@JunJun ~ % npm install -g typescript
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules/typescript
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/typescript'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/typescript'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules/typescript'
npm ERR! }
npm ERR! 
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR! 
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/junjun/.npm/_logs/2021-12-08T12_43_15_819Z-debug.log
```

### 期待できる解決方法

※ リストアップしたら一個いっこ解決していこう。

- `sudo` で解決
    
    ```php
    npm ERR! permissions of the file and its containing directories, or try running
    npm ERR! the command again as root/Administrator.
    ```
    
    `command again as root/Administrator` = 管理者としてコマンドを打ってください。
    
    ```php
    sudo npm install -g typescript
    ```
    

### その他

[npm installでError:EACCESがでたら - Qiita](https://qiita.com/Gaddict/items/8c76d92bd0adec2bfb6a)

- `permission denied, mkdir`
    
    `mkdir` = ディレクトリの作成
    
    つまり ディレクトリの作成/フォルダの作成権限がないですよ。
    
    と言われている。