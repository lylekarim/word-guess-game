//Computer picks a word from hiddenWords array


var hiddenWords = ['red', 'blue', 'yellow', 'green', 'orange']

// Randomly chooses a choice from the options array. This is the Computer's guess. This version that returns its result:
var computerGuess = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
console.log(computerGuess);

var hiddenWordLetters = computerGuess.split('');
var displayWord = computerGuess.split('');

var result = "";
for (i = displayWord.length - 1; i >= 0; i--) {
    displayWord.fill('-');
    result = displayWord[i] + result;
}

var listUserChoices = [];

// Creating variables to hold the number of wins, losses, and guesses remaining. 

var wins = 0;
var losses = 0;
var guessesLeft = 10;


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed, converts to lower
    var userGuess = event.key.toLowerCase();

    //add key to list of user choices array
    listUserChoices.push(userGuess);

    //check key against list of letters in hidden word

    hiddenWordLetters.indexOf() >= 0

    var letterPosition = hiddenWordLetters.indexOf(userGuess);

    var letterReplace = hiddenWordLetters[letterPosition];

    displayWord.splice(letterPosition, 1, letterReplace);



    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number



    if ((displayWord != hiddenWordLetters) && (guessesLeft > 1)) {
        guessesLeft--;
        result = "";
        for (i = displayWord.length - 1; i >= 0; i--) {
            result = displayWord[i] + result;
        }
    }

    else if (displayWord === hiddenWordLetters) {
        wins++;
        guessesLeft = 10;
        listUserChoices = [];
        document.getElementById('game').innerHTML = "you win! Now the game is starting over.";

        renderNewWord()
        console.log(hiddenWordLetters + " = local");
    }

    else if ((displayWord != hiddenWordLetters) && (guessesLeft === 1)) {
        guessesLeft = 10;
        listUserChoices = [];
        losses++;
        document.getElementById('game').innerHTML = "You lose! Now the game is starting over.";

        renderNewWord()
        console.log(hiddenWordLetters + " = local");

    }

    // Set the inner HTML contents of the appropriate divs to variables

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guessesLeft;
    document.getElementById('listUserChoices').innerHTML = listUserChoices;

    document.getElementById("display-word").innerHTML = result;
}



function renderNewWord() {
    computerGuess = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
    //make letters in word display as - - - 
    displayWord = computerGuess.split('');

    var result = "";
    for (i = displayWord.length - 1; i >= 0; i--) {
        displayWord.fill('-');
        result = displayWord[i] + result;
    }
}

