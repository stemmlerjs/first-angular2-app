System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet(tweetText, twitterHandle, profilePicUrl) {
                    this.tweetText = tweetText;
                    this.twitterHandle = twitterHandle;
                    this.profilePicUrl = profilePicUrl;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.js.map