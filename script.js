const { getRandomMotivationalQuote } = require('motivational-quote-generator');

getRandomMotivationalQuote()
  .then(quote => {
    console.log('Motivational Quote:', quote);
  })
  .catch(error => {
    console.error('Error fetching quote:', error.message);
  });
