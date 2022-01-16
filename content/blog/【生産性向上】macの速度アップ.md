---
title: 【生産性向上】Macの速度アップ
date: 2022-01-16T01:03:02.771Z
description: Macの設定を変更できる便利なターミナルコマンドをまとめる
tag: 生産性向上
---
### 現在の設定値を確認

```bash
defaults read  -g com.apple.trackpad.scaling

# 3
```

```bash
defaults write "Apple Global Domain" com.apple.trackpad.scaling 12

# または

defaults write -g com.apple.trackpad.scaling 12
```

```bash
defaults read  -g com.apple.trackpad.scaling

# 12
```

⇒ 再起動すると反映される。

### 参考

* マウスとトラックパッド

[マウスとトラックパッドの軌跡の速さを変更する方法](https://masato-diary.blogspot.com/2008/10/blog-post_06.html)