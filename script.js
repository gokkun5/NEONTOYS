//全部まとめる
const figures = [

{
series:"sairen",
name:"SILENT HILL 2　バブルヘッドナース",
search:"ばぶるへっどなーす",
type:"",
price:900,
date: "",
img:"images/sairen/babu.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"sairen",
name:"SILENT HILL 2　レッドピラミッドシング",
search:"れっどぴらみどしんぐ",
type:"",
price:1000,
date: "",
img:"images/sairen/pira.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"zyuzyutu",
name:"劇場版呪術廻戦0Luminasta“乙骨憂太”黒閃",
search:"おっこつゆうた",
type:"lum",
price:600,
date: "",
img:"images/zyuzyutu/otukoto_kokusen.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"鬼滅の刃 フィギュア-絆ノ装-参拾捌ノ型",
search:"小鉄　こてつ",
type: "kizuna",
price:600,
date: "",
img:"images/kimetu/kotetu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア THE AMAZING HEROES-PLUS-SHOTO TODOROKI Ⅱ",
search:"轟焦凍",
type:"ame",
price:500,
date: "",
img:"images/hiro/todoroki2_ame.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"haikyu",
name:"『劇場版ハイキュー!! ゴミ捨て場の決戦』 フィギュア-この瞬間をいつまでも-",
search:"こづめけんま　孤爪研磨　くろおてつろう　黒尾鉄朗",
type:"",
price:700,
date: "",
img:"images/haikyu/kono.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"HUNTER×HUNTER VIBRATION STARS-カイト-",
search:"かいと",
type:"memo",
price:1200,
date: "",
img:"images/hant/kaito_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"HUNTER×HUNTER Memorable Saga Special-ゴン-",
search:"ごん",
type:"memo",
price:1800,
date: "",
img:"images/hant/gon_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレンYumemirizeフェルン～あの頃～",
search:"ふぇるん",
type:"yume",
price:600,
date: "",
img:"images/furi-ren/fer_anokoro.jpg",
source:"https://segaplaza.jp/"
},

{
series:"yurukyan",
name:"『ゆるキャン△ SEASON３』 志摩リン フィギュア",
search:"しまりん",
type:"",
price:400,
date: "",
img:"images/yurukyan/simarin.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア フィギュア 緑谷出久・爆豪勝己～GiGO限定～ver.2",
search:"みどりやいずく　でく　デク",
type:"",
price:800,
date: "",
img:"images/hiro/deku_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"soniko",
name:"『すーぱーそに子』 BiCute Bunnies Figure ーPearl White ver.ー",
search:"すーぱーそにこ",
type:"bani",
price:600,
date: "",
img:"images/soniko/bani_w.jpg",
source:"https://charahiroba.com/"
},

{
series:"wanpi",
name:"ワンピース ワールドコレクタブルフィギュア ログストーリーズ-エドワード・ニューゲートVSシャンクス-",
search:"しろひげ　白ひげ　しゃんくす　シャンクス",
type:"wakore",
price:700,
date: "",
img:"images/wanpi/nyu_sya.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア THE AMAZING HEROES-DX-NEJIRE HADO",
search:"はどうねじれ　波動ねじれ",
type:"ame",
price:900,
date: "",
img:"images/hiro/nezire_ame.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア フィギュア 緑谷出久・爆豪勝己～GiGO限定～ver.2",
search:"ばくごうかつき",
type:"",
price:800,
date: "",
img:"images/hiro/bakugo_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア FINAL SEASON FIGURE-IZUKU MIDORIYA-",
search:"緑谷出久　みどりやいずく　でく　デク",
type:"",
price:800,
date: "",
img:"images/hiro/deku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nintama",
name:"劇場版 忍たま乱太郎 土井半助 フィギュア",
search:"どいはんすけ",
type:"",
price:300,
date: "",
img:"images/nintama/doi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ SOLID EDGE WORKS-THE出陣-ジース＆グルド",
search:"じーす",
type:"syutu",
price:600,
date: "",
img:"images/db/zisu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ SOLID EDGE WORKS-THE出陣-ジース＆グルド",
search:"ぐるど",
type:"syutu",
price:600,
date: "",
img:"images/db/gurudo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ SOLID EDGE WORKS-THE出陣-リクーム＆バータ",
search:"りくーむ",
type:"syutu",
price:800,
date: "",
img:"images/db/rikumu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ SOLID EDGE WORKS-THE出陣-リクーム＆バータ",
search:"ばーた",
type:"syutu",
price:800,
date: "",
img:"images/db/bata.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ SOLID EDGE WORKS-THE出陣-ギニュー",
search:"ぎにゅー",
type:"syutu",
price:400,
date: "",
img:"images/db/ginyu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"ruroken",
name:"『るろうに剣心 ー明治剣客浪漫譚ー』 Trio-Try-iT Figure ー 緋村剣心 ー",
search:"ひむらけんしん",
type:"trio",
price:500,
date: "",
img:"images/ruroken/kensin_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"monhan",
name:"モンスターハンター 鎮座獣 リオレウス～激闘！雄火竜リオレウス～",
search:"りおれうす",
type:"tinza",
price:400,
date: "",
img:"images/monhan/rio.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"monhan",
name:"モンスターハンター 鎮座獣 ジンオウガ～月下雷鳴～",
search:"じんおうが",
type:"tinza",
price:400,
date: "",
img:"images/monhan/zinou.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tora",
name:"『To LOVE る-とらぶる-ダークネス』 Trio-Try-iT Figure ― ララ・サタリン・デビルーク ―",
search:"らら",
type:"trio",
price:700,
date: "",
img:"images/tora/rara_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST THE YAMATO",
search:"やまと",
type:"koa",
price:700,
date: "",
img:"images/wanpi/yamato_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yugi",
name:"アニメ「遊☆戯☆王」シリーズ　Monsters LEGION レッド・デーモンズ・ドラゴン",
search:"れっどでーもんずどらごん",
type:"mon",
price:500,
date: "",
img:"images/yugi/reddemo.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 ソフビフィギュア-ガマ吉-",
search:"がまきち",
type:"sof",
price:600,
date: "",
img:"images/naruto/gamakiti_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 ぬーどるストッパーフィギュア ー 竈門炭治郎×クラフトホリック ー ラウンドワン限定",
search:"かまどたんじろう",
type:"nusuto",
price:1000,
date: "",
img:"images/kimetu/tanzi_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"keroro",
name:"ケロロ軍曹 おおきなSOFVIMATES～ドロロ兵長～",
search:"どろろへいちょう",
type:"sof",
price:1000,
date: "",
img:"images/keroro/dororo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gomon",
name:"TVアニメ『姫様“拷問”の時間です』 フィギュアスペシャルアソート",
search:"姫　ひめ",
type:"",
price:300,
date: "",
img:"images/gomon/hime.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-MONKEY.D.LUFFY-",
search:"るふぃ　ルフィ",
type:"gra",
price:1000,
date: "",
img:"images/wanpi/rufi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』Luminasta “オカルン（変身）”Vol.2Ver.1.5",
search:"おかるん",
type: "lum",
price:300,
date: "",
img:"images/dandadan/oka1.5_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』 -Relax time-モモ",
search:"もも",
type:"relax",
price:500,
date: "",
img:"images/dandadan/momo_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』 フィグライフ!オカルン(変身)",
search:"おかるん",
type:"figl",
price:300,
date: "",
img:"images/dandadan/oka_figl.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"『チェンソーマン』 BiCute Bunnies Figure ー パワー ー",
search:"ぱわー",
type:"bani",
price:2000,
date: "",
img:"images/tyen/pawa1_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 VIBRATION STARS-BOMB-",
search:"ぼむ　ボム",
type:"vib",
price:1500,
date: "",
img:"images/tyen/bomb_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール ドラゴンレーダー型スピーカー",
search:"どらごんれーだー",
type:"",
price:500,
date: "",
img:"images/db/reda.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ G×materia SON GOHAN Ⅲ",
search:"そんごはん",
type:"gma",
price:550,
date: "",
img:"images/db/gohan3_gma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ History Box 魔人ベジータ",
search:"まじんべじーた",
type: "his",
price:800,
date: "",
img:"images/db/mazin_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール History Box ブルマ",
search:"ぶるま",
type: "his",
price:1000,
date: "",
img:"images/db/buruma_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST SABO",
search:"さぼ　サボ",
type:"koa",
price:400,
date: "",
img:"images/wanpi/sabo_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース BATTLE RECORD COLLECTION-BORSALINO-",
search:"黄猿　きざる　ボルサリーノ　ぼるさりーの",
type:"bato",
price:600,
date: "",
img:"images/wanpi/kizaru_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース SOFVIMATES～ゴールデン電伝虫～",
search:"でんでんむし",
type:"sof",
price:600,
date: "",
img:"images/wanpi/goruden_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース DXF～THE GRANDLINE SERIES～JEWELRY.BONNEY CHILDREN ver.",
search:"ぼにー",
type:"dxf",
price:500,
date: "",
img:"images/wanpi/boni_dxf.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース DXF～THE GRANDLINE SERIES～SPECIAL JAGUAR.D.SAUL",
search:"さうろ",
type:"dxf",
price:400,
date: "",
img:"images/wanpi/sauro_dxf.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース おおきなSOFVIMATES～ラブーン～",
search:"らぶーん",
type:"sof",
price:600,
date: "",
img:"images/wanpi/rabu_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース ワールドコレクタブルフィギュア ログストーリーズ-モンキー・D・ルフィ&ブルック-｢そうですか……!!! 彼は元気ですか………!!!｣",
search:"ルフィ　るふぃ　ブルック　ぶるっく",
type:"wakore",
price:1000,
date: "",
img:"images/wanpi/soudesuka.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"銀魂 フィグライフ!～いつも心に一本のドライバー～",
search:"えりざべす　エリザベス",
type:"figl",
price:700,
date: "",
img:"images/gintama/eri_figl.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 ぬーどるストッパーフィギュア ーフェルンー",
search:"ふぇるん",
type:"nusuto",
price:400,
date: "",
img:"images/furi-ren/fer_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Trio-Try-iT Figure ー フェルン ー",
search:"ふぇるん",
type:"trio",
price:500,
date: "",
img:"images/furi-ren/fer_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Grandista-UZUMAKI NARUTO-",
search:"うずまきナルト　なると",
type:"gra",
price:2000,
date: "",
img:"images/naruto/naruto_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Grandista-NAMIKAZE MINATO-",
search:"なみかぜみなと　波風ミナト",
type:"gra",
price:1200,
date: "",
img:"images/naruto/minato_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 ソフビフィギュア-守鶴 ＆ ガマブン太-",
search:"しゅかく",
type:"",
price:800,
date: "",
img:"images/naruto/syukaku_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 PANEL SPECTACLE～最強の兵ども～波風ミナト",
search:"なみかぜみなと",
type:"pane",
price:1300,
date: "",
img:"images/naruto/minato_pane.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 PANEL SPECTACLE～最強の兵ども～猿飛ヒルゼン",
search:"さるとびひるぜん",
type:"pane",
price:700,
date: "",
img:"images/naruto/hiru_pane.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 PANEL SPECTACLE～最強の兵ども～千手扉間",
search:"せんじゅとびらま",
type:"pane",
price:1200,
date: "",
img:"images/naruto/tobira_pane.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Memorable Saga-うちはサスケ-Ⅱ",
search:"さすけ",
type:"memo",
price:1200,
date: "",
img:"images/naruto/sasuke_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Memorable Saga-うずまきナルト-Ⅱ",
search:"なると",
type:"memo",
price:1600,
date: "",
img:"images/naruto/naruto2_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS-HATAKE KAKASHI ＆ UCHIHA MADARA-",
search:"はたけかかし　カカシ",
type:"vib",
price:1000,
date: "",
img:"images/naruto/kakasi_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS-UZUMAKI NARUTO-Ⅵ",
search:"うずまきなると　うずまきナルト",
type:"vib",
price:900,
date: "",
img:"images/naruto/naruto6_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Memorable Saga-ロック・リー-",
search:"ろっくりー",
type:"memo",
price:1000,
date: "",
img:"images/naruto/ri_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- VIBRATION STARS-UCHIHA SASUKE-Ⅲ",
search:"うちはさすけ　うちはサスケ",
type:"vib",
price:900,
date: "",
img:"images/naruto/sasuke3_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- VIBRATION STARS-MOMOCHI ZABUZA-",
search:"ももちざぶざ　桃地 再不斬",
type:"vib",
price:1000,
date: "",
img:"images/naruto/zabuza_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS-NAMIKAZE MINATO-Ⅲ",
search:"波風ミナト　なみかぜみなと",
type:"vib",
price:900,
date: "",
img:"images/naruto/minato_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Combination Battle-うちはサスケ-",
search:"うちはさすけ",
type:"combi",
price:800,
date: "",
img:"images/naruto/sasu_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Combination Battle-うずまきナルト-",
search:"うずまきなると",
type:"combi",
price:800,
date: "",
img:"images/naruto/naru_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kinniku",
name:"キン肉マン サウナフィギュア-ロビンマスク-",
search:"ろびんますく",
type:"",
price:400,
date: "",
img:"images/kinniku/robin.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tora",
name:"『To LOVEる-とらぶる-ダークネス』 Desktop Cute フィギュア 西連寺春菜 ～チャイナドレスver.～",
search:"さいれんじはるな",
type:"desk",
price:800,
date: "",
img:"images/tora/haruna_desk_tyai.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"osinoko",
name:"【推しの子】 有馬かな HereDitailフィギュア",
search:"ありまかな",
type:"",
price:500,
date: "",
img:"images/osinoko/arima.jpg",
source:"https://www.sk-japan.co.jp/charatoru/topic"
},

{
series:"kurosituzi",
name:"アニメ「黒執事-寄宿学校編-」ちょこのせプレミアムフィギュア“葬儀屋（アンダーテイカー”",
search:"あんだーていかー",
type:"tyoko",
price:700,
date: "",
img:"images/kurosituzi/anda.jpg",
source:"https://segaplaza.jp/"
},

{
series:"mario",
name:"スーパーマリオ　ビッグアクションフィギュア　マリオ",
search:"まりお",
type:"",
price:500,
date: "",
img:"images/mario/mario.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"pokemon",
name:"ポケットモンスター くつろぎタイム ピカチュウ＆カビゴンフィギュア",
search:"かびごん　ぴかちゅう",
type:"",
price:700,
date: "",
img:"images/pokemon/kabigon.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"アニメ「鬼滅の刃」 VIBRATION STARS PLUS-猗窩座-",
search:"あかざ",
type:"vib",
price:1300,
date: "",
img:"images/kimetu/akaza_vib_plus.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kamitu",
name:"TVアニメ『神椿市建設中。』Luminasta“夜河世界”",
search:"よるかわせかい",
type: "lum",
price:500,
date: "",
img:"images/kamitu/sekai_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tomuzyeri",
name:"トムとジェリー フィグライフ! Jerry＆Tuffy vol.2",
search:"とむとじぇりー",
type:"figl",
price:400,
date: "",
img:"images/tomuzyeri/figl2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buruaka",
name:"ブルーアーカイブYumemirize“ノノミ”",
search:"ののみ",
type:"yume",
price:550,
date: "",
img:"images/buruaka/nonomi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kabi",
name:"『星のカービィ』 Kirby★Diary home ぬーどるストッパーフィギュア",
search:"かーびぃ",
type:"nusuto",
price:800,
date: "",
img:"images/kabi/kabi_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"beat",
name:"beatmania IIDX　フィギュアコレクション ツガル",
search:"つがる",
type:"",
price:600,
date: "",
img:"images/beat/tugaru.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"beat",
name:"beatmania IIDX　フィギュアコレクション シア",
search:"しあ",
type:"",
price:600,
date: "",
img:"images/beat/sia.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"voice",
name:"『東北ずん子・ずんだもんプロジェクト』 ずんだもん フィギュア 坂本アヒルver.～お歌ずんだもん～",
search:"",
type:"",
price:500,
date: "",
img:"images/voice/zundamon.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレン フィギュアライト フェルン-ゾルトラーク-",
search:"ふぇるん",
type:"",
price:600,
date: "",
img:"images/furi-ren/fe_rumu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"haruhi",
name:"『涼宮ハルヒの憂鬱』 BiCute Bunnies Figure ー 朝比奈みくる ー",
search:"あさひなみくる",
type:"bani",
price:500,
date: "",
img:"images/haruhi/mikuru_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"gorukamu",
name:"TVアニメ『ゴールデンカムイ』XrossLinkフィギュア“尾形百之助”",
search:"おがたひゃくのすけ",
type:"xros",
price:500,
date: "",
img:"images/gorukamu/ogata_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gorukamu",
name:"TVアニメ『ゴールデンカムイ』XrossLinkフィギュア“土方歳三”",
search:"ひじかたとしぞう",
type:"xros",
price:500,
date: "",
img:"images/gorukamu/hizikata_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gorukamu",
name:"TVアニメ『ゴールデンカムイ』XrossLinkフィギュア“鯉登少尉”",
search:"こいとしょうい",
type:"xros",
price:500,
date: "",
img:"images/gorukamu/koito_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gorukamu",
name:"TVアニメ『ゴールデンカムイ』XrossLinkフィギュア“月島軍曹”",
search:"つきしまぐんそう",
type:"xros",
price:500,
date: "",
img:"images/gorukamu/tukisima_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gorukamu",
name:"TVアニメ『ゴールデンカムイ』XrossLinkフィギュア“鶴見中尉”",
search:"つるみちゅうい",
type:"xros",
price:500,
date: "",
img:"images/gorukamu/turumi_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"toho",
name:"東方Project　ゆっくり風デフォルメフィギュア 魂魄妖夢",
search:"こんぱくようむ",
type:"",
price:600,
date: "",
img:"images/toho/youmu.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"toho",
name:"東方Project　ゆっくり風デフォルメフィギュア 十六夜咲夜",
search:"さくや",
type:"",
price:600,
date: "",
img:"images/toho/sakuya.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"uru",
name:"ウルトラマンメビウス 英雄勇像 ウルトラマンメビウス メビウスバーニングブレイブ",
search:"うるとらまんめびうす",
type:"eiyu",
price:800,
date: "",
img:"images/uru/mebi_eiyu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aimasu",
name:"学園アイドルマスター ESPRESTO-Sweet moment-十王星南",
search:"じゅうおうせな",
type:"esp",
price:550,
date: "",
img:"images/aimasu/sena_es.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"omori",
name:"OMORI おすわりフィギュア-バジル-",
search:"ばじる",
type:"",
price:900,
date: "",
img:"images/omori/baziru.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpan",
name:"ワンパンマン ジオラマフィギュア-サイタマ-",
search:"さいたま",
type:"",
price:600,
date: "",
img:"images/wanpan/saitama_ziorama.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"haikyu",
name:"ハイキュー!! ポージングフィギュア-及川 徹-",
search:"おいかわとおる",
type:"",
price:400,
date: "",
img:"images/haikyu/oikawa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"-NARUTO 72 series- 26＆27 VIBRATION STARS-UZUMAKI NARUTO & UCHIHA SASUKE-",
search:"うちはサスケ",
type:["vib", "72"],
price:1000,
date: "",
img:"images/naruto/sasuke_vib_naru.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース BATTLE RECORD COLLECTION-SHANKS-SPECIAL ver.",
search:"シャンクス",
type:"bato",
price:600,
date: "",
img:"images/wanpi/syankusu_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kurosituzi",
name:"アニメ「黒執事-寄宿学校編-」 ちょこのせプレミアムフィギュア“セバスチャン・ミカエリス”",
search:"せばすちゃん",
type:"tyoko",
price:700,
date: "",
img:"images/kurosituzi/sebasutyan.jpg",
source:"https://segaplaza.jp/"
},

{
series:"mar",
name:"MARVELLuminasta“ヴェノム～キング・イン・ブラック～”",
search:"",
type: "lum",
price:800,
date: "",
img:"images/mar/venomu.jpg",
source:"https://segaplaza.jp/"
},

{
series:"osinoko",
name:"【推しの子】　１／７スケールフィギュア　アクア",
search:"あくあ",
type:"",
price:550,
date: "",
img:"images/osinoko/akua.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"osinoko",
name:"【推しの子】　１／７スケールフィギュア　ルビー",
search:"るびー",
type:"",
price:550,
date: "",
img:"images/osinoko/rubi.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Combination Battle-うちはサスケ-",
search:"うちはさすけ",
type:"combi",
price:900,
date: "",
img:"images/naruto/sasuke_combi3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"togen",
name:"桃源暗鬼　無陀野無人　28Fig",
search:"むだのないと",
type:"",
price:900,
date: "",
img:"images/togen/mudano.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦懐玉・玉折Yumemirize“五条悟”",
search:"ごじょうさとる",
type:"yume",
price:1200,
date: "",
img:"images/zyuzyutu/gozyo_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"garukura",
name:"ガールズバンドクライXStellar“井芹仁菜”",
search:"いせりにな",
type:"xs",
price:1000,
date: "",
img:"images/garukura/iseri_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 Coreful フィギュア 喜多川海夢 〜水着ver.〜",
search:"きたがわまりん",
type:"core",
price:800,
date: "",
img:"images/kisekoi/marin_mizugi.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 ぬーどるストッパーフィギュア ー 甘露寺蜜璃×クラフトホリック ー ラウンドワン限定",
search:"かんろじみつり",
type:"nusuto",
price:1500,
date: "",
img:"images/kimetu/kanrozi_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"zyuzyutu",
name:"アニメ『呪術廻戦』5周年 Luminasta“乙骨憂太”",
search:"おっこつゆうた",
type: "lum",
price:1000,
date: "",
img:"images/zyuzyutu/otukotu_rauwan.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tora",
name:"『To LOVEる-とらぶる-ダークネス』 Desktop Cute フィギュア 古手川唯 ～ルームウェアver.～",
search:"こてがわゆい",
type:"desk",
price:700,
date: "",
img:"images/tora/yui_desk.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"oba",
name:"『オーバーロード』 Desktop Cute フィギュア アルベド 〜ナースver.〜",
search:"あるべど",
type:"desk",
price:800,
date: "",
img:"images/oba/nasu_desk.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"oba",
name:"『オーバーロード』 Coreful フィギュア アルベド ～レースクイーンver.～",
search:"あるべど",
type:"core",
price:800,
date: "",
img:"images/oba/resingu.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 写輪眼ルームライト",
search:"はたけかかし　はたけカカシ　しゃりんがん",
type:"",
price:800,
date: "",
img:"images/naruto/kakasi_rumu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 写輪眼ルームライト",
search:"うちはさすけ　うちはサスケ　しゃりんがん",
type:"",
price:800,
date: "",
img:"images/naruto/sasuke_rumu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 写輪眼ルームライト",
search:"うちはいたち　うちはイタチ　しゃりんがん",
type:"",
price:800,
date: "",
img:"images/naruto/itati_rumu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"ryotu",
name:"『こちら葛飾区亀有公園前派出所』 BiCute Bunnies Figure ー 秋本麗子 ー",
search:"あきもとれいこ",
type:"bani",
price:800,
date: "",
img:"images/ryotu/reiko.jpg",
source:"https://charahiroba.com/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編 リムル様 大きなソフビフィギュア",
search:"りむる",
type:"",
price:700,
date: "",
img:"images/tensura/rimuru_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"motiduki",
name:"ドカ食いダイスキ！ もちづきさん　走る！ もちづきさんフィギュア",
search:"もちづき",
type:"",
price:600,
date: "",
img:"images/motiduki/motiduki_fuku.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"miku",
name:"初音ミク BANPRESTO EVOLVE Clearluxe-EmeraldGem-フィギュア",
search:"はつねみく",
type:"bpev",
price:700,
date: "",
img:"images/miku/clear.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"3年Z組銀八先生 デスクフィギュア-土方十四郎-",
search:"ひじかたとうしろう",
type: "",
price:1200,
date: "",
img:"images/gintama/hizikata.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"3年Z組銀八先生 デスクフィギュア-高杉晋助-",
search:"たかすぎしんすけ",
type: "",
price:1000,
date: "",
img:"images/gintama/taka.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"pro",
name:"「劇場版プロジェクトセカイ壊れたセカイと歌えないミク」Luminasta“開かれた窓のセカイの初音ミク”",
search:"ひらかれたまどのせかいのはつねみく",
type: "ddc",
price:800,
date: "",
img:"images/pro/hirakareta.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレン　Coreful フィギュア　フリーレン～ドレスver.～",
search:"ふりーれん",
type:"core",
price:700,
date: "",
img:"images/furi-ren/furi_doresu.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"tora",
name:"『To LOVEる―とらぶる―ダークネス』 BiCute Bunnies Figure ー モモ・ベリア・デビルーク ー",
search:"もも",
type:"bani",
price:500,
date: "",
img:"images/tora/momo_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Memorable Saga-うちはサスケ-Ⅱ",
search:"うちはさすけ",
type:"memo",
price:1200,
date: "",
img:"images/naruto/sasuke2_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレンLuminasta“フリーレン”～メイド服～",
search:"ふりーれん",
type:"lum",
price:1200,
date: "",
img:"images/furi-ren/furi_meido.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kaizyu",
name:"怪獣８号 Grandista-怪獣８号-（日比野カフカver.）",
search:"かいじゅうはちごう",
type:"gra",
price:500,
date: "",
img:"images/kaizyu/8go_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"mar",
name:"MARVELLuminasta“デッドプール”Ver.2",
search:"でっどぷーる",
type: "lum",
price:600,
date: "",
img:"images/mar/dedo.jpg",
source:"https://segaplaza.jp/"
},

{
series:"spy",
name:"SPY×FAMILY DXF-ヨル・フォージャー-rose flower",
search:"よるふぉーじゃー",
type:"",
price:900,
date: "",
img:"images/spy/ibarahime.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"sanrio",
name:"Netflixシリーズ「My Melody & Kuromi」 Fluffy Puffy～My Melody & Kuromi～",
search:"まいめろ　マイメロ",
type: "ful",
price:600,
date: "",
img:"images/sanrio/maimero_flu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア THE EVIL VILLAINS-PLUS-HIMIKO TOGAⅡ",
search:"とがひみこ　トガヒミコ",
type:"evi",
price:500,
date: "",
img:"images/hiro/toga2_evi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース メガワールドコレクタブルフィギュア-バーソロミュー・くま-",
search:"ばーそろーみゅーくま",
type:"wcf",
price:600,
date: "",
img:"images/wanpi/kuma2_wcf.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"mar",
name:"『MARVEL』 ACT/CUTプレミアムフィギュア “ソー”",
search:"そー",
type:"",
price:500,
date: "",
img:"images/mar/so.jpg",
source:"https://segaplaza.jp/"
},

{
series:"aoeku",
name:"青の祓魔師島根啓明結社篇 XrossLinkフィギュア“奥村燐”",
search:"おくむらりん",
type:"xros",
price:300,
date: "",
img:"images/aoeku/rin_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"yaiba",
name:"真･侍伝YAIBAちょこのせプレミアムフィギュア “峰さやか”",
search:"みねさやか",
type:"tyoko",
price:300,
date: "",
img:"images/yaiba/sayaka.jpg",
source:"https://segaplaza.jp/"
},

{
series:"yaiba",
name:"真･侍伝YAIBAちょこのせプレミアムフィギュア “鉄刃”",
search:"くろがねやいば",
type:"tyoko",
price:300,
date: "",
img:"images/yaiba/yaiba.jpg",
source:"https://segaplaza.jp/"
},

{
series:"buruaka",
name:"TVアニメ『黒岩メダカに私の可愛いが通じない』Yumemirize“川井モナ”",
search:"かわいもな",
type:"yume",
price:400,
date: "",
img:"images/medaka/mona.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kamitu",
name:"神椿市建設中。　1/7スケールフィギュア　夜河世界",
search:"よるかわせかい",
type:"",
price:200,
date: "",
img:"images/kamitu/sekai.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"kamitu",
name:"神椿市建設中。　1/7スケールフィギュア　森先化歩",
search:"もりさきかふ",
type:"",
price:200,
date: "",
img:"images/kamitu/kafu.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 EFFECTREME-DEIDARA-",
search:"でいだら　デイダラ",
type:"eff",
price:1600,
date: "",
img:"images/naruto/deidara_eff.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 EFFECTREME-SASORI-",
search:"さそり　サソリ",
type:"eff",
price:1000,
date: "",
img:"images/naruto/sasori_eff.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 EFFECTREME-UCHIHA ITACHI-Ⅱ",
search:"うちはいたち　うちはイタチ",
type:"eff",
price:1400,
date: "",
img:"images/naruto/itati_eff.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース BATTLE RECORD COLLECTION-MONKEY.D.LUFFYⅡ-SPECIAL",
search:"るふぃ　ルフィ",
type:"bato",
price:700,
date: "",
img:"images/wanpi/rufi_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦Luminasta“五条悟”虚式「茈」",
search:"ごじょうさとる",
type: "lum",
price:1800,
date: "",
img:"images/zyuzyutu/murasaki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"rezero",
name:"Re:ゼロから始める異世界生活 -Relax time-レム Sweet Angel ver.",
search:"れむ",
type:"",
price:1500,
date: "",
img:"images/rezero/remu_tensi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"oba",
name:"オーバーロード アルベドフィギュア",
search:"あるべど",
type:"",
price:800,
date: "",
img:"images/oba/arubedo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Figuno-UZUMAKI NARUTO ＆ UCHIHA SASUKE-",
search:"うずまきなると　うずまきナルト",
type:"figuno",
price:500,
date: "",
img:"images/naruto/naruto_figuno.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"holo",
name:"ホロライブ #hololive IF -Relax time-博衣こより",
search:"はくいこより",
type:"relax",
price:400,
date: "",
img:"images/holo/koyori_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buruaka",
name:"ブルーアーカイブYumemirize“シロコ”",
search:"しろこ",
type:"yume",
price:600,
date: "",
img:"images/buruaka/siroko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"rosidere",
name:"TVアニメ『時々ボソッとロシア語でデレる隣のアーリャさん』 GLITTER&GLAMOURS アーリャ バニーver.",
search:"あーりゃ",
type:"gli",
price:500,
date: "",
img:"images/rosidere/arya_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tora",
name:"To LOVEる-とらぶる-ダークネス GLITTER&GLAMOURS ネメシス",
search:"ねめしす",
type:"gli",
price:400,
date: "",
img:"images/tora/neme_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"holo",
name:"ホロライブ #hololive IF -Relax time-鷹嶺ルイ",
search:"たかねるい",
type:"relax",
price:350,
date: "",
img:"images/holo/rui_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"haikyu",
name:"アニメ「ハイキュー!!」ハイプレミアムフィギュア“黒尾鉄朗”",
search:"くろおてつろう",
type: "hi",
price:500,
date: "",
img:"images/haikyu/kuro_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"haikyu",
name:"アニメ「ハイキュー!!」ハイプレミアムフィギュア“孤爪研磨”",
search:"こづめけんま",
type: "hi",
price:600,
date: "",
img:"images/haikyu/kodume_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"アニメ「鬼滅の刃」 HYOKOFIG-竈門禰豆子-",
search:"かまどねずこ",
type:"",
price:2100,
date: "",
img:"images/kimetu/nezuko_hyoko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"アニメ「鬼滅の刃」 HYOKOFIG-童磨-",
search:"どうま",
type:"",
price:1800,
date: "",
img:"images/kimetu/doma_hyoko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nia",
name:"『NieR:Automata Ver1.1a』 ぬーどるストッパーフィギュア ー 2B ー",
search:"2びー",
type:"nusuto",
price:900,
date: "",
img:"images/nia/nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"sanrio",
name:"サンリオキャラクターズ なかよしメモリーズ～ハンギョドン＆ポチャッコ～",
search:"はんぎょどん",
type: "nakayosi",
price:500,
date: "",
img:"images/sanrio/hangyo_potya.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』 SOFVIMATES～ターボババア(招き猫)～",
search:"たーぼばばあ",
type:"sof",
price:600,
date: "",
img:"images/dandadan/babaa_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"fate",
name:"Fate/GrandOrderLuminasta“英霊催装：アビゲイル・ウィリアムズ”",
search:"あびげいるうぃりあむず",
type:"lum",
price:500,
date: "",
img:"images/fate/abige.jpg",
source:"https://segaplaza.jp/"
},

{
series:"rezero",
name:"『Re:ゼロから始める異世界生活』 Exc∞d Creative Figure -ラム・鳥籠ドレス- ラウンドワン限定",
search:"らむ",
type: "ex",
price:500,
date: "",
img:"images/rezero/ramu_ex.jpg",
source:"https://charahiroba.com/"
},

{
series:"rezero",
name:"『Re:ゼロから始める異世界生活』 Exc∞d Creative Figure -レム・鳥籠ドレス- ラウンドワン限定",
search:"れむ",
type: "ex",
price:500,
date: "",
img:"images/rezero/remu_ex.jpg",
source:"https://charahiroba.com/"
},

{
series:"db",
name:"ドラゴンボールGT SOLID EDGE WORKS-THE出陣-超サイヤ人4ベジータ",
search:"べじーた",
type:"syutu",
price:650,
date: "",
img:"images/db/bezi4_syutu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"アニメ『呪術廻戦』5周年​ Luminasta“狗巻棘”",
search:"いぬまきとげ",
type: "lum",
price:1000,
date: "",
img:"images/zyuzyutu/toge_rauwan.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"アニメ「鬼滅の刃」 GLITTER&GLAMOURS-KANAO TSUYURI-",
search:"つゆりかなを　栗花落カナヲ",
type:"gli",
price:800,
date: "",
img:"images/kimetu/kanawo_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"アニメ「鬼滅の刃」 フィギュア-鬼ノ装-拾肆の型",
search:"どうま　童磨",
type: "oni",
price:1500,
date: "",
img:"images/kimetu/doma_oni.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"アニメ「鬼滅の刃」 VIBRATION STARS-童磨-",
search:"どうま",
type:"vib",
price:1600,
date: "",
img:"images/kimetu/doma_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"holo",
name:"ホロライブ #hololive IF -Relax time-ロボ子さん",
search:"ろぼこさん",
type:"relax",
price:300,
date: "",
img:"images/holo/roboko_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"holo",
name:"ホロライブ #hololive IF -Relax time-沙花叉クロヱ",
search:"さかまたくろえ",
type:"relax",
price:350,
date: "",
img:"images/holo/kuroe_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース メガワールドコレクタブルフィギュア-バーソロミュー・くま-父の拳",
search:"ばーそろーみゅーくま",
type:"wcf",
price:700,
date: "",
img:"images/wanpi/kuma_wcf.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"oba",
name:"オーバーロード BANPRESTO EVOLVE-Empress of Darkness-アルベドフィギュア",
search:"あるべど",
type:"bpev",
price:1000,
date: "",
img:"images/oba/aru_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレンLuminasta“ユーベル”～大体なんでも切る魔法～",
search:"ゆーべる",
type:"lum",
price:800,
date: "",
img:"images/furi-ren/yube_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレンLuminasta“フェルン”～一般攻撃魔法～",
search:"ふぇるん",
type:"lum",
price:500,
date: "",
img:"images/furi-ren/ferun_zoru.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレンYumemirize“フリーレン”～一眠り～",
search:"ふりーれん",
type:"yume",
price:1300,
date: "",
img:"images/furi-ren/furi_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"monsuto",
name:"モンスターストライク ESPRESTO-Ordinary chronicles-マサムネ",
search:"まさむね",
type:"esp",
price:200,
date: "",
img:"images/monsuto/masamune.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"monsuto",
name:"モンスターストライク ESPRESTO-Ordinary chronicles-ヤクモ",
search:"やくも",
type:"esp",
price:200,
date: "",
img:"images/monsuto/yakumo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"oba",
name:"オーバーロード -Relax time-アルベドRoll bandage ver.",
search:"あるべど",
type:"relax",
price:500,
date: "",
img:"images/oba/aru_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"uzaki",
name:"宇崎ちゃんは遊びたい！ω GLITTER&GLAMOURS 宇崎月 牛水着ver.",
search:"うざきつき",
type:"gli",
price:700,
date: "",
img:"images/uzaki/tuki_usi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 BiCute Pure Figure ー 喜多川海夢 ー",
search:"きたがわまりん",
type:"pure",
price:800,
date: "",
img:"images/kisekoi/marin_pure.jpg",
source:"https://charahiroba.com/"
},

{
series:"oba",
name:"『オーバーロード』 BiCute Dark Figure ー アルベド ー",
search:"あるべど",
type:"dark",
price:800,
date: "",
img:"images/oba/aru_dark.jpg",
source:"https://charahiroba.com/"
},

{
series:"tora",
name:"To LOVEる-とらぶる-ダークネス GLITTER&GLAMOURS 西連寺春菜",
search:"さいれんじはるな",
type:"gli",
price:400,
date: "",
img:"images/tora/haruna_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"TVアニメ「その着せ替え人形は恋をする」 ESPRESTO-Detailed Elegance-喜多川海夢 リズver.",
search:"りず",
type:"esp",
price:800,
date: "",
img:"images/kisekoi/rizu_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"rikorisu",
name:"リコリス・リコイル ESPRESTO-Aqua Twinkle-錦木千束",
search:"にしきぎちさと",
type:"esp",
price:450,
date: "",
img:"images/rikorisu/tisato_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"rikorisu",
name:"リコリス・リコイル ESPRESTO-Aqua Twinkle-井ノ上たきな",
search:"いのうえたきな",
type:"esp",
price:350,
date: "",
img:"images/rikorisu/takina_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"鬼滅の刃 Q posket petit vol.3",
search:"ときとうむいちろう　時透無一郎",
type:"qpos",
price:1400,
date: "",
img:"images/kimetu/tokito_qpos.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 KING OF ARTIST GOJO・GETO-懐玉・玉折-SPECIAL ver.",
search:"ごじょうさとる　五条悟",
type:"koa",
price:700,
date: "",
img:"images/zyuzyutu/gozyo_koa_sp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレン ルームライト-フリーレン-",
search:"ふりーれん",
type:"",
price:1200,
date: "",
img:"images/furi-ren/light.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 AMP＋ 喜多川海夢 フィギュア 〜ブラックロベリア ver.〜",
search:"ぶらっくろべりあ",
type:"amp",
price:500,
date: "",
img:"images/kisekoi/bura_amp.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS-HOSHIGAKI KISAME-",
search:"干柿鬼鮫　ほしがききさめ",
type:"vib",
price:1000,
date: "",
img:"images/naruto/kisame_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kusuri",
name:"薬屋のひとりごとちょこのせプレミアムフィギュア“猫猫”",
search:"まおまお",
type:"tyoko",
price:500,
date: "",
img:"images/kusuri/tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"soniko",
name:"『すーぱーそに子』 BiCute Bunnies Figure ーpink ver.ー",
search:"すーぱーそにこ",
type:"bani",
price:800,
date: "",
img:"images/soniko/bani_p.jpg",
source:"https://charahiroba.com/"
},

{
series:"kuresin",
name:"クレヨンしんちゃん ぐるぐるらくがきしんちゃん",
search:"",
type:"",
price:400,
date: "",
img:"images/kuresin/rakugaki.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 T-Most 喜多川海夢 フィギュア〜リズver.〜",
search:"りず",
type:"tmost",
price:800,
date: "",
img:"images/kisekoi/rizu_tmost.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 ぬーどるストッパーフィギュア ー レゼ ー",
search:"れぜ",
type:"nusuto",
price:3000,
date: "",
img:"images/tyen/reze_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 螺旋丸エフェクトライト～GiGOグループのお店限定～",
search:"らせんがん",
type: "",
price:1000,
date: "",
img:"images/naruto/rasengan.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 フィギュア うずまきナルト・波風ミナト～GiGOグループのお店限定～",
search:"なみかぜみなと",
type: "",
price:1200,
date: "",
img:"images/naruto/minato_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 フィギュア うずまきナルト・波風ミナト～GiGOグループのお店限定～",
search:"うずまきなると",
type: "",
price:1200,
date: "",
img:"images/naruto/naruto_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース DXF～THE GRANDLINE MEN～EXTRA DENJIRO",
search:"でんじろー　傳ジロー",
type:"dxf",
price:200,
date: "",
img:"images/wanpi/den.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 PANEL SPECTACLE～最強の兵ども～千手柱間",
search:"せんじゅはしらま",
type:"pane",
price:1000,
date: "",
img:"images/naruto/hasi_pane.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS-KILLER BEE-",
search:"びー　ビー",
type:"vib",
price:800,
date: "",
img:"images/naruto/be_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- VIBRATION STARS-GĀRA ＆ UCHIHA SASUKE-",
search:"があら　我愛羅",
type:"vib",
price:800,
date: "",
img:"images/naruto/gara_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"sakamoto",
name:"SAKAMOTO DAYS VIBRATION STARS-楽-",
search:"がく",
type:"vib",
price:600,
date: "",
img:"images/sakamoto/gaku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレンLuminasta“フェルン”～花畑～",
search:"ふぇるん",
type:"lum",
price:500,
date: "",
img:"images/furi-ren/fe_lum_hana.jpg",
source:"https://segaplaza.jp/"
},

{
series:"db",
name:"ドラゴンボールGT SOLID EDGE WORKS-THE出陣-超サイヤ人4孫悟空",
search:"そんごくう",
type:"syutu",
price:650,
date: "",
img:"images/db/goku4_syutu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hokuto",
name:"『北斗の拳』 ぬーどるストッパーフィギュア ー ジャギ ー",
search:"じゃぎー",
type:"nusuto",
price:400,
date: "",
img:"images/hokuto/zyagi.jpg",
source:"https://charahiroba.com/"
},

{
series:"suto",
name:"ストリートファイター6ちょこのせプレミアムフィギュア“リュウ”",
search:"りゅう",
type:"tyoko",
price:800,
date: "",
img:"images/suto/ryu_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア THE AMAZING HEROES-PLUS-KATSUKI BAKUGO Ⅱ",
search:"ばくごうかつき　爆豪勝己",
type:"ame",
price:1000,
date: "",
img:"images/hiro/bakugo2_ame.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kusuri",
name:"TVアニメ『薬屋のひとりごと』 猫猫 フィギュア～ポンチョ～",
search:"まおまお",
type:"",
price:1000,
date: "",
img:"images/kusuri/pontyo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yugi",
name:"アニメ「遊☆戯☆王」シリーズ　Monsters LEGION ブラック・ローズ・ドラゴン",
search:"ぶらっくろーずどらごん",
type:"mon",
price:450,
date: "",
img:"images/yugi/bura.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"db",
name:"ドラゴンボール History Box 亀仙人",
search:"かめせんにん",
type: "his",
price:1000,
date: "",
img:"images/db/kame_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア Combination Battle-IZUKU MIDORIYA-終章",
search:"みどりやいずく　でく　緑谷出久",
type:"combi",
price:800,
date: "",
img:"images/hiro/deku_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア Combination Battle-TOMURA SHIGARAKI-終章",
search:"しがらきとむら　死柄木弔",
type:"combi",
price:500,
date: "",
img:"images/hiro/siga_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"TVアニメ「その着せ替え人形は恋をする」Yumemirize“喜多川海夢”",
search:"きたがわまりん",
type:"yume",
price:800,
date: "",
img:"images/kisekoi/marin_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST SILVERS.RAYLEIGH",
search:"れいりー　レイリー",
type:"koa",
price:700,
date: "",
img:"images/wanpi/reiri_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ MATCH MAKERS 魔人ブウ(純粋)（VS超サイヤ人3孫悟空）",
search:"ぶう",
type:"mat",
price:450,
date: "",
img:"images/db/bu_mat3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nikke",
name:"勝利の女神：NIKKEYumemirize“アニス”",
search:"あにす",
type:"yume",
price:600,
date: "",
img:"images/nikke/anisu_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kaizyu",
name:"怪獣８号XStellar“鳴海弦”",
search:"なるみげん",
type:"xs",
price:800,
date: "",
img:"images/kaizyu/narumi_xs.jpg",
source:"https://segaplaza.jp/"
},


{
series:"sao",
name:"『ソードアート・オンライン』 BiCute Dark Figure ー リーファ ー",
search:"りーふぁ",
type:"dark",
price:800,
date: "",
img:"images/sao/rifa_dark.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"ぬーどるストッパーフィギュア Flower Fairyー椿ー",
search:"つばき　はつねみく",
type:"nusuto",
price:700,
date: "",
img:"images/miku/tubaki.jpg",
source:"https://charahiroba.com/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Combination Battle2-うちはサスケ-",
search:"うちはさすけ",
type:"combi",
price:800,
date: "",
img:"images/naruto/sasuke_combi2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Combination Battle2-うずまきナルト-",
search:"うずまきなると",
type:"combi",
price:800,
date: "",
img:"images/naruto/naruto_combi2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"ガンダム45周年×初音ミク フィギュア ザクぐるみ [初音ミクVer.]",
search:"ざく　はつねみく",
type:"",
price:1200,
date: "",
img:"images/miku/zaku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア MAXIMATIC KATSUKI BAKUGO Ⅱ",
search:"ばくごうかつき　爆豪勝己",
type:"ma",
price:1500,
date: "",
img:"images/hiro/baku2_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"BORUTO-ボルト- NARUTO NEXT GENERATIONS 忍界造形列伝-うずまきボルト-",
search:"うずまきぼると",
type: "ninkai",
price:600,
date: "",
img:"images/naruto/boru_ninkai.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nigoriri",
name:"2.5次元の誘惑 GLITTER&GLAMOURS ミリエラ 天使空挺隊ver.",
search:"みりえら",
type:"gli",
price:350,
date: "",
img:"images/nigoriri/miriera_eisei.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"king",
name:"キングダム Grandista-騰-",
search:"とう",
type:"gra",
price:400,
date: "",
img:"images/king/to_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gorukamu",
name:"TVアニメ『ゴールデンカムイ』XrossLinkフィギュア“アシㇼパ”",
search:"あしりぱ",
type:"xros",
price:600,
date: "",
img:"images/gorukamu/asi_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gorukamu",
name:"TVアニメ『ゴールデンカムイ』XrossLinkフィギュア“杉元佐一”",
search:"すぎもとさいち",
type:"xros",
price:700,
date: "",
img:"images/gorukamu/sugimoto_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"buruaka",
name:"ブルーアーカイブYumemirize“ホシノ”",
search:"ほしの",
type:"yume",
price:600,
date: "",
img:"images/buruaka/hosino.jpg",
source:"https://segaplaza.jp/"
},

{
series:"db",
name:"ドラゴンボールZ MATCH MAKERS マイティマスク（VS人造人間18号VSミスター・サタン）",
search:"まいてぃますく",
type:"mat",
price:600,
date: "",
img:"images/db/masuku_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ MATCH MAKERS 人造人間18号VSミスター・サタン（VSマイティマスク）",
search:"じんぞうにんげん18ごう",
type:"mat",
price:600,
date: "",
img:"images/db/18go_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dandadan",
name:"『ダンダダン』 ぬーどるストッパーフィギュア ー ターボババア(招き猫) ー",
search:"たーぼばばあ",
type:"nusuto",
price:500,
date: "",
img:"images/dandadan/babaa_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"haikyu",
name:"『ハイキュー!!』 ハイプレミアムフィギュア “影山飛雄”",
search:"かげやまとびお",
type: "hi",
price:500,
date: "",
img:"images/haikyu/tobio_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"spy",
name:"SPY×FAMILY スマホスタンド～アーニャ・フォージャー～",
search:"あーにゃふぉーじゃー",
type:"",
price:400,
date: "",
img:"images/spy/anya_stando.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kusuri",
name:"薬屋のひとりごと おおきなSOFVIMATES～猫猫～",
search:"まおまお",
type:"sof",
price:600,
date: "",
img:"images/kusuri/maomao_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dezimon",
name:"デジモンアドベンチャー SOFVIMATES～パタモン～",
search:"ぱたもん",
type:"sof",
price:600,
date: "",
img:"images/dezimon/patamon.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Desktop Cute フィギュア 断頭台のアウラ",
search:"あうら",
type:"desk",
price:500,
date: "",
img:"images/furi-ren/aura_desk.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"wanpi",
name:"ワンピース メガワールドコレクタブルフィギュア-モンキー・D・ルフィ VS ボルサリーノ-",
search:"るふぃ　にか　ニカ",
type:"wcf",
price:800,
date: "",
img:"images/wanpi/nika_wcf.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"ガンダム45周年×初音ミク BANPRESTO EVOLVE-GUNDAM Collaboration-フィギュア",
search:"がんだむ　はつねみく",
type:"bpev",
price:1000,
date: "",
img:"images/miku/gundam_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buruaka",
name:"ブルーアーカイブYumemirize“ムツキ”",
search:"むつき",
type:"yume",
price:600,
date: "",
img:"images/buruaka/mutuki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"buruaka",
name:"ブルーアーカイブYumemirize“アル”",
search:"ある",
type:"yume",
price:600,
date: "",
img:"images/buruaka/aru.jpg",
source:"https://segaplaza.jp/"
},

{
series:"wanpi",
name:"ワンピース THE出航LOGIA-PORTGAS.D.ACE-",
search:"えーす　エース",
type:"syukko",
price:800,
date: "",
img:"images/wanpi/ace_syukko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dandadan",
name:"Trio-Try-iT Figureーモモー",
search:"もも",
type:"trio",
price:600,
date: "",
img:"images/dandadan/momo_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"holo",
name:"ホロライブ #hololive IF -Relax time-大空スバル",
search:"おおぞらすばる",
type:"relax",
price:500,
date: "",
img:"images/holo/subaru_if.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"holo",
name:"ホロライブ #hololive IF -Relax time-白銀ノエル～だんちょむver.～",
search:"しろがねのえる",
type:"relax",
price:500,
date: "",
img:"images/holo/noeru_dantyomu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"マギアレコード 魔法少女まどか★マギカ外伝 Splash Girls 暁美ほむら",
search:"あけみほむら",
type:"",
price:1200,
date: "",
img:"images/madomagi/homura_sp.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"madomagi",
name:"マギアレコード 魔法少女まどか★マギカ外伝 Splash Girls 鹿目まどか",
search:"かなめまどか",
type:"",
price:1200,
date: "",
img:"images/madomagi/madoka_sp.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"mazyotabi",
name:"『魔女の旅々』 Zzz イレイナ",
search:"いれいな",
type:"",
price:700,
date: "",
img:"images/mazyotabi/zzz.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"sanrio",
name:"サンリオキャラクターズ おおきなSOFVIMATES～シナモロール お空のお星さまver.～",
search:"しなもろーる",
type: "sof",
price:600,
date: "",
img:"images/sanrio/sinamo_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"HUNTER×HUNTER HUNTING ARCHIVES クロロ-盗賊の極意-",
search:"くろろ",
type:"",
price:1100,
date: "",
img:"images/hant/kuroro.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"miku",
name:"『初音ミク×Rody』 AMP＋ フィギュア〜メルヘンver.〜",
search:"ろでぃ　はつねみく",
type:"amp",
price:1200,
date: "",
img:"images/miku/rody_meru.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"pro",
name:"プロジェクトセカイカラフルステージ！feat.初音ミク Desktop×DecorateCollections “誰もいないセカイの初音ミク”",
search:"だれもいないせかいのはつねみく",
type: "ddc",
price:700,
date: "",
img:"images/pro/daremo_ddc.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kusuri",
name:"TVアニメ『薬屋のひとりごと』ちょこのせプレミアムフィギュア “壬氏”",
search:"じんし",
type:"tyoko",
price:1100,
date: "",
img:"images/kusuri/zinsi_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"esi",
name:"『しぐれうい』 Trio-Try-iT Figure ー しぐれうい ー",
search:"",
type:"trio",
price:500,
date: "",
img:"images/esi/ui_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"esi",
name:"『Nachoneko』 Trio-Try-iT Figure ー Nachoneko ー",
search:"なちょねこ",
type:"trio",
price:800,
date: "",
img:"images/esi/natyo_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"pansuto",
name:"『New PANTY ＆ STOCKING with GARTERBELT』 BRILLIANT フィギュア ストッキング",
search:"すとっきんぐ",
type:"bri",
price:1800,
date: "",
img:"images/pansuto/suto_bri.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"oba",
name:"『オーバーロード』 BiCute Bunnies Figure ー ナーベラル ー",
search:"なーべらる",
type:"bani",
price:1000,
date: "",
img:"images/oba/nabe_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"oba",
name:"オーバーロード　１/７スケールフィギュア　アルベド",
search:"あるべど",
type:"",
price:800,
date: "",
img:"images/oba/aru_el.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"rezero",
name:"『Re:ゼロから始める異世界生活』 BiCute Bunnies Figure ー レム・bicolor ー",
search:"れむ",
type:"bani",
price:900,
date: "",
img:"images/rezero/remu_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"esi",
name:"rurudo ESPRESTO-Sleepy Bunny-シュガー",
search:"るるど　しゅがー",
type:"esp",
price:1600,
date: "",
img:"images/esi/syuga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険 ダイヤモンドは砕けない Mometria 東方仗助",
search:"ひがしかたじょうすけ",
type:"mome",
price:1000,
date: "",
img:"images/zyozyo/zyosuke.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"sao",
name:"『ソードアート・オンライン』 BiCute Bunnies Figure ー シノン ホワイトパールver. ー",
search:"しのん",
type:"bani",
price:500,
date: "",
img:"images/sao/sinon_bani_w.jpg",
source:"https://charahiroba.com/"
},

{
series:"oba",
name:"『オーバーロード』 BiCute Bunnies Figure ーアルベド・ブラックver.ー",
search:"あるべど",
type:"bani",
price:900,
date: "",
img:"images/oba/aru_bani_b.jpg",
source:"https://charahiroba.com/"
},

{
series:"oba",
name:"『オーバーロード』 BiCute Bunnies Figure ーシャルティア・レッドver.ー",
search:"しゃるてぃあ",
type:"bani",
price:500,
date: "",
img:"images/oba/syaru_bani_r.jpg",
source:"https://charahiroba.com/"
},

{
series:"oba",
name:"『オーバーロード』 BiCute Bunnies Figure ー シャルティア ー",
search:"しゃるてぃあ",
type:"bani",
price:500,
date: "",
img:"images/oba/syaru_bani_kon.jpg",
source:"https://charahiroba.com/"
},

{
series:"soniko",
name:"『すーぱーそに子』 BiCute Bunnies Figure ーRed ver.ー",
search:"すーぱーそにこ",
type:"bani",
price:500,
date: "",
img:"images/soniko/bani_r.jpg",
source:"https://charahiroba.com/"
},

{
series:"tyen",
name:"『チェンソーマン』 BiCute Bunnies Figure ー マキマ Red ver. ー ラウンドワン限定",
search:"まきま",
type:"bani",
price:2000,
date: "",
img:"images/tyen/makima_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"tyen",
name:"『チェンソーマン』 BiCute Bunnies Figure ー パワー Light Blue ver. ー ラウンドワン限定",
search:"ぱわー",
type:"bani",
price:1200,
date: "",
img:"images/tyen/pawa_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア SOFVIMATES～エンデヴァー～",
search:"えんで",
type: "sof",
price:1600,
date: "",
img:"images/hiro/en_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア SOFVIMATES～オールマイト～",
search:"おーるまいと",
type: "sof",
price:1300,
date: "",
img:"images/hiro/all_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア BRAVEGRAPH #1 vol.3",
search:"ばくごうかつき　爆豪勝己",
type: "",
price:800,
date: "",
img:"images/hiro/bakugo_seifuku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"チェンソーマン CHAIN SPIRITS vol.5",
search:"ちぇんそーまん",
type: "",
price:800,
date: "",
img:"images/tyen/tyen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"pro",
name:"プロジェクトセカイカラフルステージ！feat.初音ミク Desktop×DecorateCollections “ワンダーランドのセカイのKAITO”",
search:"かいと",
type: "ddc",
price:600,
date: "",
img:"images/pro/kaito_ddc.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 呪魂ノ型-禪院真希＆西宮桃-",
search:"ぜんいんまき",
type: "zyukon",
price:500,
date: "",
img:"images/zyuzyutu/maki_zyukon.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"鬼滅の刃 フィギュア-鬼ノ装-[半天狗・憎珀天・玉壺]",
search:"ぎょっこ",
type: "oni",
price:1400,
date: "",
img:"images/kimetu/gyokko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dr",
name:"Dr.STONE FIGURE of STONE WORLD-造形の科学-SPECIAL",
search:"ななみりゅうすい",
type: "",
price:1300,
date: "",
img:"images/dr/nanami.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 ぬーどるストッパーフィギュア ー キルア ー",
search:"きるあ",
type:"nusuto",
price:2400,
date: "",
img:"images/hant/kirua_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"zyuzyutu",
name:"呪術廻戦懐玉・玉折Luminasta“伏黒甚爾”臨戦",
search:"ふしぐろとうじ",
type: "lum",
price:1300,
date: "",
img:"images/zyuzyutu/touzi_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tyen",
name:"『チェンソーマン』 Exc∞d Creative Figure ーマキマー",
search:"まきま",
type: "ex",
price:4000,
date: "",
img:"images/tyen/makima_ex.jpg",
source:"https://charahiroba.com/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 ぬーどるストッパーフィギュア ーフリーレンー",
search:"ふりーれん",
type:"nusuto",
price:800,
date: "",
img:"images/furi-ren/furi_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"umamusume",
name:"『ウマ娘 プリティーダービー』 マンハッタンカフェ・アグネスタキオン フィギュア",
search:"まんはったんかふ",
type:"",
price:700,
date: "",
img:"images/umamusume/kafe.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"umamusume",
name:"『ウマ娘 プリティーダービー』 Trio－Try－iT Figure ー マンハッタンカフェ ー",
search:"まんはったんかふ",
type:"trio",
price:2000,
date: "",
img:"images/umamusume/kafe_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"zyuzyutu",
name:"アニメ『呪術廻戦』5周年 Luminasta“五条悟”",
search:"ごじょうさとる",
type: "lum",
price:1200,
date: "",
img:"images/zyuzyutu/gozyo_rauwan.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"アニメ『呪術廻戦』5周年 Luminasta“夏油傑”",
search:"げとうすぐる",
type: "lum",
price:1000,
date: "",
img:"images/zyuzyutu/geto_rauwan.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"アニメ『呪術廻戦』5周年Luminasta“伏黒恵”",
search:"ふしぐろめぐみ",
type: "lum",
price:900,
date: "",
img:"images/zyuzyutu/fusiguro_rauwan.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"アニメ『呪術廻戦』5周年Luminasta“虎杖悠仁”",
search:"いたどりゆうじ",
type: "lum",
price:900,
date: "",
img:"images/zyuzyutu/itadori_rauwan.jpg",
source:"https://segaplaza.jp/"
},

{
series:"voice",
name:"重音テトちょこのせプレミアムフィギュア“重音テト”",
search:"かさねてと",
type:"tyoko",
price:800,
date: "",
img:"images/voice/teto_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"hant",
name:"HUNTER×HUNTER Memorable Saga Special-ヒソカ-",
search:"ひそか",
type:"memo",
price:1300,
date: "",
img:"images/hant/hisoka_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"初音ミクシリーズLuminasta“初音ミク”クリスマス2025",
search:"はつねみく　くりすます",
type:"lum",
price:500,
date: "",
img:"images/miku/kuri_2025.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tensura",
name:"転生したらスライムだった件 ESPRESTO-Majestic Wings-リムル=テンペスト",
search:"りむるてんぺすと",
type:"esp",
price:800,
date: "",
img:"images/tensura/rimuru_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース 戦光絶景-DRACULE.MIHAWK-",
search:"みほーく　ミホーク",
type:"senko",
price:600,
date: "",
img:"images/wanpi/miho_senko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース 戦光絶景-RORONOA ZORO-",
search:"ろろのあぞろ　ロロノアゾロ",
type:"senko",
price:600,
date: "",
img:"images/wanpi/zoro_senko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"HUNTER×HUNTER VIBRATION STARS-ネフェルピトー-",
search:"ねふぇるぴとー",
type:"vib",
price:500,
date: "",
img:"images/hant/pito_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミアTHEMOVIEユアネクストXrossLinkフィギュア“爆豪勝己”",
search:"ばくごうかつき",
type:"xros",
price:1000,
date: "",
img:"images/hiro/baku_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tyen",
name:"BiCute Bunnies Figureーレゼー",
search:"れぜ",
type:"bani",
price:2500,
date: "",
img:"images/tyen/reze_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"gozira",
name:"東宝怪獣シリーズ 怪獣咆哮撃 ゴジラ（2001）",
search:"ごじら",
type: "hoko",
price:550,
date: "",
img:"images/gozira/gozira_hoko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nyanko",
name:"にゃんこ大戦争 にゃんこ軍団出陣フィギュア～ネコムート～",
search:"ねこむーと",
type: "",
price:500,
date: "",
img:"images/nyanko/muto.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zunda",
name:"『東北ずん子・ずんだもんプロジェクト』 ずんだもん フィギュア 坂本アヒルver.～お歌ずんだもん～",
search:"",
type:"",
price:500,
date: "",
img:"images/zunda/zunda.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦懐玉・玉折FIGURIZMα“五条悟”術式反転「赫」",
search:"ごじょうさとる",
type:"fig",
price:1000,
date: "",
img:"images/zyuzyutu/gozyo_fig_aka.jpg",
source:"https://segaplaza.jp/"
},

{
series:"yugi",
name:"遊☆戯☆王デュエルモンスターズ　ウィジャ盤　メモスタンドフィギュア",
search:"うぃじゃばん",
type:"",
price:400,
date: "",
img:"images/yugi/wizya.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"disny",
name:"ディズニーキャラクター おおきなSOFVIMATES ～BAYMAX～",
search:"べいまっくす",
type: "sof",
price:400,
date: "",
img:"images/disny/bei_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kure",
name:"『クレバテス』 Trio-Try-iT Figure​ ー クレン＆ルナ ー",
search:"くれん　るな",
type:"trio",
price:300,
date: "",
img:"images/kure/kuren.jpg",
source:"https://charahiroba.com/"
},

{
series:"rinsaku",
name:"ぬーどるストッパーフィギュアー和栗薫子ー",
search:"わぐりかおるこ",
type:"nusuto",
price:1500,
date: "",
img:"images/rinsaku/kaoruko.jpg",
source:"https://charahiroba.com/"
},

{
series:"kusuri",
name:"TVアニメ『薬屋のひとりごと』 猫猫 フィギュア～街歩き～",
search:"まおまお",
type:"",
price:900,
date: "",
img:"images/kusuri/maomao_mati.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"oba",
name:"『オーバーロード』 Desktop Cute フィギュア シャルティア ～水着ver.～Renewal",
search:"しゃるてぃあ",
type:"desk",
price:500,
date: "",
img:"images/oba/syaru_desk_mizu_re.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦FIGURIZMα“八握剣異戒神将魔虚羅”",
search:"まこら",
type:"fig",
price:2000,
date: "",
img:"images/zyuzyutu/mako_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"rerugan",
name:"『とある科学の超電磁砲』 Desktop Cute フィギュア 御坂美琴 〜チャイナドレスver.〜",
search:"みさかみこと",
type:"desk",
price:500,
date: "",
img:"images/rerugan/mikoto_tyai.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"eva",
name:"ヱヴァンゲリヲン新劇場版ハイプレミアムフィギュア“レイ”制服Ver.",
search:"あやなみれい",
type: "hi",
price:800,
date: "",
img:"images/eva/ayanami_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 GLITTER&GLAMOURS-REZE-",
search:"れぜ　レゼ",
type:"gli",
price:2500,
date: "",
img:"images/tyen/reze_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"mazyan",
name:"『麻雀ファイトガール』 フィギュアコレクション グリム・アロエ バニー",
search:"ぐりむあろえ",
type:"",
price:1200,
date: "",
img:"images/mazyan/aroe.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"mazyan",
name:"『麻雀ファイトガール』 フィギュアコレクション ミツモト・ココア サキュバスチアコス",
search:"みつもとここあ",
type:"",
price:1200,
date: "",
img:"images/mazyan/kokoa.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"mazyan",
name:"『麻雀ファイトガール』 フィギュアコレクション ミツモト・ダイア サキュバスチアコス",
search:"みつもとだいあ",
type:"",
price:1200,
date: "",
img:"images/mazyan/daia.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"kusuri",
name:"TVアニメ『薬屋のひとりごと』 ちょこのせプレミアムフィギュア“猫猫” 月精Ver.",
search:"まおまお",
type:"tyoko",
price:500,
date: "",
img:"images/kusuri/gessei_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 XStellar “シュタルク” ～雪遊び～",
search:"しゅたるく",
type:"xs",
price:600,
date: "",
img:"images/furi-ren/syuta_xs_yuki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア ちあぴこ～みどりやいずく～",
search:"",
type:"",
price:2000,
date: "",
img:"images/hiro/deku_tia.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Desktop Cute フィギュア フリーレン 〜ルームウェアver.〜",
search:"ふりーれん",
type:"desk",
price:1100,
date: "",
img:"images/furi-ren/furi_rumu.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kuresin",
name:"クレヨンしんちゃん スーパービッグフィギュア～アクション仮面～",
search:"あくしょんかめん",
type:"",
price:700,
date: "",
img:"images/kuresin/akusyon.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yugi",
name:"『遊☆戯☆王シリーズ』 奈落の落とし穴 フィギュア付きダストボックス",
search:"ならくのおとしあな",
type:"",
price:500,
date: "",
img:"images/yugi/naraku.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"yugi",
name:"アニメ「遊☆戯☆王」シリーズ　Monsters LEGION オベリスクの巨神兵",
search:"おべりすく",
type:"mon",
price:1000,
date: "",
img:"images/yugi/obe.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"uzaki",
name:"『宇崎ちゃんは遊びたい！ω』 Desktop Cute フィギュア 宇崎月 ～浜辺で水着ver.～",
search:"うざきつき",
type:"desk",
price:800,
date: "",
img:"images/uzaki/tuki_desk.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"tora",
name:"『To LOVEる-とらぶる-ダークネス』 Aqua Float Girls フィギュア モモ",
search:"もも",
type:"aqua",
price:700,
date: "",
img:"images/tora/momo_aqua.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"wanpi",
name:"ワンピース 戦光絶景-BORSALINO-",
search:"きざる　ぼるさりーの　黄猿　ボルサリーノ",
type:"senko",
price:550,
date: "",
img:"images/wanpi/kizaru_senko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール SOFVIMATES～亀仙人(スーツスタイル)～",
search:"かめせんにん",
type: "sof",
price:1000,
date: "",
img:"images/db/kame_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール SOFVIMATES～クリリン(スーツスタイル)～",
search:"くりりん",
type: "sof",
price:1500,
date: "",
img:"images/db/kuri_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール SOFVIMATES～孫悟空(スーツスタイル)～",
search:"そんごくう",
type: "sof",
price:1500,
date: "",
img:"images/db/goku_sof.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 Desktop Cute フィギュア 乾紗寿叶 〜Tシャツver.〜",
search:"いぬいさじゅな　じゅじゅ",
type:"desk",
price:700,
date: "",
img:"images/kisekoi/zyuzyu_desk_t.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"osinoko",
name:"【推しの子】Desktop Cute フィギュア　アイ 〜Rabbit room wear ver.〜",
search:"あい",
type:"desk",
price:700,
date: "",
img:"images/osinoko/ai_desk.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』ぬーどるストッパーフィギュア​ ー 桜ミク2025 ー",
search:"はつねみく　さくらみく",
type:"nusuto",
price:1000,
date: "",
img:"images/miku/sakura_2025.jpg",
source:"https://charahiroba.com/"
},

{
series:"wanpi",
name:"ワンピース BATTLE RECORD COLLECTION-MONKEY.D.GARP Ⅱ-",
search:"がーぷ　ガープ",
type:"bato",
price:700,
date: "",
img:"images/wanpi/gapu_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aoeku",
name:"青の祓魔師島根啓明結社篇 XrossLinkフィギュア“奥村雪男”",
search:"おくむらゆきお",
type:"xros",
price:300,
date: "",
img:"images/aoeku/yukio_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"nyanko",
name:"にゃんこ大戦争 にゃんこ軍団出陣フィギュア～にゃんこ城～",
search:"",
type: "",
price:400,
date: "",
img:"images/nyanko/siro.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"oba",
name:"『オーバーロード』Desktop Cute シャルティア〜チャイナドレスver.〜",
search:"しゃるてぃあ",
type:"desk",
price:450,
date: "",
img:"images/oba/syaru_desk_tyai.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"db",
name:"ドラゴンボール History Box ヤムチャ",
search:"やむちゃ",
type: "his",
price:500,
date: "",
img:"images/db/yamu_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ SOLID EDGE WORKS-THE出陣-超サイヤ人3ゴテンクス",
search:"ごてんくす",
type:"syutu",
price:650,
date: "",
img:"images/db/goten3_syutu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kamitu",
name:"神椿市建設中。　1/7スケールフィギュア　朝主派流",
search:"あさぬしはる",
type:"",
price:200,
date: "",
img:"images/kamitu/asa.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"uru",
name:"シン・ジャパン・ヒーローズ・ユニバース　でふぉるむぷらす　ウルトラマン（シン・ウルトラマン）　フルアクションデフォルメフィギュア",
search:"うるとらまん",
type:"defo",
price:400,
date: "",
img:"images/uru/uru.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"kamen",
name:"シン・ジャパン・ヒーローズ・ユニバース　でふぉるむぷらす　仮面ライダー（シン・仮面ライダー）フルアクションデフォルメフィギュア",
search:"かめんらいだー",
type:"defo",
price:400,
date: "",
img:"images/kamen/kamen.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"eva",
name:"シン・ジャパン・ヒーローズ・ユニバース　でふぉるむぷらす　エヴァンゲリオン初号機　フルアクションデフォルメフィギュア",
search:"しょごうき",
type:"defo",
price:400,
date: "",
img:"images/eva/eva.jpg",
source:"https://www.elcocoland.com/shop/"
},


{
series:"gozira",
name:"シン・ジャパン・ヒーローズ・ユニバース　でふぉるむぷらす　ゴジラ（２０１６）　フルアクションデフォルメフィギュア",
search:"ごじら",
type:"defo",
price:400,
date: "",
img:"images/gozira/gozira.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"kisekoi",
name:"TVアニメ「その着せ替え人形は恋をする」XStellar“乾紗寿叶”",
search:"いぬいさじゅな　じゅじゅ",
type: "xs",
price:600,
date: "",
img:"images/kisekoi/zyuzyu_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』FIGURIZMα“オカルン（変身）”トランスフォームビジュアルVer.",
search:"おかるん",
type: "fig",
price:500,
date: "",
img:"images/dandadan/oka_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"db",
name:"ドラゴンボールZ Grandista-VEGETA-",
search:"べじーた　ベジータ",
type: "gra",
price:500,
date: "",
img:"images/db/bezi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール超 Grandista-GOGETA-",
search:"ごじーた　ゴジータ",
type: "gra",
price:550,
date: "",
img:"images/db/gozita_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース フィグライフ! ユースタス・キッド",
search:"ゆーすたすきっど",
type:"figl",
price:550,
date: "",
img:"images/wanpi/yusu_figl.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"wanpi",
name:"ワンピース KING OF ARTIST KUZAN",
search:"あおきじ　くざん　青雉　クザン",
type:"koa",
price:400,
date: "",
img:"images/wanpi/kuzan_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST GOL.D.ROGER-SPECIAL ver.-",
search:"ごーるどろじゃー　ゴールドロジャー",
type:"koa",
price:600,
date: "",
img:"images/wanpi/rozyasp_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-SABO-",
search:"さぼ　サボ",
type:"gra",
price:450,
date: "",
img:"images/wanpi/sabo_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレン AMP＋ フリーレン フィギュア",
search:"ふりーれん",
type:"amp",
price:1000,
date: "",
img:"images/furi-ren/furi_amp.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア THE AMAZING HEROES-PLUS-KATSUKI BAKUGO Ⅲ",
search:"ばくごうかつき　爆豪勝己",
type:"ame",
price:1000,
date: "",
img:"images/hiro/bakugo3_ame.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"eva",
name:"ヱヴァンゲリヲン新劇場版ハイプレミアムフィギュア“碇シンジ”制服Ver.",
search:"いかりしんじ",
type: "hi",
price:700,
date: "",
img:"images/eva/sinzi_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"reia",
name:"『魔法騎士レイアース』 鳳凰寺風 HereDitailフィギュア",
search:"ほうおうじふう",
type:"",
price:600,
date: "",
img:"images/reia/fu.jpg",
source:"https://www.sk-japan.co.jp/charatoru/topic"
},

{
series:"reia",
name:"魔法騎士レイアース 獅堂光 HereDitailフィギュア",
search:"しどうひかる",
type:"",
price:600,
date: "",
img:"images/reia/hikaru.jpg",
source:"https://www.sk-japan.co.jp/charatoru/topic"
},


{
series:"hant",
name:"HUNTER×HUNTER Grandista-ヒソカ-",
search:"ひそか",
type:"gra",
price:1800,
date: "",
img:"images/hant/hiso_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST THE MONKEY.D.LUFFY GEAR5 Ⅱ",
search:"るふぃ　にか　ルフィ　ニカ",
type:"koa",
price:600,
date: "",
img:"images/wanpi/nika2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST THE TRAFALGAR.LAW Ⅱ",
search:"とらふぁるがーろー　トラファルガーロー",
type:"koa",
price:1000,
date: "",
img:"images/wanpi/ro2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST THE ROB LUCCI Awakening ver.",
search:"ろぶるっち　ロブルッチ",
type:"koa",
price:450,
date: "",
img:"images/wanpi/rutti_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦Luminasta“虎杖悠仁”黒閃",
search:"いたどりゆうじ",
type: "lum",
price:1000,
date: "",
img:"images/zyuzyutu/itadori_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"劇場版呪術廻戦0Yumemirize“乙骨憂太”",
search:"おっこつゆうた",
type:"yume",
price:1000,
date: "",
img:"images/zyuzyutu/otukotu_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"劇場版呪術廻戦0Yumemirize“狗巻棘”",
search:"いぬまきとげ",
type:"yume",
price:1000,
date: "",
img:"images/zyuzyutu/inumaki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』Vivitフィギュア 五条悟 呪術高専Ver.GiGOグループ限定",
search:"ごじょうさとる",
type:"vivi",
price:800,
date: "",
img:"images/zyuzyutu/gozyo_vivi.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 KING OF ARTIST SATORU GOJO-懐玉・玉折-Ⅱ",
search:"ごじょうさとる　五条悟",
type:"koa",
price:900,
date: "",
img:"images/zyuzyutu/gozyo2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC CHOSO",
search:"ちょうそう　脹相",
type:"ma",
price:1200,
date: "",
img:"images/zyuzyutu/tyouso_a_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC CHOSO",
search:"ちょうそう　脹相",
type:"ma",
price:1200,
date: "",
img:"images/zyuzyutu/tyouso_b_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC SUKUNA Special ver.",
search:"すくな　宿儺",
type:"ma",
price:1000,
date: "",
img:"images/zyuzyutu/sukunasp_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS-SHIRAHOSHI-",
search:"しらほし",
type:"gli",
price:500,
date: "",
img:"images/wanpi/sira_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS-BOA.HANCOCK-Ⅱ",
search:"はんこっく　ハンコック",
type:"gli",
price:800,
date: "",
img:"images/wanpi/han_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS-TRAFALGAR.LAW-CHANGE ver.",
search:"ろー　ロー",
type:"gli",
price:550,
date: "",
img:"images/wanpi/ro_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-MIRKO-",
search:"みるこ　ミルコ",
type:"gli",
price:1000,
date: "",
img:"images/hiro/miruko_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER＆GLAMOURS-OCHACO URARAKA＆HIMIKO TOGA-",
search:"とがひみこ　トガヒミコ",
type:"gli",
price:800,
date: "",
img:"images/hiro/toga_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER＆GLAMOURS-OCHACO URARAKA＆HIMIKO TOGA-",
search:"うららかおちゃこ　麗日お茶子",
type:"gli",
price:1200,
date: "",
img:"images/hiro/otyako_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-TORU HAGAKURE-",
search:"はがくれとおる　葉隠透",
type:"gli",
price:1800,
date: "",
img:"images/hiro/hagakure_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-TSUYU ASUI-",
search:"あすいつゆ　蛙吹梅雨",
type:"gli",
price:900,
date: "",
img:"images/hiro/tuyu_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-NEJIRE HADO-",
search:"はどうねじれ　波動ねじれ",
type:"gli",
price:800,
date: "",
img:"images/hiro/nezire_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER＆GLAMOURS-HIMIKO TOGA-",
search:"とがひみこ　トガヒミコ",
type:"gli",
price:800,
date: "",
img:"images/hiro/toga2_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-MEI HATSUME-",
search:"はつめめい　発目明",
type:"gli",
price:800,
date: "",
img:"images/hiro/hatume_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Grandista-UCHIHA SASUKE-",
search:"うちはさすけ　うちはサスケ",
type:"gra",
price:1200,
date: "",
img:"images/naruto/sasuke1_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kaizyu",
name:"怪獣８号 Grandista-鳴海弦-",
search:"なるみげん",
type:"gra",
price:800,
date: "",
img:"images/kaizyu/narumi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア Grandista-ALL MIGHT-",
search:"おーるまいと　オールマイト",
type:"gra",
price:900,
date: "",
img:"images/hiro/all_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"虎杖悠仁 呪術廻戦 Grandista ITADORI YUJI",
search:"いたどりゆうじ",
type:"gra",
price:700,
date: "",
img:"images/zyuzyutu/itadori_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ Grandista-SON GOKU-Ⅱ",
search:"そんごくう　孫悟空",
type:"gra",
price:750,
date: "",
img:"images/db/goku2_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ Grandista-SON GOKU-",
search:"そんごくう　孫悟空",
type:"gra",
price:600,
date: "",
img:"images/db/goku_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-EDWARD.NEWGATE-",
search:"しろひげ　えどわーどにゅーげーと　白髭　エドワードニューゲート",
type:"gra",
price:550,
date: "",
img:"images/wanpi/sirohige_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-TRAFALGAR.LAW-",
search:"ろー　ロー",
type:"gra",
price:450,
date: "",
img:"images/wanpi/ro_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-MONKEY.D.LUFFY GEAR5-",
search:"るふぃ　にか　ルフィ　ニカ",
type:"gra",
price:800,
date: "",
img:"images/wanpi/nika1_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミアTHEMOVIEユアネクストXrossLinkフィギュア“轟焦凍”",
search:"とどろきしょうと",
type:"xros",
price:800,
date: "",
img:"images/hiro/todoroki_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC CHOSO-死滅回游-",
search:"ちょうそう",
type:"ma",
price:800,
date: "",
img:"images/zyuzyutu/tyouso_ma2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 Grandista-ZEN’IN NAOYA-",
search:"ぜんいんなおや　禪院直哉",
type:"gra",
price:900,
date: "",
img:"images/zyuzyutu/naoya_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC YUTA OKKOTSU-死滅回游-",
search:"おっこつゆうた　乙骨 憂太",
type:"ma",
price:600,
date: "",
img:"images/zyuzyutu/otukotu_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険 ファントムブラッド 石仮面",
search:"いしかめん",
type:"mome",
price:800,
date: "",
img:"images/zyozyo/isikamen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険 ダイヤモンドは砕けない Mometria 吉良吉影",
search:"きらよしかげ",
type:"mome",
price:1000,
date: "",
img:"images/zyozyo/kira.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦FIGURIZMα“脹相”赫鱗躍動・載",
search:"ちょうそう",
type:"fig",
price:1500,
date: "",
img:"images/zyuzyutu/tyouso_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC NAOYA ZEN’IN",
search:"ぜんいんなおや　禪院直哉",
type:"ma",
price:1000,
date: "",
img:"images/zyuzyutu/naoya_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC YUJI ITADORI-死滅回游-",
search:"いたどりゆうじ　虎杖悠仁",
type:"ma",
price:600,
date: "",
img:"images/zyuzyutu/itadori_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"oba",
name:"『オーバーロード』BiCute Bunnies Figureー アルベド ー",
search:"あるべど",
type:"bani",
price:800,
date: "",
img:"images/oba/aru_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"oba",
name:"『オーバーロード』Classical tuning アルベド 千夜一夜物語",
search:"あるべど",
type:"",
price:700,
date: "",
img:"images/oba/aru_senyo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"sonota",
name:"『おぱんちゅうさぎ』ぬーどるストッパーフィギュア－ 盛れおぱんちゅうさぎ －",
search:"",
type:"nusuto",
price:500,
date: "",
img:"images/sonota/opantyu.jpg",
source:"https://charahiroba.com/"
},

{
series:"kamen",
name:"仮面ライダークウガ BIGサイズソフビ マスクディスプレイ-クウガ-",
search:"かめんらいだーくうが",
type:"",
price:500,
date: "",
img:"images/kamen/kuga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wind",
name:"TVアニメ『WIND BREAKER』 梅宮一 フィギュア～Chatting time!～",
search:"うめみやはじめ",
type: "",
price:500,
date: "",
img:"images/wind/ume.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wind",
name:"TVアニメ『WIND BREAKER』 蘇枋隼飛 フィギュア～Chatting time!～",
search:"すおうはやと",
type: "",
price:500,
date: "",
img:"images/wind/sobo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wind",
name:"TVアニメ『WIND BREAKER』 梶蓮 フィギュア～Chatting time!～",
search:"かじれん",
type: "",
price:550,
date: "",
img:"images/wind/kazi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wind",
name:"TVアニメ『WIND BREAKER』 桜遥 フィギュア～Chatting time!～",
search:"さくらはるか",
type: "",
price:500,
date: "",
img:"images/wind/sakura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yuyu",
name:"幽☆遊☆白書 MAXIMATIC HIEI",
search:"ひえい　飛影",
type: "ma",
price:500,
date: "",
img:"images/yuyu/hiei.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dr",
name:"『Dr.STONE』FIGURE of STONE WORLD-造形の科学<br>-Dr.ゼノ＆スタンリー・スナイダー",
search:"すたんりーすないだー",
type: "",
price:1400,
date: "",
img:"images/dr/suta.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"sakamoto",
name:"SAKAMOTODAYSLuminasta“坂本太郎”店長Ver.",
search:"さかもとたろう",
type:"lum",
price:500,
date: "",
img:"images/sakamoto/sakamoto_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"sakamoto",
name:"『SAKAMOTO DAYS』 ぬーどるストッパーフィギュア ー 朝倉シン ー",
search:"あさくらしん",
type:"nusuto",
price:600,
date: "",
img:"images/sakamoto/sin_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"sakamoto",
name:"SAKAMOTODAYSちょこのせプレミアムフィギュア“坂本太郎”本気Ver.",
search:"さかもとたろう",
type:"tyoko",
price:400,
date: "",
img:"images/sakamoto/sakamoto_honki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gintama",
name:"3年Z組銀八先生 デスクフィギュア-坂田銀八-",
search:"さかたぎんぱち",
type: "",
price:2000,
date: "",
img:"images/gintama/gintoki_desk.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpan",
name:"ワンパンマン One Punch Life サイタマ～買い物～",
search:"さいたま",
type:"",
price:650,
date: "",
img:"images/wanpan/life.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpan",
name:"ワンパンマン Grandista-SAITAMA-",
search:"さいたま　サイタマ",
type:"gra",
price:650,
date: "",
img:"images/wanpan/saitama_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buri",
name:"BLEACH GrandistaｰKUROSAKI ICHIGOｰ",
search:"くろさきいちご　黒崎一護",
type:"gra",
price:1500,
date: "",
img:"images/buri/itigo_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"guru",
name:"東京喰種 Grandista-KANEKI KEN-",
search:"かねきけん　金木研",
type:"gra",
price:1000,
date: "",
img:"images/guru/kaneki_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"baki",
name:"刃牙 Grandistaッッ‼-HANMA YUJIRO-",
search:"はんまゆうじろう　範馬勇次郎",
type:"gra",
price:800,
date: "",
img:"images/baki/yuzi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"king",
name:"キングダム Grandista-王騎-",
search:"はた　旗",
type:"gra",
price:900,
date: "",
img:"images/king/hata_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"king",
name:"キングダム Grandista-王騎-",
search:"おうき",
type:"gra",
price:400,
date: "",
img:"images/king/ouki_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- フィグライフ! 終末の谷-うちはマダラ-",
search:"うちはまだら",
type:"figl",
price:700,
date: "",
img:"images/naruto/madara_figl.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 BANPRESTO FIGURE COLOSSEUM 造形忍界大戦 はたけカカシ",
search:"はたけかかし",
type: "ninkai",
price:1000,
date: "",
img:"images/naruto/kakasi_ninkai.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Memorable Saga-うちはサスケ-",
search:"うちはさすけ",
type:"memo",
price:1200,
date: "",
img:"images/naruto/fuma_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- NARUTOP99 うちはシスイ フィギュア",
search:"うちはしすい",
type:"99",
price:600,
date: "",
img:"images/naruto/sisui.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Memorable Saga Special-うずまきナルト-",
search:"うずまきなると",
type:"memo",
price:1300,
date: "",
img:"images/naruto/naruto_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"-NARUTO 72 series- 33 VIBRATION STARS-UZUMAKI NARUTO-",
search:"うずまきなると　うずまきナルト",
type:["vib", "72"],
price:700,
date: "",
img:"images/naruto/naruto_72_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Memorable Saga Special-うちはイタチ-",
search:"うちはいたち",
type:"memo",
price:2000,
date: "",
img:"images/naruto/itati_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Combination Battle2-我愛羅-",
search:"があら",
type:"combi",
price:800,
date: "",
img:"images/naruto/gara2_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Combination Battle-うちはイタチ-",
search:"うちはいたち",
type:"combi",
price:900,
date: "",
img:"images/naruto/itati_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- VIBRATION STARS-GAARA-Ⅱ",
search:"があら",
type:"vib",
price:500,
date: "",
img:"images/naruto/gara2_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS<br>-SENJU TOBIRAMA ＆ OROCHIMARU-",
search:"せんじゅとびらま",
type:"vib",
price:800,
date: "",
img:"images/naruto/tobira_vib.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS<br>-SENJU TOBIRAMA ＆ OROCHIMARU-",
search:"おろちまる",
type:"vib",
price:600,
date: "",
img:"images/naruto/oroti_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁∬』 Desktop Cute フィギュア <br>中野三玖 ～描き下ろしCat room wear ver.～",
search:"なかのみく",
type:"desk",
price:800,
date: "",
img:"images/gotoyome/miku_desk_neko.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"mazyotabi",
name:"『魔女の旅々』 Trio-Try-iT Figure ーイレイナー",
search:"いれいな",
type:"trio",
price:800,
date: "",
img:"images/mazyotabi/trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア <br>ー レッドフード：ナンセンスレッド ー",
search:"れっどふーどなんせんすれっど",
type:"nusuto",
price:700,
date: "",
img:"images/nikke/reddo_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"umamusume",
name:"ウマ娘プリティーダービーXStellar“サトノクラウン”-STARTINGFUTURE-",
search:"さとのくらうん",
type: "xs",
price:800,
date: "",
img:"images/umamusume/kuraun_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"umamusume",
name:"ウマ娘プリティーダービーXStellar“サトノダイヤモンド”-STARTINGFUTURE-",
search:"さとのだいやもんど",
type: "xs",
price:800,
date: "",
img:"images/umamusume/satono_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kuresin",
name:"クレヨンしんちゃん ビッグフィギュア～野原しんのすけ～おおっ！",
search:"",
type:"",
price:700,
date: "",
img:"images/kuresin/oo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buruaka",
name:"ブルーアーカイブYumemirize“セリカ”",
search:"せりか",
type:"yume",
price:550,
date: "",
img:"images/buruaka/serika.jpg",
source:"https://segaplaza.jp/"
},

{
series:"akunai",
name:"『アークナイツ』 ぬーどるストッパーフィギュア ー スルト ー",
search:"すると",
type:"nusuto",
price:1000,
date: "",
img:"images/akunai/suruto_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"musyoku",
name:"『無職転生II ～異世界行ったら本気だす～』 Vivitフィギュア ロキシー・ミグルディア バニー偏光カラーVer.",
search:"ろきしーみぐるでぃあ",
type:"vivi",
price:700,
date: "",
img:"images/musyoku/rokisi_henko.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"voice",
name:"『VOICEROID』 弦巻マキ＆紲星あかり <br>フィギュア ルームウェア Another color ver.",
search:"きずなあかり",
type:"sof",
price:500,
date: "",
img:"images/voice/akari.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"voice",
name:"『VOICEROID』 弦巻マキ＆紲星あかり <br>フィギュア ルームウェア Another color ver.",
search:"つるまきまき",
type:"sof",
price:500,
date: "",
img:"images/voice/maki.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"musyoku",
name:"『無職転生Ⅱ ～異世界行ったら本気だす～』 <br>Vivit フィギュア エリス・ボレアス・グレイラット 競泳水着",
search:"えりすぼれあすぐれいらっと",
type:"vivi",
price:600,
date: "",
img:"images/musyoku/erisu_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"musyoku",
name:"『無職転生Ⅱ ～異世界行ったら本気だす～』 <br>Vivit フィギュア ロキシー・ミグルディア 競泳水着",
search:"ろきしーみぐるでぃあ",
type:"vivi",
price:600,
date: "",
img:"images/musyoku/rokisi_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野五月 ー",
search:"なかのいつき",
type:"daku",
price:1200,
date: "",
img:"images/gotoyome/ituki_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 BiCute Pure Figure <br>ー 夜刀神十香 ー",
search:"やとがみとおか",
type:"pure",
price:800,
date: "",
img:"images/deara/toka_pure.jpg",
source:"https://charahiroba.com/"
},

{
series:"kuresin",
name:"映画クレヨンしんちゃん ヘンダーランドの大冒険 <br>おおきなSOFVIMATES～ジョマ～",
search:"じょま",
type:"sof",
price:600,
date: "",
img:"images/kuresin/zyoma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kuresin",
name:"映画クレヨンしんちゃん ヘンダーランドの大冒険 <br>おおきなSOFVIMATES～マカオ～",
search:"まかお",
type:"sof",
price:600,
date: "",
img:"images/kuresin/makao.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"toho",
name:"『東方Project』 ゆっくり風デフォルメフィギュア 霧雨魔理沙",
search:"きりさめまりさ",
type:"",
price:800,
date: "",
img:"images/toho/marisa.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"toho",
name:"『東方Project』 ゆっくり風デフォルメフィギュア 博麗霊夢",
search:"はくれいれいむ",
type:"",
price:800,
date: "",
img:"images/toho/reimu.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"vtu",
name:"赤見かるびちょこのせプレミアムフィギュア“赤見かるび”",
search:"あかみかるび",
type:"tyoko",
price:500,
date: "",
img:"images/vtu/karubi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"katainaka",
name:"片田舎のおっさん、剣聖になるハイプレミアムフィギュア<br>“アリューシア・シトラス”",
search:"あーりゅしあしとらす",
type: "hi",
price:500,
date: "",
img:"images/katainaka/aryu_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"uzaki",
name:"『宇崎ちゃんは遊びたい！ω』 <br>BiCute Bunnies Figure ー 宇崎花 ー",
search:"うざきはな",
type:"bani",
price:800,
date: "",
img:"images/uzaki/uzaki_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"mahoako",
name:"『魔法少女にあこがれて』 One-Seventh Caratフィギュア<br> マジアベーゼ 悪のバニーVer.",
search:"まじあべーぜ",
type:"one",
price:800,
date: "",
img:"images/mahoako/mazi_aku.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"mahoako",
name:"魔法少女にあこがれて Vivitフィギュア マジアベーゼ Ver.1.5",
search:"まじあべーぜ",
type:"vivi",
price:1400,
date: "",
img:"images/mahoako/mazi_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"nikke",
name:"勝利の女神：NIKKE バイパー こーどリールフィギュア",
search:"ばいぱー",
type:"ko-do",
price:600,
date: "",
img:"images/nikke/baipa_ko-do.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nikke",
name:"勝利の女神：NIKKE アニス こーどリールフィギュア",
search:"あにす",
type:"ko-do",
price:600,
date: "",
img:"images/nikke/anisu_ko-do.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア ー ブリッド ー",
search:"ぶりっど",
type:"nusuto",
price:400,
date: "",
img:"images/nikke/buriddo_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア<br>ー モダニア ファースト・アフェクション ー",
search:"もだにあ",
type:"nusuto",
price:600,
date: "",
img:"images/nikke/moda_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編 GLITTER&GLAMOURS ユラ",
search:"ゆら",
type:"gli",
price:500,
date: "",
img:"images/tensura/yura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 ぬーどるストッパーフィギュア ー マチ ー",
search:"まち",
type:"nusuto",
price:600,
date: "",
img:"images/hant/mati_nusuto.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"pawapuro",
name:"パワフルプロ野球　<br>パワプロくん プライズアクションフィギュア 打者ver",
search:"ぱわぷろくん",
type:"",
price:500,
date: "",
img:"images/pawapuro/dasya.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"rokkuman",
name:"ロックマン Grandista -ROCKMAN-",
search:"ろっくまん",
type:"gra",
price:800,
date: "",
img:"images/rokkuman/rokkuman_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dandadan",
name:"『ダンダダン』 Trio-Try-iT Figure <br>― オカルン(変身) ―",
search:"おかるん",
type:"trio",
price:550,
date: "",
img:"images/dandadan/okarun_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』 Grandista-OKARUN(TRANSFORMED)-",
search:"おかるん　オカルン",
type:"gra",
price:500,
date: "",
img:"images/dandadan/okarun_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buri",
name:"BLEACH MAXIMATIC ULQUIORRA CIFER",
search:"うるきおらしふぁー　ウルキオラシファー",
type:"ma",
price:1400,
date: "",
img:"images/buri/uru_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"uruse",
name:"うる星やつら ESPRESTO-Soft and drifting-ラム",
search:"らむ",
type:"esp",
price:650,
date: "",
img:"images/uruse/ramu_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nia",
name:"TVアニメ「NieR:AutomataVer1.1a」<br>ちょこのせプレミアムフィギュア“2B”",
search:"2びー",
type:"tyoko",
price:900,
date: "",
img:"images/nia/2b_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>Fluffy Puffy～キュゥべえ＆お菓子の魔女～",
search:"おかしのまじょ",
type:"flu",
price:800,
date: "",
img:"images/madomagi/okasi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>Fluffy Puffy～キュゥべえ＆お菓子の魔女～",
search:"きゅうべえ",
type:"flu",
price:800,
date: "",
img:"images/madomagi/kyube.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"city",
name:"ぬーどるストッパーフィギュア―南雲美鳥―",
search:"なぐもみどり",
type:"nusuto",
price:700,
date: "",
img:"images/city/midori.jpg",
source:"https://charahiroba.com/"
},

{
series:"toho",
name:"『東方Project』 ぬーどるストッパーフィギュア <br>ー 東風谷早苗 ー",
search:"こちやさなえ",
type:"nusuto",
price:700,
date: "",
img:"images/toho/sanae.jpg",
source:"https://charahiroba.com/"
},

{
series:"motiduki",
name:"『ドカ食いダイスキ！もちづきさん』 <br>ぬーどるストッパーフィギュア ー 望月美琴 ー",
search:"もちづきみこと",
type:"nusuto",
price:600,
date: "",
img:"images/motiduki/motiduki.jpg",
source:"https://charahiroba.com/"
},

{
series:"atorie",
name:"『ライザのアトリエ』 Luminasta “リラ・ディザイアス”",
search:"りらでぃざいあす",
type:"lum",
price:700,
date: "",
img:"images/atorie/rira.jpg",
source:"https://segaplaza.jp/"
},

{
series:"atorie",
name:"TVアニメ『ライザのアトリエ』 Luminasta“ライザリン・シュタウト”",
search:"らいざりんしゅたうと",
type:"lum",
price:700,
date: "",
img:"images/atorie/raiza.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 中野三玖フィギュア <br>五等分の花嫁アニメ原画展ver.",
search:"なかのみく",
type:"",
price:800,
date: "",
img:"images/gotoyome/miku_genga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁∬』 Desktop Cute フィギュア <br>中野二乃 ～描き下ろしCat room wear ver.～",
search:"なかのにの",
type:"desk",
price:550,
date: "",
img:"images/gotoyome/nino_desk_neko.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 Desktop Cute フィギュア <br>中野一花 〜バニーver.〜",
search:"なかのいちか",
type:"desk",
price:450,
date: "",
img:"images/gotoyome/itika_desk_bani.jpg",
source:"https://www.taito.co.jp/"
},


{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野三玖 ー",
search:"なかのみく",
type:"daku",
price:1400,
date: "",
img:"images/gotoyome/miku_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野四葉 ー",
search:"なかのよつば",
type:"daku",
price:1200,
date: "",
img:"images/gotoyome/yotuba_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 Desktop Cute フィギュア <br>夜刀神十香 〜バニーver.〜 Renewal タイクレ限定",
search:"やとがみとおか",
type:"desk",
price:1100,
date: "",
img:"images/deara/toka_bani_taikure.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 ぬーどるストッパーフィギュア <br>ー 時崎狂三・ 水着 ver. ー",
search:"ときさきくるみ",
type:"nusuto",
price:350,
date: "",
img:"images/deara/kurumi_nusuto.jpg",
source:"https://charahiroba.com/"
},


{
series:"deara",
name:"『デート・ア・ライブV』 BiCute Dark Figure <br>ー 時崎狂三 ー",
search:"ときさきくるみ",
type:"daku",
price:1000,
date: "",
img:"images/deara/kurumi_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"デート・ア・ライブ ペンフレ！ 時崎狂三 sweet silk wear ver.",
search:"ときさきくるみ",
type:"pen",
price:500,
date: "",
img:"images/deara/kurumi_pen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"deara",
name:"デート・ア・ライブ ペンフレ！ 夜刀神十香 sweet silk wear ver.",
search:"やとがみとおか",
type:"pen",
price:450,
date: "",
img:"images/deara/toka_pen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"osinoko",
name:"【推しの子】 ESPRESTO-Poppin' Heart-アイ",
search:"あい",
type:"esp",
price:500,
date: "",
img:"images/osinoko/ai_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tikawa",
name:"『ちいかわ』 撮りまーす！カメラ型ライト",
search:"はちわれ",
type:"",
price:400,
date: "",
img:"images/tikawa/syasin.jpg",
source:"https://www.eikoh-prize.jp/"
},

{
series:"keroro",
name:"ケロロ軍曹 おおきなSOFVIMATES～クルル曹長～",
search:"くるるそうちょう",
type:"sof",
price:600,
date: "",
img:"images/keroro/kururu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yahari",
name:"やはり俺の青春ラブコメはまちがっている。完<br>Luminasta“一色いろは” ～盛夏TOKYOBAY～",
search:"いっしきいろは",
type:"lum",
price:400,
date: "",
img:"images/yahari/iroha.jpg",
source:"https://segaplaza.jp/"
},


{
series:"witti",
name:"TVアニメ『ウィッチウォッチ』 <br>ちょこのせプレミアムフィギュア “宮尾音夢”",
search:"みやおねむ",
type:"tyoko",
price:300,
date: "",
img:"images/witti/nemu_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"witti",
name:"TVアニメ『ウィッチウォッチ』Luminasta“宮尾音夢”",
search:"みやおねむ",
type:"lum",
price:350,
date: "",
img:"images/witti/nemu.jpg",
source:"https://segaplaza.jp/"
},

{
series:"fate",
name:"Fate/GrandOrderArcadeLuminasta“ランサー/エレシュキガル”",
search:"えれしゅきがる",
type:"lum",
price:500,
date: "",
img:"images/fate/eresyuki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"samapoke",
name:"『Summer Pockets』 Yumemirize “空門蒼”",
search:"そらかどあお",
type:"yume",
price:550,
date: "",
img:"images/samapoke/ao.jpg",
source:"https://segaplaza.jp/"
},

{
series:"samapoke",
name:"『Summer Pockets』 Yumemirize “鳴瀬しろは”",
search:"なるせしろは",
type:"yume",
price:550,
date: "",
img:"images/samapoke/siroha.jpg",
source:"https://segaplaza.jp/"
},

{
series:"nigoriri",
name:"2.5次元の誘惑 GLITTER&GLAMOURS ミリエラ Bunny Style",
search:"みりえら",
type:"gli",
price:400,
date: "",
img:"images/nigoriri/miriera_bani.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nigoriri",
name:"2.5次元の誘惑 GLITTER&GLAMOURS リリエル Bunny Style",
search:"りりえる",
type:"gli",
price:400,
date: "",
img:"images/nigoriri/ririeru_bani.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"purikyua",
name:"『ふたりはプリキュア』 GLITTER&GLAMOURS <br>～キュアホワイト～",
search:"きゅあほわいと",
type:"gli",
price:450,
date: "",
img:"images/purikyua/howaito.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"purikyua",
name:"『ふたりはプリキュア』 GLITTER&GLAMOURS <br>～キュアブラック～",
search:"きゅあぶらっく",
type:"gli",
price:350,
date: "",
img:"images/purikyua/burakku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aobuta",
name:"『青春ブタ野郎』シリーズ １/７スケールフィギュア　<br>桜島麻衣 和服メイドVer.",
search:"さくらじままい",
type:"",
price:600,
date: "",
img:"images/aobuta/wafukumeido.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"mazyotabi",
name:"魔女の旅々 Trio-Try-iT Figure<br>ーイレイナ・ブラウンコーデver.ー",
search:"いれいな",
type:"trio",
price:600,
date: "",
img:"images/mazyotabi/buraun_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"higurasi",
name:"ひぐらしのなく頃に卒　BiCute Bunnies Figureー羽入ー",
search:"はにゅう",
type:"bani",
price:500,
date: "",
img:"images/higurasi/hanyu.jpg",
source:"https://charahiroba.com/"
},

{
series:"hant",
name:"HUNTER×HUNTER HUNTING ARCHIVES<br> ネテロ-音を置き去りにした-",
search:"ねてろ",
type:"",
price:500,
date: "",
img:"images/hant/netero_oto.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"pawapuro",
name:"パワフルプロ野球パワプロくん プライズアクションフィギュア",
search:"ぱわぷろくん",
type:"",
price:500,
date: "",
img:"images/pawapuro/pawapuro.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"buri",
name:"BLEACH MAXIMATIC GRIMMJOW JAEGERJAQUES",
search:"ぐりむじょーじゃがーじゃっく　グリムジョージャガージャック",
type:"ma",
price:1200,
date: "",
img:"images/buri/gurimu_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 Trio-Try-iT Figure <br>ー 水篠旬 ー",
search:"みずしのしゅん",
type:"trio",
price:1000,
date: "",
img:"images/orerebe/mizusino_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hant",
name:"HUNTER×HUNTER Grandista-クラピカ-",
search:"くらぴか",
type:"gra",
price:1000,
date: "",
img:"images/hant/kura_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"botti",
name:"アニメ「ぼっち・ざ・ろっく！」 鎮座獣 <br>承認欲求モンスター",
search:"ぼっち　ごとうひとり　しょうにんよっきゅうもんすたー",
type:"tinza",
price:900,
date: "",
img:"images/botti/syounin.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gundam",
name:"『機動戦士Gundam GQuuuuuuX』<br>ニャアン フィギュア 私服ver.",
search:"にゃあん",
type:"",
price:300,
date: "",
img:"images/gundam/nyan.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"『転生したらスライムだった件』<br>リムル＆ランガ ソフビフィギュア",
search:"りむる　らんが",
type:"",
price:600,
date: "",
img:"images/tensura/ranga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS<br>-NAMI EGGHEAD STYLE-",
search:"なみ　ナミ",
type:"gli",
price:750,
date: "",
img:"images/wanpi/nami_egg_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 フィグライフ! 海賊狩りのゾロ",
search:"かいぞくがりのぞろ",
type:"figl",
price:600,
date: "",
img:"images/wanpi/zoro_figl.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"wanpi",
name:"『ワンピース』 THE出航 LOGIA -BORSALINO-",
search:"きざる　黄猿　ボルサリーノ　ぼるさりーの",
type:"syukko",
price:650,
date: "",
img:"images/wanpi/kizaru_syukko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -TRAFALGAR.LAW Ⅱ-",
search:"ろー　ロー",
type:"bato",
price:600,
date: "",
img:"images/wanpi/ro2_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -NAMI-",
search:"なみ　ナミ",
type:"bato",
price:900,
date: "",
img:"images/wanpi/nami_egg_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -JEWELRY.BONNEY THE MOST FREE FUTURE-",
search:"じゅえりーぼにー　ジュエリーボニー",
type:"bato",
price:550,
date: "",
img:"images/wanpi/boni_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -MONKEY.D.LUFFY GEAR5 SPECIAL ver.-",
search:"ルフィ　るふぃ　にか　ニカ",
type:"bato",
price:600,
date: "",
img:"images/wanpi/nika_bato_sp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST MONKEY.D.LUFFY GEAR5 III",
search:"るふぃ　ルフィ　にか　ニカ",
type:"koa",
price:800,
date: "",
img:"images/wanpi/rufi3_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST JEWELRY.BONNEY THE MOST FREE FUTURE",
search:"じゅえりーぼにー　ジュエリーボニー",
type:"koa",
price:600,
date: "",
img:"images/wanpi/boni_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST MONKEY.D.LUFFY -ワノ国 Ⅱ SPECIAL ver.-",
search:"るふぃ　ルフィ",
type:"koa",
price:1000,
date: "",
img:"images/wanpi/rufi_wa2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 Grandista -RORONOA ZORO Ⅱ-",
search:"ロロノアゾロ　ろろのあぞろ",
type:"gra",
price:1100,
date: "",
img:"images/wanpi/zoro_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 Grandista -PORTGAS.D.ACE-",
search:"エース　えーす",
type:"gra",
price:650,
date: "",
img:"images/wanpi/ace_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -リヨウ-",
search:"りよう",
type:"vib",
price:1600,
date: "",
img:"images/gati/riyo_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -エンジン-",
search:"えんじん",
type:"vib",
price:1500,
date: "",
img:"images/gati/enzi_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -ザンカ-",
search:"ざんか",
type:"vib",
price:1500,
date: "",
img:"images/gati/zanka_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -ルド-",
search:"るど",
type:"vib",
price:1800,
date: "",
img:"images/gati/rudo_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>ESPRESTO Detailed Elegance 喜多川海夢 黒江雫Ver.",
search:"くろえしずく",
type:"esp",
price:1000,
date: "",
img:"images/kisekoi/sizuku_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 フィグライフ! 童磨",
search:"どうま",
type:"figl",
price:1200,
date: "",
img:"images/kimetu/doma_fig.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 MAXIMATIC SHINOBU KOCHO",
search:"こちょうしのぶ　胡蝶しのぶ",
type:"ma",
price:1500,
date: "",
img:"images/kimetu/sinobu_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 ぬーどるストッパーフィギュア <br>― 猗窩座・戦闘Ver. ― ラウンドワン限定",
search:"あかざ",
type:"nusuto",
price:1600,
date: "",
img:"images/kimetu/akaza_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 ぬーどるストッパーフィギュア<br>― 煉獄杏寿郎・戦闘Ver. ―ラウンドワン限定",
search:"れんごくきょうじゅろう",
type:"nusuto",
price:1300,
date: "",
img:"images/kimetu/rengoku_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Linkフィギュア <br>“竈門炭治郎” －刀鍛冶の里編－",
search:"かまどたんじろう",
type:"xros",
price:1000,
date: "",
img:"images/kimetu/tanzi_2xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“不死川実弥”－柱稽古編－",
search:"しなずがわさねみ",
type:"xros",
price:2000,
date: "",
img:"images/kimetu/sina_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“時透無一郎”－柱稽古編－",
search:"ときとうむいちろう",
type:"xros",
price:4000,
date: "",
img:"images/kimetu/tokito_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Link フィギュア “煉獄杏寿郎”",
search:"れんごくきょうじゅろう",
type:"xros",
price:1000,
date: "",
img:"images/kimetu/rengoku_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Link フィギュア “猗窩座”",
search:"あかざ",
type:"xros",
price:1300,
date: "",
img:"images/kimetu/akaza2_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-AKAZA-",
search:"あかざ　猗窩座",
type:"gra",
price:1300,
date: "",
img:"images/kimetu/akaza_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-RENGOKU KYOJURO-",
search:"れんごくきょうじゅろう　煉獄杏寿郎",
type:"gra",
price:1000,
date: "",
img:"images/kimetu/rengoku_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-DOMA-",
search:"どうま　童磨",
type:"gra",
price:1500,
date: "",
img:"images/kimetu/doma_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -不死川実弥-",
search:"しなずがわさねみ",
type:"vib",
price:1800,
date: "",
img:"images/kimetu/sina_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -煉獄杏寿郎-",
search:"れんごくきょうじゅろう",
type:"vib",
price:1600,
date: "",
img:"images/kimetu/rengoku_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS -胡蝶しのぶ-",
search:"こちょうしのぶ",
type:"vib",
price:1800,
date: "",
img:"images/kimetu/sinobu_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 VIBRATION STARS <br>-ZETSU & HOSHIGAKI KISAME-",
search:"ぜつ　ゼツ",
type:"vib",
price:1300,
date: "",
img:"images/naruto/zetu_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"『新劇場版 銀魂-吉原大炎上-』 VIBRATION STARS -神威-",
search:"かむい",
type: "vib",
price:1000,
date: "",
img:"images/gintama/kamui_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"『新劇場版 銀魂-吉原大炎上-』 VIBRATION STARS -神楽-",
search:"かぐら",
type: "vib",
price:1000,
date: "",
img:"images/gintama/kagura_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 <br>ハイプレミアムフィギュア “早川アキ”",
search:"はやかわあき",
type: "hi",
price:1100,
date: "",
img:"images/tyen/aki_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
search:"くろおてつお",
type:"flu",
price:700,
date: "",
img:"images/haikyu/kuroo.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
search:"こづめけんま",
type:"flu",
price:700,
date: "",
img:"images/haikyu/kodu.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
search:"かげやまとびお",
type:"flu",
price:600,
date: "",
img:"images/haikyu/kage.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
search:"ひなたしょうよう",
type:"flu",
price:600,
date: "",
img:"images/haikyu/hinata.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"rerugan",
name:"『とある魔術の禁書目録』 ESPRESTO-LEVEL5 Accelerator-",
search:"一方通行　あくせられーた　アクセラレータ",
type:"esp",
price:550,
date: "",
img:"images/rerugan/akuse.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編 EFFECTREME-リムル＝テンペスト -スペシャルカラーver.",
search:"りむるてんぺすと",
type:"eff",
price:800,
date: "",
img:"images/tensura/rimuru_eff_s.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編<br>魔王リムル=テンペスト フィギュア",
search:"りむるてんぺすと",
type:"",
price:900,
date: "",
img:"images/tensura/rimuru_maou.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』ぬーどるストッパーフィギュア<br>ー 桜ミク2024 パールカラーver. ー",
search:"はつねみく",
type:"nusuto",
price:800,
date: "",
img:"images/miku/2024_sakura.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』Luminasta <br>“初音ミク”－クラシカルメイド－",
search:"はつねみく",
type:"lum",
price:700,
date: "",
img:"images/miku/meido.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミクシリーズ Lminasta <br>“初音ミク 16th Anniversary” ぶーたVer.",
search:"はつねみく",
type:"lum",
price:1000,
date: "",
img:"images/miku/16_anni.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミク　Aqua Float Girls フィギュア",
search:"はつねみく",
type:"aqua",
price:800,
date: "",
img:"images/miku/aqua.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 Fashion フィギュア Country",
search:"かんとりー　カントリー　はつねみく",
type:"fa",
price:1300,
date: "",
img:"images/miku/kantori.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミク×チロルチョコ』 Trio-Try-iT Figure <br>ー 初音ミクｘチロルチョコ ミルクver. ー",
search:"ちろるちょこ　はつねみく",
type:"trio",
price:1400,
date: "",
img:"images/miku/tiroru.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 ぬーどるストッパーフィギュア <br>ー うさ耳パジャマ・ブルーver. ー",
search:"うさみみぱじゃま　はつねみく",
type:"nusuto",
price:1200,
date: "",
img:"images/miku/usamimi_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フリーレン” ～SUMMER DRESS～",
search:"ふりーれん",
type:"lum",
price:800,
date: "",
img:"images/furi-ren/furi_summer.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Desktop Cute フィギュア <br>フリーレン ～トランクver.～",
search:"ふりーれん",
type:"desk",
price:1000,
date: "",
img:"images/furi-ren/furi_torank.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』<br> ちょこのせプレミアムフィギュア “ヒンメル”",
search:"ひんめる",
type:"tyoko",
price:700,
date: "",
img:"images/furi-ren/hin_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Yumemirize<br> “フェルン”～一眠り～",
search:"ふぇるん",
type:"yume",
price:500,
date: "",
img:"images/furi-ren/fer_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フェルン” ～メイド服～",
search:"ふぇるん",
type:"lum",
price:900,
date: "",
img:"images/furi-ren/fer_meido.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フリーレン” ～インミミック～",
search:"ふりーれん　みみっく",
type:"lum",
price:1300,
date: "",
img:"images/furi-ren/furi_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 -Relax time-フリーレン",
search:"ふりーれん",
type:"relax",
price:600,
date: "",
img:"images/furi-ren/furi_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 FIGURIZMα <br>“フリーレン” ～魔法の高み～",
search:"ふりーれん",
type: "fig",
price:900,
date: "",
img:"images/furi-ren/furi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』<br>Trio-Try-iT Figure ー ヒンメル ー",
search:"ひんめる",
type:"trio",
price:900,
date: "",
img:"images/furi-ren/hin_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 <br>Trio-Try-iT Figure ー フリーレン ー",
search:"ふりーれん",
type:"trio",
price:700,
date: "",
img:"images/furi-ren/furi-ren_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 ちあぴこ～とどろきしょうと～",
search:"",
type:"",
price:1500,
date: "",
img:"images/hiro/todoroki_tia.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 ちあぴこ～ばくごうかつき～",
search:"",
type:"",
price:1500,
date: "",
img:"images/hiro/bakugo_tia.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 GLITTER&GLAMOURS <br>-HIMIKO TOGA- duffel coat ver.",
search:"とがひみこ",
type:"gli",
price:900,
date: "",
img:"images/hiro/toga_coat_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 Grandista -MIDORIYA IZUKU-",
search:"緑谷出久　みどりやいずく　でく",
type:"gra",
price:600,
date: "",
img:"images/hiro/deku_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 MAXIMATIC<br>IZUKU MIDORIYA Ⅱ",
search:"緑谷出久　みどりやいずく　でく",
type:"ma",
price:700,
date: "",
img:"images/hiro/deku_ma2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 CLEARISE ゴジータ&ベジット",
search:"べじっと",
type:"cle",
price:800,
date: "",
img:"images/db/bezi_cle.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 CLEARISE ゴジータ&ベジット",
search:"ごじーた",
type:"cle",
price:800,
date: "",
img:"images/db/gozi_cle.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 MATCH MAKERS ジレン<br>（VS孫悟空 身勝手の極意）",
search:"じれん",
type:"mat",
price:600,
date: "",
img:"images/db/ziren_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box 桃白白",
search:"たおぱいぱい",
type: "his",
price:600,
date: "",
img:"images/db/pai_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS フリーザ<br>（VS孫悟空）",
search:"ふりーざ",
type:"mat",
price:900,
date: "",
img:"images/db/furiza_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 孫悟空<br>（VSフリーザ）",
search:"そんごくう",
type:"mat",
price:700,
date: "",
img:"images/db/goku_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 <br>SOLID EDGE WORKS -THE出陣- ブロリー",
search:"ぶろりー",
type:"syutu",
price:800,
date: "",
img:"images/db/burori2_syutu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『DRAGON BALL Z DOKKAN BATTLE』 10TH ANNIVERSARY FIGURE -超ゴジータ-",
search:"ごじーた",
type: "",
price:700,
date: "",
img:"images/db/dokkan_gozi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『DRAGON BALL Z DOKKAN BATTLE』 10TH ANNIVERSARY FIGURE -超ベジット-",
search:"べじっと",
type: "",
price:700,
date: "",
img:"images/db/dokkan_bezi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』<br>SOLID EDGE WORKS-THE出陣- メタルクウラ",
search:"めたるくうら",
type: "syutu",
price:500,
date: "",
img:"images/db/kuura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 魔人ブウ<br>（VSアルティメット悟飯）",
search:"まじんぶう",
type:"mat",
price:650,
date: "",
img:"images/db/bu_mat2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 超サイヤ人3孫悟空<br>（VS魔人ブウ）",
search:"そんごくう",
type:"mat",
price:600,
date: "",
img:"images/db/goku3_mat2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 超サイヤ人3孫悟空<br>（VS魔人ブウ(純粋)）",
search:"そんごくう",
type:"mat",
price:650,
date: "",
img:"images/db/goku3_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 コガネスピーカー",
search:"こがね",
type: "",
price:1000,
date: "",
img:"images/zyuzyutu/kogane.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 フィギュアライト 乙骨憂太・リカ",
search:"おっこつゆうた　りか",
type: "",
price:700,
date: "",
img:"images/zyuzyutu/otukotu_raito.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box クリリン",
search:"くりりん",
type: "his",
price:500,
date: "",
img:"images/db/kuri_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールGT』 SOLID EDGE WORKS-THE出陣- 超サイヤ人4ゴジータ",
search:"ごじーた",
type: "syutu",
price:550,
date: "",
img:"images/db/gozita4_solid.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 Grandista -GOGETA-Ⅱ",
search:"ごじーた　ゴジータ",
type: "gra",
price:600,
date: "",
img:"images/db/gozita_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 Grandista -MAJIN VEGETA-",
search:"まじんべじーた　魔人ベジータ",
type: "gra",
price:1200,
date: "",
img:"images/db/bezi_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 MAXIMATIC PLUS SUKUNA",
search:"すくな　宿儺",
type: "ma",
price:1500,
date: "",
img:"images/zyuzyutu/sukuna_map.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 XStellar “虎杖悠仁”",
search:"いたどりゆうじ",
type: "xs",
price:800,
date: "",
img:"images/zyuzyutu/itadori_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 XStellar “乙骨憂太”",
search:"おっこつゆうた",
type: "xs",
price:700,
date: "",
img:"images/zyuzyutu/otukotu_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 Grandista -FUSHIGURO MEGUMI-",
search:"ふしぐろめぐみ　伏黒恵",
type: "gra",
price:500,
date: "",
img:"images/zyuzyutu/megumi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト-疾風伝』 Grandista-UCHIHA ITACHI-",
search:"うちはいたち　うちはイタチ",
type:"gra",
price:2200,
date: "",
img:"images/naruto/itati_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 MAXIMATIC PLUS MONKEY.D.LUFFY I",
search:"るふぃ　ルフィ",
type:"ma",
price:1500,
date: "",
img:"images/wanpi/rufi_map.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ[新編]叛逆の物語 BANPRESTO EVOLVE 悪魔ほむらフィギュア",
search:"あくまほむら",
type:"bpev",
price:1400,
date: "",
img:"images/madomagi/homura_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ[新編]叛逆の物語 BANPRESTO EVOLVE アルティメットまどかフィギュア",
search:"あるてぃめっとまどか",
type:"bpev",
price:1800,
date: "",
img:"images/madomagi/madoka_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険スターダストクルセイダース<br>Mometria  DIO",
search:"でぃお　ディオ",
type:"mome",
price:1200,
date: "",
img:"images/zyozyo/dio3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険スターダストクルセイダース<br>Mometria  空条承太郎",
search:"くうじょうじょうたろう",
type:"mome",
price:1500,
date: "",
img:"images/zyozyo/zyotaro.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 戦闘潮流』<br>Mometria カーズ",
search:"かーず",
type:"mome",
price:1500,
date: "",
img:"images/zyozyo/ka-zu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 戦闘潮流』<br>Mometria ジョセフ・ジョースター",
search:"じょせふじょーすたー",
type:"mome",
price:1500,
date: "",
img:"images/zyozyo/zyosefu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 ファントムブラッド』<br>Mometria ディオ・ブランドー",
search:"でぃおぶらんどー",
type:"mome",
price:1200,
date: "",
img:"images/zyozyo/dio.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 ファントムブラッド』<br>Mometria  ジョナサン・ジョースター",
search:"じょなさんじょーすたー",
type:"mome",
price:1000,
date: "",
img:"images/zyozyo/zyonasan.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"umamusume",
name:"『ウマ娘 シンデレラグレイ』 BANPRESTO EVOLVE<br>オグリキャップフィギュア",
search:"おぐりきゃっぷ",
type:"bpev",
price:2000,
date: "",
img:"images/umamusume/oguri_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"ika",
name:"『侵略!イカ娘』 Trio-Try-iT Figure ー イカ娘 ー",
search:"いかむすめ",
type:"trio",
price:1000,
date: "",
img:"images/ika/ika.jpg",
source:"https://charahiroba.com/"
},

{
series:"pokemon",
name:"『ポケモンマスターズ EX』PANEL SPECTACLE<br>～アルコスシロナ&メガガブリアス～",
search:"しろな　がぶりあす",
type:"",
price:1000,
date: "",
img:"images/pokemon/sirona.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hokuto",
name:"『北斗の拳 -FIST OF THE NORTH STAR-』<br>Grandista -KENSHIRO-",
search:"けんしろう　ケンシロウ",
type:"gra",
price:800,
date: "",
img:"images/hokuto/ken.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nintama",
name:"『忍たま乱太郎』 山田利吉 フィギュア",
search:"やまだりきち",
type:"",
price:500,
date: "",
img:"images/nintama/yamada.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box 神龍",
search:"しぇんろん　シェンロン",
type:"his",
price:1000,
date: "",
img:"images/db/syenron_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"watanare",
name:"『わたしが恋人になれるわけないじゃん、ムリムリ!（※ムリじゃなかった!?）』Trio-Try-iT Figureー 王塚真唯 ー",
search:"おうづかまい",
type:"trio",
price:2000,
date: "",
img:"images/watanare/outuka_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hebu",
name:"『ヘブンバーンズレッド』 Trio-Try-iT Figure<br>ー 和泉ユキ ー",
search:"いずみゆき",
type:"trio",
price:700,
date: "",
img:"images/hebu/yuki_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』<br>ぬーどるストッパーフィギュア ー カナリア ー",
search:"かなりあ　はつねみく",
type:"nusuto",
price:800,
date: "",
img:"images/miku/miku_kanariya_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"tora",
name:"『To LOVE る―とらぶる―ダークネス』 Trio-Try-iT Figure ― モモ・ベリア・デビルーク ―",
search:"もも",
type:"trio",
price:700,
date: "",
img:"images/tora/momo_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"tyen",
name:"『チェンソーマン』 Luminasta “マキマ”",
search:"まきま",
type: "lum",
price:900,
date: "",
img:"images/tyen/makima_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"eva",
name:"『シン・エヴァンゲリオン劇場版』<br>FIGURIZMα　“アヤナミレイ（仮称）”",
search:"あやなみれい",
type: "fig",
price:1100,
date: "",
img:"images/eva/ayanami_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 Luminasta　“脹相”",
search:"ちょうそう",
type: "lum",
price:1400,
date: "",
img:"images/zyuzyutu/tyousou_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"vtu",
name:"『赤見かるびの「お笑いかるび塾」』<br>Luminasta　“赤見かるび”",
search:"あかみかるび",
type: "lum",
price:800,
date: "",
img:"images/vtu/akami_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION<br>-SILVERS.RAYLEIGH-",
search:"しるばーれいりー　シルバーレイリー",
type:"bato",
price:700,
date: "",
img:"images/wanpi/reiri_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION<br>-GOL.D.ROGER-",
search:"ごーるどろじゃー　ゴールドロジャー",
type:"bato",
price:700,
date: "",
img:"images/wanpi/rozya_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aimasu",
name:"『学園アイドルマスター』 <br>ESPRESTO-Sweet moment-篠澤 広",
search:"しのさわひろ",
type:"esp",
price:800,
date: "",
img:"images/aimasu/aimasu_hiro_es.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 G×materia VEGETA Ⅱ",
search:"べじーた",
type:"gma",
price:800,
date: "",
img:"images/db/bezi_gma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>佐倉杏子 フィギュア",
search:"さくらきょうこ",
type:"",
price:800,
date: "",
img:"images/madomagi/kyoko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>巴マミ フィギュア",
search:"ともえまみ",
type:"",
price:800,
date: "",
img:"images/madomagi/mami.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>暁美ほむら フィギュア",
search:"あけみほむら",
type:"",
price:1000,
date: "",
img:"images/madomagi/homura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>美樹さやか フィギュア",
search:"みきさやか",
type:"",
price:800,
date: "",
img:"images/madomagi/sayaka.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>鹿目まどか フィギュア",
search:"かなめまどか",
type:"",
price:1000,
date: "",
img:"images/madomagi/madoka.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』KING OF ARTIST <br>RORONOA ZORO & SANJI-SPECIAL ver.-",
search:"ろろのあぞろ　ロロノアゾロ",
type:"koa",
price:900,
date: "",
img:"images/wanpi/zoro_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』KING OF ARTIST <br>RORONOA ZORO & SANJI-SPECIAL ver.-",
search:"さんじ　サンジ",
type:"koa",
price:800,
date: "",
img:"images/wanpi/sanzi_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 GLITTER&GLAMOURS<br>-JEWELRY.BONNEY-Ⅱ",
search:"じゅえりーぼにー　ジュエリーボニー",
type:"gli",
price:800,
date: "",
img:"images/wanpi/boni_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』MAXIMATIC<br> IZUKU MIDORIYA Ⅲ",
search:"みどりやいずく　でく　緑谷出久",
type:"ma",
price:1000,
date: "",
img:"images/hiro/deku_ma3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 MAXIMATIC <br>SHOTO TODOROKI Ⅱ",
search:"とどろきしょうと　轟焦凍",
type:"ma",
price:800,
date: "",
img:"images/hiro/todoroki_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-ヒソカ-G.I.編",
search:"ひそか",
type:"",
price:1400,
date: "",
img:"images/hant/hisoka_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-キルア-G.I.編",
search:"きるあ",
type:"",
price:1200,
date: "",
img:"images/hant/kirua_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-ゴン-G.I.編",
search:"ごん",
type:"",
price:1000,
date: "",
img:"images/hant/gon_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -我妻善逸-",
search:"あがつまぜんいつ",
type:"vib",
price:1500,
date: "",
img:"images/kimetu/zen_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -獪岳-",
search:"かいがく",
type:"vib",
price:1200,
date: "",
img:"images/kimetu/kai_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"『チェンソーマン』 Break time collection vol.4",
search:"ぽちた　でんじ　ポチ太　デンジ",
type:"bre",
price:2000,
date: "",
img:"images/tyen/potita_bre.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kusuri",
name:"『薬屋のひとりごと』 Vivit フィギュア 猫猫 （狩り）",
search:"まおまお",
type:"vivi",
price:800,
date: "",
img:"images/kusuri/maomao_vivi.jpg",
source:"http://fansclub.jp/pc/top/"
},


{
series:"wanpi",
name:"『ワンピース』 Grandista ボア・ハンコック",
search:"ぼあはんこっく",
type:"gra",
price:1200,
date: "",
img:"images/wanpi/han_gra.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 Grandista <br>-HARUNO SAKURA ＆ UCHIHA SASUKE-",
search:"うちはさすけ　うちはサスケ",
type:"gra",
price:1300,
date: "",
img:"images/naruto/sasuke_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 Grandista <br>-HARUNO SAKURA ＆ UCHIHA SASUKE-",
search:"はるのさくら　春野サクラ",
type:"gra",
price:1500,
date: "",
img:"images/naruto/sakura_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"zyuzyutu",
name:"『呪術廻戦』 KING OF ARTIST  KENJAKU",
search:"けんじゃく",
type:"koa",
price:800,
date: "",
img:"images/zyuzyutu/geto_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>XStellar　“喜多川海夢”",
search:"きたがわまりん",
type:"xs",
price:700,
date: "",
img:"images/kisekoi/marin_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION <br>-MONKEY.D.LUFFY GEAR5 Ⅱ-",
search:"るふぃ　ルフィ　にか　ニカ",
type:"bato",
price:800,
date: "",
img:"images/wanpi/rufi_bato2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 THEORAMA SOUL -SHANKS-",
search:"しゃんくす　シャンクス",
type:"",
price:1200,
date: "",
img:"images/wanpi/syankusu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"フィグライフ！火影岩 SPECIAL",
search:"ほかげいわ",
type:"figl",
price:700,
date: "",
img:"images/naruto/boruto_fig2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"フィグライフ！火影岩 SPECIAL",
search:"ほかげいわ",
type:"figl",
price:700,
date: "",
img:"images/naruto/boruto_fig.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kon",
name:"Trio-Try-iT -平沢唯-",
search:"ひらさわゆい",
type:"trio",
price:2000,
date: "",
img:"images/kon/yui_trio.jpg",
source:"https://charahiroba.com/"
},


{
series:"kon",
name:"Trio-Try-iT -中野梓-",
search:"なかのあずさ",
type:"trio",
price:1900,
date: "",
img:"images/kon/azu_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -秋山澪-",
search:"あきやまみお",
type:"trio",
price:1500,
date: "",
img:"images/kon/mio_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -田井中律-",
search:"たいなかりつ",
type:"trio",
price:1400,
date: "",
img:"images/kon/ritu_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -琴吹紬-",
search:"ことぶきつむぎ",
type:"trio",
price:1400,
date: "",
img:"images/kon/mugi_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"singeki",
name:"Grandista　-リヴァイ-",
search:"",
type:"gra",
price:1500,
date: "",
img:"images/singeki/riva_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"singeki",
name:"Grandista　-エレン・イェーガー-",
search:"えれん",
type:"gra",
price:1200,
date: "",
img:"images/singeki/eren_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"pansuto",
name:"『New PANTY ＆ STOCKING with GARTERBELT』 <br>BRILLIANT フィギュア パンティ",
search:"ぱんてぃ",
type:"bri",
price:1800,
date: "",
img:"images/pansuto/panty.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』<br> ぬーどるストッパーフィギュア ー シンデレラ ー",
search:"しんでれら",
type:"nusuto",
price:1200,
date: "",
img:"images/nikke/sin_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 Luminasta “宿儺” 「■」「開」",
search:"すくな　ふーが",
type:"lum",
price:1500,
date: "",
img:"images/zyuzyutu/sukuna_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 XrossLink フィギュア “向坂雫”",
search:"こうさかしずく",
type:"xros",
price:1000,
date: "",
img:"images/orerebe/kou_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 XrossLink フィギュア “水篠旬”",
search:"みずしのしゅん",
type:"xros",
price:1000,
date: "",
img:"images/orerebe/mizu_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"oba",
name:"『オーバーロード』 T-most アルベド フィギュア <br>～純白の悪魔ver.～",
search:"あるべど",
type:"tmost",
price:1200,
date: "",
img:"images/oba/aru_tmost.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 Fashion フィギュア Outdoor",
search:"アウトドア　あうとどあ　はつねみく",
type:"fa",
price:1300,
date: "",
img:"images/miku/miku_auto.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』フィギュア うちはサスケ・うちはイタチ～GiGOグループのお店限定～",
search:"うちはさすけ",
type: "",
price:1600,
date: "",
img:"images/naruto/sasuke_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』フィギュア うちはサスケ・うちはイタチ～GiGOグループのお店限定～",
search:"うちはいたち",
type: "",
price:1600,
date: "",
img:"images/naruto/itati_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト-疾風伝』 忍界造形列伝 <br>-波風ミナト-",
search:"なみかぜみなと",
type: "ninkai",
price:1300,
date: "",
img:"images/naruto/minato_ninkai.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buri",
name:"『BLEACH』 GLITTER&GLAMOURS <br>-TIER HARRIBEL-",
search:"てぃあはりべる　ティアハリベル",
type: "gli",
price:1100,
date: "",
img:"images/buri/hari_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"『チェンソーマン』Luminasta “チェンソーマン”",
search:"ちぇんそーまん",
type: "lum",
price:1200,
date: "",
img:"images/tyen/tyen_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 <br>ハイプレミアムフィギュア “天使の悪魔”",
search:"てんしのあくま",
type: "hi",
price:1500,
date: "",
img:"images/tyen/tensi_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 Grandista -キルア-",
search:"きるあ",
type: "gra",
price:1300,
date: "",
img:"images/hant/kirua_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 Exc∞d Creative Figure <br>ークロロ・鎮魂歌ー",
search:"くろろ",
type: "ex",
price:1100,
date: "",
img:"images/hant/kuroro_ex.jpg",
source:"https://charahiroba.com/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα “伏黒恵” 邂逅",
search:"ふしぐろめぐみ",
type:"fig",
price:1300,
date: "",
img:"images/zyuzyutu/fusi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα “伏黒甚爾” 邂逅",
search:"ふしぐろとうじ",
type:"fig",
price:1300,
date: "",
img:"images/zyuzyutu/touzi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"naruto",
name:"『-NARUTO 72 series- 45』 Grandista <br>-UZUMAKI NARUTO-",
search:"うずまきなると　うずまきナルト",
type: ["gra", "72"],
price:1500,
date: "",
img:"images/naruto/naruto_gra3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"Grandista　-うずまきナルトⅡ-",
search:"うずまきなると",
type: "gra",
price:800,
date: "",
img:"images/naruto/naruto_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』SOLID EDGE WORKS -THE出陣- ブロリーⅡ",
search:"ぶろりー",
type:"syutu",
price:800,
date: "",
img:"images/db/burori_syutu.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"naruto",
name:"『-NARUTO 72 series- 16』フィギュア<br> うずまきナルト＆うみのイルカ",
search:"うずまきなると",
type:"72",
price:800,
date: "",
img:"images/naruto/naruto_72.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"naruto",
name:"『-NARUTO 72 series- 16』フィギュア<br> うずまきナルト＆うみのイルカ",
search:"うみのいるか",
type:"72",
price:800,
date: "",
img:"images/naruto/iruka_72.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"zyuzyutu",
name:"『呪術廻戦』 Grandista GOJO SATORU",
search:"ごじょうさとる　五条悟",
type:"gra",
price:2600,
date: "",
img:"images/zyuzyutu/gozyo_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“猗窩座” －無限城編－",
search:"あかざ",
type:"xros",
price:1000,
date: "",
img:"images/kimetu/akaza_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“冨岡義勇” －無限城編－",
search:"とみおかぎゆう",
type:"xros",
price:1200,
date: "",
img:"images/kimetu/tomioka_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“竈門炭治郎” －無限城編－",
search:"かまどたんじろう",
type:"xros",
price:1000,
date: "",
img:"images/kimetu/tanziro_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-TOMIOKA GIYU-",
search:"冨岡義勇　とみおかぎゆう",
type:"gra",
price:1800,
date: "",
img:"images/kimetu/giyu_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』ESPRESTO-Excite Motions-vol.1",
search:"みずしのしゅん　水篠旬",
type:"esp",
price:1300,
date: "",
img:"images/orerebe/mizusino_esp.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"miku",
name:"『初音ミクシリーズ』 Trio-Try-iT Figure <br>ー 雪ミクxクロミ ー",
search:"はつねみく　くろみ　ゆきみく",
type:"trio",
price:2400,
date: "",
img:"images/miku/kuromi_miku.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"ガンダム45周年×初音ミク フィギュアシャアザクぐるみ 初音ミクVer.",
search:"しゃあざく　はつねみく",
type:"",
price:1200,
date: "",
img:"images/miku/miku_zaku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"『桜ミク』 AMP＋ フィギュア 〜桜ドレス ver.〜",
search:"はつねみく　さくらみく",
type:"",
price:1300,
date: "",
img:"images/miku/sakuramiku2026.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 GLITTER&GLAMOURS <br>-SHINOBU KOCHO-",
search:"こちょうしのぶ　胡蝶しのぶ",
type:"gli",
price:1300,
date: "",
img:"images/kimetu/kotyo_gri.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα　“宿儺”",
search:"すくな",
type:"fig",
price:1800,
date: "",
img:"images/zyuzyutu/sukuna_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミク ぬーどるストッパー　-ヴィンテージドール-",
search:"はつねみく　",
type:"nusuto",
price:2200,
date: "",
img:"images/miku/miku_vin.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"初音ミク×ラスカル Trio-Try-iT -悪魔-",
search:"あくま　らすかる　はつねみく",
type:"trio",
price:2400,
date: "",
img:"images/miku/miku_akuma.jpg",
source:"https://charahiroba.com/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>T-most 喜多川海夢 フィギュア 〜黒江雫ver.〜",
search:"くろえしずく",
type:"tmost",
price:1200,
date: "",
img:"images/kisekoi/sizuku_tmost.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kusuri",
name:"BRILLIANTフィギュア 猫猫",
search:"まおまお",
type:"bri",
price:900,
date: "",
img:"images/kusuri/maomao_buri.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"kusuri",
name:"『薬屋のひとりごと』 猫猫 フィギュア～園遊会～",
search:"まおまお",
type:"",
price:700,
date: "",
img:"images/kusuri/maomao_enyu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"MAXIMATIC　五条悟",
search:"ごじょうさとる",
type:"ma",
price:1000,
date: "",
img:"images/zyuzyutu/gozyo_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Grandista -FRIEREN-",
search:"フリーレン　ふりーれん",
type:"gra",
price:700,
date: "",
img:"images/furi-ren/furi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC フェルン",
search:"ふぇるん",
type:"ma",
price:700,
date: "",
img:"images/furi-ren/fer_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC STARK",
search:"しゅたるく　シュタルク",
type:"ma",
price:800,
date: "",
img:"images/furi-ren/syuta_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC FRIEREN",
search:"ふりーれん　フリーレン",
type:"ma",
price:500,
date: "",
img:"images/furi-ren/furi_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC FRIEREN Ⅱ",
search:"フリーレン　ふりーれん",
type:"ma",
price:700,
date: "",
img:"images/furi-ren/furi_ma2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC HIMMEL",
search:"ひんめる　ヒンメル",
type:"ma",
price:1000,
date: "",
img:"images/furi-ren/hin_ma.jpg",
source:"https://bsp-prize.jp/"
},


];

function initShow() {
  const today = new Date();
  const period = 30; // 何日分を表示したいか（ここでは30日間）

  // 🔥 日付を計算して「最近追加されたもの」だけを抜き出す
  const newFigures = figures.filter(f => {
    if (!f.date) return false; // 日付がないデータは無視
    
    const itemDate = new Date(f.date);
    const diffTime = today - itemDate; // 今日との差分（ミリ秒）
    const diffDays = diffTime / (1000 * 60 * 60 * 24); // 日数に変換
    
    return diffDays >= 0 && diffDays <= period; // 0日〜30日以内のもの
  });

  if (newFigures.length === 0) return;

  let html = "";
  newFigures.forEach(f => {
    html += `
    <div class="card">
      <div class="new-badge">NEW</div>
      <img src="${f.img}" loading="lazy">
      <h3 class="name">${f.name}</h3>
      <p class="price">¥ ${f.price}</p>
      ${f.source ? `<a href="${f.source}" target="_blank" class="source">出典リンク</a>` : ""}
    </div>
    `;
  });

  const listContainer = document.getElementById("figureList");
  listContainer.innerHTML = html;
  listContainer.classList.add('is-active');
}

function clearFilters() {
  // 1. 各要素をIDで直接指定してリセット
  const searchInput = document.getElementById("search");
  const seriesSelect = document.getElementById("series");
  const typeSelect = document.getElementById("type");
  const priceSelect = document.getElementById("price");
  const sortSelect = document.getElementById("sort");

  // 2. それぞれの値を初期状態に戻す
  if (searchInput) searchInput.value = "";
  if (seriesSelect) seriesSelect.value = "all";
  if (typeSelect) typeSelect.value = "all";
  if (priceSelect) priceSelect.value = "all";
  if (sortSelect) sortSelect.value = "none"; // ソートだけ初期値が"none"なので合わせる

  // 3. 表示を最新の状態（リセット後）に更新
  showFigures();

  console.log("すべてのフィルターをクリアしました");
}
function showFigures() {
  // --- 更新日の処理 ---
  const updated = new Date(document.lastModified);
  const formatted2 = updated.getFullYear() + "年" + 
                     (updated.getMonth() + 1) + "月" + 
                     updated.getDate() + "日";

  // --- 入力値の取得 ---
  const search = document.getElementById("search").value.toLowerCase();
  const series = document.getElementById("series").value;
  const type = document.getElementById("type").value;
  const price = document.getElementById("price").value;
  const sort = document.getElementById("sort").value;

  let filtered = [...figures];

  // --- フィルタリング処理 ---
  if (series !== "all") {
    filtered = filtered.filter(f => f.series === series);
  }
  if (type !== "all") {
    filtered = filtered.filter(f =>
      Array.isArray(f.type) ? f.type.includes(type) : f.type === type
    );
  }
  if (price !== "all") {
    filtered = filtered.filter(f => f.price == price);
  }
  if (search !== "") {
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(search) ||
      (f.search && f.search.toLowerCase().includes(search))
    );
  }

  // --- ソート処理 ---
  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "ja"));
  }

  // --- HTMLの生成 ---
  let html = "";
  filtered.forEach(f => {
    html += `
    <div class="card">
      <img src="${f.img}" loading="lazy">
      <h3 class="name">${f.name}</h3>
      <p class="price">¥ ${f.price}</p>
      ${f.source ? `<a href="${f.source}" target="_blank" class="source">出典リンク</a>` : ""}
    </div>
    `;
  });

  // --- 表示の反映とコントロール ---
  const listContainer = document.getElementById("figureList");
  listContainer.innerHTML = html;

  // 🔥 条件に合うものがある時だけ表示クラスをつける
  // 何も選択・入力されていない時（初期状態）は非表示のままにする工夫
  const isDefault = (search === "" && series === "all" && type === "all" && price === "all");

  if (html !== "" && !isDefault) {
    listContainer.classList.add('is-active');
  } else {
    listContainer.classList.remove('is-active');
  }
}
