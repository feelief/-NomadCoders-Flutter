const quotes = [
    {
      quote: "Don't be afraid your life will end; be afraid that it will never begin.",
      author: "Grace Hansen",
    },
    {
      quote: "Convictions are more dangerous enemies of truth than lies.",
      author: "Friedrich Nietzsche",
    },
    {
      quote: "We can draw lessons from the past, but we cannot live in it.",
      author: "Lyndon B. Johnson",
    },
    {
      quote: "Nothing is permanent in this wicked world - not even our troubles.",
      author: "Charlie Chaplin",
    },
    {
      quote: "There is no security on this earth, there is only opportunity.",
      author: "General Douglas MacArthur",
    },
    {
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    },
    {
      quote: "The value of a man resides in what he gives and not in what he is capable of receiving.",
      author: "Albert Einstein",
    },
    {
      quote: "Put yourself on view. This brings your talents to light.",
      author: "Baltasar Gracian",
    },
    {
      quote: "Better a diamond with a flaw than a pebble without.",
      author: "Confucius",
    },
    {
      quote: "A good plan, violently executed now, is better than a perfect plan next week.",
      author: "George S. Patton",
    }
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const chosenQ = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = chosenQ.quote;
author.innerText = chosenQ.author;