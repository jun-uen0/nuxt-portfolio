---
title: 【セキュリティ】DDoS攻撃 (DoS攻撃)
date: 2021-12-17T00:01:23.340Z
description: ふんわり理解していたDDoS攻撃 (とDoS攻撃) を調べる。DDoS と DoS の違い、歴史、背景など
tag: セキュリティ
---
### DDoS攻撃とは

* サイバー攻撃の種類の一つ

**DDoS = Distributed Denial of Service attack**

攻撃者は複数の機器(PC等)を踏み台にして特定の機器に一斉攻撃を仕掛けることができる。踏み台として利用される機器に関連性がないことから犯人が特定しづらいのが特徴。

> DDoS攻撃は、IPAが公開している「情報セキュリティ10大脅威 2020」の10位にランクインしている「サービス妨害攻撃によるサービス停止」に関わるサイバー攻撃です。（参考：IPA 「[情報セキュリティ10大脅威 2020](https://www.ipa.go.jp/security/vuln/10threats2020.html)」）


💡 似た名前の攻撃に「DoS攻撃」というものがある。これは一斉攻撃ではなく一台の危機から行う攻撃。(DoS = Denial of Services)



### **DDoS攻撃の種類**

DDoS攻撃にはいくつか種類がある。命名に関しては「コンピュータがデータ送信するときのどの仕組みの部分」を攻撃したかにより決まる。

(フラッド = Flood : 洪水)

* **SYNフラッド攻撃／FINフラッド攻撃**

    コンピューターが通信を確立する際の手順である「接続要求（SYN）」や「切断要求（FIN）」に負荷をかける攻撃
    
* **ACKフラッド攻撃**

    「応答（ACK）」を大量に送信して通信負荷をかける攻撃です。
    
* **UDPフラッド攻撃**

    攻撃元のIPを偽装して大量のパケットを送ることで、回線の帯域幅をパンクさせるタイプの攻撃です。
    
* **DNSフラッド攻撃**

    DNSサーバーに大量のリクエストを送ることで負荷をかけ、DNSの機能を著しく低下させる攻撃。
    

### DDoS攻撃の被害事例

* 2015年11月：東京五輪組織委員会のホームページがサイバー攻撃を受け、約12時間閲覧不能になる
* 2015年12月：一部の電気通信事業者で数時間に渡りDNSサーバーへの接続障害
* 2016年9月：サイバーセキュリティ専門ジャーナリストのブログに対して、マルウェア「Mirai」に感染したIoT機器約18万台からの大規模攻撃
* 2016年10月：米国Dyn社のDNSフラッドサーバーが大規模なDDoS攻撃を受け、DNSを利用している企業のサービスに障害が発生
* 2020年3月：HHS（米保健福祉省）のシステムに過剰な負荷をかけるDDoS攻撃（実害なし）
* **2020年6月：米国のセキュリティサービス事業者Cloudflare（クラウドフレア）：最大毎秒7億5400万パケットに達する大規模DDoS攻撃（自動対応により被害なし）🎉🎉🎉🎉**
* 2020年6月：ロシアの中央選挙管理委員会：オンライン投票サービスを狙ったDDoS攻撃



### その他

[DDoS攻撃とは？攻撃の目的や種類から実例と対策までを解説｜コラム｜クラウドソリューション｜サービス｜法人のお客さま｜NTT東日本](https://business.ntt-east.co.jp/content/cloudsolution/column-185.html#:~:text=DDoS%E6%94%BB%E6%92%83%E3%81%A8%E3%81%AF%E3%80%81%E3%82%B5%E3%82%A4%E3%83%90%E3%83%BC,%E7%89%B9%E5%BE%B4%E3%81%AE%E4%B8%80%E3%81%A4%E3%81%A7%E3%81%99%E3%80%82)