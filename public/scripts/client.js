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


  const renderTweets = function(tweets) {

    $('#tweets-container').empty();
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };

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


  $(document).ready(function() {

    //toggling the new tweet
    $("#down").click(function() {
      $("#new-tweet2").toggle();
    });
  
  
  
  
    //submission
    $(".new-tweet form").submit(function(event) {
  event.preventDefault();
  let textVal = $("#tweetText").val()
  let textLength = $("#tweetText").val().length
  
  
      if (textVal === '' || textVal === null || textLength > 140) {
        setTimeout(function() {
        $("#error-msg").show();
        });
         } 
         
        else {
        $.ajax({
          url: "/tweets/",
          type: "POST",
          data: $(this).serialize(),
          success: () => {
            loadtweets();
            $("#tweetText").val("");
  
    
            let textValue = $(this).val();
            let theRemaining = 140 - textValue.length;
  
            let theCounter= $(this).closest("form").find(".counter");
            theCounter.text(theRemaining);
          }
        });
      }
    });
  
    const loadtweets = () => {
      $.ajax("/tweets/", { method: "GET" })
        .then(function(data) {
          renderTweets(data);
        }
        );
    };
  
    loadtweets();
  });
  
  
  
  
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  