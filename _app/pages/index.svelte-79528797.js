import{J as Lt,S as nt,i as rt,s as it,D as bt,e as k,j as V,c as g,a as _,d as h,l as q,b as p,K as R,f as L,E as u,F as wt,G as yt,H as zt,m as de,n as S,o as pe,p as I,I as jt,v as Ee,w as De,x as Ae,A as Ie,L as Et,M as Q,N as Ve,k as qe,t as C,g as K,h as Te,O as Ft,P as Se,Q as Rt,R as Ut}from"../chunks/vendor-71a9290d.js";const Jt=()=>{const e=Lt("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}},Xt={subscribe(e){return Jt().page.subscribe(e)}};const Zt=e=>({}),Dt=e=>({});function Yt(e){let t;const o=e[9]["custom-tip"],a=bt(o,e,e[8],Dt);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,i){a&&a.m(s,i),t=!0},p(s,i){a&&a.p&&(!t||i&256)&&wt(a,o,s,s[8],t?zt(o,s[8],i,Zt):yt(s[8]),Dt)},i(s){t||(I(a,s),t=!0)},o(s){S(a,s),t=!1},d(s){a&&a.d(s)}}}function Gt(e){let t;return{c(){t=k("div"),this.h()},l(o){t=g(o,"DIV",{class:!0,style:!0});var a=_(t);a.forEach(h),this.h()},h(){p(t,"class","default-tip svelte-npb0qt"),p(t,"style",e[6])},m(o,a){L(o,t,a),t.innerHTML=e[0]},p(o,a){a&1&&(t.innerHTML=o[0])},i:jt,o:jt,d(o){o&&h(t)}}}function Wt(e){let t,o,a,s,i,m,b;const l=e[9].default,c=bt(l,e,e[8],null),v=[Gt,Yt],w=[];function T(d,j){return d[0]?0:1}return i=T(e),m=w[i]=v[i](e),{c(){t=k("div"),o=k("span"),c&&c.c(),a=V(),s=k("div"),m.c(),this.h()},l(d){t=g(d,"DIV",{class:!0});var j=_(t);o=g(j,"SPAN",{class:!0});var M=_(o);c&&c.l(M),M.forEach(h),a=q(j),s=g(j,"DIV",{class:!0});var y=_(s);m.l(y),y.forEach(h),j.forEach(h),this.h()},h(){p(o,"class","tooltip-slot svelte-npb0qt"),p(s,"class","tooltip svelte-npb0qt"),R(s,"active",e[5]),R(s,"left",e[4]),R(s,"right",e[2]),R(s,"bottom",e[3]),R(s,"top",e[1]),p(t,"class","tooltip-wrapper svelte-npb0qt")},m(d,j){L(d,t,j),u(t,o),c&&c.m(o,null),u(t,a),u(t,s),w[i].m(s,null),b=!0},p(d,[j]){c&&c.p&&(!b||j&256)&&wt(c,l,d,d[8],b?zt(l,d[8],j,null):yt(d[8]),null);let M=i;i=T(d),i===M?w[i].p(d,j):(de(),S(w[M],1,1,()=>{w[M]=null}),pe(),m=w[i],m?m.p(d,j):(m=w[i]=v[i](d),m.c()),I(m,1),m.m(s,null)),j&32&&R(s,"active",d[5]),j&16&&R(s,"left",d[4]),j&4&&R(s,"right",d[2]),j&8&&R(s,"bottom",d[3]),j&2&&R(s,"top",d[1])},i(d){b||(I(c,d),I(m),b=!0)},o(d){S(c,d),S(m),b=!1},d(d){d&&h(t),c&&c.d(d),w[i].d()}}}function Qt(e,t,o){let{$$slots:a={},$$scope:s}=t,{tip:i=""}=t,{top:m=!1}=t,{right:b=!1}=t,{bottom:l=!1}=t,{left:c=!1}=t,{active:v=!1}=t,{color:w="#757575"}=t,T=`background-color: ${w};`;return e.$$set=d=>{"tip"in d&&o(0,i=d.tip),"top"in d&&o(1,m=d.top),"right"in d&&o(2,b=d.right),"bottom"in d&&o(3,l=d.bottom),"left"in d&&o(4,c=d.left),"active"in d&&o(5,v=d.active),"color"in d&&o(7,w=d.color),"$$scope"in d&&o(8,s=d.$$scope)},[i,m,b,l,c,v,T,w,s,a]}class xt extends nt{constructor(t){super();rt(this,t,Qt,Wt,it,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function $t(e){let t,o,a,s,i,m,b;return{c(){t=k("a"),o=k("img"),this.h()},l(l){t=g(l,"A",{href:!0,class:!0});var c=_(t);o=g(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(h),this.h()},h(){p(o,"class",a="avatar transition-all "+(e[3]?"":"opacity-20")+" "+(e[1]?"w-24 md:w-28 m-4":"small w-14 md:w-16 m-4")+" "+(e[2]&&e[0].tracks&&e[0].tracks.includes(e[2])?"":e[2]?"opacity-20":"")+" svelte-1f522co"),Et(o.src,s=e[4])||p(o,"src",s),p(o,"alt",i=e[0].name),p(t,"href",e[5]),p(t,"class","rounded-full")},m(l,c){L(l,t,c),u(t,o),m||(b=[Q(t,"mouseover",e[7]),Q(t,"mouseleave",e[8])],m=!0)},p(l,c){c&15&&a!==(a="avatar transition-all "+(l[3]?"":"opacity-20")+" "+(l[1]?"w-24 md:w-28 m-4":"small w-14 md:w-16 m-4")+" "+(l[2]&&l[0].tracks&&l[0].tracks.includes(l[2])?"":l[2]?"opacity-20":"")+" svelte-1f522co")&&p(o,"class",a),c&16&&!Et(o.src,s=l[4])&&p(o,"src",s),c&1&&i!==(i=l[0].name)&&p(o,"alt",i)},d(l){l&&h(t),m=!1,Ve(b)}}}function ea(e){let t,o,a;return o=new xt({props:{tip:e[6],$$slots:{default:[$t]},$$scope:{ctx:e}}}),{c(){t=k("div"),Ee(o.$$.fragment)},l(s){t=g(s,"DIV",{});var i=_(t);De(o.$$.fragment,i),i.forEach(h)},m(s,i){L(s,t,i),Ae(o,t,null),a=!0},p(s,[i]){const m={};i&4127&&(m.$$scope={dirty:i,ctx:s}),o.$set(m)},i(s){a||(I(o.$$.fragment,s),a=!0)},o(s){S(o.$$.fragment,s),a=!1},d(s){s&&h(t),Ie(o)}}}function ta(e,t,o){var M;let{speaker:a}=t,{lead:s=null}=t,{category:i=null}=t,{visible:m=!0}=t;const b=["web:webp","web:png","web:jpg","twitter:jpg"];let l,c;if(a.photos&&a.photos.length>0){for(const y of b)if(a.photos.includes(y)){const[B,U]=y.split(":"),le=`https://spec.utxo.cz/22/photos/speakers/${a.id}-${B}.${U}`;if(l){c=le;break}l=le}}l||(l="/img/twitter-avatar.png");const v=a.twitter?`https://twitter.com/${a.twitter}`:(M=a.web)==null?void 0:M.url,w=a.name+(a.nickname?` (${a.nickname})`:"");let T=l;function d(){c&&o(4,T=c)}function j(){o(4,T=l)}return e.$$set=y=>{"speaker"in y&&o(0,a=y.speaker),"lead"in y&&o(1,s=y.lead),"category"in y&&o(2,i=y.category),"visible"in y&&o(3,m=y.visible)},[a,s,i,m,T,v,w,d,j]}class At extends nt{constructor(t){super();rt(this,t,ta,ea,it,{speaker:0,lead:1,category:2,visible:3})}}const aa="utxo22",sa="UTXO.22",oa="UTXO",la="Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference",na=["2022-06-04","2022-06-05"],ra="Gabriel Loci, Praha",ia="Czech Republic",ca={web:"https://utxo.cz",docs:"https://docs.utxo.cz",twitter:"https://twitter.com/utxoprague",telegram:"https://t.me/utxoprague",discord:"https://discord.gg/5k9dEtVhnv",fbevent:"https://www.facebook.com/events/276727151106692"},ua={speakers:[{id:"adam-kracik",name:"Adam Krac\xEDk",tracks:["zaklady","btc","eth","defi","alty"],photos:["web:jpg"]},{id:"adam-studenik",name:"Adam Studen\xEDk",twitter:"adamstudenik",tracks:["eth","defi"],photos:["twitter:jpg"]},{id:"anett-rohlikova",name:"Anett Rohlikova",twitter:"anettrolikova",orgs:`[Ethereum Magicians](https://ethereum-magicians.org/)
`,tracks:["eth","nft"],photos:["twitter:jpg"]},{id:"damsky",name:"damsky",twitter:"CryptoDamSky",tracks:["zaklady","eth","defi","dao","spolecnost"],photos:["twitter:jpg"]},{id:"david-bankless",name:"DavidBankless",twitter:"davidbankless",orgs:`[Flipper.Zone](https://twitter.com/flipperzonenft), [BanklessDAO](https://www.bankless.community)
`,tracks:["zaklady","dao","nft"],photos:["twitter:jpg"]},{id:"honza-dvorak",name:"Honza Dvo\u0159\xE1k",nickname:"Gorrdy",twitter:"_Honza_Dvorak",orgs:`[btcplatby.cz](https://btcplatby.cz)
`,tracks:["zaklady","btc"],photos:["twitter:jpg"]},{id:"jiri-cepelka",name:"Ji\u0159\xED \u010Cepelka",twitter:"JiriCepelka",tracks:["zaklady","eth","defi"],photos:["twitter:jpg"]},{id:"juraj-bednar",name:"Juraj Bedn\xE1r",twitter:"jurbed",bio:"Podnikatel, hacker a milovn\xEDk svobody",orgs:`Spoluzakladatel [Hacktrophy](https://hacktrophy.com/sk/), \u010Dlen [Paraleln\xE9 Polis](https://paralelnapolis.sk)
`,web:{url:"https://juraj.bednar.io"},lead:!0,tracks:["zaklady","btc","dao","spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"vladimir-pinker",name:"Vladim\xEDr Pinker",nickname:"KryptoVl\xE1\u010Fa",twitter:"KryptoVlada",orgs:`YT kan\xE1l [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win)
`,tracks:["zaklady","defi","nft","alty","spolecnost"],photos:["twitter:jpg"]},{id:"mario-havel",name:"Mario Havel",twitter:"TMIYChao",bio:"Kryptoanarchista, libertari\xE1n a hacker",orgs:`Zakladatel [Bordel Hackerspace](https://bordel.paralelnipolis.cz/#/), \u010Dlen [Paraleln\xED Polis](https://www.paralelnipolis.cz/)
`,lead:!0,tracks:["zaklady","btc","eth","defi"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"m0xt",name:"m0xt",twitter:"m0xt_",tracks:["eth","defi","dao"],photos:["twitter:jpg"]},{id:"petr-klein",name:"Petr Klein",twitter:"kleinpetr_com",tracks:["zaklady","eth","defi","dao","alts"],photos:["twitter:jpg"]},{id:"petr-mara",name:"Petr M\xE1ra",twitter:"petrmara",bio:"Technologick\xFD optimista, sb\u011Bratel NFT",web:{url:"https://www.petrmara.com"},lead:!0,tracks:["defi","nft","spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"petr-mensik",name:"Petr Men\u0161\xEDk",twitter:"petr_mensik",orgs:`[Polkadotters](https://twitter.com/polkadotterss)
`,tracks:["alty","defi"],photos:["twitter:jpg"]},{id:"pavel-precechtel",name:"Pavel P\u0159ececht\u011Bl",nickname:"Hom\u039Er Shillson",twitter:"homershillson",orgs:`[VR Education](https://vreducation.cz)
`,tracks:["eth","defi","dao","alty","nft"],photos:["twitter:jpg"]},{id:"robert-chovanculiak",name:"R\xF3bert Chovanculiak",twitter:"RChovanculiak",bio:"Autor knihy [Pokrok bez povolenia](https://libinst.cz/produkt/pokrok-bez-povolenia/)",orgs:`Analytik v [INESS](https://www.iness.sk), pedagog na [CEVRO Institutu](https://www.cevroinstitut.cz/cs/pedagog/ing-robert-chovanculiak-ph-d/)
`,web:{name:"Pokrok bez povolenia (newsletter)",url:"https://robertchovanculiak.substack.com"},lead:!0,tracks:["spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"tomas-zdrazil",name:"Tom\xE1\u0161 Zdra\u017Eil",twitter:"investree_cz",orgs:`[Investree](https://investree.cz)
`,tracks:["eth","defi","spolecnost"],photos:["twitter:jpg"]},{id:"tomas-kryptovlada",name:"Tom\xE1\u0161",orgs:`\u010Clen [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win) komunity
`,tracks:["zaklady","defi"],photos:["web:webp"]},{id:"urza",name:"Urza",twitter:"urzanarchy",bio:"Anarchokapitalista, autor knihy [Anarchokapitalismus](https://kniha.urza.cz/)",orgs:`Zakladatel [Svobodn\xE9ho p\u0159\xEDstavu](https://pristav.urza.cz/), vedouc\xED [CZ/SK Mises Institutu](https://www.mises.cz/), \u010Dlen projektu [Svoboda u\u010Den\xED](https://www.svobodauceni.cz/)
`,web:{name:"Urza.cz",url:"https://urza.cz"},lead:!0,tracks:["spolecnost","regulace","btc"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"martin-gregor",name:"Martin Gregor",twitter:"ZaujaloMa",orgs:`YT kan\xE1l [Zaujalo ma Krypto & FinTech](https://www.youtube.com/channel/UCOn72OUpmWhnNuHl04qmRzg)
`,tracks:["btc","spolecnost","alty"],photos:["twitter:jpg"]},{id:"david-antos",name:"David Anto\u0161",nickname:"jilm",twitter:"jilm",bio:"Eurofederalista, neoliber\xE1l, globalista",orgs:`Spoluzakladatel spolku [Pro euro](https://proeuro.cz)
`,tracks:["eth","btc","defi","spolecnost"],photos:["twitter:jpg"]},{id:"jaromir-tesar",name:"Jarom\xEDr Tesa\u0159",twitter:"JaromirTesar",bio:"Blockchain expert, Cardano Ambassador",orgs:`[Cardanians](https://cardanians.io/cs)
`,tracks:["zaklady","defi","alty"],photos:["twitter:jpg"]},{id:"michal-repetny",name:"Michael Repetn\xFD",twitter:"repetny",orgs:`[Marinade.finance](https://marinade.finance/)
`,tracks:["zaklady","eth","defi","alty"],photos:["twitter:jpg"]},{id:"jan-cerny",name:"Jan \u010Cern\xFD",nickname:"-HoNY-",orgs:`\u010Clen [Bitcoinovej kan\xE1l](https://bitcoinovejkanal.cz/) komunity
`,tracks:["zaklady","btc"],photos:["web:webp"]},{id:"mirek-h",name:"Mirek H",orgs:`\u010Clen [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win) komunity
`,tracks:["btc","defi","alty"],photos:["web:webp"]},{id:"adam-lokaj",name:"Adam Lokaj",bio:"Autor knihy [Adopce Bitcoinu pro obchodn\xED korporace](https://www.adopcebtc.cz/)",orgs:`[adopcebtc.cz](https://www.adopcebtc.cz/) ([Instagram](https://www.instagram.com/adopcebitcoinu/))
`,tracks:["btc","regulace"],photos:[]},{id:"fetyas",name:"Fetyas",twitter:"hernakrypto",orgs:`YT kan\xE1l [KryptoHerna](https://www.youtube.com/channel/UCOgYjFqYfUnXo5DK9HceAMw)
`,tracks:["nft"],photos:["twitter:jpg"]},{id:"vojtch",name:"Vojt\u011Bch Studen\xFD",nickname:"vojtch",twitter:"StudenyVojta",orgs:`[Bankless.cz](https://bankless.cz/)
`,tracks:["zaklady","eth","dao","defi"],photos:["twitter:jpg"]}],tracks:[{id:"zaklady",name:"Z\xE1klady kryptom\u011Bn",shortname:"Z\xE1klady",examples:`* principy otev\u0159en\xFDch projekt\u016F (blockchain\u016F)
* z\xE1klady bezpe\u010Dnosti a soukrom\xED
* pen\u011B\u017Eenky - SW, HW
* z\xE1klady obchodov\xE1n\xED - DCA
`},{id:"btc",name:"Bitcoin",examples:`* Bitcoin jako pen\xEDze
* Lightning Network - adopce, implementace
* Taproot
* Bitcoin mining
* smart-kontrakty na bitcoinu (RGB)
`},{id:"eth",name:"Ethereum a smart-kontrakty obecn\u011B",shortname:"Ethereum",examples:`* Ethereum 2.0
* Layer2 - rollupy
* (EVM) Sidechainy
* v\xFDvoj smart-kontrakt\u016F (solidity)
* MEV - Miner Extractable Value
`},{id:"defi",name:"Decentralizovan\xE9 finance (DeFi)",shortname:"DeFi",examples:`* stablecoiny
* lending protokoly
* DEX - decentralizovan\xE9 burzy
* predik\u010Dn\xED trhy
* futures/options kontrakty
* tokenizace
`},{id:"dao",name:"Decentralizovan\xE9 organizace (DAO)",shortname:"DAOs",examples:`* budoucnost organizac\xED
* showcase jednotliv\xFDch DAOs
`},{id:"nft",name:"NFTs a Metaverse",examples:`* NFT um\u011Bn\xED
* NFT collectibles
* gaming
* Metaverse
`},{id:"alty",name:"Experiment\xE1ln\xED L1 blockchainy a dal\u0161\xED altcoiny",shortname:"Alternativn\xED L1",examples:`* Polkadot
* Cardano
* Cosmos (Secret Network..)
* Solana
* NEAR
* Monero
* ...
`},{id:"regulace",name:"Regulace a fiat rampy",shortname:"Regulace",examples:`* legislativa
* sm\u011Bn\xE1rny a burzy
* darov\xE1n\xED kryptom\u011Bn
* insitucion\xE1ln\xED pen\xEDze v kryptom\u011Bn\xE1ch
`},{id:"spolecnost",name:"Krypto-spole\u010Dnost",shortname:"Spole\u010Dnost",examples:`* odluka pen\u011Bz od st\xE1tu
* kryptoanarchismus, anarchokapitalismus, meritokracie
* p\u0159edstaven\xED lok\xE1ln\xEDch krypto-komunit
* fenom\xE9n maximalismu
`}],events:[],faqs:[{question:"Kde se akce bude odehr\xE1vat?",answer:`Prvn\xED ro\u010Dn\xEDk konference se uskute\u010Dn\xED v unik\xE1tn\xED komplexu b\xFDval\xE9ho kl\xE1\u0161tera [Gabriel Loci](https://goo.gl/maps/2j9XNPSRQePZNLuz5) na pra\u017Esk\xE9m Sm\xEDchov\u011B. K dispozici bude hlavn\xED p\u0159edn\xE1\u0161kov\xFD s\xE1l, dva st\u0159edn\u011B velk\xE9 p\u0159edn\xE1\u0161kov\xE9 s\xE1ly a dal\u0161\xED men\u0161\xED s\xE1ly pro workshopy. Obsah ve v\u0161ech s\xE1lech bude prob\xEDhat paraleln\u011B. K dispozici bude tak\xE9 spousta dal\u0161\xEDch prostor, nap\u0159\xEDklad chill-out z\xF3na nebo venkovn\xED posezen\xED s food-trucky a dal\u0161\xEDmi st\xE1nky.
`},{question:"Jak z\xEDsk\xE1m vstupenku?",answer:`Prvn\xED vstupenky pl\xE1nujeme uvolnit do prodeje v pr\u016Fb\u011Bhu \xFAnora 2022. Vstupn\xE9 bude n\xEDzk\xE9 a platit budete moci jak platebn\xED kartou, tak samoz\u0159ejm\u011B kryptom\u011Bnami (p\u0159edev\u0161\xEDm Lightning Network).
`},{question:"Budou p\u0159edn\xE1\u0161ky vys\xEDlan\xE9 \u017Eiv\u011B?",answer:`Ano, pl\xE1nujeme bohat\xFD program i pro n\xE1v\u0161t\u011Bvn\xEDky online - \u017Eiv\xE9 p\u0159enosy ze v\u0161ech p\u0159edn\xE1\u0161kov\xFDch s\xE1l\u016F, rozhovory s n\xE1v\u0161t\u011Bvn\xEDky a dal\u0161\xED obsah. V\u0161e bude zdarma dostupn\xE9 na dom\xE9n\u011B UTXO.TV (a YouTube).
`},{question:'Co to znamen\xE1 "UTXO"?',answer:`"UTXO" znamen\xE1 "*Unspent transaction output*", co\u017E by se dalo p\u0159elo\u017Eit jako "neutracen\xFD v\xFDstup transakce". Jedn\xE1 se o [z\xE1kladn\xED mechanismus fungov\xE1n\xED bitcoinu](https://www.alza.cz/transakcni-poplatky-a-minimalni-velikost-utxo#co-je-utxo).

> "_UTXO je jedin\xFD zp\u016Fsob, jak\xFDm v\xE1\u0161 bitcoin skute\u010Dn\u011B "existuje". Ka\u017Ed\xE1 transakce bere p\u0159edchoz\xED neutracen\xE9 v\xFDstupy, pou\u017E\xEDv\xE1 je jako vstupy a ve v\xFDsledku vytv\xE1\u0159\xED nov\xE9 v\xFDstupy. Ka\u017Ed\xFD konec je nov\xFDm za\u010D\xE1tkem. Bitcoin je kr\xE1sn\xFD._" - [@SatsJoseph](https://twitter.com/SatsJoseph/status/1370329486059843588)
`},{question:"Jsem maximalista, m\u016F\u017Eu p\u0159ij\xEDt?",answer:`Ano! Konference vznikla jako m\xEDsto pro dialog v r\xE1mci cel\xE9 lok\xE1ln\xED krypto-komunity. Ka\u017Ed\xFD n\u011B\u010Demu fand\xEDme, ale poj\u010Fme se od toho alespo\u0148 chv\xEDli odprostit a poslechnout si i my\u0161lenky protistrany.
`},{question:"Budou dostupn\xE9 z\xE1znamy p\u0159edn\xE1\u0161ek?",answer:`Ano, v\u0161echny p\u0159edn\xE1\u0161ky budou po konferenci dostupn\xE9 zdarma na UTXO.TV nebo na\u0161em YouTube kan\xE1lu.
`}]},da={tracks:9,speakers:28,events:0,faqs:6};var pa={id:aa,name:sa,shortname:oa,description:la,dates:na,place:ra,country:ia,links:ca,spec:ua,stats:da};function It(e,t,o){const a=e.slice();return a[13]=t[o],a}function Vt(e,t,o){const a=e.slice();return a[16]=t[o],a}function qt(e,t,o){const a=e.slice();return a[19]=t[o],a}function Tt(e,t,o){const a=e.slice();return a[19]=t[o],a}function St(e){let t,o,a,s,i,m;o=new At({props:{speaker:e[19],lead:!0,category:e[1],visible:!e[2]||e[2]&&e[2].id===e[19].id}});function b(){return e[8](e[19])}return{c(){t=k("div"),Ee(o.$$.fragment),a=V(),this.h()},l(l){t=g(l,"DIV",{class:!0});var c=_(t);De(o.$$.fragment,c),a=q(c),c.forEach(h),this.h()},h(){p(t,"class","rounded-full")},m(l,c){L(l,t,c),Ae(o,t,null),u(t,a),s=!0,i||(m=[Q(t,"mouseover",b),Q(t,"mouseleave",e[7])],i=!0)},p(l,c){e=l;const v={};c&1&&(v.speaker=e[19]),c&2&&(v.category=e[1]),c&5&&(v.visible=!e[2]||e[2]&&e[2].id===e[19].id),o.$set(v)},i(l){s||(I(o.$$.fragment,l),s=!0)},o(l){S(o.$$.fragment,l),s=!1},d(l){l&&h(t),Ie(o),i=!1,Ve(m)}}}function Pt(e){let t,o,a=e[19].lead&&St(e);return{c(){a&&a.c(),t=qe()},l(s){a&&a.l(s),t=qe()},m(s,i){a&&a.m(s,i),L(s,t,i),o=!0},p(s,i){s[19].lead?a?(a.p(s,i),i&1&&I(a,1)):(a=St(s),a.c(),I(a,1),a.m(t.parentNode,t)):a&&(de(),S(a,1,1,()=>{a=null}),pe())},i(s){o||(I(a),o=!0)},o(s){S(a),o=!1},d(s){a&&a.d(s),s&&h(t)}}}function Mt(e){let t,o,a,s,i,m;o=new At({props:{speaker:e[19],category:e[1],visible:!e[2]||e[2]&&e[2].id===e[19].id}});function b(){return e[9](e[19])}return{c(){t=k("div"),Ee(o.$$.fragment),a=V()},l(l){t=g(l,"DIV",{});var c=_(t);De(o.$$.fragment,c),a=q(c),c.forEach(h)},m(l,c){L(l,t,c),Ae(o,t,null),u(t,a),s=!0,i||(m=[Q(t,"mouseover",b),Q(t,"mouseleave",e[7])],i=!0)},p(l,c){e=l;const v={};c&1&&(v.speaker=e[19]),c&2&&(v.category=e[1]),c&5&&(v.visible=!e[2]||e[2]&&e[2].id===e[19].id),o.$set(v)},i(l){s||(I(o.$$.fragment,l),s=!0)},o(l){S(o.$$.fragment,l),s=!1},d(l){l&&h(t),Ie(o),i=!1,Ve(m)}}}function Ot(e){let t,o,a=!e[19].lead&&Mt(e);return{c(){a&&a.c(),t=qe()},l(s){a&&a.l(s),t=qe()},m(s,i){a&&a.m(s,i),L(s,t,i),o=!0},p(s,i){s[19].lead?a&&(de(),S(a,1,1,()=>{a=null}),pe()):a?(a.p(s,i),i&1&&I(a,1)):(a=Mt(s),a.c(),I(a,1),a.m(t.parentNode,t))},i(s){o||(I(a),o=!0)},o(s){S(a),o=!1},d(s){a&&a.d(s),s&&h(t)}}}function Ct(e){let t,o=(e[16].shortname||e[16].name)+"",a,s,i,m;function b(){return e[10](e[16])}return{c(){t=k("div"),a=C(o),this.h()},l(l){t=g(l,"DIV",{class:!0});var c=_(t);a=K(c,o),c.forEach(h),this.h()},h(){var l;p(t,"class",s="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer "+(e[2]&&!((l=e[2].tracks)==null?void 0:l.includes(e[16].id))?"opacity-20":"")+" svelte-1wpoq8u")},m(l,c){L(l,t,c),u(t,a),i||(m=[Q(t,"mouseover",b),Q(t,"mouseleave",e[5])],i=!0)},p(l,c){var v;e=l,c&1&&o!==(o=(e[16].shortname||e[16].name)+"")&&Te(a,o),c&5&&s!==(s="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer "+(e[2]&&!((v=e[2].tracks)==null?void 0:v.includes(e[16].id))?"opacity-20":"")+" svelte-1wpoq8u")&&p(t,"class",s)},d(l){l&&h(t),i=!1,Ve(m)}}}function Kt(e){let t,o,a=e[13].question+"",s,i,m,b,l,c;return b=new Ut({props:{source:e[13].answer}}),{c(){t=k("div"),o=k("h3"),s=C(a),i=V(),m=k("p"),Ee(b.$$.fragment),l=V(),this.h()},l(v){t=g(v,"DIV",{class:!0});var w=_(t);o=g(w,"H3",{class:!0});var T=_(o);s=K(T,a),T.forEach(h),i=q(w),m=g(w,"P",{class:!0});var d=_(m);De(b.$$.fragment,d),d.forEach(h),l=q(w),w.forEach(h),this.h()},h(){p(o,"class","pixelfont text-sm mb-3 svelte-1wpoq8u"),p(m,"class","md"),p(t,"class","mb-5 break-inside-avoid-column bg-white/30 rounded-3xl px-6 py-4 text-left transition-all box-shadow-light overflow-visible svelte-1wpoq8u")},m(v,w){L(v,t,w),u(t,o),u(o,s),u(t,i),u(t,m),Ae(b,m,null),u(t,l),c=!0},p(v,w){(!c||w&1)&&a!==(a=v[13].question+"")&&Te(s,a);const T={};w&1&&(T.source=v[13].answer),b.$set(T)},i(v){c||(I(b.$$.fragment,v),c=!0)},o(v){S(b.$$.fragment,v),c=!1},d(v){v&&h(t),Ie(b)}}}function ha(e){let t,o,a,s,i,m,b,l,c,v=e[0].place+"",w,T,d,j=e[0].description+"",M,y,B,U,le,x,Pe,ne,Me,Oe,$,Ce,re,he,Ke,Be,ie,Ne,He,ce,ee,Le,N,J,me,Fe,be,Re,X,fe,Ue,we,Je,Z,ve,Xe,ye,Ze,Y,ke,Ye,ze,Ge,G,ge,We,je,Qe,te,xe,_e,H;document.title=t=""+(e[0].name+" | "+e[0].description);let ae=e[0].spec.speakers,E=[];for(let r=0;r<ae.length;r+=1)E[r]=Pt(Tt(e,ae,r));const Bt=r=>S(E[r],1,1,()=>{E[r]=null});let se=e[0].spec.speakers,D=[];for(let r=0;r<se.length;r+=1)D[r]=Ot(qt(e,se,r));const Nt=r=>S(D[r],1,1,()=>{D[r]=null});let ue=e[0].spec.tracks,P=[];for(let r=0;r<ue.length;r+=1)P[r]=Ct(Vt(e,ue,r));let oe=e[0].spec.faqs,A=[];for(let r=0;r<oe.length;r+=1)A[r]=Kt(It(e,oe,r));const Ht=r=>S(A[r],1,1,()=>{A[r]=null});return{c(){o=V(),a=k("section"),s=k("div"),i=k("h1"),m=C(e[3]),b=V(),l=k("div"),c=C("4.-5. \u010Derven 2022 @ "),w=C(v),T=V(),d=k("div"),M=C(j),y=V(),B=k("div"),U=k("div");for(let r=0;r<E.length;r+=1)E[r].c();le=V(),x=k("div");for(let r=0;r<D.length;r+=1)D[r].c();Pe=V(),ne=k("div"),Me=C(".. a dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED p\u0159ipravujeme!"),Oe=V(),$=k("div");for(let r=0;r<P.length;r+=1)P[r].c();Ce=V(),re=k("div"),he=k("div"),Ke=C("2 dny, 50+ p\u0159edn\xE1\u0161ej\xEDch, 100h+ obsahu, 1000+ n\xE1v\u0161t\u011Bvn\xEDk\u016F"),Be=V(),ie=k("h2"),Ne=C("\u010Casto kladen\xE9 dotazy (FAQ)"),He=V(),ce=k("div"),ee=k("div");for(let r=0;r<A.length;r+=1)A[r].c();Le=V(),N=k("div"),J=k("a"),me=k("i"),Fe=C(" Dokumentace"),Re=V(),X=k("a"),fe=k("i"),Ue=C(" Twitter"),Je=V(),Z=k("a"),ve=k("i"),Xe=C(" Discord"),Ze=V(),Y=k("a"),ke=k("i"),Ye=C(" Telegram"),Ge=V(),G=k("a"),ge=k("i"),We=C(" Facebook"),Qe=V(),te=k("div"),xe=C("We Are All Satoshi "),_e=k("i"),this.h()},l(r){Ft('[data-svelte="svelte-1duagmk"]',document.head).forEach(h),o=q(r),a=g(r,"SECTION",{});var n=_(a);s=g(n,"DIV",{class:!0});var z=_(s);i=g(z,"H1",{class:!0});var ct=_(i);m=K(ct,e[3]),ct.forEach(h),b=q(z),l=g(z,"DIV",{class:!0});var $e=_(l);c=K($e,"4.-5. \u010Derven 2022 @ "),w=K($e,v),$e.forEach(h),T=q(z),d=g(z,"DIV",{class:!0});var ut=_(d);M=K(ut,j),ut.forEach(h),y=q(z),B=g(z,"DIV",{class:!0});var W=_(B);U=g(W,"DIV",{class:!0});var dt=_(U);for(let O=0;O<E.length;O+=1)E[O].l(dt);dt.forEach(h),le=q(W),x=g(W,"DIV",{class:!0});var pt=_(x);for(let O=0;O<D.length;O+=1)D[O].l(pt);pt.forEach(h),Pe=q(W),ne=g(W,"DIV",{class:!0});var ht=_(ne);Me=K(ht,".. a dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED p\u0159ipravujeme!"),ht.forEach(h),Oe=q(W),$=g(W,"DIV",{class:!0});var mt=_($);for(let O=0;O<P.length;O+=1)P[O].l(mt);mt.forEach(h),W.forEach(h),Ce=q(z),re=g(z,"DIV",{class:!0});var ft=_(re);he=g(ft,"DIV",{});var vt=_(he);Ke=K(vt,"2 dny, 50+ p\u0159edn\xE1\u0161ej\xEDch, 100h+ obsahu, 1000+ n\xE1v\u0161t\u011Bvn\xEDk\u016F"),vt.forEach(h),ft.forEach(h),Be=q(z),ie=g(z,"H2",{class:!0});var kt=_(ie);Ne=K(kt,"\u010Casto kladen\xE9 dotazy (FAQ)"),kt.forEach(h),He=q(z),ce=g(z,"DIV",{class:!0});var gt=_(ce);ee=g(gt,"DIV",{class:!0});var _t=_(ee);for(let O=0;O<A.length;O+=1)A[O].l(_t);_t.forEach(h),gt.forEach(h),Le=q(z),N=g(z,"DIV",{class:!0});var F=_(N);J=g(F,"A",{class:!0,href:!0});var et=_(J);me=g(et,"I",{class:!0}),_(me).forEach(h),Fe=K(et," Dokumentace"),et.forEach(h),Re=q(F),X=g(F,"A",{class:!0,href:!0});var tt=_(X);fe=g(tt,"I",{class:!0}),_(fe).forEach(h),Ue=K(tt," Twitter"),tt.forEach(h),Je=q(F),Z=g(F,"A",{class:!0,href:!0});var at=_(Z);ve=g(at,"I",{class:!0}),_(ve).forEach(h),Xe=K(at," Discord"),at.forEach(h),Ze=q(F),Y=g(F,"A",{class:!0,href:!0});var st=_(Y);ke=g(st,"I",{class:!0}),_(ke).forEach(h),Ye=K(st," Telegram"),st.forEach(h),Ge=q(F),G=g(F,"A",{class:!0,href:!0});var ot=_(G);ge=g(ot,"I",{class:!0}),_(ge).forEach(h),We=K(ot," Facebook"),ot.forEach(h),F.forEach(h),Qe=q(z),te=g(z,"DIV",{class:!0});var lt=_(te);xe=K(lt,"We Are All Satoshi "),_e=g(lt,"I",{class:!0}),_(_e).forEach(h),lt.forEach(h),z.forEach(h),n.forEach(h),this.h()},h(){p(i,"class","text-5xl md:text-6xl lg:text-7xl svelte-1wpoq8u"),p(l,"class","subline-shadow text-lg md:text-xl lg:text-2xl svelte-1wpoq8u"),p(d,"class","subline text-sm md:text-md lg:text-lg text-gray-800 svelte-1wpoq8u"),p(U,"class","mt-3 mb-6 flex flex-wrap justify-center relative"),p(x,"class","flex flex-wrap justify-center relative"),p(ne,"class","pixelfont text-sm mt-5 mb-10 svelte-1wpoq8u"),p($,"class","mt-12 mb-6 flex flex-wrap justify-center relative gap-4 text-sm"),p(B,"class","mt-10"),p(re,"class","subline-shadow2 text-lg md:text-xl lg:text-2xl mt-14 svelte-1wpoq8u"),p(ie,"class","pixelfont mt-10 text-gray-800"),p(ee,"class","columns-1 xl:columns-2 mt-5 h-auto text-gray-800"),p(ce,"class","container w-full"),p(me,"class","fas fa-book"),p(J,"class","m-3 svelte-1wpoq8u"),p(J,"href",be=e[0].links.docs),p(fe,"class","fab fa-twitter"),p(X,"class","m-3 svelte-1wpoq8u"),p(X,"href",we=e[0].links.twitter),p(ve,"class","fab fa-discord"),p(Z,"class","m-3 svelte-1wpoq8u"),p(Z,"href",ye=e[0].links.discord),p(ke,"class","fab fa-telegram-plane"),p(Y,"class","m-3 svelte-1wpoq8u"),p(Y,"href",ze=e[0].links.telegram),p(ge,"class","fab fa-facebook"),p(G,"class","m-3 svelte-1wpoq8u"),p(G,"href",je=e[0].links.fbevent),p(N,"class","flex flex-wrap justify-center relative mt-5 pixelfont text-sm svelte-1wpoq8u"),p(_e,"class","fas fa-heart text-red-500"),p(te,"class","mt-5 subline-shadow2 svelte-1wpoq8u"),p(s,"class","relative px-6 pt-10 pb-8 sm:max-w-6xl sm:mx-auto sm:rounded-lg sm:px-5 text-center")},m(r,f){L(r,o,f),L(r,a,f),u(a,s),u(s,i),u(i,m),u(s,b),u(s,l),u(l,c),u(l,w),u(s,T),u(s,d),u(d,M),u(s,y),u(s,B),u(B,U);for(let n=0;n<E.length;n+=1)E[n].m(U,null);u(B,le),u(B,x);for(let n=0;n<D.length;n+=1)D[n].m(x,null);u(B,Pe),u(B,ne),u(ne,Me),u(B,Oe),u(B,$);for(let n=0;n<P.length;n+=1)P[n].m($,null);u(s,Ce),u(s,re),u(re,he),u(he,Ke),u(s,Be),u(s,ie),u(ie,Ne),u(s,He),u(s,ce),u(ce,ee);for(let n=0;n<A.length;n+=1)A[n].m(ee,null);u(s,Le),u(s,N),u(N,J),u(J,me),u(J,Fe),u(N,Re),u(N,X),u(X,fe),u(X,Ue),u(N,Je),u(N,Z),u(Z,ve),u(Z,Xe),u(N,Ze),u(N,Y),u(Y,ke),u(Y,Ye),u(N,Ge),u(N,G),u(G,ge),u(G,We),u(s,Qe),u(s,te),u(te,xe),u(te,_e),H=!0},p(r,[f]){if((!H||f&1)&&t!==(t=""+(r[0].name+" | "+r[0].description))&&(document.title=t),(!H||f&1)&&v!==(v=r[0].place+"")&&Te(w,v),(!H||f&1)&&j!==(j=r[0].description+"")&&Te(M,j),f&199){ae=r[0].spec.speakers;let n;for(n=0;n<ae.length;n+=1){const z=Tt(r,ae,n);E[n]?(E[n].p(z,f),I(E[n],1)):(E[n]=Pt(z),E[n].c(),I(E[n],1),E[n].m(U,null))}for(de(),n=ae.length;n<E.length;n+=1)Bt(n);pe()}if(f&199){se=r[0].spec.speakers;let n;for(n=0;n<se.length;n+=1){const z=qt(r,se,n);D[n]?(D[n].p(z,f),I(D[n],1)):(D[n]=Ot(z),D[n].c(),I(D[n],1),D[n].m(x,null))}for(de(),n=se.length;n<D.length;n+=1)Nt(n);pe()}if(f&53){ue=r[0].spec.tracks;let n;for(n=0;n<ue.length;n+=1){const z=Vt(r,ue,n);P[n]?P[n].p(z,f):(P[n]=Ct(z),P[n].c(),P[n].m($,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=ue.length}if(f&1){oe=r[0].spec.faqs;let n;for(n=0;n<oe.length;n+=1){const z=It(r,oe,n);A[n]?(A[n].p(z,f),I(A[n],1)):(A[n]=Kt(z),A[n].c(),I(A[n],1),A[n].m(ee,null))}for(de(),n=oe.length;n<A.length;n+=1)Ht(n);pe()}(!H||f&1&&be!==(be=r[0].links.docs))&&p(J,"href",be),(!H||f&1&&we!==(we=r[0].links.twitter))&&p(X,"href",we),(!H||f&1&&ye!==(ye=r[0].links.discord))&&p(Z,"href",ye),(!H||f&1&&ze!==(ze=r[0].links.telegram))&&p(Y,"href",ze),(!H||f&1&&je!==(je=r[0].links.fbevent))&&p(G,"href",je)},i(r){if(!H){for(let f=0;f<ae.length;f+=1)I(E[f]);for(let f=0;f<se.length;f+=1)I(D[f]);for(let f=0;f<oe.length;f+=1)I(A[f]);H=!0}},o(r){E=E.filter(Boolean);for(let f=0;f<E.length;f+=1)S(E[f]);D=D.filter(Boolean);for(let f=0;f<D.length;f+=1)S(D[f]);A=A.filter(Boolean);for(let f=0;f<A.length;f+=1)S(A[f]);H=!1},d(r){r&&h(o),r&&h(a),Se(E,r),Se(D,r),Se(P,r),Se(A,r)}}}const ka=!0,ma="UTXO.22";function fa(e,t,o){let a;Rt(e,Xt,y=>o(11,a=y));let s=pa;a.url.hostname==="localhost"?console.log("Local only mode"):(async()=>{const y=await fetch("https://spec.utxo.cz/22/bundle.json");o(0,s=await y.json())})();let m=ma,b=null,l=null;function c(y){o(1,b=y)}function v(){o(1,b=null)}function w(y){o(2,l=y)}function T(){o(2,l=null)}return[s,b,l,m,c,v,w,T,y=>w(y),y=>w(y),y=>c(y.id)]}class ga extends nt{constructor(t){super();rt(this,t,fa,ha,it,{})}}export{ga as default,ka as prerender};
