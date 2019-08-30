var computerChoices = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var yourChoices = []


var wins = 0;
var losses = 0;
var guessesLeft = 9;


var directionsText = document.getElementById("questions");
var userChoiceText = document.getElementById("userschoice");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses");






var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);



document.onkeyup = function (event) {
    var userGuess = event.key;
    yourChoices.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        yourChoices = [];
        guessesLeft = 9;
        console.log(computerGuess);


    } else {
        guessesLeft = guessesLeft - 1;
    }
    if (guessesLeft === 0) {
        losses++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        yourChoices = [];
        guessesLeft = 9;


    }



    directionsText.textContent = "";
    userChoiceText.textContent = "Your Choices: " + yourChoices;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "guesses left: " + guessesLeft;
}
