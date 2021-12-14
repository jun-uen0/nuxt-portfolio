---
title: 【AWS】EC2インスタンスに静的なパブリックIPアドレスを付与する
date: 2021-12-14T08:36:22.158Z
description: 停止と起動を繰り返すたびに変わるEC2の動的なパブリックIPに静的なIPアドレスを付与する。
---
### なんのための機能か

* 動的にIPアドレスが変化するEC2インスタンスに静的なパブリックIPを付与する。⇒ 常に同じIPアドレスでインスタンスにアクセスすることができる。



### Elastic IP アドレスを EC2 インスタンスに関連付ける方法

1. **Amazon EC2 コンソール**
2. AWS コマンドラインインターフェイス (AWS CLI)
3. AWS Tools for Windows PowerShell



### Elastic IP アドレスを実行中のインスタンスに関連付け

公式ドキュメント: [Elastic IP addresses](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)

1. [Elastic IP アドレスを割り当て](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)
2. [Elastic IP アドレスを実行中のインスタンスに関連付け](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)



### Elastic IP アドレスを実行中のインスタンスに関連付け

[Elastic IP addresses](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)

1. Open the Amazon EC2 console at <https://console.aws.amazon.com/ec2/>.
2. In the navigation pane, choose **Elastic IPs**.
3. Select the Elastic IP address to associate and choose **Actions**, **Associate Elastic IP address**.
4. For **Resource type**, choose **Instance**.
5. For instance, choose the instance with which to associate the Elastic IP address. You can also enter text to search for a specific instance.
6. (Optional) For **Private IP address**, specify a private IP address with which to associate the Elastic IP address.
7. Choose **Associate**.



### その他

公式ドキュメント: [](https://aws.amazon.com/jp/premiumsupport/knowledge-center/ec2-associate-static-public-ip/)[静的なパブリック IP アドレスを EC2 Windows または Linux インスタンスに関連付ける方法を教えてください」](https://aws.amazon.com/jp/premiumsupport/knowledge-center/ec2-associate-static-public-ip/)