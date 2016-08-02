System.register(['angular2/core', './tweet.component', './tweets.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_component_1, tweets_service_1;
    var TweetslistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            }],
        execute: function() {
            TweetslistComponent = (function () {
                function TweetslistComponent(tweetsService) {
                    this.tweets = tweetsService.getTweets();
                    console.log("All tweet", this.tweets);
                }
                TweetslistComponent = __decorate([
                    core_1.Component({
                        selector: 'tweetslist',
                        template: "<div>\n                <h1>All Tweets in Tweetslist</h1>\n                  <div *ngFor=\"#t of tweets\">\n                    <tweet [tweet]=\"t\">\n                    </tweet>\n                  </div>\n               </div>",
                        directives: [tweet_component_1.TweetComponent],
                        providers: [tweets_service_1.TweetsService]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetsService])
                ], TweetslistComponent);
                return TweetslistComponent;
            }());
            exports_1("TweetslistComponent", TweetslistComponent);
        }
    }
});
//# sourceMappingURL=tweetslist.component.js.map