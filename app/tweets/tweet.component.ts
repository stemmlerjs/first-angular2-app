import {Component, Input, Output} from 'angular2/core'
import {HeartComponent} from '../heart.component'
import {Tweet} from './tweet'

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweets/tweet.template.html',
    directives: [HeartComponent]
})

export class TweetComponent {
    @Input() tweet : Tweet;
}