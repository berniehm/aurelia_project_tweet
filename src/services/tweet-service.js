export default class TweetService {

  tweets = [];


  tweeters = [
    {
      firstName: 'Lisa',
      lastName: 'Simpson'
    },
    {
      firstName: 'Bart',
      lastName: 'Simpson'
    }
  ];
  selectedTweeter = this.tweeters[0];

  tweet(tweeter) {
    let tweet = {

      tweeter: tweeter
    };
    this.tweets.push(tweet);
    console.log(  ' tweeted by ' + tweeter.firstName + ' ' + tweeter.lastName);
  }
}
