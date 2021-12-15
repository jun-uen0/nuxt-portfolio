---
title: 【ブロックチェーン】「 WAX blockchain」 とは
date: 2021-12-06T00:33:35.717Z
description: 「Create a Smart Contract on WAX blockchain including NFT RNG」
tag: ブロックチェーン
---
冒頭で紹介されている、「WAX Blockchain Developer Hive」はNFT関連のグッズ販売、構築を行えるツール。(WAX = Worldwide Asset eXchange)

とても便利なツールだが、リファレンスのコードが全然機能しないらしい。

"There are many errors on documentation..." 、と。

### Dockerを使う

- - -

* デスクトップにフォルダを作成

```jsx
Desktop/blockchain/wax/src
```

* dockerイメージ作成

```jsx
docker run -it --name waxdev -v ${PWD}/wax:/wax waxteam/dev bash
```

* もう一個作成

イメージ名を「waxcdt」に、イメージディレクトリの名前を「cdt」に変更

```jsx
docker run -it --name waxcdt -v ${PWD}/wax:/wax waxteam/cdt bash
```

イメージが２つできた。

### EOSIOの使用

- - -

* Dockerコンテナに入った状態でEOSIOコマンドを打つ

  * EOSIOとは

      スマートコントラクトプラットフォームとして、分散型アプリケーションのためのもっともパワフルなインフラ。

      <https://gaiax-blockchain.com/eosio#EOSIO>
      

```jsx
cleos
```

* スマートコントラクトのデプロイをするため、WAXのテストネットを使用

    <https://developer.wax.io/dapps/blockchain-environments/>
* テストネットへGO

```jsx
cleos -u https://testnet.waxsweden.org get info
```

なぜ sweden なのかは不明。

本ちゃんチェーンは cleos -u [https://chain.wax.io](https://chain.wax.io/) get info

```jsx
keosd &
```

セキュアなキーをストレージしてエンクリプトするEOSIOのサービスの一つ

<https://eos.io/for-developers/build/keosd/>

```jsx
nodeos -e -p eosio --plugin eosio::producer_plugin --plugin eosio::producer_api_plugin --plugin eosio::chain_api_plugin --access-control-allow-origin='*' --contracts-console --http-validate-host=false --verbose-http-errors
```

\-e : 0.5秒ごとにノードがブロックを生成する

\-p : サービス名をWAXに教える。「eosio」

EOSIOのノードを動かすためのサービス

<https://developers.eos.io/manuals/eos/latest/nodeos/index>

keosd、nodeos、cleos の3つはWAXのツール

[](https://developer.wax.io/dapps/blockchain-tools/)

* tailしてみたら、nodeos.log ないよ、と怒られる。

おそらく、先程のnodeosから始まるコマンドで、最後の部分、>> nodeos.log 2>&1 & 的なことをしてないからだと思う、ここにログを記録していくらしい。

一旦保留。

* やっぱりやってみた。

```jsx
nodeos -e -p eosio --plugin eosio::producer_plugin --plugin eosio::producer_api_plugin --plugin eosio::chain_api_plugin --access-control-allow-origin='*' --contracts-console --http-validate-host=false --verbose-http-errors >> nodeos.log 2>&1 &
```

* logをtailしてみよう。

```jsx
tail -f nodeos.log
```

* ブロックの生成をストップする

```jsx
pkill nodeos
```

※ おそらくkillしないとこのコンテナ上でノードがずっとブロックを生成する。

→訂正 下記でdeleteしたときに82ブロックしかなかった。tailするか、nodeosコマンドをrunしない限りノードがブロックを生成することはないのかもしれない。

* 全てのブロックを削除

    —verboseの手前に「--delete-all-blocks 」を追加
    

```jsx
nodeos -e -p eosio --plugin eosio::producer_plugin --plugin eosio::producer_api_plugin --plugin eosio::chain_api_plugin --access-control-allow-origin='*' --contracts-console --http-validate-host=false --delete-all-blocks --verbose-http-errors >> nodeos.log 2>&1 &
```

### DockerにCurlをインストール

- - -

* まずはLinuxのパッケージ管理ツールをインストール

  * apt-get について

      apt-getコマンドは、Debian系のディストリビューション（DebianやUbuntu）のパッケージ管理システムであるAPT（Advanced Package Tool）ライブラリを利用してパッケージを操作・管理するコマンドです。

      <https://webkaru.net/linux/apt-get-command/>
      

```jsx
apt-get update
```

\- curlをインストール



```jsx
apt-get install curl
```


💡 「apt-get update; apt-get install curl」でいっぺんに実行することも可能

* WAX blockchian にcurlで接続

```jsx
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_info --header 'content-type: application/x-www-urlencoded; charset=UFT-8'
```

nodeosがrunされてないので、エラーがでる。

* nodeosの実行と削除

```jsx
nodeos -e -p eosio --plugin eosio::producer_plugin --plugin eosio::producer_api_plugin --plugin eosio::chain_api_plugin --access-control-allow-origin='*' --contracts-console --http-validate-host=false --verbose-http-errors >> nodeos.log 2>&1 &
```

```jsx
tail -f nodeos.log
```

```jsx
nodeos -e -p eosio --plugin eosio::producer_plugin --plugin eosio::producer_api_plugin --plugin eosio::chain_api_plugin --access-control-allow-origin='*' --contracts-console --http-validate-host=false --delete-all-blocks --verbose-http-errors >> nodeos.log 2>&1 &
```

```jsx
tail nodeos.log
```

* もう一度、WAX blockchian にcurlで接続

```jsx
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_info --header 'content-type: application/x-www-urlencoded; charset=UFT-8'
```

オブジェクトで欲しい値が返ってくる。

* ↑見やすく取得

```jsx
cleos get info
```

**続きはセクション4から =>**