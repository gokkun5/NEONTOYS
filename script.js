//全部まとめる
const figures = [

{
series:"rerugan",
name:"『とある科学の超電磁砲』 Desktop Cute フィギュア 御坂美琴 〜チャイナドレスver.〜",
search:"みさかみこと",
type:"desk",
price:500,
img:"images/rerugan/mikoto_tyai.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"eva",
name:"ヱヴァンゲリヲン新劇場版ハイプレミアムフィギュア“レイ”制服Ver.",
search:"あやなみれい",
type: "hi",
price:1000,
img:"images/eva/ayanami_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 GLITTER&GLAMOURS-REZE-",
search:"れぜ",
type:"gli",
price:2500,
img:"images/tyen/reze_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"mazyan",
name:"『麻雀ファイトガール』 フィギュアコレクション グリム・アロエ バニー",
search:"ぐりむあろえ",
type:"",
price:1200,
img:"images/mazyan/aroe.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"mazyan",
name:"『麻雀ファイトガール』 フィギュアコレクション ミツモト・ダイア サキュバスチアコス",
search:"みつもとだいあ",
type:"",
price:1200,
img:"images/mazyan/daia.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"kusuri",
name:"TVアニメ『薬屋のひとりごと』 ちょこのせプレミアムフィギュア“猫猫” 月精Ver.",
search:"まおまお",
type:"tyoko",
price:500,
img:"images/kusuri/gessei_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 XStellar “シュタルク” ～雪遊び～",
search:"しゅたるく",
type:"xs",
price:600,
img:"images/furi-ren/syuta_xs_yuki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア ちあぴこ～みどりやいずく～",
search:"",
type:"",
price:2000,
img:"images/hiro/deku_tia.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Desktop Cute フィギュア フリーレン 〜ルームウェアver.〜",
search:"ふりーれん",
type:"desk",
price:1100,
img:"images/furi-ren/furi_rumu.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kuresin",
name:"クレヨンしんちゃん スーパービッグフィギュア～アクション仮面～",
search:"あくしょんかめん",
type:"",
price:700,
img:"images/kuresin/akusyon.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yugi",
name:"『遊☆戯☆王シリーズ』 奈落の落とし穴 フィギュア付きダストボックス",
search:"ならくのおとしあな",
type:"",
price:500,
img:"images/yugi/naraku.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"yugi",
name:"アニメ「遊☆戯☆王」シリーズ　Monsters LEGION オベリスクの巨神兵",
search:"おべりすく",
type:"mon",
price:1000,
img:"images/yugi/obe.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"uzaki",
name:"『宇崎ちゃんは遊びたい！ω』 Desktop Cute フィギュア 宇崎月 ～浜辺で水着ver.～",
search:"うざきつき",
type:"desk",
price:800,
img:"images/uzaki/tuki_desk.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"tora",
name:"『To LOVEる-とらぶる-ダークネス』 Aqua Float Girls フィギュア モモ",
search:"もも",
type:"aqua",
price:700,
img:"images/tora/momo_aqua.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"wanpi",
name:"ワンピース 戦光絶景-BORSALINO-",
search:"きざる　ぼるさりーの",
type:"syukko",
price:550,
img:"images/wanpi/kizaru_senko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール SOFVIMATES～亀仙人(スーツスタイル)～",
search:"かめせんにん",
type: "sof",
price:1000,
img:"images/db/kame_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール SOFVIMATES～クリリン(スーツスタイル)～",
search:"くりりん",
type: "sof",
price:1500,
img:"images/db/kuri_sof.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール SOFVIMATES～孫悟空(スーツスタイル)～",
search:"そんごくう",
type: "sof",
price:1500,
img:"images/db/goku_sof.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 Desktop Cute フィギュア 乾紗寿叶 〜Tシャツver.〜",
search:"いぬいさじゅな　じゅじゅ",
type:"desk",
price:700,
img:"images/kisekoi/zyuzyu_desk_t.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"osinoko",
name:"【推しの子】Desktop Cute フィギュア　アイ 〜Rabbit room wear ver.〜",
search:"あい",
type:"desk",
price:700,
img:"images/osinoko/ai_desk.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』ぬーどるストッパーフィギュア​ ー 桜ミク2025 ー",
search:"みく",
type:"nusuto",
price:1000,
img:"images/miku/sakura_2025.jpg",
source:"https://charahiroba.com/"
},

{
series:"wanpi",
name:"ワンピース BATTLE RECORD COLLECTION-MONKEY.D.GARP Ⅱ-",
search:"がーぷ",
type:"bato",
price:700,
img:"images/wanpi/gapu_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aoeku",
name:"青の祓魔師島根啓明結社篇 XrossLinkフィギュア“奥村雪男”",
search:"おくむらゆきお",
type:"xros",
price:300,
img:"images/aoeku/yukio_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"nyanko",
name:"にゃんこ大戦争 にゃんこ軍団出陣フィギュア～にゃんこ城～",
search:"",
type: "",
price:400,
img:"images/nyanko/siro.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"oba",
name:"『オーバーロード』Desktop Cute シャルティア〜チャイナドレスver.〜",
search:"しゃるてぃあ",
type:"desk",
price:450,
img:"images/oba/syaru_desk_tyai.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"db",
name:"ドラゴンボール History Box ヤムチャ",
search:"やむちゃ",
type: "his",
price:500,
img:"images/db/yamu_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ SOLID EDGE WORKS-THE出陣-超サイヤ人3ゴテンクス",
search:"ごてんくす　すーぱー",
type:"syutu",
price:650,
img:"images/db/goten3_syutu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kamitu",
name:"神椿市建設中。　1/7スケールフィギュア　朝主派流",
search:"あさぬしはる",
type:"",
price:200,
img:"images/kamitu/asa.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"uru",
name:"シン・ジャパン・ヒーローズ・ユニバース　でふぉるむぷらす　ウルトラマン（シン・ウルトラマン）　フルアクションデフォルメフィギュア",
search:"うるとらまん",
type:"defo",
price:400,
img:"images/uru/uru.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"kamen",
name:"シン・ジャパン・ヒーローズ・ユニバース　でふぉるむぷらす　仮面ライダー（シン・仮面ライダー）フルアクションデフォルメフィギュア",
search:"かめん",
type:"defo",
price:400,
img:"images/kamen/kamen.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"eva",
name:"シン・ジャパン・ヒーローズ・ユニバース　でふぉるむぷらす　エヴァンゲリオン初号機　フルアクションデフォルメフィギュア",
search:"しょごうき",
type:"defo",
price:400,
img:"images/eva/eva.jpg",
source:"https://www.elcocoland.com/shop/"
},


{
series:"gozira",
name:"シン・ジャパン・ヒーローズ・ユニバース　でふぉるむぷらす　ゴジラ（２０１６）　フルアクションデフォルメフィギュア",
search:"ごじら",
type:"defo",
price:400,
img:"images/gozira/gozira.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"kisekoi",
name:"TVアニメ「その着せ替え人形は恋をする」XStellar“乾紗寿叶”",
search:"いぬいさじゅな　じゅじゅ",
type: "xs",
price:600,
img:"images/kisekoi/zyuzyu_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』FIGURIZMα“オカルン（変身）”トランスフォームビジュアルVer.",
search:"おかるん",
type: "fig",
price:500,
img:"images/dandadan/oka_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"db",
name:"ドラゴンボールZ Grandista-VEGETA-",
search:"べじーた",
type: "gra",
price:500,
img:"images/db/bezi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボール超 Grandista-GOGETA-",
search:"ごじーた",
type: "gra",
price:550,
img:"images/db/gozita_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース フィグライフ! ユースタス・キッド",
search:"ゆーすたすきっど",
type:"figl",
price:500,
img:"images/wanpi/yusu_figl.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"wanpi",
name:"ワンピース KING OF ARTIST KUZAN",
search:"あおきじ　くざん",
type:"koa",
price:400,
img:"images/wanpi/kuzan_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST GOL.D.ROGER-SPECIAL ver.-",
search:"ごーるどろじゃー",
type:"koa",
price:600,
img:"images/wanpi/rozyasp_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-SABO-",
search:"さぼ",
type:"gra",
price:450,
img:"images/wanpi/sabo_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"葬送のフリーレン AMP＋ フリーレン フィギュア",
search:"ふりーれん",
type:"amp",
price:1000,
img:"images/furi-ren/furi_amp.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア THE AMAZING HEROES-PLUS-KATSUKI BAKUGO Ⅲ",
search:"ばくごうかつき",
type:"ame",
price:900,
img:"images/hiro/bakugo3_ame.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"eva",
name:"ヱヴァンゲリヲン新劇場版ハイプレミアムフィギュア“碇シンジ”制服Ver.",
search:"いかりしんじ",
type: "hi",
price:700,
img:"images/eva/sinzi_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"reia",
name:"『魔法騎士レイアース』 鳳凰寺風 HereDitailフィギュア",
search:"ほうおうじふう",
type:"",
price:600,
img:"images/reia/fu.jpg",
source:"https://www.sk-japan.co.jp/charatoru/topic"
},

{
series:"reia",
name:"魔法騎士レイアース 獅堂光 HereDitailフィギュア",
search:"しどうひかる",
type:"",
price:600,
img:"images/reia/hikaru.jpg",
source:"https://www.sk-japan.co.jp/charatoru/topic"
},


{
series:"hant",
name:"HUNTER×HUNTER Grandista-ヒソカ-",
search:"ひそか",
type:"gra",
price:1800,
img:"images/hant/hiso_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST THE MONKEY.D.LUFFY GEAR5 Ⅱ",
search:"るふぃ　にか",
type:"koa",
price:600,
img:"images/wanpi/nika2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST THE TRAFALGAR.LAW Ⅱ",
search:"とらふぁるがーろー",
type:"koa",
price:1000,
img:"images/wanpi/ro2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース KING OF ARTIST THE ROB LUCCI Awakening ver.",
search:"ろぶるっち",
type:"koa",
price:450,
img:"images/wanpi/rutti_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦Luminasta“虎杖悠仁”黒閃",
search:"いたどりゆうじ",
type: "lum",
price:1000,
img:"images/zyuzyutu/itadori_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"劇場版呪術廻戦0Yumemirize“乙骨憂太”",
search:"おっこつゆうた",
type:"yume",
price:1000,
img:"images/zyuzyutu/otukotu_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"劇場版呪術廻戦0Yumemirize“狗巻棘”",
search:"いぬまきとげ",
type:"yume",
price:1000,
img:"images/zyuzyutu/inumaki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』Vivitフィギュア 五条悟 呪術高専Ver.GiGOグループ限定",
search:"ごじょうさとる",
type:"vivi",
price:800,
img:"images/zyuzyutu/gozyo_vivi.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 KING OF ARTIST SATORU GOJO-懐玉・玉折-Ⅱ",
search:"ごじょうさとる",
type:"koa",
price:900,
img:"images/zyuzyutu/gozyo2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC CHOSO",
search:"ちょうそう",
type:"ma",
price:1200,
img:"images/zyuzyutu/tyouso_a_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC CHOSO",
search:"ちょうそう",
type:"ma",
price:1200,
img:"images/zyuzyutu/tyouso_b_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC SUKUNA Special ver.",
search:"すくな",
type:"ma",
price:1000,
img:"images/zyuzyutu/sukunasp_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS-SHIRAHOSHI-",
search:"しらほし",
type:"gli",
price:500,
img:"images/wanpi/sira_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS-BOA.HANCOCK-Ⅱ",
search:"はんこっく",
type:"gli",
price:800,
img:"images/wanpi/han_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS-TRAFALGAR.LAW-CHANGE ver.",
search:"ろー",
type:"gli",
price:550,
img:"images/wanpi/ro_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-MIRKO-",
search:"みるこ",
type:"gli",
price:1300,
img:"images/hiro/miruko_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER＆GLAMOURS-OCHACO URARAKA＆HIMIKO TOGA-",
search:"とがひみこ",
type:"gli",
price:800,
img:"images/hiro/toga_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER＆GLAMOURS-OCHACO URARAKA＆HIMIKO TOGA-",
search:"うららかおちゃこ",
type:"gli",
price:1200,
img:"images/hiro/otyako_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-TORU HAGAKURE-",
search:"はがくれとおる",
type:"gli",
price:1800,
img:"images/hiro/hagakure_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-TSUYU ASUI-",
search:"あすいつゆ",
type:"gli",
price:900,
img:"images/hiro/tuyu_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-NEJIRE HADO-",
search:"はどうねじれ",
type:"gli",
price:800,
img:"images/hiro/nezire_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER＆GLAMOURS-HIMIKO TOGA-",
search:"とがひみこ",
type:"gli",
price:800,
img:"images/hiro/toga2_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア GLITTER&GLAMOURS-MEI HATSUME-",
search:"はつめめい",
type:"gli",
price:800,
img:"images/hiro/hatume_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Grandista-UCHIHA SASUKE-",
search:"うちはさすけ",
type:"gra",
price:1200,
img:"images/naruto/sasuke1_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kaizyu",
name:"怪獣８号 Grandista-鳴海弦-",
search:"なるみげん",
type:"gra",
price:800,
img:"images/kaizyu/narumi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミア Grandista-ALL MIGHT-",
search:"おーるまいと",
type:"gra",
price:900,
img:"images/hiro/all_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"虎杖悠仁 呪術廻戦 Grandista ITADORI YUJI",
search:"いたどりゆうじ",
type:"gra",
price:900,
img:"images/zyuzyutu/itadori_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ Grandista-SON GOKU-Ⅱ",
search:"そんごくう",
type:"gra",
price:750,
img:"images/db/goku2_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"ドラゴンボールZ Grandista-SON GOKU-",
search:"そんごくう",
type:"gra",
price:600,
img:"images/db/goku_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-EDWARD.NEWGATE-",
search:"しろひげ　えどわーどにゅーげーと",
type:"gra",
price:550,
img:"images/wanpi/sirohige_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-TRAFALGAR.LAW-",
search:"ろー",
type:"gra",
price:450,
img:"images/wanpi/ro_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース Grandista-MONKEY.D.LUFFY GEAR5-",
search:"るふぃ　にか",
type:"gra",
price:800,
img:"images/wanpi/nika1_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"僕のヒーローアカデミアTHEMOVIEユアネクストXrossLinkフィギュア“轟焦凍”",
search:"とどろきしょうと",
type:"xros",
price:800,
img:"images/hiro/todoroki_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC CHOSO-死滅回游-",
search:"ちょうそう",
type:"ma",
price:800,
img:"images/zyuzyutu/tyouso_ma2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 Grandista-ZEN’IN NAOYA-",
search:"ぜんいんなおや",
type:"gra",
price:900,
img:"images/zyuzyutu/naoya_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC YUTA OKKOTSU-死滅回游-",
search:"おっこつゆうた",
type:"ma",
price:600,
img:"images/zyuzyutu/otukotu_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険 ファントムブラッド 石仮面",
search:"いしかめん",
type:"mome",
price:1000,
img:"images/zyozyo/isikamen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険 ダイヤモンドは砕けない Mometria 吉良吉影",
search:"きらよしかげ",
type:"mome",
price:1000,
img:"images/zyozyo/kira.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦FIGURIZMα“脹相”赫鱗躍動・載",
search:"ちょうそう",
type:"fig",
price:1300,
img:"images/zyuzyutu/tyouso_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC NAOYA ZEN’IN",
search:"ぜんいんなおや",
type:"ma",
price:1000,
img:"images/zyuzyutu/naoya_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 MAXIMATIC YUJI ITADORI-死滅回游-",
search:"いたどりゆうじ",
type:"ma",
price:600,
img:"images/zyuzyutu/itadori_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"oba",
name:"『オーバーロード』BiCute Bunnies Figureー アルベド ー",
search:"あるべど",
type:"bani",
price:800,
img:"images/oba/aru_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"oba",
name:"『オーバーロード』Classical tuning アルベド 千夜一夜物語",
search:"あるべど",
type:"",
price:700,
img:"images/oba/aru_senyo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"sonota",
name:"『おぱんちゅうさぎ』ぬーどるストッパーフィギュア－ 盛れおぱんちゅうさぎ －",
search:"",
type:"nusuto",
price:500,
img:"images/sonota/opantyu.jpg",
source:"https://charahiroba.com/"
},

{
series:"kamen",
name:"仮面ライダークウガ BIGサイズソフビ マスクディスプレイ-クウガ-",
search:"くうが",
type:"",
price:500,
img:"images/kamen/kuga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wind",
name:"TVアニメ『WIND BREAKER』 梅宮一 フィギュア～Chatting time!～",
search:"うめみやはじめ",
type: "",
price:500,
img:"images/wind/ume.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wind",
name:"TVアニメ『WIND BREAKER』 蘇枋隼飛 フィギュア～Chatting time!～",
search:"すおうはやと",
type: "",
price:500,
img:"images/wind/sobo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wind",
name:"TVアニメ『WIND BREAKER』 梶蓮 フィギュア～Chatting time!～",
search:"かじれん",
type: "",
price:550,
img:"images/wind/kazi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wind",
name:"TVアニメ『WIND BREAKER』 桜遥 フィギュア～Chatting time!～",
search:"さくらはるか",
type: "",
price:500,
img:"images/wind/sakura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yuyu",
name:"幽☆遊☆白書 MAXIMATIC HIEI",
search:"ひえい",
type: "ma",
price:500,
img:"images/yuyu/hiei.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dr",
name:"『Dr.STONE』FIGURE of STONE WORLD-造形の科学<br>-Dr.ゼノ＆スタンリー・スナイダー",
search:"すたんりーすないだー",
type: "",
price:1400,
img:"images/dr/suta.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"sakamoto",
name:"SAKAMOTODAYSLuminasta“坂本太郎”店長Ver.",
search:"さかもとたろう",
type:"lum",
price:500,
img:"images/sakamoto/sakamoto_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"sakamoto",
name:"『SAKAMOTO DAYS』 ぬーどるストッパーフィギュア ー 朝倉シン ー",
search:"あさくらしん",
type:"nusuto",
price:600,
img:"images/sakamoto/sin_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"sakamoto",
name:"SAKAMOTODAYSちょこのせプレミアムフィギュア“坂本太郎”本気Ver.",
search:"さかもとたろう",
type:"tyoko",
price:400,
img:"images/sakamoto/sakamoto_honki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gintama",
name:"3年Z組銀八先生 デスクフィギュア-坂田銀八-",
search:"さかたぎんぱち",
type: "",
price:2000,
img:"images/gintama/gintoki_desk.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpan",
name:"ワンパンマン One Punch Life サイタマ～買い物～",
search:"さいたま",
type:"",
price:650,
img:"images/wanpan/life.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpan",
name:"ワンパンマン Grandista-SAITAMA-",
search:"さいたま",
type:"gra",
price:700,
img:"images/wanpan/saitama_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buri",
name:"BLEACH GrandistaｰKUROSAKI ICHIGOｰ",
search:"くろさきいちご",
type:"gra",
price:1500,
img:"images/buri/itigo_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"guru",
name:"東京喰種 Grandista-KANEKI KEN-",
search:"かねきけん",
type:"gra",
price:1000,
img:"images/guru/kaneki_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"baki",
name:"刃牙 Grandistaッッ‼-HANMA YUJIRO-",
search:"はんまゆうじろう",
type:"gra",
price:800,
img:"images/baki/yuzi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"king",
name:"キングダム Grandista-王騎-",
search:"はた",
type:"gra",
price:1000,
img:"images/king/hata_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"king",
name:"キングダム Grandista-王騎-",
search:"おうき",
type:"gra",
price:400,
img:"images/king/ouki_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- フィグライフ! 終末の谷-うちはマダラ-",
search:"うちはまだら",
type:"figl",
price:700,
img:"images/naruto/madara_figl.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 BANPRESTO FIGURE COLOSSEUM 造形忍界大戦 はたけカカシ",
search:"はたけかかし",
type: "ninkai",
price:1200,
img:"images/naruto/kakasi_ninkai.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Memorable Saga-うちはサスケ-",
search:"うちはさすけ",
type:"memo",
price:1200,
img:"images/naruto/fuma_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- NARUTOP99 うちはシスイ フィギュア",
search:"うちはしすい",
type:"99",
price:600,
img:"images/naruto/sisui.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Memorable Saga Special-うずまきナルト-",
search:"うずまきなると",
type:"memo",
price:1300,
img:"images/naruto/naruto_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"-NARUTO 72 series- 33 VIBRATION STARS-UZUMAKI NARUTO-",
search:"うずまきなると",
type:["vib", "72"],
price:800,
img:"images/naruto/naruto_72_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Memorable Saga Special-うちはイタチ-",
search:"うちはいたち",
type:"memo",
price:2200,
img:"images/naruto/itati_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Combination Battle2-我愛羅-",
search:"があら",
type:"combi",
price:800,
img:"images/naruto/gara2_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Combination Battle-うちはイタチ-",
search:"うちはいたち",
type:"combi",
price:1000,
img:"images/naruto/itati_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- VIBRATION STARS-GAARA-Ⅱ",
search:"があら",
type:"vib",
price:500,
img:"images/naruto/gara2_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS<br>-SENJU TOBIRAMA ＆ OROCHIMARU-",
search:"せんじゅとびらま",
type:"vib",
price:800,
img:"images/naruto/tobira_vib.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS<br>-SENJU TOBIRAMA ＆ OROCHIMARU-",
search:"おろちまる",
type:"vib",
price:600,
img:"images/naruto/oroti_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁∬』 Desktop Cute フィギュア <br>中野三玖 ～描き下ろしCat room wear ver.～",
search:"なかのみく",
type:"desk",
price:800,
img:"images/gotoyome/miku_desk_neko.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"mazyotabi",
name:"『魔女の旅々』 Trio-Try-iT Figure ーイレイナー",
search:"いれいな",
type:"trio",
price:800,
img:"images/mazyotabi/trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア <br>ー レッドフード：ナンセンスレッド ー",
search:"れっどふーどなんせんすれっど",
type:"nusuto",
price:700,
img:"images/nikke/reddo_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"umamusume",
name:"ウマ娘プリティーダービーXStellar“サトノクラウン”-STARTINGFUTURE-",
search:"さとのくらうん",
type: "xs",
price:800,
img:"images/umamusume/kuraun_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"umamusume",
name:"ウマ娘プリティーダービーXStellar“サトノダイヤモンド”-STARTINGFUTURE-",
search:"さとのだいやもんど",
type: "xs",
price:800,
img:"images/umamusume/satono_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kuresin",
name:"クレヨンしんちゃん ビッグフィギュア～野原しんのすけ～おおっ！",
search:"",
type:"",
price:700,
img:"images/kuresin/oo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buruaka",
name:"ブルーアーカイブYumemirize“セリカ”",
search:"せりか",
type:"yume",
price:600,
img:"images/buruaka/serika.jpg",
source:"https://segaplaza.jp/"
},

{
series:"akunai",
name:"『アークナイツ』 ぬーどるストッパーフィギュア ー スルト ー",
search:"すると",
type:"nusuto",
price:1000,
img:"images/akunai/suruto_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"musyoku",
name:"『無職転生II ～異世界行ったら本気だす～』 Vivitフィギュア ロキシー・ミグルディア バニー偏光カラーVer.",
search:"ろきしーみぐるでぃあ",
type:"vivi",
price:700,
img:"images/musyoku/rokisi_henko.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"voice",
name:"『VOICEROID』 弦巻マキ＆紲星あかり <br>フィギュア ルームウェア Another color ver.",
search:"きずなあかり",
type:"sof",
price:500,
img:"images/voice/akari.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"voice",
name:"『VOICEROID』 弦巻マキ＆紲星あかり <br>フィギュア ルームウェア Another color ver.",
search:"つるまきまき",
type:"sof",
price:500,
img:"images/voice/maki.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"musyoku",
name:"『無職転生Ⅱ ～異世界行ったら本気だす～』 <br>Vivit フィギュア エリス・ボレアス・グレイラット 競泳水着",
search:"えりすぼれあすぐれいらっと",
type:"vivi",
price:600,
img:"images/musyoku/erisu_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"musyoku",
name:"『無職転生Ⅱ ～異世界行ったら本気だす～』 <br>Vivit フィギュア ロキシー・ミグルディア 競泳水着",
search:"ろきしーみぐるでぃあ",
type:"vivi",
price:600,
img:"images/musyoku/rokisi_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野五月 ー",
search:"なかのいつき",
type:"daku",
price:1200,
img:"images/gotoyome/ituki_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 BiCute Pure Figure <br>ー 夜刀神十香 ー",
search:"やとがみとおか",
type:"pure",
price:800,
img:"images/deara/toka_pure.jpg",
source:"https://charahiroba.com/"
},

{
series:"kuresin",
name:"映画クレヨンしんちゃん ヘンダーランドの大冒険 <br>おおきなSOFVIMATES～ジョマ～",
search:"じょま",
type:"sof",
price:600,
img:"images/kuresin/zyoma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kuresin",
name:"映画クレヨンしんちゃん ヘンダーランドの大冒険 <br>おおきなSOFVIMATES～マカオ～",
search:"まかお",
type:"sof",
price:600,
img:"images/kuresin/makao.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"toho",
name:"『東方Project』 ゆっくり風デフォルメフィギュア 霧雨魔理沙",
search:"きりさめまりさ",
type:"",
price:800,
img:"images/toho/marisa.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"toho",
name:"『東方Project』 ゆっくり風デフォルメフィギュア 博麗霊夢",
search:"はくれいれいむ",
type:"",
price:800,
img:"images/toho/reimu.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"vtu",
name:"赤見かるびちょこのせプレミアムフィギュア“赤見かるび”",
search:"あかみかるび",
type:"tyoko",
price:500,
img:"images/vtu/karubi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"katainaka",
name:"片田舎のおっさん、剣聖になるハイプレミアムフィギュア<br>“アリューシア・シトラス”",
search:"あーりゅしあしとらす",
type: "hi",
price:500,
img:"images/katainaka/aryu_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"uzaki",
name:"『宇崎ちゃんは遊びたい！ω』 <br>BiCute Bunnies Figure ー 宇崎花 ー",
search:"うざきはな",
type:"bani",
price:800,
img:"images/uzaki/uzaki_bani.jpg",
source:"https://charahiroba.com/"
},

{
series:"mahoako",
name:"『魔法少女にあこがれて』 One-Seventh Caratフィギュア<br> マジアベーゼ 悪のバニーVer.",
search:"まじあべーぜ",
type:"one",
price:800,
img:"images/mahoako/mazi_aku.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"mahoako",
name:"魔法少女にあこがれて Vivitフィギュア マジアベーゼ Ver.1.5",
search:"まじあべーぜ",
type:"vivi",
price:1400,
img:"images/mahoako/mazi_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"nikke",
name:"勝利の女神：NIKKE バイパー こーどリールフィギュア",
search:"ばいぱー",
type:"ko-do",
price:600,
img:"images/nikke/baipa_ko-do.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nikke",
name:"勝利の女神：NIKKE アニス こーどリールフィギュア",
search:"あにす",
type:"ko-do",
price:600,
img:"images/nikke/anisu_ko-do.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア ー ブリッド ー",
search:"ぶりっど",
type:"nusuto",
price:400,
img:"images/nikke/buriddo_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア<br>ー モダニア ファースト・アフェクション ー",
search:"もだにあ",
type:"nusuto",
price:600,
img:"images/nikke/moda_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編 GLITTER&GLAMOURS ユラ",
search:"ゆら",
type:"gli",
price:600,
img:"images/tensura/yura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 ぬーどるストッパーフィギュア ー マチ ー",
search:"まち",
type:"nusuto",
price:600,
img:"images/hant/mati_nusuto.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"pawapuro",
name:"パワフルプロ野球　<br>パワプロくん プライズアクションフィギュア 打者ver",
search:"ぱわぷろくん",
type:"",
price:500,
img:"images/pawapuro/dasya.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"rokkuman",
name:"ロックマン Grandista -ROCKMAN-",
search:"ろっくまん",
type:"gra",
price:800,
img:"images/rokkuman/rokkuman_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dandadan",
name:"『ダンダダン』 Trio-Try-iT Figure <br>― オカルン(変身) ―",
search:"おかるん",
type:"trio",
price:550,
img:"images/dandadan/okarun_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』 Grandista-OKARUN(TRANSFORMED)-",
search:"おかるん　オカルン",
type:"gra",
price:550,
img:"images/dandadan/okarun_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buri",
name:"BLEACH MAXIMATIC ULQUIORRA CIFER",
search:"うるきおらしふぁー　ウルキオラシファー",
type:"ma",
price:1200,
img:"images/buri/uru_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"uruse",
name:"うる星やつら ESPRESTO-Soft and drifting-ラム",
search:"らむ",
type:"esp",
price:650,
img:"images/uruse/ramu_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nia",
name:"TVアニメ「NieR:AutomataVer1.1a」<br>ちょこのせプレミアムフィギュア“2B”",
search:"とぅーびー",
type:"tyoko",
price:900,
img:"images/nia/2b_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>Fluffy Puffy～キュゥべえ＆お菓子の魔女～",
search:"おかしのまじょ",
type:"flu",
price:800,
img:"images/madomagi/okasi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>Fluffy Puffy～キュゥべえ＆お菓子の魔女～",
search:"きゅうべえ",
type:"flu",
price:800,
img:"images/madomagi/kyube.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"city",
name:"ぬーどるストッパーフィギュア―南雲美鳥―",
search:"なぐもみどり",
type:"nusuto",
price:700,
img:"images/city/midori.jpg",
source:"https://charahiroba.com/"
},

{
series:"toho",
name:"『東方Project』 ぬーどるストッパーフィギュア <br>ー 東風谷早苗 ー",
search:"こちやさなえ",
type:"nusuto",
price:700,
img:"images/toho/sanae.jpg",
source:"https://charahiroba.com/"
},

{
series:"motiduki",
name:"『ドカ食いダイスキ！もちづきさん』 <br>ぬーどるストッパーフィギュア ー 望月美琴 ー",
search:"もちづきみこと",
type:"nusuto",
price:600,
img:"images/motiduki/motiduki.jpg",
source:"https://charahiroba.com/"
},

{
series:"atorie",
name:"『ライザのアトリエ』 Luminasta “リラ・ディザイアス”",
search:"りらでぃざいあす",
type:"lum",
price:700,
img:"images/atorie/rira.jpg",
source:"https://segaplaza.jp/"
},

{
series:"atorie",
name:"TVアニメ『ライザのアトリエ』 Luminasta“ライザリン・シュタウト”",
search:"らいざりんしゅたうと",
type:"lum",
price:800,
img:"images/atorie/raiza.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 中野三玖フィギュア <br>五等分の花嫁アニメ原画展ver.",
search:"なかのみく",
type:"",
price:800,
img:"images/gotoyome/miku_genga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁∬』 Desktop Cute フィギュア <br>中野二乃 ～描き下ろしCat room wear ver.～",
search:"なかのにの",
type:"desk",
price:550,
img:"images/gotoyome/nino_desk_neko.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 Desktop Cute フィギュア <br>中野一花 〜バニーver.〜",
search:"なかのいちか",
type:"desk",
price:450,
img:"images/gotoyome/itika_desk_bani.jpg",
source:"https://www.taito.co.jp/"
},


{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野三玖 ー",
search:"なかのみく",
type:"daku",
price:1400,
img:"images/gotoyome/miku_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野四葉 ー",
search:"なかのよつば",
type:"daku",
price:1200,
img:"images/gotoyome/yotuba_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 Desktop Cute フィギュア <br>夜刀神十香 〜バニーver.〜 Renewal タイクレ限定",
search:"やとがみとおか",
type:"desk",
price:1100,
img:"images/deara/toka_bani_taikure.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 ぬーどるストッパーフィギュア <br>ー 時崎狂三・ 水着 ver. ー",
search:"ときさきくるみ",
type:"nusuto",
price:350,
img:"images/deara/kurumi_nusuto.jpg",
source:"https://charahiroba.com/"
},


{
series:"deara",
name:"『デート・ア・ライブV』 BiCute Dark Figure <br>ー 時崎狂三 ー",
search:"ときさきくるみ",
type:"daku",
price:1000,
img:"images/deara/kurumi_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"デート・ア・ライブ ペンフレ！ 時崎狂三 sweet silk wear ver.",
search:"ときさきくるみ",
type:"pen",
price:500,
img:"images/deara/kurumi_pen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"deara",
name:"デート・ア・ライブ ペンフレ！ 夜刀神十香 sweet silk wear ver.",
search:"やとがみとおか",
type:"pen",
price:450,
img:"images/deara/toka_pen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"osinoko",
name:"【推しの子】 ESPRESTO-Poppin' Heart-アイ",
search:"あい",
type:"esp",
price:500,
img:"images/osinoko/ai_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tikawa",
name:"『ちいかわ』 撮りまーす！カメラ型ライト",
search:"はちわれ",
type:"",
price:400,
img:"images/tikawa/syasin.jpg",
source:"https://www.eikoh-prize.jp/"
},

{
series:"keroro",
name:"ケロロ軍曹 おおきなSOFVIMATES～クルル曹長～",
search:"くるるそうちょう",
type:"sof",
price:600,
img:"images/keroro/kururu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yahari",
name:"やはり俺の青春ラブコメはまちがっている。完<br>Luminasta“一色いろは” ～盛夏TOKYOBAY～",
search:"いっしきいろは",
type:"lum",
price:400,
img:"images/yahari/iroha.jpg",
source:"https://segaplaza.jp/"
},


{
series:"witti",
name:"TVアニメ『ウィッチウォッチ』 <br>ちょこのせプレミアムフィギュア “宮尾音夢”",
search:"みやおねむ",
type:"tyoko",
price:300,
img:"images/witti/nemu_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"witti",
name:"TVアニメ『ウィッチウォッチ』Luminasta“宮尾音夢”",
search:"みやおねむ",
type:"lum",
price:350,
img:"images/witti/nemu.jpg",
source:"https://segaplaza.jp/"
},

{
series:"fate",
name:"Fate/GrandOrderArcadeLuminasta“ランサー/エレシュキガル”",
search:"えれしゅきがる",
type:"lum",
price:500,
img:"images/fate/eresyuki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"samapoke",
name:"『Summer Pockets』 Yumemirize “空門蒼”",
search:"そらかどあお",
type:"yume",
price:550,
img:"images/samapoke/ao.jpg",
source:"https://segaplaza.jp/"
},

{
series:"samapoke",
name:"『Summer Pockets』 Yumemirize “鳴瀬しろは”",
search:"なるせしろは",
type:"yume",
price:550,
img:"images/samapoke/siroha.jpg",
source:"https://segaplaza.jp/"
},

{
series:"nigoriri",
name:"2.5次元の誘惑 GLITTER&GLAMOURS ミリエラ Bunny Style",
search:"みりえら",
type:"gli",
price:400,
img:"images/nigoriri/miriera_bani.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nigoriri",
name:"2.5次元の誘惑 GLITTER&GLAMOURS リリエル Bunny Style",
search:"りりえる",
type:"gli",
price:400,
img:"images/nigoriri/ririeru_bani.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"purikyua",
name:"『ふたりはプリキュア』 GLITTER&GLAMOURS <br>～キュアホワイト～",
search:"きゅあほわいと",
type:"gli",
price:450,
img:"images/purikyua/howaito.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"purikyua",
name:"『ふたりはプリキュア』 GLITTER&GLAMOURS <br>～キュアブラック～",
search:"きゅあぶらっく",
type:"gli",
price:450,
img:"images/purikyua/burakku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aobuta",
name:"『青春ブタ野郎』シリーズ １/７スケールフィギュア　<br>桜島麻衣 和服メイドVer.",
search:"さくらじままい",
type:"",
price:600,
img:"images/aobuta/wafukumeido.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"mazyotabi",
name:"魔女の旅々 Trio-Try-iT Figure<br>ーイレイナ・ブラウンコーデver.ー",
search:"いれいな",
type:"trio",
price:600,
img:"images/mazyotabi/buraun_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"higurasi",
name:"ひぐらしのなく頃に卒　BiCute Bunnies Figureー羽入ー",
search:"はにゅう",
type:"bani",
price:500,
img:"images/higurasi/hanyu.jpg",
source:"https://charahiroba.com/"
},

{
series:"hant",
name:"HUNTER×HUNTER HUNTING ARCHIVES<br> ネテロ-音を置き去りにした-",
search:"ねてろ",
type:"",
price:500,
img:"images/hant/netero_oto.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"pawapuro",
name:"パワフルプロ野球パワプロくん プライズアクションフィギュア",
search:"ぱわぷろくん",
type:"",
price:500,
img:"images/pawapuro/pawapuro.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"buri",
name:"BLEACH MAXIMATIC GRIMMJOW JAEGERJAQUES",
search:"ぐりむじょーじゃがーじゃっく　グリムジョージャガージャック",
type:"ma",
price:1200,
img:"images/buri/gurimu_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 Trio-Try-iT Figure <br>ー 水篠旬 ー",
search:"みずしのしゅん",
type:"trio",
price:1000,
img:"images/orerebe/mizusino_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hant",
name:"HUNTER×HUNTER Grandista-クラピカ-",
search:"くらぴか",
type:"gra",
price:1200,
img:"images/hant/kura_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"botti",
name:"アニメ「ぼっち・ざ・ろっく！」 鎮座獣 <br>承認欲求モンスター",
search:"ぼっち　ごとうひとり　しょうにんよっきゅうもんすたー",
type:"tinza",
price:900,
img:"images/botti/syounin.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gundam",
name:"『機動戦士Gundam GQuuuuuuX』<br>ニャアン フィギュア 私服ver.",
search:"にゃあん",
type:"",
price:300,
img:"images/gundam/nyan.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"『転生したらスライムだった件』<br>リムル＆ランガ ソフビフィギュア",
search:"りむる　らんが",
type:"",
price:600,
img:"images/tensura/ranga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS<br>-NAMI EGGHEAD STYLE-",
search:"なみ　ナミ",
type:"gli",
price:750,
img:"images/wanpi/nami_egg_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 フィグライフ! 海賊狩りのゾロ",
search:"かいぞくがりのぞろ",
type:"figl",
price:600,
img:"images/wanpi/zoro_figl.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"wanpi",
name:"『ワンピース』 THE出航 LOGIA -BORSALINO-",
search:"きざる　黄猿　ボルサリーノ　ぼるさりーの",
type:"syukko",
price:650,
img:"images/wanpi/kizaru_syukko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -TRAFALGAR.LAW Ⅱ-",
search:"ろー　ロー",
type:"bato",
price:600,
img:"images/wanpi/ro2_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -NAMI-",
search:"なみ　ナミ",
type:"bato",
price:900,
img:"images/wanpi/nami_egg_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -JEWELRY.BONNEY THE MOST FREE FUTURE-",
search:"ぼにー　ボニー",
type:"bato",
price:550,
img:"images/wanpi/boni_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -MONKEY.D.LUFFY GEAR5 SPECIAL ver.-",
search:"ルフィ　るふぃ　にか　ニカ",
type:"bato",
price:600,
img:"images/wanpi/nika_bato_sp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST MONKEY.D.LUFFY GEAR5 III",
search:"るふぃ　ルフィ　にか　ニカ",
type:"koa",
price:800,
img:"images/wanpi/rufi3_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST JEWELRY.BONNEY THE MOST FREE FUTURE",
search:"ぼにー　ボニー",
type:"koa",
price:600,
img:"images/wanpi/boni_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST MONKEY.D.LUFFY -ワノ国 Ⅱ SPECIAL ver.-",
search:"るふぃ　ルフィ",
type:"koa",
price:1000,
img:"images/wanpi/rufi_wa2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 Grandista -RORONOA ZORO Ⅱ-",
search:"ロロノアゾロ　ろろのあぞろ",
type:"gra",
price:1000,
img:"images/wanpi/zoro_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 Grandista -PORTGAS.D.ACE-",
search:"エース　えーす",
type:"gra",
price:650,
img:"images/wanpi/ace_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -リヨウ-",
search:"りよう",
type:"vib",
price:1600,
img:"images/gati/riyo_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -エンジン-",
search:"えんじん",
type:"vib",
price:1500,
img:"images/gati/enzi_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -ザンカ-",
search:"ざんか",
type:"vib",
price:1500,
img:"images/gati/zanka_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -ルド-",
search:"るど",
type:"vib",
price:1800,
img:"images/gati/rudo_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>ESPRESTO Detailed Elegance 喜多川海夢 黒江雫Ver.",
search:"くろえしずく",
type:"esp",
price:900,
img:"images/kisekoi/sizuku_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 フィグライフ! 童磨",
search:"どうま",
type:"figl",
price:1400,
img:"images/kimetu/doma_fig.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 MAXIMATIC SHINOBU KOCHO",
search:"こちょうしのぶ　胡蝶しのぶ",
type:"ma",
price:1500,
img:"images/kimetu/sinobu_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 ぬーどるストッパーフィギュア <br>― 猗窩座・戦闘Ver. ― ラウンドワン限定",
search:"あかざ",
type:"nusuto",
price:1600,
img:"images/kimetu/akaza_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 ぬーどるストッパーフィギュア<br>― 煉獄杏寿郎・戦闘Ver. ―ラウンドワン限定",
search:"れんごくきょうじゅろう",
type:"nusuto",
price:1300,
img:"images/kimetu/rengoku_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Linkフィギュア <br>“竈門炭治郎” －刀鍛冶の里編－",
search:"かまどたんじろう",
type:"xros",
price:1000,
img:"images/kimetu/tanzi_2xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“不死川実弥”－柱稽古編－",
search:"しなずがわさねみ",
type:"xros",
price:2000,
img:"images/kimetu/sina_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“時透無一郎”－柱稽古編－",
search:"ときとうむいちろう",
type:"xros",
price:4000,
img:"images/kimetu/tokito_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Link フィギュア “煉獄杏寿郎”",
search:"れんごくきょうじゅろう",
type:"xros",
price:1000,
img:"images/kimetu/rengoku_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Link フィギュア “猗窩座”",
search:"あかざ",
type:"xros",
price:1300,
img:"images/kimetu/akaza2_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-AKAZA-",
search:"あかざ",
type:"gra",
price:1300,
img:"images/kimetu/akaza_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-RENGOKU KYOJURO-",
search:"れんごくきょうじゅろう",
type:"gra",
price:1000,
img:"images/kimetu/rengoku_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-DOMA-",
search:"どうま",
type:"gra",
price:1500,
img:"images/kimetu/doma_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -不死川実弥-",
search:"しなずがわさねみ",
type:"vib",
price:1800,
img:"images/kimetu/sina_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -煉獄杏寿郎-",
search:"れんごくきょうじゅろう",
type:"vib",
price:1600,
img:"images/kimetu/rengoku_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS -胡蝶しのぶ-",
search:"こちょうしのぶ",
type:"vib",
price:1800,
img:"images/kimetu/sinobu_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 VIBRATION STARS <br>-ZETSU & HOSHIGAKI KISAME-",
search:"ぜつ",
type:"vib",
price:1300,
img:"images/naruto/zetu_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"『新劇場版 銀魂-吉原大炎上-』 VIBRATION STARS -神威-",
search:"かむい",
type: "vib",
price:1000,
img:"images/gintama/kamui_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"『新劇場版 銀魂-吉原大炎上-』 VIBRATION STARS -神楽-",
search:"かぐら",
type: "vib",
price:1000,
img:"images/gintama/kagura_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 <br>ハイプレミアムフィギュア “早川アキ”",
search:"はやかわあき",
type: "hi",
price:1100,
img:"images/tyen/aki_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
search:"くろおてつお",
type:"flu",
price:700,
img:"images/haikyu/kuroo.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
search:"こづめけんま",
type:"flu",
price:700,
img:"images/haikyu/kodu.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
search:"かげやまとびお",
type:"flu",
price:600,
img:"images/haikyu/kage.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
search:"ひなたしょうよう",
type:"flu",
price:600,
img:"images/haikyu/hinata.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"rerugan",
name:"『とある魔術の禁書目録』 ESPRESTO-LEVEL5 Accelerator-",
search:"一方通行　あくせられーた　アクセラレータ",
type:"esp",
price:600,
img:"images/rerugan/akuse.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編 EFFECTREME-リムル＝テンペスト -スペシャルカラーver.",
search:"りむるてんぺすと",
type:"eff",
price:800,
img:"images/tensura/rimuru_eff_s.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編<br>魔王リムル=テンペスト フィギュア",
search:"りむるてんぺすと",
type:"",
price:1000,
img:"images/tensura/rimuru_maou.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』ぬーどるストッパーフィギュア<br>ー 桜ミク2024 パールカラーver. ー",
search:"みく",
type:"nusuto",
price:800,
img:"images/miku/2024_sakura.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』Luminasta <br>“初音ミク”－クラシカルメイド－",
search:"みく",
type:"lum",
price:700,
img:"images/miku/meido.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミクシリーズ Lminasta <br>“初音ミク 16th Anniversary” ぶーたVer.",
search:"みく",
type:"lum",
price:1000,
img:"images/miku/16_anni.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミク　Aqua Float Girls フィギュア",
search:"みく",
type:"aqua",
price:800,
img:"images/miku/aqua.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 Fashion フィギュア Country",
search:"かんとりー　カントリー　みく",
type:"fa",
price:1300,
img:"images/miku/kantori.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミク×チロルチョコ』 Trio-Try-iT Figure <br>ー 初音ミクｘチロルチョコ ミルクver. ー",
search:"ちろるちょこ　みく",
type:"trio",
price:1400,
img:"images/miku/tiroru.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 ぬーどるストッパーフィギュア <br>ー うさ耳パジャマ・ブルーver. ー",
search:"うさみみぱじゃま　みく",
type:"nusuto",
price:1200,
img:"images/miku/usamimi_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フリーレン” ～SUMMER DRESS～",
search:"ふりーれん",
type:"lum",
price:900,
img:"images/furi-ren/furi_summer.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Desktop Cute フィギュア <br>フリーレン ～トランクver.～",
search:"ふりーれん",
type:"desk",
price:1000,
img:"images/furi-ren/furi_torank.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』<br> ちょこのせプレミアムフィギュア “ヒンメル”",
search:"ひんめる",
type:"tyoko",
price:700,
img:"images/furi-ren/hin_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Yumemirize<br> “フェルン”～一眠り～",
search:"ふぇるん",
type:"yume",
price:500,
img:"images/furi-ren/fer_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フェルン” ～メイド服～",
search:"ふぇるん",
type:"lum",
price:900,
img:"images/furi-ren/fer_meido.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フリーレン” ～インミミック～",
search:"ふりーれん　みみっく",
type:"lum",
price:1300,
img:"images/furi-ren/furi_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 -Relax time-フリーレン",
search:"ふりーれん",
type:"relax",
price:600,
img:"images/furi-ren/furi_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 FIGURIZMα <br>“フリーレン” ～魔法の高み～",
search:"ふりーれん",
type: "fig",
price:1000,
img:"images/furi-ren/furi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』<br>Trio-Try-iT Figure ー ヒンメル ー",
search:"ひんめる",
type:"trio",
price:900,
img:"images/furi-ren/hin_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 <br>Trio-Try-iT Figure ー フリーレン ー",
search:"ふりーれん",
type:"trio",
price:700,
img:"images/furi-ren/furi-ren_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 ちあぴこ～とどろきしょうと～",
search:"",
type:"",
price:1500,
img:"images/hiro/todoroki_tia.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 ちあぴこ～ばくごうかつき～",
search:"",
type:"",
price:1500,
img:"images/hiro/bakugo_tia.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 GLITTER&GLAMOURS <br>-HIMIKO TOGA- duffel coat ver.",
search:"とがひみこ",
type:"gli",
price:900,
img:"images/hiro/toga_coat_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 Grandista -MIDORIYA IZUKU-",
search:"みどりやいずく　でく",
type:"gra",
price:600,
img:"images/hiro/deku_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 MAXIMATIC<br>IZUKU MIDORIYA Ⅱ",
search:"みどりやいずく　でく",
type:"ma",
price:800,
img:"images/hiro/deku_ma2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 CLEARISE ゴジータ&ベジット",
search:"べじっと",
type:"cle",
price:800,
img:"images/db/bezi_cle.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 CLEARISE ゴジータ&ベジット",
search:"ごじーた",
type:"cle",
price:800,
img:"images/db/gozi_cle.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 MATCH MAKERS ジレン<br>（VS孫悟空 身勝手の極意）",
search:"じれん",
type:"mat",
price:600,
img:"images/db/ziren_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box 桃白白",
search:"たおぱいぱい",
type: "his",
price:600,
img:"images/db/pai_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS フリーザ<br>（VS孫悟空）",
search:"ふりーざ",
type:"mat",
price:900,
img:"images/db/furiza_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 孫悟空<br>（VSフリーザ）",
search:"そんごくう",
type:"mat",
price:700,
img:"images/db/goku_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 <br>SOLID EDGE WORKS -THE出陣- ブロリー",
search:"ぶろりー",
type:"syutu",
price:800,
img:"images/db/burori2_syutu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『DRAGON BALL Z DOKKAN BATTLE』 10TH ANNIVERSARY FIGURE -超ゴジータ-",
search:"すーぱー　ごじーた",
type: "",
price:700,
img:"images/db/dokkan_gozi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『DRAGON BALL Z DOKKAN BATTLE』 10TH ANNIVERSARY FIGURE -超ベジット-",
search:"べじっと　すーぱー",
type: "",
price:700,
img:"images/db/dokkan_bezi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』<br>SOLID EDGE WORKS-THE出陣- メタルクウラ",
search:"めたるくうら",
type: "syutu",
price:500,
img:"images/db/kuura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 魔人ブウ<br>（VSアルティメット悟飯）",
search:"まじんぶう",
type:"mat",
price:650,
img:"images/db/bu_mat2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 超サイヤ人3孫悟空<br>（VS魔人ブウ）",
search:"そんごくう　すーぱー",
type:"mat",
price:650,
img:"images/db/goku3_mat2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 超サイヤ人3孫悟空<br>（VS魔人ブウ(純粋)）",
search:"すーぱー　そんごくう",
type:"mat",
price:650,
img:"images/db/goku3_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 コガネスピーカー",
search:"こがね",
type: "",
price:1000,
img:"images/zyuzyutu/kogane.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 フィギュアライト 乙骨憂太・リカ",
search:"おっこつゆうた　りか",
type: "",
price:800,
img:"images/zyuzyutu/otukotu_raito.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box クリリン",
search:"くりりん",
type: "his",
price:500,
img:"images/db/kuri_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールGT』 SOLID EDGE WORKS-THE出陣- 超サイヤ人4ゴジータ",
search:"ごじーた　すーぱー",
type: "syutu",
price:600,
img:"images/db/gozita4_solid.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 Grandista -GOGETA-Ⅱ",
search:"ごじーた　ゴジータ",
type: "gra",
price:600,
img:"images/db/gozita_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 Grandista -MAJIN VEGETA-",
search:"まじんべじーた　魔人ベジータ",
type: "gra",
price:1200,
img:"images/db/bezi_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 MAXIMATIC PLUS SUKUNA",
search:"すくな　宿儺",
type: "ma",
price:1500,
img:"images/zyuzyutu/sukuna_map.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 XStellar “虎杖悠仁”",
search:"いたどりゆうじ",
type: "xs",
price:800,
img:"images/zyuzyutu/itadori_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 XStellar “乙骨憂太”",
search:"おっこつゆうた",
type: "xs",
price:700,
img:"images/zyuzyutu/otukotu_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 Grandista -FUSHIGURO MEGUMI-",
search:"ふしぐろめぐみ　伏黒恵",
type: "gra",
price:600,
img:"images/zyuzyutu/megumi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト-疾風伝』 Grandista-UCHIHA ITACHI-",
search:"うちはいたち　うちはイタチ",
type:"gra",
price:2200,
img:"images/naruto/itati_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 MAXIMATIC PLUS MONKEY.D.LUFFY I",
search:"るふぃ　ルフィ",
type:"ma",
price:1500,
img:"images/wanpi/rufi_map.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ[新編]叛逆の物語 BANPRESTO EVOLVE 悪魔ほむらフィギュア",
search:"あくまほむら",
type:"bpev",
price:1400,
img:"images/madomagi/homura_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ[新編]叛逆の物語 BANPRESTO EVOLVE アルティメットまどかフィギュア",
search:"あるてぃめっとまどか",
type:"bpev",
price:1800,
img:"images/madomagi/madoka_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険スターダストクルセイダース<br>Mometria  DIO",
search:"でぃお　ディオ",
type:"mome",
price:1200,
img:"images/zyozyo/dio3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険スターダストクルセイダース<br>Mometria  空条承太郎",
search:"くうじょうじょうたろう",
type:"mome",
price:1800,
img:"images/zyozyo/zyotaro.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 戦闘潮流』<br>Mometria カーズ",
search:"かーず",
type:"mome",
price:1500,
img:"images/zyozyo/ka-zu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 戦闘潮流』<br>Mometria ジョセフ・ジョースター",
search:"じょせふじょーすたー",
type:"mome",
price:1500,
img:"images/zyozyo/zyosefu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 ファントムブラッド』<br>Mometria ディオ・ブランドー",
search:"でぃおぶらんどー",
type:"mome",
price:1200,
img:"images/zyozyo/dio.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 ファントムブラッド』<br>Mometria  ジョナサン・ジョースター",
search:"じょなさんじょーすたー",
type:"mome",
price:1000,
img:"images/zyozyo/zyonasan.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"umamusume",
name:"『ウマ娘 シンデレラグレイ』 BANPRESTO EVOLVE<br>オグリキャップフィギュア",
search:"おぐりきゃっぷ",
type:"bpev",
price:2000,
img:"images/umamusume/oguri_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"ika",
name:"『侵略!イカ娘』 Trio-Try-iT Figure ー イカ娘 ー",
search:"いかむすめ",
type:"trio",
price:1000,
img:"images/ika/ika.jpg",
source:"https://charahiroba.com/"
},

{
series:"pokemon",
name:"『ポケモンマスターズ EX』PANEL SPECTACLE<br>～アルコスシロナ&メガガブリアス～",
search:"しろな　がぶりあす",
type:"",
price:1000,
img:"images/pokemon/sirona.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hokuto",
name:"『北斗の拳 -FIST OF THE NORTH STAR-』<br>Grandista -KENSHIRO-",
search:"けんしろう　ケンシロウ",
type:"gra",
price:800,
img:"images/hokuto/ken.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nintama",
name:"『忍たま乱太郎』 山田利吉 フィギュア",
search:"やまだりきち",
type:"",
price:700,
img:"images/nintama/yamada.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box 神龍",
search:"しぇんろん　シェンロン",
type:"his",
price:1000,
img:"images/db/syenron_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"watanare",
name:"『わたしが恋人になれるわけないじゃん、ムリムリ!（※ムリじゃなかった!?）』Trio-Try-iT Figureー 王塚真唯 ー",
search:"おうづかまい",
type:"trio",
price:2000,
img:"images/watanare/outuka_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hebu",
name:"『ヘブンバーンズレッド』 Trio-Try-iT Figure<br>ー 和泉ユキ ー",
search:"いずみゆき",
type:"trio",
price:700,
img:"images/hebu/yuki_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』<br>ぬーどるストッパーフィギュア ー カナリア ー",
search:"かなりあ　みく",
type:"nusuto",
price:800,
img:"images/miku/miku_kanariya_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"tora",
name:"『To LOVE る―とらぶる―ダークネス』 Trio-Try-iT Figure ― モモ・ベリア・デビルーク ―",
search:"もも",
type:"trio",
price:700,
img:"images/tora/momo_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"tyen",
name:"『チェンソーマン』 Luminasta “マキマ”",
search:"まきま",
type: "lum",
price:900,
img:"images/tyen/makima_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"eva",
name:"『シン・エヴァンゲリオン劇場版』<br>FIGURIZMα　“アヤナミレイ（仮称）”",
search:"あやなみれい",
type: "fig",
price:1000,
img:"images/eva/ayanami_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 Luminasta　“脹相”",
search:"ちょうそう　チョウソウ",
type: "lum",
price:1300,
img:"images/zyuzyutu/tyousou_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"vtu",
name:"『赤見かるびの「お笑いかるび塾」』<br>Luminasta　“赤見かるび”",
search:"あかみかるび",
type: "lum",
price:800,
img:"images/vtu/akami_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION<br>-SILVERS.RAYLEIGH-",
search:"しるばーれいりー　シルバーレイリー",
type:"bato",
price:700,
img:"images/wanpi/reiri_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION<br>-GOL.D.ROGER-",
search:"ろじゃー　ロジャー",
type:"bato",
price:700,
img:"images/wanpi/rozya_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aimasu",
name:"『学園アイドルマスター』 <br>ESPRESTO-Sweet moment-篠澤 広",
search:"しのさわひろ",
type:"esp",
price:800,
img:"images/aimasu/aimasu_hiro_es.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 G×materia VEGETA Ⅱ",
search:"べじーた　ベジータ",
type:"gma",
price:800,
img:"images/db/bezi_gma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>佐倉杏子 フィギュア",
search:"さくらきょうこ",
type:"",
price:900,
img:"images/madomagi/kyoko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>巴マミ フィギュア",
search:"ともえまみ",
type:"",
price:800,
img:"images/madomagi/mami.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>暁美ほむら フィギュア",
search:"あけみほむら",
type:"",
price:1000,
img:"images/madomagi/homura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>美樹さやか フィギュア",
search:"みきさやか",
type:"",
price:800,
img:"images/madomagi/sayaka.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>鹿目まどか フィギュア",
search:"かなめまどか",
type:"",
price:1000,
img:"images/madomagi/madoka.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』KING OF ARTIST <br>RORONOA ZORO & SANJI-SPECIAL ver.-",
search:"ろろのあぞろ　さんじ　ロロノアゾロ　サンジ",
type:"koa",
price:900,
img:"images/wanpi/zoro_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』KING OF ARTIST <br>RORONOA ZORO & SANJI-SPECIAL ver.-",
search:"ろろのあぞろ　さんじ　ロロノアゾロ　サンジ",
type:"koa",
price:800,
img:"images/wanpi/sanzi_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 GLITTER&GLAMOURS<br>-JEWELRY.BONNEY-Ⅱ",
search:"ぼにー　ボニー",
type:"gli",
price:800,
img:"images/wanpi/boni_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』MAXIMATIC<br> IZUKU MIDORIYA Ⅲ",
search:"みどりやいずく　でく",
type:"ma",
price:1000,
img:"images/hiro/deku_ma3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 MAXIMATIC <br>SHOTO TODOROKI Ⅱ",
search:"とどろきしょうと",
type:"ma",
price:800,
img:"images/hiro/todoroki_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-ヒソカ-G.I.編",
search:"ひそか",
type:"",
price:1400,
img:"images/hant/hisoka_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-キルア-G.I.編",
search:"きるあ",
type:"",
price:1200,
img:"images/hant/kirua_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-ゴン-G.I.編",
search:"ごん",
type:"",
price:1000,
img:"images/hant/gon_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -我妻善逸-",
search:"あがつまぜんいつ",
type:"vib",
price:1500,
img:"images/kimetu/zen_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -獪岳-",
search:"かいがく",
type:"vib",
price:1100,
img:"images/kimetu/kai_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"『チェンソーマン』 Break time collection vol.4",
search:"ぽちた　でんじ　ポチ太　デンジ",
type:"bre",
price:2000,
img:"images/tyen/potita_bre.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kusuri",
name:"『薬屋のひとりごと』 Vivit フィギュア 猫猫 （狩り）",
search:"まおまお",
type:"vivi",
price:800,
img:"images/kusuri/maomao_vivi.jpg",
source:"http://fansclub.jp/pc/top/"
},


{
series:"wanpi",
name:"『ワンピース』 Grandista ボア・ハンコック",
search:"ぼあはんこっく",
type:"gra",
price:1200,
img:"images/wanpi/han_gra.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 Grandista <br>-HARUNO SAKURA ＆ UCHIHA SASUKE-",
search:"うちはさすけ",
type:"gra",
price:1300,
img:"images/naruto/sasuke_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 Grandista <br>-HARUNO SAKURA ＆ UCHIHA SASUKE-",
search:"はるのさくら",
type:"gra",
price:1500,
img:"images/naruto/sakura_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"zyuzyutu",
name:"『呪術廻戦』 KING OF ARTIST  KENJAKU",
search:"けんじゃく",
type:"koa",
price:800,
img:"images/zyuzyutu/geto_koa.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>XStellar　“喜多川海夢”",
search:"きたがわまりん",
type:"xs",
price:700,
img:"images/kisekoi/marin_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION <br>-MONKEY.D.LUFFY GEAR5 Ⅱ-",
search:"るふぃ　ルフィ　にか　ニカ",
type:"bato",
price:800,
img:"images/wanpi/rufi_bato2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 THEORAMA SOUL -SHANKS-",
search:"しゃんくす　シャンクス",
type:"",
price:1200,
img:"images/wanpi/syankusu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"フィグライフ！火影岩 SPECIAL",
search:"ほかげいわ",
type:"figl",
price:700,
img:"images/naruto/boruto_fig.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kon",
name:"Trio-Try-iT -平沢唯-",
search:"ひらさわゆい",
type:"trio",
price:2000,
img:"images/kon/yui_trio.jpg",
source:"https://charahiroba.com/"
},


{
series:"kon",
name:"Trio-Try-iT -中野梓-",
search:"なかのあずさ",
type:"trio",
price:1900,
img:"images/kon/azu_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -秋山澪-",
search:"あきやまみお",
type:"trio",
price:1500,
img:"images/kon/mio_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -田井中律-",
search:"たいなかりつ",
type:"trio",
price:1400,
img:"images/kon/ritu_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -琴吹紬-",
search:"ことぶきつむぎ",
type:"trio",
price:1400,
img:"images/kon/mugi_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"singeki",
name:"Grandista　-リヴァイ-",
search:"",
type:"gra",
price:1500,
img:"images/singeki/riva_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"singeki",
name:"Grandista　-エレン・イェーガー-",
search:"えれん",
type:"gra",
price:1200,
img:"images/singeki/eren_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"pansuto",
name:"『New PANTY ＆ STOCKING with GARTERBELT』 <br>BRILLIANT フィギュア パンティ",
search:"ぱんてぃ",
type:"bri",
price:1800,
img:"images/pansuto/panty.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』<br> ぬーどるストッパーフィギュア ー シンデレラ ー",
search:"しんでれら",
type:"nusuto",
price:1200,
img:"images/nikke/sin_nusuto.jpg",
source:"https://charahiroba.com/"
},


{
series:"zyuzyutu",
name:"『呪術廻戦』 Luminasta “宿儺” 「■」「開」",
search:"すくな　ふーが",
type:"lum",
price:1800,
img:"images/zyuzyutu/sukuna_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 XrossLink フィギュア “向坂雫”",
search:"こうさかしずく",
type:"xros",
price:1200,
img:"images/orerebe/kou_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 XrossLink フィギュア “水篠旬”",
search:"みずしのしゅん",
type:"xros",
price:1000,
img:"images/orerebe/mizu_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"oba",
name:"『オーバーロード』 T-most アルベド フィギュア <br>～純白の悪魔ver.～",
search:"あるべど",
type:"tmost",
price:1300,
img:"images/oba/aru_tmost.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 Fashion フィギュア Outdoor",
search:"アウトドア　あうとどあ　みく",
type:"fa",
price:1400,
img:"images/miku/miku_auto.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』フィギュア うちはサスケ・うちはイタチ～GiGOグループのお店限定～",
search:"うちはさすけ　うちはいたち",
type: "",
price:1600,
img:"images/naruto/sasuke_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』フィギュア うちはサスケ・うちはイタチ～GiGOグループのお店限定～",
search:"うちはさすけ　うちはいたち",
type: "",
price:1600,
img:"images/naruto/itati_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト-疾風伝』 忍界造形列伝 <br>-波風ミナト-",
search:"なみかぜみなと",
type: "ninkai",
price:1300,
img:"images/naruto/minato_ninkai.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buri",
name:"『BLEACH』 GLITTER&GLAMOURS <br>-TIER HARRIBEL-",
search:"てぃあはりべる　ティアハリベル",
type: "gli",
price:1100,
img:"images/buri/hari_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"『チェンソーマン』Luminasta “チェンソーマン”",
search:"ちぇんそーまん",
type: "lum",
price:1200,
img:"images/tyen/tyen_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 <br>ハイプレミアムフィギュア “天使の悪魔”",
search:"てんしのあくま",
type: "hi",
price:1500,
img:"images/tyen/tensi_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 Grandista -キルア-",
search:"きるあ",
type: "gra",
price:1300,
img:"images/hant/kirua_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 Exc∞d Creative Figure <br>ークロロ・鎮魂歌ー",
search:"くろろ",
type: "ex",
price:1100,
img:"images/hant/kuroro_ex.jpg",
source:"https://charahiroba.com/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα “伏黒恵” 邂逅",
search:"ふしぐろめぐみ",
type:"fig",
price:1300,
img:"images/zyuzyutu/fusi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα “伏黒甚爾” 邂逅",
search:"ふしぐろとうじ",
type:"fig",
price:1300,
img:"images/zyuzyutu/touzi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"naruto",
name:"『-NARUTO 72 series- 45』 Grandista <br>-UZUMAKI NARUTO-",
search:"うずまきなると　うずまきナルト",
type: ["gra", "72"],
price:1500,
img:"images/naruto/naruto_gra3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"Grandista　-うずまきナルトⅡ-",
search:"うずまきなると",
type: "gra",
price:800,
img:"images/naruto/naruto_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』SOLID EDGE WORKS -THE出陣- ブロリーⅡ",
search:"ぶろりー",
type:"syutu",
price:800,
img:"images/db/burori_syutu.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"naruto",
name:"『-NARUTO 72 series- 16』フィギュア<br> うずまきナルト＆うみのイルカ",
search:"なると　いるか",
type:"72",
price:800,
img:"images/naruto/naruto_72.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"naruto",
name:"『-NARUTO 72 series- 16』フィギュア<br> うずまきナルト＆うみのイルカ",
search:"なると　いるか",
type:"72",
price:800,
img:"images/naruto/iruka_72.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"zyuzyutu",
name:"『呪術廻戦』 Grandista GOJO SATORU",
search:"ごじょうさとる",
type:"gra",
price:2600,
img:"images/zyuzyutu/gozyo_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“猗窩座” －無限城編－",
search:"あかざ",
type:"xros",
price:1000,
img:"images/kimetu/akaza_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“冨岡義勇” －無限城編－",
search:"とみおかぎゆう",
type:"xros",
price:1800,
img:"images/kimetu/tomioka_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“竈門炭治郎” －無限城編－",
search:"かまどたんじろう",
type:"xros",
price:1100,
img:"images/kimetu/tanziro_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-TOMIOKA GIYU-",
search:"冨岡義勇　とみおかぎゆう",
type:"gra",
price:1800,
img:"images/kimetu/giyu_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』ESPRESTO-Excite Motions-vol.1",
search:"みずしのしゅん　水篠旬",
type:"esp",
price:1300,
img:"images/orerebe/mizusino_esp.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"miku",
name:"『初音ミクシリーズ』 Trio-Try-iT Figure <br>ー 雪ミクxクロミ ー",
search:"みく",
type:"trio",
price:2400,
img:"images/miku/kuromi_miku.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"ガンダム45周年×初音ミク フィギュアシャアザクぐるみ 初音ミクVer.",
search:"",
type:"しゃあざく　みく",
price:1100,
img:"images/miku/miku_zaku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"『桜ミク』 AMP＋ フィギュア 〜桜ドレス ver.〜",
search:"みく",
type:"",
price:1300,
img:"images/miku/sakuramiku2026.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 GLITTER&GLAMOURS <br>-SHINOBU KOCHO-",
search:"こちょうしのぶ　胡蝶しのぶ",
type:"gli",
price:1300,
img:"images/kimetu/kotyo_gri.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα　“宿儺”",
search:"すくな",
type:"fig",
price:1700,
img:"images/zyuzyutu/sukuna_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミク ぬーどるストッパー　-ヴィンテージドール-",
search:"みく",
type:"nusuto",
price:2200,
img:"images/miku/miku_vin.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"初音ミク×ラスカル Trio-Try-iT -悪魔-",
search:"あくま　らすかる　",
type:"trio",
price:2500,
img:"images/miku/miku_akuma.jpg",
source:"https://charahiroba.com/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>T-most 喜多川海夢 フィギュア 〜黒江雫ver.〜",
search:"くろえしずく",
type:"tmost",
price:1200,
img:"images/kisekoi/sizuku_tmost.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kusuri",
name:"BRILLIANTフィギュア 猫猫",
search:"まおまお",
type:"bri",
price:900,
img:"images/kusuri/maomao_buri.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"kusuri",
name:"『薬屋のひとりごと』 猫猫 フィギュア～園遊会～",
search:"まおまお",
type:"",
price:700,
img:"images/kusuri/maomao_enyu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"MAXIMATIC　五条悟",
search:"ごじょうさとる",
type:"ma",
price:1000,
img:"images/zyuzyutu/gozyo_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Grandista -FRIEREN-",
search:"フリーレン　ふりーれん",
type:"gra",
price:800,
img:"images/furi-ren/furi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC フェルン",
search:"ふぇるん",
type:"ma",
price:700,
img:"images/furi-ren/fer_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC STARK",
search:"しゅたるく　シュタルク",
type:"ma",
price:800,
img:"images/furi-ren/syuta_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC FRIEREN",
search:"ふりーれん　フリーレン",
type:"ma",
price:500,
img:"images/furi-ren/furi_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC FRIEREN Ⅱ",
search:"フリーレン　ふりーれん",
type:"ma",
price:700,
img:"images/furi-ren/furi_ma2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC HIMMEL",
search:"ひんめる　ヒンメル",
type:"ma",
price:1000,
img:"images/furi-ren/hin_ma.jpg",
source:"https://bsp-prize.jp/"
},


];

function showFigures(){

  const updated = new Date(document.lastModified);
  const formatted2 = updated.getFullYear() + "年" + 
                     (updated.getMonth() + 1) + "月" + 
                     updated.getDate() + "日";

  const search = document.getElementById("search").value.toLowerCase();
  const series = document.getElementById("series").value;
  const type = document.getElementById("type").value;
  const price = document.getElementById("price").value;
  const sort = document.getElementById("sort").value;

  let filtered = [...figures];

  // シリーズ
  if(series !== "all"){
    filtered = filtered.filter(f => f.series === series);
  }

  // タイプ
  if(type !== "all"){
    filtered = filtered.filter(f =>
      Array.isArray(f.type) ? f.type.includes(type) : f.type === type
    );
  }

  // 価格
  if(price !== "all"){
    filtered = filtered.filter(f => f.price == price);
  }

  // 🔥 検索（ここ修正）
  if(search !== ""){
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(search) ||
      (f.search && f.search.toLowerCase().includes(search))
    );
  }

  // ソート
  if(sort === "priceLow"){
    filtered.sort((a,b) => a.price - b.price);
  }

  if(sort === "priceHigh"){
    filtered.sort((a,b) => b.price - a.price);
  }

  if(sort === "name"){
    filtered.sort((a,b) => a.name.localeCompare(b.name,"ja"));
  }

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

  document.getElementById("figureList").innerHTML = html;
}
