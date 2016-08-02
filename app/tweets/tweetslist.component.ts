import {Component} from 'angular2/core'
import {TweetComponent} from './tweet.component'
import {TweetsService} from './tweets.service'
import {Tweet} from './tweet'

@Component({
    selector: 'tweetslist',
    template: `<div>
                <h1>All Tweets in Tweetslist</h1>
                  <div *ngFor="#t of tweets">
                    <tweet [tweet]="t">
                    </tweet>
                  </div>
               </div>`,
    directives: [TweetComponent],
    providers: [TweetsService]
})

export class TweetslistComponent {
    tweets: Tweet[]
    
    constructor(tweetsService: TweetsService) {
        this.tweets = tweetsService.getTweets();
        console.log("All tweet", this.tweets)
    }
}