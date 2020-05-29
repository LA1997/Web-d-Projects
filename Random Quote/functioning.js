var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

var quotes = ['If you want to shine like a sun, first burn like a sun.',"You cannot escape the responsibility of tomorrow by evading it today.","Try not to become a man of success, but rather try to become a man of value.","Treatment without prevention is simply unsustainable.","In order to carry a positive action we must develop here a positive vision.","No dream is too big. No challenge is too great. Nothing we want for our future is beyond our reach.","Mystery creates wonder and wonder is the basis of man's desire to understand.","The language of friendship is not words but meanings.","If you want to see the true measure of a man, watch how he treats his inferiors, not his equals.","If you aren't in the moment, you are either looking forward to uncertainty, or back to pain and regret.","Tears come from the heart and not from the brain.","The weak can never forgive. Forgiveness is the attribute of the strong.","Innovation distinguishes between a leader and a follower.","People won't have time for you if you are always angry or complaining.","He who knows best knows how little he knows, So keep on learning."];

var authors = [" A.P.J. Abdul Kalam"," Abraham Lincoln"," Albert Einstein"," Bill Gates"," Dalai Lama"," Donald Trump"," Neil Armstrong"," Henry David Thoreau"," J. K. Rowling"," Jim Carrey"," Leonardo da Vinci"," Mahatma Gandhi"," Steve Jobs"," Stephen Hawking"," Thomas Jefferson"];
var currentQuotei = 0;
var currentAuthori = 0;

 
$(document).ready(function() {
    getQuote();
    $('#new-quote').on('click', getQuote);
 
});
function tweetIt(){
    var phrase = document.getElementById('txt').innerHTML + " by " + document.getElementById('atr').innerHTML;
    var tweetUrl = 'https://twitter.com/share?text=' +
                encodeURIComponent(phrase)+'.' + '&url=' +
                'http://127.0.0.1:62463/index.html';
  window.open(tweetUrl);
}
function getQuote() {
      
    var color = Math.floor(Math.random() * colors.length);
    
    $('#back').css("background-color",colors[color]);
    $('.text').css("color",colors[color]);
    $('#tweet-quote').css("background-color",colors[color]);
    $('#new-quote').css("background-color",colors[color]);
    
    
    var quotei = Math.floor(Math.random() * quotes.length);
    while(quotei == currentQuotei){
    quotei = Math.floor(Math.random() * quotes.length);
    }
    currentQuotei = quotei;
    $(".text").html(quotes[quotei]);
    $(".author").html(authors[quotei]);
}
