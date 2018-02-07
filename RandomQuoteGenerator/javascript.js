var quote;
$(document).ready(function(){
  $.ajaxSetup({cache: false});

  getQuote();

  $("#new-quote").on("click", function(){
    getQuote();
  });

   $("#tweet-btn").on("click", function(){
    tweetQuote();
  });

  function getQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts? filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
      $("#quote-text").html(a[0].content.replace(/<.*?>/gm, ''));
            $("#author-text").html(a[0].title);
      quote = encodeURIComponent($("#quote-text").text() + " - " + $("#author-text").text());
      });
    }

  function tweetQuote(){
    window.open("https://twitter.com/intent/tweet?&original_referer=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text="+quote);
  }
});
