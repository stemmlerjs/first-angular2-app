export class Tweet {
    tweetText : String;
    twitterHandle : String; 
    profilePicUrl : String;

    constructor(tweetText : String, twitterHandle : String, profilePicUrl : String) {
        this.tweetText = tweetText;
        this.twitterHandle = twitterHandle
        this.profilePicUrl = profilePicUrl
    }
}