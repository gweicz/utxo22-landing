import{J as ua,S as Ce,i as Pe,s as Ne,D as It,e as b,j as I,c as w,a as y,d as v,l as V,b as h,K as x,f as q,E as p,F as Vt,G as Tt,H as At,m as $,n as T,o as ee,p as j,I as de,v as _e,w as be,x as we,A as ye,L as Ut,M as ae,N as Je,t as P,g as N,h as ze,O as pa,P as da,k as Ze,Q as je,R as ha}from"../chunks/vendor-20ef33d6.js";const ma=()=>{const t=ua("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},fa={subscribe(t){return ma().page.subscribe(t)}};const ka=t=>({}),Jt=t=>({});function va(t){let e;const n=t[9]["custom-tip"],l=It(n,t,t[8],Jt);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,s){l&&l.m(a,s),e=!0},p(a,s){l&&l.p&&(!e||s&256)&&Vt(l,n,a,a[8],e?At(n,a[8],s,ka):Tt(a[8]),Jt)},i(a){e||(j(l,a),e=!0)},o(a){T(l,a),e=!1},d(a){l&&l.d(a)}}}function ga(t){let e;return{c(){e=b("div"),this.h()},l(n){e=w(n,"DIV",{class:!0,style:!0});var l=y(e);l.forEach(v),this.h()},h(){h(e,"class","default-tip svelte-npb0qt"),h(e,"style",t[6])},m(n,l){q(n,e,l),e.innerHTML=t[0]},p(n,l){l&1&&(e.innerHTML=n[0])},i:de,o:de,d(n){n&&v(e)}}}function _a(t){let e,n,l,a,s,c,_;const r=t[9].default,u=It(r,t,t[8],null),f=[ga,va],z=[];function k(d,g){return d[0]?0:1}return s=k(t),c=z[s]=f[s](t),{c(){e=b("div"),n=b("span"),u&&u.c(),l=I(),a=b("div"),c.c(),this.h()},l(d){e=w(d,"DIV",{class:!0});var g=y(e);n=w(g,"SPAN",{class:!0});var A=y(n);u&&u.l(A),A.forEach(v),l=V(g),a=w(g,"DIV",{class:!0});var E=y(a);c.l(E),E.forEach(v),g.forEach(v),this.h()},h(){h(n,"class","tooltip-slot svelte-npb0qt"),h(a,"class","tooltip svelte-npb0qt"),x(a,"active",t[5]),x(a,"left",t[4]),x(a,"right",t[2]),x(a,"bottom",t[3]),x(a,"top",t[1]),h(e,"class","tooltip-wrapper svelte-npb0qt")},m(d,g){q(d,e,g),p(e,n),u&&u.m(n,null),p(e,l),p(e,a),z[s].m(a,null),_=!0},p(d,[g]){u&&u.p&&(!_||g&256)&&Vt(u,r,d,d[8],_?At(r,d[8],g,null):Tt(d[8]),null);let A=s;s=k(d),s===A?z[s].p(d,g):($(),T(z[A],1,1,()=>{z[A]=null}),ee(),c=z[s],c?c.p(d,g):(c=z[s]=f[s](d),c.c()),j(c,1),c.m(a,null)),g&32&&x(a,"active",d[5]),g&16&&x(a,"left",d[4]),g&4&&x(a,"right",d[2]),g&8&&x(a,"bottom",d[3]),g&2&&x(a,"top",d[1])},i(d){_||(j(u,d),j(c),_=!0)},o(d){T(u,d),T(c),_=!1},d(d){d&&v(e),u&&u.d(d),z[s].d()}}}function ba(t,e,n){let{$$slots:l={},$$scope:a}=e,{tip:s=""}=e,{top:c=!1}=e,{right:_=!1}=e,{bottom:r=!1}=e,{left:u=!1}=e,{active:f=!1}=e,{color:z="#757575"}=e,k=`background-color: ${z};`;return t.$$set=d=>{"tip"in d&&n(0,s=d.tip),"top"in d&&n(1,c=d.top),"right"in d&&n(2,_=d.right),"bottom"in d&&n(3,r=d.bottom),"left"in d&&n(4,u=d.left),"active"in d&&n(5,f=d.active),"color"in d&&n(7,z=d.color),"$$scope"in d&&n(8,a=d.$$scope)},[s,c,_,r,u,f,k,z,a,l]}class wa extends Ce{constructor(e){super();Pe(this,e,ba,_a,Ne,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function ya(t){let e,n;const l=t[3].default,a=It(l,t,t[2],null);return{c(){e=b("a"),a&&a.c(),this.h()},l(s){e=w(s,"A",{href:!0,title:!0,target:!0});var c=y(e);a&&a.l(c),c.forEach(v),this.h()},h(){h(e,"href",t[0]),h(e,"title",t[1]),h(e,"target","_blank")},m(s,c){q(s,e,c),a&&a.m(e,null),n=!0},p(s,[c]){a&&a.p&&(!n||c&4)&&Vt(a,l,s,s[2],n?At(l,s[2],c,null):Tt(s[2]),null),(!n||c&1)&&h(e,"href",s[0]),(!n||c&2)&&h(e,"title",s[1])},i(s){n||(j(a,s),n=!0)},o(s){T(a,s),n=!1},d(s){s&&v(e),a&&a.d(s)}}}function za(t,e,n){let{$$slots:l={},$$scope:a}=e,{href:s=""}=e,{title:c=void 0}=e;return t.$$set=_=>{"href"in _&&n(0,s=_.href),"title"in _&&n(1,c=_.title),"$$scope"in _&&n(2,a=_.$$scope)},[s,c,a,l]}class ja extends Ce{constructor(e){super();Pe(this,e,za,ya,Ne,{href:0,title:1})}}function Ea(t){let e,n,l,a,s,c,_;return{c(){e=b("a"),n=b("img"),this.h()},l(r){e=w(r,"A",{href:!0,target:!0,class:!0});var u=y(e);n=w(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(v),this.h()},h(){h(n,"class",l="avatar transition-all "+(t[3]?"":"opacity-20")+" "+(t[1]?"w-24 md:w-28 m-4":"small w-14 md:w-16 m-4")+" "+(t[2]&&t[0].tracks&&t[0].tracks.includes(t[2])?"":t[2]?"opacity-20":"")+" svelte-1f522co"),Ut(n.src,a=t[4])||h(n,"src",a),h(n,"alt",s=t[0].name),h(e,"href",t[6]),h(e,"target","_blank"),h(e,"class","rounded-full")},m(r,u){q(r,e,u),p(e,n),c||(_=[ae(e,"mouseover",t[7]),ae(e,"mouseleave",t[8])],c=!0)},p(r,u){u&15&&l!==(l="avatar transition-all "+(r[3]?"":"opacity-20")+" "+(r[1]?"w-24 md:w-28 m-4":"small w-14 md:w-16 m-4")+" "+(r[2]&&r[0].tracks&&r[0].tracks.includes(r[2])?"":r[2]?"opacity-20":"")+" svelte-1f522co")&&h(n,"class",l),u&16&&!Ut(n.src,a=r[4])&&h(n,"src",a),u&1&&s!==(s=r[0].name)&&h(n,"alt",s),u&64&&h(e,"href",r[6])},d(r){r&&v(e),c=!1,Je(_)}}}function Da(t){let e,n,l;return n=new wa({props:{tip:t[5],$$slots:{default:[Ea]},$$scope:{ctx:t}}}),{c(){e=b("div"),_e(n.$$.fragment)},l(a){e=w(a,"DIV",{});var s=y(e);be(n.$$.fragment,s),s.forEach(v)},m(a,s){q(a,e,s),we(n,e,null),l=!0},p(a,[s]){const c={};s&32&&(c.tip=a[5]),s&8287&&(c.$$scope={dirty:s,ctx:a}),n.$set(c)},i(a){l||(j(n.$$.fragment,a),l=!0)},o(a){T(n.$$.fragment,a),l=!1},d(a){a&&v(e),ye(n)}}}function Ia(t,e,n){let l,a,s,{speaker:c}=e,{lead:_=null}=e,{category:r=null}=e,{visible:u=!0}=e,{col:f="speakers"}=e;const z=["web:webp","web:png","web:jpg","twitter:jpg"];let k=null,d=null;if(c.photos&&c.photos.length>0){for(const E of z)if(c.photos.includes(E)){const[U,he]=E.split(":"),D=`https://spec.utxo.cz/22/photos/${f}/${c.id}-${U}.${he}`;if(k){d=D;break}n(10,k=D)}}k||(k="/img/twitter-avatar.png");function g(){d&&n(4,s=d)}function A(){n(4,s=k)}return t.$$set=E=>{"speaker"in E&&n(0,c=E.speaker),"lead"in E&&n(1,_=E.lead),"category"in E&&n(2,r=E.category),"visible"in E&&n(3,u=E.visible),"col"in E&&n(9,f=E.col)},t.$$.update=()=>{var E;t.$$.dirty&1&&n(6,l=c.twitter?`https://twitter.com/${c.twitter}`:(E=c.web)==null?void 0:E.url),t.$$.dirty&1&&n(5,a=c.name+(c.nickname?` (${c.nickname})`:"")),t.$$.dirty&1024&&n(4,s=k)},[c,_,r,u,s,a,l,g,A,f,k]}class St extends Ce{constructor(e){super();Pe(this,e,Ia,Da,Ne,{speaker:0,lead:1,category:2,visible:3,col:9})}}function Va(t){let e,n,l;return{c(){e=b("div"),n=P("Do zah\xE1jen\xED zb\xFDv\xE1 "),l=P(t[0])},l(a){e=w(a,"DIV",{});var s=y(e);n=N(s,"Do zah\xE1jen\xED zb\xFDv\xE1 "),l=N(s,t[0]),s.forEach(v)},m(a,s){q(a,e,s),p(e,n),p(e,l)},p(a,[s]){s&1&&ze(l,a[0])},i:de,o:de,d(a){a&&v(e)}}}function Ta(t,e,n){let{target:l=new Date("2022-06-04T09:00+02:00")}=e;const a={day:86400*1e3,hour:3600*1e3,minute:60*1e3,second:1*1e3};let s;function c(){const _=new Date,r=Number(l)-Number(_);Math.floor(r/a.day);const u={};let f=0;for(const z of Object.keys(a))u[z]=Math.floor((r-f)/a[z]),f+=u[z]*a[z];n(0,s=`${u.day} dn\u016F ${u.hour} hodin ${u.minute} minut ${u.second} vte\u0159in`)}return c(),setInterval(c,1e3),t.$$set=_=>{"target"in _&&n(1,l=_.target)},[s,l]}class Aa extends Ce{constructor(e){super();Pe(this,e,Ta,Va,Ne,{target:1})}}const Sa="utxo22",Ka="UTXO.22",Ma="UTXO",Ca="Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference",Pa=["2022-06-04","2022-06-05"],Na="Gabriel Loci, Praha",Ha="Czech Republic",Ba={web:"https://utxo.cz",docs:"https://docs.utxo.cz",twitter:"https://twitter.com/utxoprague",telegram:"https://t.me/utxoprague",discord:"https://discord.gg/5k9dEtVhnv",fbevent:"https://www.facebook.com/events/276727151106692",substack:"https://utxoprague.substack.com/",instagram:"https://www.instagram.com/utxoprague/"},Oa={speakers:[{id:"adam-kracik",name:"Adam Krac\xEDk",tracks:["zaklady","btc","eth","defi","alty"],photos:["web:jpg"]},{id:"adam-lokaj",name:"Adam Lokaj",bio:"Autor knihy [Adopce Bitcoinu pro obchodn\xED korporace](https://www.adopcebtc.cz/)",orgs:`[adopcebtc.cz](https://www.adopcebtc.cz/) ([Instagram](https://www.instagram.com/adopcebitcoinu/))
`,web:{name:"adopcebtc.cz",url:"https://adopcebtc.cz/"},tracks:["btc","regulace"],photos:["web:jpg"]},{id:"adam-studenik",name:"Adam Studen\xEDk",twitter:"adamstudenik",tracks:["eth","defi"],photos:["twitter:jpg"]},{id:"anett-rohlikova",name:"Anett Rolikova",twitter:"anettrolikova",orgs:`[Ethereum Magicians](https://ethereum-magicians.org/)
`,tracks:["eth","nft"],photos:["twitter:jpg"]},{id:"damsky",name:"damsky",twitter:"CryptoDamSky",tracks:["zaklady","eth","defi","dao","spolecnost"],photos:["twitter:jpg"]},{id:"david-antos",name:"David Anto\u0161",nickname:"jilm",twitter:"jilm",bio:"Eurofederalista, neoliber\xE1l, globalista",orgs:`Spoluzakladatel spolku [Pro euro](https://proeuro.cz)
`,tracks:["eth","btc","defi","spolecnost"],photos:["twitter:jpg"]},{id:"david-stancel",name:"David Stancel",nickname:"Ape Dogen",twitter:"dave_stancel",orgs:`Autor [Coin Story](https://coinstory.tech/)
`,tracks:["defi","alty","spolecnost"],web:{name:"stanceldavid.sk",url:"https://stanceldavid.sk/"},photos:["twitter:jpg"]},{id:"david-bankless",name:"DavidBankless",twitter:"davidbankless",orgs:`[Flipper.Zone](https://twitter.com/flipperzonenft), [BanklessDAO](https://www.bankless.community)
`,tracks:["zaklady","dao","nft"],photos:["twitter:jpg"]},{id:"dominik-stroukal",name:"Dominik Stroukal",twitter:"stroukal",bio:"Ekonom, libertari\xE1n, autor prvn\xED \u010Desk\xE9 knihy o kryptom\u011Bn\xE1ch",orgs:`Hlavn\xED ekonom [Roger](https://www.roger.cz/), b\xFDval\xFD \u0159editel [Liber\xE1ln\xEDho institutu](https://libinst.cz/) a [Ludwig von Mises institutu](https://www.mises.cz/)
`,lead:!0,tracks:["zaklady","btc","spolecnost","regulace"],photos:["web:png","sm:png","twitter:jpg"]},{id:"honza-dvorak",name:"Honza Dvo\u0159\xE1k",nickname:"Gorrdy",twitter:"_Honza_Dvorak",orgs:`[btcplatby.cz](https://btcplatby.cz)
`,tracks:["zaklady","btc"],photos:["twitter:jpg"]},{id:"hynek-jina",name:"Hynek J\xEDna",twitter:"HynekJina",orgs:`[SatoshiLabs](https://satoshilabs.com/)
`,tracks:["btc","zaklady","spolecnost"],photos:["twitter:jpg"]},{id:"jan-cerny",name:"Jan \u010Cern\xFD",nickname:"-HoNY-",orgs:`\u010Clen [Bitcoinovej kan\xE1l](https://bitcoinovejkanal.cz/) komunity
`,tracks:["zaklady","btc"],photos:["web:webp"]},{id:"jaromir-tesar",name:"Jarom\xEDr Tesa\u0159",twitter:"JaromirTesar",bio:"Blockchain expert, Cardano Ambassador",orgs:`[Cardanians](https://cardanians.io/cs)
`,tracks:["zaklady","defi","alty"],photos:["twitter:jpg"]},{id:"jiri-cepelka",name:"Ji\u0159\xED \u010Cepelka",twitter:"JiriCepelka",tracks:["zaklady","eth","defi"],photos:["twitter:jpg"]},{id:"juraj-bednar",name:"Juraj Bedn\xE1r",twitter:"jurbed",bio:"Podnikatel, hacker a milovn\xEDk svobody",orgs:`Spoluzakladatel [Hacktrophy](https://hacktrophy.com/sk/), \u010Dlen [Paraleln\xE9 Polis](https://paralelnapolis.sk)
`,web:{url:"https://juraj.bednar.io"},lead:!0,tracks:["zaklady","btc","dao","spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"m0xt",name:"m0xt",twitter:"m0xt_",tracks:["eth","defi","dao"],photos:["twitter:jpg"]},{id:"mario-havel",name:"Mario Havel",twitter:"TMIYChao",bio:"Kryptoanarchista, libertari\xE1n a hacker",orgs:`Zakladatel [Bordel Hackerspace](https://bordel.paralelnipolis.cz/#/), \u010Dlen [Paraleln\xED Polis](https://www.paralelnipolis.cz/)
`,lead:!0,tracks:["zaklady","btc","eth","defi"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"martin-gregor",name:"Martin Gregor",nickname:"ZaujaloMa",twitter:"ZaujaloMa",orgs:`YT kan\xE1l [Zaujalo ma Krypto & FinTech](https://www.youtube.com/channel/UCOn72OUpmWhnNuHl04qmRzg)
`,tracks:["btc","spolecnost","alty"],photos:["twitter:jpg"]},{id:"michal-repetny",name:"Michael Repetn\xFD",twitter:"repetny",orgs:`[Marinade.finance](https://marinade.finance/)
`,tracks:["zaklady","eth","defi","alty"],photos:["twitter:jpg"]},{id:"michaela-malatin",name:"Michaela Malatin",twitter:"malatinmichaela",bio:"Crypto NFT Enthusiast",orgs:`Spoluzakladatelka [Holky v kryptu](https://holkyvkryptu.cz/)
`,tracks:["nft"],photos:["twitter:jpg"]},{id:"mirek-h",name:"Mirek H",orgs:`\u010Clen [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win) komunity
`,tracks:["btc","defi","alty"],photos:["web:webp"]},{id:"pavel-precechtel",name:"Pavel P\u0159ececht\u011Bl",nickname:"Hom\u039Er Shillson",twitter:"homershillson",orgs:`[VR Education](https://vreducation.cz)
`,tracks:["eth","defi","dao","alty","nft"],photos:["twitter:jpg"]},{id:"petr-klein",name:"Petr Klein",twitter:"kleinptr",tracks:["zaklady","eth","defi","dao","alty"],photos:["twitter:jpg"]},{id:"petr-mara",name:"Petr M\xE1ra",twitter:"petrmara",bio:"Technologick\xFD optimista, sb\u011Bratel NFT",web:{url:"https://www.petrmara.com"},lead:!0,tracks:["defi","nft","spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"petr-mensik",name:"Petr Men\u0161\xEDk",twitter:"petr_mensik",orgs:`[Polkadotters](https://twitter.com/polkadotterss)
`,tracks:["alty","defi"],photos:["twitter:jpg"]},{id:"robert-chovanculiak",name:"R\xF3bert Chovanculiak",twitter:"RChovanculiak",bio:"Autor knihy [Pokrok bez povolenia](https://libinst.cz/produkt/pokrok-bez-povolenia/)",orgs:`Analytik v [INESS](https://www.iness.sk), pedagog na [CEVRO Institutu](https://www.cevroinstitut.cz/cs/pedagog/ing-robert-chovanculiak-ph-d/)
`,web:{name:"Pokrok bez povolenia (newsletter)",url:"https://robertchovanculiak.substack.com"},lead:!0,tracks:["spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"tomas-kryptovlada",name:"Tom\xE1\u0161",orgs:`\u010Clen [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win) komunity
`,tracks:["zaklady","defi"],photos:["web:webp"]},{id:"fetyas",name:"Tom\xE1\u0161 Kalabis",nickname:"Fetyas",twitter:"hernakrypto",orgs:`YT kan\xE1l [KryptoHerna](https://www.youtube.com/channel/UCOgYjFqYfUnXo5DK9HceAMw)
`,tracks:["nft"],photos:["web:jpg","twitter:jpg"]},{id:"tomas-zdrazil",name:"Tom\xE1\u0161 Zdra\u017Eil",twitter:"investree_cz",orgs:`[Investree](https://investree.cz)
`,tracks:["eth","defi","spolecnost"],photos:["twitter:jpg"]},{id:"urza",name:"Urza",twitter:"urzanarchy",bio:"Anarchokapitalista, autor knihy [Anarchokapitalismus](https://kniha.urza.cz/)",orgs:`Zakladatel [Svobodn\xE9ho p\u0159\xEDstavu](https://pristav.urza.cz/), vedouc\xED [CZ/SK Mises Institutu](https://www.mises.cz/), \u010Dlen projektu [Svoboda u\u010Den\xED](https://www.svobodauceni.cz/)
`,web:{name:"Urza.cz",url:"https://urza.cz"},lead:!0,tracks:["spolecnost","regulace","btc"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"vladimir-pinker",name:"Vladim\xEDr Pinker",nickname:"KryptoVl\xE1\u010Fa",twitter:"KryptoVlada",orgs:`YT kan\xE1l [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win)
`,tracks:["zaklady","defi","nft","alty","spolecnost"],photos:["twitter:jpg"]},{id:"vojtch",name:"Vojt\u011Bch Studen\xFD",nickname:"vojtch",twitter:"StudenyVojta",orgs:`[Bankless.cz](https://bankless.cz/)
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
`},{id:"nft",name:"NFTs a Metaverse",shortname:"NFTs/Metaverse",examples:`* NFT um\u011Bn\xED
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
`},{question:"Pro koho je konference ur\u010Dena?",answer:`Pro v\u0161echny kryptom\u011Bnov\xE9 nad\u0161ence. Konference vznikla tak\xE9 jako neutr\xE1ln\xED m\xEDsto pro dialog v r\xE1mci cel\xE9 lok\xE1ln\xED krypto-komunity. Ka\u017Ed\xFD n\u011B\u010Demu fand\xEDme, ale poj\u010Fme se od toho alespo\u0148 chv\xEDli odprostit a poslechnout si i my\u0161lenky protistrany, nebo diskutovat.
`},{question:"Budou dostupn\xE9 z\xE1znamy p\u0159edn\xE1\u0161ek?",answer:`Ano, v\u0161echny p\u0159edn\xE1\u0161ky budou po konferenci dostupn\xE9 zdarma na UTXO.TV nebo na\u0161em YouTube kan\xE1lu.
`}],partners:[{id:"gweicz",name:"Gwei.cz",type:"community",twitter:"gweicz",photos:["twitter:jpg"]},{id:"holky-v-kryptu",name:"Holky v kryptu",type:"community",twitter:"holkyvkryptu",photos:["twitter:jpg"]},{id:"bankless-cz",name:"Bankless Czech",type:"community",twitter:"banklesscz",photos:["twitter:jpg"]},{id:"btcknl",name:"Bitcoinovej Kan\xE1l komunita (BTCKNL)",type:"community",web:{url:"https://discord.gg/HWG9Erm"},photos:["web:jpg"]},{id:"czsk-nft-community",name:"CZ/SK NFT Community",type:"community",web:{url:"https://discord.gg/X4MV9Pn5P8"},photos:["web:webp"]},{id:"kryptovlada-komunita",name:"KryptoVl\xE1\u010Fa komunita",type:"community",web:{url:"https://discord.gg/RHmhNGN"},photos:["web:webp"]},{id:"polkadotters-czsk",name:"Polkadotters",type:"community",twitter:"PolkadottersS",photos:["twitter:jpg"]},{id:"cardanians",name:"Cardanians",type:"community",twitter:"Cardanians_io",photos:["twitter:jpg"]},{id:"kryptoherna",name:"KryptoHerna",type:"community",twitter:"hernakrypto",photos:["twitter:jpg"]},{id:"mitonc",name:"MitonC",type:"sponsor",twitter:"mitoncfund",photos:["twitter:jpg"]},{id:"kryptoinsider-podcast",name:"Podcast Krypto Insider (Hospod\xE1\u0159sk\xE9 noviny)",type:"medium",web:{url:"https://podcasty.hn.cz/krypto-insider/"},photos:["web:jpg"]},{id:"kryptonovinky-sk",name:"Kryptonovinky.sk (.cz)",type:"medium",web:{url:"https://www.kryptonovinky.sk/"},photos:["web:jpg"]},{id:"kryptodoupe",name:"KryptoDoup\u011B.cz",type:"medium",web:{url:"https://www.kryptodoupe.cz/"},photos:["web:png"]},{id:"investree",name:"Investree",type:"medium",web:{url:"https://investree.cz/"},photos:["web:jpg"]},{id:"kryptoplatby",name:"KryptoPlatby CZ/SK",type:"medium",web:{url:"https://linktr.ee/kryptoplatby"},photos:["twitter:jpg"]},{id:"svet-androida",name:"Sv\u011Bt Androida",type:"medium",web:{url:"https://www.svetandroida.cz/"},photos:["web:jpg"]}]},qa={tracks:9,speakers:32,events:0,faqs:6};var Xe={id:Sa,name:Ka,shortname:Ma,description:Ca,dates:Pa,place:Na,country:Ha,links:Ba,spec:Oa,stats:qa};function Zt(t,e,n){const l=t.slice();return l[18]=e[n],l}function Xt(t,e,n){const l=t.slice();return l[21]=e[n],l}function Gt(t,e,n){const l=t.slice();return l[21]=e[n],l}function Yt(t,e,n){const l=t.slice();return l[26]=e[n],l}function Wt(t,e,n){const l=t.slice();return l[29]=e[n],l}function Qt(t,e,n){const l=t.slice();return l[29]=e[n],l}function La(t){let e,n,l,a,s,c,_=t[0].place+"",r,u,f,z=t[0].description+"",k,d,g,A,E,U,he,D,Ge,Ye,le,We,me,Ee,Qe,xe,fe,$e,et,ke,ne,tt,se,at,oe,lt,De,nt,ve,re,st,B,J,Ie,ot,He,rt,Z,Ve,it,Be,ct,X,Te,ut,Oe,pt,G,Ae,dt,qe,ht,Y,Se,mt,Le,ft,W,Ke,kt,Fe,vt,Q,Me,gt,Re,Ue,F,ie=t[0].spec.speakers,S=[];for(let i=0;i<ie.length;i+=1)S[i]=$t(Qt(t,ie,i));const oa=i=>T(S[i],1,1,()=>{S[i]=null});let ce=t[0].spec.speakers,K=[];for(let i=0;i<ce.length;i+=1)K[i]=ta(Wt(t,ce,i));const ra=i=>T(K[i],1,1,()=>{K[i]=null});let ge=t[0].spec.tracks,L=[];for(let i=0;i<ge.length;i+=1)L[i]=aa(Yt(t,ge,i));let ue=t[0].spec.faqs,M=[];for(let i=0;i<ue.length;i+=1)M[i]=la(Gt(t,ue,i));const ia=i=>T(M[i],1,1,()=>{M[i]=null});let pe=t[1],C=[];for(let i=0;i<pe.length;i+=1)C[i]=sa(Zt(t,pe,i));const ca=i=>T(C[i],1,1,()=>{C[i]=null});return re=new Aa({}),{c(){e=b("div"),n=b("h1"),l=P(t[5]),a=I(),s=b("div"),c=P("4.-5. \u010Derven 2022 @ "),r=P(_),u=I(),f=b("div"),k=P(z),d=I(),g=b("div"),A=b("div");for(let i=0;i<S.length;i+=1)S[i].c();E=I(),U=b("div");for(let i=0;i<K.length;i+=1)K[i].c();he=I(),D=b("div"),Ge=P(".. a dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED p\u0159ipravujeme!"),Ye=I(),le=b("div");for(let i=0;i<L.length;i+=1)L[i].c();We=I(),me=b("div"),Ee=b("div"),Qe=P("2 dny, 50+ p\u0159edn\xE1\u0161ej\xEDch, 100h+ obsahu, 1000+ n\xE1v\u0161t\u011Bvn\xEDk\u016F"),xe=I(),fe=b("h2"),$e=P("\u010Casto kladen\xE9 dotazy (FAQ)"),et=I(),ke=b("div"),ne=b("div");for(let i=0;i<M.length;i+=1)M[i].c();tt=I(),se=b("div");for(let i=0;i<C.length;i+=1)C[i].c();at=I(),oe=b("div"),lt=P("We Are All Satoshi "),De=b("i"),nt=I(),ve=b("div"),_e(re.$$.fragment),st=I(),B=b("div"),J=b("a"),Ie=b("i"),ot=P(" Dokumentace"),rt=I(),Z=b("a"),Ve=b("i"),it=P(" Newsletter"),ct=I(),X=b("a"),Te=b("i"),ut=P(" Discord"),pt=I(),G=b("a"),Ae=b("i"),dt=P(" Telegram"),ht=I(),Y=b("a"),Se=b("i"),mt=P(" Twitter"),ft=I(),W=b("a"),Ke=b("i"),kt=P(" Instagram"),vt=I(),Q=b("a"),Me=b("i"),gt=P(" Facebook"),this.h()},l(i){e=w(i,"DIV",{class:!0});var m=y(e);n=w(m,"H1",{class:!0});var o=y(n);l=N(o,t[5]),o.forEach(v),a=V(m),s=w(m,"DIV",{class:!0});var O=y(s);c=N(O,"4.-5. \u010Derven 2022 @ "),r=N(O,_),O.forEach(v),u=V(m),f=w(m,"DIV",{class:!0});var Kt=y(f);k=N(Kt,z),Kt.forEach(v),d=V(m),g=w(m,"DIV",{class:!0});var te=y(g);A=w(te,"DIV",{class:!0});var Mt=y(A);for(let H=0;H<S.length;H+=1)S[H].l(Mt);Mt.forEach(v),E=V(te),U=w(te,"DIV",{class:!0});var Ct=y(U);for(let H=0;H<K.length;H+=1)K[H].l(Ct);Ct.forEach(v),he=V(te),D=w(te,"DIV",{class:!0});var Pt=y(D);Ge=N(Pt,".. a dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED p\u0159ipravujeme!"),Pt.forEach(v),Ye=V(te),le=w(te,"DIV",{class:!0});var Nt=y(le);for(let H=0;H<L.length;H+=1)L[H].l(Nt);Nt.forEach(v),te.forEach(v),We=V(m),me=w(m,"DIV",{class:!0});var Ht=y(me);Ee=w(Ht,"DIV",{});var Bt=y(Ee);Qe=N(Bt,"2 dny, 50+ p\u0159edn\xE1\u0161ej\xEDch, 100h+ obsahu, 1000+ n\xE1v\u0161t\u011Bvn\xEDk\u016F"),Bt.forEach(v),Ht.forEach(v),xe=V(m),fe=w(m,"H2",{class:!0});var Ot=y(fe);$e=N(Ot,"\u010Casto kladen\xE9 dotazy (FAQ)"),Ot.forEach(v),et=V(m),ke=w(m,"DIV",{class:!0});var qt=y(ke);ne=w(qt,"DIV",{class:!0});var Lt=y(ne);for(let H=0;H<M.length;H+=1)M[H].l(Lt);Lt.forEach(v),qt.forEach(v),tt=V(m),se=w(m,"DIV",{class:!0});var Ft=y(se);for(let H=0;H<C.length;H+=1)C[H].l(Ft);Ft.forEach(v),at=V(m),oe=w(m,"DIV",{class:!0});var _t=y(oe);lt=N(_t,"We Are All Satoshi "),De=w(_t,"I",{class:!0}),y(De).forEach(v),_t.forEach(v),nt=V(m),ve=w(m,"DIV",{class:!0});var Rt=y(ve);be(re.$$.fragment,Rt),Rt.forEach(v),st=V(m),B=w(m,"DIV",{class:!0});var R=y(B);J=w(R,"A",{href:!0,target:!0,class:!0});var bt=y(J);Ie=w(bt,"I",{class:!0}),y(Ie).forEach(v),ot=N(bt," Dokumentace"),bt.forEach(v),rt=V(R),Z=w(R,"A",{href:!0,target:!0,class:!0});var wt=y(Z);Ve=w(wt,"I",{class:!0}),y(Ve).forEach(v),it=N(wt," Newsletter"),wt.forEach(v),ct=V(R),X=w(R,"A",{href:!0,target:!0,class:!0});var yt=y(X);Te=w(yt,"I",{class:!0}),y(Te).forEach(v),ut=N(yt," Discord"),yt.forEach(v),pt=V(R),G=w(R,"A",{href:!0,target:!0,class:!0});var zt=y(G);Ae=w(zt,"I",{class:!0}),y(Ae).forEach(v),dt=N(zt," Telegram"),zt.forEach(v),ht=V(R),Y=w(R,"A",{href:!0,target:!0,class:!0});var jt=y(Y);Se=w(jt,"I",{class:!0}),y(Se).forEach(v),mt=N(jt," Twitter"),jt.forEach(v),ft=V(R),W=w(R,"A",{href:!0,target:!0,class:!0});var Et=y(W);Ke=w(Et,"I",{class:!0}),y(Ke).forEach(v),kt=N(Et," Instagram"),Et.forEach(v),vt=V(R),Q=w(R,"A",{href:!0,target:!0,class:!0});var Dt=y(Q);Me=w(Dt,"I",{class:!0}),y(Me).forEach(v),gt=N(Dt," Facebook"),Dt.forEach(v),R.forEach(v),m.forEach(v),this.h()},h(){h(n,"class","text-5xl md:text-6xl lg:text-7xl svelte-5alcep"),h(s,"class","subline-shadow text-lg md:text-xl lg:text-2xl svelte-5alcep"),h(f,"class","subline text-sm md:text-md lg:text-lg text-gray-800 svelte-5alcep"),h(A,"class","mt-3 mb-6 flex flex-wrap justify-center relative"),h(U,"class","flex flex-wrap justify-center relative"),h(D,"class","pixelfont text-sm mt-5 mb-10 svelte-5alcep"),h(le,"class","mt-12 mb-6 flex flex-wrap justify-center relative gap-4 text-sm"),h(g,"class","mt-10"),h(me,"class","subline-shadow2 text-lg md:text-xl lg:text-2xl mt-14 svelte-5alcep"),h(fe,"class","pixelfont mt-10 text-gray-800"),h(ne,"class","columns-1 xl:columns-2 mt-5 h-auto text-gray-800"),h(ke,"class","container w-full mx-auto"),h(se,"class","columns-1 xl:columns-3 xl:mt-5"),h(De,"class","fas fa-heart text-red-500"),h(oe,"class","mt-3 subline-shadow2 svelte-5alcep"),h(ve,"class","mt-10 pixelfont text-gray-800"),h(Ie,"class","fas fa-book svelte-5alcep"),h(J,"href",He=t[0].links.docs),h(J,"target","_blank"),h(J,"class","svelte-5alcep"),h(Ve,"class","fas fa-newspaper svelte-5alcep"),h(Z,"href",Be=t[0].links.substack),h(Z,"target","_blank"),h(Z,"class","svelte-5alcep"),h(Te,"class","fab fa-discord svelte-5alcep"),h(X,"href",Oe=t[0].links.discord),h(X,"target","_blank"),h(X,"class","svelte-5alcep"),h(Ae,"class","fab fa-telegram-plane svelte-5alcep"),h(G,"href",qe=t[0].links.telegram),h(G,"target","_blank"),h(G,"class","svelte-5alcep"),h(Se,"class","fab fa-twitter svelte-5alcep"),h(Y,"href",Le=t[0].links.twitter),h(Y,"target","_blank"),h(Y,"class","svelte-5alcep"),h(Ke,"class","fab fa-instagram svelte-5alcep"),h(W,"href",Fe=t[0].links.instagram),h(W,"target","_blank"),h(W,"class","svelte-5alcep"),h(Me,"class","fab fa-facebook svelte-5alcep"),h(Q,"href",Re=t[0].links.fbevent),h(Q,"target","_blank"),h(Q,"class","svelte-5alcep"),h(B,"class","footer-link flex flex-wrap justify-center relative mt-10 mb-5 pixelfont-micro gap-6 mx-auto w-8/12 svelte-5alcep"),h(e,"class",Ue=""+((t[2]?"opacity-100":"opacity-0")+" relative px-6 pt-10 pb-8 sm:max-w-6xl sm:mx-auto sm:rounded-lg sm:px-5 text-center transition-all duration-500"))},m(i,m){q(i,e,m),p(e,n),p(n,l),p(e,a),p(e,s),p(s,c),p(s,r),p(e,u),p(e,f),p(f,k),p(e,d),p(e,g),p(g,A);for(let o=0;o<S.length;o+=1)S[o].m(A,null);p(g,E),p(g,U);for(let o=0;o<K.length;o+=1)K[o].m(U,null);p(g,he),p(g,D),p(D,Ge),p(g,Ye),p(g,le);for(let o=0;o<L.length;o+=1)L[o].m(le,null);p(e,We),p(e,me),p(me,Ee),p(Ee,Qe),p(e,xe),p(e,fe),p(fe,$e),p(e,et),p(e,ke),p(ke,ne);for(let o=0;o<M.length;o+=1)M[o].m(ne,null);p(e,tt),p(e,se);for(let o=0;o<C.length;o+=1)C[o].m(se,null);p(e,at),p(e,oe),p(oe,lt),p(oe,De),p(e,nt),p(e,ve),we(re,ve,null),p(e,st),p(e,B),p(B,J),p(J,Ie),p(J,ot),p(B,rt),p(B,Z),p(Z,Ve),p(Z,it),p(B,ct),p(B,X),p(X,Te),p(X,ut),p(B,pt),p(B,G),p(G,Ae),p(G,dt),p(B,ht),p(B,Y),p(Y,Se),p(Y,mt),p(B,ft),p(B,W),p(W,Ke),p(W,kt),p(B,vt),p(B,Q),p(Q,Me),p(Q,gt),F=!0},p(i,m){if((!F||m[0]&1)&&_!==(_=i[0].place+"")&&ze(r,_),(!F||m[0]&1)&&z!==(z=i[0].description+"")&&ze(k,z),m[0]&793){ie=i[0].spec.speakers;let o;for(o=0;o<ie.length;o+=1){const O=Qt(i,ie,o);S[o]?(S[o].p(O,m),j(S[o],1)):(S[o]=$t(O),S[o].c(),j(S[o],1),S[o].m(A,null))}for($(),o=ie.length;o<S.length;o+=1)oa(o);ee()}if(m[0]&793){ce=i[0].spec.speakers;let o;for(o=0;o<ce.length;o+=1){const O=Wt(i,ce,o);K[o]?(K[o].p(O,m),j(K[o],1)):(K[o]=ta(O),K[o].c(),j(K[o],1),K[o].m(U,null))}for($(),o=ce.length;o<K.length;o+=1)ra(o);ee()}if(m[0]&209){ge=i[0].spec.tracks;let o;for(o=0;o<ge.length;o+=1){const O=Yt(i,ge,o);L[o]?L[o].p(O,m):(L[o]=aa(O),L[o].c(),L[o].m(le,null))}for(;o<L.length;o+=1)L[o].d(1);L.length=ge.length}if(m[0]&1025){ue=i[0].spec.faqs;let o;for(o=0;o<ue.length;o+=1){const O=Gt(i,ue,o);M[o]?(M[o].p(O,m),j(M[o],1)):(M[o]=la(O),M[o].c(),j(M[o],1),M[o].m(ne,null))}for($(),o=ue.length;o<M.length;o+=1)ia(o);ee()}if(m[0]&2){pe=i[1];let o;for(o=0;o<pe.length;o+=1){const O=Zt(i,pe,o);C[o]?(C[o].p(O,m),j(C[o],1)):(C[o]=sa(O),C[o].c(),j(C[o],1),C[o].m(se,null))}for($(),o=pe.length;o<C.length;o+=1)ca(o);ee()}(!F||m[0]&1&&He!==(He=i[0].links.docs))&&h(J,"href",He),(!F||m[0]&1&&Be!==(Be=i[0].links.substack))&&h(Z,"href",Be),(!F||m[0]&1&&Oe!==(Oe=i[0].links.discord))&&h(X,"href",Oe),(!F||m[0]&1&&qe!==(qe=i[0].links.telegram))&&h(G,"href",qe),(!F||m[0]&1&&Le!==(Le=i[0].links.twitter))&&h(Y,"href",Le),(!F||m[0]&1&&Fe!==(Fe=i[0].links.instagram))&&h(W,"href",Fe),(!F||m[0]&1&&Re!==(Re=i[0].links.fbevent))&&h(Q,"href",Re),(!F||m[0]&4&&Ue!==(Ue=""+((i[2]?"opacity-100":"opacity-0")+" relative px-6 pt-10 pb-8 sm:max-w-6xl sm:mx-auto sm:rounded-lg sm:px-5 text-center transition-all duration-500")))&&h(e,"class",Ue)},i(i){if(!F){for(let m=0;m<ie.length;m+=1)j(S[m]);for(let m=0;m<ce.length;m+=1)j(K[m]);for(let m=0;m<ue.length;m+=1)j(M[m]);for(let m=0;m<pe.length;m+=1)j(C[m]);j(re.$$.fragment,i),F=!0}},o(i){S=S.filter(Boolean);for(let m=0;m<S.length;m+=1)T(S[m]);K=K.filter(Boolean);for(let m=0;m<K.length;m+=1)T(K[m]);M=M.filter(Boolean);for(let m=0;m<M.length;m+=1)T(M[m]);C=C.filter(Boolean);for(let m=0;m<C.length;m+=1)T(C[m]);T(re.$$.fragment,i),F=!1},d(i){i&&v(e),je(S,i),je(K,i),je(L,i),je(M,i),je(C,i),ye(re)}}}function Fa(t){let e,n;return{c(){e=b("div"),n=P("Na\u010D\xEDt\xE1m .."),this.h()},l(l){e=w(l,"DIV",{class:!0});var a=y(e);n=N(a,"Na\u010D\xEDt\xE1m .."),a.forEach(v),this.h()},h(){h(e,"class","pixelfont max-w-xl mx-auto text-center text-3xl animate-ping text-gray-800")},m(l,a){q(l,e,a),p(e,n)},p:de,i:de,o:de,d(l){l&&v(e)}}}function xt(t){let e,n,l,a,s,c;n=new St({props:{speaker:t[29],lead:!0,category:t[3],visible:!t[4]||t[4]&&t[4].id===t[29].id}});function _(){return t[11](t[29])}return{c(){e=b("div"),_e(n.$$.fragment),l=I(),this.h()},l(r){e=w(r,"DIV",{class:!0});var u=y(e);be(n.$$.fragment,u),l=V(u),u.forEach(v),this.h()},h(){h(e,"class","rounded-full")},m(r,u){q(r,e,u),we(n,e,null),p(e,l),a=!0,s||(c=[ae(e,"mouseover",_),ae(e,"mouseleave",t[9])],s=!0)},p(r,u){t=r;const f={};u[0]&1&&(f.speaker=t[29]),u[0]&8&&(f.category=t[3]),u[0]&17&&(f.visible=!t[4]||t[4]&&t[4].id===t[29].id),n.$set(f)},i(r){a||(j(n.$$.fragment,r),a=!0)},o(r){T(n.$$.fragment,r),a=!1},d(r){r&&v(e),ye(n),s=!1,Je(c)}}}function $t(t){let e,n,l=t[29].lead&&xt(t);return{c(){l&&l.c(),e=Ze()},l(a){l&&l.l(a),e=Ze()},m(a,s){l&&l.m(a,s),q(a,e,s),n=!0},p(a,s){a[29].lead?l?(l.p(a,s),s[0]&1&&j(l,1)):(l=xt(a),l.c(),j(l,1),l.m(e.parentNode,e)):l&&($(),T(l,1,1,()=>{l=null}),ee())},i(a){n||(j(l),n=!0)},o(a){T(l),n=!1},d(a){l&&l.d(a),a&&v(e)}}}function ea(t){let e,n,l,a,s,c;n=new St({props:{speaker:t[29],category:t[3],visible:!t[4]||t[4]&&t[4].id===t[29].id}});function _(){return t[12](t[29])}return{c(){e=b("div"),_e(n.$$.fragment),l=I()},l(r){e=w(r,"DIV",{});var u=y(e);be(n.$$.fragment,u),l=V(u),u.forEach(v)},m(r,u){q(r,e,u),we(n,e,null),p(e,l),a=!0,s||(c=[ae(e,"mouseover",_),ae(e,"mouseleave",t[9])],s=!0)},p(r,u){t=r;const f={};u[0]&1&&(f.speaker=t[29]),u[0]&8&&(f.category=t[3]),u[0]&17&&(f.visible=!t[4]||t[4]&&t[4].id===t[29].id),n.$set(f)},i(r){a||(j(n.$$.fragment,r),a=!0)},o(r){T(n.$$.fragment,r),a=!1},d(r){r&&v(e),ye(n),s=!1,Je(c)}}}function ta(t){let e,n,l=!t[29].lead&&ea(t);return{c(){l&&l.c(),e=Ze()},l(a){l&&l.l(a),e=Ze()},m(a,s){l&&l.m(a,s),q(a,e,s),n=!0},p(a,s){a[29].lead?l&&($(),T(l,1,1,()=>{l=null}),ee()):l?(l.p(a,s),s[0]&1&&j(l,1)):(l=ea(a),l.c(),j(l,1),l.m(e.parentNode,e))},i(a){n||(j(l),n=!0)},o(a){T(l),n=!1},d(a){l&&l.d(a),a&&v(e)}}}function aa(t){let e,n=(t[26].shortname||t[26].name)+"",l,a,s,c;function _(){return t[13](t[26])}return{c(){e=b("div"),l=P(n),this.h()},l(r){e=w(r,"DIV",{class:!0});var u=y(e);l=N(u,n),u.forEach(v),this.h()},h(){var r;h(e,"class",a="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer "+(t[4]&&!((r=t[4].tracks)==null?void 0:r.includes(t[26].id))?"opacity-20":"")+" svelte-5alcep")},m(r,u){q(r,e,u),p(e,l),s||(c=[ae(e,"mouseover",_),ae(e,"mouseleave",t[7])],s=!0)},p(r,u){var f;t=r,u[0]&1&&n!==(n=(t[26].shortname||t[26].name)+"")&&ze(l,n),u[0]&17&&a!==(a="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer "+(t[4]&&!((f=t[4].tracks)==null?void 0:f.includes(t[26].id))?"opacity-20":"")+" svelte-5alcep")&&h(e,"class",a)},d(r){r&&v(e),s=!1,Je(c)}}}function la(t){let e,n,l=t[21].question+"",a,s,c,_,r,u;return _=new ha({props:{source:t[21].answer,renderers:t[10]}}),{c(){e=b("div"),n=b("h3"),a=P(l),s=I(),c=b("p"),_e(_.$$.fragment),r=I(),this.h()},l(f){e=w(f,"DIV",{class:!0});var z=y(e);n=w(z,"H3",{class:!0});var k=y(n);a=N(k,l),k.forEach(v),s=V(z),c=w(z,"P",{class:!0});var d=y(c);be(_.$$.fragment,d),d.forEach(v),r=V(z),z.forEach(v),this.h()},h(){h(n,"class","pixelfont text-sm mb-3 svelte-5alcep"),h(c,"class","md"),h(e,"class","mb-5 break-inside-avoid-column bg-white/30 rounded-3xl px-6 py-4 text-left transition-all box-shadow-light overflow-visible svelte-5alcep")},m(f,z){q(f,e,z),p(e,n),p(n,a),p(e,s),p(e,c),we(_,c,null),p(e,r),u=!0},p(f,z){(!u||z[0]&1)&&l!==(l=f[21].question+"")&&ze(a,l);const k={};z[0]&1&&(k.source=f[21].answer),_.$set(k)},i(f){u||(j(_.$$.fragment,f),u=!0)},o(f){T(_.$$.fragment,f),u=!1},d(f){f&&v(e),ye(_)}}}function na(t){let e,n;return e=new St({props:{speaker:t[21],col:"partners"}}),{c(){_e(e.$$.fragment)},l(l){be(e.$$.fragment,l)},m(l,a){we(e,l,a),n=!0},p(l,a){const s={};a[0]&2&&(s.speaker=l[21]),e.$set(s)},i(l){n||(j(e.$$.fragment,l),n=!0)},o(l){T(e.$$.fragment,l),n=!1},d(l){ye(e,l)}}}function sa(t){let e,n,l=t[18].title+"",a,s,c,_,r,u=t[18].arr,f=[];for(let k=0;k<u.length;k+=1)f[k]=na(Xt(t,u,k));const z=k=>T(f[k],1,1,()=>{f[k]=null});return{c(){e=b("div"),n=b("h2"),a=P(l),s=I(),c=b("div");for(let k=0;k<f.length;k+=1)f[k].c();_=I(),this.h()},l(k){e=w(k,"DIV",{class:!0});var d=y(e);n=w(d,"H2",{class:!0});var g=y(n);a=N(g,l),g.forEach(v),s=V(d),c=w(d,"DIV",{class:!0});var A=y(c);for(let E=0;E<f.length;E+=1)f[E].l(A);A.forEach(v),_=V(d),d.forEach(v),this.h()},h(){h(n,"class","pixelfont text-gray-800 text-sm mb-3 svelte-5alcep"),h(c,"class","flex flex-wrap justify-center"),h(e,"class","break-inside-avoid-column mb-5")},m(k,d){q(k,e,d),p(e,n),p(n,a),p(e,s),p(e,c);for(let g=0;g<f.length;g+=1)f[g].m(c,null);p(e,_),r=!0},p(k,d){if((!r||d[0]&2)&&l!==(l=k[18].title+"")&&ze(a,l),d[0]&2){u=k[18].arr;let g;for(g=0;g<u.length;g+=1){const A=Xt(k,u,g);f[g]?(f[g].p(A,d),j(f[g],1)):(f[g]=na(A),f[g].c(),j(f[g],1),f[g].m(c,null))}for($(),g=u.length;g<f.length;g+=1)z(g);ee()}},i(k){if(!r){for(let d=0;d<u.length;d+=1)j(f[d]);r=!0}},o(k){f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)T(f[d]);r=!1},d(k){k&&v(e),je(f,k)}}}function Ra(t){var f,z;let e,n,l,a,s,c;document.title=e=""+((((f=t[0])==null?void 0:f.name)||Xe.name)+" | "+(((z=t[0])==null?void 0:z.description)||Xe.description));const _=[Fa,La],r=[];function u(k,d){return k[0]?1:0}return a=u(t),s=r[a]=_[a](t),{c(){n=I(),l=b("section"),s.c()},l(k){pa('[data-svelte="svelte-1o9o97b"]',document.head).forEach(v),n=V(k),l=w(k,"SECTION",{});var g=y(l);s.l(g),g.forEach(v)},m(k,d){q(k,n,d),q(k,l,d),r[a].m(l,null),c=!0},p(k,d){var A,E;(!c||d[0]&1)&&e!==(e=""+((((A=k[0])==null?void 0:A.name)||Xe.name)+" | "+(((E=k[0])==null?void 0:E.description)||Xe.description)))&&(document.title=e);let g=a;a=u(k),a===g?r[a].p(k,d):($(),T(r[g],1,1,()=>{r[g]=null}),ee(),s=r[a],s?s.p(k,d):(s=r[a]=_[a](k),s.c()),j(s,1),s.m(l,null))},i(k){c||(j(s),c=!0)},o(k){T(s),c=!1},d(k){k&&v(n),k&&v(l),r[a].d()}}}const Xa=!0,Ua="UTXO.22";function Ja(t,e,n){let l;da(t,fa,D=>n(14,l=D));let a=null,s=g(),c=!1;l.url.hostname,(async()=>{const D=await fetch("https://spec.utxo.cz/22/bundle.json");n(0,a=await D.json()),n(1,s=g()),setTimeout(()=>{n(2,c=!0)},100)})();let _=Ua,r=null,u=null;function f(D){n(3,r=D)}function z(){n(3,r=null)}function k(D){n(4,u=D)}function d(){n(4,u=null)}function g(){return a?[{title:"Komunity",arr:a.spec.partners.filter(D=>D.type==="community")},{title:"Sponzo\u0159i",arr:a.spec.partners.filter(D=>D.type==="sponsor")},{title:"Medi\xE1ln\xED partne\u0159i",arr:a.spec.partners.filter(D=>D.type==="medium")}]:[]}return[a,s,c,r,u,_,f,z,k,d,{link:ja},D=>k(D),D=>k(D),D=>f(D.id)]}class Ga extends Ce{constructor(e){super();Pe(this,e,Ja,Ra,Ne,{},null,[-1,-1])}}export{Ga as default,Xa as prerender};
