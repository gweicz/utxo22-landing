import{S as ae,i as re,s as oe,D as pe,e as k,j as A,c as b,a as E,d as c,l as O,b as m,J as B,f as V,E as d,F as ke,G as be,H as ge,m as ne,n as q,o as ie,p as T,I as H,v as ce,w as fe,x as ue,A as _e,K as Ee,L as we,M as Oe,N as ze,t as N,O as qe,g as U,P as He,k as Z,Q as Ie}from"../chunks/vendor-b1db2713.js";const Se=o=>({}),De=o=>({});function Le(o){let e;const s=o[9]["custom-tip"],t=pe(s,o,o[8],De);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&256)&&ke(t,s,l,l[8],e?ge(s,l[8],a,Se):be(l[8]),De)},i(l){e||(T(t,l),e=!0)},o(l){q(t,l),e=!1},d(l){t&&t.d(l)}}}function Me(o){let e;return{c(){e=k("div"),this.h()},l(s){e=b(s,"DIV",{class:!0,style:!0});var t=E(e);t.forEach(c),this.h()},h(){m(e,"class","default-tip svelte-npb0qt"),m(e,"style",o[6])},m(s,t){V(s,e,t),e.innerHTML=o[0]},p(s,t){t&1&&(e.innerHTML=s[0])},i:H,o:H,d(s){s&&c(e)}}}function Pe(o){let e,s,t,l,a,i,g;const D=o[9].default,_=pe(D,o,o[8],null),p=[Me,Le],I=[];function z(n,h){return n[0]?0:1}return a=z(o),i=I[a]=p[a](o),{c(){e=k("div"),s=k("span"),_&&_.c(),t=A(),l=k("div"),i.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var h=E(e);s=b(h,"SPAN",{class:!0});var u=E(s);_&&_.l(u),u.forEach(c),t=O(h),l=b(h,"DIV",{class:!0});var j=E(l);i.l(j),j.forEach(c),h.forEach(c),this.h()},h(){m(s,"class","tooltip-slot svelte-npb0qt"),m(l,"class","tooltip svelte-npb0qt"),B(l,"active",o[5]),B(l,"left",o[4]),B(l,"right",o[2]),B(l,"bottom",o[3]),B(l,"top",o[1]),m(e,"class","tooltip-wrapper svelte-npb0qt")},m(n,h){V(n,e,h),d(e,s),_&&_.m(s,null),d(e,t),d(e,l),I[a].m(l,null),g=!0},p(n,[h]){_&&_.p&&(!g||h&256)&&ke(_,D,n,n[8],g?ge(D,n[8],h,null):be(n[8]),null);let u=a;a=z(n),a===u?I[a].p(n,h):(ne(),q(I[u],1,1,()=>{I[u]=null}),ie(),i=I[a],i?i.p(n,h):(i=I[a]=p[a](n),i.c()),T(i,1),i.m(l,null)),h&32&&B(l,"active",n[5]),h&16&&B(l,"left",n[4]),h&4&&B(l,"right",n[2]),h&8&&B(l,"bottom",n[3]),h&2&&B(l,"top",n[1])},i(n){g||(T(_,n),T(i),g=!0)},o(n){q(_,n),q(i),g=!1},d(n){n&&c(e),_&&_.d(n),I[a].d()}}}function Ce(o,e,s){let{$$slots:t={},$$scope:l}=e,{tip:a=""}=e,{top:i=!1}=e,{right:g=!1}=e,{bottom:D=!1}=e,{left:_=!1}=e,{active:p=!1}=e,{color:I="#757575"}=e,z=`background-color: ${I};`;return o.$$set=n=>{"tip"in n&&s(0,a=n.tip),"top"in n&&s(1,i=n.top),"right"in n&&s(2,g=n.right),"bottom"in n&&s(3,D=n.bottom),"left"in n&&s(4,_=n.left),"active"in n&&s(5,p=n.active),"color"in n&&s(7,I=n.color),"$$scope"in n&&s(8,l=n.$$scope)},[a,i,g,D,_,p,z,I,l,t]}class Ne extends ae{constructor(e){super();re(this,e,Ce,Pe,oe,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function Ue(o){let e,s,t,l,a,i,g,D;return{c(){e=k("a"),s=k("img"),this.h()},l(_){e=b(_,"A",{href:!0});var p=E(e);s=b(p,"IMG",{class:!0,src:!0,alt:!0,title:!0}),p.forEach(c),this.h()},h(){m(s,"class",t="avatar "+(o[1]?"":"small")+" svelte-15f535k"),Ee(s.src,l=o[2])||m(s,"src",l),m(s,"alt",a=o[0].name),m(s,"title",i=o[0].name),m(e,"href",o[3])},m(_,p){V(_,e,p),d(e,s),g||(D=[we(e,"mouseover",o[5]),we(e,"mouseleave",o[6])],g=!0)},p(_,p){p&2&&t!==(t="avatar "+(_[1]?"":"small")+" svelte-15f535k")&&m(s,"class",t),p&4&&!Ee(s.src,l=_[2])&&m(s,"src",l),p&1&&a!==(a=_[0].name)&&m(s,"alt",a),p&1&&i!==(i=_[0].name)&&m(s,"title",i)},d(_){_&&c(e),g=!1,Oe(D)}}}function Xe(o){let e,s,t;return s=new Ne({props:{tip:o[4],$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){e=k("div"),ce(s.$$.fragment)},l(l){e=b(l,"DIV",{});var a=E(e);fe(s.$$.fragment,a),a.forEach(c)},m(l,a){V(l,e,a),ue(s,e,null),t=!0},p(l,[a]){const i={};a&1031&&(i.$$scope={dirty:a,ctx:l}),s.$set(i)},i(l){t||(T(s.$$.fragment,l),t=!0)},o(l){q(s.$$.fragment,l),t=!1},d(l){l&&c(e),_e(s)}}}function Be(o,e,s){var n;let{speaker:t}=e,{lead:l}=e;const a=["web:webp","web:png","web:jpg","twitter:jpg"];let i,g;if(t.photos&&t.photos.length>0){for(const h of a)if(t.photos.includes(h)){const[u,j]=h.split(":"),y=`https://spec.utxo.cz/22/photos/speakers/${t.id}-${u}.${j}`;if(i){g=y;break}i=y}}i||(i="/img/twitter-avatar.png");const D=t.twitter?`https://twitter.com/${t.twitter}`:(n=t.web)==null?void 0:n.url,_=t.name+(t.nickname?` (${t.nickname})`:"");let p=i;function I(){g&&s(2,p=g)}function z(){s(2,p=i)}return o.$$set=h=>{"speaker"in h&&s(0,t=h.speaker),"lead"in h&&s(1,l=h.lead)},[t,l,p,D,_,I,z]}class Ve extends ae{constructor(e){super();re(this,e,Be,Xe,oe,{speaker:0,lead:1})}}function ye(o,e,s){const t=o.slice();return t[2]=e[s],t}function Te(o,e,s){const t=o.slice();return t[2]=e[s],t}function Ge(o){return{c:H,l:H,m:H,p:H,i:H,o:H,d:H}}function Fe(o){let e,s,t,l,a,i,g,D,_,p,I,z,n,h=o[1].spec.speakers,u=[];for(let r=0;r<h.length;r+=1)u[r]=je(Te(o,h,r));const j=r=>q(u[r],1,1,()=>{u[r]=null});let y=o[1].spec.speakers,w=[];for(let r=0;r<y.length;r+=1)w[r]=Ae(ye(o,y,r));const Q=r=>q(w[r],1,1,()=>{w[r]=null});return{c(){e=k("h2"),s=N("V\xFDznamn\xED host\xE9"),t=A(),l=k("div");for(let r=0;r<u.length;r+=1)u[r].c();a=A(),i=k("h2"),g=N("Dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED"),D=A(),_=k("div");for(let r=0;r<w.length;r+=1)w[r].c();p=A(),I=k("div"),z=N(".. a spoustu dal\u0161\xEDch pro v\xE1s chyst\xE1me!"),this.h()},l(r){e=b(r,"H2",{class:!0});var v=E(e);s=U(v,"V\xFDznamn\xED host\xE9"),v.forEach(c),t=O(r),l=b(r,"DIV",{class:!0});var f=E(l);for(let C=0;C<u.length;C+=1)u[C].l(f);f.forEach(c),a=O(r),i=b(r,"H2",{class:!0});var L=E(i);g=U(L,"Dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED"),L.forEach(c),D=O(r),_=b(r,"DIV",{class:!0});var P=E(_);for(let C=0;C<w.length;C+=1)w[C].l(P);P.forEach(c),p=O(r),I=b(r,"DIV",{class:!0});var F=E(I);z=U(F,".. a spoustu dal\u0161\xEDch pro v\xE1s chyst\xE1me!"),F.forEach(c),this.h()},h(){m(e,"class","pixelfont"),m(l,"class","mt-3 mb-6 flex flex-wrap justify-center relative"),m(i,"class","pixelfont"),m(_,"class","flex flex-wrap justify-center relative mt-5"),m(I,"class","pixelfont text-sm mt-5 svelte-1vf2a05")},m(r,v){V(r,e,v),d(e,s),V(r,t,v),V(r,l,v);for(let f=0;f<u.length;f+=1)u[f].m(l,null);V(r,a,v),V(r,i,v),d(i,g),V(r,D,v),V(r,_,v);for(let f=0;f<w.length;f+=1)w[f].m(_,null);V(r,p,v),V(r,I,v),d(I,z),n=!0},p(r,v){if(v&1){h=r[1].spec.speakers;let f;for(f=0;f<h.length;f+=1){const L=Te(r,h,f);u[f]?(u[f].p(L,v),T(u[f],1)):(u[f]=je(L),u[f].c(),T(u[f],1),u[f].m(l,null))}for(ne(),f=h.length;f<u.length;f+=1)j(f);ie()}if(v&1){y=r[1].spec.speakers;let f;for(f=0;f<y.length;f+=1){const L=ye(r,y,f);w[f]?(w[f].p(L,v),T(w[f],1)):(w[f]=Ae(L),w[f].c(),T(w[f],1),w[f].m(_,null))}for(ne(),f=y.length;f<w.length;f+=1)Q(f);ie()}},i(r){if(!n){for(let v=0;v<h.length;v+=1)T(u[v]);for(let v=0;v<y.length;v+=1)T(w[v]);n=!0}},o(r){u=u.filter(Boolean);for(let v=0;v<u.length;v+=1)q(u[v]);w=w.filter(Boolean);for(let v=0;v<w.length;v+=1)q(w[v]);n=!1},d(r){r&&c(e),r&&c(t),r&&c(l),Ie(u,r),r&&c(a),r&&c(i),r&&c(D),r&&c(_),Ie(w,r),r&&c(p),r&&c(I)}}}function Je(o){let e,s,t,l;return s=new Ve({props:{speaker:o[2],lead:!0}}),{c(){e=k("div"),ce(s.$$.fragment),t=A()},l(a){e=b(a,"DIV",{});var i=E(e);fe(s.$$.fragment,i),t=O(i),i.forEach(c)},m(a,i){V(a,e,i),ue(s,e,null),d(e,t),l=!0},p:H,i(a){l||(T(s.$$.fragment,a),l=!0)},o(a){q(s.$$.fragment,a),l=!1},d(a){a&&c(e),_e(s)}}}function je(o){let e,s,t=o[2].lead&&Je(o);return{c(){t&&t.c(),e=Z()},l(l){t&&t.l(l),e=Z()},m(l,a){t&&t.m(l,a),V(l,e,a),s=!0},p(l,a){l[2].lead&&t.p(l,a)},i(l){s||(T(t),s=!0)},o(l){q(t),s=!1},d(l){t&&t.d(l),l&&c(e)}}}function Ke(o){let e,s,t,l;return s=new Ve({props:{speaker:o[2]}}),{c(){e=k("div"),ce(s.$$.fragment),t=A()},l(a){e=b(a,"DIV",{});var i=E(e);fe(s.$$.fragment,i),t=O(i),i.forEach(c)},m(a,i){V(a,e,i),ue(s,e,null),d(e,t),l=!0},p:H,i(a){l||(T(s.$$.fragment,a),l=!0)},o(a){q(s.$$.fragment,a),l=!1},d(a){a&&c(e),_e(s)}}}function Ae(o){let e,s,t=!o[2].lead&&Ke(o);return{c(){t&&t.c(),e=Z()},l(l){t&&t.l(l),e=Z()},m(l,a){t&&t.m(l,a),V(l,e,a),s=!0},p(l,a){l[2].lead||t.p(l,a)},i(l){s||(T(t),s=!0)},o(l){q(t),s=!1},d(l){t&&t.d(l),l&&c(e)}}}function Qe(o){let e;return{c(){e=N(".. na\u010D\xEDt\xE1m")},l(s){e=U(s,".. na\u010D\xEDt\xE1m")},m(s,t){V(s,e,t)},p:H,i:H,o:H,d(s){s&&c(e)}}}function Re(o){let e,s,t,l,a,i,g,D,_,p,I,z,n,h,u,j,y,w,Q,r,v,f,L,P,F,C,x,J,R,$,W,S={ctx:o,current:null,token:null,hasCatch:!1,pending:Qe,then:Fe,catch:Ge,value:1,blocks:[,,,]};return ze(o[0],S),{c(){e=A(),s=k("section"),t=k("div"),l=k("h1"),a=N("UTXO.22"),i=A(),g=k("div"),D=N("4.-5. \u010Derven 2022, \u{1F1E8}\u{1F1FF} Praha"),_=A(),p=k("div"),I=N("Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference"),z=A(),n=k("div"),S.block.c(),h=A(),u=k("div"),j=k("a"),y=k("i"),w=N(" Dokumentace"),Q=A(),r=k("a"),v=k("i"),f=N(" Twitter"),L=A(),P=k("a"),F=k("i"),C=N(" Telegram"),x=A(),J=k("a"),R=k("i"),$=N(" Discord"),this.h()},l(M){qe('[data-svelte="svelte-1vhbzi0"]',document.head).forEach(c),e=O(M),s=b(M,"SECTION",{});var Y=E(s);t=b(Y,"DIV",{class:!0});var X=E(t);l=b(X,"H1",{class:!0});var ve=E(l);a=U(ve,"UTXO.22"),ve.forEach(c),i=O(X),g=b(X,"DIV",{class:!0});var he=E(g);D=U(he,"4.-5. \u010Derven 2022, \u{1F1E8}\u{1F1FF} Praha"),he.forEach(c),_=O(X),p=b(X,"DIV",{class:!0});var me=E(p);I=U(me,"Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference"),me.forEach(c),z=O(X),n=b(X,"DIV",{class:!0});var de=E(n);S.block.l(de),de.forEach(c),h=O(X),u=b(X,"DIV",{class:!0});var K=E(u);j=b(K,"A",{class:!0,href:!0});var ee=E(j);y=b(ee,"I",{class:!0}),E(y).forEach(c),w=U(ee," Dokumentace"),ee.forEach(c),Q=O(K),r=b(K,"A",{class:!0,href:!0});var te=E(r);v=b(te,"I",{class:!0}),E(v).forEach(c),f=U(te," Twitter"),te.forEach(c),L=O(K),P=b(K,"A",{class:!0,href:!0});var le=E(P);F=b(le,"I",{class:!0}),E(F).forEach(c),C=U(le," Telegram"),le.forEach(c),x=O(K),J=b(K,"A",{class:!0,href:!0});var se=E(J);R=b(se,"I",{class:!0}),E(R).forEach(c),$=U(se," Discord"),se.forEach(c),K.forEach(c),X.forEach(c),Y.forEach(c),this.h()},h(){document.title="UTXO.22 | Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference",m(l,"class","svelte-1vf2a05"),m(g,"class","subline svelte-1vf2a05"),m(p,"class","subline svelte-1vf2a05"),m(n,"class","mt-10"),m(y,"class","fas fa-book"),m(j,"class","m-2 svelte-1vf2a05"),m(j,"href","https://docs.utxo.cz"),m(v,"class","fab fa-twitter"),m(r,"class","m-2 svelte-1vf2a05"),m(r,"href","https://twitter.com/utxocz"),m(F,"class","fab fa-telegram-plane"),m(P,"class","m-2 svelte-1vf2a05"),m(P,"href","https://t.me/utxocz"),m(R,"class","fab fa-discord"),m(J,"class","m-2 svelte-1vf2a05"),m(J,"href","https://discord.gg/5k9dEtVhnv"),m(u,"class","flex flex-wrap justify-center relative mt-10"),m(t,"class","relative px-6 pt-10 pb-8 sm:max-w-4xl sm:mx-auto sm:rounded-lg sm:px-5 text-center")},m(M,G){V(M,e,G),V(M,s,G),d(s,t),d(t,l),d(l,a),d(t,i),d(t,g),d(g,D),d(t,_),d(t,p),d(p,I),d(t,z),d(t,n),S.block.m(n,S.anchor=null),S.mount=()=>n,S.anchor=null,d(t,h),d(t,u),d(u,j),d(j,y),d(j,w),d(u,Q),d(u,r),d(r,v),d(r,f),d(u,L),d(u,P),d(P,F),d(P,C),d(u,x),d(u,J),d(J,R),d(J,$),W=!0},p(M,[G]){o=M,He(S,o,G)},i(M){W||(T(S.block),W=!0)},o(M){for(let G=0;G<3;G+=1){const Y=S.blocks[G];q(Y)}W=!1},d(M){M&&c(e),M&&c(s),S.block.d(),S.token=null,S=null}}}const Ze=!0;function We(o){return[(async()=>await(await fetch("https://spec.utxo.cz/22/bundle.json")).json())()]}class xe extends ae{constructor(e){super();re(this,e,We,Re,oe,{})}}export{xe as default,Ze as prerender};