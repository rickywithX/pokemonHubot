'use scrict';

module.exports = (robot) => {
    robot.hear(/動作を起こす為に10分に一回、この発言を受けてこのbotが発言します。この文章をコピー＆ペーストでも動作確認を行います。/i, (msg) => {
        msg.send("このbotは正常に作動しています。");
    });
};