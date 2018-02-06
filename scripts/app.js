'use scrict';
const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: 'eVYvOfWbZgcug4NBK2bhIBi5L',
    consumer_secret: 'KkgIkR0QKRWhk8o9yDonGeoemoJt2rulgovmDUKM3qijz89JI2',
    access_token_key: '960387461674250241-HRyML3QWoLVdDNxkYCEOTOhD5LcgEF2',
    access_token_secret: 'er7Zrcmaur7pUa8GWaAfFKn1bGgDslQv6ZgVcuoMMOkvq'
});

module.exports = (robot) => {
    robot.respond(/twitter/i, (msg) => {
        client.get('statuses/home_timeline', {}, function (error, tweets, response) {
            if (error) msg.send(error);
            msg.send(tweets);
        });
    });
};