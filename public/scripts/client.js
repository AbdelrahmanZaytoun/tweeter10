/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Abdo",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@ABZAY"
      },
      "content": {
        "text": "Hello Tweeter!"
      },
      "created_at": 14611139588
    }
  ];




const createTweetElement = function(tweet) {
    let $date = Math.floor((Date.now() - tweet.created_at) / 86400000);
    let $tweet = (
      `<article class="tweet">
          <header>
            <div class="tweet-author">
              <div class="user-pic">
                <img src="${tweet.user.avatars}">
              </div>
              <div class="name">
                ${tweet.user.name}
              </div>
            </div>
            <div class="handle">${tweet.user.handle}
            </div>
          </header>
  
          <div class="tweet-text">
          ${escape(tweet.content.text)}
          </div>
  
          <footer>
            <div>${$date} days ago</div>
  
            <div class="tweet-icons">
            <i class="far fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
            </div>
  
          </footer>
  
        </article>`);
    return $tweet;
  };