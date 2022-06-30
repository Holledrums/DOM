const jokes = require("jokes");
const rmeme = require("rmeme");

const joke = jokes();

console.log(joke.text);

const dailyJoke = document.querySelector("#joke");

dailyJoke.textContent = joke.text;

rmeme
  .meme()
  .then((url) => {
    const meme = document.querySelector("#meme");
    meme.src = url;
  })
  .catch((error) => console.log(error));

console.log("I see U");
