import {inject} from 'aurelia-framework';
import TweetService from '../services/tweet-service.js';
export class Tweet {

  text = '';
  tweeter = [];
  constructor(ts) {
    this.tweetService = ts;
    this.tweeter = ds.tweeter;
    this.selectedTweeter = this.tweeter[0];
  }
  makeTweet() {
    this.tweetService.sendTweet(this.tweeter, this.text);
    this.text = '';
  }
}
