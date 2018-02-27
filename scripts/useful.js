'use strict';

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
    //botの使い方
    robot.respond(/ポケモン/i, (msg) => {
        const message = `こんにちは!! このbotができることを紹介します!!\n・1時間に一回、ポケモン公式ツイッターの最新ツイートをこのチャンネルに呟きます。\n・このbotにメンションをかけながら、特定の単語を入力すると、その単語にあったURLを教えてくれます。\n     特定の単語[公式,攻略,GO,天国,計算,pgl,ものおき] \n・メンションを付けてポケモンの名前を入力すると、そのポケモンの情報を教えてくれます。(カントー、アローラ図鑑の一部ポケモンのみ。全ポケモン実装予定)`
        msg.send(message);
    });
    //部屋に入ったユーザーへの案内
    robot.enter((msg) => {
        const username = msg.message.user.profile.display_name;
        const message = `こんにちは!!${username}さん!! ポケモン同好会へようこそ！ このbotができることを紹介します!!\n・1時間に一回、ポケモン公式ツイッターの最新ツイートをこのチャンネルに呟きます。\n・このbotにメンションをかけながら、特定の単語を入力すると、その単語にあったURLを教えてくれます。\n     特定の単語[公式,攻略,GO,天国,計算,pgl,ものおき]・メンションを付けてポケモンの名前を入力すると、そのポケモンの情報を教えてくれます。(カントー、アローラ図鑑の一部ポケモンのみ。全ポケモン実装予定)`
        msg.send(message);
    });
};