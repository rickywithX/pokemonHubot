'use strict';

var client = require('cheerio-httpcli');
// var allPokemon = ["001フシギダネ", "002フシギソウ", "003フシギバナ", "004ヒトカゲ", "005リザード", "006リザードン", "007ゼニガメ", "008カメール", "009カメックス", "010キャタピー", "011トランセル", "012バタフリー", "013ビードル", "014コクーン", "015スピアー", "016ポッポ", "017ピジョン", "018ピジョット", "019コラッタ", "020ラッタ", "021オニスズメ", "022オニドリル", "023アーボ", "024アーボック", "025ピカチュウ", "026ライチュウ", "027サンド", "028サンドパン", "029ニドラン♀", "030ニドリーナ", "031ニドクイン", "032ニドラン♂", "033ニドリーノ", "034ニドキング", "035ピッピ", "036ピクシー", "037ロコン", "038キュウコン", "039プリン", "040プクリン", "041ズバット", "042ゴルバット", "043ナゾノクサ", "044クサイハナ", "045ラフレシア", "046パラス", "047パラセクト", "048コンパン", "049モルフォン", "050ディグダ", "", "051ダグトリオ", "052ニャース", "053ペルシアン", "054コダック", "055ゴルダック", "056マンキー", "057オコリザル", "058ガーディ", "059ウインディ", "060ニョロモ", "061ニョロゾ", "062ニョロボン", "063ケーシィ", "064ユンゲラー", "065フーディン", "066ワンリキー", "067ゴーリキー", "068カイリキー", "069マダツボミ", "070ウツドン", "071ウツボット", "072メノクラゲ", "073ドククラゲ", "074イシツブテ", "075ゴローン", "076ゴローニャ", "077ポニータ", "078ギャロップ", "079ヤドン", "080ヤドラン", "081コイル", "082レアコイル", "083カモネギ", "084ドードー", "085ドードリオ", "086パウワウ", "087ジュゴン", "088ベトベター", "089ベトベトン", "090シェルダー", "091パルシェン", "092ゴース", "093ゴースト", "094ゲンガー", "095イワーク", "096スリープ", "097スリーパー", "098クラブ", "099キングラー", "100ビリリダマ", "101マルマイン", "102タマタマ", "103ナッシー", "104カラカラ", "105ガラガラ", "106サワムラー", "107エビワラー", "108ベロリンガ", "109ドガース", "110マタドガス", "111サイホーン", "112サイドン", "113ラッキー", "114モンジャラ", "115ガルーラ", "116タッツー", "117シードラ", "118トサキント", "119アズマオウ", "120ヒトデマン", "121スターミー", "122バリヤード", "123ストライク", "124ルージュラ", "125エレブー", "126ブーバー", "127カイロス", "128ケンタロス", "129コイキング", "130ギャラドス", "131ラプラス", "132メタモン", "133イーブイ", "134シャワーズ", "135サンダース", "136ブースター", "137ポリゴン", "138オムナイト", "139オムスター", "140カブト", "141カブトプス", "142プテラ", "143カビゴン", "144フリーザー", "145サンダー", "146ファイヤー", "147ミニリュウ", "148ハクリュー", "149カイリュー", "150ミュウツー", "151ミュウ", "152チコリータ", "153ベイリーフ", "154メガニウム", "155ヒノアラシ", "156マグマラシ", "157バクフーン", "158ワニノコ", "159アリゲイツ", "160オーダイル", "161オタチ", "162オオタチ", "163ホーホー", "164ヨルノズク", "165レディバ", "166レディアン", "167イトマル", "168アリアドス", "169クロバット", "170チョンチー", "171ランターン", "172ピチュー", "173ピィ", "174ププリン", "175トゲピー", "176トゲチック", "177ネイティ", "178ネイティオ", "179メリープ", "180モココ", "181デンリュウ", "182キレイハナ", "183マリル", "184マリルリ", "185ウソッキー", "186ニョロトノ", "187ハネッコ", "188ポポッコ", "189ワタッコ", "190エイパム", "191ヒマナッツ", "192キマワリ", "193ヤンヤンマ", "194ウパー", "195ヌオー", "196エーフィ", "197ブラッキー", "198ヤミカラス", "199ヤドキング", "200ムウマ", "201アンノーン", "202ソーナンス", "203キリンリキ", "204クヌギダマ", "205フォレトス", "206ノコッチ", "207グライガー", "208ハガネール", "209ブルー", "210グランブル", "211ハリーセン", "212ハッサム", "213ツボツボ", "214ヘラクロス", "215ニューラ", "216ヒメグマ", "217リングマ", "218マグマッグ", "219マグカルゴ", "220ウリムー", "221イノムー", "222サニーゴ", "223テッポウオ", "224オクタン", "225デリバード", "226マンタイン", "227エアームド", "228デルビル", "229ヘルガー", "230キングドラ", "231ゴマゾウ", "232ドンファン", "233ポリゴン2", "234オドシシ", "235ドーブル", "236バルキー", "237カポエラー", "238ムチュール", "239エレキッド", "240ブビィ", "241ミルタンク", "242ハピナス", "243ライコウ", "244エンテイ", "245スイクン", "246ヨーギラス", "247サナギラス", "248バンギラス", "249ルギア", "250ホウオウ", "251セレビィ", "252キモリ", "253ジュプトル", "254ジュカイン", "255アチャモ", "256ワカシャモ", "257バシャーモ", "258ミズゴロウ", "259ヌマクロー", "260ラグラージ", "261ポチエナ", "262グラエナ", "263ジグザグマ", "264マッスグマ", "265ケムッソ", "266カラサリス", "267アゲハント", "268マユルド", "269ドクケイル", "270ハスボー", "271ハスブレロ", "272ルンパッパ", "273タネボー", "274コノハナ", "275ダーテング", "276スバメ", "277オオスバメ", "278キャモメ", "279ペリッパー", "280ラルトス", "281キルリア", "282サーナイト", "283アメタマ", "284アメモース", "285キノココ", "286キノガッサ", "287ナマケロ", "288ヤルキモノ", "289ケッキング", "290ツチニン", "291テッカニン", "292ヌケニン", "293ゴニョニョ", "294ドゴーム", "295バクオング", "296マクノシタ", "297ハリテヤマ", "298ルリリ", "299ノズパス", "300エネコ", "301エネコロロ", "302ヤミラミ", "303クチート", "304ココドラ", "305コドラ", "306ボスゴドラ", "307アサナン", "308チャーレム", "309ラクライ", "310ライボルト", "311プラスル", "312マイナン", "313バルビート", "314イルミーゼ", "315ロゼリア", "316ゴクリン", "317マルノーム", "318キバニア", "319サメハダー", "320ホエルコ", "321ホエルオー", "322ドンメル", "323バクーダ", "324コータス", "325バネブー", "326ブーピッグ", "327パッチール", "328ナックラー", "329ビブラーバ", "330フライゴン", "331サボネア", "332ノクタス", "333チルット", "334チルタリス", "335ザングース", "336ハブネーク", "337ルナトーン", "338ソルロック", "339ドジョッチ", "340ナマズン", "341ヘイガニ", "342シザリガー", "343ヤジロン", "344ネンドール", "345リリーラ", "346ユレイドル", "347アノプス", "348アーマルド", "349ヒンバス", "350ミロカロス", "351ポワルン", "352カクレオン", "353カゲボウズ", "354ジュペッタ", "355ヨマワル", "356サマヨール", "357トロピウス", "358チリーン", "359アブソル", "360ソーナノ", "361ユキワラシ", "362オニゴーリ", "363タマザラシ", "364トドグラー", "365トドゼルガ", "366パールル", "367ハンテール", "368サクラビス", "369ジーランス", "370ラブカス", "371タツベイ", "372コモルー", "373ボーマンダ", "374ダンバル", "375メタング", "376メタグロス", "377レジロック", "378レジアイス", "379レジスチル", "380ラティアス", "381ラティオス", "382カイオーガ", "383グラードン", "384レックウザ", "385ジラーチ", "386デオキシス", "387ナエトル", "388ハヤシガメ", "389ドダイトス", "390ヒコザル", "391モウカザル", "392ゴウカザル", "393ポッチャマ", "394ポッタイシ", "395エンペルト", "396ムックル", "397ムクバード", "398ムクホーク", "399ビッパ", "400ビーダル", "401コロボーシ", "402コロトック", "403コリンク", "404ルクシオ", "405レントラー", "406スボミー", "407ロズレイド", "408ズガイドス", "409ラムパルド", "410タテトプス", "411トリデプス", "412ミノムッチ", "413ミノマダム", "414ガーメイル", "415ミツハニー", "416ビークイン", "417パチリス", "418ブイゼル", "419フローゼル", "420チェリンボ", "421チェリム", "422カラナクシ", "423トリトドン", "424エテボース", "425フワンテ", "426フワライド", "427ミミロル", "428ミミロップ", "429ムウマージ", "430ドンカラス", "431ニャルマー", "432ブニャット", "433リーシャン", "434スカンプー", "435スカタンク", "436ドーミラー", "437ドータクン", "438ウソハチ", "439マネネ", "440ピンプク", "441ペラップ", "442ミカルゲ", "443フカマル", "444ガバイト", "445ガブリアス", "446ゴンベ", "447リオル", "448ルカリオ", "449ヒポポタス", "450カバルドン", "451スコルピ", "452ドラピオン", "453グレッグル", "454ドクロッグ", "455マスキッパ", "456ケイコウオ", "457ネオラント", "458タマンタ", "459ユキカブリ", "460ユキノオー", "461マニューラ", "462ジバコイル", "463ベロベルト", "464ドサイドン", "465モジャンボ", "466エレキブル", "467ブーバーン", "468トゲキッス", "469メガヤンマ", "470リーフィア", "471グレイシア", "472グライオン", "473マンムー", "474ポリゴンZ", "475エルレイド", "476ダイノーズ", "477ヨノワール", "478ユキメノコ", "479ロトム", "480ユクシー", "481エムリット", "482アグノム", "483ディアルガ", "484パルキア", "485ヒードラン", "486レジギガス", "487ギラティナ", "488クレセリア", "489フィオネ", "490マナフィ", "491ダークライ", "492シェイミ", "493アルセウス", "494ビクティニ", "495ツタージャ", "496ジャノビー", "497ジャローダ", "498ポカブ", "499チャオブー", "500エンブオー", "501ミジュマル", "502フタチマル", "503ダイケンキ", "504ミネズミ", "505ミルホッグ", "506ヨーテリー", "507ハーデリア", "508ムーランド", "509チョロネコ", "510レパルダス", "511ヤナップ", "512ヤナッキー", "513バオップ", "514バオッキー", "515ヒヤップ", "516ヒヤッキー", "517ムンナ", "518ムシャーナ", "519マメパト", "520ハトーボー", "521ケンホロウ", "522シママ", "523ゼブライカ", "524ダンゴロ", "525ガントル", "526ギガイアス", "527コロモリ", "528ココロモリ", "529モグリュー", "530ドリュウズ", "531タブンネ", "532ドッコラー", "533ドテッコツ", "534ローブシン", "535オタマロ", "536ガマガル", "537ガマゲロゲ", "538ナゲキ", "539ダゲキ", "540クルミル", "541クルマユ", "542ハハコモリ", "543フシデ", "544ホイーガ", "545ペンドラー", "546モンメン", "547エルフーン", "548チュリネ", "549ドレディア", "550バスラオ", "551メグロコ", "552ワルビル", "553ワルビアル", "554ダルマッカ", "555ヒヒダルマ", "556マラカッチ", "557イシズマイ", "558イワパレス", "559ズルッグ", "560ズルズキン", "561シンボラー", "562デスマス", "563デスカーン", "564プロトーガ", "565アバゴーラ", "566アーケン", "567アーケオス", "568ヤブクロン", "569ダストダス", "570ゾロア", "571ゾロアーク", "572チラーミィ", "573チラチーノ", "574ゴチム", "575ゴチミル", "576ゴチルゼル", "577ユニラン", "578ダブラン", "579ランクルス", "580コアルヒー", "581スワンナ", "582バニプッチ", "583バニリッチ", "584バイバニラ", "585シキジカ", "586メブキジカ", "587エモンガ", "588カブルモ", "589シュバルゴ", "590タマゲタケ", "591モロバレル", "592プルリル", "593ブルンゲル", "594ママンボウ", "595バチュル", "596デンチュラ", "597テッシード", "598ナットレイ", "599ギアル", "600ギギアル", "601ギギギアル", "602シビシラス", "603シビビール", "604シビルドン", "605リグレー", "606オーベム", "607ヒトモシ", "608ランプラー", "609シャンデラ", "610キバゴ", "611オノンド", "612オノノクス", "613クマシュン", "614ツンベアー", "615フリージオ", "616チョボマキ", "617アギルダー", "618マッギョ", "619コジョフー", "620コジョンド", "621クリムガン", "622ゴビット", "623ゴルーグ", "624コマタナ", "625キリキザン", "626バッフロン", "627ワシボン", "628ウォーグル", "629バルチャイ", "630バルジーナ", "631クイタラン", "632アイアント", "633モノズ", "634ジヘッド", "635サザンドラ", "636メラルバ", "637ウルガモス", "638コバルオン", "639テラキオン", "640ビリジオン", "641トルネロス", "642ボルトロス", "643レシラム", "644ゼクロム", "645ランドロス", "646キュレム", "647ケルディオ", "648メロエッタ", "649ゲノセクト", "650ハリマロン", "651ハリボーグ", "652ブリガロン", "653フォッコ", "654テールナー", "655マフォクシー", "656ケロマツ", "657ゲコガシラ", "658ゲッコウガ", "659ホルビー", "660ホルード", "661ヤヤコマ", "662ヒノヤコマ", "663ファイアロー", "664コフキムシ", "665コフーライ", "666ビビヨン", "667シシコ", "668カエンジシ", "669フラベベ", "670フラエッテ", "671フラージェス", "672メェークル", "673ゴーゴート", "674ヤンチャム", "675ゴロンダ", "676トリミアン", "677ニャスパー", "678ニャオニクス", "679ヒトツキ", "680ニダンギル", "681ギルガルド", "682シュシュプ", "683フレフワン", "684ペロッパフ", "685ペロリーム", "686マーイーカ", "687カラマネロ", "688カメテテ", "689ガメノデス", "690クズモー", "691ドラミドロ", "692ウデッポウ", "693ブロスター", "694エリキテル", "695エレザード", "696チゴラス", "697ガチゴラス", "698アマルス", "699アマルルガ", "700ニンフィア", "701ルチャブル", "702デデンネ", "703メレシー", "704ヌメラ", "705ヌメイル", "706ヌメルゴン", "707クレッフィ", "708ボクレー", "709オーロット", "710バケッチャ", "711パンプジン", "712カチコール", "713クレベース", "714オンバット", "715オンバーン", "716ゼルネアス", "717イベルタル", "718ジガルデ", "719ディアンシー", "720フーパ", "721ボルケニオン", "722モクロー", "723フクスロー", "724ジュナイパー", "725ニャビー", "726ニャヒート", "727ガオガエン", "728アシマリ", "729オシャマリ", "730アシレーヌ", "731ツツケラ", "732ケララッパ", "733ドデカバシ", "734ヤングース", "735デカグース", "736アゴジムシ", "737デンヂムシ", "738クワガノン", "739マケンカニ", "740ケケンカニ", "741オドリドリ", "742アブリー", "743アブリボン", "744イワンコ", "745ルガルガン", "746ヨワシ", "747ヒドイデ", "748ドヒドイデ", "749ドロバンコ", "750バンバドロ", "751シズクモ", "752オニシズクモ", "753カリキリ", "754ラランテス", "755ネマシュ", "756マシェード", "757ヤトウモリ", "758エンニュート", "759ヌイコグマ", "760キテルグマ", "761アマカジ", "762アママイコ", "763アマージョ", "764キュワワー", "765ヤレユータン", "766ナゲツケサル", "767コソクムシ", "768グソクムシャ", "769スナバァ", "770シロデスナ", "771ナマコブシ", "772タイプ：ヌル", "773シルヴァディ", "774メテノ", "775ネッコアラ", "776バクガメス", "777トゲデマル", "778ミミッキュ", "779ハギギシリ", "780ジジーロン", "781ダダリン", "782ジャラコ", "783ジャランゴ", "784ジャラランガ", "785カプ・コケコ", "786カプ・テテフ", "787カプ・ブルル", "788カプ・レヒレ", "789コスモッグ", "790コスモウム", "791ソルガレオ", "792ルナアーラ", "793ウツロイド", "794マッシブーン", "795フェローチェ", "796デンジュモク", "797テッカグヤ", "798カミツルギ", "799アクジキング", "800ネクロズマ", "801マギアナ", "802マーシャドー", "803ベベノム", "804アーゴヨン", "805ツンデツンデ", "806ズガドーン"];
// var abc = allPokemon[Math.floor(Math.random() * allPokemon.length)];


module.exports = (robot) => {
    //メンションをつけて指定の単語を入力するとそれに応じたURLを提供してくれる
    robot.respond(/公式/i, (msg) => {
        msg.send('ポケットモンスターオフィシャルサイトです！' + ' \n' + 'http://www.pokemon.co.jp/');
    });
    robot.respond(/徹底/i, (msg) => {
        msg.send('ポケモン徹底攻略です!' + ' \n' + 'https://yakkun.com/');
    });
    robot.respond(/攻略/i, (msg) => {
        msg.send('ポケモン徹底攻略です!' + ' \n' + 'https://yakkun.com/');
    });
    robot.respond(/GO/i, (msg) => {
        msg.send('ポケモンGO公式サイトです!' + ' \n' + 'http://www.pokemongo.jp/');
    });
    robot.respond(/天国/i, (msg) => {
        msg.send('トレーナー天国です!' + ' \n' + 'https://pokemon-trainer.net/');
    });
    robot.respond(/ダメージ/i, (msg) => {
        msg.send('ダメージ計算機です!' + ' \n' + 'https://pokemon-trainer.net/sm/dmcs/');
    });
    robot.respond(/計算/i, (msg) => {
        msg.send('ダメージ計算機です!' + ' \n' + 'https://pokemon-trainer.net/sm/dmcs/');
    });
    robot.respond(/pgl/i, (msg) => {
        msg.send('ポケモングローバルリンクです!' + ' \n' + 'https://3ds.pokemon-gl.com/');
    });
    robot.respond(/ものおき/i, (msg) => {
        msg.send('ポケモンものおきです!' + ' \n' + 'http://pkc.client.jp/');
    });
    robot.respond(/ぽけりん/i, (msg) => {
        client.fetch('http://pokemon-matome.net/', function (err, $, res, body) {
            msg.send($('#indexbody > div:nth-child(1) > div > div.infobox_in_right > h2 > a').attr('href'));
            msg.send('http://pokemon-matome.net/');
            msg.send($('title').text());
        });
    });
    //botの使い方
    robot.respond(/ポケモン/i, (msg) => {
        const message = `こんにちは!! このbotができることを紹介します!!\n・1時間に一回、ポケモン公式ツイッターの最新ツイートをこのチャンネルに呟きます。\n・このbotにメンションをかけながら、特定の単語を入力すると、その単語にあったURLを教えてくれます。\n     特定の単語[公式,攻略,GO,天国,計算,pgl,ものおき] \n・メンションを付けてポケモンの名前を入力すると、そのポケモンの情報を教えてくれます。(カントー、イッシュ、アローラ図鑑の一部ポケモンのみ。全ポケモン実装予定)`
        msg.send(message);
    });
    //部屋に入ったユーザーへの案内
    robot.enter((msg) => {
        const username = msg.message.user.profile.display_name;
        const message = `こんにちは!!${username}さん!! ポケモン同好会へようこそ！ このbotができることを紹介します!!\n・1時間に一回、ポケモン公式ツイッターの最新ツイートをこのチャンネルに呟きます。\n・このbotにメンションをかけながら、特定の単語を入力すると、その単語にあったURLを教えてくれます。\n     特定の単語[公式,攻略,GO,天国,計算,pgl,ものおき] \n・メンションを付けてポケモンの名前を入力すると、そのポケモンの情報を教えてくれます。(カントー、イッシュ、アローラ図鑑の一部ポケモンのみ。全ポケモン実装予定)`
        msg.send(message);
    });
    robot.respond(/ランダム/i, (msg) => {
        var allPokemon = ["001フシギダネ", "002フシギソウ", "003フシギバナ", "004ヒトカゲ", "005リザード", "006リザードン", "007ゼニガメ", "008カメール", "009カメックス", "010キャタピー", "011トランセル", "012バタフリー", "013ビードル", "014コクーン", "015スピアー", "016ポッポ", "017ピジョン", "018ピジョット", "019コラッタ", "020ラッタ", "021オニスズメ", "022オニドリル", "023アーボ", "024アーボック", "025ピカチュウ", "026ライチュウ", "027サンド", "028サンドパン", "029ニドラン♀", "030ニドリーナ", "031ニドクイン", "032ニドラン♂", "033ニドリーノ", "034ニドキング", "035ピッピ", "036ピクシー", "037ロコン", "038キュウコン", "039プリン", "040プクリン", "041ズバット", "042ゴルバット", "043ナゾノクサ", "044クサイハナ", "045ラフレシア", "046パラス", "047パラセクト", "048コンパン", "049モルフォン", "050ディグダ", "", "051ダグトリオ", "052ニャース", "053ペルシアン", "054コダック", "055ゴルダック", "056マンキー", "057オコリザル", "058ガーディ", "059ウインディ", "060ニョロモ", "061ニョロゾ", "062ニョロボン", "063ケーシィ", "064ユンゲラー", "065フーディン", "066ワンリキー", "067ゴーリキー", "068カイリキー", "069マダツボミ", "070ウツドン", "071ウツボット", "072メノクラゲ", "073ドククラゲ", "074イシツブテ", "075ゴローン", "076ゴローニャ", "077ポニータ", "078ギャロップ", "079ヤドン", "080ヤドラン", "081コイル", "082レアコイル", "083カモネギ", "084ドードー", "085ドードリオ", "086パウワウ", "087ジュゴン", "088ベトベター", "089ベトベトン", "090シェルダー", "091パルシェン", "092ゴース", "093ゴースト", "094ゲンガー", "095イワーク", "096スリープ", "097スリーパー", "098クラブ", "099キングラー", "100ビリリダマ", "101マルマイン", "102タマタマ", "103ナッシー", "104カラカラ", "105ガラガラ", "106サワムラー", "107エビワラー", "108ベロリンガ", "109ドガース", "110マタドガス", "111サイホーン", "112サイドン", "113ラッキー", "114モンジャラ", "115ガルーラ", "116タッツー", "117シードラ", "118トサキント", "119アズマオウ", "120ヒトデマン", "121スターミー", "122バリヤード", "123ストライク", "124ルージュラ", "125エレブー", "126ブーバー", "127カイロス", "128ケンタロス", "129コイキング", "130ギャラドス", "131ラプラス", "132メタモン", "133イーブイ", "134シャワーズ", "135サンダース", "136ブースター", "137ポリゴン", "138オムナイト", "139オムスター", "140カブト", "141カブトプス", "142プテラ", "143カビゴン", "144フリーザー", "145サンダー", "146ファイヤー", "147ミニリュウ", "148ハクリュー", "149カイリュー", "150ミュウツー", "151ミュウ", "152チコリータ", "153ベイリーフ", "154メガニウム", "155ヒノアラシ", "156マグマラシ", "157バクフーン", "158ワニノコ", "159アリゲイツ", "160オーダイル", "161オタチ", "162オオタチ", "163ホーホー", "164ヨルノズク", "165レディバ", "166レディアン", "167イトマル", "168アリアドス", "169クロバット", "170チョンチー", "171ランターン", "172ピチュー", "173ピィ", "174ププリン", "175トゲピー", "176トゲチック", "177ネイティ", "178ネイティオ", "179メリープ", "180モココ", "181デンリュウ", "182キレイハナ", "183マリル", "184マリルリ", "185ウソッキー", "186ニョロトノ", "187ハネッコ", "188ポポッコ", "189ワタッコ", "190エイパム", "191ヒマナッツ", "192キマワリ", "193ヤンヤンマ", "194ウパー", "195ヌオー", "196エーフィ", "197ブラッキー", "198ヤミカラス", "199ヤドキング", "200ムウマ", "201アンノーン", "202ソーナンス", "203キリンリキ", "204クヌギダマ", "205フォレトス", "206ノコッチ", "207グライガー", "208ハガネール", "209ブルー", "210グランブル", "211ハリーセン", "212ハッサム", "213ツボツボ", "214ヘラクロス", "215ニューラ", "216ヒメグマ", "217リングマ", "218マグマッグ", "219マグカルゴ", "220ウリムー", "221イノムー", "222サニーゴ", "223テッポウオ", "224オクタン", "225デリバード", "226マンタイン", "227エアームド", "228デルビル", "229ヘルガー", "230キングドラ", "231ゴマゾウ", "232ドンファン", "233ポリゴン2", "234オドシシ", "235ドーブル", "236バルキー", "237カポエラー", "238ムチュール", "239エレキッド", "240ブビィ", "241ミルタンク", "242ハピナス", "243ライコウ", "244エンテイ", "245スイクン", "246ヨーギラス", "247サナギラス", "248バンギラス", "249ルギア", "250ホウオウ", "251セレビィ", "252キモリ", "253ジュプトル", "254ジュカイン", "255アチャモ", "256ワカシャモ", "257バシャーモ", "258ミズゴロウ", "259ヌマクロー", "260ラグラージ", "261ポチエナ", "262グラエナ", "263ジグザグマ", "264マッスグマ", "265ケムッソ", "266カラサリス", "267アゲハント", "268マユルド", "269ドクケイル", "270ハスボー", "271ハスブレロ", "272ルンパッパ", "273タネボー", "274コノハナ", "275ダーテング", "276スバメ", "277オオスバメ", "278キャモメ", "279ペリッパー", "280ラルトス", "281キルリア", "282サーナイト", "283アメタマ", "284アメモース", "285キノココ", "286キノガッサ", "287ナマケロ", "288ヤルキモノ", "289ケッキング", "290ツチニン", "291テッカニン", "292ヌケニン", "293ゴニョニョ", "294ドゴーム", "295バクオング", "296マクノシタ", "297ハリテヤマ", "298ルリリ", "299ノズパス", "300エネコ", "301エネコロロ", "302ヤミラミ", "303クチート", "304ココドラ", "305コドラ", "306ボスゴドラ", "307アサナン", "308チャーレム", "309ラクライ", "310ライボルト", "311プラスル", "312マイナン", "313バルビート", "314イルミーゼ", "315ロゼリア", "316ゴクリン", "317マルノーム", "318キバニア", "319サメハダー", "320ホエルコ", "321ホエルオー", "322ドンメル", "323バクーダ", "324コータス", "325バネブー", "326ブーピッグ", "327パッチール", "328ナックラー", "329ビブラーバ", "330フライゴン", "331サボネア", "332ノクタス", "333チルット", "334チルタリス", "335ザングース", "336ハブネーク", "337ルナトーン", "338ソルロック", "339ドジョッチ", "340ナマズン", "341ヘイガニ", "342シザリガー", "343ヤジロン", "344ネンドール", "345リリーラ", "346ユレイドル", "347アノプス", "348アーマルド", "349ヒンバス", "350ミロカロス", "351ポワルン", "352カクレオン", "353カゲボウズ", "354ジュペッタ", "355ヨマワル", "356サマヨール", "357トロピウス", "358チリーン", "359アブソル", "360ソーナノ", "361ユキワラシ", "362オニゴーリ", "363タマザラシ", "364トドグラー", "365トドゼルガ", "366パールル", "367ハンテール", "368サクラビス", "369ジーランス", "370ラブカス", "371タツベイ", "372コモルー", "373ボーマンダ", "374ダンバル", "375メタング", "376メタグロス", "377レジロック", "378レジアイス", "379レジスチル", "380ラティアス", "381ラティオス", "382カイオーガ", "383グラードン", "384レックウザ", "385ジラーチ", "386デオキシス", "387ナエトル", "388ハヤシガメ", "389ドダイトス", "390ヒコザル", "391モウカザル", "392ゴウカザル", "393ポッチャマ", "394ポッタイシ", "395エンペルト", "396ムックル", "397ムクバード", "398ムクホーク", "399ビッパ", "400ビーダル", "401コロボーシ", "402コロトック", "403コリンク", "404ルクシオ", "405レントラー", "406スボミー", "407ロズレイド", "408ズガイドス", "409ラムパルド", "410タテトプス", "411トリデプス", "412ミノムッチ", "413ミノマダム", "414ガーメイル", "415ミツハニー", "416ビークイン", "417パチリス", "418ブイゼル", "419フローゼル", "420チェリンボ", "421チェリム", "422カラナクシ", "423トリトドン", "424エテボース", "425フワンテ", "426フワライド", "427ミミロル", "428ミミロップ", "429ムウマージ", "430ドンカラス", "431ニャルマー", "432ブニャット", "433リーシャン", "434スカンプー", "435スカタンク", "436ドーミラー", "437ドータクン", "438ウソハチ", "439マネネ", "440ピンプク", "441ペラップ", "442ミカルゲ", "443フカマル", "444ガバイト", "445ガブリアス", "446ゴンベ", "447リオル", "448ルカリオ", "449ヒポポタス", "450カバルドン", "451スコルピ", "452ドラピオン", "453グレッグル", "454ドクロッグ", "455マスキッパ", "456ケイコウオ", "457ネオラント", "458タマンタ", "459ユキカブリ", "460ユキノオー", "461マニューラ", "462ジバコイル", "463ベロベルト", "464ドサイドン", "465モジャンボ", "466エレキブル", "467ブーバーン", "468トゲキッス", "469メガヤンマ", "470リーフィア", "471グレイシア", "472グライオン", "473マンムー", "474ポリゴンZ", "475エルレイド", "476ダイノーズ", "477ヨノワール", "478ユキメノコ", "479ロトム", "480ユクシー", "481エムリット", "482アグノム", "483ディアルガ", "484パルキア", "485ヒードラン", "486レジギガス", "487ギラティナ", "488クレセリア", "489フィオネ", "490マナフィ", "491ダークライ", "492シェイミ", "493アルセウス", "494ビクティニ", "495ツタージャ", "496ジャノビー", "497ジャローダ", "498ポカブ", "499チャオブー", "500エンブオー", "501ミジュマル", "502フタチマル", "503ダイケンキ", "504ミネズミ", "505ミルホッグ", "506ヨーテリー", "507ハーデリア", "508ムーランド", "509チョロネコ", "510レパルダス", "511ヤナップ", "512ヤナッキー", "513バオップ", "514バオッキー", "515ヒヤップ", "516ヒヤッキー", "517ムンナ", "518ムシャーナ", "519マメパト", "520ハトーボー", "521ケンホロウ", "522シママ", "523ゼブライカ", "524ダンゴロ", "525ガントル", "526ギガイアス", "527コロモリ", "528ココロモリ", "529モグリュー", "530ドリュウズ", "531タブンネ", "532ドッコラー", "533ドテッコツ", "534ローブシン", "535オタマロ", "536ガマガル", "537ガマゲロゲ", "538ナゲキ", "539ダゲキ", "540クルミル", "541クルマユ", "542ハハコモリ", "543フシデ", "544ホイーガ", "545ペンドラー", "546モンメン", "547エルフーン", "548チュリネ", "549ドレディア", "550バスラオ", "551メグロコ", "552ワルビル", "553ワルビアル", "554ダルマッカ", "555ヒヒダルマ", "556マラカッチ", "557イシズマイ", "558イワパレス", "559ズルッグ", "560ズルズキン", "561シンボラー", "562デスマス", "563デスカーン", "564プロトーガ", "565アバゴーラ", "566アーケン", "567アーケオス", "568ヤブクロン", "569ダストダス", "570ゾロア", "571ゾロアーク", "572チラーミィ", "573チラチーノ", "574ゴチム", "575ゴチミル", "576ゴチルゼル", "577ユニラン", "578ダブラン", "579ランクルス", "580コアルヒー", "581スワンナ", "582バニプッチ", "583バニリッチ", "584バイバニラ", "585シキジカ", "586メブキジカ", "587エモンガ", "588カブルモ", "589シュバルゴ", "590タマゲタケ", "591モロバレル", "592プルリル", "593ブルンゲル", "594ママンボウ", "595バチュル", "596デンチュラ", "597テッシード", "598ナットレイ", "599ギアル", "600ギギアル", "601ギギギアル", "602シビシラス", "603シビビール", "604シビルドン", "605リグレー", "606オーベム", "607ヒトモシ", "608ランプラー", "609シャンデラ", "610キバゴ", "611オノンド", "612オノノクス", "613クマシュン", "614ツンベアー", "615フリージオ", "616チョボマキ", "617アギルダー", "618マッギョ", "619コジョフー", "620コジョンド", "621クリムガン", "622ゴビット", "623ゴルーグ", "624コマタナ", "625キリキザン", "626バッフロン", "627ワシボン", "628ウォーグル", "629バルチャイ", "630バルジーナ", "631クイタラン", "632アイアント", "633モノズ", "634ジヘッド", "635サザンドラ", "636メラルバ", "637ウルガモス", "638コバルオン", "639テラキオン", "640ビリジオン", "641トルネロス", "642ボルトロス", "643レシラム", "644ゼクロム", "645ランドロス", "646キュレム", "647ケルディオ", "648メロエッタ", "649ゲノセクト", "650ハリマロン", "651ハリボーグ", "652ブリガロン", "653フォッコ", "654テールナー", "655マフォクシー", "656ケロマツ", "657ゲコガシラ", "658ゲッコウガ", "659ホルビー", "660ホルード", "661ヤヤコマ", "662ヒノヤコマ", "663ファイアロー", "664コフキムシ", "665コフーライ", "666ビビヨン", "667シシコ", "668カエンジシ", "669フラベベ", "670フラエッテ", "671フラージェス", "672メェークル", "673ゴーゴート", "674ヤンチャム", "675ゴロンダ", "676トリミアン", "677ニャスパー", "678ニャオニクス", "679ヒトツキ", "680ニダンギル", "681ギルガルド", "682シュシュプ", "683フレフワン", "684ペロッパフ", "685ペロリーム", "686マーイーカ", "687カラマネロ", "688カメテテ", "689ガメノデス", "690クズモー", "691ドラミドロ", "692ウデッポウ", "693ブロスター", "694エリキテル", "695エレザード", "696チゴラス", "697ガチゴラス", "698アマルス", "699アマルルガ", "700ニンフィア", "701ルチャブル", "702デデンネ", "703メレシー", "704ヌメラ", "705ヌメイル", "706ヌメルゴン", "707クレッフィ", "708ボクレー", "709オーロット", "710バケッチャ", "711パンプジン", "712カチコール", "713クレベース", "714オンバット", "715オンバーン", "716ゼルネアス", "717イベルタル", "718ジガルデ", "719ディアンシー", "720フーパ", "721ボルケニオン", "722モクロー", "723フクスロー", "724ジュナイパー", "725ニャビー", "726ニャヒート", "727ガオガエン", "728アシマリ", "729オシャマリ", "730アシレーヌ", "731ツツケラ", "732ケララッパ", "733ドデカバシ", "734ヤングース", "735デカグース", "736アゴジムシ", "737デンヂムシ", "738クワガノン", "739マケンカニ", "740ケケンカニ", "741オドリドリ", "742アブリー", "743アブリボン", "744イワンコ", "745ルガルガン", "746ヨワシ", "747ヒドイデ", "748ドヒドイデ", "749ドロバンコ", "750バンバドロ", "751シズクモ", "752オニシズクモ", "753カリキリ", "754ラランテス", "755ネマシュ", "756マシェード", "757ヤトウモリ", "758エンニュート", "759ヌイコグマ", "760キテルグマ", "761アマカジ", "762アママイコ", "763アマージョ", "764キュワワー", "765ヤレユータン", "766ナゲツケサル", "767コソクムシ", "768グソクムシャ", "769スナバァ", "770シロデスナ", "771ナマコブシ", "772タイプ：ヌル", "773シルヴァディ", "774メテノ", "775ネッコアラ", "776バクガメス", "777トゲデマル", "778ミミッキュ", "779ハギギシリ", "780ジジーロン", "781ダダリン", "782ジャラコ", "783ジャランゴ", "784ジャラランガ", "785カプ・コケコ", "786カプ・テテフ", "787カプ・ブルル", "788カプ・レヒレ", "789コスモッグ", "790コスモウム", "791ソルガレオ", "792ルナアーラ", "793ウツロイド", "794マッシブーン", "795フェローチェ", "796デンジュモク", "797テッカグヤ", "798カミツルギ", "799アクジキング", "800ネクロズマ", "801マギアナ", "802マーシャドー", "803ベベノム", "804アーゴヨン", "805ツンデツンデ", "806ズガドーン"];
        var abc = allPokemon[Math.floor(Math.random() * allPokemon.length)];
        msg.send(abc);
    })
};