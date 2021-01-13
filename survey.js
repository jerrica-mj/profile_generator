// FUN PROFILE GENERATOR CHALLENGE
// Create a handy profile generator to make fun and quirky descriptions for online profiles.

// // Ex.: Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

// Create a quick survey app to ask the user questions like their favourite music, activity, food, sport, etc.
// It will then generate a profile description for them to use online, like the example demonstrated above.


// READLINE
// Use the readline module in Node to read one line at a time, instead of one character at a time as we've done directly with stdin
// Readline can use any input stream, including stdin
const readline = require("readline");

// Create an object with readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user a question and add the input to the object
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  // TODO: Ask the next question
  rl.question("What's an activity you like doing? ", (activity) => {
    // TODO: Ask the next question
    rl.question("What do you listen to while doing that? ", (music) => {
      // TODO: Ask the next question
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        // TODO: Ask the next question
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          // TODO: Ask the next question
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            // TODO: Ask the last question
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              // TODO: Generate and log the profile
              const profile = `${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}!`;

              console.log(`\nThanks for your answers! Take a look at your fun profile:\n${profile}`);

              // Close the readline after the last question
              rl.close();
            });
          });
        });
      });
    });
  });
});


