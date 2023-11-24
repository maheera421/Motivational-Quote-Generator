// motivational-quote-generator/index.js

function getRandomMotivationalQuote(callback) {
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "Believe you can and you're halfway there. -Theodore Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill"
    ];
  
    const promise = new Promise((resolve, reject) => {
      // Simulating a delay (e.g., fetching from an API)
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        resolve(randomQuote);
      }, 2000); // Simulating a 2-second delay
    });
  
    // Using a callback function if provided
    if (callback && typeof callback === 'function') {
      promise.then(quote => callback(null, quote))
             .catch(error => callback(error, null));
    }
  
    return promise;
  }
  
  module.exports = {
    getRandomMotivationalQuote,
  };
  