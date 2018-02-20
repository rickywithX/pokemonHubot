'use scrict';
const Twitter = require('twitter');

// const client = new Twitter({
//   consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_API_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET
// });

const client = new Twitter({
  consumer_key: 'eVYvOfWbZgcug4NBK2bhIBi5L',
  consumer_secret: 'KkgIkR0QKRWhk8o9yDonGeoemoJt2rulgovmDUKM3qijz89JI2',
  access_token_key: '960387461674250241-HRyML3QWoLVdDNxkYCEOTOhD5LcgEF2',
  access_token_secret: 'er7Zrcmaur7pUa8GWaAfFKn1bGgDslQv6ZgVcuoMMOkvq'
});



function getHomeTimeLine() {
  client.get('statuses/home_timeline', {}, function (error, tweets, response) {
    if (error) console.log(error);
    console.log(tweets);
  });
}

let checkedTweets = [];
module.exports = (robot) => {
  robot.hear(/ポケモン同好会の皆さん！ポケモン公式twitterの情報を持ってきますよ！ちなみにこの文章をコピー＆ペーストしてこのチャンネルに貼り付けても、公式twitterの新しいツイートを持ってくることができますよ！/i, (msg) => {
    client.get('statuses/home_timeline', {}, function (error, tweets, response) {
      tweets.forEach(function (homeTimeLineTweet, key) {
        checkedTweets.push(homeTimeLineTweet.text);
      });
      msg.send(checkedTweets[0]);
    });
  });
};

module.exports = (robot) => {
  robot.hear(/動作を起こす為に10分に一回、この発言を受けてこのbotが発言します。この文章をコピー＆ペーストでも動作確認を行います。/i, (msg) => {
    msg.send("このbotは正常に作動しています。");
  });
};