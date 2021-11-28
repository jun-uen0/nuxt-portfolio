---
title: NetlifyCMS
date: 2021-11-26T11:17:26.856Z
description: NuxtアプリにNetlifyCMSを取り入れブログ管理画面を構築
tag: netlify
---
[Nuxt](https://www.netlifycms.org/docs/nuxt/)

[](https://jamstack.jp/blog/how_to_start_cms/)

### はじめ

1. `static` ディレクトリに `admin` ディレクトリを作成
2. `admin` ディレクトリ内に `index.html` と `config.yml` ファイルを作成
  - `index.html` (管理ログインページ)
    
    ```jsx
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Content Manager</title>
      <!-- Include the script that enables Netlify Identity on this page. -->
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body>
      <!-- Include the script that builds the page and powers Netlify CMS -->
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
      </body>
    </html>
    ```
    
  - `config.yml` (管理画面の構成設定)
    
    ```jsx
    backend:
      name: git-gateway
      branch: master
    
      locale: 'ja'
      media_folder: static/img
      public_folder: /img
      
      collections:
      - name: 'blog'
        identifier_field: slug
        label: 'ブログ'
        format: 'json'
        folder: 'assets/content/blog'
        create: true
        slug: '{{slug}}'
        editor:
        preview: false
        fields:
        - { label: 'タイトル', name: 'title', widget: 'string' }
        - { label: '説明', name: 'description', widget: 'string' }
        - { label: 'スラッグ', name: 'slug', widget: 'string' }
        - { label: '作成日', name: 'createDate', widget: 'datetime', format: 'YYYY-MM-DD HH:mm:ss' }
        - { label: '更新日', name: 'updateDate', widget: 'datetime', format: 'YYYY-MM-DD HH:mm:ss' }
        - { label: '本文', name: 'body', widget: 'markdown' }
    ```
    
3. GitHubにプッシュ

### 認証設定

1. Netlifyでログイン、作成したサイトの詳細画面へ
  - 詳細画面
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-2523.48.26.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-2523.48.26.png?fit=max&w=1440)
    
2. 「Settings」→「Identity」→「Enable Identity」をクリック
  - Settings
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-2523.52.09.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-2523.52.09.png?fit=max&w=1440)
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-2523.54.18.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-2523.54.18.png?fit=max&w=1440)
    
3. 「Registration」➡️「Registration preferences」「Edit settings」から「Invite only」に
4. 「Registration」➡️「External providers」「Add provider」「GitHub」を追加
  - モーダル画面では「Use default configuration」を選択
5. 「Services」➡️「Git Gateway」「Enable Git Gateway」から権限を付与
  
  承認画面が開くので許可してください。
  

　（管理画面で更新した時にGithubに自動コミットされるようになります）

1. 設定が完了したら上部メニューのIdentityをクリック
  - 招待画面が開かれる
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.14.10.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.14.10.png?fit=max&w=1440)
    
  - 招待メールを送信
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.18.56.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.18.56.png?fit=max&w=1440)
    
  - メール追加されます
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.19.16.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.19.16.png?fit=max&w=1440)
    
  - メールを確認
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.23.39.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.23.39.png?fit=max&w=1440)
    
  - 「Accept the invite」のリンクをクリック「GitHub」のボタンを選択
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.25.08.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.25.08.png?fit=max&w=1440)
    
  - 設定完了画面
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.25.30.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.25.30.png?fit=max&w=1440)
    
  - https://[サイトURL]/admin/にアクセス
    
    ![https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.30.46.png?fit=max&w=1440](https://images.microcms-assets.io/protected/ap-northeast-1:4a7e6eec-f608-4eb5-8f20-044f2d8de335/service/alnwegknfal/media/2020-02-260.30.46.png?fit=max&w=1440)
    

👏 投稿後、GitHubにJsonファイルの原稿が反映されていればCMS完成

(以後コンテンツを更新するたびに自動デプロイ)

### バグ・不具合

[Git Gateway Error: Please ask your site administrator to reissue the Git Gateway token.](https://www.notion.so/Git-Gateway-Error-Please-ask-your-site-administrator-to-reissue-the-Git-Gateway-token-0e08ef1a554647e584d5da42126a8827)