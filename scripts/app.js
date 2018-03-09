'use scrict';
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_API_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET
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

