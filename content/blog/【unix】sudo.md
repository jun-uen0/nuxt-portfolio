---
title: 【UNIX】sudo
date: 2021-12-10T03:26:29.820Z
description: sudoを調べてみたら歴史背景とか面白すぎた。
---
### なんのための機能か

- 別の権限でプログラムを実行するコマンド

### その他

- `sudo` が何の略か、わかってない。
    
    > その挙動から「**substitute user do**」の略や，ユーザーを指定しないと管理者権限で実行することから「**superuser do**」の略とも言われています。さらにsudoコマンドと似た名前のコマンドとして「[su](http://manpages.ubuntu.com/manpages/trusty/en/man1/su.1.html)」が存在します。こちらは主に別のユーザーに切り替えるためのコマンドで，sudoがsudoコマンドを実行しようとしているユーザーのパスワードを必要とするのに対して，suはsuで切り替える先のユーザーのパスワードが必要です。「⁠sudo」より先に「su」が存在していたので，「⁠su do」の略だという話もあります（**※1**⁠）⁠。
    > 

[【Linuxコマンド】sudoで指定したユーザーでコマンドを実行する | 侍エンジニアブログ](https://www.sejuku.net/blog/54857)

[Aaron Toponce](https://pthree.org/2009/12/31/the-meaning-of-su/)