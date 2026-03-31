//全部まとめる
const figures = [

{
series:"naruto",
name:"NARUTO-ナルト- フィグライフ! 終末の谷-うちはマダラ-",
type:"figl",
price:700,
img:"images/naruto/madara_figl.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 BANPRESTO FIGURE COLOSSEUM 造形忍界大戦 はたけカカシ",
type: "ninkai",
price:1200,
img:"images/naruto/kakasi_ninkai.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Memorable Saga-うちはサスケ-",
type:"memo",
price:1200,
img:"images/naruto/fuma_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- NARUTOP99 うちはシスイフィギュア",
type:"99",
price:600,
img:"images/naruto/sisui.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Memorable Saga Special-うずまきナルト-",
type:"memo",
price:1300,
img:"images/naruto/naruto_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"-NARUTO 72 series- 33 VIBRATION STARS-UZUMAKI NARUTO-",
type:["vib", "72"],
price:800,
img:"images/naruto/naruto_72_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Memorable Saga Special-うちはイタチ-",
type:"memo",
price:2200,
img:"images/naruto/itati_memo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- Combination Battle2-我愛羅-",
type:"combi",
price:800,
img:"images/naruto/gara2_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 Combination Battle-うちはイタチ-",
type:"combi",
price:1000,
img:"images/naruto/itati_combi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- VIBRATION STARS-GAARA-Ⅱ",
type:"vib",
price:500,
img:"images/naruto/gara2_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS<br>-SENJU TOBIRAMA ＆ OROCHIMARU-",
type:"vib",
price:800,
img:"images/naruto/tobira_vib.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"naruto",
name:"NARUTO-ナルト- 疾風伝 VIBRATION STARS<br>-SENJU TOBIRAMA ＆ OROCHIMARU-",
type:"vib",
price:600,
img:"images/naruto/oroti_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁∬』 Desktop Cute フィギュア <br>中野三玖 ～描き下ろしCat room wear ver.～",
type:"desk",
price:800,
img:"images/gotoyome/miku_desk_neko.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"mazyotabi",
name:"『魔女の旅々』 Trio-Try-iT Figure ーイレイナー",
type:"trio",
price:800,
img:"images/mazyotabi/trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア <br>ー レッドフード：ナンセンスレッド ー",
type:"nusuto",
price:700,
img:"images/nikke/reddo_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"umamusume",
name:"ウマ娘プリティーダービーXStellar“サトノクラウン”-STARTINGFUTURE-",
type: "xs",
price:800,
img:"images/umamusume/kuraun_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"umamusume",
name:"ウマ娘プリティーダービーXStellar“サトノダイヤモンド”-STARTINGFUTURE-",
type: "xs",
price:800,
img:"images/umamusume/satono_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kuresin",
name:"クレヨンしんちゃん ビッグフィギュア～野原しんのすけ～おおっ！",
type:"",
price:700,
img:"images/kuresin/oo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buruaka",
name:"ブルーアーカイブYumemirize“セリカ”",
type:"yume",
price:600,
img:"images/buruaka/serika.jpg",
source:"https://segaplaza.jp/"
},

{
series:"akunai",
name:"『アークナイツ』 ぬーどるストッパーフィギュア ー スルト ー",
type:"nusuto",
price:1000,
img:"images/akunai/suruto_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"musyoku",
name:"『無職転生II ～異世界行ったら本気だす～』 Vivitフィギュア ロキシー・ミグルディア バニー偏光カラーVer.",
type:"vivi",
price:700,
img:"images/musyoku/rokisi_henko.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"voice",
name:"『VOICEROID』 弦巻マキ＆紲星あかり <br>フィギュア ルームウェア Another color ver.",
type:"sof",
price:500,
img:"images/voice/akari.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"voice",
name:"『VOICEROID』 弦巻マキ＆紲星あかり <br>フィギュア ルームウェア Another color ver.",
type:"sof",
price:500,
img:"images/voice/maki.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"musyoku",
name:"『無職転生Ⅱ ～異世界行ったら本気だす～』 <br>Vivit フィギュア エリス・ボレアス・グレイラット 競泳水着",
type:"vivi",
price:600,
img:"images/musyoku/erisu_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"musyoku",
name:"『無職転生Ⅱ ～異世界行ったら本気だす～』 <br>Vivit フィギュア ロキシー・ミグルディア 競泳水着",
type:"vivi",
price:600,
img:"images/musyoku/rokisi_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野五月 ー",
type:"daku",
price:1200,
img:"images/gotoyome/ituki_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 BiCute Pure Figure <br>ー 夜刀神十香 ー",
type:"pure",
price:800,
img:"images/deara/toka_pure.jpg",
source:"https://charahiroba.com/"
},

{
series:"kuresin",
name:"映画クレヨンしんちゃん ヘンダーランドの大冒険 <br>おおきなSOFVIMATES～ジョマ～",
type:"sof",
price:600,
img:"images/kuresin/zyoma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kuresin",
name:"映画クレヨンしんちゃん ヘンダーランドの大冒険 <br>おおきなSOFVIMATES～マカオ～",
type:"sof",
price:600,
img:"images/kuresin/makao.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"toho",
name:"『東方Project』 ゆっくり風デフォルメフィギュア 霧雨魔理沙",
type:"",
price:800,
img:"images/toho/marisa.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"toho",
name:"『東方Project』 ゆっくり風デフォルメフィギュア 博麗霊夢",
type:"",
price:800,
img:"images/toho/reimu.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"vtu",
name:"赤見かるびちょこのせプレミアムフィギュア“赤見かるび”",
type:"tyoko",
price:500,
img:"images/vtu/karubi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"katainaka",
name:"片田舎のおっさん、剣聖になるハイプレミアムフィギュア<br>“アリューシア・シトラス”",
type: "hi",
price:500,
img:"images/katainaka/aryu_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"uzaki",
name:"『宇崎ちゃんは遊びたい！ω』 <br>BiCute Bunnies Figure ー 宇崎花 ー",
type:"bani",
price:800,
img:"images/uzaki/uzaki_bani.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"mahoako",
name:"『魔法少女にあこがれて』 One-Seventh Caratフィギュア<br> マジアベーゼ 悪のバニーVer.",
type:"one",
price:800,
img:"images/mahoako/mazi_aku.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"mahoako",
name:"魔法少女にあこがれて Vivitフィギュア マジアベーゼ Ver.1.5",
type:"vivi",
price:1400,
img:"images/mahoako/mazi_vivit.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"nikke",
name:"勝利の女神：NIKKE バイパー こーどリールフィギュア",
type:"ko-do",
price:600,
img:"images/nikke/baipa_ko-do.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nikke",
name:"勝利の女神：NIKKE アニス こーどリールフィギュア",
type:"ko-do",
price:600,
img:"images/nikke/anisu_ko-do.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア ー ブリッド ー",
type:"nusuto",
price:400,
img:"images/nikke/buriddo_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』 ぬーどるストッパーフィギュア<br>ー モダニア ファースト・アフェクション ー",
type:"nusuto",
price:600,
img:"images/nikke/moda_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編 GLITTER&GLAMOURS ユラ",
type:"gli",
price:600,
img:"images/tensura/yura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 ぬーどるストッパーフィギュア ー マチ ー",
type:"nusuto",
price:600,
img:"images/hant/mati_nusuto.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"pawapuro",
name:"パワフルプロ野球　<br>パワプロくん プライズアクションフィギュア 打者ver",
type:"",
price:500,
img:"images/pawapuro/dasya.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"rokkuman",
name:"ロックマン Grandista -ROCKMAN-",
type:"gra",
price:800,
img:"images/rokkuman/rokkuman_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"dandadan",
name:"『ダンダダン』 Trio-Try-iT Figure <br>― オカルン(変身) ―",
type:"trio",
price:550,
img:"images/dandadan/okarun_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"dandadan",
name:"TVアニメ『ダンダダン』 Grandista-OKARUN(TRANSFORMED)-",
type:"gra",
price:550,
img:"images/dandadan/okarun_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buri",
name:"BLEACH MAXIMATIC ULQUIORRA CIFER",
type:"ma",
price:1200,
img:"images/buri/uru_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"uruse",
name:"うる星やつら ESPRESTO-Soft and drifting-ラム",
type:"esp",
price:650,
img:"images/uruse/ramu_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nia",
name:"TVアニメ「NieR:AutomataVer1.1a」<br>ちょこのせプレミアムフィギュア“2B”",
type:"tyoko",
price:900,
img:"images/nia/2b_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>Fluffy Puffy～キュゥべえ＆お菓子の魔女～",
type:"flu",
price:800,
img:"images/madomagi/okasi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>Fluffy Puffy～キュゥべえ＆お菓子の魔女～",
type:"flu",
price:800,
img:"images/madomagi/kyube.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"city",
name:"ぬーどるストッパーフィギュア―南雲美鳥―",
type:"nusuto",
price:700,
img:"images/city/midori.jpg",
source:"https://charahiroba.com/"
},

{
series:"toho",
name:"『東方Project』 ぬーどるストッパーフィギュア <br>ー 東風谷早苗 ー",
type:"nusuto",
price:700,
img:"images/toho/sanae.jpg",
source:"https://charahiroba.com/"
},

{
series:"motiduki",
name:"『ドカ食いダイスキ！もちづきさん』 <br>ぬーどるストッパーフィギュア ー 望月美琴 ー",
type:"nusuto",
price:600,
img:"images/motiduki/motiduki.jpg",
source:"https://charahiroba.com/"
},

{
series:"atorie",
name:"『ライザのアトリエ』 Luminasta “リラ・ディザイアス”",
type:"lum",
price:700,
img:"images/atorie/rira.jpg",
source:"https://segaplaza.jp/"
},

{
series:"atorie",
name:"TVアニメ『ライザのアトリエ』 Luminasta“ライザリン・シュタウト”",
type:"lum",
price:800,
img:"images/atorie/raiza.jpg",
source:"https://segaplaza.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 中野三玖フィギュア <br>五等分の花嫁アニメ原画展ver.",
type:"",
price:800,
img:"images/gotoyome/miku_genga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁∬』 Desktop Cute フィギュア <br>中野二乃 ～描き下ろしCat room wear ver.～",
type:"desk",
price:550,
img:"images/gotoyome/nino_desk_neko.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 Desktop Cute フィギュア <br>中野一花 〜バニーver.〜",
type:"desk",
price:450,
img:"images/gotoyome/itika_desk_bani.jpg",
source:"https://www.taito.co.jp/"
},


{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野三玖 ー",
type:"daku",
price:1400,
img:"images/gotoyome/miku_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"gotoyome",
name:"『五等分の花嫁＊』 BiCute Dark Figure ー 中野四葉 ー",
type:"daku",
price:1200,
img:"images/gotoyome/yotuba_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 Desktop Cute フィギュア <br>夜刀神十香 〜バニーver.〜 Renewal タイクレ限定",
type:"desk",
price:1100,
img:"images/deara/toka_bani_taikure.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"deara",
name:"『デート・ア・ライブV』 ぬーどるストッパーフィギュア <br>ー 時崎狂三・ 水着 ver. ー",
type:"nusuto",
price:350,
img:"images/deara/kurumi_nusuto.jpg",
source:"https://charahiroba.com/"
},


{
series:"deara",
name:"『デート・ア・ライブV』 BiCute Dark Figure <br>ー 時崎狂三 ー",
type:"daku",
price:800,
img:"images/deara/kurumi_daku.jpg",
source:"https://charahiroba.com/"
},

{
series:"deara",
name:"デート・ア・ライブ ペンフレ！ 時崎狂三 sweet silk wear ver.",
type:"pen",
price:500,
img:"images/deara/kurumi_pen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"deara",
name:"デート・ア・ライブ ペンフレ！ 夜刀神十香 sweet silk wear ver.",
type:"pen",
price:450,
img:"images/deara/toka_pen.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"osinoko",
name:"【推しの子】 ESPRESTO-Poppin' Heart-アイ",
type:"esp",
price:500,
img:"images/osinoko/ai_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tikawa",
name:"『ちいかわ』 撮りまーす！カメラ型ライト",
type:"",
price:400,
img:"images/tikawa/syasin.jpg",
source:"https://www.eikoh-prize.jp/"
},

{
series:"keroro",
name:"ケロロ軍曹 おおきなSOFVIMATES～クルル曹長～",
type:"sof",
price:600,
img:"images/keroro/kururu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"yahari",
name:"やはり俺の青春ラブコメはまちがっている。完<br>Luminasta“一色いろは” ～盛夏TOKYOBAY～",
type:"lum",
price:400,
img:"images/yahari/iroha.jpg",
source:"https://segaplaza.jp/"
},


{
series:"witti",
name:"TVアニメ『ウィッチウォッチ』 <br>ちょこのせプレミアムフィギュア “宮尾音夢”",
type:"tyoko",
price:300,
img:"images/witti/nemu_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"witti",
name:"TVアニメ『ウィッチウォッチ』Luminasta“宮尾音夢”",
type:"lum",
price:350,
img:"images/witti/nemu.jpg",
source:"https://segaplaza.jp/"
},

{
series:"fate",
name:"Fate/GrandOrderArcadeLuminasta“ランサー/エレシュキガル”",
type:"lum",
price:500,
img:"images/fate/eresyuki.jpg",
source:"https://segaplaza.jp/"
},

{
series:"samapoke",
name:"『Summer Pockets』 Yumemirize “空門蒼”",
type:"yume",
price:550,
img:"images/samapoke/ao.jpg",
source:"https://segaplaza.jp/"
},

{
series:"samapoke",
name:"『Summer Pockets』 Yumemirize “鳴瀬しろは”",
type:"yume",
price:550,
img:"images/samapoke/siroha.jpg",
source:"https://segaplaza.jp/"
},

{
series:"nigoriri",
name:"2.5次元の誘惑 GLITTER&GLAMOURS ミリエラ Bunny Style",
type:"gli",
price:400,
img:"images/nigoriri/miriera_bani.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nigoriri",
name:"2.5次元の誘惑 GLITTER&GLAMOURS リリエル Bunny Style",
type:"gli",
price:400,
img:"images/nigoriri/ririeru_bani.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"purikyua",
name:"『ふたりはプリキュア』 GLITTER&GLAMOURS <br>～キュアホワイト～",
type:"gli",
price:450,
img:"images/purikyua/howaito.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"purikyua",
name:"『ふたりはプリキュア』 GLITTER&GLAMOURS <br>～キュアブラック～",
type:"gli",
price:450,
img:"images/purikyua/burakku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aobuta",
name:"『青春ブタ野郎』シリーズ １/７スケールフィギュア　<br>桜島麻衣 和服メイドVer.",
type:"",
price:600,
img:"images/aobuta/wafukumeido.jpg",
source:"https://www.elcocoland.com/shop/"
},

{
series:"mazyotabi",
name:"魔女の旅々 Trio-Try-iT Figure<br>ーイレイナ・ブラウンコーデver.ー",
type:"trio",
price:600,
img:"images/mazyotabi/buraun_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"higurasi",
name:"ひぐらしのなく頃に卒　BiCute Bunnies Figureー羽入ー",
type:"bani",
price:500,
img:"images/higurasi/hanyu.jpg",
source:"https://charahiroba.com/"
},

{
series:"hant",
name:"HUNTER×HUNTER HUNTING ARCHIVES<br> ネテロ-音を置き去りにした-",
type:"",
price:500,
img:"images/hant/netero_oto.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"pawapuro",
name:"パワフルプロ野球パワプロくん プライズアクションフィギュア",
type:"",
price:500,
img:"images/pawapuro/pawapuro.jpg",
source:"https://p.eagate.573.jp/game/prize/collection/top/index.html"
},

{
series:"buri",
name:"BLEACH MAXIMATIC GRIMMJOW JAEGERJAQUES",
type:"ma",
price:1200,
img:"images/buri/gurimu_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 Trio-Try-iT Figure <br>ー 水篠旬 ー",
type:"trio",
price:1000,
img:"images/orerebe/mizusino_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hant",
name:"HUNTER×HUNTER Grandista-クラピカ-",
type:"gra",
price:1200,
img:"images/hant/kura_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"botti",
name:"アニメ「ぼっち・ざ・ろっく！」 鎮座獣 <br>承認欲求モンスター",
type:"tinza",
price:900,
img:"images/botti/syounin.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gundam",
name:"『機動戦士Gundam GQuuuuuuX』<br>ニャアン フィギュア 私服ver.",
type:"",
price:300,
img:"images/gundam/nyan.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"『転生したらスライムだった件』<br>リムル＆ランガ ソフビフィギュア",
type:"",
price:600,
img:"images/tensura/ranga.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"ワンピース GLITTER&GLAMOURS<br>-NAMI EGGHEAD STYLE-",
type:"gli",
price:750,
img:"images/wanpi/nami_egg_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 フィグライフ! 海賊狩りのゾロ",
type:"figl",
price:600,
img:"images/wanpi/zoro_figl.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"wanpi",
name:"『ワンピース』 THE出航 LOGIA -BORSALINO-",
type:"syukko",
price:650,
img:"images/wanpi/kizaru_syukko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -TRAFALGAR.LAW Ⅱ-",
type:"bato",
price:600,
img:"images/wanpi/ro2_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -NAMI-",
type:"bato",
price:900,
img:"images/wanpi/nami_egg_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -JEWELRY.BONNEY THE MOST FREE FUTURE-",
type:"bato",
price:550,
img:"images/wanpi/boni_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION -MONKEY.D.LUFFY GEAR5 SPECIAL ver.-",
type:"bato",
price:600,
img:"images/wanpi/nika_bato_sp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST MONKEY.D.LUFFY GEAR5 III",
type:"koa",
price:1000,
img:"images/wanpi/rufi3_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST JEWELRY.BONNEY THE MOST FREE FUTURE",
type:"koa",
price:600,
img:"images/wanpi/boni_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 KING OF ARTIST MONKEY.D.LUFFY -ワノ国 Ⅱ SPECIAL ver.-",
type:"koa",
price:1000,
img:"images/wanpi/rufi_wa2_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 Grandista -RORONOA ZORO Ⅱ-",
type:"gra",
price:1100,
img:"images/wanpi/zoro_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 Grandista -PORTGAS.D.ACE-",
type:"gra",
price:650,
img:"images/wanpi/ace_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -リヨウ-",
type:"vib",
price:1600,
img:"images/gati/riyo_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -エンジン-",
type:"vib",
price:1500,
img:"images/gati/enzi_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -ザンカ-",
type:"vib",
price:1500,
img:"images/gati/zanka_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gati",
name:"『ガチアクタ』 VIBRATION STARS -ルド-",
type:"vib",
price:1800,
img:"images/gati/rudo_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>ESPRESTO Detailed Elegance 喜多川海夢 黒江雫Ver.",
type:"esp",
price:900,
img:"images/kisekoi/sizuku_esp.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 フィグライフ! 童磨",
type:"figl",
price:1400,
img:"images/kimetu/doma_fig.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 MAXIMATIC SHINOBU KOCHO",
type:"ma",
price:1500,
img:"images/kimetu/sinobu_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 ぬーどるストッパーフィギュア <br>― 猗窩座・戦闘Ver. ― ラウンドワン限定",
type:"nusuto",
price:1600,
img:"images/kimetu/akaza_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 ぬーどるストッパーフィギュア<br>― 煉獄杏寿郎・戦闘Ver. ―ラウンドワン限定",
type:"nusuto",
price:1300,
img:"images/kimetu/rengoku_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Linkフィギュア <br>“竈門炭治郎” －刀鍛冶の里編－",
type:"xros",
price:1000,
img:"images/kimetu/tanzi_2xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“不死川実弥”－柱稽古編－",
type:"xros",
price:2000,
img:"images/kimetu/sina_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“時透無一郎”－柱稽古編－",
type:"xros",
price:4000,
img:"images/kimetu/tokito_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Link フィギュア “煉獄杏寿郎”",
type:"xros",
price:1000,
img:"images/kimetu/rengoku_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Xross Link フィギュア “猗窩座”",
type:"xros",
price:1300,
img:"images/kimetu/akaza2_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-AKAZA-",
type:"gra",
price:1300,
img:"images/kimetu/akaza_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-RENGOKU KYOJURO-",
type:"gra",
price:1000,
img:"images/kimetu/rengoku_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-DOMA-",
type:"gra",
price:1500,
img:"images/kimetu/doma_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -不死川実弥-",
type:"vib",
price:1800,
img:"images/kimetu/sina_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -煉獄杏寿郎-",
type:"vib",
price:1600,
img:"images/kimetu/rengoku_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS -胡蝶しのぶ-",
type:"vib",
price:1800,
img:"images/kimetu/sinobu_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 VIBRATION STARS <br>-ZETSU & HOSHIGAKI KISAME-",
type:"vib",
price:1300,
img:"images/naruto/zetu_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"『新劇場版 銀魂-吉原大炎上-』 VIBRATION STARS -神威-",
type: "vib",
price:1000,
img:"images/gintama/kamui_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"gintama",
name:"『新劇場版 銀魂-吉原大炎上-』 VIBRATION STARS -神楽-",
type: "vib",
price:1000,
img:"images/gintama/kagura_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 <br>ハイプレミアムフィギュア “早川アキ”",
type: "hi",
price:1100,
img:"images/tyen/aki_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
type:"flu",
price:700,
img:"images/haikyu/kuroo.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
type:"flu",
price:700,
img:"images/haikyu/kodu.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
type:"flu",
price:600,
img:"images/haikyu/kage.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"haikyu",
name:"『ハイキュー!!』 Fluffy Puffy～烏野高校・音駒高校～",
type:"flu",
price:600,
img:"images/haikyu/hinata.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"rerugan",
name:"『とある魔術の禁書目録』 ESPRESTO-LEVEL5 Accelerator-",
type:"esp",
price:600,
img:"images/rerugan/akuse.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編 EFFECTREME-リムル＝テンペスト -スペシャルカラーver.",
type:"eff",
price:800,
img:"images/tensura/rimuru_eff_s.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tensura",
name:"劇場版 転生したらスライムだった件 蒼海の涙編<br>魔王リムル=テンペスト フィギュア",
type:"",
price:1000,
img:"images/tensura/rimuru_maou.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』ぬーどるストッパーフィギュア<br>ー 桜ミク2024 パールカラーver. ー",
type:"nusuto",
price:800,
img:"images/miku/2024_sakura.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』Luminasta <br>“初音ミク”－クラシカルメイド－",
type:"lum",
price:700,
img:"images/miku/meido.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミクシリーズ Lminasta <br>“初音ミク 16th Anniversary” ぶーたVer.",
type:"lum",
price:1000,
img:"images/miku/16_anni.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミク　Aqua Float Girls フィギュア",
type:"aqua",
price:800,
img:"images/miku/aqua.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 Fashion フィギュア Country",
type:"",
price:1300,
img:"images/miku/kantori.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミク×チロルチョコ』 Trio-Try-iT Figure <br>ー 初音ミクｘチロルチョコ ミルクver. ー",
type:"trio",
price:1500,
img:"images/miku/tiroru.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 ぬーどるストッパーフィギュア <br>ー うさ耳パジャマ・ブルーver. ー",
type:"nusuto",
price:1200,
img:"images/miku/usamimi_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フリーレン” ～SUMMER DRESS～",
type:"lum",
price:900,
img:"images/furi-ren/furi_summer.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Desktop Cute フィギュア <br>フリーレン ～トランクver.～",
type:"desk",
price:1000,
img:"images/furi-ren/furi_torank.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』<br> ちょこのせプレミアムフィギュア “ヒンメル”",
type:"tyoko",
price:700,
img:"images/furi-ren/hin_tyoko.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Yumemirize<br> “フェルン”～一眠り～",
type:"yume",
price:500,
img:"images/furi-ren/fer_yume.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フェルン” ～メイド服～",
type:"lum",
price:900,
img:"images/furi-ren/fer_meido.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Luminasta　<br>“フリーレン” ～インミミック～",
type:"lum",
price:1300,
img:"images/furi-ren/furi_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 -Relax time-フリーレン",
type:"relax",
price:600,
img:"images/furi-ren/furi_relax.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 FIGURIZMα <br>“フリーレン” ～魔法の高み～",
type: "fig",
price:900,
img:"images/furi-ren/furi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』<br>Trio-Try-iT Figure ー ヒンメル ー",
type:"trio",
price:900,
img:"images/furi-ren/hin_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 <br>Trio-Try-iT Figure ー フリーレン ー",
type:"trio",
price:700,
img:"images/furi-ren/furi-ren_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 ちあぴこ～とどろきしょうと～",
type:"",
price:1500,
img:"images/hiro/todoroki_tia.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 ちあぴこ～ばくごうかつき～",
type:"",
price:1500,
img:"images/hiro/bakugo_tia.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 GLITTER&GLAMOURS <br>-HIMIKO TOGA- duffel coat ver.",
type:"gli",
price:900,
img:"images/hiro/toga_coat_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 Grandista -MIDORIYA IZUKU-",
type:"gra",
price:600,
img:"images/hiro/deku_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 MAXIMATIC<br>IZUKU MIDORIYA Ⅱ",
type:"ma",
price:800,
img:"images/hiro/deku_ma2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 CLEARISE ゴジータ&ベジット",
type:"cle",
price:800,
img:"images/db/bezi_cle.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 CLEARISE ゴジータ&ベジット",
type:"cle",
price:800,
img:"images/db/gozi_cle.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 MATCH MAKERS ジレン<br>（VS孫悟空 身勝手の極意）",
type:"mat",
price:600,
img:"images/db/ziren_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box 桃白白",
type: "his",
price:800,
img:"images/db/pai_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS フリーザ<br>（VS孫悟空）",
type:"mat",
price:900,
img:"images/db/furiza_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 孫悟空<br>（VSフリーザ）",
type:"mat",
price:700,
img:"images/db/goku_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 <br>SOLID EDGE WORKS -THE出陣- ブロリー",
type:"syutu",
price:800,
img:"images/db/burori2_syutu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『DRAGON BALL Z DOKKAN BATTLE』 10TH ANNIVERSARY FIGURE -超ゴジータ-",
type: "",
price:700,
img:"images/db/dokkan_gozi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『DRAGON BALL Z DOKKAN BATTLE』 10TH ANNIVERSARY FIGURE -超ベジット-",
type: "",
price:700,
img:"images/db/dokkan_bezi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』<br>SOLID EDGE WORKS-THE出陣- メタルクウラ",
type: "syutu",
price:500,
img:"images/db/kuura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 魔人ブウ<br>（VSアルティメット悟飯）",
type:"mat",
price:650,
img:"images/db/bu_mat2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 超サイヤ人3孫悟空<br>（VS魔人ブウ）",
type:"mat",
price:650,
img:"images/db/goku3_mat2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 MATCH MAKERS 超サイヤ人3孫悟空<br>（VS魔人ブウ(純粋)）",
type:"mat",
price:650,
img:"images/db/goku3_mat.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 コガネスピーカー",
type: "",
price:1000,
img:"images/zyuzyutu/kogane.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"呪術廻戦 フィギュアライト 乙骨憂太・リカ",
type: "",
price:800,
img:"images/zyuzyutu/otukotu_raito.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box クリリン",
type: "his",
price:500,
img:"images/db/kuri_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールGT』 SOLID EDGE WORKS-THE出陣- 超サイヤ人4ゴジータ",
type: "syutu",
price:600,
img:"images/db/gozita4_solid.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール超』 Grandista -GOGETA-Ⅱ",
type: "gra",
price:600,
img:"images/db/gozita_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 Grandista -MAJIN VEGETA-",
type: "gra",
price:1300,
img:"images/db/bezi_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 MAXIMATIC PLUS SUKUNA",
type: "ma",
price:1500,
img:"images/zyuzyutu/sukuna_map.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 XStellar “虎杖悠仁”",
type: "xs",
price:800,
img:"images/zyuzyutu/itadori_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 XStellar “乙骨憂太”",
type: "xs",
price:800,
img:"images/zyuzyutu/otukotu_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 Grandista -FUSHIGURO MEGUMI-",
type: "gra",
price:600,
img:"images/zyuzyutu/megumi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト-疾風伝』 Grandista-UCHIHA ITACHI-",
type:"gra",
price:2500,
img:"images/naruto/itati_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 MAXIMATIC PLUS MONKEY.D.LUFFY I",
type:"ma",
price:1400,
img:"images/wanpi/rufi_map.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ[新編]叛逆の物語 BANPRESTO EVOLVE 悪魔ほむらフィギュア",
type:"bpev",
price:1400,
img:"images/madomagi/homura_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ[新編]叛逆の物語 BANPRESTO EVOLVE アルティメットまどかフィギュア",
type:"bpev",
price:1800,
img:"images/madomagi/madoka_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険スターダストクルセイダース<br>Mometria  DIO",
type:"",
price:1200,
img:"images/zyozyo/dio3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"ジョジョの奇妙な冒険スターダストクルセイダース<br>Mometria  空条承太郎",
type:"",
price:1800,
img:"images/zyozyo/zyotaro.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 戦闘潮流』<br>Mometria カーズ",
type:"",
price:1500,
img:"images/zyozyo/ka-zu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 戦闘潮流』<br>Mometria ジョセフ・ジョースター",
type:"",
price:1500,
img:"images/zyozyo/zyosefu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 ファントムブラッド』<br>Mometria ディオ・ブランドー",
type:"",
price:1200,
img:"images/zyozyo/dio.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyozyo",
name:"『ジョジョの奇妙な冒険 ファントムブラッド』<br>Mometria  ジョナサン・ジョースター",
type:"",
price:1000,
img:"images/zyozyo/zyonasan.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"umamusume",
name:"『ウマ娘 シンデレラグレイ』 BANPRESTO EVOLVE<br>オグリキャップフィギュア",
type:"bpev",
price:2000,
img:"images/umamusume/oguri_bpev.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"ika",
name:"『侵略!イカ娘』 Trio-Try-iT Figure ー イカ娘 ー",
type:"trio",
price:1000,
img:"images/ika/ika.jpg",
source:"https://charahiroba.com/"
},

{
series:"pokemon",
name:"『ポケモンマスターズ EX』PANEL SPECTACLE<br>～アルコスシロナ&メガガブリアス～",
type:"",
price:1000,
img:"images/pokemon/sirona.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hokuto",
name:"『北斗の拳 -FIST OF THE NORTH STAR-』<br>Grandista -KENSHIRO-",
type:"gra",
price:800,
img:"images/hokuto/ken.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"nintama",
name:"『忍たま乱太郎』 山田利吉 フィギュア",
type:"",
price:700,
img:"images/nintama/yamada.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボール』 History Box 神龍",
type:"his",
price:1000,
img:"images/db/syenron_his.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"watanare",
name:"『わたしが恋人になれるわけないじゃん、ムリムリ!（※ムリじゃなかった!?）』Trio-Try-iT Figureー 王塚真唯 ー",
type:"trio",
price:2000,
img:"images/watanare/outuka_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"hebu",
name:"『ヘブンバーンズレッド』 Trio-Try-iT Figure<br>ー 和泉ユキ ー",
type:"trio",
price:700,
img:"images/hebu/yuki_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"『初音ミクシリーズ』<br>ぬーどるストッパーフィギュア ー カナリア ー",
type:"nusuto",
price:800,
img:"images/miku/miku_kanariya_nusuto.jpg",
source:"https://charahiroba.com/"
},

{
series:"tora",
name:"『To LOVE る―とらぶる―ダークネス』 Trio-Try-iT Figure ― モモ・ベリア・デビルーク ―",
type:"trio",
price:800,
img:"images/tora/momo_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"tyen",
name:"『チェンソーマン』 Luminasta “マキマ”",
type: "lum",
price:900,
img:"images/tyen/makima_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"eva",
name:"『シン・エヴァンゲリオン劇場版』<br>FIGURIZMα　“アヤナミレイ（仮称）”",
type: "fig",
price:1000,
img:"images/eva/ayanami_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦 死滅回游』 Luminasta　“脹相”",
type: "lum",
price:1300,
img:"images/zyuzyutu/tyousou_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"vtu",
name:"『赤見かるびの「お笑いかるび塾」』<br>Luminasta　“赤見かるび”",
type: "lum",
price:800,
img:"images/vtu/akami_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION<br>-SILVERS.RAYLEIGH-",
type:"bato",
price:700,
img:"images/wanpi/reiri_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION<br>-GOL.D.ROGER-",
type:"bato",
price:700,
img:"images/wanpi/rozya_bato.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"aimasu",
name:"『学園アイドルマスター』 <br>ESPRESTO-Sweet moment-篠澤 広",
type:"esp",
price:800,
img:"images/aimasu/aimasu_hiro_es.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』 G×materia VEGETA Ⅱ",
type:"gma",
price:800,
img:"images/db/bezi_gma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>佐倉杏子 フィギュア",
type:"",
price:800,
img:"images/madomagi/kyoko.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>巴マミ フィギュア",
type:"",
price:800,
img:"images/madomagi/mami.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>暁美ほむら フィギュア",
type:"",
price:1000,
img:"images/madomagi/homura.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>美樹さやか フィギュア",
type:"",
price:800,
img:"images/madomagi/sayaka.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"madomagi",
name:"劇場版 魔法少女まどか☆マギカ 叛逆の物語 <br>鹿目まどか フィギュア",
type:"",
price:1000,
img:"images/madomagi/madoka.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』KING OF ARTIST <br>RORONOA ZORO & SANJI-SPECIAL ver.-",
type:"koa",
price:900,
img:"images/wanpi/zoro_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』KING OF ARTIST <br>RORONOA ZORO & SANJI-SPECIAL ver.-",
type:"koa",
price:800,
img:"images/wanpi/sanzi_koa.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 GLITTER&GLAMOURS<br>-JEWELRY.BONNEY-Ⅱ",
type:"gli",
price:800,
img:"images/wanpi/boni_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』MAXIMATIC<br> IZUKU MIDORIYA Ⅲ",
type:"ma",
price:1000,
img:"images/hiro/deku_ma3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hiro",
name:"『僕のヒーローアカデミア』 MAXIMATIC <br>SHOTO TODOROKI Ⅱ",
type:"ma",
price:800,
img:"images/hiro/todoroki_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-ヒソカ-G.I.編",
type:"",
price:1400,
img:"images/hant/hisoka_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-キルア-G.I.編",
type:"",
price:1200,
img:"images/hant/kirua_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 フィギュア-ゴン-G.I.編",
type:"",
price:1000,
img:"images/hant/gon_gi.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -我妻善逸-",
type:"vib",
price:1500,
img:"images/kimetu/zen_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 VIBRATION STARS PLUS -獪岳-",
type:"vib",
price:1100,
img:"images/kimetu/kai_vib.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"『チェンソーマン』 Break time collection vol.4",
type:"bre",
price:2000,
img:"images/tyen/potita_bre.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kusuri",
name:"『薬屋のひとりごと』 Vivit フィギュア 猫猫 （狩り）",
type:"vivi",
price:900,
img:"images/kusuri/maomao_vivi.jpg",
source:"http://fansclub.jp/pc/top/"
},


{
series:"wanpi",
name:"『ワンピース』 Grandista ボア・ハンコック",
type:"gra",
price:1300,
img:"images/wanpi/han_gra.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 Grandista <br>-HARUNO SAKURA ＆ UCHIHA SASUKE-",
type:"gra",
price:1300,
img:"images/naruto/sasuke_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』 Grandista <br>-HARUNO SAKURA ＆ UCHIHA SASUKE-",
type:"gra",
price:1700,
img:"images/naruto/sakura_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"zyuzyutu",
name:"『呪術廻戦』 KING OF ARTIST  KENJAKU",
type:"koa",
price:900,
img:"images/zyuzyutu/geto_koa.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>XStellar　“喜多川海夢”",
type:"xs",
price:800,
img:"images/kisekoi/marin_xs.jpg",
source:"https://segaplaza.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 BATTLE RECORD COLLECTION <br>-MONKEY.D.LUFFY GEAR5 Ⅱ-",
type:"bato",
price:1100,
img:"images/wanpi/rufi_bato2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"wanpi",
name:"『ワンピース』 THEORAMA SOUL -SHANKS-",
type:"",
price:1200,
img:"images/wanpi/syankusu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"フィグライフ！火影岩 SPECIAL",
type:"figl",
price:1000,
img:"images/naruto/boruto_fig.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"kon",
name:"Trio-Try-iT -平沢唯-",
type:"trio",
price:2000,
img:"images/kon/yui_trio.jpg",
source:"https://charahiroba.com/"
},


{
series:"kon",
name:"Trio-Try-iT -中野梓-",
type:"trio",
price:1900,
img:"images/kon/azu_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -秋山澪-",
type:"trio",
price:1500,
img:"images/kon/mio_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -田井中律-",
type:"trio",
price:1400,
img:"images/kon/ritu_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"kon",
name:"Trio-Try-iT -琴吹紬-",
type:"trio",
price:1400,
img:"images/kon/mugi_trio.jpg",
source:"https://charahiroba.com/"
},

{
series:"singeki",
name:"Grandista　-リヴァイ-",
type:"gra",
price:1500,
img:"images/singeki/riva_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"singeki",
name:"Grandista　-エレン・イェーガー-",
type:"gra",
price:1200,
img:"images/singeki/eren_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"pansuto",
name:"『New PANTY ＆ STOCKING with GARTERBELT』 <br>BRILLIANT フィギュア パンティ",
type:"bri",
price:1800,
img:"images/pansuto/panty.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"nikke",
name:"『勝利の女神：NIKKE』<br> ぬーどるストッパーフィギュア ー シンデレラ ー",
type:"nusuto",
price:1200,
img:"images/nikke/sin_nusuto.jpg",
source:"https://charahiroba.com/"
},


{
series:"zyuzyutu",
name:"『呪術廻戦』 Luminasta “宿儺” 「■」「開」",
type:"lum",
price:1800,
img:"images/zyuzyutu/sukuna_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 XrossLink フィギュア “向坂雫”",
type:"xros",
price:1200,
img:"images/orerebe/kou_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』 XrossLink フィギュア “水篠旬”",
type:"xros",
price:1400,
img:"images/orerebe/mizu_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"oba",
name:"『オーバーロード』 T-most アルベド フィギュア <br>～純白の悪魔ver.～",
type:"tmost",
price:1300,
img:"images/oba/aru_tmost.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"miku",
name:"『初音ミクシリーズ』 Fashion フィギュア Outdoor",
type:"",
price:1400,
img:"images/miku/miku_auto.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』フィギュア うちはサスケ・うちはイタチ～GiGOグループのお店限定～",
type: "",
price:1600,
img:"images/naruto/sasuke_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト- 疾風伝』フィギュア うちはサスケ・うちはイタチ～GiGOグループのお店限定～",
type: "",
price:1600,
img:"images/naruto/itati_gigo.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"『NARUTO-ナルト-疾風伝』 忍界造形列伝 <br>-波風ミナト-",
type: "ninkai",
price:1300,
img:"images/naruto/minato_ninkai.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"buri",
name:"『BLEACH』 GLITTER&GLAMOURS <br>-TIER HARRIBEL-",
type: "gli",
price:1100,
img:"images/buri/hari_gli.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"tyen",
name:"『チェンソーマン』Luminasta “チェンソーマン”",
type: "lum",
price:1200,
img:"images/tyen/tyen_lum.jpg",
source:"https://segaplaza.jp/"
},

{
series:"tyen",
name:"劇場版『チェンソーマン レゼ篇』 <br>ハイプレミアムフィギュア “天使の悪魔”",
type: "hi",
price:1500,
img:"images/tyen/tensi_hi.jpg",
source:"https://segaplaza.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 Grandista -キルア-",
type: "gra",
price:1300,
img:"images/hant/kirua_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"hant",
name:"『HUNTER×HUNTER』 Exc∞d Creative Figure <br>ークロロ・鎮魂歌ー",
type: "ex",
price:1100,
img:"images/hant/kuroro_ex.jpg",
source:"https://charahiroba.com/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα “伏黒恵” 邂逅",
type:"fig",
price:1100,
img:"images/zyuzyutu/fusi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα “伏黒甚爾” 邂逅",
type:"fig",
price:1100,
img:"images/zyuzyutu/touzi_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"naruto",
name:"『-NARUTO 72 series- 45』 Grandista <br>-UZUMAKI NARUTO-",
type: ["gra", "72"],
price:1500,
img:"images/naruto/naruto_gra3.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"naruto",
name:"Grandista　-うずまきナルトⅡ-",
type: "gra",
price:800,
img:"images/naruto/naruto_gra2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"db",
name:"『ドラゴンボールZ』SOLID EDGE WORKS -THE出陣- ブロリーⅡ",
type:"syutu",
price:800,
img:"images/db/burori_syutu.jpg",
source:"https://bsp-prize.jp/"
},


{
series:"naruto",
name:"『-NARUTO 72 series- 16』フィギュア<br> うずまきナルト＆うみのイルカ",
type:"72",
price:800,
img:"images/naruto/naruto_72.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"naruto",
name:"『-NARUTO 72 series- 16』フィギュア<br> うずまきナルト＆うみのイルカ",
type:"72",
price:800,
img:"images/naruto/iruka_72.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"zyuzyutu",
name:"『呪術廻戦』 Grandista GOJO SATORU",
type:"gra",
price:2600,
img:"images/zyuzyutu/gozyo_gra.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“猗窩座” －無限城編－",
type:"xros",
price:1300,
img:"images/kimetu/akaza_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“冨岡義勇” －無限城編－",
type:"xros",
price:1800,
img:"images/kimetu/tomioka_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 XrossLink フィギュア <br>“竈門炭治郎” －無限城編－",
type:"xros",
price:1100,
img:"images/kimetu/tanziro_xros.jpg",
source:"https://segaplaza.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 Grandista-TOMIOKA GIYU-",
type:"gra",
price:1800,
img:"images/kimetu/giyu_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"orerebe",
name:"『俺だけレベルアップな件』ESPRESTO-Excite Motions-vol.1",
type:"esp",
price:1300,
img:"images/orerebe/mizusino_esp.jpg",
source:"https://bsp-prize.jp/"

},


{
series:"miku",
name:"『初音ミクシリーズ』 Trio-Try-iT Figure <br>ー 雪ミクxクロミ ー",
type:"trio",
price:2400,
img:"images/miku/kuromi_miku.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"ガンダム45周年×初音ミク フィギュアシャアザクぐるみ 初音ミクVer.",
type:"",
price:1300,
img:"images/miku/miku_zaku.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"miku",
name:"『桜ミク』 AMP＋ フィギュア 〜桜ドレス ver.〜",
type:"",
price:1600,
img:"images/miku/sakuramiku2026.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kimetu",
name:"『鬼滅の刃』 GLITTER&GLAMOURS <br>-SHINOBU KOCHO-",
type:"gli",
price:1300,
img:"images/kimetu/kotyo_gri.jpg",
source:"https://bsp-prize.jp/"

},

{
series:"zyuzyutu",
name:"『呪術廻戦』 FIGURIZMα　“宿儺”",
type:"fig",
price:1800,
img:"images/zyuzyutu/sukuna_fig.jpg",
source:"https://segaplaza.jp/"
},

{
series:"miku",
name:"初音ミク ぬーどるストッパー　-ヴィンテージドール-",
type:"nusuto",
price:2200,
img:"images/miku/miku_vin.jpg",
source:"https://charahiroba.com/"
},

{
series:"miku",
name:"初音ミク×ラスカル Trio-Try-iT -悪魔-",
type:"trio",
price:2500,
img:"images/miku/miku_akuma.jpg",
source:"https://charahiroba.com/"
},

{
series:"kisekoi",
name:"『その着せ替え人形は恋をする』 <br>T-most 喜多川海夢 フィギュア 〜黒江雫ver.〜",
type:"tmost",
price:1200,
img:"images/kisekoi/sizuku_tmost.jpg",
source:"https://www.taito.co.jp/"
},

{
series:"kusuri",
name:"BRILLIANTフィギュア 猫猫",
type:"bri",
price:900,
img:"images/kusuri/maomao_buri.jpg",
source:"http://fansclub.jp/pc/top/"
},

{
series:"kusuri",
name:"『薬屋のひとりごと』 猫猫 フィギュア～園遊会～",
type:"",
price:800,
img:"images/kusuri/maomao_enyu.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"zyuzyutu",
name:"MAXIMATIC　五条悟",
type:"ma",
price:1000,
img:"images/zyuzyutu/gozyo_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 Grandista -FRIEREN-",
type:"gra",
price:900,
img:"images/furi-ren/furi_gra.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC フェルン",
type:"ma",
price:700,
img:"images/furi-ren/fer_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC STARK",
type:"ma",
price:800,
img:"images/furi-ren/syuta_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC FRIEREN",
type:"ma",
price:500,
img:"images/furi-ren/furi_ma.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC FRIEREN Ⅱ",
type:"ma",
price:800,
img:"images/furi-ren/furi_ma2.jpg",
source:"https://bsp-prize.jp/"
},

{
series:"furi-ren",
name:"『葬送のフリーレン』 MAXIMATIC HIMMEL",
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

  if(series !== "all"){
    filtered = filtered.filter(f => f.series === series);
  }

  if(type !== "all"){
    filtered = filtered.filter(f =>
      Array.isArray(f.type) ? f.type.includes(type) : f.type === type
    );
  }

  if(price !== "all"){
    filtered = filtered.filter(f => f.price == price);
  }

  if(search !== ""){
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(search)
    );
  }

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


// ★ここに置く（外に出す）
function showPurchaseFlow() {
  const list = document.getElementById("figureList");
  const template = document.getElementById("purchaseTemplate");

  list.innerHTML = template.innerHTML;
}


showFigures();
