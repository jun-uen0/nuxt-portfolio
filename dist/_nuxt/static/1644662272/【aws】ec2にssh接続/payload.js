__NUXT_JSONP__("/%E3%80%90aws%E3%80%91ec2%E3%81%ABssh%E6%8E%A5%E7%B6%9A", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{post:{slug:"【aws】ec2にssh接続",description:"EC2インスタンスSSH接続する初歩的な操作を備忘録として残す。",title:"【AWS】EC2にSSH接続",date:"2022-01-14T23:28:37.047Z",tag:"AWS",toc:[{id:d,depth:3,text:d}],body:{type:"root",children:[{type:b,tag:"h3",props:{id:d},children:[{type:b,tag:"a",props:{ariaHidden:"true",href:"#%E6%89%8B%E9%A0%86",tabIndex:-1},children:[{type:b,tag:f,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:d}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"⓵ キーペア作成"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:"img",props:{alt:"68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3233343634302f62303666363661392d343433302d666337372d623565342d6433306565393334303937342e706e67.png",src:"https:\u002F\u002Fs3-us-west-2.amazonaws.com\u002Fsecure.notion-static.com\u002F569da4fc-e8af-4d7a-a915-8effa1aab0bd\u002F68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3233343634302f62303666363661392d343433302d666337372d623565342d6433306565393334303937342e706e67.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"⓶ 権限設定"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"mv \u002FUsers\u002Fusername\u002FDownloads\u002Fweb_app.pem  ~\u002F.ssh\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"chmod 600 \u002FUsers\u002Fusername\u002F.ssh\u002F○○.pem\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"⓷ 接続"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"ssh "},{type:b,tag:f,props:{className:[n,o]},children:[{type:a,value:p}]},{type:a,value:"i \u002FUsers\u002Fusername\u002F.ssh\u002F○○.pem ec2"},{type:b,tag:f,props:{className:[n,o]},children:[{type:a,value:p}]},{type:a,value:"user@ec2のグローバルIP\n"}]}]}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F【aws】ec2にssh接続",extension:".md",createdAt:q,updatedAt:q},_img:{}}],fetch:{},mutations:void 0}}("text","element","\n","手順","p","span","li","div","nuxt-content-highlight","pre","language-yaml","line-numbers","code","token","punctuation","-","2022-02-12T09:31:26.433Z")));