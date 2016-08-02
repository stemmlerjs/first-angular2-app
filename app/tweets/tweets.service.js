System.register(['./tweet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tweet_1;
    var TweetsService;
    return {
        setters:[
            function (tweet_1_1) {
                tweet_1 = tweet_1_1;
            }],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
                    return [
                        new tweet_1.Tweet('This is a really cool first tweet', '@kstemmler', 'http://lorempixel.com/100/100/people?1'),
                        new tweet_1.Tweet('OK, just played CS Go.', '@imran443', 'http://lorempixel.com/100/100/people?2'),
                        new tweet_1.Tweet('Goodnight!', '@blondie', 'http://lorempixel.com/100/100/people?3')
                    ];
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map