import {Tweet} from './tweet'

export class TweetsService {
    getTweets() {
        return [
            new Tweet('This is a really cool first tweet', '@kstemmler', 'http://lorempixel.com/100/100/people?1'),
            new Tweet('OK, just played CS Go.', '@imran443', 'http://lorempixel.com/100/100/people?2'),
            new Tweet('Goodnight!', '@blondie', 'http://lorempixel.com/100/100/people?3')
        ]
    }
}