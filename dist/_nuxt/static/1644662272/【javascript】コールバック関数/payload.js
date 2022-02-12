__NUXT_JSONP__("/%E3%80%90javascript%E3%80%91%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E9%96%A2%E6%95%B0", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{post:{slug:"【javascript】コールバック関数",description:"TypeScriptでも重要なJavaScriptのコールバック関数の挙動を見直す。",title:"【JavaScript】コールバック関数",date:"2022-01-03T00:09:38.439Z",tag:"JavaScript",toc:[{id:o,depth:z,text:o},{id:p,depth:z,text:p}],body:{type:"root",children:[{type:b,tag:A,props:{id:o},children:[{type:b,tag:s,props:{href:"#%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E9%96%A2%E6%95%B0%E3%81%A8%E3%81%AF",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:o}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:"他の関数に引数として渡される関数"}]},{type:a,value:"で、"},{type:b,tag:F,props:{},children:[{type:a,value:"外側の関数で何らかの処理やアクションを実行"}]},{type:a,value:"する関数のこと。"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-tsx","line-numbers"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"alert"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'こんにちは '"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:I}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:I}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'　さん'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"let"}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"="}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"prompt"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'名前を入力'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:l}]},{type:a,value:" 関数にて、名前を入力 ⇒ 変数 "},{type:b,tag:g,props:{},children:[{type:a,value:m}]},{type:a,value:" に代入"}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:l}]},{type:a,value:" 関数にて、変数 "},{type:b,tag:g,props:{},children:[{type:a,value:m}]},{type:a,value:" を "},{type:b,tag:g,props:{},children:[{type:a,value:y}]}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:l}]},{type:a,value:M},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:" 関数を引数として渡す"}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:M},{type:b,tag:g,props:{},children:[{type:a,value:l}]},{type:a,value:" 関数で定義されていた変数 "},{type:b,tag:g,props:{},children:[{type:a,value:m}]},{type:a,value:"の値を受け取る"}]},{type:a,value:f},{type:b,tag:n,props:{},children:[{type:a,value:"結果として「こんにちは 〇〇 さん」のアラートが呼び出される。"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"⇒ メリット：単一責任の法則に則った方法で関数定義ができる。"}]},{type:a,value:f},{type:b,tag:A,props:{id:p},children:[{type:b,tag:s,props:{href:"#%E5%8F%82%E8%80%83",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:p}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:s,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FGlossary\u002FCallback_function",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Callback function (コールバック関数) - MDN Web Docs 用語集: ウェブ関連用語の定義 | MDN"}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F【javascript】コールバック関数",extension:".md",createdAt:"2022-02-12T09:31:26.434Z",updatedAt:"2022-02-12T09:31:26.435Z"},_img:{}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n","code","function"," ","(",")","input","name","li","コールバック関数とは","参考","greeting",";","a","p","keyword","\n  ","string","operator","callback",3,"h3","true",-1,"icon","icon-link","strong","parameter","{","+"," name ","}","\n\n"," 関数にて、")));