const quotes = [
     {
          quote:"Life is what happens to you while you’re busy making other plans.",
          author:"John Lennon"
     },
     {
          quote:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
          author:"Jesus"

     },
     {
          quote:"Go confidently in the direction of your dreams. Live the life you have imagined.",
          author:"Henry David Thoreau"
     },
     {
          quote:"I am not a product of my circumstances. I am a product of my decisions.",
          author:"Stephen Covey"
     },
     {
          quote:"Every strike brings me closer to the next home run.",
          author:"Babe Ruth"
     },
     {
          quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
          author:"Martin Luther King Jr"
     },
     {
          quote:"Eighty percent of success is showing up.",
          author:"Woody Allen"
     },
     {
          quote:"The best revenge is massive success.",
          author:"Frank Sinatra"
     },
     {
          quote:"Either you run the day, or the day runs you.",
          author:"Jim Rohn"
     },
     {
          quote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
          author:"Mark Twain"
     },
];
const button = document.querySelector("a")
const quoteText = document.querySelector("p");
const authorName = document.querySelector("h3")
button.addEventListener("click" , ()=>{
     let randomQuote = Math.floor((Math.random()*quotes.length)+0);
     quoteText.innerText = quotes[randomQuote].quote
     authorName.innerText = quotes[randomQuote].author
})