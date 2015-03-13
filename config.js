var slackbot = require('./lib/bot');

var config = {
    server: 'irc.freenode.com',
    nick: 'slackbot',
    username: 'slackbot',
    channels: {
        '#socrata-soda': '#dev-exp'
    },
    users: {
        '~chrismetcalf': 'chrismetcalf'
    },
    // optionals
    silent: true // keep the bot quiet
};

var slackbot = new slackbot.Bot(config);
slackbot.listen();
