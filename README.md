# Motivational-Quote-Generator
The provided code in 'index.js' defines a module in Node.js for a simple motivational quote generator. The module exports a function named getRandomMotivationalQuote that generates a random quote from a predefined array. The code also supports providing a callback function for handling the result and utilizes promises for asynchronous operations. The code is then imported and used inside 'script.js'.

Explanation:

1. **`getRandomMotivationalQuote` Function:**
   - This function generates a random motivational quote from the `quotes` array.
   - It uses a `Promise` to handle the asynchronous operation, simulating a delay of 2 seconds.
   - The `resolve` function is called with the randomly selected quote when the asynchronous operation is successful.
   - The `reject` function is not used in this case but could be used for error handling in a more complex scenario.

2. **Callback Support:**
   - The function supports an optional `callback` parameter. If a callback function is provided and is a valid function, it is called with the result (quote) when the asynchronous operation completes. If an error occurs, the callback is called with the error.

3. **Exporting the Function:**
   - The `getRandomMotivationalQuote` function is exported as part of the module using `module.exports`. This allows other files to use the function by importing this module.

4. **Quotes Array:**
   - The array `quotes` contains predefined motivational quotes.

Overall, this module provides a simple way to fetch a random motivational quote asynchronously, either using promises or callbacks, depending on the user's preference. The module is installed and used in 'script.js'.
