import{J as ca,S as qe,i as Le,s as Fe,D as Et,e as _,j as V,c as b,a as w,d as m,l as A,b as u,K as $,f as U,E as c,F as It,G as Dt,H as Vt,m as te,n as T,o as ae,p as E,I as Ft,v as Ve,w as Ae,x as Te,A as Se,L as Rt,M as le,N as Re,k as Ue,t as B,g as O,h as Pe,O as ge,P as ua,Q as pa,R as da}from"../chunks/vendor-5168071f.js";const ha=()=>{const t=ca("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},fa={subscribe(t){return ha().page.subscribe(t)}};const ma=t=>({}),Ut=t=>({});function ka(t){let e;const s=t[9]["custom-tip"],l=Et(s,t,t[8],Ut);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,o){l&&l.m(a,o),e=!0},p(a,o){l&&l.p&&(!e||o&256)&&It(l,s,a,a[8],e?Vt(s,a[8],o,ma):Dt(a[8]),Ut)},i(a){e||(E(l,a),e=!0)},o(a){T(l,a),e=!1},d(a){l&&l.d(a)}}}function va(t){let e;return{c(){e=_("div"),this.h()},l(s){e=b(s,"DIV",{class:!0,style:!0});var l=w(e);l.forEach(m),this.h()},h(){u(e,"class","default-tip svelte-npb0qt"),u(e,"style",t[6])},m(s,l){U(s,e,l),e.innerHTML=t[0]},p(s,l){l&1&&(e.innerHTML=s[0])},i:Ft,o:Ft,d(s){s&&m(e)}}}function ga(t){let e,s,l,a,o,h,y;const i=t[9].default,p=Et(i,t,t[8],null),f=[va,ka],j=[];function v(d,g){return d[0]?0:1}return o=v(t),h=j[o]=f[o](t),{c(){e=_("div"),s=_("span"),p&&p.c(),l=V(),a=_("div"),h.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var g=w(e);s=b(g,"SPAN",{class:!0});var M=w(s);p&&p.l(M),M.forEach(m),l=A(g),a=b(g,"DIV",{class:!0});var I=w(a);h.l(I),I.forEach(m),g.forEach(m),this.h()},h(){u(s,"class","tooltip-slot svelte-npb0qt"),u(a,"class","tooltip svelte-npb0qt"),$(a,"active",t[5]),$(a,"left",t[4]),$(a,"right",t[2]),$(a,"bottom",t[3]),$(a,"top",t[1]),u(e,"class","tooltip-wrapper svelte-npb0qt")},m(d,g){U(d,e,g),c(e,s),p&&p.m(s,null),c(e,l),c(e,a),j[o].m(a,null),y=!0},p(d,[g]){p&&p.p&&(!y||g&256)&&It(p,i,d,d[8],y?Vt(i,d[8],g,null):Dt(d[8]),null);let M=o;o=v(d),o===M?j[o].p(d,g):(te(),T(j[M],1,1,()=>{j[M]=null}),ae(),h=j[o],h?h.p(d,g):(h=j[o]=f[o](d),h.c()),E(h,1),h.m(a,null)),g&32&&$(a,"active",d[5]),g&16&&$(a,"left",d[4]),g&4&&$(a,"right",d[2]),g&8&&$(a,"bottom",d[3]),g&2&&$(a,"top",d[1])},i(d){y||(E(p,d),E(h),y=!0)},o(d){T(p,d),T(h),y=!1},d(d){d&&m(e),p&&p.d(d),j[o].d()}}}function _a(t,e,s){let{$$slots:l={},$$scope:a}=e,{tip:o=""}=e,{top:h=!1}=e,{right:y=!1}=e,{bottom:i=!1}=e,{left:p=!1}=e,{active:f=!1}=e,{color:j="#757575"}=e,v=`background-color: ${j};`;return t.$$set=d=>{"tip"in d&&s(0,o=d.tip),"top"in d&&s(1,h=d.top),"right"in d&&s(2,y=d.right),"bottom"in d&&s(3,i=d.bottom),"left"in d&&s(4,p=d.left),"active"in d&&s(5,f=d.active),"color"in d&&s(7,j=d.color),"$$scope"in d&&s(8,a=d.$$scope)},[o,h,y,i,p,f,v,j,a,l]}class ba extends qe{constructor(e){super();Le(this,e,_a,ga,Fe,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function wa(t){let e,s;const l=t[3].default,a=Et(l,t,t[2],null);return{c(){e=_("a"),a&&a.c(),this.h()},l(o){e=b(o,"A",{href:!0,title:!0,target:!0});var h=w(e);a&&a.l(h),h.forEach(m),this.h()},h(){u(e,"href",t[0]),u(e,"title",t[1]),u(e,"target","_blank")},m(o,h){U(o,e,h),a&&a.m(e,null),s=!0},p(o,[h]){a&&a.p&&(!s||h&4)&&It(a,l,o,o[2],s?Vt(l,o[2],h,null):Dt(o[2]),null),(!s||h&1)&&u(e,"href",o[0]),(!s||h&2)&&u(e,"title",o[1])},i(o){s||(E(a,o),s=!0)},o(o){T(a,o),s=!1},d(o){o&&m(e),a&&a.d(o)}}}function ya(t,e,s){let{$$slots:l={},$$scope:a}=e,{href:o=""}=e,{title:h=void 0}=e;return t.$$set=y=>{"href"in y&&s(0,o=y.href),"title"in y&&s(1,h=y.title),"$$scope"in y&&s(2,a=y.$$scope)},[o,h,a,l]}class za extends qe{constructor(e){super();Le(this,e,ya,wa,Fe,{href:0,title:1})}}function ja(t){let e,s,l,a,o,h,y;return{c(){e=_("a"),s=_("img"),this.h()},l(i){e=b(i,"A",{href:!0,target:!0,class:!0});var p=w(e);s=b(p,"IMG",{class:!0,src:!0,alt:!0}),p.forEach(m),this.h()},h(){u(s,"class",l="avatar transition-all "+(t[3]?"":"opacity-20")+" "+(t[1]?"w-24 md:w-28 m-4":"small w-14 md:w-16 m-4")+" "+(t[2]&&t[0].tracks&&t[0].tracks.includes(t[2])?"":t[2]?"opacity-20":"")+" svelte-1f522co"),Rt(s.src,a=t[4])||u(s,"src",a),u(s,"alt",o=t[0].name),u(e,"href",t[6]),u(e,"target","_blank"),u(e,"class","rounded-full")},m(i,p){U(i,e,p),c(e,s),h||(y=[le(e,"mouseover",t[7]),le(e,"mouseleave",t[8])],h=!0)},p(i,p){p&15&&l!==(l="avatar transition-all "+(i[3]?"":"opacity-20")+" "+(i[1]?"w-24 md:w-28 m-4":"small w-14 md:w-16 m-4")+" "+(i[2]&&i[0].tracks&&i[0].tracks.includes(i[2])?"":i[2]?"opacity-20":"")+" svelte-1f522co")&&u(s,"class",l),p&16&&!Rt(s.src,a=i[4])&&u(s,"src",a),p&1&&o!==(o=i[0].name)&&u(s,"alt",o),p&64&&u(e,"href",i[6])},d(i){i&&m(e),h=!1,Re(y)}}}function Ea(t){let e,s,l;return s=new ba({props:{tip:t[5],$$slots:{default:[ja]},$$scope:{ctx:t}}}),{c(){e=_("div"),Ve(s.$$.fragment)},l(a){e=b(a,"DIV",{});var o=w(e);Ae(s.$$.fragment,o),o.forEach(m)},m(a,o){U(a,e,o),Te(s,e,null),l=!0},p(a,[o]){const h={};o&32&&(h.tip=a[5]),o&8287&&(h.$$scope={dirty:o,ctx:a}),s.$set(h)},i(a){l||(E(s.$$.fragment,a),l=!0)},o(a){T(s.$$.fragment,a),l=!1},d(a){a&&m(e),Se(s)}}}function Ia(t,e,s){let l,a,o,{speaker:h}=e,{lead:y=null}=e,{category:i=null}=e,{visible:p=!0}=e,{col:f="speakers"}=e;const j=["web:webp","web:png","web:jpg","twitter:jpg"];let v,d;if(h.photos&&h.photos.length>0){for(const I of j)if(h.photos.includes(I)){const[L,J]=I.split(":"),D=`https://spec.utxo.cz/22/photos/${f}/${h.id}-${L}.${J}`;if(v){d=D;break}v=D}}v||(v="/img/twitter-avatar.png");function g(){d&&s(4,o=d)}function M(){s(4,o=v)}return t.$$set=I=>{"speaker"in I&&s(0,h=I.speaker),"lead"in I&&s(1,y=I.lead),"category"in I&&s(2,i=I.category),"visible"in I&&s(3,p=I.visible),"col"in I&&s(9,f=I.col)},t.$$.update=()=>{var I;t.$$.dirty&1&&s(6,l=h.twitter?`https://twitter.com/${h.twitter}`:(I=h.web)==null?void 0:I.url),t.$$.dirty&1&&s(5,a=h.name+(h.nickname?` (${h.nickname})`:"")),t.$$.dirty&1024&&s(4,o=v)},[h,y,i,p,o,a,l,g,M,f,v]}class At extends qe{constructor(e){super();Le(this,e,Ia,Ea,Fe,{speaker:0,lead:1,category:2,visible:3,col:9})}}const Da="utxo22",Va="UTXO.22",Aa="UTXO",Ta="Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference",Sa=["2022-06-04","2022-06-05"],Pa="Gabriel Loci, Praha",Ka="Czech Republic",Ca={web:"https://utxo.cz",docs:"https://docs.utxo.cz",twitter:"https://twitter.com/utxoprague",telegram:"https://t.me/utxoprague",discord:"https://discord.gg/5k9dEtVhnv",fbevent:"https://www.facebook.com/events/276727151106692",substack:"https://utxoprague.substack.com/",instagram:"https://www.instagram.com/utxoprague/"},Ma={speakers:[{id:"adam-kracik",name:"Adam Krac\xEDk",tracks:["zaklady","btc","eth","defi","alty"],photos:["web:jpg"]},{id:"adam-lokaj",name:"Adam Lokaj",bio:"Autor knihy [Adopce Bitcoinu pro obchodn\xED korporace](https://www.adopcebtc.cz/)",orgs:`[adopcebtc.cz](https://www.adopcebtc.cz/) ([Instagram](https://www.instagram.com/adopcebitcoinu/))
`,web:{name:"adopcebtc.cz",url:"https://adopcebtc.cz/"},tracks:["btc","regulace"],photos:["web:jpg"]},{id:"adam-studenik",name:"Adam Studen\xEDk",twitter:"adamstudenik",tracks:["eth","defi"],photos:["twitter:jpg"]},{id:"anett-rohlikova",name:"Anett Rolikova",twitter:"anettrolikova",orgs:`[Ethereum Magicians](https://ethereum-magicians.org/)
`,tracks:["eth","nft"],photos:["twitter:jpg"]},{id:"damsky",name:"damsky",twitter:"CryptoDamSky",tracks:["zaklady","eth","defi","dao","spolecnost"],photos:["twitter:jpg"]},{id:"david-antos",name:"David Anto\u0161",nickname:"jilm",twitter:"jilm",bio:"Eurofederalista, neoliber\xE1l, globalista",orgs:`Spoluzakladatel spolku [Pro euro](https://proeuro.cz)
`,tracks:["eth","btc","defi","spolecnost"],photos:["twitter:jpg"]},{id:"david-bankless",name:"DavidBankless",twitter:"davidbankless",orgs:`[Flipper.Zone](https://twitter.com/flipperzonenft), [BanklessDAO](https://www.bankless.community)
`,tracks:["zaklady","dao","nft"],photos:["twitter:jpg"]},{id:"dominik-stroukal",name:"Dominik Stroukal",twitter:"stroukal",bio:"Ekonom, libertari\xE1n, autor prvn\xED \u010Desk\xE9 knihy o kryptom\u011Bn\xE1ch",orgs:`Hlavn\xED ekonom [Roger](https://www.roger.cz/), b\xFDval\xFD \u0159editel [Liber\xE1ln\xEDho institutu](https://libinst.cz/) a [Ludwig von Mises institutu](https://www.mises.cz/)
`,lead:!0,tracks:["zaklady","btc","spolecnost","regulace"],photos:["web:png","sm:png","twitter:jpg"]},{id:"fetyas",name:"Fetyas",twitter:"hernakrypto",orgs:`YT kan\xE1l [KryptoHerna](https://www.youtube.com/channel/UCOgYjFqYfUnXo5DK9HceAMw)
`,tracks:["nft"],photos:["twitter:jpg"]},{id:"honza-dvorak",name:"Honza Dvo\u0159\xE1k",nickname:"Gorrdy",twitter:"_Honza_Dvorak",orgs:`[btcplatby.cz](https://btcplatby.cz)
`,tracks:["zaklady","btc"],photos:["twitter:jpg"]},{id:"hynek-jina",name:"Hynek J\xEDna",twitter:"HynekJina",orgs:`[SatoshiLabs](https://satoshilabs.com/)
`,tracks:["btc","zaklady","spolecnost"],photos:["twitter:jpg"]},{id:"jan-cerny",name:"Jan \u010Cern\xFD",nickname:"-HoNY-",orgs:`\u010Clen [Bitcoinovej kan\xE1l](https://bitcoinovejkanal.cz/) komunity
`,tracks:["zaklady","btc"],photos:["web:webp"]},{id:"jaromir-tesar",name:"Jarom\xEDr Tesa\u0159",twitter:"JaromirTesar",bio:"Blockchain expert, Cardano Ambassador",orgs:`[Cardanians](https://cardanians.io/cs)
`,tracks:["zaklady","defi","alty"],photos:["twitter:jpg"]},{id:"jiri-cepelka",name:"Ji\u0159\xED \u010Cepelka",twitter:"JiriCepelka",tracks:["zaklady","eth","defi"],photos:["twitter:jpg"]},{id:"juraj-bednar",name:"Juraj Bedn\xE1r",twitter:"jurbed",bio:"Podnikatel, hacker a milovn\xEDk svobody",orgs:`Spoluzakladatel [Hacktrophy](https://hacktrophy.com/sk/), \u010Dlen [Paraleln\xE9 Polis](https://paralelnapolis.sk)
`,web:{url:"https://juraj.bednar.io"},lead:!0,tracks:["zaklady","btc","dao","spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"m0xt",name:"m0xt",twitter:"m0xt_",tracks:["eth","defi","dao"],photos:["twitter:jpg"]},{id:"mario-havel",name:"Mario Havel",twitter:"TMIYChao",bio:"Kryptoanarchista, libertari\xE1n a hacker",orgs:`Zakladatel [Bordel Hackerspace](https://bordel.paralelnipolis.cz/#/), \u010Dlen [Paraleln\xED Polis](https://www.paralelnipolis.cz/)
`,lead:!0,tracks:["zaklady","btc","eth","defi"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"martin-gregor",name:"Martin Gregor",nickname:"ZaujaloMa",twitter:"ZaujaloMa",orgs:`YT kan\xE1l [Zaujalo ma Krypto & FinTech](https://www.youtube.com/channel/UCOn72OUpmWhnNuHl04qmRzg)
`,tracks:["btc","spolecnost","alty"],photos:["twitter:jpg"]},{id:"michal-repetny",name:"Michael Repetn\xFD",twitter:"repetny",orgs:`[Marinade.finance](https://marinade.finance/)
`,tracks:["zaklady","eth","defi","alty"],photos:["twitter:jpg"]},{id:"mirek-h",name:"Mirek H",orgs:`\u010Clen [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win) komunity
`,tracks:["btc","defi","alty"],photos:["web:webp"]},{id:"pavel-precechtel",name:"Pavel P\u0159ececht\u011Bl",nickname:"Hom\u039Er Shillson",twitter:"homershillson",orgs:`[VR Education](https://vreducation.cz)
`,tracks:["eth","defi","dao","alty","nft"],photos:["twitter:jpg"]},{id:"petr-klein",name:"Petr Klein",twitter:"kleinptr",tracks:["zaklady","eth","defi","dao","alty"],photos:["twitter:jpg"]},{id:"petr-mara",name:"Petr M\xE1ra",twitter:"petrmara",bio:"Technologick\xFD optimista, sb\u011Bratel NFT",web:{url:"https://www.petrmara.com"},lead:!0,tracks:["defi","nft","spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"petr-mensik",name:"Petr Men\u0161\xEDk",twitter:"petr_mensik",orgs:`[Polkadotters](https://twitter.com/polkadotterss)
`,tracks:["alty","defi"],photos:["twitter:jpg"]},{id:"robert-chovanculiak",name:"R\xF3bert Chovanculiak",twitter:"RChovanculiak",bio:"Autor knihy [Pokrok bez povolenia](https://libinst.cz/produkt/pokrok-bez-povolenia/)",orgs:`Analytik v [INESS](https://www.iness.sk), pedagog na [CEVRO Institutu](https://www.cevroinstitut.cz/cs/pedagog/ing-robert-chovanculiak-ph-d/)
`,web:{name:"Pokrok bez povolenia (newsletter)",url:"https://robertchovanculiak.substack.com"},lead:!0,tracks:["spolecnost"],photos:["web:jpg","sm:png","twitter:jpg"]},{id:"tomas-kryptovlada",name:"Tom\xE1\u0161",orgs:`\u010Clen [KryptoVl\xE1\u010Fa](https://www.kryptovlada.win) komunity
`,tracks:["zaklady","defi"],photos:["web:webp"]},{id:"tomas-zdrazil",name:"Tom\xE1\u0161 Zdra\u017Eil",twitter:"investree_cz",orgs:`[Investree](https://investree.cz)
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
`}],partners:[{id:"gweicz",name:"Gwei.cz",type:"community",twitter:"gweicz",photos:["twitter:jpg"]},{id:"holky-v-kryptu",name:"Holky v kryptu",type:"community",twitter:"holkyvkryptu",photos:["twitter:jpg"]},{id:"bankless-cz",name:"Bankless Czech",type:"community",twitter:"banklesscz",photos:["twitter:jpg"]},{id:"btcknl",name:"Bitcoinovej Kan\xE1l komunita (BTCKNL)",type:"community",web:{url:"https://discord.gg/HWG9Erm"},photos:["web:jpg"]},{id:"czsk-nft-community",name:"CZ/SK NFT Community",type:"community",web:{url:"https://discord.gg/X4MV9Pn5P8"},photos:["web:webp"]},{id:"kryptovlada-komunita",name:"KryptoVl\xE1\u010Fa komunita",type:"community",web:{url:"https://discord.gg/RHmhNGN"},photos:["web:webp"]},{id:"polkadotters-czsk",name:"Polkadotters",type:"community",twitter:"PolkadottersS",photos:["twitter:jpg"]},{id:"cardanians",name:"Cardanians",type:"community",twitter:"Cardanians_io",photos:["twitter:jpg"]},{id:"mitonc",name:"MitonC",type:"sponsor",twitter:"mitoncfund",photos:["twitter:jpg"]},{id:"kryptoinsider-podcast",name:"Podcast Krypto Insider (Hospod\xE1\u0159sk\xE9 noviny)",type:"medium",web:{url:"https://podcasty.hn.cz/krypto-insider/"},photos:["web:jpg"]},{id:"kryptonovinky-sk",name:"Kryptonovinky.sk (.cz)",type:"medium",web:{url:"https://www.kryptonovinky.sk/"},photos:["web:jpg"]},{id:"kryptodoupe",name:"KryptoDoup\u011B.cz",type:"medium",web:{url:"https://www.kryptodoupe.cz/"},photos:["web:png"]},{id:"investree",name:"Investree",type:"medium",web:{url:"https://investree.cz/"},photos:["web:jpg"]},{id:"kryptoplatby",name:"KryptoPlatby CZ/SK",type:"medium",web:{url:"https://linktr.ee/kryptoplatby"},photos:["twitter:jpg"]}]},Ha={tracks:9,speakers:30,events:0,faqs:6};var Na={id:Da,name:Va,shortname:Aa,description:Ta,dates:Sa,place:Pa,country:Ka,links:Ca,spec:Ma,stats:Ha};function Jt(t,e,s){const l=t.slice();return l[16]=e[s],l}function Zt(t,e,s){const l=t.slice();return l[19]=e[s],l}function Xt(t,e,s){const l=t.slice();return l[19]=e[s],l}function Gt(t,e,s){const l=t.slice();return l[24]=e[s],l}function Yt(t,e,s){const l=t.slice();return l[27]=e[s],l}function Wt(t,e,s){const l=t.slice();return l[27]=e[s],l}function Qt(t){let e,s,l,a,o,h;s=new At({props:{speaker:t[27],lead:!0,category:t[2],visible:!t[3]||t[3]&&t[3].id===t[27].id}});function y(){return t[10](t[27])}return{c(){e=_("div"),Ve(s.$$.fragment),l=V(),this.h()},l(i){e=b(i,"DIV",{class:!0});var p=w(e);Ae(s.$$.fragment,p),l=A(p),p.forEach(m),this.h()},h(){u(e,"class","rounded-full")},m(i,p){U(i,e,p),Te(s,e,null),c(e,l),a=!0,o||(h=[le(e,"mouseover",y),le(e,"mouseleave",t[8])],o=!0)},p(i,p){t=i;const f={};p[0]&1&&(f.speaker=t[27]),p[0]&4&&(f.category=t[2]),p[0]&9&&(f.visible=!t[3]||t[3]&&t[3].id===t[27].id),s.$set(f)},i(i){a||(E(s.$$.fragment,i),a=!0)},o(i){T(s.$$.fragment,i),a=!1},d(i){i&&m(e),Se(s),o=!1,Re(h)}}}function xt(t){let e,s,l=t[27].lead&&Qt(t);return{c(){l&&l.c(),e=Ue()},l(a){l&&l.l(a),e=Ue()},m(a,o){l&&l.m(a,o),U(a,e,o),s=!0},p(a,o){a[27].lead?l?(l.p(a,o),o[0]&1&&E(l,1)):(l=Qt(a),l.c(),E(l,1),l.m(e.parentNode,e)):l&&(te(),T(l,1,1,()=>{l=null}),ae())},i(a){s||(E(l),s=!0)},o(a){T(l),s=!1},d(a){l&&l.d(a),a&&m(e)}}}function $t(t){let e,s,l,a,o,h;s=new At({props:{speaker:t[27],category:t[2],visible:!t[3]||t[3]&&t[3].id===t[27].id}});function y(){return t[11](t[27])}return{c(){e=_("div"),Ve(s.$$.fragment),l=V()},l(i){e=b(i,"DIV",{});var p=w(e);Ae(s.$$.fragment,p),l=A(p),p.forEach(m)},m(i,p){U(i,e,p),Te(s,e,null),c(e,l),a=!0,o||(h=[le(e,"mouseover",y),le(e,"mouseleave",t[8])],o=!0)},p(i,p){t=i;const f={};p[0]&1&&(f.speaker=t[27]),p[0]&4&&(f.category=t[2]),p[0]&9&&(f.visible=!t[3]||t[3]&&t[3].id===t[27].id),s.$set(f)},i(i){a||(E(s.$$.fragment,i),a=!0)},o(i){T(s.$$.fragment,i),a=!1},d(i){i&&m(e),Se(s),o=!1,Re(h)}}}function ea(t){let e,s,l=!t[27].lead&&$t(t);return{c(){l&&l.c(),e=Ue()},l(a){l&&l.l(a),e=Ue()},m(a,o){l&&l.m(a,o),U(a,e,o),s=!0},p(a,o){a[27].lead?l&&(te(),T(l,1,1,()=>{l=null}),ae()):l?(l.p(a,o),o[0]&1&&E(l,1)):(l=$t(a),l.c(),E(l,1),l.m(e.parentNode,e))},i(a){s||(E(l),s=!0)},o(a){T(l),s=!1},d(a){l&&l.d(a),a&&m(e)}}}function ta(t){let e,s=(t[24].shortname||t[24].name)+"",l,a,o,h;function y(){return t[12](t[24])}return{c(){e=_("div"),l=B(s),this.h()},l(i){e=b(i,"DIV",{class:!0});var p=w(e);l=O(p,s),p.forEach(m),this.h()},h(){var i;u(e,"class",a="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer "+(t[3]&&!((i=t[3].tracks)==null?void 0:i.includes(t[24].id))?"opacity-20":"")+" svelte-5alcep")},m(i,p){U(i,e,p),c(e,l),o||(h=[le(e,"mouseover",y),le(e,"mouseleave",t[6])],o=!0)},p(i,p){var f;t=i,p[0]&1&&s!==(s=(t[24].shortname||t[24].name)+"")&&Pe(l,s),p[0]&9&&a!==(a="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer "+(t[3]&&!((f=t[3].tracks)==null?void 0:f.includes(t[24].id))?"opacity-20":"")+" svelte-5alcep")&&u(e,"class",a)},d(i){i&&m(e),o=!1,Re(h)}}}function aa(t){let e,s,l=t[19].question+"",a,o,h,y,i,p;return y=new da({props:{source:t[19].answer,renderers:t[9]}}),{c(){e=_("div"),s=_("h3"),a=B(l),o=V(),h=_("p"),Ve(y.$$.fragment),i=V(),this.h()},l(f){e=b(f,"DIV",{class:!0});var j=w(e);s=b(j,"H3",{class:!0});var v=w(s);a=O(v,l),v.forEach(m),o=A(j),h=b(j,"P",{class:!0});var d=w(h);Ae(y.$$.fragment,d),d.forEach(m),i=A(j),j.forEach(m),this.h()},h(){u(s,"class","pixelfont text-sm mb-3 svelte-5alcep"),u(h,"class","md"),u(e,"class","mb-5 break-inside-avoid-column bg-white/30 rounded-3xl px-6 py-4 text-left transition-all box-shadow-light overflow-visible svelte-5alcep")},m(f,j){U(f,e,j),c(e,s),c(s,a),c(e,o),c(e,h),Te(y,h,null),c(e,i),p=!0},p(f,j){(!p||j[0]&1)&&l!==(l=f[19].question+"")&&Pe(a,l);const v={};j[0]&1&&(v.source=f[19].answer),y.$set(v)},i(f){p||(E(y.$$.fragment,f),p=!0)},o(f){T(y.$$.fragment,f),p=!1},d(f){f&&m(e),Se(y)}}}function la(t){let e,s;return e=new At({props:{speaker:t[19],col:"partners"}}),{c(){Ve(e.$$.fragment)},l(l){Ae(e.$$.fragment,l)},m(l,a){Te(e,l,a),s=!0},p(l,a){const o={};a[0]&2&&(o.speaker=l[19]),e.$set(o)},i(l){s||(E(e.$$.fragment,l),s=!0)},o(l){T(e.$$.fragment,l),s=!1},d(l){Se(e,l)}}}function sa(t){let e,s,l=t[16].title+"",a,o,h,y,i,p=t[16].arr,f=[];for(let v=0;v<p.length;v+=1)f[v]=la(Zt(t,p,v));const j=v=>T(f[v],1,1,()=>{f[v]=null});return{c(){e=_("div"),s=_("h2"),a=B(l),o=V(),h=_("div");for(let v=0;v<f.length;v+=1)f[v].c();y=V(),this.h()},l(v){e=b(v,"DIV",{class:!0});var d=w(e);s=b(d,"H2",{class:!0});var g=w(s);a=O(g,l),g.forEach(m),o=A(d),h=b(d,"DIV",{class:!0});var M=w(h);for(let I=0;I<f.length;I+=1)f[I].l(M);M.forEach(m),y=A(d),d.forEach(m),this.h()},h(){u(s,"class","pixelfont text-gray-800 text-sm mb-3 svelte-5alcep"),u(h,"class","flex flex-wrap justify-center"),u(e,"class","break-inside-avoid-column mb-5")},m(v,d){U(v,e,d),c(e,s),c(s,a),c(e,o),c(e,h);for(let g=0;g<f.length;g+=1)f[g].m(h,null);c(e,y),i=!0},p(v,d){if((!i||d[0]&2)&&l!==(l=v[16].title+"")&&Pe(a,l),d[0]&2){p=v[16].arr;let g;for(g=0;g<p.length;g+=1){const M=Zt(v,p,g);f[g]?(f[g].p(M,d),E(f[g],1)):(f[g]=la(M),f[g].c(),E(f[g],1),f[g].m(h,null))}for(te(),g=p.length;g<f.length;g+=1)j(g);ae()}},i(v){if(!i){for(let d=0;d<p.length;d+=1)E(f[d]);i=!0}},o(v){f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)T(f[d]);i=!1},d(v){v&&m(e),ge(f,v)}}}function Ba(t){let e,s,l,a,o,h,y,i,p,f=t[0].place+"",j,v,d,g=t[0].description+"",M,I,L,J,D,se,Je,he,Ze,Xe,oe,Ge,fe,_e,Ye,We,me,Qe,xe,ke,ne,$e,re,et,ie,tt,be,at,N,Z,we,lt,Ke,st,X,ye,ot,Ce,nt,G,ze,rt,Me,it,Y,je,ct,He,ut,W,Ee,pt,Ne,dt,Q,Ie,ht,Be,ft,x,De,mt,Oe,F;document.title=e=""+(t[0].name+" | "+t[0].description);let ce=t[0].spec.speakers,S=[];for(let r=0;r<ce.length;r+=1)S[r]=xt(Wt(t,ce,r));const oa=r=>T(S[r],1,1,()=>{S[r]=null});let ue=t[0].spec.speakers,P=[];for(let r=0;r<ue.length;r+=1)P[r]=ea(Yt(t,ue,r));const na=r=>T(P[r],1,1,()=>{P[r]=null});let ve=t[0].spec.tracks,q=[];for(let r=0;r<ve.length;r+=1)q[r]=ta(Gt(t,ve,r));let pe=t[0].spec.faqs,K=[];for(let r=0;r<pe.length;r+=1)K[r]=aa(Xt(t,pe,r));const ra=r=>T(K[r],1,1,()=>{K[r]=null});let de=t[1],C=[];for(let r=0;r<de.length;r+=1)C[r]=sa(Jt(t,de,r));const ia=r=>T(C[r],1,1,()=>{C[r]=null});return{c(){s=V(),l=_("section"),a=_("div"),o=_("h1"),h=B(t[4]),y=V(),i=_("div"),p=B("4.-5. \u010Derven 2022 @ "),j=B(f),v=V(),d=_("div"),M=B(g),I=V(),L=_("div"),J=_("div");for(let r=0;r<S.length;r+=1)S[r].c();D=V(),se=_("div");for(let r=0;r<P.length;r+=1)P[r].c();Je=V(),he=_("div"),Ze=B(".. a dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED p\u0159ipravujeme!"),Xe=V(),oe=_("div");for(let r=0;r<q.length;r+=1)q[r].c();Ge=V(),fe=_("div"),_e=_("div"),Ye=B("2 dny, 50+ p\u0159edn\xE1\u0161ej\xEDch, 100h+ obsahu, 1000+ n\xE1v\u0161t\u011Bvn\xEDk\u016F"),We=V(),me=_("h2"),Qe=B("\u010Casto kladen\xE9 dotazy (FAQ)"),xe=V(),ke=_("div"),ne=_("div");for(let r=0;r<K.length;r+=1)K[r].c();$e=V(),re=_("div");for(let r=0;r<C.length;r+=1)C[r].c();et=V(),ie=_("div"),tt=B("We Are All Satoshi "),be=_("i"),at=V(),N=_("div"),Z=_("a"),we=_("i"),lt=B(" Dokumentace"),st=V(),X=_("a"),ye=_("i"),ot=B(" Newsletter"),nt=V(),G=_("a"),ze=_("i"),rt=B(" Discord"),it=V(),Y=_("a"),je=_("i"),ct=B(" Telegram"),ut=V(),W=_("a"),Ee=_("i"),pt=B(" Twitter"),dt=V(),Q=_("a"),Ie=_("i"),ht=B(" Instagram"),ft=V(),x=_("a"),De=_("i"),mt=B(" Facebook"),this.h()},l(r){ua('[data-svelte="svelte-1duagmk"]',document.head).forEach(m),s=A(r),l=b(r,"SECTION",{});var n=w(l);a=b(n,"DIV",{class:!0});var z=w(a);o=b(z,"H1",{class:!0});var Tt=w(o);h=O(Tt,t[4]),Tt.forEach(m),y=A(z),i=b(z,"DIV",{class:!0});var kt=w(i);p=O(kt,"4.-5. \u010Derven 2022 @ "),j=O(kt,f),kt.forEach(m),v=A(z),d=b(z,"DIV",{class:!0});var St=w(d);M=O(St,g),St.forEach(m),I=A(z),L=b(z,"DIV",{class:!0});var ee=w(L);J=b(ee,"DIV",{class:!0});var Pt=w(J);for(let H=0;H<S.length;H+=1)S[H].l(Pt);Pt.forEach(m),D=A(ee),se=b(ee,"DIV",{class:!0});var Kt=w(se);for(let H=0;H<P.length;H+=1)P[H].l(Kt);Kt.forEach(m),Je=A(ee),he=b(ee,"DIV",{class:!0});var Ct=w(he);Ze=O(Ct,".. a dal\u0161\xED p\u0159edn\xE1\u0161ej\xEDc\xED p\u0159ipravujeme!"),Ct.forEach(m),Xe=A(ee),oe=b(ee,"DIV",{class:!0});var Mt=w(oe);for(let H=0;H<q.length;H+=1)q[H].l(Mt);Mt.forEach(m),ee.forEach(m),Ge=A(z),fe=b(z,"DIV",{class:!0});var Ht=w(fe);_e=b(Ht,"DIV",{});var Nt=w(_e);Ye=O(Nt,"2 dny, 50+ p\u0159edn\xE1\u0161ej\xEDch, 100h+ obsahu, 1000+ n\xE1v\u0161t\u011Bvn\xEDk\u016F"),Nt.forEach(m),Ht.forEach(m),We=A(z),me=b(z,"H2",{class:!0});var Bt=w(me);Qe=O(Bt,"\u010Casto kladen\xE9 dotazy (FAQ)"),Bt.forEach(m),xe=A(z),ke=b(z,"DIV",{class:!0});var Ot=w(ke);ne=b(Ot,"DIV",{class:!0});var qt=w(ne);for(let H=0;H<K.length;H+=1)K[H].l(qt);qt.forEach(m),Ot.forEach(m),$e=A(z),re=b(z,"DIV",{class:!0});var Lt=w(re);for(let H=0;H<C.length;H+=1)C[H].l(Lt);Lt.forEach(m),et=A(z),ie=b(z,"DIV",{class:!0});var vt=w(ie);tt=O(vt,"We Are All Satoshi "),be=b(vt,"I",{class:!0}),w(be).forEach(m),vt.forEach(m),at=A(z),N=b(z,"DIV",{class:!0});var R=w(N);Z=b(R,"A",{href:!0,target:!0,class:!0});var gt=w(Z);we=b(gt,"I",{class:!0}),w(we).forEach(m),lt=O(gt," Dokumentace"),gt.forEach(m),st=A(R),X=b(R,"A",{href:!0,target:!0,class:!0});var _t=w(X);ye=b(_t,"I",{class:!0}),w(ye).forEach(m),ot=O(_t," Newsletter"),_t.forEach(m),nt=A(R),G=b(R,"A",{href:!0,target:!0,class:!0});var bt=w(G);ze=b(bt,"I",{class:!0}),w(ze).forEach(m),rt=O(bt," Discord"),bt.forEach(m),it=A(R),Y=b(R,"A",{href:!0,target:!0,class:!0});var wt=w(Y);je=b(wt,"I",{class:!0}),w(je).forEach(m),ct=O(wt," Telegram"),wt.forEach(m),ut=A(R),W=b(R,"A",{href:!0,target:!0,class:!0});var yt=w(W);Ee=b(yt,"I",{class:!0}),w(Ee).forEach(m),pt=O(yt," Twitter"),yt.forEach(m),dt=A(R),Q=b(R,"A",{href:!0,target:!0,class:!0});var zt=w(Q);Ie=b(zt,"I",{class:!0}),w(Ie).forEach(m),ht=O(zt," Instagram"),zt.forEach(m),ft=A(R),x=b(R,"A",{href:!0,target:!0,class:!0});var jt=w(x);De=b(jt,"I",{class:!0}),w(De).forEach(m),mt=O(jt," Facebook"),jt.forEach(m),R.forEach(m),z.forEach(m),n.forEach(m),this.h()},h(){u(o,"class","text-5xl md:text-6xl lg:text-7xl svelte-5alcep"),u(i,"class","subline-shadow text-lg md:text-xl lg:text-2xl svelte-5alcep"),u(d,"class","subline text-sm md:text-md lg:text-lg text-gray-800 svelte-5alcep"),u(J,"class","mt-3 mb-6 flex flex-wrap justify-center relative"),u(se,"class","flex flex-wrap justify-center relative"),u(he,"class","pixelfont text-sm mt-5 mb-10 svelte-5alcep"),u(oe,"class","mt-12 mb-6 flex flex-wrap justify-center relative gap-4 text-sm"),u(L,"class","mt-10"),u(fe,"class","subline-shadow2 text-lg md:text-xl lg:text-2xl mt-14 svelte-5alcep"),u(me,"class","pixelfont mt-10 text-gray-800"),u(ne,"class","columns-1 xl:columns-2 mt-5 h-auto text-gray-800"),u(ke,"class","container w-full mx-auto"),u(re,"class","columns-1 xl:columns-3 xl:mt-5"),u(be,"class","fas fa-heart text-red-500"),u(ie,"class","mt-3 subline-shadow2 svelte-5alcep"),u(we,"class","fas fa-book svelte-5alcep"),u(Z,"href",Ke=t[0].links.docs),u(Z,"target","_blank"),u(Z,"class","svelte-5alcep"),u(ye,"class","fas fa-newspaper svelte-5alcep"),u(X,"href",Ce=t[0].links.substack),u(X,"target","_blank"),u(X,"class","svelte-5alcep"),u(ze,"class","fab fa-discord svelte-5alcep"),u(G,"href",Me=t[0].links.discord),u(G,"target","_blank"),u(G,"class","svelte-5alcep"),u(je,"class","fab fa-telegram-plane svelte-5alcep"),u(Y,"href",He=t[0].links.telegram),u(Y,"target","_blank"),u(Y,"class","svelte-5alcep"),u(Ee,"class","fab fa-twitter svelte-5alcep"),u(W,"href",Ne=t[0].links.twitter),u(W,"target","_blank"),u(W,"class","svelte-5alcep"),u(Ie,"class","fab fa-instagram svelte-5alcep"),u(Q,"href",Be=t[0].links.instagram),u(Q,"target","_blank"),u(Q,"class","svelte-5alcep"),u(De,"class","fab fa-facebook svelte-5alcep"),u(x,"href",Oe=t[0].links.fbevent),u(x,"target","_blank"),u(x,"class","svelte-5alcep"),u(N,"class","footer-link flex flex-wrap justify-center relative mt-10 mb-5 pixelfont-micro gap-6 mx-auto w-8/12 svelte-5alcep"),u(a,"class","relative px-6 pt-10 pb-8 sm:max-w-6xl sm:mx-auto sm:rounded-lg sm:px-5 text-center")},m(r,k){U(r,s,k),U(r,l,k),c(l,a),c(a,o),c(o,h),c(a,y),c(a,i),c(i,p),c(i,j),c(a,v),c(a,d),c(d,M),c(a,I),c(a,L),c(L,J);for(let n=0;n<S.length;n+=1)S[n].m(J,null);c(L,D),c(L,se);for(let n=0;n<P.length;n+=1)P[n].m(se,null);c(L,Je),c(L,he),c(he,Ze),c(L,Xe),c(L,oe);for(let n=0;n<q.length;n+=1)q[n].m(oe,null);c(a,Ge),c(a,fe),c(fe,_e),c(_e,Ye),c(a,We),c(a,me),c(me,Qe),c(a,xe),c(a,ke),c(ke,ne);for(let n=0;n<K.length;n+=1)K[n].m(ne,null);c(a,$e),c(a,re);for(let n=0;n<C.length;n+=1)C[n].m(re,null);c(a,et),c(a,ie),c(ie,tt),c(ie,be),c(a,at),c(a,N),c(N,Z),c(Z,we),c(Z,lt),c(N,st),c(N,X),c(X,ye),c(X,ot),c(N,nt),c(N,G),c(G,ze),c(G,rt),c(N,it),c(N,Y),c(Y,je),c(Y,ct),c(N,ut),c(N,W),c(W,Ee),c(W,pt),c(N,dt),c(N,Q),c(Q,Ie),c(Q,ht),c(N,ft),c(N,x),c(x,De),c(x,mt),F=!0},p(r,k){if((!F||k[0]&1)&&e!==(e=""+(r[0].name+" | "+r[0].description))&&(document.title=e),(!F||k[0]&1)&&f!==(f=r[0].place+"")&&Pe(j,f),(!F||k[0]&1)&&g!==(g=r[0].description+"")&&Pe(M,g),k[0]&397){ce=r[0].spec.speakers;let n;for(n=0;n<ce.length;n+=1){const z=Wt(r,ce,n);S[n]?(S[n].p(z,k),E(S[n],1)):(S[n]=xt(z),S[n].c(),E(S[n],1),S[n].m(J,null))}for(te(),n=ce.length;n<S.length;n+=1)oa(n);ae()}if(k[0]&397){ue=r[0].spec.speakers;let n;for(n=0;n<ue.length;n+=1){const z=Yt(r,ue,n);P[n]?(P[n].p(z,k),E(P[n],1)):(P[n]=ea(z),P[n].c(),E(P[n],1),P[n].m(se,null))}for(te(),n=ue.length;n<P.length;n+=1)na(n);ae()}if(k[0]&105){ve=r[0].spec.tracks;let n;for(n=0;n<ve.length;n+=1){const z=Gt(r,ve,n);q[n]?q[n].p(z,k):(q[n]=ta(z),q[n].c(),q[n].m(oe,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=ve.length}if(k[0]&513){pe=r[0].spec.faqs;let n;for(n=0;n<pe.length;n+=1){const z=Xt(r,pe,n);K[n]?(K[n].p(z,k),E(K[n],1)):(K[n]=aa(z),K[n].c(),E(K[n],1),K[n].m(ne,null))}for(te(),n=pe.length;n<K.length;n+=1)ra(n);ae()}if(k[0]&2){de=r[1];let n;for(n=0;n<de.length;n+=1){const z=Jt(r,de,n);C[n]?(C[n].p(z,k),E(C[n],1)):(C[n]=sa(z),C[n].c(),E(C[n],1),C[n].m(re,null))}for(te(),n=de.length;n<C.length;n+=1)ia(n);ae()}(!F||k[0]&1&&Ke!==(Ke=r[0].links.docs))&&u(Z,"href",Ke),(!F||k[0]&1&&Ce!==(Ce=r[0].links.substack))&&u(X,"href",Ce),(!F||k[0]&1&&Me!==(Me=r[0].links.discord))&&u(G,"href",Me),(!F||k[0]&1&&He!==(He=r[0].links.telegram))&&u(Y,"href",He),(!F||k[0]&1&&Ne!==(Ne=r[0].links.twitter))&&u(W,"href",Ne),(!F||k[0]&1&&Be!==(Be=r[0].links.instagram))&&u(Q,"href",Be),(!F||k[0]&1&&Oe!==(Oe=r[0].links.fbevent))&&u(x,"href",Oe)},i(r){if(!F){for(let k=0;k<ce.length;k+=1)E(S[k]);for(let k=0;k<ue.length;k+=1)E(P[k]);for(let k=0;k<pe.length;k+=1)E(K[k]);for(let k=0;k<de.length;k+=1)E(C[k]);F=!0}},o(r){S=S.filter(Boolean);for(let k=0;k<S.length;k+=1)T(S[k]);P=P.filter(Boolean);for(let k=0;k<P.length;k+=1)T(P[k]);K=K.filter(Boolean);for(let k=0;k<K.length;k+=1)T(K[k]);C=C.filter(Boolean);for(let k=0;k<C.length;k+=1)T(C[k]);F=!1},d(r){r&&m(s),r&&m(l),ge(S,r),ge(P,r),ge(q,r),ge(K,r),ge(C,r)}}}const Fa=!0,Oa="UTXO.22";function qa(t,e,s){let l;pa(t,fa,D=>s(13,l=D));let a=Na,o=g();l.url.hostname==="localhost"?console.log("Local only mode"):(async()=>{const D=await fetch("https://spec.utxo.cz/22/bundle.json");s(0,a=await D.json()),s(1,o=g())})();let y=Oa,i=null,p=null;function f(D){s(2,i=D)}function j(){s(2,i=null)}function v(D){s(3,p=D)}function d(){s(3,p=null)}function g(){return[{title:"Komunity",arr:a.spec.partners.filter(D=>D.type==="community")},{title:"Sponzo\u0159i",arr:a.spec.partners.filter(D=>D.type==="sponsor")},{title:"Medi\xE1ln\xED partne\u0159i",arr:a.spec.partners.filter(D=>D.type==="medium")}]}return[a,o,i,p,y,f,j,v,d,{link:za},D=>v(D),D=>v(D),D=>f(D.id)]}class Ra extends qe{constructor(e){super();Le(this,e,qa,Ba,Fe,{},null,[-1,-1])}}export{Ra as default,Fa as prerender};