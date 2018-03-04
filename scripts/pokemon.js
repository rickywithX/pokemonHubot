'use strict';

module.exports = (robot) => {
    robot.respond(/フシギダネ/i, (msg) => {
        msg.send('フシギダネのデータです！' + '\n' + '草/毒' + ' ' + '45-49-49-65-65-45-318' + ' ' + 'しんりょく/*ようりょくそ' + '\n' + 'https://yakkun.com/sm/zukan/n1');
    });
    robot.respond(/フシギソウ/i, (msg) => {
        msg.send('フシギソウのデータです！' + '\n' + '草/毒' + ' ' + '60-62-63-80-80-60-405' + ' ' + 'しんりょく/*ようりょくそ' + '\n' + 'https://yakkun.com/sm/zukan/n2');
    });
    robot.respond(/フシギバナ/i, (msg) => {
        msg.send('フシギバナのデータです！' + '\n' + '草/毒' + ' ' + '80-82-83-100-100-80-525' + 'しんりょく/*ようりょくそ' + '\n' + 'https://yakkun.com/sm/zukan/n3');
    });
    robot.respond(/メガフシギバナ/i, (msg) => {
        msg.send('メガフシギバナのデータです！' + '\n' + '草/毒' + ' ' + '80-100-123-122-120-80-625' + 'あついしぼう' + '\n' + 'https://yakkun.com/sm/zukan/n3')
    });
    robot.respond(/ヒトカゲ/i, (msg) => {
        msg.send('ヒトカゲのデータです！' + '\n' + '炎' + ' ' + '39-52-43-60-50-65' + ' ' + 'もうか/*サンパワー' + '\n' + 'https://yakkun.com/sm/zukan/n4');
    });
    robot.respond(/リザード/i, (msg) => {
        msg.send('リザードのデータです！' + '\n' + '炎' + ' ' + '58-64-58-80-65-80-405' + ' ' + 'もうか/*サンパワー' + '\n' + 'https://yakkun.com/sm/zukan/n5');
    });
    robot.respond(/リザードン/i, (msg) => {
        msg.send('リザードンのデータです！' + '\n' + '炎/飛' + ' ' + '78-84-78-109-85-100-534' + ' ' + 'もうか/*サンパワー' + '\n' + 'https://yakkun.com/sm/zukan/n6');
    });
    robot.respond(/メガリザードンX/i, (msg) => {
        msg.send('メガリザードンXのデータです！' + '\n' + '炎/竜' + ' ' + '78-130-111-130-85-100-634' + ' ' + 'かたいツメ' + '\n' + 'https://yakkun.com/sm/zukan/n6x');
    });
    robot.respond(/メガリザードンY/i, (msg) => {
        msg.send('メガリザードンYのデータです！' + '\n' + '炎/飛' + ' ' + '78-104-78-159-115-100-634' + ' ' + 'ひでり' + '\n' + 'https://yakkun.com/sm/zukan/n6y');
    });
    robot.respond(/ゼニガメ/i, (msg) => {
        msg.send('ゼニガメのデータです！' + '\n' + '水' + ' ' + '44-48-65-50-64-43-314' + ' ' + 'げきりゅう/*あめうけざら' + '\n' + 'https://yakkun.com/sm/zukan/n7');
    });
    robot.respond(/カメール/i, (msg) => {
        msg.send('カメールのデータです！' + '\n' + '水' + ' ' + '59-63-80-65-80-58-405' + ' ' + 'げきりゅう/*あめうけざら' + '\n' + 'https://yakkun.com/sm/zukan/n8');
    });
    robot.respond(/カメックス/i, (msg) => {
        msg.send('カメックスのデータです！' + '\n' + '水' + ' ' + '79-83-100-85-105-78-530' + ' ' + 'げきりゅう/*あめうけざら' + '\n' + 'https://yakkun.com/sm/zukan/n9');
    });
    robot.respond(/メガカメックス/i, (msg) => {
        msg.send('メガカメックスのデータです！' + '\n' + '水' + ' ' + '79-103-120-135-115-78-630' + ' ' + 'メガランチャー' + '\n' + 'https://yakkun.com/sm/zukan/n9m');
    });
    robot.respond(/キャタピー/i, (msg) => {
        msg.send('キャタピーのデータです！' + '\n' + '虫' + ' ' + '45-30-35-20-20-45-195' + ' ' + 'りんぷん/*にげあし' + '\n' + 'https://yakkun.com/sm/zukan/n10');
    });
    robot.respond(/トランセル/i, (msg) => {
        msg.send('トランセルのデータです！' + '\n' + '虫' + ' ' + '50-20-55-25-25-30-205' + ' ' + 'だっぴ' + '\n' + 'https://yakkun.com/sm/zukan/n11');
    });
    robot.respond(/バタフリー/i, (msg) => {
        msg.send('バタフリーのデータです！' + '\n' + '虫' + ' ' + '60-45-50-90-80-70-395' + ' ' + 'ふくがん/*いろめがね' + '\n' + 'https://yakkun.com/sm/zukan/n12');
    });
    robot.respond(/ビードル/i, (msg) => {
        msg.send('ビードルのデータです！' + '\n' + '虫' + ' ' + '40-35-30-20-20-50-195' + ' ' + 'りんぷん/*にげあし' + '\n' + 'https://yakkun.com/sm/zukan/n13');
    });
    robot.respond(/コクーン/i, (msg) => {
        msg.send('コクーンのデータです！' + '\n' + '虫' + ' ' + '45-25-50-25-25-35-205' + ' ' + 'だっぴ' + '\n' + 'https://yakkun.com/sm/zukan/n14');
    });
    robot.respond(/スピアー/i, (msg) => {
        msg.send('スピアーのデータです！' + '\n' + '虫/毒' + ' ' + '65-90-40-45-80-75-395' + ' ' + 'むしのしらせ/*スナイパー' + '\n' + 'https://yakkun.com/sm/zukan/n15');
    });
    robot.respond(/メガスピアー/i, (msg) => {
        msg.send('メガスピアーのデータです！' + '\n' + '虫/毒' + ' ' + '65-150-40-15-80-145-495' + ' ' + 'てきおうりょく' + '\n' + 'https://yakkun.com/sm/zukan/n15m');
    });
    robot.respond(/ポッポ/i, (msg) => {
        msg.send('ポッポのデータです！' + '\n' + '無/飛' + ' ' + '40-45-40-35-35-56-251' + ' ' + 'するどいめ/ちどりあし/*はとむね' + '\n' + 'https://yakkun.com/sm/zukan/n16');
    });
    robot.respond(/ピジョン/i, (msg) => {
        msg.send('ピジョンのデータです！' + '\n' + '無/飛' + ' ' + '63-60-55-50-50-71-349' + ' ' + 'するどいめ/ちどりあし/*はとむね' + '\n' + 'https://yakkun.com/sm/zukan/n17');
    });
    robot.respond(/ピジョット/i, (msg) => {
        msg.send('ピジョットのデータです！' + '\n' + '無/飛' + ' ' + '83-80-75-70-70-101-479' + ' ' + 'するどいめ/ちどりあし/*はとむね' + '\n' + 'https://yakkun.com/sm/zukan/n18');
    });
    robot.respond(/メガピジョット/i, (msg) => {
        msg.send('メガピジョットのデータです！' + '\n' + '無/飛' + ' ' + '83-80-80-135-80-121-579' + ' ' + 'ノーガード' + '\n' + 'https://yakkun.com/sm/zukan/n18m');
    });
    robot.respond(/コラッタ/i, (msg) => {
        msg.send('コラッタのデータです！' + '\n' + '無' + ' ' + '30-56-35-25-35-72-253' + ' ' + 'にげあし/こんじょう/*はりきり' + '\n' + 'https://yakkun.com/sm/zukan/n19');
    });
    robot.respond(/アローラコラッタ|Rコラッタ/i, (msg) => {
        msg.send('アローラコラッタのデータです！' + '\n' + '悪' + ' ' + '30-56-35-25-35-72-253' + ' ' + 'くいしんぼう/はりきり/*あついしぼう' + '\n' + 'https://yakkun.com/sm/zukan/n19a');
    });
    robot.respond(/ラッタ/i, (msg) => {
        msg.send('ラッタのデータです！' + '\n' + '無' + ' ' + '55-81-60-50-70-97-413' + ' ' + 'にげあし/こんじょう/*はりきり' + '\n' + 'https://yakkun.com/sm/zukan/n20');
    });
    robot.respond(/アローララッタ|Rラッタ/i, (msg) => {
        msg.send('アローララッタのデータです！' + '\n' + '悪' + ' ' + '75-71-70-40-80-77-413' + ' ' + 'くいしんぼう/はりきり/*あついしぼう' + '\n' + 'https://yakkun.com/sm/zukan/n20');
    });
    robot.respond(/オニスズメ/i, (msg) => {
        msg.send('オニスズメのデータです！' + '\n' + '無/飛' + ' ' + '40-60-30-31-31-70-262' + ' ' + 'するどいめ/*スナイパー' + '\n' + 'https://yakkun.com/sm/zukan/n21');
    });
    robot.respond(/オニドリル/i, (msg) => {
        msg.send('オニドリルのデータです！' + '\n' + '無/飛' + ' ' + '65-90-65-61-61-100-442' + ' ' + 'するどいめ/*スナイパー' + '\n' + 'https://yakkun.com/sm/zukan/n22');
    });
    robot.respond(/アーボ/i, (msg) => {
        msg.send('アーボのデータです！' + '\n' + '毒' + ' ' + '35-60-44-40-54-55-288' + ' ' + 'いかく/だっぴ/*きんちょうかん' + '\n' + 'https://yakkun.com/sm/zukan/n23');
    });
    robot.respond(/アーボック/i, (msg) => {
        msg.send('アーボックのデータです！' + '\n' + '毒' + ' ' + '60-95-69-65-79-80-448' + ' ' + 'いかく/だっぴ/*きんちょうかん' + '\n' + 'https://yakkun.com/sm/zukan/n24');
    });
    robot.respond(/ピカチュウ/i, (msg) => {
        msg.send('ピカチュウのデータです！' + '\n' + '電' + ' ' + '35-55-40-50-50-90-320' + ' ' + 'せいでんき/*ひらいしん' + '\n' + 'https://yakkun.com/sm/zukan/n25');
    });
    robot.respond(/ライチュウ/i, (msg) => {
        msg.send('ライチュウのデータです！' + '\n' + '電' + ' ' + '60-90-55-90-80-110-485' + ' ' + 'せいでんき/*ひらいしん' + '\n' + 'https://yakkun.com/sm/zukan/n26');
    });
    robot.respond(/アローラライチュウ|Rライチュウ/i, (msg) => {
        msg.send('アローラライチュウのデータです！' + '\n' + '電' + ' ' + '60-85-50-95-85-110-485' + ' ' + 'サーフテール' + '\n' + 'https://yakkun.com/sm/zukan/n26a');
    });
    robot.respond(/サンド/i, (msg) => {
        msg.send('サンドのデータです！' + '\n' + '地' + ' ' + '50-75-85-20-30-40-300' + ' ' + 'すながくれ/*すなかき' + '\n' + 'https://yakkun.com/sm/zukan/n27');
    });
    robot.respond(/アローラサンド|Rサンド/i, (msg) => {
        msg.send('アローラサンドのデータです！' + '\n' + '氷/鋼' + ' ' + '50-75-90-10-30-40-300' + ' ' + 'ゆきがくれ/*ゆきかき' + '\n' + 'https://yakkun.com/sm/zukan/n27a');
    });
    robot.respond(/サンドパン/i, (msg) => {
        msg.send('サンドパンのデータです！' + '\n' + '地' + ' ' + '75-100-110-45-55-65-450' + ' ' + 'すながくれ/*すなかき' + '\n' + 'https://yakkun.com/sm/zukan/n28');
    });
    robot.respond(/アローラサンドパン|Rサンドパン/i, (msg) => {
        msg.send('アローラサンドパンのデータです！' + '\n' + '地' + ' ' + '75-100-120-25-65-65-450' + ' ' + 'ゆきがくれ/*ゆきかき' + '\n' + 'https://yakkun.com/sm/zukan/n28a');
    });
    robot.respond(/ニドラン♀|ニドランメス/i, (msg) => {
        msg.send('ニドランのデータです！' + '\n' + '毒' + ' ' + '55-47-52-40-40-41-275' + ' ' + 'どくのトゲ/とうそうしん/*はりきり' + '\n' + 'https://yakkun.com/sm/zukan/n29');
    });
    robot.respond(/ニドリーナ/i, (msg) => {
        msg.send('二ドリーナのデータです！' + '\n' + '毒' + ' ' + '70-62-67-55-55-56-365' + ' ' + 'どくのトゲ/とうそうしん/*はりきり' + '\n' + 'https://yakkun.com/sm/zukan/n30');
    });
    robot.respond(/ニドクイン/i, (msg) => {
        msg.send('ニドクインのデータです！' + '\n' + '毒/地' + ' ' + '90-92-87-75-85-76-505' + ' ' + 'どくのトゲ/とうそうしん/*ちからずく' + '\n' + 'https://yakkun.com/sm/zukan/n31');
    });
    robot.respond(/ニドラン♂|ニドランオス/i, (msg) => {
        msg.send('ニドラン♂のデータです！' + '\n' + '毒' + ' ' + '46-57-40-40-40-50-273' + ' ' + 'どくのトゲ/とうそうしん/*はりきり' + '\n' + 'https://yakkun.com/sm/zukan/n32');
    });
    robot.respond(/ニドリーノ/i, (msg) => {
        msg.send('ニドリーノのデータです！' + '\n' + '毒' + ' ' + '61-72-57-55-55-65-365' + ' ' + 'どくのトゲ/とうそうしん/*はりきり' + '\n' + 'https://yakkun.com/sm/zukan/n33');
    });
    robot.respond(/ニドキング/i, (msg) => {
        msg.send('ニドキングのデータです！' + '\n' + '毒/地' + ' ' + '81-102-77-85-77-85-505' + ' ' + 'どくのトゲ/とうそうしん/*ちからずく' + '\n' + 'https://yakkun.com/sm/zukan/n34');
    });
    robot.respond(/ピッピ/i, (msg) => {
        msg.send('ピッピのデータです！' + '\n' + '妖' + ' ' + '75-45-48-60-65-35-323' + ' ' + 'メロメロボディ/マジックガード/*フレンドガード' + '\n' + 'https://yakkun.com/sm/zukan/n35');
    });
    robot.respond(/ピクシー/i, (msg) => {
        msg.send('ピクシーのデータです！' + '\n' + '妖' + ' ' + '95-70-73-95-90-60-483' + ' ' + 'メロメロボディ/マジックガード/*てんねん' + '\n' + 'https://yakkun.com/sm/zukan/n36');
    });
    robot.respond(/ロコン/i, (msg) => {
        msg.send('ロコンのデータです！' + '\n' + '炎' + ' ' + '38-41-40-50-65-65-299' + ' ' + 'もらいび/*ひでり' + '\n' + 'https://yakkun.com/sm/zukan/n37');
    });
    robot.respond(/アローラロコン|Rロコン/i, (msg) => {
        msg.send('アローラロコンのデータです！' + '\n' + '炎' + ' ' + '38-41-40-50-65-65-299' + ' ' + 'ゆきがくれ/*ゆきふらし' + '\n' + 'https://yakkun.com/sm/zukan/n37a');
    });
    robot.respond(/キュウコン/i, (msg) => {
        msg.send('キュウコンのデータです！' + '\n' + '炎' + ' ' + '73-76-75-81-100-100-505' + ' ' + 'もらいび/*ひでり' + '\n' + 'https://yakkun.com/sm/zukan/n38');
    });
    robot.respond(/アローラキュウコン|Rキュウコン/i, (msg) => {
        msg.send('キュウコンのデータです！' + '\n' + '炎' + ' ' + '73-67-75-81-100-109-505' + ' ' + 'ゆきがくれ/*ゆきふらし' + '\n' + 'https://yakkun.com/sm/zukan/n38a');
    });
    robot.respond(/プリン/i, (msg) => {
        msg.send('プリンのデータです！' + '\n' + '無/妖' + ' ' + '110-45-20-45-25-20-270' + ' ' + 'メロメロボディ/かちき/*フレンドガード' + '\n' + 'https://yakkun.com/sm/zukan/n39');
    });
    robot.respond(/プクリン/i, (msg) => {
        msg.send('プクリンのデータです！' + '\n' + '無/妖' + ' ' + '140-70-45-85-50-45-435' + ' ' + 'メロメロボディ/かちき/*おみとおし' + '\n' + 'https://yakkun.com/sm/zukan/n40');
    });
    robot.respond(/ズバット/i, (msg) => {
        msg.send('ズバットのデータです！' + '\n' + '毒/飛' + ' ' + '40-45-35-30-40-55-245' + ' ' + 'せいしんりょく/*すりぬけ' + '\n' + 'https://yakkun.com/sm/zukan/n41');
    });
    robot.respond(/ゴルバット/i, (msg) => {
        msg.send('ゴルバットのデータです！' + '\n' + '毒/飛' + ' ' + '75-80-70-65-75-90-455' + ' ' + 'せいしんりょく/*すりぬけ' + '\n' + 'https://yakkun.com/sm/zukan/n42');
    });
    robot.respond(/ナゾノクサ/i, (msg) => {
        msg.send('ナゾノクサのデータです！' + '\n' + '草/毒' + ' ' + '45-50-55-75-65-30-320' + ' ' + 'ようりょくそ/*にげあし' + '\n' + 'https://yakkun.com/sm/zukan/n43');
    });
    robot.respond(/クサイハナ/i, (msg) => {
        msg.send('クサイハナのデータです！' + '\n' + '草/毒' + ' ' + '60-65-70-85-75-40-395' + ' ' + 'ようりょくそ/*あくしゅう' + '\n' + 'https://yakkun.com/sm/zukan/n44');
    });
    robot.respond(/ラフレシア/i, (msg) => {
        msg.send('ラフレシアのデータです！' + '\n' + '草/毒' + ' ' + '75-80-85-110-90-50-490' + ' ' + 'ようりょくそ/*ほうし' + '\n' + 'https://yakkun.com/sm/zukan/n45');
    });
    robot.respond(/パラス/i, (msg) => {
        msg.send('パラスのデータです！' + '\n' + '虫/草' + ' ' + '35-70-55-45-55-25-285' + ' ' + 'ほうし/かんそうはだ/*しめりけ' + '\n' + 'https://yakkun.com/sm/zukan/n46');
    });
    robot.respond(/パラセクト/i, (msg) => {
        msg.send('パラセクトのデータです！' + '\n' + '虫/草' + ' ' + '60-95-80-60-80-30-405' + ' ' + 'ほうし/かんそうはだ/*しめりけ' + '\n' + 'https://yakkun.com/sm/zukan/n47');
    });
    robot.respond(/コンパン/i, (msg) => {
        msg.send('コンパンのデータです！' + '\n' + '虫/毒' + ' ' + '60-55-50-40-55-45-305' + ' ' + 'ふくがん/いろめがね/*にげあし' + '\n' + 'https://yakkun.com/sm/zukan/n48');
    });
    robot.respond(/モルフォン/i, (msg) => {
        msg.send('モルフォンのデータです！' + '\n' + '虫/毒' + ' ' + '70-65-60-90-75-90-450' + ' ' + 'ふくがん/いろめがね/*ミラクルスキン' + '\n' + 'https://yakkun.com/sm/zukan/n49');
    });
    robot.respond(/ディグダ/i, (msg) => {
        msg.send('ディグダのデータです！' + '\n' + '地' + ' ' + '10-55-25-35-45-95-265' + ' ' + 'すながくれ/ありじごく/*すなのちから' + '\n' + 'https://yakkun.com/sm/zukan/n50');
    });
    robot.respond(/アローラディグダ|Rディグダ/i, (msg) => {
        msg.send('アローラディグダのデータです！' + '\n' + '地/鋼' + ' ' + '10-55-30-35-45-90-265' + ' ' + 'すながくれ/カーリーヘア/*すなのちから' + '\n' + 'https://yakkun.com/sm/zukan/n50a');
    });
    robot.respond(/ダグトリオ/i, (msg) => {
        msg.send('ダグトリオのデータです！' + '\n' + '地' + ' ' + '35-100-50-50-70-120-425' + ' ' + 'すながくれ/ありじごく/*すなのちから' + '\n' + 'https://yakkun.com/sm/zukan/n51');
    });
    robot.respond(/アローラダグトリオ|Rダグトリオ/i, (msg) => {
        msg.send('アローラダグトリオのデータです！' + '\n' + '地/鋼' + ' ' + '35-100-60-50-70-110-425' + ' ' + 'すながくれ/カーリーヘア/*すなのちから' + '\n' + 'https://yakkun.com/sm/zukan/n51a');
    });
    robot.respond(/ニャース/i, (msg) => {
        msg.send('ニャースのデータです！' + '\n' + '無' + ' ' + '40-45-35-40-40-90-290' + ' ' + 'ものひろい/テクニシャン/*きんちょうかん' + '\n' + 'https://yakkun.com/sm/zukan/n52');
    });
    robot.respond(/アローラニャース|Rニャース/i, (msg) => {
        msg.send('アローラニャースのデータです！' + '\n' + '悪' + ' ' + '40-35-35-50-40-90-290' + ' ' + 'ものひろい/テクニシャン/*びびり' + '\n' + 'https://yakkun.com/sm/zukan/n52a');
    });
    robot.respond(/ペルシアン/i, (msg) => {
        msg.send('ペルシアンのデータです！' + '\n' + '無' + ' ' + '65-70-60-65-65-115-440' + ' ' + 'じゅうなん/テクニシャン/*きんちょうかん' + '\n' + 'https://yakkun.com/sm/zukan/n53');
    });
    robot.respond(/アローラペルシアン|Rペルシアン/i, (msg) => {
        msg.send('アローラペルシアンのデータです！' + '\n' + '悪' + ' ' + '65-60-60-75-65-115-440' + ' ' + 'ファーコート/テクニシャン/*きんちょうかん' + '\n' + 'https://yakkun.com/sm/zukan/n53');
    });
    robot.respond(/コダック/i, (msg) => {
        msg.send('コダックのデータです！' + '\n' + '水' + ' ' + '50-52-48-65-50-55-320' + ' ' + 'しめりけ/ノーてんき/*すいすい' + '\n' + 'https://yakkun.com/sm/zukan/n54');
    });
    robot.respond(/ゴルダック/i, (msg) => {
        msg.send('ゴルダックのデータです！' + '\n' + '水' + ' ' + '80-82-78-95-80-85-500' + ' ' + 'しめりけ/ノーてんき/*すいすい' + '\n' + 'https://yakkun.com/sm/zukan/n55');
    });
    robot.respond(/マンキー/i, (msg) => {
        msg.send('マンキーのデータです！' + '\n' + '闘' + ' ' + '40-80-35-35-45-70-305' + ' ' + 'やるき/いかりのつぼ/*まけんき' + '\n' + 'https://yakkun.com/sm/zukan/n56');
    });
    robot.respond(/オコリザル/i, (msg) => {
        msg.send('オコリザルのデータです！' + '\n' + '闘' + ' ' + '65-105-60-60-70-95-455' + ' ' + 'やるき/いかりのつぼ/*まけんき' + '\n' + 'https://yakkun.com/sm/zukan/n57');
    });
    robot.respond(/ガーディ/i, (msg) => {
        msg.send('ガーディのデータです！' + '\n' + '炎' + ' ' + '50-70-45-70-50-60-350' + ' ' + 'いかく/もらいび/*せいぎのこころ' + '\n' + 'https://yakkun.com/sm/zukan/n58');
    });
    robot.respond(/ウインディ/i, (msg) => {
        msg.send('ウインディのデータです！' + '\n' + '炎' + ' ' + '90-110-80-100-85-95-555' + ' ' + 'いかく/もらいび/*せいぎのこころ' + '\n' + 'https://yakkun.com/sm/zukan/n59');
    });
    robot.respond(/ニョロモ/i, (msg) => {
        msg.send('ニョロモのデータです！' + '\n' + '水' + ' ' + '40-50-40-40-40-90-300' + ' ' + 'ちょすい/しめりけ/*すいすい' + '\n' + 'https://yakkun.com/sm/zukan/n60');
    });
    robot.respond(/ニョロゾ/i, (msg) => {
        msg.send('ニョロゾのデータです！' + '\n' + '水' + ' ' + '65-65-65-50-50-90-385' + ' ' + 'ちょすい/しめりけ/*すいすい' + '\n' + 'https://yakkun.com/sm/zukan/n61');
    });
    robot.respond(/ニョロボン/i, (msg) => {
        msg.send('ニョロボンのデータです！' + '\n' + '水/闘' + ' ' + '90-95-95-70-90-70-510' + ' ' + 'ちょすい/しめりけ/*すいすい' + '\n' + 'https://yakkun.com/sm/zukan/n62');
    });
    robot.respond(/ケーシィ/i, (msg) => {
        msg.send('ケーシィのデータです！' + '\n' + '超' + ' ' + '25-20-15-105-55-90-310' + ' ' + 'シンクロ/せいしんりょく/*マジックガード' + '\n' + 'https://yakkun.com/sm/zukan/n63');
    });
    robot.respond(/ユンゲラー/i, (msg) => {
        msg.send('ユンゲラーのデータです！' + '\n' + '超' + ' ' + '40-35-30-120-70-105-400' + ' ' + 'シンクロ/せいしんりょく/*マジックガード' + '\n' + 'https://yakkun.com/sm/zukan/n64');
    });
    robot.respond(/フーディン/i, (msg) => {
        msg.send('フーディンのデータです！' + '\n' + '超' + ' ' + '55-50-45-135-95-120-500' + ' ' + 'シンクロ/せいしんりょく/*マジックガード' + '\n' + 'https://yakkun.com/sm/zukan/n65');
    });
    robot.respond(/メガフーディン/i, (msg) => {
        msg.send('フーディンのデータです！' + '\n' + '超' + ' ' + '55-50-65-175-105-150-500' + ' ' + 'トレース' + '\n' + 'https://yakkun.com/sm/zukan/n65m');
    });
    robot.respond(/ワンリキー/i, (msg) => {
        msg.send('ワンリキーのデータです！' + '\n' + '闘' + ' ' + '70-80-50-35-35-35-305' + ' ' + 'こんじょう/ノーガード/*ふくつのこころ' + '\n' + 'https://yakkun.com/sm/zukan/n66');
    });
    robot.respond(/ゴーリキー|剛力/i, (msg) => {
        msg.send('ゴーリキーのデータです！' + '\n' + '闘' + ' ' + '80-100-70-50-60-45-405' + ' ' + 'こんじょう/ノーガード/*ふくつのこころ' + '\n' + 'https://yakkun.com/sm/zukan/n66');
    });
    robot.respond(/カイリキー/i, (msg) => {
        msg.send('カイリキーのデータです！' + '\n' + '闘' + ' ' + '90-130-80-65-85-55-505' + ' ' + 'こんじょう/ノーガード/*ふくつのこころ' + '\n' + 'https://yakkun.com/sm/zukan/n66');
    });





    //籔内さんのやつー







    robot.respond(/ズガドーン/i, (msg) => {
        msg.send('ヅガドーンのデータです！' + '\n' + '炎/霊' + ' ' + '53-127-53-151-79-107-570' + ' ' + 'ビーストブースト ' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n806');
    });
    robot.respond(/ツンデツンデ/i, (msg) => {
        msg.send('ツンデツンデのデータです！' + '\n' + '岩/鋼' + ' ' + '61-131-211-53-101-13-570' + ' ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n805');
    });
    robot.respond(/アーゴヨン/i, (msg) => {
        msg.send('アーゴヨンのデータです！' + '\n' + '毒/竜' + ' ' + '73-73-73-127-73-121' + ' ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n804');
    });

    robot.respond(/ベベノム/i, (msg) => {
        msg.send('ベベノムのデータです！' + '\n' + '毒' + ' ' + '67-73-67-73-67-73-420' + ' ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n803');
    });

    robot.respond(/マーシャドー/i, (msg) => {
        msg.send('マーシャドーのデータです！' + '\n' + '闘/霊' + ' ' + '90-125-80-90-90-125-600' + '  ' + 'テクニシャン' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n802')
    });

    robot.respond(/マギアナ/i, (msg) => {
        msg.send('マギアナのデータです！' + '\n' + '鋼 / 妖' + ' ' + '80 - 95 - 115 - 130 - 115 - 65 - 600' + '  ' + 'ソウルハート' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n801')
    });

    robot.respond(/ウルトラネクロズマ/i, (msg) => {
        msg.send('ウルトラネクロズマのデータです！' + '\n' + '超 / 竜' + '  ' + '97 - 167 - 97 - 167 - 97 - 129 - 754' + '  ' + 'ブレインフォース' + '' + 'https://yakkun.com/sm/zukan/n800u')
    });

    robot.respond(/月食ネクロズマ/i, (msg) => {
        msg.send('月食ネクロズマ(あかつきのつばさの姿)のデータです！' + '\n' + '超 / 霊' + '  ' + '97 - 113 - 109 - 157 - 127 - 77 - 680' + '  ' + 'プリズムアーマー' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n800m')
    });

    robot.respond(/日食ネクロズマ/i, (msg) => {
        msg.send('日食ネクロズマ(たそがれのたてがみの姿)のデータです！' + '\n' + '超 / 鋼' + '  ' + '97 - 157 - 127 - 113 - 109 - 77 - 680' + '  ' + 'プリズムアーマー' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n800s')
    });

    robot.respond(/ネクロズマ/i, (msg) => {
        msg.send('ネクロズマのデータです！' + '\n' + '超' + '  ' + '97 - 107 - 101 - 127 - 89 - 79 - 600' + '  ' + 'プリズムアーマー' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n800')
    });


    robot.respond(/アウクジキング/i, (msg) => {
        msg.send('アクジキングのデータです！' + '\n' + '悪 / 竜' + '  ' + '223 - 101 - 53 - 97 - 53 - 43 - 570' + '  ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n799')
    });

    robot.respond(/カミツルギ/i, (msg) => {
        msg.send('カミツルギのデータです！' + '\n' + '草 / 鋼' + '  ' + '59 - 181 - 131 - 59 - 31 - 109 - 570' + '  ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n798')
    });

    robot.respond(/テッカグヤ/i, (msg) => {
        msg.send('テッカグヤのデータです！' + '\n' + '鋼 / 飛' + '  ' + '97 - 101 - 103 - 107 - 101 - 61 - 570' + '  ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n797')
    });


    robot.respond(/デンジュモク/i, (msg) => {
        msg.send('デンジュモクのデータです！' + '\n' + '電' + '  ' + '83 - 89 - 71 - 173 - 71 - 83 - 570' + '  ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n796')
    });

    robot.respond(/フェローチェ/i, (msg) => {
        msg.send('フェローチェのデータです！' + '\n' + '虫 / 闘' + '  ' + '71 - 137 - 37 - 137 - 37 - 151 - 570' + '  ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n795')
    });

    robot.respond(/マッシブーン/i, (msg) => {
        msg.send('マッシブーンのデータです！' + '\n' + '虫 / 闘' + '  ' + '107 - 139 - 139 - 53 - 53 - 79 - 570' + '  ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n794')
    });

    robot.respond(/ウツロイド/i, (msg) => {
        msg.send('ウツロイドのデータです！' + '\n' + '岩 / 毒' + '  ' + '109 - 53 - 47 - 127 - 131 - 103 - 570' + '  ' + 'ビーストブースト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n793')
    });

    robot.respond(/ルナアーラ/i, (msg) => {
        msg.send('ルナアーラのデータです！' + '\n' + '超 / 霊' + '  ' + '137 - 113 - 89 - 137 - 107 - 97 - 680' + '  ' + 'フォントムガード' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n792')
    });

    robot.respond(/ソルガレオ/i, (msg) => {
        msg.send('ソルガレオのデータです！' + '\n' + '超 / 鋼' + '  ' + '137 - 137 - 107 - 113 - 89 - 97 - 680' + '  ' + 'メタルプロテクト' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n791')
    });

    robot.respond(/コスモウム/i, (msg) => {
        msg.send('コスモウムのデータです！' + '\n ' + '超' + '  ' + '43 - 29 - 131 - 29 - 131 - 37 - 400' + '  ' + 'がんじょう' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n790')
    });

    robot.respond(/コスモッグ/i, (msg) => {
        msg.send('コスモッグのデータです！' + '' + '超' + ' ' + '43 - 29 - 31 - 29 - 31 - 37 - 200' + '  ' + 'てんねん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n789');
    });

    robot.respond(/カプ・レヒレ/i, (msg) => {
        msg.send('カプ・レヒレのデータです！' + '\n' + '水/妖' + ' ' + '70-75-115-95-130-85-570' + '  ' + 'ミストメーカー/*テレパシー' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n788');
    });

    robot.respond(/カプ・ブルル/i, (msg) => {
        msg.send('カプ・ブルルのデータです！' + '' + '草 / 妖' + '  ' + '70 - 130 - 115 - 85 - 95 - 75 - 570' + '  ' + 'グラスメーカー/*テレパシー' + '' + 'https://yakkun.com/sm/zukan/n787')
    });

    robot.respond(/カプ・テテフ/i, (msg) => {
        msg.send('カプ・テテフのデータです！' + '\n' + '超/妖' + '  ' + '70-85-75-130-115-95-570' + '  ' + 'グラスメーカー/*テレパシー' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n786')
    });

    robot.respond(/カプ・コケコ/i, (msg) => {
        msg.send('カプ・コケコのデータです！' + '\n' + '電 / 妖' + '  ' + '70 - 115 - 85 - 95 - 75 - 130 - 570' + '  ' + 'エレキメーカー/*テレパシー' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n785')
    });

    robot.respond(/ジャラランガ/i, (msg) => {
        msg.send('ジャラランガのデータです！' + '\n' + '闘/竜' + '  ' + '75-110-125-100-105-85-600' + '  ' + 'ぼうだん/ぼうおん/*ぼうじん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n784')
    });

    robot.respond(/ジャラコ/i, (msg) => {
        msg.send('ジャラコのデータです！' + '\n' + '闘/竜' + '  ' + '55-75-90-65-70-65-420' + '  ' + 'ぼうだん/ぼうおん/*ぼうじん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n783')
    });

    robot.respond(/ジャラコ/i, (msg) => {
        msg.send('ジャラコのデータです！' + '\n' + '超/妖' + '  ' + '45-55-65-45-45-45-300' + '  ' + 'ぼうだん/ぼうおん/*ぼうじん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n782')
    });

    robot.respond(/ダダリン/i, (msg) => {
        msg.send('ダダリンのデータです！' + '\n' + '霊/草' + '  ' + '70-131-100-86-90-40-517' + '  ' + 'はがねつかい' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n781')
    });

    robot.respond(/ジジーロン/i, (msg) => {
        msg.send('ジジーロンのデータです！' + '\n' + 'ノ/竜' + '  ' + '78-60-85-135-91-36-485' + '  ' + 'ぎゃくじょう/そうしょく/*ノーてんき' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n780')
    });


    robot.respond(/ハギギシリ/i, (msg) => {
        msg.send('ハギギシリのデータです！' + '\n' + '水/超' + '  ' + '68-105-70-70-70-92-475' + '  ' + 'ビビットボディ/がんじょうあご/*ミラクルスキン' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n779')
    });

    robot.respond(/ミミッキュ/i, (msg) => {
        msg.send('ミミッキュのデータです！' + '\n' + '霊/妖' + '  ' + '55-90-80-50-105-96-476' + '  ' + 'ばけのかわ' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n778')
    });

    robot.respond(/トゲデマル/i, (msg) => {
        msg.send('トゲデマルのデータです！' + '\n' + '電/鋼' + '  ' + '65-98-63-40-73-96-435' + '  ' + 'てつのトゲ/ひらいしん/*がんじょう' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n777')
    });

    robot.respond(/バグガメス/i, (msg) => {
        msg.send('バグガメスのデータです！' + '\n' + '炎/竜' + '  ' + '60-78-135-91-85-36-485' + '  ' + 'シェルアーマー' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n776')
    });

    robot.respond(/ネッコアラ/i, (msg) => {
        msg.send('ネッコアラのデータです！' + '\n' + 'ノ' + '  ' + '65-115-65-75-95-65-480' + '  ' + 'ぜったいねむり' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n775')
    });

    robot.respond(/メテノ/i, (msg) => {
        msg.send('メテノ(コア)のデータです！' + '\n' + '岩/飛' + '  ' + '60-100-60-100-60-120-500' + '  ' + 'リミットシールド' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n774f')
    });

    robot.respond(/メテノ/i, (msg) => {
        msg.send('メテノ(りゅうせいの姿)のデータです！' + '\n' + '岩/飛' + '  ' + '60-60-100-60-100-60-440' + '  ' + 'リミットシールド' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n774')
    });

    robot.respond(/シルヴァディ/i, (msg) => {
        msg.send('シルヴァディのデータです！' + '\n' + 'ノ' + '  ' + '95-95-95-95-95-95-570' + '  ' + 'ARシステム' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n773')
    });

    robot.respond(/タイプ：ヌル/i, (msg) => {
        msg.send('タイプ：ヌルのデータです！' + '\n' + 'ノ' + '  ' + '95-95-95-95-95-59-534' + '  ' + 'カブトアーマー' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n772')
    });

    robot.respond(/ナマコブシ/i, (msg) => {
        msg.send('ナマコブシのデータです！' + '\n' + '水' + '  ' + '55-60-130-30-130-5-410' + '  ' + 'とびだすなかみ/*てんねん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n771')
    });

    robot.respond(/シロデスナ/i, (msg) => {
        msg.send('シロデスナのデータです！' + '\n' + '霊/地' + '  ' + '85-75-110-100-75-35-480' + '  ' + 'みずがため/*すながくれ' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n770')
    });

    robot.respond(/スナバァ/i, (msg) => {
        msg.send('スナバァのデータです！' + '\n' + '霊/地' + '  ' + '55-55-80-70-45-15-320' + '  ' + 'みずがため/*すながくれ' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n769')
    });

    robot.respond(/グソクムシャ/i, (msg) => {
        msg.send('グソクムシャのデータです！' + '\n' + '虫/水' + '  ' + '75-125-140-60-90-40-530' + '  ' + 'ききかいひ' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n768')
    });

    robot.respond(/コソクムシ/i, (msg) => {
        msg.send('コソクムシのデータです！' + '\n' + '虫/水' + '  ' + '25-35-40-20-30-80-230' + '  ' + 'ききかいひ' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n767')
    });

    robot.respond(/ナゲツケサル/i, (msg) => {
        msg.send('ナゲツケサルのデータです！' + '\n' + '闘' + '  ' + '100-120-90-40-60-80-490' + '  ' + 'レシーバー/*まけんき' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n766')
    });

    robot.respond(/ヤレユータン/i, (msg) => {
        msg.send('ヤレユータンのデータです！' + '\n' + 'ノ/超' + '  ' + '90-60-80-90-110-60-490' + '  ' + 'せいしんりょく/テレパシー/*きょうせい' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n765')
    });

    robot.respond(/キュワワー/i, (msg) => {
        msg.send('キュワワーのデータです！' + '\n' + '妖' + '  ' + '51-52-90-82-110-100-485' + '  ' + 'フラワーベール/ヒーリングシフト/*しぜんかいふく' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n764')
    });

    robot.respond(/アマージョ/i, (msg) => {
        msg.send('アマージョのデータです！' + '\n' + '草' + '  ' + '72-120-98-50-98-72-510' + '  ' + 'リーフガード/じょうおうのいげん/*スイートベール' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n763')
    });

    robot.respond(/アママイコ/i, (msg) => {
        msg.send('アママイコのデータです！' + '\n' + '草' + '  ' + '52-40-48-40-48-62-290' + '  ' + 'リーフガード/どんかん/*スイートベール' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n762')
    });


    robot.respond(/アマカジ/i, (msg) => {
        msg.send('アマカジのデータです！' + '\n' + '草' + '  ' + '42-30-38-30-38-32-210' + '  ' + 'リーフガード/どんかん/*スイートベール' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n761')
    });


    robot.respond(/キテルグマ/i, (msg) => {
        msg.send('キテルグマのデータです！' + '\n' + 'ノ/闘' + '  ' + '120-125-80-55-60-60-500' + '  ' + 'もふもふ/ぶきよう/*きんちょうかん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n760')
    });

    robot.respond(/ヌイコグマ/i, (msg) => {
        msg.send('ヌイコグマのデータです！' + '\n' + 'ノ/闘' + '  ' + '70-75-50-45-50-50-340' + '  ' + 'もふもふ/ぶきよう/*メロメロボディ' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n759')
    });


    robot.respond(/エンニュート/i, (msg) => {
        msg.send('エンニュートのデータです！' + '\n' + '毒/炎' + '  ' + '68-64-60-111-60-117' + '  ' + 'ふしょく/*どんかん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n758')
    });


    robot.respond(/ヤトウモリ/i, (msg) => {
        msg.send('ヤトウモリのデータです！' + '\n' + '毒/炎' + '  ' + '48-44-40-71-40-77-320' + '  ' + 'ふしょく/*どんかん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n757')
    });


    robot.respond(/マシェード/i, (msg) => {
        msg.send('マシェードのデータです！' + '\n' + '草/妖' + '  ' + '60-45-80-90-100-30-405' + '  ' + 'はっこう/ほうし/*あまうけざら' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n756')
    });

    robot.respond(/ネマシュ/i, (msg) => {
        msg.send('ネマシュのデータです！' + '\n' + '草/妖' + '  ' + '40-35-55-65-75-15-285' + '  ' + 'はっこう/ほうし/*あまうけざら' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n755')
    });

    robot.respond(/ラランテス/i, (msg) => {
        msg.send('ラランテスのデータです！' + '\n' + '草/妖' + '  ' + '70-105-90-80-90-45-480' + '  ' + 'リーフガード/*あまのじゃく' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n754')
    });

    robot.respond(/カリキリ/i, (msg) => {
        msg.send('カリキリのデータです！' + '\n' + '草' + '  ' + '40-55-35-50-35-35-250' + '  ' + 'リーフガード/あまのじゃく' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n753')
    });

    robot.respond(/オニシズクモ/i, (msg) => {
        msg.send('オニシズクモのデータです！' + '\n' + '水/虫' + '  ' + '68-70-92-50-132-42-454' + '  ' + 'すいほう/*ちょすい' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n752')
    });

    robot.respond(/シズクモ/i, (msg) => {
        msg.send('シズクモのデータです！' + '\n' + '水/虫' + '  ' + '38-40-52-40-72-27-269' + '  ' + 'すいほう/*ちょすい' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n751')
    });

    robot.respond(/バンバドロ/i, (msg) => {
        msg.send('バンバドロのデータです！' + '\n' + '地' + '  ' + '100-125-100-55-85-35-500' + '  ' + 'マイペース/じゅきゅうりょく/*せいしんりょく' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n750')
    });

    robot.respond(/ドロバンコ/i, (msg) => {
        msg.send('ドロバンコのデータです！' + '\n' + '地' + '  ' + '70-100-70-45-55-45-385' + '  ' + 'マイペース/じきゅうりょく/*せいしんりょく' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n749')
    });

    robot.respond(/ドヒドイデ/i, (msg) => {
        msg.send('ドヒドイデのデータです！' + '\n' + '水/毒' + '  ' + '50-63-152-53-142-35-495' + '  ' + 'ひとでなし/じゅうなん/*さいせいりょく' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n748')
    });

    robot.respond(/ヒドイデ/i, (msg) => {
        msg.send('ヒドイデのデータです！' + '\n' + '水/毒' + '  ' + '50-53-62-43-52-45-305' + '  ' + 'ひとでなし/じゅうなん/*さいせいりょく' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n747')
    });

    robot.respond(/ヨワシ/i, (msg) => {
        msg.send('ヨワシ(むれたの姿)のデータです！' + '\n' + '水' + '  ' + '45-140-130-140-135-30-620' + '  ' + 'ぎょぐん' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n746f')
    });

    robot.respond(/ヨワシ/i, (msg) => {
        msg.send('ヨワシ(たんどくの姿)のデータです！' + '\n' + '水' + '  ' + '45-20-20-25-25-40-175' + '  ' + 'ひとでなし/じゅうなん/*さいせいりょく' + ' ' + '\n' + 'https://yakkun.com/sm/zukan/n746')
    });

    robot.respond(/ルガルガン/i, (msg) => {
        msg.send('ルガルガン(たそがれの姿)のデータです！' + '\n' + '岩' + '  ' + '75-117-65-55-65-110-487' + '  ' + 'かたいツメ' + '\n' + 'https://yakkun.com/sm/zukan/n745d')
    });

    robot.respond(/ルガルガン/i, (msg) => {
        msg.send('ルガルガン(まよなかの姿)のデータです！' + '' + '岩' + '  ' + '85-115-75-55-75-82-487' + '  ' + 'するどいめ/やるき/*ノーガード' + '' + 'https://yakkun.com/sm/zukan/n745f')
    });

    robot.respond(/ルガルガン/i, (msg) => {
        msg.send('ルガルガン(まひるの姿)のデータです！' + '\n' + '岩' + '  ' + '75-115-65-55-65-112-487' + '  ' + 'するどいめ/すなかき/*ふくつのこころ' + '\n' + 'https://yakkun.com/sm/zukan/n745')
    });

    robot.respond(/イワンコ/i, (msg) => {
        msg.send('イワンコのデータです！' + '\n' + '岩' + '  ' + '45-65-40-30-40-60-280' + '  ' + 'するどいめ/やるき/*ふくつのこころ' + '\n' + 'https://yakkun.com/sm/zukan/n744')
    });

    robot.respond(/アブリボン/i, (msg) => {
        msg.send('アブリボンのデータです！' + '\n' + '虫/妖' + '  ' + '60-55-60-95-70-124-464' + '  ' + 'みつあつめ/りんぷん/*スイートベール' + '\n' + 'https://yakkun.com/sm/zukan/n743')
    });

    robot.respond(/アブリー/i, (msg) => {
        msg.send('アブリーのデータです！' + '\n' + '虫/妖' + '  ' + '40-45-40-55-40-84-304' + '  ' + 'みつあつめ/りんぷん/*スイートベール' + '\n' + 'https://yakkun.com/sm/zukan/n742')
    });

    robot.respond(/オドリドリ/i, (msg) => {
        msg.send('オドリドリ(まいまいの姿)のデータです！' + '\n' + '霊/飛' + '  ' + '75-70-70-98-70-93-476' + '  ' + 'おどりこ' + '\n' + 'https://yakkun.com/sm/zukan/n741m')
    });

    robot.respond(/オドリドリ/i, (msg) => {
        msg.send('オドリドリ(ふらふらの姿)のデータです！' + '\n' + '超/飛' + '  ' + '75-70-70-98-70-93-476' + '  ' + 'おどりこ' + '\n' + 'https://yakkun.com/sm/zukan/n741f')
    });

    robot.respond(/オドリドリ/i, (msg) => {
        msg.send('オドリドリ(ぱちぱちの姿)のデータです！' + '\n' + '電/飛' + '  ' + '75-70-70-98-70-93-476' + '  ' + 'おどりこ' + '\n' + 'https://yakkun.com/sm/zukan/n741p')
    });

    robot.respond(/オドリドリ/i, (msg) => {
        msg.send('オドリドリ(めらめらの姿)のデータです！' + '\n' + '炎/飛' + '  ' + '75-70-70-98-70-93-476' + '  ' + 'おどりこ' + '\n' + 'https://yakkun.com/sm/zukan/n741')
    });

    robot.respond(/ケケンカニ/i, (msg) => {
        msg.send('ケケンカニのデータです！' + '\n' + '闘/氷' + '  ' + '97-132-77-62-67-43-478' + '  ' + 'かいりきバサミ/てつのこぶし/*いかりのつぼ' + '\n' + 'https://yakkun.com/sm/zukan/n740')
    });

    robot.respond(/マケンカニ/i, (msg) => {
        msg.send('マケンカニのデータです！' + '\n' + '闘' + '  ' + '47-82-57-42-47-63-338' + '  ' + 'かいりきバサミ/てつのこぶし/*いかりのつぼ' + '\n' + 'https://yakkun.com/sm/zukan/n739')
    });

    robot.respond(/クワガノン/i, (msg) => {
        msg.send('クワガノンのデータです！' + '\n' + '虫/電' + '  ' + '77-70-90-145-75-43-500' + '  ' + 'ふゆう' + '\n' + 'https://yakkun.com/sm/zukan/n739')
    });

    robot.respond(/デンヂムシ/i, (msg) => {
        msg.send('デンヂムシのデータです！' + '\n' + '虫/電' + '  ' + '57-82-95-55-75-36-400' + '  ' + 'バッテリー' + '\n' + 'https://yakkun.com/sm/zukan/n737')
    });

    robot.respond(/アゴジムシ/i, (msg) => {
        msg.send('アゴジムシのデータです！' + '\n' + '虫' + '  ' + '47-62-45-55-45-46-300' + '  ' + 'むしのしらせ' + '\n' + 'https://yakkun.com/sm/zukan/n736')
    });

    robot.respond(/デカグース/i, (msg) => {
        msg.send('デカグースのデータです！' + '\n' + 'ノ' + '  ' + '88-110-60-55-60-45-418' + '  ' + 'はりこみ/がんじょうあご/*てきおうりょく' + '\n' + 'https://yakkun.com/sm/zukan/n735')
    });

    robot.respond(/ヤングース/i, (msg) => {
        msg.send('ヤングースのデータです！' + '\n' + 'ノ' + '  ' + '48-70-30-30-30-45-253' + '  ' + 'はりこみ/がんじょうあご/*てきおうりょく' + '\n' + 'https://yakkun.com/sm/zukan/n734')
    });

    robot.respond(/ドデカバシ/i, (msg) => {
        msg.send('ドデカバシのデータです！' + '\n' + 'ノ/飛' + '  ' + '80-120-75-75-75-60-485' + '  ' + 'するどいめ/スキルリンク/*ちからずく' + '\n' + 'https://yakkun.com/sm/zukan/n733')
    });
    robot.respond(/ケララッパ/i, (msg) => {
        msg.send('ケララッパのデータです！' + '\n' + 'ノ/飛' + '  ' + '55-85-50-40-50-75-355' + '  ' + 'するどいめ/スキルリンク/*ものひろい' + '\n' + 'https://yakkun.com/sm/zukan/n732')
    });

    robot.respond(/ツツケラ/i, (msg) => {
        msg.send('ツツケラのデータです！' + '\n' + 'ノ/飛' + '  ' + '35-75-30-30-30-65-265' + '  ' + 'するどいめ/スキルリンク/*ものひろい' + '\n' + 'https://yakkun.com/sm/zukan/n731')
    });

    robot.respond(/アシレーヌ/i, (msg) => {
        msg.send('アシレーヌのデータです！' + '\n' + '水/妖' + '  ' + '80-74-74-126-116-60-530' + '  ' + 'げきりゅう/*うるおいボイス' + '\n' + 'https://yakkun.com/sm/zukan/n730')
    });

    robot.respond(/オシャマリ/i, (msg) => {
        msg.send('オシャマリのデータです！' + '\n' + '水' + '  ' + '60-69-69-91-81-50-420' + '  ' + 'げきりゅう/*うるおいボイス' + '\n' + 'https://yakkun.com/sm/zukan/n729')
    });


    robot.respond(/アシマリ/i, (msg) => {
        msg.send('アシマリのデータです！' + '\n' + '水' + '  ' + '50-54-54-66-56-40-320' + '  ' + 'げきりゅう/*うるおいボイス' + '\n' + 'https://yakkun.com/sm/zukan/n728')
    });

    robot.respond(/ガオガエン/i, (msg) => {
        msg.send('ガオガエンのデータです！' + '\n' + '炎/悪' + '  ' + '95-115-90-80-90-60-530' + '  ' + 'もうか/*いかく' + '\n' + 'https://yakkun.com/sm/zukan/n727')
    });

    robot.respond(/ニャヒート/i, (msg) => {
        msg.send('ニャヒートのデータです！' + '\n' + '炎' + '  ' + '65-85-50-80-50-90-420' + '  ' + 'もうか/*いかく' + '\n' + 'https://yakkun.com/sm/zukan/n726')
    });

    robot.respond(/ニャビー/i, (msg) => {
        msg.send('ニャビーのデータです！' + '\n' + '炎' + '  ' + '45-65-40-60-40-70-320' + '  ' + 'もうか/*いかく' + '\n' + 'https://yakkun.com/sm/zukan/n725')
    });

    robot.respond(/ジュナイパー/i, (msg) => {
        msg.send('ジュナイパーのデータです！' + '\n' + '草/霊' + '  ' + '78-107-75-100-100-70-530' + '  ' + 'しんりょく/*えんかく' + '\n' + 'https://yakkun.com/sm/zukan/n724')
    });

    robot.respond(/フクスロー/i, (msg) => {
        msg.send('フクスローのデータです！' + '\n' + '草/飛' + '  ' + '78-75-75-70-70-52-4200' + '  ' + 'しんりょく/*えんかく' + '\n' + 'https://yakkun.com/sm/zukan/n723')
    });

    robot.respond(/モクロー/i, (msg) => {
        msg.send('モクローのデータです！' + '\n' + '草/飛' + '  ' + '68-55-55-50-50-42-320' + '  ' + 'しんりょく/*えんかく' + '\n' + 'https://yakkun.com/sm/zukan/n722')
    });
};
